+++
title = "The Compounding Effect of Tidying Using CodeScene"
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

It turns out that most of a developer's tasks end up being tactical activities, such as adding a text box here, adding a checkbox there, fixing a bug, or working with an outage. However, one can work on small tidying activities that directly impact code quality and shift the developer’s work from tactical to strategic.

## Working with CodeScene

We conducted a small exercise on the impact of such changes on overall code quality. We started by scanning [Elasticsearch Github Repository](https://github.com/elastic/elasticsearch) with [CodeScene](https://codescene.io).

CodeScene is a tool I came across after reading "Software Design X-Rays" that helps tech leaders uncover, prioritize, and solve technical debt.

Here is the screenshot of the initial code quality of one of the hotspots detected by CodeScene.

{{< figure src="/images/2023/codescene_refactoring/initial.png" >}}

When developers solely focus on fixing bugs or introducing the next feature, that mindset tends to reflect in the code itself. Often, this is evident in the form of 'if' and 'else' statements. As a result, the code starts looking like this:

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

Code like the example above soon becomes more complex, growing in depth and breadth, which means these methods tend to get longer and more nested with logic.  

One such method in the hotspot was the following:

{{< figure src="/images/2023/codescene_refactoring/initial_function_code.png" >}}

## Extract to Improve

To increase code readability and maintainability, it is easier to start extracting methods, i.e., copying a part of the nested code and creating a new method. Most IDEs support this process fully automatically, meaning extracting a method is low-risk and free of manual operations.


{{< figure src="/images/2023/codescene_refactoring/refactor-gif.gif" >}}

Now, if you look at the new code health rating:

{{< figure src="/images/2023/codescene_refactoring/final.png" >}}

A simple shortcut in the IDE has improved the code quality from 3.41 to 3.7, i.e., making a small change has led to an 8.5% improvement in the quality of the entire file. 

## Conclusion

As the saying goes, small changes garner big wins. Similarly, in code, the compounding effect of refactoring is evident in healthy code quality over time. Just think of it as simplifying complex code to enhance readability, benefiting both present and future developer teams. 

