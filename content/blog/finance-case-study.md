+++
authors = ["Sapan Parikh"]
categories = ["Case Study"]
date = 2023-02-03T00:00:00Z
description = ""
draft = false
image = "/images/2021/09/laptop-plant.jpg"
slug = "finance-case-study"
tags = ["Case Study"]
title = "Consumer Finance Lender: Case Study"
+++

**Client:**

Client specializes in providing consumer loans in the United States and helps customers meeting their personal goals. Client is known for providing excellent customer service with flexible lending options.

**Problem statement:**

Client has Legacy software to maintain the accounts and loans information. It became chaotic to use it across various departments Settlements, Legal and Repossession. It has been years the organizations are moving towards digitalization, agents at Client were handling the most of the workflows manually which resulted in reducing the efficiency of the agents.

**The Goal:**

When Client approached, the goal was to transition the settlement department from manual process to automated system because of two reasons.

1. Errors involved in the manual process
1. Time taken in for verification in the manual process

Once the initial discovery is completed, Mockups were showcased; as a team we realized the potential involved in automation and cross functional usability of the common data.

**Challenges:**

1. The existing application is deployed and running on in-house servers. Cloud was far away from the thoughts. As the business scales at client side the number of customers, agents serving the customers increased, these realistic scenarios gave us a breath to talk about the cloud migration.
1. The unspoken fear of the cloud is the security and PII that existing system is storing. That’s where we came to a common ground the new application will not hold any PII data.
1. Agents at Client are used to certain flows and interfaces, they should experience less to no transformation when working with the new system.

**Strategy:**

1. Learning and unlearning internally while enabling them towards DevOps, one-click deployments, and cloud migration.
1. Real-time read is not as easy as it sounds, rather it should have strong architecture and coverage in place to deal with failures.
1. Walkthrough of existing system, understanding user pain points and business vision and goals worked as pillars while prototyping the new system.

**The Rollout:**

It started as a team of 5 from settlements departments using the CATS application, what we are having today is the system spanned across Legal, Repossession with 500 users.

{{< figure src="/images/2023/02/finance-001.png" >}}

**Milestones:**

CATS started as an extension to existing system focusing on automating the one business unit workflow.

- Somewhere in June 2020 we started development
- First release happened in April 2021 for settlements

Every sprint release

- July 2021 for LAS team under Legal eligibility
- October 2021 for LCS team under Legal
- December 2021 for LPS team
- Jan 2022 for APS team under Legal
- March 2022 enhancements to Legal module
- May 2022 for loan modification

For Productization

- December 2022 for Repo BU in Client org

{{< figure src="/images/2023/02/finance-002.png" >}}

If we look back, we have come long way in extending CATS to automating the 2 other business units while self-service is on the roadmap.

