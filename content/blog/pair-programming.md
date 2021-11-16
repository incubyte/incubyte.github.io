+++
title = "Pair Programming — How it works!"
slug = "pair-programming"
date = 2021-09-24T05:06:00Z
image = "/images/2021/09/pair-prog-head.jpg"
draft = false
authors = "Incubyte"
authorsLink = "https://incubyte.co"
description = "Pair programming is an eXtreme Programming practice. And in this article, we explore how pair programming really does work!"
tags = ["Software Craftsmanship", "Best Practices", "SDLC"]
categories = ["Software Craftsmanship", "Best Practices", "SDLC"]
type = ""
+++


Have you ever come across a bug that had complex logic, and was incredibly hard to fix? You are trying to chase this bug for more than several hours, but all you have is frustration and a bit of self-doubt. Now imagine you find another developer to work with you, possibly the original authors! You request her to pair with you and, swoosh, the bug gets fixed!

Two brains are (obviously) better than one and getting ideas from one another increases your chances of producing more effective solutions. You would believe this while working on complex or highly escalated issues then why not when creating and innovating new software?

{{< figure src="/images/2021/09/pair-prog-1.jpg" >}}

## So, what is Pair Programming?

Pair programming is an eXtreme Programming practice wherein two developers collaborate on a single piece of code. The developers take up either of the two roles, driver or navigator and switch frequently.

The driver is responsible for meticulously writing code while the navigator's role is to evaluate, focus on the agenda and pop in with helpful advice.

**Driver? Navigator? What??**

A few quick definitions of the terms you may encounter while exploring pair programming:

**Pair** : Two people pair programming, e.g., "The pair worked on Feature A" One of the pairing partners, e.g., "I'll discuss this with my pair" The act of pairing, e.g., "Hey, can we pair on this?"

**Pair Programming Sessions** : The duration that a pair is connected for solving problems

**Driver** : The person typing the code

**Navigator** : The navigator strategizing and helping the driver implement the strategy

## How Pair Programming really works?

The primary goal is to share ownership and product knowledge across the team, to keep development flowing and to have a healthy exchange of ideas and learnings between teammates.

The driver oversees sailing the ship (by that, I mean actually writing code) and the navigator roles include helping with directions and his pearls of wisdom (design direction or useful tips to code the right way). Both the driver and the navigator communicate on a regular basis, and switch roles often to improve their expertise and efficacy in coding.

The idea is not about making the two developers sit together and code until the task is complete. Rather, it is an amazing way, to share knowledge and discuss your approach to reduce chances of going wrong. It also helps work as a team and cultivates empathy as teammates. This becomes even more important when working remotely on a project.

## Benefits of Pair Programming

There are many benefits of pair programming, the most important ones being:

- Solutions are well thought out and are less error-prone, as more than one brain is working on solving the same problem. Features are less likely to break and there are fewer hotfixes needed in production.
- Knowledge of any solution/feature implementation is more diffused and isn't limited to a particular team member, so knowledge loss with team members leaving or time taken on knowledge transfers is minimized. In other words, having at least two people familiar with every part of the code base, rather than information living with only one person certainly helps generate quality code.
- Builds stronger connections among team members. As they interact more with each other they become more empathetic towards their co-workers and form strong bonds. This is crucial for remote organizations as it not only helps with mental health but also develops a sense of belonging.
- Time taken to fix a bug is inversely proportional to how long, after writing the code, it is found! People often believe that time taken to develop software is the same as the time taken to "type" the code. That is a wrong notion of time, as developing software means researching and analysing how to build it, writing code, testing it, releasing it and then having real users use it. Now think of the time saved when you avoided a bug, because your pair said, "Oh I think that condition may cause a null pointer exception" and you changed the code right then. That's day's worth of work saved later, but now! And avoided user frustration, an additional intangible benefit.

{{< figure src="/images/2021/09/pair-prog-2.jpg" >}}

## Is Remote Pair Programming interesting?

Pairing is a core practice at Incubyte and we have been pairing virtually since day one of our existence. In general, we utilise it to evaluate, coach and resolve complicated issues. Virtual or remote pair programming is two developers located in completely different places pairing and collaborating using a shared editor or a virtual pairing IDE plugin.

This involves challenges that are easily avoided in co-located teams, like delayed coordination, misinterpretations of verbal communication that might lead to confusion and clashes over minor issues.

That said, we understand these pitfalls and indulge in practices and tooling that help us feel less "remote". Pair programming is surely about pragmatically implementing the best possible solution, but more than that it is also about understanding each other's time and mind space and working with rhythm and empathy.

## Pair Programming Tools for Remote Pairing:

When it comes to working on a project with pair programming you can always go for standard screen sharing and remote-control tools to get the job done. Tools like MS Teams or Google Meet come to mind.

But wait! there are better tools built right into your dev environment, which are much more suited for this workflow. Some that we've explored include:

