+++
title = " Mobile Test automation tool"
slug = "demo-post"
date = 2022-07-11T21:51:14+05:30
image = "/images/2022/08/mobileTesting.jpg"
draft = false
authors = ["Deepali Mehroliya", "Taha Bikanerwala"]
description = ""
tags = ["Mobile","Automation testing", "Software Craftsmanship"]
categories = ["Playbook", "Software Craftsmanship"]
type = ""
+++


In the present world mobile applications are highly in demand and are growing continuously across all business sectors. One of the key elements in any successful mobile application development is the mobile app testing strategy. Mobile app testing strategy ensures that all the business expectations , requirements and objectives are met before the app is deployed. However testing also imposes challenges on cost optimization as it requires the ability to support various mobile devices and OS. 

### Mobile app testing strategy
It is recommended that the mobile app testing should involve both manual and automation testing. The use cases that are run frequetly and have a fixed or predictable outcome can be automated. The routine test that you run on every day basis to check basic functionality of app can be considered to be automated. In the long run, automating routine tasks pays off as you save a lot of time and avoid potential errors caused by repetition. 

### Benefits and drawbacks of Mobile test automation 

Few of the benfits of mobile test automation are listed below 

-  Speeds up and eases mobile testing process
-  Improves reliability and accuracy
-  Improves visibility because of automated reporting feature
-  Enable non functional testing like performance testing, load testing, security testing etc.


### Mobile test automation tools
Now that we know which use cases are to be automated. The question is, which testing tool is suitale for automation of your mobile app ? 

There are a wide range of mobile automation tools available in the market that can test native, web and hybrid app. Based on your app type and project requirement you can decide which set of tools you want to explore.

Since our App Under Test (AUT) is a hybrid app and based on our project requirement and team skillset we decided to explore tools that support both iOS and Android. The tools that we shortlisted for evaluation were Flutter, Appium with java client, Appium with Webdriverio as javascript client.

- Evaluation approach

Our approach was to analyze and implement each framework to test feasibility in terms of stability, robustness, and maintenance. Below are the pros and cons of each framework mentioned:-

#### 1. Flutter
Our first choice was Flutter, since it was using the same programming language as the code base of the application. But looking at the pros and cons, we moved on to the framework for exploration

{{< figure src="/images/2022/08/flutter_dart.png" >}}

#### 2. Appium with java client
The next option that we explored was Appium framework with java client. We all know that Java is widely used for automation test scripts so we decided to explore this framework. The major issue here was WebDriver handling. By handling we mean complexity of implementation and maintenance of webdriver. The single WebDriver instance has to be passed from one class to another for the entire test execution cycle. which becomes a tedious job when we have multiple page class. Apart from that, Java supports synchronous execution, which means for executing the next step the previous step has to be completed. Below are few pro and cons we found in Appium java client framework.

{{< figure src="/images/2022/08/appium_java.png" >}}

#### 3. Appium with Webdriverio
The final framework we explored is Appium with javascript client using webdriverio. The power of Javascript&#39;s asynchronous execution along with Appium gave us just the compatibility we needed.

{{< figure src="/images/2022/08/webdriverio_js.png" >}}

Exploring, analyzing and developing frameworks in Appium + Java and Appium + Javascript gave us a lot of insight in what each of the frameworks offer and what features we need in our framework.
