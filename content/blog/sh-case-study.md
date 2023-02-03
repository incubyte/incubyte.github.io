+++
authors = ["Utsav Parmar", "Abhishek Keshri", "Deepshikha Pingle"]
categories = ["Case Study"]
date = 2023-01-30T00:00:00Z
description = ""
draft = true
image = ""
slug = "sh-case-study"
tags = ["Case Study"]
title = "Spring Health: Taking Mental HealthCare Solution Global"
+++

## Client
Spring Health is the most comprehensive global mental health solution for employers. It started its journey back in 2016 and growing since then.

## Global Care
The next-generation tech-enabled precision mental healthcare offering that is Spring Health went international, localizing the experience and bringing quality care to 41 countries in 22 new languages. While Spring Health continues to extend the care globally, let's take a look at the technical how.

## What We Did
- Created a framework to enable global offerings in the web application
- Country specific language content
- Streamline workflow integrating a third-party translation service~
- Extended international offering to 40 more countries in 9 more languages
- Upgraded major project dependencies to access internationalization packages

## Outcomes
- 40+ countries
- 9+ languages
- 3 months for going live
- Easy quick process to add more countries and languages

## Challenges and Solutions

### Tech Debt
In the JavaScript world, it doesn't take long for dependencies to become stale. While relatively older versions of most of the major libraries are stable, we cannot leverage the new and improved features that the newer versions provide to help us complete our job easily. In certain cases, it was mandatory to reach to a minimum version requirement to be able to add internationalization libraries.  We learnt this the hard way when we were initially trying to add internationalization changes to the codebase. Thus, as our first step, we identified the necessary libraries that required upgrades, resulting into a chain of few other dependent libraries as well, and spent few sprints solely to take care of it. This also led us to recognize several other dependencies that we could benefit from upgrading and helped plan the process to tackle this later on, which deserves its own separate story.

### Internationalization

#### Translations
We had translatable content stored both on the frontend and backend, each of which had their own challenges.

#### Frontend
A simple local frontend application will have all the static content in its codebase itself and ours was no different. Once the configuration for internationalization were in place, the next step was to actually move all the static string literals to a specific file format. We chose a standard file format - JSON to store all our translations and thus when moved, the static content got replaced with references to the content in these JSON files. This makes it easier to load the translations on switching locales.

Since the content is static, the translations need to be generated and stored before going live. Comes into picture, Crowdin, a third-party localization service. The service syncs up with the repository on GitHub and reads only the locales folder that it needs to translate. Once the main branch is translated, we need to ensure that all the subsequent features created by developers adhere to the same standard format so that Crowdin can easily keep translating any new content. To ensure this, Crowdin was setup in such a way that it creates a Pull Request with translations pointing to the relevant feature branch. The author of the feature branch can review and merge the translations in and now any newly added features with always have all the static content in all the configured locales.

#### Backend

On the backend we are using an API built on rails that serves all the data used by our web app, and as any other API most of our data is stored in a database.

This posed an interesting challenge as we had to translate database content. Initially we went ahead and utilized a library called `Mobility` that helped us implement translations on the database itself. But using this approach didn’t allow us to use third party vendors like Crowdin to automate the translations. We had to come up with a better approach.

This is when we introduced a database + rails-i18n approach for serving translated content. Identifying all the attributes in individual models that required translations, the corresponding English data were extracted out into rails-i18n recognizable YAML file structure using automated tasks. Next was the integration of Crowdin to provide translations for the automated locales.

Then we implemented custom attribute readers in the models, that depending on the current language utilized either the database or rails-i18n to fetch the attribute value. We relied on the database for serving English content and rails-i18n and YAML files for serving translated content.

This custom approach allowed us to treat the database content as source of truth for translations, using database for English translations minimized response times for the majority of our users and introducing YAML files for locale data allowed us to utilize Crowdin for providing automated translations.

#### Translating Emails

As is prevalent, we also utilize mails for communication with the user and as we went global, we had to make sure that our mails are also translated.

Initially all of our mails were handled by rails views, and every mail was basically an embedded ruby file that plugged in data at required segments and sent out the mail.

This posed some challenges, the content of our mails changes often and relying on devs to make these changes frequently was turning out to be a bottleneck for our marketing efforts.

We needed a tool that someone from a non-tech background could easily use, while still being powerful enough to provide the features present in embedded ruby mailers. That is when we introduced Iterable, a service that allowed us to do exactly these things, it provided an easy-to-use WYSIWYG drag and drop editor to create mail templates and also had embedded ruby like data plugin features using its robust API, along with these it also came with detailed metrics and telemetry service, campaigns and workflows.

We just had to setup the mail templates on Iterable and setup the API with our backend application to send in required data, and boom! You had globalized emails!

This solved a major bottleneck for marketing too as they no longer needed to rely on developers to make changes to the mail content.

#### Locales

The length of words and sentences can wary in different locales. This causes layout issues in design of the User Interface which was initially built with `en` in mind. The solution to this in most cases, is a simple fix to the design elements property to handle it dynamically.

Now, as we kept on expanding to more countries supporting more locales, we reached a locale that uses a script that is read and written in right-to-left direction as opposed to `en` using Latin script that goes in left-to-right direction. Several factors have to be taken into consideration such as:
- Direction of the flow of information
- Bidirectionality of icons
- Animation of UI elements
- Exceptions such as phone numbers, dates and email addresses

There are a number of ways to accomplish this, but after careful consideration, using logical CSS properties appeared to be the best option for our use case.  This meant that the layout should be considered in terms of text, such as the start and end rather than the left and right. While this modification enables RTL layout, we had to ensure that it didn't break with the current LTR layout in any way. 