1. [Live Share](https://visualstudio.microsoft.com/services/live-share/) - Microsoft's free to use collaboration solution. Pre-installed with Visual Studio and available as an [extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) for VS Code users, has features like shared terminals, focus and follow, audio calls etc. built-in. De-facto if you use Visual Studio or VS Code. Very easy to set up and use.
2. [Code With Me](https://www.jetbrains.com/code-with-me/) - JetBrains's collaboration solution, built into all of its IDEs, has support for audio and video calls, follow, terminal sharing and a lot more. Also comes with ,an on-premise version for higher security and a standalone client as well. The standard for all the IntelliJ users and a breeze to set up.
3. [Tmux](https://github.com/tmux/tmux/wiki) - This one's for the terminal lovers out there and not recommended for the faint of heart. It will let you create a shared terminal session over ssh and you can use all your CLI tools together (vim people here?!). You can have a look at [this](https://www.hamvocke.com/blog/remote-pair-programming-with-tmux/) article to get started. Fortunately, there are tools [tmate](https://tmate.io/) and [wemux](https://github.com/zolrath/wemux) that make the process much easier. This is a much more lightweight solution compared to the others and also has very few dependencies, which makes it ideal for working on remote boxes. Unfortunately, it is also pretty bare bones, so doesn't include all the bells and whistles.

I would also love to try out [Tuple](https://tuple.app/). Eagerly waiting for their Linux client!

Of course, you can also use simple desktop sharing programs like Teams, Zoom and the likes.

## Best practices for effective pair programming

We keep refining how we pair through trial and error, as well as feedback from retrospectives. Best practices will undoubtedly differ for different teams, but here are some that we highly encourage.

### 1. Think aloud

{{< figure src="/images/2021/09/pair-prog-3.jpg" >}}

It is necessary that both the driver and navigator are on the same page. While partnering, communicating your thoughts is critical. It allows both the developers to maintain pace and work collaboratively.

Observing a little pointer on a screen can quickly result in boredom. To avoid this, make sure your partner is always aware of what you are doing. Pair programming in person is much easier. On the other hand, in virtual pairing one person appears to take over as driver/navigator for significantly longer durations. Therefore, thinking aloud, and bridging the in-person communication gap makes remote pairing less boring.

Pair programming is all about good communication so having open communication between the pairs is always encouraged. The sessions are much better if the pairs trust each other and have a safe and open space to share their ideas.

### 2. Equal participation is vital

{{< figure src="/images/2021/09/pair-prog-4.jpg" >}}

The driver owns implementation, while the navigator is analyzing the work. Switching roles frequently guarantees fair participation.

Although switching completely depends on the work, doing so every 30 minutes can keep your effort and focus at its peak. Commit frequently to maintain the flow and ensure that both of you are on the same track.

Also, it is more beneficial when the developers have a comparable skill level, so that the session doesn't lead to only one of them calling the shots and the other being just an observer and feeling dissatisfied. This is also known as "Watch the master" and has its own uses in training/mentorship.

### 3. Take coffee or tea breaks (whatever works for you)

Pair programming keeps both the individuals engaged and work-focused the entire time. After a certain point, it becomes physically and mentally draining. Taking breaks helps preserve alertness for the next round of effective pairing.

It is also preferable to unplug from the work during the break so that you can return with a fresh mind. Checking emails, calling a friend, or, as we prefer, taking a coffee break are some revitalizing activities.

### 4. Celebrate small wins

When programming in a pair, it is important to stay motivated, and one way to do so is to celebrate that one little successful compiling, that one victorious run and that one neatly written code your pair got in the first go. Appreciate your small wins, even if it is just completing a simple task. Reward yourself and your pair with a pat on the back, a break time, or whatever works best for you.

It is important to celebrate small wins, and they may eventually become the driving force for your next 5,000 lines of code! You made code work, and it is fantastic!

## Methodologies for pair programming

There are many different approaches to pair programming, we would suggest trying out a few of them and figuring out which ones work best for you.

### Ping-Pong Pairing

[TDD (Test Driven Development)](https://en.wikipedia.org/wiki/Test-driven_development) is one of the core practices we follow and this form of pairing is derived from TDD's red → green → refactor loop. The approach is pretty simple and relies on switching roles often within the pair. Suppose Sachin and Sehwag are pairing on a solution, this is how their workflow will roughly look like:

- Sachin writes the failing test case (red)
- Sehwag takes over as the driver and writes the solution (green)
- Sachin takes over and refactors the solution

These roles are then switched after every iteration. Pair rotations promote better code quality and preventing disengagement within the pair.

### Pomodoro Pairing

This approach incorporates the [Pomodoro technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) with pair programming, and it goes something like this:

- Start a timer for 25 mins
- After the time is up, step away from work for 5 mins and do something individually
- Join back in and switch roles
- Take a 20 min break after every four cycles

Similar to Ping-Pong approach this also prevents disengagement while also allowing small pockets of breathers to prevent burnout.

### Strong Style Pairing

"_For an idea to go from your head into the computer it \*must\* go through someone else's hands - [_Llewellyn Falco_](http://llewellynfalco.blogspot.com/2014/06/llewellyns-strong-style-pairing.html)_"

This quote very briefly sums up Strong Style pairing. In this approach the navigator will explain her/his ideas for the solution, in higher levels of abstraction. The driver will interpret these and implement it. If the driver has her/his own ideas, roles are switched and the process continues.

## Final Thoughts

Pair programming is often a matter of discussion, and everyone has their own opinions.

We often hear arguments stating that having two programmers work on the same code when they might work separately on different things, and develop twice as many features is ineffective.

However, this is not always the case, one feature developed and shipped perfectly with comparatively fewer defects rather than two partially-developed features is anytime better. Pair programming allows you to boost the number of features you ship that is accurate and complete. It reduces maintenance costs as well with lower bugs, high code readability and better software design. It is safe to say that pair programming can help elevate the overall code quality.

But, is coding in a pair suitable for all? There is no one answer applicable to all. We are all unique, the results will undoubtedly differ. For some, it works wonders, while for others, the outcomes are the opposite.

As they say "A problem shared is a problem halved." We like to use pair programming to improve employee skills and performance. Of course, we do not enforce it 24 X 7 and each team finds its own sweet spot around the number of hours to pair every day. We love the process and are surely going to keep it!

Have you tried programming in a pair? We are always looking for programmers who are keen on crafting great software. Write to us at [helllo@incubyte.co](mailto:helllo@incubyte.co) to know more.
