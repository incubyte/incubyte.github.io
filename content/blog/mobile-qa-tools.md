+++
title = "Mobile QA Tools"
slug = "demo-post"
date = 2022-07-11T21:51:14+05:30
image = "/images/2021/07/demo.jpg"
draft = true
authors = ["Incubyte"]
description = ""
tags = ["Playbook", "Software Craftsmanship"]
categories = ["Playbook", "Software Craftsmanship"]
type = ""
+++

Research : Mobile Test automation framework

In the present world mobile applications are highly in demand and are growing continuously across all business sectors. The excellent usability of mobile applications makes it more popular among mobile end users. To tap such mobile users and convert them into a customer base, organizations are ready to do everything possible to create apps that are loved by their prospective users.

One of the key elements in any successful mobile application development is the mobile app testing strategy. Mobile app testing strategy ensures that all the business expectations , requirements and objectives are met before the app is deployed. However testing also imposes challenges on cost optimization as it requires the ability to support various mobile devices and OS. At times mobile QAing becomes costlier and more time consuming as organizations need to

- Test whether the application is working flawlessly on various platforms like Android , iOS and windows.
- Test mobile application to ensure Functionality, Accessibility, Usability, Performance and Security.
- Test mobile applications frequently with every launch of a new feature , OS upgrade or new device modal.

To solve such a critical situation , the best solution or testing strategy is to automate mobile app testing as much as possible. Now you might be wondering why mobile app testing is the best strategy. So let&#39;s look at some of the benefits of mobile testing.

Benefits of Mobile automation testing

Performing Regression tests for each and every mobile build on various mobile platforms is a repetitive and time consuming job. Sometimes manual testing ends up taking more time than the development itself. In such situations Mobile automation testing becomes not only important but also a necessary step. Automation testing -

1. Speeds up and eases mobile testing process
2. Increases test coverage
3. Improves reliability and accuracy
4. Improves visibility because of automated reporting feature
5. Enable performance testing

Now that we are done with the introduction and description part, let&#39;s move to our research on automation testing tools.

To solve the above mentioned critical situations our team decided to automate the mobile testing process. There are a wide range of mobile automation tools available in the market. Some tools like appium support automating both iOS and Android , some tools like XCtest support iOS automation testing and tools like Espresso supports Android automation testing.

Since our requirement included testing both Android and iOS and to have all test scripts placed in one single place we decided to explore frameworks/tools that support both iOS and Android. The framework that we shortlisted for exploration were Flutter framework, Appium with java client, Appium with Webdriverio as javascript client. Our approach was to analyze and implement each framework to test feasibility in terms of stability, robustness, and maintenance. Below are the pros and cons of each framework mentioned:-

- Our first choice was Flutter, since it was using the same programming language as the code base of the application. But looking at the pros and cons, we moved on to the framework for exploration

| _Flutter + Dart_ |
| --- |
| _Pros_ | _Cons_ |
| Better element path finder | Deprecation of flutter driver |
| --- | --- |
| Faster execution and Hot reload | New technology |
| Page Object model support | No Parallel execution |
| BDD( Gherkin) support | Flakiness. |
| Devs can contribute | Complexity of BDD implementation. Every step definition has a different class file which will become difficult to maintain as we increase the number of test cases. |
| Reporting | There is more like widget testing |

- The next option that we explored was Appium framework with java client. We all know that Java is widely used for automation test scripts so we decided to explore this framework. The major issue here was WebDriver handling. By handling we mean complexity of implementation and maintenance of webdriver. The single WebDriver instance has to be passed from one class to another for the entire test execution cycle. which becomes a tedious job when we have multiple page class. Apart from that, Java supports synchronous execution, which means for executing the next step the previous step has to be completed. Below are few pro and cons we found in Appium java client framework.

| Appium + Java |
| --- |
| _Pros_ | _Cons_ |
| Open source | Report generation( No support for detailed report generation) |
| Parallel execution in appium | Slow execution because of remote execution |
| Cross-platform | Different test scripts for Android and iOS |
| Simulator, Emulator and real device support | Element selection is difficult |
| More popular | Flakiness |
| POM implementation | Asynchronous execution not supported |
| They don&#39;t need to access the source code of the application under test |
 |

- The final framework we explored is Appium with javascript client using webdriverio. The power of Javascript&#39;s asynchronous execution along with Appium gave us just the compatibility we needed.

| _Appium + WebdriverIO_ |
| --- |
| _Pros_ | _Cons_ |
| Open Source | Different test scripts for Android and iOS |
| Supports BDD &amp; POM | Suitable only for Javascript |
| Easy to set up and use | Slow execution because of remote execution |
| Simulator, Emulator and real device support | Element selection is difficult |
| Smart selectors | Flakiness |
| No need for driver handling |
 |
| Asynchronous execution |
 |
| They don&#39;t need to access the source code of the application under test |
 |

Exploring, analyzing and developing frameworks in Appium + Java and Appium + Javascript gave us a lot of insight in what each of the frameworks offer and what features we need in our framework.
