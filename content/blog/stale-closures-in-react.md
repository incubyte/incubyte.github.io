+++
title = "Stale Closures in React: Why Your Component Sees Yesterday's State"
slug = "stale-closures-in-react"
date = 2026-05-16T10:00:00+05:30
image = "/images/2026/stale-closures-in-react/banner.png"
draft = true
authors = ["Abdul Kalam"]
description = "How JavaScript closures interact with React's render model, why your handlers sometimes read stale state, and the patterns that fix it without papering over the cause."
tags = ["React", "JavaScript", "Performance", "Software Craftsmanship"]
categories = ["React", "JavaScript", "Software Craftsmanship"]
type = ""
+++

A while back I shipped a draft-editor with auto-save. It worked fine in dev. A couple of weeks later, I noticed something off: I had lost half the post. The server said the document was empty. The browser console said the save endpoint had fired thirty-something times. Both were correct. The save function had been POSTing `{ title: '', body: '' }` every five seconds since the page loaded.

The component was re-rendering. The state was right. The save function was reading state from the moment the component mounted, and only from then.

This bug has a name. Stale closure.

## What's actually happening

Closures are a JavaScript thing, not a React thing. A function in JavaScript carries a reference to whatever variables were in scope when it was defined:

```js
function makeGreeter(name) {
  return () => console.log(`Hello, ${name}`);
}

const greet = makeGreeter('Abdul');
greet(); // "Hello, Abdul"
```

`greet` remembers `name` long after `makeGreeter` returned. Useful most of the time. Annoying when the variable a closure is holding onto is no longer the one you want.

Now add React's render model on top. Every time your component re-renders, React calls your function again from scratch. Fresh state. Fresh handlers. Fresh everything:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  // ↑ a fresh `count` on every render

  const onClick = () => console.log(count);
  // ↑ a fresh `onClick` that closes over THIS render's `count`

  return <button onClick={onClick}>{count}</button>;
}
```

When `count` flips from 0 to 1, React doesn't mutate anything. It calls `Counter()` again with a new `count` and a new `onClick`. The old `onClick` is still in memory, still pointing at its own copy of `count` (which is still `0`). It just doesn't matter, because nothing in the live UI references it anymore.

For inline handlers like the one above, this is invisible. The user always clicks the latest button, wired to the latest closure. You can't tell.

You can tell the moment something hangs onto a closure past the render that made it.

## The textbook example

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(count); // 0, 0, 0, 0, 0…
      setCount(count + 1); // stuck at 1 forever
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>;
}
```

The effect ran once. The arrow function passed to `setInterval` captured `count` when it was `0`. Every subsequent render makes a new `count`, but the interval doesn't know or care. It's still the same function from mount, still reading the same `count`.

Three places this shape shows up:

- `useEffect` with an empty or incomplete dependency array. The body is frozen at the render that scheduled it.
- Event listeners and subscriptions attached once: `window.addEventListener('scroll', handler)`, `socket.on('message', handler)`. The listener registers a specific function. New renders create new `handler` values that were never attached to anything.
- Async continuations: a `setTimeout` callback, a `.then()`, a debounced function. Whenever they eventually run, they read variables from whenever they were created.

## The fixes

