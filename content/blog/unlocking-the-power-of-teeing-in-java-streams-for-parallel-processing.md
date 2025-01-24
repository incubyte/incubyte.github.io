+++
title = "Unlocking the Power of teeing in Java Streams for Parallel Processing"
slug = "unlocking-the-power-of-teeing-in-java-streams-for-parallel-processing"
date = 2025-01-23T11:01:28+05:30
image = "/images/2025/unlocking-the-power-of-teeing-in-java-streams-for-parallel-processing/unlocking-the-power-of-teeing-in-java-streams-for-parallel-processing.jpeg"
draft = false
authors = ["Aayush Prajapati"]
description = ""
tags = ["Java", "Functional Programming"]
categories = ["Java", "Functional Programming"]
type = ""
+++

Have you ever found yourself in a situation where you need to perform two operations on the same stream of data, but you don’t want to iterate through the data twice? Maybe you’re thinking, “_I’ll need to loop over the collection once for this calculation, and again for that calculation._” That sounds like extra work, right?

Well, Java has a stream operation that can make your life a whole lot easier: **teeing**.

But what exactly is the teeing operator, and how does it work? Let's dive in!

### What Does the teeing Operator Do?

At its core, teeing is about doing two things at once.

The teeing operation allows you to apply two independent operations to the data in the same stream. After performing these operations, it combines the results into a single final result. This means you don't need to iterate over the collection twice. Cool, right?

Here’s the trick: the teeing function in Java Streams accepts three parameters:

- **First Collector**: This performs the first operation (e.g., finding the smallest value).
- **Second Collector**: This performs the second operation (e.g., finding the largest value).
- **Merger Function**: After both operations, this combines the results into a final object.

You can think of it like a Y-shaped fork in a stream: the data splits, does two different tasks, and then comes back together.

### Let's Put It to Work: Finding the Cheapest and Highest Rated Products

Let’s say we have a list of products. Each product has a price and a rating. We want to find:

- The product with the lowest price.
- The product with the highest rating.
- And we want to do it in one pass through the data. How do we do that?

```java
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class TeeingExample {

  public static void main(String[] args) {
    List<Product> products = List.of(
        new Product("Laptop", 1200, 4.5),
        new Product("Smartphone", 1000, 4.9),
        new Product("Tablet", 300, 4.0),
        new Product("Headphones", 150, 4.8),
        new Product("Monitor", 350, 4.3)
    );

    var result = products.stream()
        .collect(
            Collectors.teeing(
                Collectors.minBy(Comparator.comparingDouble(Product::price)),
                Collectors.maxBy(Comparator.comparingDouble(Product::rating)),
                (minPrice, maxRating) -> new ProductInsights(
                    minPrice.map(Product::name).orElse(""),
                    maxRating.map(Product::name).orElse("")
                )
            )
        );

    System.out.println(result);
  }

  record Product(String name, double price, double rating) {}

  record ProductInsights(String cheapestProduct, String highestRatedProduct) {
    @Override
    public String toString() {
      return "Cheapest Product: " + cheapestProduct + ", Highest Rated Product: " + highestRatedProduct;
    }
  }
}
```

### What's Happening Here?

- **First Collector:** We use Collectors.minBy() to find the product with the lowest price.
- **Second Collector:** We use Collectors.maxBy() to find the product with the highest rating.
- **Merger Function:** The (minPrice, maxRating) -> new ProductInsights(...) function combines the results into a single ProductInsights object that holds the names of the cheapest and highest-rated products.

**Output:**

```shell
Cheapest Product: Headphones, Highest Rated Product: Smartphone
```
### Performance Insights
To showcase the efficiency of the teeing operator, I tested it with a dataset of **1,000,000 products**. The results were compelling:
- The teeing operation completed in *41.8399 ms*, whereas the two-stream approach took *61.0872 ms*.
- This demonstrates that teeing is not only more elegant but also faster, thanks to its ability to process the stream in a single traversal.

It’s worth noting that performance can vary across systems due to factors like hardware, JVM optimizations, and runtime conditions. However, the teeing operator consistently shows better results, making it a great choice for scenarios involving large datasets.

For the full benchmark code and detailed setup, check out the [GitHub repository](https://github.com/AshPrajapati/Teeing-Performance-Demo/blob/main/src/main/java/teeingdemo/TeeingPerformanceExample.java).

### Why Does This Matter?

Think about this: we only had to go through the list of products once! No need to do one loop for the cheapest product and another for the highest rated product. The teeing operation lets us combine both tasks into a single, efficient pass through the data. This not only makes your code cleaner but also faster.

### Real-World Benefits of Using teeing

So, when should you use teeing? Well, here are a few cases where it shines:

- _Performing multiple independent calculations:_ Want to find the lowest price and the highest rating in a list? Use **teeing**!
- _Avoiding multiple iterations:_ If you're doing similar calculations that need separate results, teeing lets you combine them without looping twice.
- _Cleaner and more efficient code:_ The operation is concise and keeps your code from being unnecessarily verbose.

So, next time you're looking to process data in a stream and find that you need two different results, don’t fall into the trap of writing multiple loops. Use teeing to get it all done in one! It's a small trick that can make your code more elegant, faster, and easier to maintain. Give it a try!

This example is inspired by concepts from [_Functional Programming in Java, 2nd Edition by Venkat Subramaniam_](https://pragprog.com/titles/vsjava2e/functional-programming-in-java-second-edition/#:~:text=flatMapping%20and%20filtering-,Teeing%20Operations,-Wrapping%20Up), where these powerful stream techniques are explored in detail. If you're diving into Java Streams, this book is a treasure trove of insights that will level up your functional programming skills!
