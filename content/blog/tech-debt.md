+++
title = "Understanding Technical debt!"
slug = "tech-debt"
date = 2021-10-18T05:06:00Z
image = "/images/2021/10/tech-debt-head.png"
draft = true
authors = ["Sapan Parikh"]
description = "Learn more about technical debt and its effects on software in the long run"
tags = ["Software Craftsmanship", "Best Practices", "SDLC"]
type = ""
+++

The term "Technical Debt" was coined by Ward Cunningham (one of the authors of Agile Manifesto). He found financial debt to be the perfect analogy to what is widely known as Tech debt. As software evolves, so does its complexity. Updating existing code versus implementing new features is often a tradeoff and there are many battles to be fought when it comes to spending time on the former. The Technical Debt concept is an effective way to communicate about the need for refactoring and improvement tasks related to the source code and its architecture. This blog looks deeper into understanding this.

## What is Technical Debt?

Technical debt in programming reflects the extra development effort needed to maintain a codebase. It is debt in the true sense of the word – something that will have to be paid off eventually or the bearer faces consequences.

It typically arises when short cuts are taken instead of implementing the best overall solution. As technical debt accrues in a project, it tends to increase estimates for new work items and bug fixes. This is the debt manifesting in terms of time to ship new features, extra effort involved, opportunity cost of the time spent and reduced developer morale.

As Eisenhower once said, "I have two kinds of tasks, important and urgent. Ones which are urgent are not important and ones which are important are not urgent."

|               | Urgent                            | Not urgent                      |
| ------------- | --------------------------------- | ------------------------------- |
| Important     | Work on a new feature requirement | Rearchitect some of the modules |
|               | Create new regulatory features    | Refactor heavily changed files  |
|               | Fix security issues               | Decouple features               |
| Not Important | Buying conference tickets         | Meeting with no agenda          |
|               | Mark some emails "read"           | Check social media              |

To summarize, technical debt often occurs when we focus on urgent work and put off the important items.

## Why is it worth understanding?

{{< figure src="/images/2021/10/tech-debt-1.jpg" >}}

Technical debt affects both, the developers and the business.

High technical debt makes simple changes difficult to implement, taking a toll on developers. To keep the codebase in control, developers need to take time to pay down that debt, creating delays in feature delivery. It is also, often, the source of glitches and other problems that negatively affect user experience. All of this eventually trickles down to dissatisfied customers.

Many businesses are oblivious to the existence of tech debt, and they continue to endure the immense costs associated with having it – simply because that's how they have always done things!

That said, having some technical debt isn't always a bad thing either. If developers spend all their time perfecting code, nothing will ever get released! [Not all technical debt is the same](https://engineering.incubyte.co/blog/do-not-assume-that-technical-debt-is-a-problem-with-your-code/) and development teams must always weigh the benefits of solving it vs. the cost of keeping it. "Software Design X-Rays" by Adam Tornhill is an excellent book on this subject.

## Cost of Technical Debt

### 1. Development Team's Velocity is Hampered

Technical debt can cause software development teams to become overwhelmed. It has the potential to quickly turn an efficient team into a sluggish train wreck. In the longer run, it diverts the team's attention to either addressing the tech debt or slowly navigating the complexity to continue delivering features.

**Consider this scenario:** Your codebase has a perplexing module structure. You now need to add new features. It would take you four days to add the functionality if the module layout was simple, but it takes you six days with the current structure. The additional two days is the interest you pay on the debt, and you haven't even paid the debt down.

### 2. Working on new features becomes a struggle

Technical debt has an exponential effect on increasing the effort needed to build new features.

Teams might generate more clutter too in trying to keep up with the pace of delivery. And this end up increasing technical debt even further. To put it another way, we might assume that a team's "Performance efficiency" drops.

"Even making a minor security update with a modern framework in mind, where we wanted to integrate the authentication system to the current structure, proved difficult due to the application's conventional routing mechanism. Before we could even update the authentication, we had to first understand the existing framework, which was quite a tedious job", mentioned a fellow developer.

### 3. Negative Impact

**Negative Impact!** Yes, you heard it right.

"End users are unaware of behind the scenes, it's the developers who care about the code and manage it." - Fellow developer. The development, testing, implementation, and documentation of new features' costs time and money. But developers are busy fixing the debt and it limits their efficiency. This creates a negative impact since this effort could be better used for long-term creativity or delivering new features.

Technical Debt, if not fixed on time, will just steer more broken windows, eventually leading to device downtimes, a poor user interface that affects customer/user loyalty, poor system efficiency, and so on, thus affecting customer experience.

### 4. Lack of Motivation for Developers

The entire process of fixing technical debt is extremely time-consuming. There are spikes, understanding the collective concept, generating a report, getting it approved, then incorporating the changes and several other obstacles along the way. If no test cases are available, developers may encounter more issues and waste too much time.

After a certain amount of time, it becomes frustrating and to be honest no one enjoys performing repeated unproductive tasks daily. If the same thing keeps happening over and over again, the frustration keeps piling up.

Employees can become demotivated as a result of any of the above.

## Technical Debt Quadrant

Martin Fowler suggests a simple approach to navigate the complex matter of technical debt:

1. "Did we incur this technical debt deliberately or inadvertently?"
2. "Was that decision prudent or reckless?"

These two questions give you the four quadrants of technical debt:

{{< figure src="/images/2021/10/tech-debt-2.jpg" >}}

### Deliberate and Reckless

In this quadrant, you **know** you are making a design choice that is bound to create technical debt. Often the reasons revolve around working under immense pressure to meet thin deadlines and getting ahead in a competitive market.

### Deliberate and Prudent

This quadrant is about making an informed decision to take on technical debt. Decision makers weigh the risks involved and carefully plan to mitigate them over time.

Start-ups can embrace this to make their product ship faster, get customer feedback early and adapt course accordingly.

### Inadvertent and Reckless

This is a quadrant of things you should have known about but didn't. Constant learning is part of the job. Knowing the underlying principles helps developers define the solution better and avoid patterns that are known to cause problems. This, along with following the right development practices help reduce issues in this quadrant.

### Inadvertent and Prudent

Having followed best practices and design principles, we can still face challenges. There still will be times when you realize missteps after the job is done. Doing POC's helps you find these uh-oh moments before it's embedded with your actual code.

## Final Thoughts

All software developers and businesses strive to facilitate releasing competitive products faster and generate commercial value. But, if the debt is not cleared in time, you'll go bankrupt (technically).

Nobody would have the patience to fix technical debt, if it is left unresolved for too long. That would just result in more havoc. So, don't give up on Clean Code! Practice conventions that will help reduce technical debt and prevent introduction of more technical debt.

Make a deliberate decision that will encourage you to step forward while still encouraging future refactoring. Create that "YAY" moment and leave the code in a condition that makes it easy for someone else to scan and rework on.

As a developer, it's up to you to begin improving things!
