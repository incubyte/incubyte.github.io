+++ title = "Case-Study: Behaviour Driven Development" slug = "bdd-case0study" date = 2022-07-18T02:32:46+05:30 image = "" draft = true authors = ["Incubyte"] description = "" tags = ["BDD","Outside->In TDD", "Software Craftsmanship"] categories = ["Playbook", "Software Craftsmanship"] type = "" +++

## Implementing Behavior Driven Deployment methodologies to get better Software out the door - a case study

Over the years, the software development process has seen a massive change of pace. Through ideation, design, development, testing and implementation all the processes involve multiple teams. These groups have varied responsibilities and need to work in a cohesive manner to achieve the end goal.

## Bogged down by Waterfall:

Traditional development methodologies having linear processes don’t cut it these days. A frequently changing business landscape and evolving user requirements drive the need to deliver regular and incremental value in thin slices. To get to the point of getting a deliverable ready looks more like the diagram below with multiple points of communication rather than a straight line.

<img width="352" alt="Screenshot 2022-07-18 at 1 28 47 PM" src="https://user-images.githubusercontent.com/81680332/179468238-81b6a1c5-1b4c-4918-95cd-5d1223568831.png">

Fig 1: Communication between multiple distributed teams

Here are some challenges with traditional methodologies:
·	Vagueness in project requirements due to working in silos as per development process phase
·	Improper API documentation as the project grows
·	Treating QA testing as the last process before release
·	Lack of process automation and resulting slower release cycles 

## Focus on behavior and not tools:

“A software system can best be designed if the testing is interlaced with the designing, instead of being used after the designing.”
-	Alan Perils

These days we’re seeing the terms TDD [Test Driven Development, link: https://www.geeksforgeeks.org/test-driven-development-tdd/] and BDD [Behavior Driven Development, link: https://www.techtarget.com/searchsoftwarequality/definition/Behavior-driven-development-BDD] being tossed about a lot, but why the fuss? Radical as it may seem, focus on these processes have become a necessity now if you consider the data from various surveys that show how developers spend almost 1/3rd of their time working to fix issues in their code instead of working on a new feature/enhancement. [source: https://www.businesswire.com/news/home/20210216005484/en/Rollbar-Research-Shows-That-Traditional-Error-Monitoring-Is-Missing-the-Mark] 
 
## TDD helps circumvent these issues by:

•	Forcing attention on software design from the get-go with a focus on modularity
•	Promoting an iterative development strategy
•	Providing a better scalability and maintainability opportunity
•	Removing the veil of uncertainties involving refactoring code

Using the “shift testing/QA to the left” approach, BDD ensures the essence of what the software is supposed to do, is completely and evenly spread across all vital stakeholders, including QAs and PAs. 

We’ve integrated the design first approach of the game changing Gherkin + Karate frameworks in our development process as well. Product Analysts, with their client facing role, can contribute better to creating meaningful API test specifications. Moreover, this also becomes live documentation of the API which can be easily referred to by the development team. Any new code breaking the previous implementation can be caught within seconds with the magic of automation. 

Implementing the pair programming approach, the analyst then works along with a developer to evaluate technical aspects of the feature specification. Over time as the analysts get trained, the process becomes better and feature specifications can be written quickly by the analyst or some other designated business stakeholder in the team thereby avoiding scope creep. Not to mention this is also an imperative skill for the analyst or business stakeholder to possess. 

Every now and then, it’s crucial that we take a moment to analyze our current methodologies and come up with new ways to be efficient.
