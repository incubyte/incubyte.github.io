+++
authors = ["Sapan Parikh"]
date = 2023-08-01T00:00:00Z
description = "How productivity varies at individual, team, organization, and market level and what can impact it."
draft = false
image = "/images/2021/11/checklist2.jpg"
slug = "four-lenses-of-productivity"
tags = ["DevEx"]
title = "Four Lenses of Productivity: Incubyte's Take"
+++


 
This blog discusses different levels of productivity along with common pitfalls and different ways to optimize them. Recently I came across this blog by [Abi Noda](https://newsletter.abinoda.com/p/four-lenses-of-productivity), written based on the [essay](https://link.springer.com/chapter/10.1007/978-1-4842-4221-6_6) by Amy J. Ko. It interestingly talks about productivity at Individual, Team, Organization, and Market levels.

{{< circlepack data="ind-team-org-market.csv" >}}
<i>Click to drill down</i>


## Individual Productivity
> Individual is the most obvious lens for thinking about productivity, relating to developers’ progress on tasks, learning new skills, and the quality of their work.
> — Abi Noda

### Fuel
A [research paper](https://dl.acm.org/doi/pdf/10.1145/3595878) on DevEx states that the primary driver of developer productivity is— flow state, feedback loop, and cognitive load.

Additionally, smaller batch sizes and lesser work in progress (WIP) may increase productivity, as they lead to less half-baked work.

### Brakes
Lack of documentation may increase cognitive load because of time spent understanding topics.
Additionally, high WIP and slow feedback loops, such as long wait times and queues in code reviews, can interrupt developers and prevent them from entering the flow state.

### Wrong Turn
The biggest mistake developers make is to misunderstand *productivity* itself. Assuming development activity as productivity, they move a lot of development items to something like a “ready for qa” queue and consider it a “win.”

## Team Productivity
> When we think about team productivity, we think about how efficiently the team can meet requirements.
> — Abi Noda

A team’s productivity is not equal to the sum of every individual’s productivity. It may not even be the average of everyone’s productivity. It may be as high as the slowest bottleneck of the value stream!

### Brakes
Work queues decrease a team’s productivity. These queues are usually created at the tail end of the software delivery process, like in manual testing. Also, having different definitions of done for each team role makes everyone busy (in moving tickets to the next guy) but may not make the team productive.

Additionally, frequent changes in team composition can also put a damper on productivity.

### Fuel
From a value stream perspective, it helps to remove silos and queues where work sits. Limiting WIP motivates teams to focus on fewer items without the added burden. Ultimately, aligning everyone on what "done" means is important.

### Wrong Turn
Trying to keep every individual in the team at 100% efficiency.

## Organization Productivity
> Viewing productivity through an organizational lens is even more broad. The author of this paper mainly focuses on this lens as it relates to the influence of the company’s policies, norms, and processes on how efficiently work can move at the team and individual levels.
> — Abi Noda

As we observed earlier with team productivity, organizational productivity is not the sum of each team’s productivity.

### Fuel
Most companies start small, and their code grows fast to accommodate new market requirements. This code needs continuous adjustments to accommodate fast change in terms of architecture and system design. These are the times when you make decisions like choosing between microservices or monolith!

Other policies may surround team designs along with architecture. Creating cross-functional teams
aligned with modules and microservices instead of roles. 
For example, it's much better to have a payments team, orders team, or fulfillment team as opposed to a QA team, development team, deployment team, etc.

Another important tool is to have clearly defined goals, values, and a mission and have them propagated to the entire company.

### Brakes
Resistance to change. Also, management solely focused on quick feature delivery but not prioritizing the overall technical health. 

### Pitfalls
As companies grow, their values change, and sometimes so do the goals. And occasionally, these goals take the entire company away from the core craft. 

A story can best explain this phenomenon. There was a time when Boeing focused on making invincible flying machines. That was also when they made the best profits. But with the new leadership, their goal changed to return on investment for shareholders. Guess when they made more profits?


## Market Productivity
> Viewing productivity from a market lens acknowledges that the whole purpose of an organization that creates software is to provide value to customers and other stakeholders.
> — Abi Noda

Finally, individual, team, and organizational productivities align to make every end user productive.

### Fuel
Small incremental releases help end users get their needs met faster, whereas big-bang releases often result in a steeper learning curve for the users.

### Wrong Turn
Building features in a silo without involving end users in the decision-making process. Doing this instead of getting fast and frequent user feedback.

### Brakes
Market productivity decreases when companies have long planning and release cycles that they can’t quickly accommodate the needs of a changing market.
I do not have ideas to add the reasons, but I think analysis paralysis, little freedom to developers or too much freedom to developers may cause slower market change!

## Final Thoughts

What surprises me is how most of us look at productivity from just one lens, *Individual Productivity*. Most probably because of how typical companies are organized and how their employees are incentivized.

If you look at a run-of-the-mill org chart, it would look like a pyramid. At the base, there’d be many employees and three, four, or more levels before you reach the top. Each person at the base is rewarded for being productive individually. I think that’s why organizations may see a lot of employee activity but not much productivity at the org level.

#### References:

[Four Lenses of Productivity](https://newsletter.abinoda.com/p/four-lenses-of-productivity)

[DevEx: What Actually Drives Productivity](https://queue.acm.org/detail.cfm?id=3595878)

[The SPACE of Developer Productivity: There's more to it than you think.](https://dl.acm.org/doi/10.1145/3454122.3454124)



