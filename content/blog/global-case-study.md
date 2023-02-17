+++
authors = ["Deepshikha Pingle"]
categories = ["Case Study"]
date = 2023-01-30T00:00:00Z
description = ""
draft = false
image = "/images/2023/global.jpg"
slug = "sh-case-study"
tags = ["Case Study"]
title = "Taking Mental Healthcare Solution Global"
+++
## Client

The client is a leading comprehensive global mental health solution provider for employers. It began its journey in 2016, with a valuation of $2 billion in September 2021, and has been steadily growing since then.

## Problem Statement

Our client's reach was only local for the first few years, they wanted to go global by localizing the experience and providing high-quality care in numerous nations and languages, which presents its own set of challenges, including the following.

- Scalability
- Support for new countries
- Support for new languages

## What We Did

- Created a framework to enable global care service
- Provide country-specific language content on the web app and emails
- By integrating a 3rd party translation service, we streamlined and automated translation workflow to minimize manual work every time we introduced a new region and a language
- Translated an interactive section of the application that included audio and text content

## Outcomes

{{< figure src="/images/2023/02/global-outcome.png" >}}

- Extended international offering to 41 more countries in 22 more languages
- Ability to introduce the product to a new country within a week
- Support right-to-left languages
- Localize content based on country
- 15000+ global customers added customer added

## Challenges and Solutions

### Internationalization

In just three months, our team developed and deployed a framework to close the gap in global offerings, saving our clients both money and time. The main difficulties we encountered while creating the global framework were:

### Translations

**Challenges**

- Translating the UI based on the user’s language preference
- The client needed an easy way to localize emails and update email content
- UI needed to update based on language direction

## Solution

Any typical software usually communicates with its users through its UI.
Language is one of the most crucial aspects affecting the user's experience across the board from emails to the web and even database content. To present various languages in all of these modalities, we needed a strategy, so we did the following:

### Frontend

- Separated languages from DB or UI to flat files.
- Separated code from the language embedded in it using JSON files
- Update existing usages of string literals with localized versions
- Introduce third-party translation provider **Crowdin**
- Integrate **Crowdin** with GitHub PR workflow to provide automated translations

### Backend

- Identifying and extracting required database content to YAML locale files
- Configure the application to serve localized content based on the user’s language preference
- Introduce third-party translation provider Crowdin for database translations
- Integrate Crowdin with GitHub PR workflow to provide automated translations

### Translating Emails

- Introduce third-party mail service provider Iterable
- Migrate existing code-heavy mailers to easy-to-edit Iterable templates
- Integrate Iterable with existing mail-sending behavior

### Supporting Right-to-Left Languages

- Identifying elements and interactions that needed updates
- Update components with logical CSS properties
- Add support for bidirectional text and icons
- Add smart exceptions based on the content type

### Results

- Users can use the application in their preferred language.
- Users can access content in their preferred language.
- Mail content is now translated and can be tweaked without a dependency on the developer, solving a major bottleneck for the client’s marketing team.
- Users preferring RTL languages could naturally interact with the application.

## Conclusion

A keen study of our client’s requirements and careful selection of suitable solutions helped us achieve the following for our client:

- Roll out the new global framework within three months
- Client can rapidly introduce its product in new countries with minimal effort.
- Expand product presence in 41+ countries with 22+ languages
- Build trust and long-term association with the client
- Improved client satisfaction and global business
