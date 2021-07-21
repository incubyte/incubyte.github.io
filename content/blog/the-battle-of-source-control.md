+++
author = "Kaushal Rohit"
categories = ["Software Craftsmanship"]
date = 0001-01-01T00:00:00Z
description = ""
draft = false
image = "/images/2020/10/The-Battle-2.jpg"
slug = "the-battle-of-source-control"
tags = ["Software Craftsmanship"]
title = "The Battle of Source Control"

+++


```shell
git pull origin develop
git checkout -b feature/shiny-new-branch
```

It's the start of a sprint, and you have picked up a new User Story.

```Given there is no spilloverWhen you are working on a new storyThen create a branch from develop to work on the latest code```

And with that, begins the great quest of implementing a new feature. On the adventure, you will pick up many new skills like crafting new abstractions, fresh-off-the-grill language/framework features, and knowledge of the business domain. You shall encounter great friendlies in the kingdom of StackOverflow, through the valley of GitHub, and on the mountain tops of Reddit. That sounds awesome, you think to yourself, but no adventure is complete without SKIRMISHES!

The spies in the kingdom of StackOverflow marking your questions as duplicates, guerillas in the trenches of GitHub closing your issues, and the echo chamber on the mountain tops suffocating you with lack of Oxygen(read: Opinions). These are some know common bosses that we have dealt with before and we can grind for easy XP points.

Sometimes you take a wrong turn and enter the dungeon of experimental features, only to be raided by hordes of open issues and new bugs. If you clear this, there is a huge XP boost, but sometimes it is simply not possible and it is okay to retreat. In fact, it is better to retreat, than ending washed up on the shores of failed prod.

And with all that, the journey comes to an end and a great sense of accomplishment overcomes you.

```
git commit -m "Congratulations on Finishing the Adventure"
git push origin feature/shiny-new-branch
```

All's well that end's well. So you think, and prepare to make a PR, only to be greeted by `MERGE CONFLICTS`. FINAL BOSS! Turns out, your quest has not yet finished! As you try to figure out, what to accept and what to decline, you start the question the basic fabric of reality. The big twist is, the final boss doesn't even reward you with XP or Gold. All said and done, you finally fix them all and click on merge. Into develop the code goes, to embark on another adventure in prod. A subject that we shall cover some other time.

Bonus: There is a hidden mechanic in the game which will make you proof of ever facing the final boss. What is it? It can be many things, but in the end, it can be reduced to a problem of parallelism and concurrency. Merge Conflicts are nothing but your everyday concurrency problems. How to fix them? You don't, you want to avoid those because by nature Human beings are highly async without an event loop. So always frame your stories in a manner that they can be parallelized rather than be concurrent.

