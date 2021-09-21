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

Hello there and welcome to the Incubyte TDD Kata!

This assessment is the first step in our recruiting process and will be followed by two pair programming/discussion sessions.

## What we’re looking for

A Software Craftsperson at Incubyte is a person who has a strong commitment to the craft of software development. Someone who is passionate about software, knows her/his tools well and is able to use them effectively to create carefully crafted software. Ultimately, a person who has a strong sense of what it is they are doing and is self-motivated to learn and grow.

TDD is a core practice for all of us at Incubyte. We strongly believe that well written software, is a lot more valuable for the business and end users, as compared to software that is hacked together (but works!).

Through this assessment, we want to evaluate how readable and testable your code is. We want see the Software Craftsperson in you.

As software developers searching the internet is something of a necessity and vital for our job. We encourage you to Google away! You can also visit our [inspiration](https://incubyte.co/inspiration/) page to find some useful talks and references that will help you through this assessment.

With that, let's jump right in! Follow the instructions below, take your time to do it well and send us your kata once you’re happy with what you’ve done.

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

> Want more? Check out [TDD Kata 1](https://osherove.com/tdd-kata-1/) for the full version.

## Submitting the assessment

1. Create a git repository on GitHub/GitLab.
2. Clone the repository to your local machine.
3. Follow best practices for TDD, git and commit often.
4. Push your changes to GitHub/GitLab.
5. Send us a link to your repository.

> We encourage you to use the programming language you feel most comfortable with.

## Have questions?

Feel free to ask us anything! We are [here](mailto:careers@incubyte.co) to help.
