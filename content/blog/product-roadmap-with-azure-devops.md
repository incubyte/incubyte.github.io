+++
authors = ["Padma B"]
categories = ["Software Craftsmanship"]
date = 2023-04-14T00:00:00Z
description = ""
draft = false
image = "/images/2023/product-roadmap-title.jpg"
slug = "product-roadmaps-with-azure-devops"
tags = ["Software Craftsmanship"]
title = "Using Azure DevOps to Create Robust Product Roadmaps"
+++


This article explores the learnings we gathered from using Azure DevOps to create robust product roadmaps. 

## A Product Roadmap is a Living, Breathing Document

Creating a product roadmap is an integral part of the product development process. It addresses the critical problems in progress that contribute to the larger business vision and goals.

A product roadmap is a generic document that changes as the product evolves or the market changes. As it is a written or visual summary of the objectives for a product, it typically includes
- a product plan,
- dependencies,
- a list of features and epics.

The complexity of the product roadmap varies depending on the target audience. Incorporating regular and continuous feedback from end users is a must when refining a product roadmap. Hence it is a living, breathing document constantly evolving based on user feedback and the changing business scenario.

## A Product Roadmap Helps Align StakeHolders on a Business Goal

As mentioned, a product roadmap is a tool that requires regular review from all the stakeholders involved. Every feature on the product roadmap is always associated with the defined business goal. Hence it becomes an iterative process.

The objectives of a product roadmap include the following—

- Bringing stakeholders and team members to an agreement on the direction and priorities of a product
- Communicating and tracking progress toward achieving them
- Helping the product team stay focused on the right goals
- Ensuring stakeholders are aware of the rationale behind decisions


## A Product Roadmap is an Outcome of Agile Ceremonies

The product roadmap is constantly evolving based on iteration ceremonies. These could be backlog refinement sessions, demos, and more. 

Iterations include 
- constantly refining the backlogs, 
- moving stories based on the changes in priorities,
- adding new stories to the backlog.

For instance, a team adding new stories to the product roadmap further extends its timeline. 

The frequency with which a product roadmap is refined is generally every two weeks. This happens during iteration sessions. For large projects with multiple teams and stakeholders involved, it's always a best practice to define layers in a product and maintain a single roadmap with progression in each layer.

Acquisition and retention are also some stages of a product that lead to the evolution of a product roadmap.

A product roadmap undergoes changes based on the—
- constant feedback from the end users,
- stage of product development, and,
- organization-level decisions.

Regardless of the stage of development, a product roadmap should be flexible enough to adapt to changes in the market or product itself.

The focal point is that a product roadmap aids with daily planning activities. It is a document that works in unison with the day-to-day workflow of a team. And tools for product road mapping enable us to streamline that process quickly.


## A Product Roadmap is Configured Using Tools Like ADO  

Many tools are available in the market to help configure a product roadmap. Some are Azure DevOps, Aha, Roadmunk, Productplan, Asana, and Jira.

We have been using Azure DevOps for almost three years, and this is how we define product roadmaps with Azure DevOps (ADO).

- ADO offers features such as Epic Roadmap and Feature Timeline. 
	You can access the roadmap feature by navigating the backlogs or boards. 

- In ADO, stakeholders can create roadmaps using queries, tags, and proper definitions of features and associating stories.

## Step-by-Step Guide on How to Define Product Roadmaps using Azure DevOps

- Create high-level Epics with Features under it. 

	Features can be labelled with tags. Tags are best suited for work allocation and they differentiate different high-level features from each other.
   
- Each Feature will have corresponding User Stories as child links.

   	These stories are achievable goals in the short term. Stories prioritized for release will be set with a 'Production Release Date' field. 

- Another way to track work items is using the sprint view. 

	Filtering on the sprint view is an efficient way to look at tasks.
  
1.  Create a new query where the work item type is 'Feature,' and the tag is the common tag you want to filter with. 
    This query is our initial filter to get all of the related features of the team.
    
    {{< figure src="/images/2023/product-roadmap-1.png" >}}
    
1. Add a second query where the filter option returns all the selected 'child' links corresponding to each feature. 

    {{< figure src="/images/2023/product-roadmap-2.jpg" >}}
  
1. To see the status of stories or features, i.e., whether they are new, active, or done, create a sub-query to check the 'State' of the item.  
 
    {{< figure src="/images/2023/product-roadmap-3.jpg" >}}
 
1. Save the query for easy reference.

The same query can be—
- Used at the features and epics level while talking to business stakeholders about goals and vision.
- Used at the features and stories level while talking to the internal development team.
- Shared with end users at the features level to discuss the releases and milestones.

##  Azure DevOps is a Beneficial Tool for Building Product Roadmaps

Azure DevOps is great for managing and collaborating on software development projects.

As it's highly integrated with all other development processes, the product roadmap features offer stakeholders a holistic view of the product's progress.  

### Business stakeholders can use the product roadmap feature to align on goals and priorities.

It enables crucial stakeholders to make data-driven decisions about the product's development.

### Internal development teams can monitor progress toward delivering features and milestones.

Furthermore, development teams can stay organized by visualizing a product's progress.


Azure DevOps' product roadmap feature can help bring products to market faster, whether you're a startup or a large enterprise.

Overall, the Azure DevOps product roadmap feature is a valuable tool for any business looking to optimize its product development process.


