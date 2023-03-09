+++
authors = ["Sapan Parikh"]
categories = ["Software Craftsmanship"]
date = 2023-03-08T00:00:00Z
description = ""
draft = false
image = "/images/2021/06/Picture1-clean-agile-1.jpg"
slug = "clean-agile-with-uncle-bob-a-summary"
tags = ["Software Craftsmanship"]
title = "Clean Agile with Uncle Bob: A Summary"

+++

# Clean Agile

## Summary

Clean Agile is a book by Rober C. Martin that revisits the subject of agility in the world of software programming.

It's the perfect timing if you are considering reading the book, especially when Agile has become a project management process, a methodology void of engineering practices. Most of this can be blamed on the cottage industry distributing certificates after a three-day workshop.

Following is the chapter-by-chapter summary of the book. If you find it incomplete, it's because of a reason; we want you to read it :-)

## Chapter 1 Introduction to Agile

Seventeen programmers met in Snowbird lodge in Utah and wrote the following manifesto.

- Individuals and interactions over processes and tools.
- Working software over comprehensive documentation.
- Customer collaboration over contract negotiation.
- Responding to change over following a plan.

### The Iron Cross

> This physics constrains all projects to obey an unassailable trade-off called the Iron Cross of project management. Good, fast, cheap, done: Pick any three you like. You can’t have the fourth.
>
>
> The reality is that a good project manager understands that these four attributes have coefficients. A good manager drives a project to be good enough, fast enough, cheap enough, and done as much as necessary. A good manager manages the coefficients on these attributes rather than demanding that all those coefficients are 100%. It is this kind of management that Agile strives to enable.
>

The velocity and burndown charts are valuable tools to manage these coefficients. Agile is a feedback-driven approach, “in most cases, your tomorrows are going to look like yesterdays!” These charts help you make appropriate adjustments and fail fast if you do not meet the deadlines.

Talking of deadlines, they are the first thing you know. Even before the name of the project is decided, the deadline is. In a typical waterfall way, the projects would go through different phases for a few months before a half-baked project is delivered to a client, which causes a lot of friction at the end of the project.

On the contrary, a more agile way of working maybe work in tiny iterations, say a week.  We may deliver a working product each week by delivering a well-analyzed, small subset of stories! Each week we know how much we can deliver and in case how much spills over. We use that data to estimate our next iteration. Use the data being generated to feed to upcoming iterations.

> Some folks think that Agile is about going fast. It’s not, and it’s never been about going fast. Agile is about knowing, as early as possible, just how screwed we are.
>

Working in small iterations based on data generated in each iteration allows us to manage and finetune the iron cross while welcoming the changing scope.

Most of the book then focuses on the Circle Of Life (XP) because it is the most well-defined Agile process. Also, I am a big fan of XP because it does not only lean heavily on project management processes but is a perfect combination of technical and team techniques.

![circle of life](/images/2023/03/circleoflife.png)

Let’s conclude with a quote from the book.

> Agile is a process wherein a project is subdivided into iterations. The output of each iteration is measured and used to continuously evaluate the schedule. Features are implemented in the order of business value so that the most valuable things are implemented first. Quality is kept as high as possible. The schedule is primarily managed by manipulating scope.
>

## Chapter 2 The Reasons for Agile

It’s only obvious that software developers should compare themselves with any other professionals, and that’s one of the reasons for agile’s existence which has a higher commitment towards discipline over ceremonies. The reasons we must become more professional are

1. Software is everywhere, even where you don’t notice
2. Software developers’ work is most prolific, and thus intentionally or unintentionally, we are accountable for a lot of the world around us.
3. Given that we are responsible for so much software around us, one day, we may cause a huge disaster that may cause the governments to regulate the entire industry.

Our managers, customers, and users should reasonably be able to expect the following. Uncle Bob calls it reasonable expectations.

1. **We will not ship shyt**. PS: What is not shyt? For me, the most helpful measure of software delivery is the four key metrics from [Accelerate](/blog/accelerate-metrics/).
2. **Continuous Technical Readiness.** The system should be ready to be deployed at any point in time. When that actually happens should be the business’s decision.
3. **Stable Productivity.** By doing our best work and managing technical debt effectively, the team should ensure that the development speed remains the same over time.
4. **Inexpensive Adaptability.** The word “soft” in software indicates that it can change shape and form over time. Thus the architecture should be created such that if requirements change, you should be able to accommodate them without major rewrites.
5. **Continuous Improvement.** Like food, the software is known to rot over time, but as humans, we should make sure that the software improves with time.
6. **Fearless Competence.** Fear of change becomes a huge reason for software entropy. Everyone is expected to be competent and confident enough to make the necessary change in the software to keep it cleaner than yesterday.
7. **QA Should Find Nothing.** QA job should not be to list issues found in the system. Rather their job should be to say, “Everything looks ok to release.”
8. **Test Automation.** Repeatable tests must be automated. Manual QA should do something that involves human creativity and imagination.
9. **We cover for each other.** Teams cover for each other.
10. **Honest Estimates. “**I don’t know” is a much better estimate than “I will try” or estimates based on gut feeling.
11. **You Need to Say “No.”**  Your inputs are regularly used to make decisions; thus, you may need to say “no” when you think something is impossible.
12. **Continuous Aggressive Learning.** Learn Learn Learn
13. **Mentoring.** Teach to learn and learn to teach

