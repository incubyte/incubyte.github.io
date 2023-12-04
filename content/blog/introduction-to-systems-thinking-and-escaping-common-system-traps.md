+++
title = "Introduction to Systems Thinking and Escaping Common System Traps"
slug = "introduction-to-systems-thinking"
date = 2023-11-06T15:43:57+05:30
image = "/images/2023/introduction-to-systems-thinking/banner.jpg"
draft = false
authors = ["Aditya Sapate"]
description = ""
tags = ["Systems Thinking", "Software Craftsmanship"]
categories = ["Software Craftsmanship"]
type = ""
+++

> There is no right or wrong answer in architecture - only trade offs.\
> ---<cite>Fundamentals of Software Architecture By Mark Richards, Neal Ford. </cite>

Everything in software architecture is a trade-off, so the famous answer to every decision is “It depends”. It depends on the engineering practices and processes, the organization's culture, business drivers, the developer's skill sets and many other factors.

{{<figure src="/images/2023/introduction-to-systems-thinking/architecture.jpg">}}

It is important to understand these systems to make the most effective interventions. How? With Systems Thinking.

## TL;DR

Systems Thinking is a discipline for recognizing patterns and interrelationships in complex systems and finding more effective ways to influence those interrelationships.

It helps understand the structure of systems and identify problem-generating structures. In this blog, we explore the Policy Resistance archetype, where actors within a system resist rules or policies imposed on them.

To overcome this trap, leverage points such as improving information flow, changing rules and authority, increasing self-organization, changing goals and purpose, and shifting paradigms can be applied.

## What is Systems Thinking?

Systems Thinking is a discipline for seeing wholes, recognizing patterns and interrelationships, and learning how to influence those interrelationships in more effective, efficient ways.

Systems Thinkers see the world of variables (quantifiable elements) and feedback loops: regulating mechanisms which drain, increase or balance these variables.

<center>
<figure> <img src="/images/2023/introduction-to-systems-thinking/balancing_loop.jpg"> 
<figcaption> A causal loop diagram of coffee cup cooling, where a balancing loop is trying to bring the discrepancy between coffee’s temperature and room temperature to zero. </figcaption> 
</figure>
</center>

<center>
<figure> <img src="/images/2023/introduction-to-systems-thinking/reinforcing_loop.jpg"> 
<figcaption> A causal loop diagram of Interest bearing bank account, where a reinforcing loop is in place which enables the growth of the money in the bank account as a constant fraction of itself. </figcaption>
</figure>
</center>

With the help of causal loop diagrams, we can map out the structure of these systems and identify what is keeping the system functional and archetypes, which are the problem-generating structures in the systems.

In this blog, we will explore a common archetype in a system and pinpoint strategic points for intervention within the system.

## Policy Resistance archetype

In a multinational enterprise

- For consistency, the enterprise architect has issued a standard to use DDD for all development.
- The development team is slow in adopting, complaining that this is a bottleneck that reduces delivery speed.
- The architect tries to fix it with.
  - Automated compliance checking.
  - Spend more time on architecture review.
  - Ask everyone to follow design specifications.

This is a common system trap called “Policy Resistance” occurs when the actors within the system “resist” the rules or laws imposed on them. The goals of the policy do not align with the goals of the actors.

 <figure> <img src="/images/2023/introduction-to-systems-thinking/policy_resistance.jpg"> <figcaption> To achieve the desired consistency, the architect has introduced a policy to allocate more time to architecture reviews. However, developers are not pleased with this policy because it is adversely affecting delivery speed. In this system, when architects introduce new policies aimed at ensuring consistency and they prove to be effective, it tends to divert developers from their primary goal of speedy delivery. </figcaption> </figure>

### **The way out of the Policy resistance trap by using leverage points**

1. **Improve information flow:** Communicate the mission; provide education on DDD.
2. **Change the rule and authority:** Relax standards to focus on interoperability, introduce optional guidelines, and change the review process to consultation.
3. **Increase self-organization:** Create a community of practice where individuals from development teams can provide input to standards and guidelines.
4. **Change goals and purpose:** Elevate the purpose from “consistency” to goals that help development teams: delivery speed.
5. **Shift the paradigm:** Redefine the development team’s perception of architecture.

## Where to apply Systems Thinking?

- Not everywhere!
- Issues that won’t go away
- Issues that get worse the more you try to fix them
- “Paradigm shifting” changes in technology or approach

## Key Takeaway

By identifying patterns and problem-generating structures, we can strategically intervene and make more effective changes. It is a valuable approach for addressing persistent issues and driving paradigm-shifting changes in technology or approach.

## Follow the below resources to learn more about Systems Thinking

- [Thinking in Systems by Donella H. Meadows](https://en.wikipedia.org/wiki/Thinking_In_Systems:_A_Primer)
- [Leverage Points](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/)
- [Keynote: Systems Thinking — Kent Beck & Jessica Kerr](https://www.youtube.com/watch?v=z8bL_V9in9o)
