+++
title = "Taming React Re-renders: A Guide to Optimizing Performance"
slug = "taming-react-re-renders"
date = 2025-06-11T20:48:34+05:30
image = "/images/2025/taming-react-re-renders/header.jpg"
draft = true
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
    setTodos([...todos, text]);
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
  console.log('Rendering list');
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
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

- **Parent updates** cause child re-renders

{{< figure src="/images/2025/taming-react-re-renders/parent-example.jpg" caption="" >}}

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

## The "Big Re-renders" Myth

Many developers worry about "big" components causing performance issues. But here's the truth: React's diffing algorithm is very efficient! Even lists with dozens of items render quickly.

{{< figure src="/images/2025/taming-react-re-renders/props-myth.jpg" caption="" >}}

Instead of worrying about component size, focus on:

- Optimizing parent components
- Stabilizing prop references
- Using memoization when it makes sense

Here's how to use memoization:

```jsx
const MemoizedList = React.memo(function ({items}) {
  console.log('List render');
  return;
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

By moving state down to individual `Item` components, typing in one input only re-renders that specific item, not the entire list!

Remember: Optimizing React performance is more about understanding when and why components re-render than about complex optimizations. Start by profiling your app with React DevTools, identify the bottlenecks, and apply these strategies where they make the most sense.

Happy coding! 🚀
