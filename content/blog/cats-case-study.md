+++
authors = ["Sutirtha Das", "Padma B" ]
categories = ["Case Study"]
date = 2023-02-03T00:00:00Z
description = ""
draft = false
image = "/images/2023/finance.jpg"
slug = "finance-modernization-case-study"
tags = ["Case Study", "Modernization"]
title = "A Centralized System for a Leading Consumer Lending Bank "
+++

### Client:

A leading customer credit provider in the United States, committed to assisting customers in achieving their personal objectives through great customer service and flexible lending alternatives.

### Problem statement:

The bank has over 30 million unique loan contracts spread across various departments. As the number of contracts grew over time, handling all these contracts manually led to these major drawbacks.

1. No centralized system to access all the contracts and work on them. The agents had to do multiple logins to different branch systems to work on these contracts and search across various branches even find the correct contract.
2. While working on a contract and doing multiple operations, manual errors inevitably started creeping in.
3. This led to the agents having to rework on the same contract and as a result, the turnaround time for a contract became extremely high across all the departments.

### Solution:

When the client first approached us, the goal was to transition one of the departments from the manual process to a digitized automated system. Once the initial problems were discovered, our team showcased the client various mockups for the product. After conducting research on various department workflows, we realized the huge potential involved in automation and cross-functional usability of the product.

After the roll out to single department, there was such a huge success that everyone wanted to use it. There was no looking back from then onwards and the product transitioned the manual process in more and more departments.

### Outcome:

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center;">
<h2 >~50%</h2> &nbsp;&nbsp; decrease in turnaround time per contract (1 hour to 30mins)
</span>

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center;">
<h2>~4000</h2> &nbsp;&nbsp; manual hours saved every single day
</span>

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center;">
<h2>~2X</h2> &nbsp;&nbsp; increase in contracts handled daily
</span>

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center;">
<h2>~160x</h2> &nbsp;&nbsp; daily users across 5 different departments
</span>

### Challenges:

1. **The client had been using an outdated CRM which was hosted on on-prem servers.** This involved huge maintenance costs for servers and a separate IT department. As the number of agents and contracts kept on increasing, cloud seemed to be the correct choice going forward.
2. **As the client is a banking institution, they have a lot of PII (Personal Identification Information).** There were many concerns regarding the security of this data being stored in cloud.
3. **The agents are used to fixed flows and interfaces.** There were internal debates within the client organization about introducing an entirely new system and disrupting the existing workflow.

### What We Did:

We mainly created the system with these goals -

1. **Having one centralized place where the agents could access all the loan contracts.** With the new product, the multiple sign-in problem was solved, and they would only have to sign in once to access everything from everywhere.
2. **A cloud-based system that doesn’t store any PII data.** To address the concerns of security regarding the PII data, we decided not to store any such data in our cloud-based app but in the existing on-prem server.
3. **Automating all the manual checks that the agents used to perform on each contract to find whether the bank would proceed with the process or not.** Automation saved agents considerable amount of manual effort because the product can run the static repeated checks on every contract and determine its state and subsequent workflow appropriately. All agents have to do now is to perform the unavoidable mandatory checks using the product.
4. **Having a smooth UX.** We found that 100% of our users use Windows. Therefore, to reduce the cognitive complexity and the learning curve of the user for the new system, we followed the lates design trends and patterns popularized by Microsoft so that the users feel that they are using a native Windows app itself and not some other new alien system.
5. **A light weight system that can be updated on a regular basis.** Since this was a new product with new discoveries about new features being made every week, we designed it in such a way that with the click of a button, we could deploy an updated version. As a result, we have deployed a new updated version every 2 weeks on average over the last 2 years!

### Going Forward:

Looking at the amazing success of the product and how it has transformed the entire process of the bank, an obvious step forward is to expand its user base and extend it to newer departments and automate the existing processes there.

One of the major reasons for the success of the product was the small self-sufficient agile teams working in tandem with each other with their own customized scrum models. This resulted in high productivity and very rapid deployments. _More about this has been discussed in this article_.

Another major step forward that we are taking is towards productization. Although the current product solves a lot of problems and has made the bank save a lot of time and user resources, it, at the end of the day, is still a service product and new features or updates can only be implemented by the developers. We are trying to change this by making small changes here and there so that the users can themselves change and update the product at certain places. _We have discussed about this productization steps in details in this article_.