### List the dependency

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 1000);
  return () => clearInterval(id);
}, [count]);
```

Works. Costs you: the interval clears and re-creates on every change to `count`. For a one-second timer, fine. For a WebSocket or a large subscription, not fine.

### Use the functional setter

```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount((current) => current + 1);
  }, 1000);
  return () => clearInterval(id);
}, []);
```

`setCount` is stable across renders. React guarantees it. The callback always gets the freshest state, so the closure question goes away. This is the right answer more often than people reach for it.

### Use a ref

Sometimes you need the latest value of a prop, or you need an effect to stay mounted but still see fresh data:

```jsx
function Chat({roomId, onMessage}) {
  const onMessageRef = useRef(onMessage);

  useEffect(() => {
    onMessageRef.current = onMessage;
  });

  useEffect(() => {
    const socket = connect(roomId);
    socket.on('message', (msg) => onMessageRef.current(msg));
    return () => socket.close();
  }, [roomId]);
}
```

The socket effect only depends on `roomId`. The message handler still calls today's `onMessage` because the ref is updated on every render. You've split "what does this effect depend on" from "what data does this effect read."

A warning here: refs sidestep React's reactivity model. Leaning on them too hard is how components turn back into imperative spaghetti. Use the ref pattern when you can't honestly list the dependency, not when you don't feel like it.

## Three places this actually bites in production

The counter is fine for explaining the mechanic. You're not shipping it.

### Auto-saving a form

```jsx
function DraftEditor({documentId}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('saved');

  useEffect(() => {
    const id = setInterval(() => {
      setStatus('saving');
      api
        .saveDraft(documentId, {title, body}) // stale
        .then(() => setStatus('saved'));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return /* …inputs… */;
}
```

This is the bug from my opening. The interval was created on mount. The function inside closed over `title` and `body` as empty strings. The user types for ten minutes. The server gets thirty POSTs full of nothing.

Adding `[title, body]` to the deps does fix it, but now the interval restarts on every keystroke. Your save cadence is no longer "every five seconds." It's "five seconds after the user stops typing." That might be what you want. Often it isn't.

Ref pattern fits here:

```jsx
function DraftEditor({documentId}) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('saved');

  const latest = useRef({title, body});
  useEffect(() => {
    latest.current = {title, body};
  });

  useEffect(() => {
    const id = setInterval(() => {
      setStatus('saving');
      api.saveDraft(documentId, latest.current).then(() => setStatus('saved'));
    }, 5000);
    return () => clearInterval(id);
  }, [documentId]);

  return /* …inputs… */;
}
```

The interval depends on `documentId`. Switching documents tears down the auto-save and starts a new one, which is what you want. The form contents come through a ref, which is always current.

### A WebSocket that doesn't know who's logged in

```jsx
function ChatRoom({roomId}) {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUser().then(setCurrentUser);
  }, []);

  useEffect(() => {
    const socket = io.connect(roomId);
    socket.on('message', (msg) => {
      const own = msg.authorId === currentUser?.id; // stale
      setMessages((prev) => [...prev, {...msg, own}]);
    });
    return () => socket.disconnect();
  }, [roomId]);

  return /* …message list… */;
}
```

`fetchUser` resolves _after_ the socket effect runs. When the socket handler is created, `currentUser` is `null`. Every incoming message gets tagged `own: false`, including the ones the user sent themselves.

Worth flagging: this one wastes your time in a particular way. The UI is broken, but the backend payload looks normal. You'll spend a while reading socket logs before it occurs to you that the bug is in the listener.

`setMessages` already uses a functional updater, so that part's fine. But `currentUser` isn't being updated by this handler, it's being read by it. Functional setState can't help. Pick: list `currentUser` in the deps and accept the reconnect, or read it through a ref. For a chat that loads once and stays open all day, the ref is the right call. For something short-lived, the reconnect is probably free.

### A global keyboard shortcut

```jsx
function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [recentQueries, setRecentQueries] = useState([]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault();
        if (!paletteOpen) {
          // stale
          analytics.track('palette_opened', {
            recent: recentQueries.length // stale
          });
          setPaletteOpen(true);
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return /* …UI… */;
}
```

`Cmd+K` opens a search palette. The listener registers once and closes over `paletteOpen === false` and `recentQueries === []`. Forever. The palette still opens (because `setPaletteOpen(true)` doesn't read the old value), but the guard above it is dead code, and the analytics event will always report zero recent queries no matter how long the user has been using the app.

Functional setState handles the guard:

```jsx
setPaletteOpen((open) => {
  if (!open) {
    analytics.track('palette_opened', {recent: latestRecent.current.length});
    return true;
  }
  return open;
});
```

`recentQueries` rides along in a ref. Same pattern as the form auto-save. The trigger here is a DOM event instead of a timer, but the fix is the same one. Closures don't care what kind of long-lived thing is holding them.

## How this connects to re-renders

If you've read [Taming React Re-renders](/blog/taming-react-re-renders/), you've seen the other side of this: new function identities every render are what break `React.memo` and bloat dependency arrays. The reason those identities are new is closures. Every render makes a new closure, even when the body looks identical.

So the same mental model handles both problems:

- A closure made in render N captures variables from render N. That's why it goes stale by render N+1.
- A closure made in render N is a different object from the one made in render N+1. That's why children see "new" props and re-render.

A memoized child re-renders anyway when its `onClick` is a fresh closure every parent render:

```jsx
const ExpensiveList = React.memo(function ExpensiveList({onItemClick}) {
  console.log('ExpensiveList render');
  return /* …a long list… */;
});

function Parent() {
  const [query, setQuery] = useState('');
  const [items] = useState(loadItems());

  // new function identity on every keystroke → memo does nothing
  const onItemClick = (id) => console.log('clicked', id);

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ExpensiveList items={items} onItemClick={onItemClick} />
    </>
  );
}
```

`useCallback` pins the closure so `React.memo` can actually do its job:

```jsx
function Parent() {
  const [query, setQuery] = useState('');
  const [items] = useState(loadItems());

  const onItemClick = useCallback((id) => {
    console.log('clicked', id);
  }, []); // no deps → same function for the life of the component

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ExpensiveList items={items} onItemClick={onItemClick} />
    </>
  );
}
```

And now the stale-closure trap is back, from the other direction. If your callback reads state or props, list them in the deps. Otherwise you have a pinned reference that's pinned to yesterday's data too:

```jsx
const onItemClick = useCallback(
  (id) => {
    console.log('clicked', id, 'while searching for', query);
  },
  [query]
); // without this, `query` is stale
```

`useCallback` doesn't make closures go away. It makes the rate at which they change match the rate at which their inputs change. Forget the deps and you've just swapped a re-render bug for a stale-data bug.

## A short checklist

When you're staring at a value that doesn't look right:

- Is the function being created in render and called immediately? You're fine. It sees the current render.
- Is it being stored somewhere that outlives the render — an effect that ran once, a listener, a timer, a Promise — and called later? Check what it captured. That's where the bug lives.
- Do you need the value you captured, or do you need the _latest_ value? Latest state → functional setter. Latest prop → list it in deps, or stash it in a ref.
- If you're disabling `react-hooks/exhaustive-deps`, you're hiding a closure bug nine times out of ten. Be honest about which time this is.

## Closing

Closures aren't a React quirk. They're a JavaScript feature that React's render model leans on more than most code does. The thing that turned this from a recurring mystery into a five-minute debug for me was internalizing that every render is a brand new closure over a brand new set of variables. After that, "why is my counter stuck" stops being a question and starts being a checklist.

If you want help spotting these as they happen, [why-did-you-render](https://github.com/welldone-software/why-did-you-render) and the React DevTools profiler will cover most of it. And when the `exhaustive-deps` lint rule complains, take the warning seriously. It's almost always pointing at something real.
