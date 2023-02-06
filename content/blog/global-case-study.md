+++
authors = ["Deepshikha Pingle"]
categories = ["Case Study"]
date = 2023-01-30T00:00:00Z
description = ""
draft = false
image = "/images/2021/09/laptop-plant.jpg"
slug = "sh-case-study"
tags = ["Case Study"]
title = "Taking Mental Healthcare Solution Global"
+++

## Client

A leading comprehensive global mental health solution for employers. It started its journey back in 2016 and growing since then.

## Global Care

The next-generation tech-enabled precision mental healthcare company went international, localizing the experience and bringing quality care to 41 countries in 22 new languages.

To extend the care globally, they had to solve some challenges, which included internationalization of the application along with content localization.

## What We Did

- Created a framework to globalize care services
- Provide country specific localized content
- Streamline and automate translation workflow, integrating a third-party translation service
- Extended international offering to 41 more countries in 22 more languages

## Outcomes

- Providing care for 41+ countries in 22+ languages
- Ability to introduce the product to a new country within a week
- Having first class support for right-to-left languages
- Localize content based on country

## Challenges and Solutions

### UI Translations

**Challenge**: Translating the UI based on user's language preference

**Solution**:

- Identifying and extracting string literals to JSON locale files
- Update existing usages of string literals with localized versions
- Introduce third-party translation provider Crowdin
- Integrate Crowdin with GitHub PR workflow to provide automated translations

**Outcome**: Users can use the application in their preferred language.

### Content Translations

**Problem**: Translating the UI based on user's language preference

**Solution**:

- Identifying and extracting required database content to YAML locale files
- Configure application to serve localized content based on user's language preference
- Introduce third-party translation provider Crowdin for database translations
- Integrate Crowdin with GitHub PR workflow to provide automated translations

**Outcome**: Users can access content in their preferred language.

#### Translating Emails

**Problem**: Client needed an easy way to localize emails and update email content

**Solution**:

- Introduce third-party mail service provider Iterable
- Migrate existing code heavy mailers to easy to edit Iterable templates
- Integrate Iterable with existing mail sending behaviour

**Outcome**: Mails content is now translated and content can be tweaked without any dependency on developer solving a major bottleneck for client's marketing team.

### Supporting Right-to-Left Languages

**Problem**: UI needed to update based on language direction

**Solution**:

- Identifying elements and interactions that needed updates
- Update components with logical CSS properties
- Add support for bidirectional text and icons
- Add smart exceptions based on content type

**Outcome**: Users preferring RTL languages could naturally interact with the application.

### Conclusion

A keen study of our client requirements and careful consideration of suitable solutions helped us to achieve the following for our client and us.

- Roll-out new global framework within 3 months
- Client is able to rapidly introduce its product in new countries with minimal efforts.
- Expand product presence in 41+ countries with 22+ languages
- Build trust and long-term association with client
