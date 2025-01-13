+++
authors = ["Abhishek Keshri"]
categories = ["Careers", "Software Craftsmanship"]
date = 2021-09-21T00:00:00Z
description = "Incubyte TDD Assessment for Software Craftspeople"
draft = false
image = "/images/2021/09/laptop-plant.jpg"
slug = "tdd-assessment"
tags = ["Careers", "Software Craftsmanship", "TDD"]
title = "Incubyte TDD Assessment"
+++

Hello there and welcome to the Incubyte TDD Kata!

This assessment is the first step in our recruiting process and will be followed by two pair programming/discussion sessions.

## What we’re looking for

A Software Craftsperson at Incubyte is a person who has a strong commitment to the craft of software development.
Someone who is passionate about software, knows their tools well, and is able to use them effectively to create carefully crafted software.
Ultimately, a person who has a strong sense of what they are doing and is self-motivated to learn and grow.

TDD is a core practice for all of us at Incubyte.
We strongly believe that well-written software is a lot more valuable for the business and end users, as compared to software that is hacked together (but works!).

Through this assessment, we want to evaluate how readable and testable your code is. We want to see the Software Craftsperson in you.

As software developers, searching the internet is something of a necessity and is a vital tool for being effective problem solvers.
We encourage you to Google away!
You can also visit our [inspiration](https://incubyte.co/inspiration/) page to find some useful talks and references that will help you sail through this assessment.

With that, let's jump right in!

## Things to keep in mind

1. Host your solution on a **public** GitHub/GitLab repository.
2. Follow best practices for TDD. Watch [this video](https://youtu.be/qkblc5WRn-U) to understand TDD better.
3. Commit your changes frequently, ideally after every change to show how your code evolves with every step of TDD.
4. We encourage you to use the programming language and tools you feel most comfortable with.
   If you are applying for a specific role, you might want to use the language that is most relevant to the role.
5. Do not rush, take your time. We want to see your best work!
6. Send us the link to your repo once you’re happy with what you have done, make sure to include screenshots or any other relevant information.

## String Calculator TDD Kata

### Tips:

- Start with the simplest test case of an empty string and move to one and two numbers.
- Remember to solve problems in a simple manner so that you force yourself to write tests you did not think about.
- Remember to refactor after each passing test.

### Steps:

1. Create a simple String calculator with a method signature like this:

   ```cpp
   int add(string numbers)
   ```

   - **Input:** a string of comma-separated numbers
   - **Output:** an integer, sum of the numbers

   **Examples:**

   - **Input:** "", **Output:** 0
   - **Input:** "1", **Output:** 1
   - **Input:** "1,5", **Output:** 6

2. Allow the `add` method to handle any amount of numbers.

3. Allow the `add` method to handle new lines between numbers (instead of commas). (`"1\n2,3"` should return `6`)

4. Support different delimiters:

   - To change the delimiter, the beginning of the string will contain a separate line that looks like this: `"//[delimiter]\n[numbers…]"`.
     For example, `"//;\n1;2"` where the delimiter is `";"` should return `3`.

5. Calling `add` with a negative number will throw an exception: `"negative numbers not allowed <negative_number>"`.

   - If there are multiple negative numbers, show all of them in the exception message, separated by commas.

> Want more? Check out [TDD Kata 1](https://osherove.com/tdd-kata-1/) for the full version. **Extra points** for completing all the steps!

## Have questions?

Feel free to ask us anything! We are [here](mailto:careers@incubyte.co) to help.
