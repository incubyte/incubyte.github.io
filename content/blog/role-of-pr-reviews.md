+++
title = "Pair Programming: Rethinking the Role of PR Reviews"
slug = "pair-programming-rethinking-the-role-of-pr-reviews"
date = 2024-07-01T00:00:00Z
image = "/images/2024/role-of-pr-reviews/header.jpg"
draft = false
authors = ["Siya Agarwal"]
description = ""
tags = ["Software Craftsmanship", "Pair Programming"]
categories = ["Software Craftsmanship", "Pair Programming"]
type = ""
+++

Pair programming is a collaborative approach where two developers work together at a single workstation, continuously reviewing each other’s code. This method is known for enhancing code quality, facilitating knowledge sharing, and reducing the need for formal pull request (PR) reviews. However, there are scenarios where a third-person review can be beneficial, even when pair programming is in place. In this blog, I’ll discuss why I favor internal reviews within the pair and treat third-person reviews as exceptions, exploring when each approach is most appropriate.

### The Power of Pair Programming

Before diving into the specifics, let’s briefly revisit the benefits of pair programming:

- **Continuous Code Review**: As two developers work together, they continuously review each other’s work, catching issues early and ensuring high code quality.

- **Knowledge Sharing**: Both developers gain a deeper understanding of the codebase and the changes being made, promoting team-wide knowledge distribution.

- **Reduced Context Switching**: Since both developers are familiar with the changes, there’s less need for additional context during a formal review process.

Despite these advantages, there are scenarios where an additional layer of review is crucial.

### Scenarios Where the Pair Can Handle the Review

- **Minor Changes and Bug Fixes**

**_Why?_** Small, well-understood changes, such as minor bug fixes or cosmetic updates, can typically be reviewed within the pair without needing additional oversight.

**_Example:_** Fixing a typo in the UI or resolving a minor bug in a non-critical feature.

- **Routine Updates**

**_Why?_** Regular updates or enhancements that follow well-established patterns and practices in the codebase can often be reviewed by the pair.

**_Example:_** Adding a new endpoint to an existing API following a standard pattern.

- **Non-Critical Parts of the System**

**_Why?_** Changes to less critical or less complex parts of the system may not require the same level of scrutiny and can be effectively reviewed within the pair.

**_Example:_** Updating documentation or improving log messages.

- **High Collaboration and Trust**

**_Why?_** In teams with a high level of collaboration and trust, where pair programming is deeply embedded in the culture, many changes can be reviewed within the pair, relying on the strength of the collaborative process.

**_Example:_** Two senior developers working on a well-understood part of the codebase.

- **Prototype or Experimental Code**

**_Why?_** Code that is experimental or part of a prototype might not need formal review, as it is not intended for production use and is likely to be revisited.

**_Example:_** Creating a proof-of-concept for a new feature to explore its feasibility.

### Scenarios Needing a PR Review by a Third Person

- **High-Risk Changes**

**_Why?_** Changes involving critical or sensitive parts of the system, such as security-related code, core algorithms, or significant architectural changes, require extra scrutiny to ensure no issues are missed.

**_Example:_** Modifying authentication mechanisms or altering data handling processes in a financial application.

- **Large-Scale Refactoring**

**_Why?_** Major refactoring affecting multiple components or modules benefits from a third-person review to ensure comprehensive coverage and avoid unintended consequences.

**_Example:_** Refactoring the entire user interface framework in a large web application.

- **New or Complex Features**

**_Why?_** Introducing new features or making complex changes might require a fresh perspective to ensure all edge cases are considered and handled appropriately.

**_Example:_** Adding a new payment integration system in an e-commerce platform.

- **Compliance and Regulatory Requirements**

**_Why?_** Industries with strict compliance and regulatory requirements, such as healthcare or finance, often necessitate third-party reviews to meet legal obligations and ensure adherence to standards.

**_Example:_** Implementing changes to handle GDPR compliance.

- **Onboarding New Team Members**

**_Why?_** When a pair includes a new team member, having a third-person review helps ensure the new member adheres to coding standards and best practices.

**_Example:_** A new developer working on their first significant feature in the codebase.

- **Disagreements or Uncertainty**

**_Why?_** If the pair cannot agree on a solution or is uncertain about the correctness or impact of their changes, a third person’s perspective can provide clarity and resolve disagreements.

**_Example:_** Differing opinions on the best approach to optimize a complex algorithm.

### Best Practices

To strike a balance between the efficiency of pair programming and the assurance provided by third-party reviews, consider the following best practices:

- **Document Guidelines**: Clearly document the guidelines and scenarios that require third-party reviews. This helps in maintaining consistency and understanding across the team.

- **Automated Checks**: Use automated tools for static analysis, testing, and continuous integration to catch common issues, reducing the burden on manual reviews.

- **Regular Retrospectives**: Hold regular retrospectives to assess the effectiveness of the review process and make adjustments as needed.

### Conclusion

Pair programming can significantly reduce the need for formal PR reviews, but incorporating third-person reviews in specific scenarios can provide additional benefits in terms of oversight, consistency, documentation, and learning. By applying these guidelines, you can ensure high-quality code and smooth collaboration within your team, leveraging the strengths of both pair programming and PR reviews.

By understanding when to involve a third person and when to rely on the pair, teams can create a robust and flexible review process that enhances code quality and fosters a collaborative environment.
