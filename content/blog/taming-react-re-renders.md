+++
title = "Taming React Re-renders: A Guide to Optimizing Performance"
slug = "taming-react-re-renders"
date = 2025-10-05T20:48:34+05:30
image = "/images/2025/taming-react-re-renders/header.jpg"
draft = false
authors = ["Ajith Kumar"]
description = "A comprehensive guide to understanding and optimizing React re-renders for better application performance"
tags = ["React", "Performance", "Software Craftsmanship"]
categories = ["React", "Performance", "Software Craftsmanship"]
type = ""
+++

Have you ever noticed your React app feeling sluggish? or wondered why your components keep re-rendering when they shouldn't? You're not alone!

## The Problem: Unnecessary Re-renders

Let's start with a simple example. Imagine you're building a todo list app:

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: text
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add todo…'
      />
      <button onClick={addTodo}>Add</button>
      <TodoList items={todos} />
    </div>
  );
}

function TodoList({items}) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
```

Notice something interesting? Every time you type in the input field, the entire `TodoList` re-renders, even though you haven't added any new todos! This happens because React re-renders the parent component (`TodoApp`) when its state changes, which then re-renders all its children.

## Understanding React's Lifecycle

To fix unnecessary re-renders, we need to understand how React works. Think of React components like a tree:

- When a component first appears on screen, it **mounts**
- When its data (state or props) changes, it **updates**
- When it's removed from the screen, it **unmounts**

Here's what you need to know:

- **State changes** trigger re-renders

{{< figure src="/images/2025/taming-react-re-renders/state-changes-example.jpg" caption="" >}}

When a component's state changes, React automatically re-renders that component. This is React's way of keeping the UI in sync with your data. For example, when you type in an input field, the component holding that input's state will re-render to reflect the new value.

- **Parent updates** cause child re-renders

{{< figure src="/images/2025/taming-react-re-renders/parent-example.jpg" caption="" >}}

React follows a top-down rendering pattern. When a parent component re-renders, all of its children re-render too (unless they're memoized). This is why moving state down the component tree can be so effective - it limits the scope of re-renders to only the components that actually need to update.

- React is smart! It batches multiple state updates in event handlers into a single re-render

## Watch Out for Custom Hooks!

Custom hooks are great for reusing logic, but they can cause performance issues behind your back. Here's an example:

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}

function Header() {
  const width = useWindowWidth();
  console.log('Header render');
  return <h1>Window: {width}px</h1>;
}
```

Every time you resize your browser window, even by just 1 pixel, the `Header` component re-renders! If you use this hook in multiple components, you could end up with a lot of unnecessary re-renders.

To avoid this:

- Use throttling or debouncing for frequent updates
- Only use hooks in components that really need them

Here's how to implement throttling to prevent excessive re-renders:

```jsx
import {useState, useEffect, useRef, useCallback} from 'react';
import {throttle} from 'lodash';

function useThrottledWindowWidth(delay = 100) {
  // 1) Initialize state safely (SSR-friendly)
  const [width, setWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  // 2) Create a stable, memoized throttled handler
  const throttled = useRef(
    throttle(() => {
      setWidth(window.innerWidth);
    }, delay)
  );

  // 3) Whenever `delay` changes, re-create the throttle function
  useEffect(() => {
    throttled.current = throttle(() => setWidth(window.innerWidth), delay);
    return () => throttled.current.cancel();
  }, [delay]);

  // 4) Wire up the resize listener once
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handler = () => throttled.current();
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
      throttled.current.cancel();
    };
  }, []);

  return width;
}

// Usage remains the same:
function Header() {
  const width = useThrottledWindowWidth(100);
  console.log('Header render');
  return <h1>Window: {width}px</h1>;
}
```

## The "Big Re-renders" Myth

Many developers worry about "big" components causing performance issues. But here's the truth: React's diffing algorithm is very efficient! Even lists with dozens of items render quickly.

{{< figure src="/images/2025/taming-react-re-renders/props-myth.jpg" caption="" >}}

This image indicates that when you pass an object as a prop using an inline object literal (e.g., `<Child value={{value}} />`), a new object is created on every render, even if its values haven't changed. React uses shallow comparison to check for prop changes. Since the object reference is different on each render, React thinks the prop has changed and re-renders the child component.

Instead of worrying about component size, focus on:

- Optimizing parent components
- Stabilizing prop references
- Using memoization when it makes sense

Here's how to use memoization:

```jsx
const MemoizedList = React.memo(function ({items}) {
  console.log('List render');
  return null;
});

// In parent:
const stableItems = useMemo(() => items, [items]);
<MemoizedList items={stableItems} />;
```

## The solution: Moving State Down

One of the best ways to prevent unnecessary re-renders is to move state as close as possible to where it's used. Here's an example:

```jsx
// Before: parent holds all item-states
function Parent({initialItems}) {
  const [items, setItems] = useState(initialItems);
  return items.map((item, i) => (
    <Item
      key={i}
      item={item}
      onUpdate={(newItem) => {
        const copy = [...items];
        copy[i] = newItem;
        setItems(copy);
      }}
    />
  ));
}

// After: each Item manages its own state
function Parent({initialItems}) {
  return initialItems.map((item, i) => <Item key={i} initial={item} />);
}

function Item({initial}) {
  const [item, setItem] = useState(initial);
  return (
    <div>
      <input
        value={item.text}
        onChange={(e) => setItem({...item, text: e.target.value})}
      />
    </div>
  );
}
```

## Parting thoughts:

By moving state down to individual `Item` components, typing in one input only re-renders that specific item, not the entire list!

**Remember**: Optimizing React performance is more about understanding when and why components re-render than about complex optimizations. Start by profiling your app with [React DevTools](https://react.dev/learn/react-developer-tools), identify the bottlenecks, and apply these strategies where they make the most sense.

For even better debugging, check out [why-did-you-render](https://github.com/welldone-software/why-did-you-render) - a fantastic tool that logs when and why your components re-render, making it much easier to spot unnecessary re-renders in development.

Happy coding! 🚀
