+++
author = "Incubyte"
categories = ["Playbook"]
date = 2021-11-15T00:00:00Z
description = "What to look for when starting a new software development project"
draft = false
image = "images/2021/checklist.jpg"
slug = "kickstart-checklist"
tags = ["Playbook"]
title = "Project Kickstart Checklist"

+++

The [Checklist Manifesto](http://atulgawande.com/book/the-checklist-manifesto/) by Atul Gawande, walks us through the benefits of the humble checklist. He talks about how checklists of "dumb stuff"  can save us from disasters in life and death situations. We developers, too, can use such a checklist when we start a new project.

### 1. Is your code in the source control?
Source control has become a litmus test of a good development workflow. SCM is the first item in Joel Spolsky's "[The Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/)." Though typical mistake developers make is they use source control only for code. Make sure that you use SCM systems for all of the following.

1. Code
2. Build script
3. CI/CD pipeline
4. Deployment script
5. Database migration scripts
6. Wiki, or Architecture Decision Record
7. Any infrastructure-related scripts. Ex dockerfile, docker compose, terraform etc

### 2. Do you have an automated database versioning tool?
Tools like Flyway and, Liquibase stores your database migrations in a text file. Once the database changes are captured in a text file, they can become part of the SCM and be versioned!

### 3. Did you start with a unit test?
Practices like TDD or TCR(Test Commit Revert) are a few of the best practices for development workflow, but if you don't do it, at least make sure that high-quality test cases are part of your codebase. And they should execute often and preferably before you merge the code in your mainline.

### 4. Have you chosen a build tool? Is your build automated? Think Gradle, Maven, PyBuilder, or others.

Be it the thousands of programming submissions we receive or our clients with legacy software. We still see codebases in Eclipse or IntelliJ workspace format, which depends on external Jar or binary files. They involve multiple manual steps before we can make builds successfully or set up the system.

Having your build configuration and dependencies as text files in the codebase helps to reproduce the development environment consistently across machines. Most modern build tools have loads of other features like one-click builds, security checks, license compatibility checks, etc.

### 5. Do you have static code analysis as part of your pipeline?

Many code linters exist today, ranging from open-source PMD to Sonar or Snyke. These linters can catch code-style issues as well security vulnerabilities early in the SDLC. Make it part of your IDE as well as CI/CD pipelines.

### 6. Do you have quality gates as part of the CI/CD pipeline?
Configure your CI/CD pipelines in such a way so that your code repositories reject any code change which has issues. These issues can range from unit test failure to static code analysis issues in the build.

### 7. Do you have a fully automated release and deployment process without manual steps?
Does your code automatically deploy upon successful merge in the pipeline? Does it require manual release approval? Whatever it may be, it has to be part of the fully automated pipeline. You are doing something severely wrong if you need to SSH somewhere or FTP files manually.

### 8. Did you deploy a walking skeleton?
Once you have the smallest working piece of your software along with a framework that can do all of the above, deploy it. This will require you to set up a build tool, database, migration tool, CI/CD pipeline, code scan, and test execution.
And finally, validate all of it by pushing small code changes that gets tested and deployed automatically and succesfully.

The software industry sees so much evolution so fast, but these are a few practices that have stood the test of time and become the holy grail when it comes to basic SDLC hygiene. A good checklist for kick-starting any new project!
