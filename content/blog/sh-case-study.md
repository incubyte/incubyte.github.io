+++
authors = ["Deepshikha Pingle"]
categories = ["Case Study"]
date = 2023-01-30T00:00:00Z
description = ""
draft = false
image = "/images/2021/09/laptop-plant.jpg"
slug = "sh-case-study"
tags = ["Case Study"]
title = "Taking Mental Healthcare Solutions Global"
+++

## Client

The client is a leading comprehensive global mental health solution provider for employers. It started its journey back in 2016 and growing since then.

## Problem Statement
The next-generation tech-enabled precision mental healthcare company wanted to go international by localizing the experience and bringing quality care to multiple countries and languages. While it continues to extend care providing globally, let's look at the how.

## Challenges and Solutions

### Tech Debt

In the JavaScript world, it only takes a short time for dependencies to become stale. While relatively older versions of most major libraries are stable, we cannot leverage the new and improved features that the more recent versions provide to help us complete our job more efficiently. In some instances, it was mandatory to reach a minimum version requirement to add internationalization libraries.  We learned this the hard way when initially trying to add internationalization changes to the codebase.

As a solution, we identified the necessary libraries that required upgrades, resulting in a chain of a few other dependent libraries as well. We also spent a few sprints solely to take care of it. This also led us to recognize several other dependencies we could benefit from upgrading and helped plan the process to tackle this later, which deserves its own separate story.

### Internationalization

#### Translations

We had translatable content stored both on the front and back end, each of which had its challenges.

#### Frontend

A simple local frontend application will have all the static content in its codebase itself, and ours was no different. Once the configuration for internationalization was in place, the next step was to move all the static string literals to a specific file format. We chose a standard file format - JSON to store all our translations, and thus when moved, the static content got replaced with references to the content in these JSON files. This makes it easier to load the translations on switching locales.

Since the content is static, the translations must be generated and stored before going live. Comes into the picture, Crowdin, a third-party localization service. The service syncs up with the repository on GitHub and reads only the locales folder that it needs to translate. Once the main branch is translated, we need to ensure that all the subsequent features created by developers adhere to the same standard format so that Crowdin can easily keep translating any new content. To ensure this, Crowdin was set up in such a way that it creates a Pull Request with translations pointing to the relevant feature branch. The author of the feature branch can review and merge the translations, and now any newly added features always have all the static content in all the configured locales.

#### Backend

On the backend, we are using an API built on rails that serves all the data used by our web app, and as with any other API, most of our data is stored in a database.

This posed an interesting challenge as we had to translate database content. Initially, we utilized a library called `Mobility` that helped us implement translations on the database itself. But this approach didn’t allow us to use third-party vendors like Crowdin to automate the translations, and we had to develop a better system.

This was when we introduced a database + rails-i18n approach for serving translated content. Identifying all the attributes in individual models that required translations, the corresponding English data were extracted into rails-i18n recognizable YAML file structure using automated tasks. Next was the integration of Crowdin to provide translations for the automated locales.

Then we implemented custom attribute readers in the models that, depending on the current language, utilized either the database or rails-i18n to fetch the attribute value. We relied on the database to serve English content and rails-i18n and YAML files to serve translated content.

This custom approach allowed us to treat the database content as a source of truth for translations, using the database for English translations minimized response times for most of our users, and introducing YAML files for locale data allowed us to utilize Crowdin for providing automated translations.

#### Translating Emails

As is prevalent, we also utilize email for communication with the user, and as we went global, we had to ensure that our emails were translated.

Initially, all of our emails were handled by rails views, and every mail was an embedded ruby file plugged in data at required segments and sent out the mail.

This posed some challenges. The content of our emails changes often, and relying on devs to make these changes frequently was a bottleneck for our marketing efforts.

We needed a tool that someone from a non-tech background could easily use while still being powerful enough to provide the features in embedded ruby mailers. That is when we introduced Iterable, a service that allowed us to do precisely these things. It offered an easy-to-use WYSIWYG drag-and-drop editor to create mail templates and also had embedded ruby-like data plugin features using its robust API. Along with these, it also came with detailed metrics and telemetry service, campaigns, and workflows.

We just had to set up the mail templates on Iterable and set up the API with our backend application to send in the required data, and boom! You had globalized emails!

This also solved a significant bottleneck for marketing as they no longer needed developers to change the email content.

#### Locales

The length of words and sentences can vary in different locales. This causes layout issues in the design of the User Interface, which was initially built with `en` in mind. The solution to this, in most cases, is a simple fix to the design elements' property to handle it dynamically.

Now, as we kept expanding to more countries supporting more locales, we reached a locale that uses a script that is read and written in the right-to-left direction as opposed to `en` using Latin script that goes in the left-to-right direction. Several factors have to be taken into consideration, such as:

- Direction of the flow of information
- Bidirectionality of icons
- Animation of UI elements
- Exceptions such as phone numbers, dates, and email addresses

There are several ways to accomplish this, but logical CSS properties are the best option for our use case.  This meant that the layout should be considered in terms of text, such as the start and end, rather than the left and right. While this modification enables RTL layout, we had to ensure that it didn't break with the current LTR layout in any way.

## What We Did

- Created a framework to enable global offerings in the web application
- Country-specific language content
- Streamline workflow integrating a third-party translation service~
- Extended international offering to 40 more countries in 9 more languages
- Upgraded a significant number of project dependencies to access internationalization packages

## Outcomes

- 40+ countries
- 9+ languages
- 3 months for going live
- Easy, quick process to add more countries and languages

