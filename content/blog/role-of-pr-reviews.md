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

- **Reduced Context Switching**: Since both developers are familiar with the changes, there’s less need for additional context during a formal review process. Despite these advantages, there are scenarios where an additional layer of review is crucial.

### Scenarios Where the Pair Can Handle the Review

1. **Minor Changes and Bug Fixes**

- **Why?** Small, well-understood changes, such as minor bug fixes or cosmetic updates, can typically be reviewed within the pair without needing additional oversight.
- **Example:** Fixing a typo in the UI or resolving a minor bug in a non-critical feature.

2. **Routine Updates**

- **Why?** Regular updates or enhancements that follow well-established patterns and practices in the codebase can often be reviewed by the pair. -**Example:** Adding a new endpoint to an existing API following a standard pattern.

3. **Non-Critical Parts of the System**

- **Why?** Changes to less critical or less complex parts of the system may not require the same level of scrutiny and can be effectively reviewed within the pair.
- **Example:** Updating documentation or improving log messages.

4. **High Collaboration and Trust**

- **Why?** In teams with a high level of collaboration and trust, where pair programming is deeply embedded in the culture, many changes can be reviewed within the pair, relying on the strength of the collaborative process.
- **Example:** Two senior developers working on a well-understood part of the codebase.

5. **Prototype or Experimental Code** - **Why?** Code that is experimental or part of a prototype might not need formal review, as it is not intended for production use and is likely to be revisited.

- **Example:** Creating a proof-of-concept for a new feature to explore its feasibility.

### Scenarios Needing a PR Review by a Third Person

1. **High-Risk Changes**

- **Why?** Changes involving critical or sensitive parts of the system, such as security-related code, core algorithms, or significant architectural changes, require extra scrutiny to ensure no issues are missed.
- **Example:** Modifying authentication mechanisms or altering data handling processes in a financial application.

2. **Large-Scale Refactoring**

- **Why?** Major refactoring affecting multiple components or modules benefits from a third-person review to ensure comprehensive coverage and avoid unintended consequences.
- **Example:** Refactoring the entire user interface framework in a large web application.

3. **New or Complex Features**

- **Why?** Introducing new features or making complex changes might require a fresh perspective to ensure all edge cases are considered and handled appropriately.
- **Example:** Adding a new payment integration system in an e-commerce platform.

4. **Compliance and Regulatory Requirements**

- **Why?** Industries with strict compliance and regulatory requirements, such as healthcare or finance, often necessitate third-party reviews to meet legal obligations and ensure adherence to standards.
- **Example:** Implementing changes to handle GDPR compliance.

5. **Onboarding New Team Members**

- **Why?** When a pair includes a new team member, having a third-person review helps ensure the new member adheres to coding standards and best practices.
- **Example:** A new developer working on their first significant feature in the codebase.

6. **Disagreements or Uncertainty**

- **Why?** If the pair cannot agree on a solution or is uncertain about the correctness or impact of their changes, a third person’s perspective can provide clarity and resolve disagreements.
- **Example:** Differing opinions on the best approach to optimize a complex algorithm.

### Best Practices

To strike a balance between the efficiency of pair programming and the assurance provided by third-party reviews, consider the following best practices:

- **Document Guidelines**: Clearly document the guidelines and scenarios that require third-party reviews. This helps in maintaining consistency and understanding across the team.
- **Automated Checks**: Use automated tools for static analysis, testing, and continuous integration to catch common issues, reducing the burden on manual reviews.
- **Regular Retrospectives**: Hold regular retrospectives to assess the effectiveness of the review process and make adjustments as needed.

### Conclusion

Pair programming can significantly reduce the need for formal PR reviews, but incorporating third-person reviews in specific scenarios can provide additional benefits in terms of oversight, consistency, documentation, and learning. By applying these guidelines, you can ensure high-quality code and smooth collaboration within your team, leveraging the strengths of both pair programming and PR reviews.

By understanding when to involve a third person and when to rely on the pair, teams can create a robust and flexible review process that enhances code quality and fosters a collaborative environment.
