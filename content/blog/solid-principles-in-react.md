+++
title = "SOLID Principles in React: A Simple and Practical Guide"
slug = "solid-principles-in-react-a-simple-and-practical-guide"
date = 2024-09-05T13:48:15+05:30
image = "/images/2024/solid-principles-in-react/header.jpg"
draft = true
authors = ["Deepak Sisodiya"]
description = ""
tags = ["React", "SOLID Principles"]
categories = ["React", "SOLID Principles"]
type = ""
+++

As a React developer, writing clean and maintainable code is crucial, and this is where the SOLID principles come in. SOLID is an acronym representing five core principles that help developers build robust, scalable, and flexible software. Even though SOLID was originally designed for object-oriented programming, we can apply it effectively to modern JavaScript frameworks like React.

In this article, we’ll break down each principle in simple terms, followed by practical React examples. By the end, you’ll have a clear understanding of how to apply SOLID principles to improve your React applications.

### S — Single Responsibility Principle (SRP)

> **Simple Definition:** A component should do only one thing and have one reason to change.

This is probably the easiest of the SOLID principles to grasp. In React, SRP means that each component should focus on a single responsibility or functionality. If your component is doing multiple things (e.g., rendering UI and managing API calls), it’s time to split it up.

SRP is crucial because it makes your components easier to understand, maintain, and test. When a component does only one thing, you can isolate issues and change its behavior without affecting other parts of the code.

**Example:** Imagine a component that fetches and displays user data.

Violating SRP:

```react
function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return <div>{user ? user.name : 'Loading...'}</div>;
}
```

This component is responsible for both fetching data and rendering it, which violates SRP.

Applying SRP:

```react
// Custom Hook for fetching data
function useUserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return user;
}

// UI Component
function UserProfile() {
  const user = useUserData();
  return <div>{user ? user.name : 'Loading...'}</div>;
}
```

Now, the data-fetching logic is moved into a custom hook, leaving the `UserProfile` component with the sole responsibility of rendering UI.

### O — Open/Closed Principle (OCP)

> **Simple Definition:** Your components should be open for extension but closed for modification.

In React, this means we should be able to extend the behavior of a component without modifying its original code. Instead of editing a component directly, we can extend its functionality by passing props, using higher-order components (HOCs), or using composition.

Think of using an npm package, like `react-router-dom`, to manage routing in your React app. Instead of modifying the source code of the package, you extend its behavior by using its API. This is the perfect example of the Open/Closed Principle in practice.

**Example:**

Violating OCP:

```react
function Button({ label, color }) {
  return <button style={{ backgroundColor: color }}>{label}</button>;
}

// If we want to add a new style, we would modify the Button component.
```

Applying OCP:

```react
function Button({ label, style }) {
  return <button style={style}>{label}</button>;
}

function PrimaryButton(props) {
  return <Button {...props} style={{ backgroundColor: 'blue' }} />;
}

function DangerButton(props) {
  return <Button {...props} style={{ backgroundColor: 'red' }} />;
}
```

Now, we can extend the button functionality by creating new components (`PrimaryButton` or `DangerButton`) without modifying the original `Button` component.

### L — Liskov Substitution Principle (LSP)

> **Simple Definition:** Components should be replaceable by their subcomponents without breaking the app.

In React, this principle means that a component should be replaceable by another component that extends its behavior, without changing the expected functionality.

Here are some **real-world examples** in React to make the LSP clearer.

**Example 1: Button Component**

Let’s take a `Button` component as an example. You might create a `Button` that can be used in multiple places in your app. Then you decide to create a `PrimaryButton` and `SecondaryButton` that extend the base `Button`.

**Base Button Component:**

```react
function Button({ label, onClick, style }) {
  return <button onClick={onClick} style={style}>{label}</button>;
}
```

Extending `Button`:

