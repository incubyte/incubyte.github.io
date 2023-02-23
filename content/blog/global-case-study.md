+++
authors = ["Deepshikha Pingle", "Utsav Parmar", "Abhishek Keshri"]
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

Our client's reach was only limited to US for the first few years, they wanted to go global by localizing the experience and providing high-quality care in numerous nations and languages, which presents its own set of challenges, including the following.

- Scalability
- Support for new countries
- Support for new languages

## What We Did

- Created a framework to enable global care service
- Provided country-specific language content on the web app and emails
- Integrated a 3rd party translation service, automating translation workflow to minimize manual work every time we introduced a new region and a language
- Translated an interactive section of the application that included audio and subtitle content

## Outcomes

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center; flex-wrap: wrap; margin-left: 20px;">
<h2 >42+</h2> &nbsp;&nbsp; Countries have international offerings
</span>

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center; flex-wrap: wrap; margin-left: 20px;">
<h2>22+</h2> &nbsp;&nbsp; Languages available for users
</span>

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center; flex-wrap: wrap; margin-left: 20px;">
<h2>15000+</h2> &nbsp;&nbsp; Global users added
</span>

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center; flex-wrap: wrap; margin-left: 20px;">
<h2>7</h2> &nbsp;&nbsp; or fewer days for adding new languages
</span>

<span style="display: flex;flex-direction: row;align-content: center;justify-content: flex-start;align-items: center; flex-wrap: wrap; margin-left: 20px;">
<h2>RTL</h2> &nbsp;&nbsp; Language support
</span>

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
- Generalized hardcoded words and statements to use localized and dynamic versions
- Introduced third-party translation provider **Crowdin**
- Integrated **Crowdin** with GitHub PR workflow to provide automated translations

### Backend

- Identified and extracted required database content to YAML locale files
- Configured the application to serve localized content based on the user’s language preference
- Introduced third-party translation provider Crowdin for database translations
- Integrated Crowdin with GitHub PR workflow to provide automated translations

### Translating Emails

- Introduced third-party mail service provider Iterable
- Migrated existing emails to utilize easy-to-edit templates

### Supporting Right-to-Left Languages

- Identified elements and interactions better Right-to-Left experience
- Updated components with logical CSS properties
- Added support for bidirectional text and icons
- Added smart exceptions based on the content type

### Results

- Users can use the application in their preferred language.
- Users can access content in their preferred language.
- Mails are now translated and can be modified without a dependency on the developer, removing a major bottleneck for the client’s marketing team.
- Users preferring RTL languages could naturally interact with the application.

## Conclusion

A keen study of our client’s requirements and careful selection of suitable solutions helped us achieve the following for our client:

- Roll out the new global framework within three months
- Client can rapidly introduce its product in new countries with minimal effort.
- Expand product presence in 42+ countries with 22+ languages
- Build trust and long-term association with the client
- Improved client satisfaction and global business
