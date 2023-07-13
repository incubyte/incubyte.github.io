+++
title = "From Refactoring To Tidying"
slug = "refactoring-to-tidying"
date = 2023-07-13T00:10:46+05:30
image = "/images/2023/think-like-architect.png"
draft = false
authors = ["Sapan Parikh"]
description = ""
tags = ["Refactoring", "CodeScene"]
categories = ["Refactoring", "CodeScene"]
type = ""
+++

Most of the developer’s job turns out to be doing tactical activities. Adding a text box here, adding a checkbox there, fixing a bug, or working with an outage. 

But there are small tidyings that one can work on which directly impact the quality of code and shift the developer’s work from tactical to strategic.

We did a small exercise on the impact of such changes on overall code quality. We started with scanning [Elasticsearch Github Repository](https://github.com/elastic/elasticsearch) with [CodeScene](https://codescene.io)

CodeScene, a tool I came across after reading Software Design X-Rays, helps tech leaders uncover, prioritize, and solve the technical debt. 

Here is the screenshot of the initial code quality of one of the hotspots detected by CodeScene.

{{< figure src="/images/2023/codescene_refactoring/intial.png" >}}

When developers only focus on fixing the next bug or introducing the next feature, that very nature is also reflected in the code. Most of the time, it’s in the form of `if` and `else.` Because of this the code starts looking like 

```java
if(need to update){
	for(all elements in the list){
		let's update the elements
	}
}else if(already updated){
	for(all elements of the list){
		mark them safe
	}
} else if(insert new records) {
	for(all the new element){
		add it to list
	}
}
```

Code like the above soon starts growing in depth and breadth, which means these methods tend to get longer and with nested logic. 

One such method in the hotspot was the following

![Initial code](https://drive.google.com/uc?export=view&id=1rPLNr3n4APx1KHybY8Hc_dgm9uCkMqYh "Initial code ")

In these cases, to increase the readability and also the maintainability, it’s easy to start extracting methods, meaning, copying a part of the nested code and making a new method. Most IDEs support it fully automatically, meaning extracting method is low-risk and free of manual operations.


![refactoring GIF](https://drive.google.com/uc?export=view&id=1wbuhw60mISaLbB2R0_Mg_sFWiD5sJDH- "refactoring GIF")

Now let’s look at the new code health rating.

![final code health](https://drive.google.com/uc?export=view&id=11fpXcm-QuOCSJhAxX7LaK8hkZlkfBqAX "final code health")

