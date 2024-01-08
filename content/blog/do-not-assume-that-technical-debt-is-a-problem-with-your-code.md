+++
authors = ["Sapan Parikh"]
categories = ["97 Things Not To Do", "Software Craftsmanship"]
date = 2021-04-14T00:00:00Z
description = ""
draft = false
slug = "do-not-assume-that-technical-debt-is-a-problem-with-your-code"
tags = ["97 Things Not To Do", "Software Craftsmanship"]
title = "Do not assume that technical debt is a problem with your code"
image = "/images/2021/04/technical-debt.jpg"

+++

Ever saw SonarQube laden with thousands of maintainability and security issues? Looking at those dashboards, we often believe we're looking at the code's state, but there is more to it. We are looking into how people work! We are looking into the team's behaviour and how disciplined they are in writing code.

When you look at technical debt, consider it human behavior debt. A symptom of issues with people, teams, leadership, organizations, and whatever else contributes to writing code. It has broader implications, from code to organization structure! And so, to fix it, one has to focus on both, the state of the code and how people behave.

Once Eisenhower said, "I have two kinds of problems: the urgent and the important. The urgent are not important, and the important are never urgent." When the development team only focuses on urgent issues and not the important ones, they start building technical debt. Often the important work items are such that the business team can not "see" them. Focusing on the immediate stream of work and upcoming deadlines may put the system in a shape and form that developers cannot change quickly in the future.

The architecture of the system is one such thing. Business teams may see it as something that "only developers care about." In situations like these, the developers have to do what nobody mentioned in their job description. Explain to the business what is important!

You can use the following diagram from the DevOps handbook to understand and explain the value of our work, visible and invisible, both types.
{{< figure src="/images/2021/developmentvalues.png" >}}

So, what can you do to reduce technical debt? Of course, fixing important things flagged by your static analyzer is one, but what else?

1. **Design your teams** accordingly and have a well-balanced team of developers, leaders, designers, and business representatives.
2. **Introduce automation** as much as possible. Nothing catches technical debt early in the development life cycle as effectively as a solid CI/CD pipeline. Automate your CI/CD pipeline to execute static analyzers, test cases, database upgrades, releases, and deployment.
3. **Change team culture** to not only focuses on the immediate stream of work but also on a roadmap that looks far into the future. Also, create an open culture so that conversations about what's right and wrong can happen without much effort or hesitation.
4. **Prioritize your debt**; developers don't have to pay off all the debt. "Software Design X-Rays" by Adam Tornhill is an excellent book on this subject.

Finally, this is not an exhaustive list. Instead, it is meant for us to think about what causes technical debt and to create a strategy to eliminate the root cause, not just the debt created. Always remember, cleaning things takes a lot more time as compared to messing them up. Thus, it is crucial to stop the leakages right at the source.
