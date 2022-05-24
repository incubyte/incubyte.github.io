+++
title = "Learnings From Clean Code"
slug = "learnings-from-clean-code"
date = 2022-04-29T11:55:43+05:30
image = "/images/2021/07/demo.jpg"
draft = true
authors = ["Jaymin Shah", "Abhishek Keshri"]
description = "Things we learned from the book Clean Code"
tags = ["Playbook", "Software Craftsmanship", "Book Review"]
categories = ["Playbook", "Software Craftsmanship", "Book Review"]
type = ""
+++

## Learnings from Robert “Uncle Bob” Martin

Robert Martin, fondly known as “Uncle Bob” in software community, is a software engineer and more famously an author and the founding father of many software movements like software craftsmanship, agile methodology, and test-driven development. 
Some of his most famous works include Clean Code, The Clean Coder, Clean Architecture, and Clean Agile. 
Martin is also a frequent instructor, with the ability to boil down difficult topics into a simple, understandable format, along with occasional cheeky humor.

One of the most striking qualities of Martin – in all of his writing and lectures, is that nowhere does he claims to have a full-proof solution or a doctrine that could solve all software development problems. 
He acknowledges that the teachings and lessons are ones he acquired from his 40+ years of experience and encourages reader to validate the “time-testiness” and accuracy of those lessons. 
One of the qualities of a software craftsperson, according to Martin, is adapting to changing times and let go of irrelevant principles.

This article can be thought of as a list of learnings from the book Clean Code. 
By no means this is an exhaustive list, but rather a list of all lessons which had the most impact while reading.

### 1. The Meaning of Clean Code

Uncle Bob starts off the book by exploring the term itself. 
Without stating a single clear-cut definition, he presents varied definitions from the perspective of different computer scientists. 
Reading through them, one can figure out common themes and characteristics that appear repeatedly – readability, straightforward, maintainable, reads like prose, and doesn’t contain duplication. 

Thus, we infer that clean code has more to do with writing understandable code which is both easily maintainable and changeable, against clever logic which is harder to maintain.

### 2. Duplication is the Evil

Uncle Bob goes on a length about various characteristics of bad code. 
Amongst them, code duplication holds a special spot, because majority of code problems have their origins linked to duplication. 
It has inspired many coding patterns, techniques, and ideologies. 

For example, database normalization techniques (1NF, 2NF, 3NF…) by Codd are ultimately about removing redundancy in database design. 

In fact, paradigms like OOP, AOP, COP, and Structured Programming, are all different ways to deal with duplication. 
Duplications can be of different types, the most obvious one being repetition of the same lines of code. 
A more subtle form of duplication includes a chain of if/else statements that test the same conditions over and over. 

In some cases, embracing duplication might be the way to go. 
An example would be hitting a deadline. 
If duplicating code helps in achieving a target, the pragmatic course of action would be to allow duplication and treat it as a technical debt. 
The only risk with this approach is that the duplication is never removed, and it keeps getting accumulated. 
So, one of the primary tasks while writing a piece of software is to be mindful of code duplication.

### 3. One and Only One

Similar phrases appear quite often in the book –

`“Classes should have only one reason to change”`

`“A single source file should contain only one language”`

`“Functions should descend only one abstraction level”`

`“One assert statement per test”`

In essence, we can conclude that doing more than one thing at a time, or trying to “juggle” multiple things will ultimately lead to poor code quality and make the code less flexible. 
By making sure that we keep things simple, it makes life easier for the entire team.

### 4. F.I.R.S.T Principle for Tests

Writing tests is often seen as something which takes a lot of time and doesn’t serve a real purpose.

`“I wrote the code, I know it works… Don’t you trust me?”`

However, that’s far from truth, writing tests unravels many aspects we would have not uncovered otherwise. 
A good test suite could be a challenge to write, but the F.I.R.S.T. principle can help us out:

* Fast – Tests should run fast. If they are slow, nobody would want to run them.
* Independent – Each test should be independent of other tests, and they should be isolated enough to be run individually.
* Repeatable – They should be environment-independent. Should run on dev, prod, QA, etc.
* Self-Validating – The test should either pass or fail. Anything in between means more time would be wasted on reading log messages.
* Timely – Unit tests should be written before writing the production code. Tests serve their purpose only when written in a timely manner.

### 5. Clean Code and Concurrency

Coding is hard enough without concurrency. 
It has its unique challenges – complexity, overhead, non-repeatability of bugs, etc. and as such it requires a fundamental change in the design strategy. 
That being said, some principles must be followed if we want to include concurrency in our system:

* Single Responsibility Principle – Keep concurrent code separate from non-concurrent code
* Encapsulation – Limit access to the shared data
* Know the Library – Understand the concurrency library inside-out
* Keep It Simple, Silly – Make sure that non-concurrent code runs and functions properly first
* Platforms – Run your concurrent code on different platforms
* Go back to the basics – Problems like Consumer-Producer, Dining Philosophers, and Reader-Writers are a good start for selecting an execution method for concurrent code

## Conclusion

This article is a very condensed summary of the complete book, highlighting some of the most essential principles. 
The underlying principles, in all these cases though, remain somewhat same – a combination of the following principle - Do Not Repeat (`DRY`), Keep it Simple Silly (`KISS`) and You Ain’t Gonna Need It (`YAGNI`).

This book has a lot more to offer including error handling, writing effective comments, meaningful comments, unit testing, etc. 
We definitely recommend reading this by yourself for better insights.  