This chapter is dedicated to explaining that Agile is not a process but rather a set of rights, expectations, and disciplines.

## Chapter 3 Business Practices

### Planning

This practice tells you how to organize your high-level business requirement into granular features, stories, and tasks. That, in turn, can help you prioritize, estimate, and plan.

### **Small Releases**

Batching is the biggest antipattern in conventional software development, and this practice guides you in the exact opposite direction, do not batch. Instead, release small chunks of work as you do them.

### Acceptance Tests

Pair your stories with acceptance tests which can work as a definition of “done” and bring unambiguity.

### Whole Team

Software development is a team sport, and like any other team, software development teams are also fully cross-functional and comprise developers, testers, and managers.

## Chapter 4 Team Practices

### Metaphor

Use a language that everyone understands and is familiar to technical people and business stakeholders.

### Sustainable Pace

Keep the pace of work that helps you run marathons, not 100 meters sprints.

### Collective Ownership

Avoid knowledge silos, and everyone on the team should own the project.

### Continuous Integration

Fail fast, and get feedback faster on where you stand all the time.

### Standup Meetings

Short meetings of ~10 minutes to calibrate progress. Should comprise of three simple updates.

1. What did I do since the last meeting?
2. What will I do next?
3. What's in my way?

# Chapter 5 Technical Practices

### Test Driven Development

Pursue the highest quality and create a safety net by practicing TDD.

### Refactoring

Continuously improve the software, and leave it cleaner than how you found it.

### Simple Design

Is the practice that prevents waste

### Pair Programming

A practice that catches errors early and encourages knowledge sharing.

# Chapter 6 Becoming Agile

This chapter walks you through the agile values of Courage, Communication, Feedback and Simplicity. And makes the following points.

1. Agile transformation is hard.
2. They often fail
3. The best way to create an Agile org may be by creating smaller organizations that adopt agile.
4. Scrum has led to faux agile transformation for many.
5. Many of the agile certifications are utter jokes.
6. Know your tools well (and believe me, there are many!)
7. Automate automate automate
8. It also takes the reader through an alternative view of coaching by Damon Poole.
9. Don’t let Agile transformation be just the Process of Transformation.

# Chapter 7 Craftsmanship

Read superficially. Agile means do agile (not be) to deliver software faster. This led to Agile becoming a “Fix the process” movement. In this movement, engineering practices have no place. Because of this, developers started moving away from Agile development.

To raise the bar of professional software development software craftsmanship manifesto was created in 2008

### Software Craftsmanship Manifesto

As aspiring Software Craftsmen, we are raising the bar of professional software development by practicing it and helping others learn the craft. Through this work, we have come to value:

- Not only working software but also well-crafted software.
- Not only responding to change but also steadily adding value
- Not only individuals and interactions but also a community of professionals
- Not only customer collaboration but also productive partnerships

That is, in pursuit of the items on the left, we have found the items on the right to be indispensable.

This manifesto was created to emphasize the importance of engineering practices in software development and to promote a community of professionals dedicated to the craft of software development.

A few other points made in this chapter are

1. **Focus on the value,** not the practice. Though reject a practice only if you have a better alternative
2. **Discuss practices at the right level,** whether to write unit test cases or not, should not be discussed with the CTO, but on the contrary, large architectural changes may need discussion with a wider audience.
3. **Craftsmanship impact on the individual,** craftspeople being professionals do not see their work as just another job. They rather enjoy their work.
4. **Craftsmanship impact on our industry,** Software Craftsmanship promotes a culture of learning, making companies more innovative and responsive.
5. **Craftsmanship and Agile** both want to achieve very similar things and one should not be at odds with another.

## Conclusion

It’s a great book that revisits Agile and XP in detail from the perspective of a software developer. This a great reminder for the software development community to bring the focus back to engineering practices and not just process improvements.

At Incubyte, we've taken software craftsmanship to heart. Internalizing an Agile and craftsmanship mindset has helped us focus on what makes our customers and end users happier. Small and frequent releases help us get value in the hands of the end users fast, get feedback from them fast, and continuously refine the product to create maximum impact - fast! Disciplined engineering practices have ensured that our software is always stable and bug-free. A user-first approach helps not only build the right product, but also fosters a collaborative and productive relationship with our customers.
