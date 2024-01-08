+++
title = "Learnings From Clean Code"
slug = "learnings-from-clean-code"
date = 2022-04-29T11:55:43+05:30
image = "/images/2022/04/clean-code.jpg"
draft = false
authors = ["Jaymin Shah"]
description = "Things we learned from the book Clean Code"
tags = ["Playbook", "Software Craftsmanship", "Book Review"]
categories = ["Playbook", "Software Craftsmanship", "Book Review"]
type = ""
+++

## Learnings from Robert “Uncle Bob” Martin

Robert Martin, fondly known as “Uncle Bob” in our community, is a software engineer and more famously an author and one of the founding fathers of Software Craftsmanship movement.

Some of his most famous works include Clean Code, The Clean Coder, Clean Architecture, and Clean Agile. Martin is also a frequent instructor, with the ability to boil down difficult topics into a simple, understandable format, along with occasional cheeky humor.

One of the most striking qualities of Martin – in all of his writing and lectures, is that nowhere does he claims to have a full-proof solution or a doctrine that could solve all software development problems. He acknowledges that the teachings and lessons are ones he acquired from his 40+ years of experience and encourages the reader to validate the “time-testiness” and accuracy of those lessons. One of the qualities of a software craftsperson, according to Martin, is adapting to changing times and letting go of irrelevant principles.

This article can be thought of as a list of learnings from the book Clean Code. By no means this is an exhaustive list, but rather a list of all lessons which had the most impact (personally) while reading.

### 1. The Meaning of Clean Code

Uncle Bob starts off the book by exploring the term itself.
Without stating a single clear-cut definition, he presents various definitions from prominent computer scientists.
Reading this, one can figure out common themes and characteristics that define 'Clean Code' as being – readable, straightforward, maintainable, reads like prose, and doesn’t contain duplication.

Core learning: Clean code has more to do with writing understandable code which is both easily maintainable and changeable, versus clever (read complicated) logic which is harder to maintain.

### 2. Duplication is the Evil

Uncle Bob goes on a length about various characteristics of bad code.
Amongst them, code duplication holds a special spot, because the majority of code problems have their origins linked to duplication.
It has inspired many coding patterns, techniques, and ideologies.

For example, database normalization techniques (1NF, 2NF, 3NF…) by Codd are ultimately about removing redundancy in database design.

In fact, paradigms like OOP, AOP, COP, and Structured Programming, are all different ways to deal with duplication.
Duplications can be of different types, the most obvious one being the repetition of the same lines of code.
A more subtle form of duplication includes a chain of if/else statements that test the same conditions over and over.

In some cases, embracing duplication might be the way to go. An example would be hitting a deadline.
An example would be hitting a deadline.
If duplicating code helps in achieving a target, the pragmatic course of action would be to allow duplication and treat it as a technical debt (that needs to be addressed later).
The only risk with this approach is that the duplication is never removed, and it keeps getting accumulated.

Core learning: While writing a piece of software, be mindful of code duplication.

### 3. One and Only One

Similar phrases appear quite often in the book –

`“Classes should have only one reason to change”`

`“A single source file should contain only one language”`

`“Functions should descend only one abstraction level”`

`“One assert statement per test”`

Core learning: Doing more than one thing at a time, or trying to “juggle” multiple things will ultimately lead to poor code quality and make the code less flexible. Making sure that we keep things simple, it makes life easier for the entire team.

### 4. F.I.R.S.T Principle for Tests

Writing tests is often seen as something which takes a lot of time and doesn’t serve a real purpose.

`“I wrote the code, I know it works… Don’t you trust me?”`

However, that’s far from the truth, writing tests unravels many aspects we would have not uncovered otherwise.
A good test suite could be a challenge to write, but the F.I.R.S.T. principle can help us out:

- Fast – Tests should run fast. If they are slow, nobody would want to run them.
- Independent – Each test should be independent of other tests, and they should be isolated enough to be run individually.
- Repeatable – They should be environment-independent. Should run on dev, prod, QA, etc.
- Self-Validating – The test should either pass or fail. Anything in between means more time would be wasted on reading log messages.
- Timely – Unit tests should be written before writing the production code. Tests serve their purpose only when written in a timely manner.

Core learning: Having a good test suit is important.

### 5. Clean Code and Concurrency

Coding is hard enough without concurrency.
It has its unique challenges – complexity, overhead, non-repeatability of bugs, etc. and as such it requires a fundamental change in the design strategy.
That being said, some principles must be followed if we want to include concurrency in our system:

- Single Responsibility Principle – Keep concurrent code separate from non-concurrent code
- Encapsulation – Limit access to the shared data
- Know the Library – Understand the concurrency library inside-out
- Keep It Simple, Silly – Make sure that non-concurrent code runs and functions properly first
- Platforms – Run your concurrent code on different platforms
- Go back to the basics – Problems like Consumer-Producer, Dining Philosophers, and Reader-Writers are a good start for selecting an execution method for concurrent code

Core learning: Follow best practices.

## Conclusion

This article is a condensed summary of the complete book, highlighting some of the more essential & impactful principles.
The underlying principles remain somewhat the same throughout the book – a combination of the following principle - Do Not Repeat (`DRY`), Keep it Simple Silly (`KISS`) and You Ain’t Gonna Need It (`YAGNI`).

This book has a lot more to offer including error handling, writing effective comments, meaningful comments, unit testing, etc.
We definitely recommend reading this by yourself for better insights!
