+++
authors = ["Sapan Parikh"]
categories = ["Case Study"]
date = 2022-11-05T00:00:00Z
description = ""
draft = false
image = "/images/2022/11/monnai-case-study-header.jpg"
slug = "monnai-case-study"
tags = ["Case Study"]
title = "Monnai Case Study"
+++

<!--toc:start-->
- [Monnai:](#monnai)
- [What we did](#what-we-did)
- [Outcomes](#outcomes)
- [Defining a vision for the product and the partnership](#defining-a-vision-for-the-product-and-the-partnership)
  - [The first seven seconds](#the-first-seven-seconds)
  - [As green as it can get](#as-green-as-it-can-get)
- [Automation Automation Automation](#automation-automation-automation)
  - [Walking skeleton](#walking-skeleton)
  - [Test Strategy](#test-strategy)
  - [Automated fault tolerance](#automated-fault-tolerance)
- [Architecture and cloud infrastructure](#architecture-and-cloud-infrastructure)
- [Observability and Monitoring](#observability-and-monitoring)
  - [Logs](#logs)
  - [Metrics](#metrics)
  - [Traces](#traces)
  - [Alarms](#alarms)
<!--toc:end-->

## Monnai:

_Reinventing credit decisioning across the globe... fast._

Client

The fintech market size stood at USD 112.5 billion in the year 2021. But still, the credit decisioning processes remain outdated and have not changed much. Most of them do not work across countries and continents.

Monnai is on the way to changing it by providing global credit decisioning based on various parameters available today, which may be a better predictor than one’s Social Security Number or similar other identifiers.

---

## What we did

-   Defining a vision for the product and the partnership (RUSHALI)
-   Automation, automation, automation
    -   Continuous Integration and Deployment (walking skeleton)
    -   Test strategy (BDD)
    -   Fault tolerance (AWS and automation)
-   Architected cloud infrastructure
    -   AWS architecture (Terraform)
-   Observability and monitoring
    -   Tools

---

## Outcomes

**11 Countries**

**17 Data partner integrations**

**3 Months for going live**

**92%+ code coverage**

**On-demand deployment, always prod ready**

---

## Defining a vision for the product and the partnership

### The first seven seconds

Monnai had a very clear vision of how they wanted to change the fintech industry when they started. To jump-start their development, they decided to start working with us as they start creating their teams. We were able to get from a sales call to a fully working cross-functional team in less than a month.

### As green as it can get

Starting with a blank slate, in this case, a blank confluence page, wouldn't be a wrong statement when we started the project. Monnai team had initial ideas of the endpoints they wanted to create to support their API business, which we started building on.
Such greenfield projects can let our imagination run wild but in our experience, we have seen that projects very fast accrue technical debt as the team and complexity increase. That's why our focus was on the right practices like TDD and automation from day one!
One of the implicit focus we had was to be able to deliver sustainable growth of the feature set as time passes.

The productivity pattern of a growing company typically looks like the following, exponential at first and then a dip!

{{< figure src="/images/2022/11/monnai-case-study-diagram.png" caption="Productivity Pattern of a Growing company" >}}

We focused on the "right way" let's see how

## Automation Automation Automation

### Walking skeleton

Most projects do not take up the ops work like build, deployment, infrastructure allocation, and database versioning until the very last moment.
This becomes a reason for hurdles at the later stages of SDLC.
This is why we started with a walking skeleton of the software where every component needed for the right software architecture and practices was made available, which includes at least automated build, code scans, testing, database upgrades, and code deployment.

Essentially we started with automating the process along with every component needed to achieve the end architecture.

### Test Strategy

First, there was TDD! We have been also practicing outside-in TDD for some time. But we observed that most project delays happen not because the time to **type code** was not enough, rather they happen because of a lack of collaboration, high cost of coordination, failure to agree on things, longer test cycles, etc.

This is why we decided to use BDD, and the Three Amigos working model. We took the QA step that typically happens almost when all the work is done and shifted it all the way left in the timeline. That meant when we did the discovery we started automating the test cases and involved all three amigos, analysts, developers, and QA in the process from day one. This increased the buy-in of all the stakeholders and reduced the back and forth between the proverbial walls.

### Automated fault tolerance

We knew from day one that we won't have the luxury of a "maintenance window" due to customers spanning worldwide. So we designed our components in a way that any new deployment will create and start a server, make sure it is ready to accept traffic, only then route our traffic to new servers, and destroy old servers. This allows us to do deployments without any downtime, even in peak traffic.

But that is not enough, what if servers got crashed or worse, what if a server is running but for any reason, not accepting the traffic? We put a liveness probe to each component that checks if the server can accept traffic, otherwise restart it. Also, there are always two load-balanced replicas in case of failure in one server.

But wait, there is more! What if servers receive requests as such that memory or CPU consumption shoot up? We put a horizontal scaling in a way that before that happens, a standby server is started and makes itself ready to serve the traffic. The mechanism will kill the extra instance in case of a dip in traffic is observed.

## Architecture and cloud infrastructure

We emphasize automation, not just artifacts, and testing, but infrastructure should be automated as well. We use terraform to create and manage the infrastructure. That paid us very well so far. That eliminated any chance of human error creating infrastructure.

Human errors are not limited to system crashes but security lapses as well. Security lapse can cause more damage than other system issues. Since the infrastructure is in code, and each code change (read infrastructure change) is peer-reviewed and scanned automatically by a code scanner there are fewer chances of deploying vulnerable infrastructure.

As an added bonus since everything is automated, replicating an environment became trivial too.

## Observability and Monitoring

Due to the dynamic nature of components and our system communicating to multiple external data sources, we had to employ elegant observability solutions. We rely on proprietary solutions that support open-source implementation to avoid vendor locking.

### Logs

All the logs are captured and sent to a centralized server for query and review.
Such centrally aggregated logs make your humdrum data insightful and real-time!

### Metrics

Different levels of metrics like CPU, memory, thread, no of requests, no of active servers, etc. are collected and sent to a centralized server. The custom-made dashboard helps keeping eye on the health of infrastructure and become proactive as opposed to reactive!

### Traces

Observing one API call is difficult as we have distributed system having several internal and external endpoints. We capture and store traces of each call and allow developers to view the whole tree in a nice graphical way so that debugging and finding the cause of failure or slowness becomes easy

### Alarms

None of these is helpful if we have to make someone sit and observe these things manually, we believe in automating these as well. Any anomalies like errors in logs will throw an alarm email to respective stack holders.

