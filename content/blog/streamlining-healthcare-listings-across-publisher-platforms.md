+++
title = "Streamlining Healthcare Listings Across Publisher Platforms"
slug = "streamlining-healthcare-listings-across-publisher-platforms"
date = 2025-07-03T13:06:36+05:30
image = "/images/2021/09/pair-prog-head.jpg"
draft = true
authors = ["Navaldeep Srivastava"]
description = ""
tags = ["Case Study", "Modernization", "Software Craftsmanship"]
categories = ["Case Study", "Modernization", "Software Craftsmanship"]
type = ""
+++

### Business Context

**Client Overview**  
Kyruus is a software solutions provider operating in the U.S. healthcare space. It caters primarily to health systems and payers (insurance companies), offering configurable, white-labelled software solutions for provider and patient interactions.

**Business Objective**  
Kyruus aimed to centralize and automate the management of healthcare provider and location listings across major publisher platforms such as Google, Apple, Bing, WebMD, and Healthgrades. This functionality is a core component of their broader "Reach" product, which also includes reputation management.

**Strategic Importance**  
With a recent series of mergers and acquisitions, Kyruus was seeking to unify its data-driven offerings and expand its product value proposition. Listings management was critical to helping clients improve discoverability, drive business outcomes, and lay the foundation for reputation management. Moreover, this move positioned Kyruus competitively against external platforms like Yext by providing an integrated experience.

## Challenge

**Key Business and Technical Problems**

- Lack of a centralized system to publish accurate, up-to-date listings across various platforms.
- Diverse ingestion mechanisms and data formats used by publishers (e.g., Google APIs vs. Apple SFTP vs. Bing's scraping model).
- Publishers had varying validation and acceptance flows—Google offered instant feedback, while Apple and Bing were asynchronous and opaque.
- Legacy system (in Python) was outdated, had limited scope, and lacked real-time sync capabilities.

**User Pain Point**

- Health systems had to manage listings manually across platforms.
- Outdated or incorrect listings reduced patient access and trust.
- Poor SEO and discoverability due to inconsistent data.

**Previous Workarounds**

- A legacy SFTP-based system for Google (Reserve with Google) was in place.
- No consistent or modern platform existed for other publishers.
- Clients had to interact with each publisher individually, leading to operational overhead.

**Our Approach**

**Key Decisions & Unique Contributions**

- Took an **iterative MVP-first approach**: started with a 24-hour sync job before moving to real-time updates.
- Prioritized publisher integration based on ROI and feasibility: began with Google, then moved to Apple and Bing.
- Unified tech stack: migrated the legacy Python system to **NestJS (TypeScript)**, enabling better maintainability and reusability in a mono-repo setup.

**Tech & Process Highlights**

- Built a **delta detection engine** to avoid redundant API calls and reduce load.
- Used **auto-mapping systems/mechanisms** to reduce client effort in connecting Kyruus IDs with publisher IDs.
- Enabled **customizable syndication flags**, allowing clients to control which listings go to which platforms.
- Developed **internal validation scripts and web scraping tools** (e.g., for Apple verification) to automate previously manual QA tasks.
- Emphasized **test-driven and mutation testing** practices to maintain quality.

**Collaboration Highlights**

- Worked closely with beta clients to validate assumptions and tailor platform capabilities.
- Coordinated with internal microservice teams to handle fragmented data sources (e.g., separate provider and location APIs).
- Navigated high team churn and a regulated enterprise ecosystem to build stakeholder trust.

## Solution

**What Was Built**

- A centralized **Listings Management Platform** capable of aggregating data from Kyruus and syndicating it to publisher platforms.
- Built integrations for Google Business Profile APIs, Apple Business Connect, and Bing Places for Business.
- Added support for both physical and **virtual listings**, preparing for digital-first providers.

**Key Components & Milestones**

1. **Initial MVP** with 24-hour sync jobs for Google listings.
2. **Legacy system rewrite** from Python to NestJS.
3. **Google integration** supporting both provider and location listings.
4. **Delta updates** to minimize redundant API calls.
5. **Custom publisher mapping & syndication flags**.
6. **Automation scripts** for Apple's opaque review flow.
7. **Planned real-time sync** and UI rollout in next phases.

## Results & Impact

**Business Outcomes & Measurable Impact**

- **Visibility across Google platforms nearly doubled in just four months**. Mobile search impressions rose from 48,820 in Dec 2024 to 95,064 in April 2025, while desktop searches increased from 12,942 to 31,818 — a 2.5x jump in visibility from desktop alone.
- **Engagement actions saw significant growth**. Clicks to call nearly doubled from 12,370 to 24,685, and users requesting directions surged from 8,963 to 30,028 — a 235% increase, indicating improved local discoverability.
- **Website visits** more than doubled, growing from 4,056 to 8,563, showing better traffic conversion and more complete listing information driving higher patient interest.

**Qualitative Wins**

- Improved time-to-market with MVP-first delivery.
- Demonstrated listing improvements via analytics dashboards for beta customers.
- Enabled Kyruus to tap into its data reservoir and offer value-added services beyond core solutions.
- Reduced manual mapping overhead with auto-mapping APIs.

**Qualitative Wins**

- Strengthened customer relationships with transparency and regular updates.
- Built scalable groundwork for expanding to more publishers and verticals.
- Improved team efficiency by automating publisher-specific validation workflows.

## Reflection

**Proud Moments**

- Used creative automation to reduce internal QA and data verification effort (e.g., API reverse-engineering for Apple's checks).
- Demonstrated agile product development by shipping incrementally and validating continuously.
- Maintained velocity despite high team churn and complex enterprise coordination.

**Toughest Challenge**

- Apple's opaque, high-bar review process which required validating hundreds of listings without full error traceability.
- Bing's undocumented behaviours, poor stakeholder responsiveness, and long publish cycles.

**What's Next**

- Shift to **real-time data syndication** starting with Google.
- Expand **publisher integration** (e.g., WebMD, Healthgrades)
- Build out a **customer-facing UI** for self-serve configuration and reporting.
- Deepen support for **virtual listings**, improving SEO and access for online-only providers.
