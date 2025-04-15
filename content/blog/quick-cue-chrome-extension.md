+++
title = "Building Quick Cue: A Chrome Extension for AI Chat Shortcuts"
slug = "quick-cue-chrome-extension"
date = 2025-04-11T00:00:00Z
image = "/images/2025/quick-cue-extension-for-AI-prompt-shortcuts/header.jpg"
draft = false
authors = ["Dixit Tilaji"]
description = ""
tags = ["AI", "Chrome Extension"]
categories = ["AI", "Chrome Extension"]
type = ""
+++


Like many AI enthusiasts, I found myself writing the same prompts repeatedly when using Claude, ChatGPT, or Gemini. This repetitive typing wasn't just tedious—it was a clear opportunity for optimization. What if there was a way to create shorthand abbreviations that automatically expanded into full prompts?

### The Solution: Quick Cue

This led me to develop a Chrome extension that allows users to create prompt abbreviations quickly accessible with a simple hashtag (#). The goal was straightforward: save time and make interactions with AI chatbots more efficient for everyone.

### Development Journey

#### Setting Up the Project

I began with a React + Vite project foundation, incorporating Tailwind CSS for styling. My initial objective was to create a functional prototype that I could test locally. For a polished interface from the start, I added Shadcn UI components, then created the basic manifest.json file to see the extension in action.

#### Development Environment Challenges

An interesting challenge emerged during testing: while the extension functioned normally as a React app in local development, testing it as an actual browser extension didn't support hot module replacement (HMR) since it uses build files. The solution came in the form of CRXJS, a helpful Vite plugin that automatically bundles code when changes occur, creating a much smoother development workflow.

#### Building the Core Functionality

The first step was implementing some default prompts and displaying them in the extension popup view.
{{< figure src="/images/2025/quick-cue-extension-for-AI-prompt-shortcuts/quick-cue-2.jpg" >}}
Next came the crucial content scripts that would run on specific pages and monitor input elements.

The core functionality required a system that could:

- Detect when users type a hashtag followed by text
- Match that text against saved abbreviations
- Transform the abbreviation into the complete prompt

#### Technical Challenges

Finding the right elements in the DOM proved to be the most challenging aspect. I implemented a mutation observer to track DOM structure changes, and when it located the appropriate elements, I applied regex to identify hashtag-containing strings.

I discovered ChatGPT was already using the '@' symbol for custom GPTs, which confirmed my decision to use hashtags instead.

#### UI Improvements

The initial implementation featured a basic search function that needed refinement. I developed a suggestions dropdown to display relevant abbreviations when users begin typing a hashtag. To position this dropdown correctly, I utilized the getBoundingClientRect browser API to determine the input element's size and position.

To maintain a clean interface, I limited the dropdown to display only the three most relevant abbreviations. I also implemented custom prompt abbreviation creation and enhanced the user experience with smooth Framer Motion animations.

{{< figure src="/images/2025/quick-cue-extension-for-AI-prompt-shortcuts/quick-cue-3.gif" >}}
{{< figure src="/images/2025/quick-cue-extension-for-AI-prompt-shortcuts/quick-cue-4.gif" >}}

#### CSS Isolation

A significant technical hurdle arose when I noticed my CSS was affecting the webpage. The solution required integrating Shadow DOM, which took considerable effort to configure properly. The challenge was correctly injecting my CSS into the shadow DOM while preventing it from influencing the rest of the page.

#### Final Steps

To maintain code quality, I set up a GitHub Action for pull requests, handling essential tasks like building the project and performing linting and formatting checks.

I expanded compatibility to support not just ChatGPT but also Gemini and Claude. For better understanding of user behavior, I integrated PostHog analytics into both the extension popup and the suggestions component.

I expanded compatibility to support not only ChatGPT but also Gemini and Claude. In an effort to better understand user behavior, I initially integrated PostHog analytics into both the extension popup and the suggestions component. However, due to Chrome Store policies that restrict the use of external packages for tracking, I eventually had to remove the PostHog integration.

### Publishing to the Chrome Store

The final stage involved preparing for the Chrome Web Store submission. I created visually appealing covers in Canva and submitted the first version for review. The application process was more involved than expected, requiring numerous fields and selections.

### Conclusion

Creating this Chrome extension was an enlightening journey through browser extension development, DOM manipulation, and AI tool enhancement. The finished product, Quick Cue, effectively solves the problem of repetitive prompt typing by providing an intuitive, hashtag-based shortcut system.

Now anyone can use custom abbreviations across major AI platforms, saving valuable time and streamlining their workflow.

Check out the extension here: [Quick Cue](https://chromewebstore.google.com/detail/quick-cue/pcdhefoofnagnpdmlepnlgkbmgapfijl)
