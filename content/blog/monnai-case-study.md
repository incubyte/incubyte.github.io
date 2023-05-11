+++
authors = ["Sapan Parikh"]
categories = ["Case Study"]
date = 2022-11-05T00:00:00Z
description = "Reinventing global consumer insights for fintech"
draft = false
image = "/images/2023/monnai-case-study/monnai-banner-blog.jpg"
slug = "monnai-case-study"
tags = ["Case Study"]
title = "Monnai: A Product Launch Journey"
banner_image = "/images/2023/monnai-case-study/monnai-banner.jpg"
image_1 = "/images/2023/monnai-case-study/graph.png"
open_quote = "/images/2023/open-quote.png"
close_quote = "/images/2023/close-quote.png"
right_arrow = "/images/2023/arrow_right.png"
testimonial_person = "/images/2023/monnai-case-study/ravish_patel.jpg"
what_we_did_icon_1 = "/images/2023/monnai-case-study/case-study-monnai-icons-11.png"
what_we_did_icon_2 = "/images/2023/monnai-case-study/case-study-monnai-icons-12.png"
what_we_did_icon_3 = "/images/2023/monnai-case-study/case-study-monnai-icons-13.png"
what_we_did_icon_4 = "/images/2023/monnai-case-study/case-study-monnai-icons-14.png"
what_we_did_icon_5 = "/images/2023/monnai-case-study/case-study-monnai-icons-15.png"
what_we_did_icon_6 = "/images/2023/monnai-case-study/case-study-monnai-icons-16.png"
card_1_title="Taking Mental Healthcare Solution Global"
card_1_desc="Making Mental Healthcare Accessible by Expanding the Solution Globally and Providing a Personalized Customer Experience"
card_1_slug="global-case-study/"
card_2_title="A Centralized System for a Leading Consumer Lending Bank"
card_2_desc="Reinventing global consumer insights for fintech"
card_2_slug="finance-case-study/"
+++

Reinventing global consumer insights for fintech.

The fintech market size stood at USD 112.5 billion in the year 2021. Yet, consumer data used for decision-making remain outdated and fragmented. Most provide limited data points and do not even work across countries and continents.

### *A technical deep dive*

## Client: Monnai
*Reinventing global consumer insights for fintech*

The fintech market size stood at  USD 112.5 billion in the year 2021. Yet, consumer data used for decissioning remain outdated and fragmented. Most provide limited data points and do not even work across countries and continents.

Monnai is on its way to changing this by providing over 500+ global and standardized consumer insights, which may be a better predictor than just one’s Social Security Number or similar other identifiers.


---

## What we did

- Defining a vision for the product and the partnership
- Automation, automation, automation
	- Continuous Integration and Deployment (walking skeleton)
	- Test strategy (BDD)
	- Fault tolerance (AWS and automation)
- Architected cloud infrastructure
	- AWS architecture (Terraform)
- Observability and monitoring
	- Tools


---

## Outcomes

#### **11 Countries**

#### **17 Data partner integrations**

#### **3 Months for going live**

#### **92%+ code coverage**

#### **On-demand deployment, always prod ready**

#### **[$6.5 milling of funding](https://venturebeat.com/ai/monnai-bags-6-5m-funding-to-promote-ai-driven-decisioning-to-fintechs/) in year one of going live**


---



## Defining a vision for the product and the partnership

### The first seven seconds

