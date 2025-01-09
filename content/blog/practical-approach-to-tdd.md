+++
authors = ["Siya Agarwal"]
categories = ["Software Craftsmanship", "TDD"]
date = 2025-01-09T00:00:00Z
description = "A deep dive and focus on the practical application on how to actually apply TDD in real-world development."
draft = false
image = "/images/2024/practical-approach-to-tdd/header_img.jpeg"
slug = "a-practical-approach-to-test-driven-development-beyond-red-green-refactor"
tags = ["Software Craftsmanship", "TDD"]
title = "A Practical Approach to Test-Driven Development: Beyond Red, Green, Refactor"
+++

In the previous [blog](https://blog.incubyte.co/blog/mastering-code-through-katas/), I shared a story about Test-Driven Development (TDD) and how it helps us create robust, maintainable software. If you haven’t read it yet, I highly recommend starting there as it introduces the philosophy behind TDD. But today, we’ll dive deeper and focus on the practical application—how to actually apply TDD in real-world development.

While the classic "Red, Green, Refactor" mantra is often repeated in TDD discussions, there's a key step I believe is missing: **integration**. So, in this blog, we’ll explore a refined sequence: **Red, Green, Integrate, Refactor, Integrate**. Let's see how these steps build on one another and the significance of micro-commits throughout this process.

#### Red: Write a Failing Test

The first step is no different than the traditional method. You start by writing a test that defines what you want your code to do. Since the functionality doesn't exist yet, this test will (and should) fail. This is your "red" phase—a clear signal that work needs to be done.

_Example_:  
Suppose you're building a function that calculates discounts for an e-commerce site. You could write a test to ensure that when a customer’s order exceeds $100, a 10% discount is applied.

```javascript
it('should apply a 10% discount when order total is over $100', () => {
  const total = calculateDiscount(150);
  expect(total).toBe(135);
});
```

This test fails because the `calculateDiscount` function doesn’t yet exist or doesn't implement the discount logic.

#### Green: Make the Test Pass (Minimum Viable Code)

Once you have a failing test, the next step is to write just enough code to make the test pass. At this stage, you’re not concerned with performance, edge cases, or elegant solutions. Your only goal is to turn the test green.

_Example_:

```javascript
function calculateDiscount(amount) {
  if (amount > 100) return amount * 0.9;
  return amount;
}
```

#### Integrate: Commit and Push

Here’s where the first **integration** comes in, which is often overlooked in traditional TDD discussions. Once your test is green, commit the code and push it to your shared repository. This isn’t about releasing the code; it’s about sharing the progress incrementally. Why is this crucial? It gives you and your team a checkpoint—a "safe state" to which you can revert if future changes cause unexpected issues.

**Micro-commits** play a key role here. Small, frequent commits help you track progress and make it easier to pinpoint where things might have gone wrong if a bug is introduced. Instead of a massive, intimidating commit with multiple changes, you have smaller, digestible ones.

#### Refactor: Clean Up the Code

With your test now passing, it's time to refactor. You’ve written the minimal code to pass the test, but it might not be the most elegant or efficient. Refactoring is about improving the structure of your code without changing its behavior. Maybe now you notice an opportunity to reuse code or reduce duplication.

This is also a good time to apply naming conventions, remove magic numbers, or even simplify logic.

_Example_:  
Perhaps you realize that the 10% discount could be made more flexible. You could refactor the function to accept a discount rate as a parameter:

```javascript
function calculateDiscount(amount, discount = 0.1) {
  if (amount > 100) return amount * (1 - discount);
  return amount;
}
```

#### Integrate Again: Ensure the System Works as a Whole

The final step is the second **integration**. After refactoring, commit your changes and run the full test suite to make sure your improvements haven’t broken other parts of the system. Once again, push the code and merge it into the main branch if all tests pass.

By integrating after refactoring, you ensure that your system remains in a functional state throughout the process, and any issues are caught early. This also prevents the dreaded scenario of "refactor hell," where you refactor for hours only to discover that everything has broken.

#### Conclusion

By expanding "Red, Green, Refactor" to include integration steps, we create a more practical approach to TDD that reflects modern software development needs. This refined process isn't just about testing—it's about building confidence in your code, one small step at a time.

While TDD might seem like extra work initially, the peace of mind from having well-tested code and the reduction in bugs make it a worthwhile activity. Start small, be consistent, and you'll find yourself writing more reliable code with fewer surprises in production.
