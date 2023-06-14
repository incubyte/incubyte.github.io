+++
authors = ["Sutirtha Das"]
categories = ["Software Craftsmanship", "Testing With Java"]
date = 2023-02-21T00:00:00Z
description = ""
draft = false
image = "/images/2023/testing-with-java/testing-with-java-001.jpg"
slug = "testing-with-java-intro"
tags = ["Software Craftsmanship", "Testing With Java"]
title = "Testing With Java - Part 1 : Introduction"
+++

On July 22, 1962, Mariner 1 – America's first interplanetary spacecraft, lifted off from the ground on its way to fly by Venus. However, instead of the cheers and scientific breakthrough everyone expected, soon after the launch, the rocket started drifting northeast of its planned trajectory. Not responding to corrective measures, the rocket was finally ordered to self-destruct, just 5 minutes into its flight!

<img style="float:right" src="/images/2023/testing-with-java/testing-with-java-001.jpg" width="40%" height="40%" />

The loss of America's first interplanetary spacecraft constituted an $18.5 million ($166 million in today's money) setback for NASA. After five days of post-flight analysis, JPL engineers determined what had caused the malfunction on Mariner 1: an error in the guidance computer logic combined with a hardware failure.

The hand-written guidance equations contained the symbol "R" (for "radius"). This "R" should have had a line over it ("R-bar" or R̄), denoting smoothing or averaging of the track data coming from an earlier calculation. But the bar was missing, and so the computer program based on those equations was incorrect. This was not an error in programming, but an error in the specification.

The catastrophic effects of a small error "summed up the whole problem of software reliability" and contributed to the development of the discipline of software engineering. Had there been more thorough testing of edge case scenarios, all of this could have been avoided.

Testing is not a separate part of coding; it is an extension of it. One’s coding is not complete until they have all the scenarios thoroughly tested and all the tests are passing. In this article, we will discuss about how to achieve just that with Java, using specific tools and libraries that make it way easier than it was to test software in the 60’s. With this, hopefully, we will not be creating another software disaster costing hundreds of millions of dollars!

### Types Of Testing:

There are several types of testing that can be performed in software development, including:

<strong>Unit testing:</strong> This kind of testing refers to the testing of small segments of code. Here, a unit indicates the smallest bit of code that can be fetched out of the system. This small bit can be a line of the code, a method, or a class. The smaller the chunk of code, the better it is, as smaller chunks will tend to run faster.

<strong>Integration testing:</strong> This kind of testing focuses on examining how various code components interact with one another. It is used to make sure that all of the parts function as intended.

<strong>Acceptance testing:</strong> This kind of testing focuses on confirming that the code complies with the user's expectations. The end user or a representative of the user typically performs it.

Each type of testing serves a specific purpose and is important in ensuring the quality and reliability of the software. In this article, we will discuss primarily about Unit Testing and the tools that help in doing it.

### Example:

Let’s start with an example. Suppose we want to write a method that takes a year as an input and returns true if it is a leap year and false if it is not a leap year.

Let’s write the code first

> ```
> public class LeapYear {
>    public static boolean isLeapYear(int year) {
>        if (year % 4 == 0) {
>            if (year % 100 == 0) {
>                if (year % 400 == 0) {
>                    return true;
>                }
>                return false;
>            }
>            return true;
>        }
>        return false;
>    }
> }
> ```

To test whether this code works or not, let’s write some unit tests for it. We will test it with multiple inputs and verify that our code works as expected.

### Unit Testing:

For unit testing in Java, we use JUnit. JUnit is a unit testing open-source framework for the Java programming language. Java Developers use this framework to write and execute automated tests. In Java, there are test cases that have to be re-executed every time a new code is added. This is done to make sure that nothing in the code is broken.

Let’s write the test for the LeapYear code that we wrote earlier.

> ```
> import org.junit.Test;
> import static org.junit.Assert.assertFalse;
> import static org.junit.Assert.assertTrue;
> public class LeapYearTest {
>   @Test
>   public void testLeapYear() {
>
>     // Test a leap year
>     assertTrue(LeapYear.isLeapYear(2020));
>
>     // Test a non-leap year
>     assertFalse(LeapYear.isLeapYear(2021));
>   }
> }
> ```

On running these tests, we see that the tests pass and we can be sure that at least for the inputs we have provided, our code works properly. But, what about other inputs? What about edge cases? For that, we should have more tests so that all possible scenarios are covered.

Let’s now add more test cases to cover all the possible scenarios for leap years. For example:

> ```
> @Test
>  public void testLeapYear() {
>
>    // Test a leap year
>    assertTrue(LeapYear.isLeapYear(2020));
>
>    // Test a non-leap year
>    assertFalse(LeapYear.isLeapYear(2021));
>
>    // Test a leap year divisible by 4 but not by 100
>    assertTrue(LeapYear.isLeapYear(2004));
>
>    // Test a leap year divisible by 4 and by 100 but not by 400
>    assertFalse(LeapYear.isLeapYear(1900));
>
>    // Test a leap year divisible by 4, by 100, and by 400
>    assertTrue(LeapYear.isLeapYear(2000));
>  }
> ```

With all these scenarios, we can be sure that our code is working properly.

### Why is testing important:

With the historical example of the Mariner 1, we can be sure the dangers of a code without tests. But in context of a relatively simpler piece of code, say the LeapYear code above, testing is as important. Suppose this code is being used to determine the number of days an astronauts will spend in space in a leap year and pack the resources required by them accordingly. If someone tomorrow, by mistake, changes the logic to years divisible by 3, then entire system will descend into chaos and there can be unimaginable harm done. Fortunately, even before that code is pushed for review, the tests will catch it and the developer will realize their mistake.

The top reasons to take up Unit Testing are:

1. To find bugs early in the development phase, which increases the code’s reliability
2. Testing makes the code more readable, reliable, and bug-free
3. Testing boosts the confidence of the developer and motivates them immensely.

### Testing Early:

Suppose with the LeapYear code, we get a new condition. We have to check if the input year is a leap year or not but also if it was in the 20th century. To account for this, we would go ahead and update the logic and then add the corresponding test for it. However, suppose, hundreds of such new conditions keep on coming. If we keep on going back to update the code first and then write test for it, we are bound to miss certain conditions, perhaps an edge case or two. To get over this problem, we need to follow the principle of TDD or Test-Driven-Development.

<img style="float:left" src="/images/2023/testing-with-java/testing-with-java-003.jpg" width="30%" height="30%" />

In TDD, we write a test first, run it, see that it fails, then write the correct production code, rerun the test, it passes. We can first go ahead and write all the tests for all the scenarios in an easy-to-understand language. The chances of missing a particular case here is pretty less. Then we go ahead and write the actual production code.
