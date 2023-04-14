+++
authors = ["Padma B"]
categories = ["Software Craftsmanship"]
date = 2023-04-14T00:00:00Z
description = ""
draft = false
image = "/images/2023/02/product-roadmap.004.jpg"
slug = "using-azure-devops-to-create-robust-product-roadmaps"
tags = ["Software Craftsmanship"]
title = "Using Azure DevOps to Create Robust Product Roadmaps"

+++

# <a name="_tmtw75z2whz5"></a>Using Azure DevOps to Create Robust Product Roadmaps

## <a name="_k5vqmq88ehot"></a>Product Roadmap As A Living Document
Creating a Product Roadmap is an important part of the product development process. It addresses the critical problems in progress that contribute to the larger business vision and goals.

A product roadmap can be general or specific and can change as the product evolves or the market changes. As it is a written or visual summary of the objectives for a product, it typically includes 

- a product plan, 
- dependencies, 
- a list of features,
- or milestones that the product team intends to deliver.  

The complexity of the product roadmap varies depending on the target audience. For instance, the sales team may not need the same level of detail as an internal development team.
## <a name="_4b6ssfq0erd1"></a>Objectives Of A Product Roadmap
A product roadmap is an effective tool that needs regular review from all the stakeholders involved. Every feature on the product roadmap is always associated with the business goal defined. Hence it becomes an iterative process. 

The objectives of a product roadmap include—

- Bring stakeholders and team members to an agreement on the direction and priorities of a product 
- Communicate and track progress toward achieving them
- Help the product team stay focused on the right goals
- Ensure stakeholders are aware of the rationale behind decisions

Regular and continuous feedback from end users is incorporated into the product roadmap. Hence it is a living, breathing document that is evolving based on the changing business scenarios and user interactions. 


## <a name="_mtx0p0qo5vuo"></a>Revise Product Roadmap Based On Project Goals
A product roadmap undergoes changes based on three factors—

- the specific product,
- the stage of its development, and,
- organization-level choices.

A product in its initial development stage may require a roadmap to be updated monthly or quarterly. Whereas a mature product may only require a roadmap to be updated annually.

Acquisition, retention, and revenue could also be some stages of a product that could define the frequency of the product road mapping. 

Regardless of the stage of development, a product roadmap should be flexible enough to adapt to changes in the market or product itself.

As a rule of thumb, companies should update their product roadmap every quarter or whenever there is a significant change in strategy or market conditions.

## <a name="_d3hs5fxdgurg"></a>Tools to Build Product Roadmaps  

There are many tools available in the market to help configure a product roadmap. Some are Aha, Roadmunk, Productplan,  Asana, Jira, Miro, etc. 

We have been using Azure DevOps for almost 3 years now and this is how we define product roadmaps with Azure DevOps (ADO).

- A default product roadmap feature is available on Azure DevOps. Epics roadmap feature in Azure DevOps is accessed by navigating backlog or boards. 
 
- Azure DevOps roadmap feature is not necessary if a product has individual teams with their own roadmaps.

- Azure DevOps can be configured in a way that stakeholders can create their own roadmaps using queries, tags, and proper definitions of features and associating respective stories.  
<a name="_412iyj325u33"></a>Step-By-Step Guide On How To Define Product Roadmaps on Azure DevOps

------------------------------------------------------------------------------------------------
- Create Features with a common tag. 
  This will help us as an initial filter in queries to get the team’s related features. 

![Screenshot of Azure DevOps Product Roadmap feature](/images/2023/02/product-roadmap.001.png)





- The next step is to create the known list of stories under each feature by adding a parent link to the story. 

![Screenshot of Azure DevOps Product Roadmap feature](/images/2023/02/product-roadmap.002.png)



- Now the query can be modified into parent-child relationship types. 

![Screenshot of Azure DevOps Product Roadmap feature](/images/2023/02/product-roadmap.003.png)



- Every release can have a tag given in ADO. The stories prioritized for release can be given a release tag. 
- The tags filter can be applied at the stories level to get the prioritized stories for a release. Now we can save the query by providing a release name.
- The same query can be 
  - used at the features and epics level while talking to business stakeholders about goals and vision. 
  - used at the features and stories level while talking to the internal development team. 
  - shared with end users at the features level to talk about the releases and milestones. 
<a name="_bgivgfwop8vc"></a> 
Benefits of Using Azure DevOps Product Roadmap Feature
------------------------------------------------------

Azure DevOps is a robust tool for managing and collaborating on software development projects.

Teams can use the product roadmap feature to align on goals and priorities. Furthermore, development teams can monitor progress toward delivering features and milestones.

The product roadmap feature helps teams stay organized by providing a visual representation of the product's progress. It also enables teams to make data-driven decisions about the product's development. 

Whether you're a startup or a large enterprise, Azure DevOps' product roadmap feature can help streamline the development process and bring products to market faster. 

Overall, the Azure DevOps product roadmap feature is a valuable tool for any team looking to optimize their product development process.


