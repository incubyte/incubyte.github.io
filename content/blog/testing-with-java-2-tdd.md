+++
authors = ["Sutirtha Das"]
categories = ["Software Craftsmanship", "Testing With Java", "TDD"]
date = 2023-06-14T00:00:00Z
description = ""
draft = false
image = "/images/2023/testing-with-java/testing-with-java-001.jpg"
slug = "testing-with-java-tdd"
tags = ["Software Craftsmanship", "Testing With Java", "TDD"]
title = "Testing With Java - Part 2 : TDD"
+++

In the annals of software development, there exists a cautionary tale from the year 1996, when the European Space Agency (ESA) launched its ambitious Ariane 5 rocket. Alas, what was meant to be a triumph turned into tragedy a mere 40 seconds after liftoff, as the rocket met a fiery demise, along with its precious cargo. The cause of this catastrophe? A software glitch, specifically an integer overflow issue, lurking within the rocket's flight control system. 

<img style="float:right; padding-left: 20px" src="/images/2023/testing-with-java/testing-with-java-004.jpg" width="40%" height="40%" /

The flight control software, repurposed from its predecessor, Ariane 4, failed to account for the vastly different flight trajectory and accelerated speed of Ariane 5. As a consequence, the program generated unforeseen numbers that exceeded the limits of a variable, causing the rocket to veer off course and meet its untimely end.


This catastrophic event highlighted the importance of thorough testing, particularly in software engineering. To prevent such incidents and ensure code reliability, Test-Driven Development (TDD) emerged as a powerful methodology. By diligently writing tests before implementing production code, developers can detect issues early, improve code quality, and avoid costly failures.  

Had the developers embraced Test-Driven Development (TDD) and diligently written tests encompassing various scenarios and edge cases, this calamity might have been averted. Through TDD, they could have uncovered the integer overflow bug before it wreaked havoc on the rocket's journey.  

This article delves into TDD, its step-by-step process, and the significant benefits it offers to the software development landscape.

<img style="float:right; padding-left: 20px" src="/images/2023/testing-with-java/testing-with-java-003.jpg" width="35%" height="35%" /

## Understanding Test-Driven Development (TDD): 

Test-Driven Development (TDD) is a development practice that advocates writing tests before diving into production code. It follows a structured cycle known as Red-Green-Refactor. This iterative process entails creating tests that are designed to fail (Red), implementing the minimum code required to pass those tests (Green), and subsequently refining the code's design and maintainability (Refactor). 

  
## Why Use TDD? 

**TDD provides several compelling advantages that enhance the software development process:**

1. Early Error Detection: By writing tests upfront, TDD helps identify errors in the early stages of development. It encourages developers to carefully consider requirements and design, leading to the discovery of potential issues and oversights. 

2. Bug Reduction: TDD's comprehensive test suite, which covers various scenarios and edge cases, aids in the detection of bugs that may not be immediately apparent during initial implementation. This proactive approach fosters a higher quality codebase. 

3. Reliable and Maintainable Code: With TDD, testing and validation assume a pivotal role from the beginning. This approach instills confidence in the code, facilitating easier maintenance and future enhancements over time. 
  

## The TDD Process: Step by Step  


**Let's walk through the TDD process by examining the code examples below:**

### 1. Writing the First Test: 
```java 
import org.junit.Test; 
import static org.junit.Assert.*; 
public class LeapYearTest { 
   @Test 
   void test_is_leap_year_divisible_by_4() { 
   assertTrue(LeapYear.isLeapYear(2020)); 
   } 
} 
```
 

### 2. Running the Test: 

After writing the test, it's crucial to execute it. Since the corresponding production code is yet to 	be implemented, we anticipate the test to fail initially. 

### 3. Implementing the Production Code: 

Now, it's time to write the minimum code necessary to make the test pass. 

```java 
public class LeapYear { 
   public static boolean isLeapYear(int year) { 
       if (year % 4 == 0) { 
           return true; 
       }  
       return false; 
   } 
} 
```
 

### 4. Rerunning the Test: 

After implementing the production code, let’s rerun the test and ensure that it passes successfully. 

### 5. Expanding Test Coverage: 

To augment test coverage, we add more tests to encompass additional cases and edge conditions. Upon running all tests, we expect the newly added tests to fail initially as the updated logic to handle these cases hasn’t been implemented yet. 

**Test is leap year divisible by 100 but not by 400:**
```java 
@Test 
public void test_is_leap_year_divisible_by_100_but_not_by_400() { 
assertFalse(LeapYear.isLeapYear(1900)); 
} 
```

**Test is leap year divisible by 4 but not by 100:**
```java 
@Test 
public void test_is_leap_year_divisible_by_4_but_not_by_100() { 
assertTrue(LeapYear.isLeapYear(2008)); 
} 
```

**Test is not a leap year:**
```java 
@Test 
public void test_is_leap_year_not_divisible_by_4() { 
assertFalse(LeapYear.isLeapYear(2017)); 
} 
```

### 6. Updating the Production Code: 

Let’s Refactor the production code to accommodate the new test cases and ensure that all tests pass. 

```java 
public class LeapYear { 
   public static boolean isLeapYear(int year) { 
       if (year % 400 == 0) { 
           return true; 
       } else if (year % 100 == 0) { 
           return false; 
       } else if (year % 4 == 0) { 
           return true; 
       } 
       return false; 
   } 
} 
```
 
### 7. Rerunning All Tests: 

We re-run all the tests to verify that the code handles all scenarios correctly. 

## Benefits of Test-Driven Development: 

**By embracing Test-Driven Development (TDD), developers can unlock numerous benefits:**

* Improved Code Quality: TDD promotes the creation of reliable code by catching defects early and preventing regressions. 
* Efficient Debugging: Early issue detection facilitates quicker debugging, reducing troubleshooting time. 
* Guided Design and Modularity: Writing tests upfront influences the design process, leading to more modular and easily testable code. 
* Enhanced Confidence in Code: A comprehensive test suite fosters confidence in the correctness and robustness of the code. 
* Reduced Technical Debt: TDD encourages prompt issue resolution, averting the accumulation of technical debt. 

## Conclusion:  

The Ariane 5 disaster stands as a poignant reminder of the devastating consequences that can result from inadequate testing practices. Test-Driven Development (TDD) emerges as a potent solution to mitigate such risks and construct robust software with unshakeable confidence. By diligently writing tests before diving into code implementation, developers can detect issues early, ensure code quality, and deliver software that withstands the test of time. 

As software development continues to evolve, embracing TDD can provide developers with a solid foundation for building robust and dependable software systems. By investing time and effort in testing early and consistently, let’s embark on this journey to shape a future of exceptional software craftsmanship with less risks, enhanced code quality and reliable software solutions to meet user expectations, empowered by the magic of Test-Driven Development. 

 **Read the previous part of the series on [Introduction to Testing](https://blog.incubyte.co/blog/testing-with-java-intro/)**

 