```react
function PrimaryButton(props) {
  return <Button {...props} style={{ backgroundColor: 'blue', color: 'white' }} />;
}

function SecondaryButton(props) {
  return <Button {...props} style={{ backgroundColor: 'grey', color: 'white' }} />;
}
```

Now, according to LSP, both `PrimaryButton` and `SecondaryButton` should be **substitutable** for `Button`. This means wherever you use `Button`, you should also be able to use `PrimaryButton` or `SecondaryButton` without breaking anything. The behavior is consistent, even though the style has changed.

If you have a `Button` component used throughout your app, and you decide to refactor some parts to use `PrimaryButton` or `SecondaryButton`, you expect the buttons to behave the same way (click event, label display, etc.). LSP ensures that you can swap out `Button` for `PrimaryButton` or `SecondaryButton` without worrying about unintended side effects.

**Example 2: Modal Component**

Let’s say you have a base `Modal` component used to display various types of modals (e.g., confirmation modals, info modals, etc.).

Base `Modal` Component:

```react
function Modal({ isOpen, title, children, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>{title}</h2>
      <div>{children}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
```

Now, you want to create a `ConfirmationModal` that extends `Modal` and adds extra functionality like confirming or canceling an action.

**Extended Modal:**

```react
function ConfirmationModal({ isOpen, title, onConfirm, onCancel }) {
  return (
    <Modal isOpen={isOpen} title={title} onClose={onCancel}>
      <div>Are you sure?</div>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </Modal>
  );
}
```

According to LSP, the `ConfirmationModal` should work seamlessly as a replacement for the base `Modal`. Anywhere you use `Modal`, you can also use `ConfirmationModal` without breaking anything, even though `ConfirmationModal` adds extra features.

Usage Example:

```react
<Modal isOpen={isModalOpen} title="Basic Modal" onClose={handleClose}>
  <p>Some content here</p>
</Modal>

<ConfirmationModal
  isOpen={isConfirmOpen}
  title="Confirm Action"
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

Modals are commonly used in real applications for various purposes. The LSP ensures that specialized modals (like a `ConfirmationModal`) can substitute the base `Modal` component without breaking anything. The base behavior (opening, closing, displaying content) is preserved, while additional functionality (confirming or canceling) can be added seamlessly.

By following the Liskov Substitution Principle, your components will be more reusable, predictable, and easier to maintain. When you substitute one component with another, you can trust that it will work as expected, allowing for cleaner and more scalable code.

### I — Interface Segregation Principle (ISP)

> **Simple Definition:** Don’t force your components to depend on things they don’t need.

In React, this means you should create specific and focused components, passing only the necessary props. If your component has too many responsibilities or props that it doesn’t fully utilize, it’s violating ISP.

The focus of ISP is on **splitting responsibilities** in interfaces or components so that a consumer only depends on the parts it needs. It prevents the creation of large, bloated interfaces or components that do too much.

ISP might involve breaking down a single large component that handles user data, settings, and notifications into three smaller, more specific components (`UserInfo`, `UserSettings`, and `UserNotifications`). This way, each component only depends on the data and props it requires.

Example:

```react
// Violating ISP: Handling too many props
function Dashboard({ user, settings, notifications }) {
  return (
    <div>
      <div>{user.name}</div>
      <div>{settings.theme}</div>
      <div>{notifications.length} notifications</div>
    </div>
  );
}
```

This component depends on `user`, `settings`, and `notifications`, but it might not need all of them. Let’s break it down:

**Applying ISP:**

```react
function UserInfo({ user }) {
  return <div>{user.name}</div>;
}

function UserSettings({ settings }) {
  return <div>{settings.theme}</div>;
}

function UserNotifications({ notifications }) {
  return <div>{notifications.length} notifications</div>;
}

