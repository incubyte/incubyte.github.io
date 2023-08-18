+++
title = "Code Tidying #2: The Story of a Backseat Driver"
slug = "code-tidying"
date = 2023-08-18T00:10:46+05:30
image = "/images/2023/codescene_refactoring/blog_header.jpg"
draft = false
authors = ["Sapan Parikh"]
description = ""
tags = ["Refactoring", "CodeScene"]
categories = ["Refactoring", "CodeScene"]
type = ""
+++

Let's embark on a thought experiment. Envision yourself as a driving virtuoso, conquering city streets with gear shifts smoother than a buttered dolphin on a rainbow. Your turns rival a ninja's wit, and parallel parking? You could slide a spacecraft into a closet unscathed.

Now, imagine this twist: You're not the driver but the ultimate backseat conductor – a dictator! 

"Hard left, now! No, no, the other left! Smooth right, smoother than a freshly buttered pancake! And now, execute the parallel parking extravaganza, but make it snappy – oh, and don't forget to hold your breath!" All this while comfortably seated, you're dishing out orders like a bewildered symphony conductor.

That, my friend, is feature envy! I am sure you have had an experience with a driver in the back seat. Wouldn’t that experience have been much better if the passenger just said, “Let’s go to the mall,” and left the driving details to you? 

Wouldn’t it be awesome if people would “tell” once instead of posing multiple “asks”? 

In programming, too, there is a “tell, do not ask” principle. Let’s visit it  (now, this was a hard segue).

## Feature Envy:
In programming too, there exist backseat drivers. The backseat driver is a module that asks for data from another class or a module and works with it (logic), while the whole logic could have been in the other module.

{{< figure src="/images/2023/code-tidying/1.png" >}}

![](Aspose.Words.408a41ad-a110-48a7-853d-28009047022b.002.png)


## <a name="_lxfcmdo9r4id"></a>Problems Caused by Feature Envy:
- **Code Smell:** It just looks terrible! It may be an indicator of something being wrong with the overall design of the code too. 

- **Coupling:** Many instances of feature envy in code indicate that clear boundaries are not drawn between modules. This lack of boundaries may also increase coupling between these modules. 

~~Without proper boundaries, modules start to get interdependent or coupled with each other.~~ 

- **Duplication:** Because of a lack of ownership of the logic, the same logic may be written in multiple places, causing duplication.

- **Difficult Maintenance:** Because of high coupling, low cohesion, duplication, and general readability-related issues, code becomes difficult to maintain.
## <a name="_1jr6apsafwem"></a>How to Spot it:
Once we scanned the code with CodeScene, we looked closely at the hotspots. 

CodeScene hotspots = files' churn rate + code health.

This means they might be a cesspool of many code smells. Once we knew where to look, finding such feature envy instances was easy.

The other option to detect feature envy issues is by using IntelliJ's code analysis feature on the CodeScene hotspot.

![](Aspose.Words.408a41ad-a110-48a7-853d-28009047022b.003.png)

Here is an example. Do you see how every line of code written here works with an instance of IndexMetadata class? 

Though, currently, this method is in some other class entirely!

![](Aspose.Words.408a41ad-a110-48a7-853d-28009047022b.004.png)


So what can we do?

Well, we move the method body to the class it should belong to! Here is an example. 

![](Aspose.Words.408a41ad-a110-48a7-853d-28009047022b.005.png)




Conclusion:

Larger and better architectural designs are not achieved by fancy diagrams alone. Sometimes small tidyings around code smells help you take a step towards achieving the larger vision. Like we saw here, CodeScene and IntelliJ help you achieve this, one step at a time.

