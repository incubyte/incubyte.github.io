+++
author = "Abhishek Keshri"
categories = ["Careers", "Software Craftsmanship"]
date = 2021-09-21T00:00:00Z
description = "Incubyte TDD Assessment for software craftspersons"
draft = false
image = "/images/2021/09/laptop-plant.jpg"
slug = "tdd-assessment"
tags = ["Careers", "Software Craftsmanship", "TDD"]
title = "Incubyte TDD Assessment"
authorLink = "https://github.com/2kabhishek"

+++

# Incubyte TDD Assessment

Hello there and Welcome to the Incubyte TDD Assessment!

First of all we want to thank you for deciding to take this assessment, we are going to do our best to make this assessment full of learning and fun for you.

At Incubyte your first step is a programming assessment which will be followed by two pair programming/discussion sessions.

The assessment itself is a TDD (Test-Driven Development) kata, TDD is one of the core values at Incubyte.

## Who is this assessment for?

We do not believe in conventional tech interviews as we think they are inherently flawed, simply because much of the questions asked during these interviews is just a search away. As software developers searching the internet is something of a necessity and vital for our job.

Most of the information you need to prepare for the assessment is already available on the internet.You can visit our [inspiration](https://incubyte.co/inspiration/) page to find some useful talks and books.

From this assessment we want to get you to learn how to write tests, how to write code that is easy to test and how to write code that is easy to read. We want to know if you have the Software Craftsperson mentality or not.

A Software Craftsperson is a person who has a strong commitment to the craft of software development, someone who is passionate about the craft and has a strong sense of what it is they are doing. They are able to write quality code and are passionate about the process of creating software, they know there tools well and are able to use them effectively and ultimately people who are passionate about learning and growing.

## String Calculator TDD Kata

1. Create a simple String calculator with a method signature:

    ```java
    int Add(string numbers)
    ```

    The method can take up to two numbers, separated by commas, and will return their sum.

    For example `""` or `"1"` or `"1,2"` as inputs. (for an empty string it will return 0)

    Hints:

    - Start with the simplest test case of an empty string and move to one and two numbers
    - Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
    - Remember to refactor after each passing test

2. Allow the Add method to handle an unknown amount of numbers

3. Allow the Add method to handle new lines between numbers (instead of commas).

    - The following input is ok: `"1\n2,3"` (will equal 6)
    - The following input is NOT ok: `"1,\n"` (not need to prove it - just clarifying)

4. Support different delimiters

    - To change a delimiter, the beginning of the string will contain a separate line that looks like this: `"//[delimiter]\n[numbers…]"` for example `"//;\n1;2"` should return three where the default delimiter is `";"`
    - The first line is optional. all existing scenarios should still be supported

5. Calling Add with a negative number will throw an exception `"negatives not allowed"` - and the negative that was passed.

    If there are multiple negatives, show all of them in the exception message.

## How to submit the assessment?

1. Create a git repository on GitHub/GitLab.
2. Clone the repository to your local machine.
3. Follow best practices for TDD, git and commit often.
4. Push your changes to GitHub/GitLab.
5. Send us a link to your repository.

> Although there are no strict rules about the language you can use for the assessment, we recommend you use `Java`.

## How will we grade your work?

- The quality of your code and unit tests.
- Whether you have used the best practices for TDD, git, Java.
- Extra points for good documentation. (Hint: README.md)

## What if I have questions?

Feel free to ask us anything! We are [here](mailto:hello@incubyte.co) to help.