// Now Dashboard delegates responsibilities
function Dashboard({ user, settings, notifications }) {
  return (
    <div>
      <UserInfo user={user} />
      <UserSettings settings={settings} />
      <UserNotifications notifications={notifications} />
    </div>
  );
}
```

By segregating the interface (in this case, the props), the `Dashboard` component is simpler, more maintainable, and only handles what it needs.

### D — Dependency Inversion Principle (DIP)

> **Simple Definition:** High-level components should depend on abstractions (such as hooks or contexts) rather than concrete implementations (like API calls).

DIP in React means that components should rely on abstractions (like hooks, contexts, or services) instead of tightly coupling themselves to specific implementations, like API calls or local state management.

DIP focuses on **how dependencies are managed**. High-level components should not directly depend on the details of how their dependencies work. Instead, they should depend on abstractions (such as contexts, services, or hooks) that can later be provided by different concrete implementations.

DIP might involve providing an abstract data-fetching service via React’s Context API so that a component like `UserProfile` depends on a `useUserData` hook rather than directly making a fetch call. This allows the `UserProfile` component to work independently of the implementation of the data-fetching logic.

**Example Without DIP (Tight Coupling):**

```react
function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return <div>{user ? user.name : 'Loading...'}</div>;
}
```

Here, `UserProfile` is tightly coupled to the data-fetching logic, which violates DIP.

**Applying DIP (Using Abstraction):**

```react
function useUserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  return user;
}

function UserProfile() {
  const user = useUserData();
  return <div>{user ? user.name : 'Loading...'}</div>;
}
```

By abstracting the data-fetching logic into a hook (`useUserData`), `UserProfile` now depends on the abstraction rather than a specific implementation. This makes the component more flexible and testable.

**Example 2: Theming with Context**

```react
function ThemedButton() {
  const theme = useTheme(); // Hook that gets the theme from context

  return <button style={{ backgroundColor: theme.background }}>Click me</button>;
}
```

**Violation of DIP:** Here, the `ThemedButton` component is tightly coupled to the `useTheme` hook, which is a specific implementation detail. This makes it difficult to change the source of the theme or test the component with different themes.

**Improved Example:**

To correctly apply DIP, let’s use an abstraction for the theme, such as passing the theme as a prop, and decouple the `ThemedButton` component from the `useTheme` hook:

```react
function ThemedButton({ themeService }) {
  const theme = themeService.getTheme(); // themeService is an abstraction

  return <button style={{ backgroundColor: theme.background }}>Click me</button>;
}

// Usage
<ThemedButton themeService={lightThemeService} />
<ThemedButton themeService={darkThemeService} />
```

- **Abstraction:** The `ThemedButton` now depends on an abstract `themeService` rather than a specific implementation like `useTheme`. This way, you can easily swap out `themeService` for another implementation without changing the `ThemedButton` component.
- **Decoupling:** The high-level component (`ThemedButton`) is decoupled from the low-level implementation of how themes are provided (`useTheme`). Instead, it relies on an abstraction (`themeService`), which could be provided by any source.

This approach represents DIP, ensuring that the high-level modules (`ThemedButton`) are not directly dependent on low-level modules (`useTheme`), but rather on abstractions (e.g., `themeService`). This makes your components more modular, testable, and adaptable to changes.

### Conclusion

The SOLID principles might seem complex at first, but when broken down and applied in React, they are straightforward and powerful. By following these principles, you can make your React components more reusable, maintainable, and scalable.

- **Single Responsibility Principle (SRP)** keeps components focused on one task.
- **Open/Closed Principle (OCP)** allows for extending components without modifying them.
- **Liskov Substitution Principle (LSP)** ensures that components are replaceable without altering the app.
- **Interface Segregation Principle (ISP)** focuses on designing smaller, more focused **interfaces or components** that consumers depend on.
- **Dependency Inversion Principle (DIP)** focuses on making **dependencies abstract** so that high-level modules (like components) rely on abstractions (such as contexts, hooks, or service classes) rather than concrete details.

Applying these principles to your React projects will lead to cleaner and more maintainable code, making your life as a developer easier in the long run. Happy coding!
