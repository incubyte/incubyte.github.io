+++
title = "From Refactoring To Tidying"
slug = "refactoring-to-tidying"
date = 2023-07-13T00:10:46+05:30
image = "/images/2023/codescene_refactoring/blog_header.jpg"
draft = false
authors = ["Sapan Parikh"]
description = ""
tags = ["Refactoring", "CodeScene"]
categories = ["Refactoring", "CodeScene"]
type = ""
+++

It turns out that most of a developer’s tasks end up being tactical activities. Tasks such as adding a text box here, adding a checkbox there, fixing a bug, or working with an outage.

However, one can work on small tidying activities that directly impact code quality and shift the developer’s work from tactical to strategic.

We did a small exercise on the impact of such changes on overall code quality. We started with scanning [Elasticsearch Github Repository](https://github.com/elastic/elasticsearch) with [CodeScene](https://codescene.io).

CodeScene is a tool I came across after reading Software Design X-Rays, that helps tech leaders uncover, prioritize, and solve technical debt.

Here is the screenshot of the initial code quality of one of the hotspots detected by CodeScene.

{{< figure src="/images/2023/codescene_refactoring/initial.png" >}}

When developers focus solely on fixing bugs or introducing the next feature, that mindset tends to reflect in the code itself. Often, this will be in the form of `if` and `else' statements. As a result, the code begins looking like this:

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
	if(element comparison){
		for(all the new element){
			add it to list
        	}
        	for(all the new element){
			mark them safe
        	}
    	}
}
```

Code like the above soon starts growing in depth and breadth, which means these methods tend to get longer, nested with logic.  

One such method in the hotspot was the following:

{{< figure src="/images/2023/codescene_refactoring/initial_function_code.png" >}}

Here, to increase code readability and maintainability, it is easier to start extracting methods, i.e., copying a part of the nested code and making a new method. Most IDEs support it fully automatically, meaning extracting method is low-risk and free of manual operations.


{{< figure src="/images/2023/codescene_refactoring/refactor_gif.gif" >}}

Now if you look at the new code health rating:

{{< figure src="/images/2023/codescene_refactoring/final.png" >}}

