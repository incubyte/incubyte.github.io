+++
title = "Objects as they are: The sorted array"
slug = "objects-as-they-are-the-sorted-array"
data = "2021-07-01"
draft = true
authors = ["Nipun Paradkar"]
+++

Imagine you want to sort an array! What do you do?

```ts
ArraySorter.sort([8, 1, 3, 9, 5, 4, 2])
```

Code like this is imperative. This doesn't sit well with the principles of OOP. OOP code is supposed to be declarative. Perhaps there's a better way to encapsulate the idea of a sorted array.

```ts
class SortedArray {
  constructor(private readonly array: number[]) {}

  get(index: number): number {
    const foundIndex = this.findIndexOfNthLargest(index + 1);

    return this.array[foundIndex];
  }

  private findIndexOfNthLargest(n: number): number {
    /**
     * Return the index of the nth largest element in the array.
     */
  }
}
```

You'd use this as:

```ts
new SortedArray([8, 1, 3, 9, 5, 4, 2]);
```

To-mae-to, to-mah-to?

Nope. The imperative code _returns_ a sorted array. The declarative code _is_ a sorted array.