[Monnai](https://monnai.com) had a very clear vision of how they wanted to change the fintech industry when they started. To jump-start their development, they decided to engage Incubyte in parallel with creating their internal engineering team. We were able to get from a sales call to starting work in under 15 days.

### As green as it can get

Starting with a blank slate, in this case, a blank Confluence page, wouldn't be a wrong statement when we started the project. The Monnai team had initial ideas on the endpoints they wanted to create to support their API business, which we started building on. Such greenfield projects can cause imaginations to run wild and in our experience, we have seen projects accrue technical debt very fast as the team size and product complexity increase. That's why our focus was on the right practices like TDD and automation from day one, while we worked closely with the client to uncover the thinnest slice that could become an MVP. The aim was not only to go to market quickly but to also enable sustainable growth of the feature set as time passes.

The productivity pattern of a growing company typically looks like the following, exponential at first and then a dip!

{{< figure src="/images/2022/11/monnai-case-study-diagram.jpg" caption="Productivity Pattern of a Growing Company" >}}

We focused on the "right way" let's see how

## Automation Automation Automation

### Walking skeleton
Most teams do not take up ops work like build, deployment, infrastructure allocation, and database versioning until the very last moment. This becomes a reason for hurdles at the later stages of PDLC.

Starting with a walking skeleton of the software ensures smooth deployments from the very beginning since every component needed for the software architecture and practices is made available. This includes, at the very least, automated builds, code scans, testing, database upgrades, and code deployment.

Essentially we started with automating the process along with every component needed to achieve the end architecture.

### Test Strategy
First, there was TDD! We have been practicing outside-in TDD for some time. While TDD enabled us to achieve high code coverage and incremental evolution of the architecture, the missing pieces causing project delays were because of lack of collaboration, high cost of coordination, failure to agree on things, longer test cycles, etc.

This is why we decided to layer on BDD and the Three Amigos working model for the Monnai engagement. We took the QA function, which typically occurs almost after all work is done, and shifted it all the way left in the timeline. That meant we started automating test cases and involved all three amigos - analysts, developers, and QA, in the discovery process itself. This increased buy-in from all stakeholders and reduced back and forth between the proverbial walls.

### Automated fault tolerance
We knew that we won't have the luxury of a "maintenance window" due to customers being located worldwide. So we designed our components in a way that any new deployment will create and start a server, make sure it is ready to accept traffic, only then route traffic to new servers, and then destroy old servers. This allowed us to deploy without any downtime, even in peak traffic conditions.

But, what if servers crashed or worse, what if a server is running but for some reason, not accepting the traffic? We put a liveness probe to each component that checks if the server can accept traffic, and if not, restart it. Also, there are always two load-balanced replicas in case of a server failure.

But wait, there is more! What if servers receive requests such that memory or CPU consumption shoot up? We put in horizontal scaling such that before an overload, a standby server is started and makes itself ready to serve the increased traffic. The mechanism will kill the extra instance once a dip in traffic is observed.


## Cloud infrastructure
We emphasize automation everywhere. Not just artifacts, and testing, but infrastructure should be automated as well. We use Terraform to create and manage the infrastructure. It has served us very well so far, eliminating any chance of human error in creating infrastructure.

Human errors are not limited to system crashes, but security lapses as well. A security lapse can cause more damage than other system issues. Since the infrastructure is in code, and each code change (read infrastructure change) is peer-reviewed and scanned automatically by a code scanner, there are fewer chances of deploying vulnerable infrastructure.

As a bonus since everything is automated, replicating an environment became trivial too.


## Observability and Monitoring
Due to the dynamic nature of components and the need for our system to communicate with multiple external data sources, we had to employ elegant observability solutions. We rely on proprietary solutions that support open-source implementation to avoid vendor locking.

### Logs
All logs are captured and sent to a centralized server for query and review. Such centrally aggregated logs make your humdrum data insightful and real-time!

### Metrics
Different levels of metrics like CPU, memory, threads, number of requests, number of active servers, etc. are collected and sent to a centralized server. A custom-made dashboard helps keep an eye on the health of infrastructure and become proactive as opposed to reactive!

### Traces
Observing one API call is difficult as we have a distributed system with several internal and external endpoints. We capture and store traces of each call and allow developers to view the whole tree in a nice graphical way so that debugging and finding the cause of failure or slowness becomes easy.

### Alarms
None of these are helpful if a person has to sit and analyze logs, traces, or metrics manually, we believe in automating these as well. Any anomalies like errors in logs will throw an alarm email to relevant stakeholders.

---

## TL;DR
A carefully selected tech stack, high levels of automation, and following best practices from day one, helped us achieve the following for Monnai:
1. Go to market in three months
2. The ability to respond quickly to feedback from potential customers
3. Onboarding their first customer within six months
4. Sustained frequent releases to ensure the product evolved rapidly and incrementally
5. An amazing team morale!
