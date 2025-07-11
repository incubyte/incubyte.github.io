+++
title = "Earning Confidence Through Craft"
slug = "earning-confidence-through-craft"
date = 2025-07-03T13:06:36+05:30
image = "/images/2025/earning-confidence-through-craft/palisades-thumbnail.png"
draft = false
authors = ["Navaldeep Srivastava"]
description = ""
tags = ["Case Study", "Modernization", "Software Craftsmanship"]
categories = ["Case Study", "Modernization", "Software Craftsmanship"]
type = ""
+++

### **Business Context**

**Client overview**

A leading player in the mental healthcare space, embarked on a strategic initiative to modernize the front-end of its core platforms --- **Spring (member portal)**, **Compass**, and eventually **Atlas**. With rising user expectations, aging UI patterns, and increasing design and tech debt, the need to unify and scale the front-end experience became critical.

**Business Objective**

Project **Palisades** was launched as a front-end modernization initiative. The goal: improve **usability, scalability, accessibility**, and **design cohesion** across user-facing applications by adopting a centralized component library called **Verdant v3,** built on Chakra UI v3 --- the in-house next-generation design system.

**Strategic importance**

This effort was not just a redesign, but a **refactoring initiative**, aiming to upgrade underlying scaffolding and component systems while preserving workflows, reducing accessibility risk, and enabling long-term maintainability.

### **Challenges**

The team inherited platforms with:

- **Fragmented design systems** and overlapping UI libraries
- **Technical inconsistencies** in component usage and CSS architecture
- An **unreliable mobile web experience** and poor accessibility scores
- Tools and frameworks (like code generators and dependency systems) that had drifted into obsolescence

**User Pain Points**

End users encountered some inconsistencies in the interface---particularly on mobile---while internal teams navigated varied component usage, limited formatting standards, and opportunities to streamline development workflows.

**Previous Workarounds**

Although the client had an internal playbook for front-end development, parts of it were difficult to follow or didn't align well with evolving needs. In some cases, engineers had to **circumvent the playbook** with makeshift solutions, which created more risk and reduced trust in the architecture.

### **Our Approach**

Our goal was to **earn the client's confidence** through deliberate, well-structured execution and meaningful contributions beyond the assigned scope.

Our approach centered on establishing clear workflows, standardizing components, and aligning closely with cross-functional teams. We integrated deeply with the client's ecosystem, actively contributing to design and architectural decisions. Through iterative enhancements to DevX tooling and the PR review process, we streamlined development. This led to reduced inconsistencies and a more cohesive product experience.

Key elements of our approach:

- **Refactor-first philosophy** using **Verdant UI 3**, **React 18**, **Chakra 3**, and **Next.js**
- Created a **feature-fork strategy** to develop the Palisades codebase independently while maintaining regular sync with legacy systems
- Adopted **intentional deviations** from outdated patterns to introduce cleaner, scalable solutions --- without appearing prescriptive or overreaching
- Proposed subtle yet powerful engineering enhancements, such as:
  - ESLint rule improvements for better code hygiene
  - Prettier config standardization to reduce review noise
  - Dependency management standardization
  - Proposal to migrate bundling to **Vite** to leverage Next.js's latest capabilities

To support the successful rollout of the component library and the information architecture redesign, several key initiatives were implemented:

- **Unified Design Language & Asset Management:** A centralized repository for core design assets (e.g., icons) was created, ensuring consistent branding and faster, error-free development across the new UI ecosystem.

- **Elevated Code Quality & Collaborative Standards:** Through a collaborative effort between onshore and offshore teams, we streamlined the pull request (PR) review process by first documenting existing review standards into clear, offshore-friendly guidelines. This alignment fostered trust, improved review quality, and enabled senior offshore engineers to gradually take on more review responsibilities. The result was a significant reduction in PR review time, which played a pivotal role in decreasing overall cycle time by 51% over just four months.

- **Standardized Code Integration Practices:** Best practices for version control were exercised to maintain a clean history and support parallel development across streams.

- **Proactive Quality Assurance for IA:** Regression test cases were proactively documented for components impacted by the information architecture transformation, mitigating risks in future rollouts.

- **Real-time Migration Dashboard:** A custom-built dashboard was introduced to track the Verdant v2 to v3 migration progress in real time, giving stakeholders visibility and confidence during the transition.

### **Solution**

Project Palisades is being executed through parallel workstreams for Spring, Compass, IA refresh, and component library overhaul. Deliverables include:

- A centralized component library called **Verdant v3**, built on Chakra UI v3
- **Improved scaffolding** for routing, templating, and SPA behavior
- Enhanced **accessibility conformance** built into component structure
- A new **IA structure** for Spring, with better content categorization and labelling
- Development of **component libraries** with the long-term goal of ecosystem-wide consistency

The team has maintained **zero interference with ongoing roadmap work**, operating in a parallel environment and ensuring compatibility with legacy systems through careful sync mechanisms.

### **Results & Impact**

While the project is still in-progress, **qualitative wins** are already emerging:

- The client has acknowledged the **clarity of thinking** and **care in execution**
- Internal conversations now reflect **trust in the direction**, even when proposals challenge old norms
- Development velocity has increased within the Palisades fork due to **reduced review noise** and **clearer standards**
- Engineering maturity has been demonstrated by identifying performance risks early and suggesting forward-looking improvements

### **Reflection**

**Proud Moments**

What stands out most in this engagement is the **deliberate restraint** and **measured proactivity** the team practiced. Rather than rushing change or overwhelming the client with large proposals, we focused on **earning trust through craft**---small wins, well-framed suggestions, and consistent, quality-focused delivery.

**Toughest challenge**

The **toughest part** has been balancing long-term improvements with short-term alignment: working around legacy patterns while nudging toward modern practices---without disrupting harmony.

**What's next**

As Project Palisades moves closer to rollout, several strategic improvements have been proposed to guide the next phase:

- **Streamlined Design-to-Dev Handoff:** A structured design review process is proposed, with annotated specs in Figma capturing interactive behaviours and component mappings from the outset.

- **Comprehensive Requirements Capture:** The team recommends recording detailed functional, behavioural, and accessibility expectations for all new components directly within project management tools like JIRA.

- **Centralized Knowledge Hub:** A shared Confluence space is proposed to house coding standards, architectural guidelines, and usage best practices---fostering consistency and accelerating onboarding.

- **Enhanced Code Governance:** Continued use and enforcement of ESLint, Prettier, and similar tools are recommended to maintain code hygiene and reduce manual review overhead.

- **Legacy Code Cleanup Initiative:** A focused cleanup effort is planned to eliminate unused scripts and legacy utilities, improving performance and reducing long-term debt.

- **Automated Dependency & Security Management:** Tools like Dependabot or Mend are recommended to monitor and update vulnerable or outdated packages, improving the security posture of the frontend ecosystem.
