+++
title = "Why Code Coverage Should Not Be Your Measure of Reliability"
slug = "code-coverage-and-reliability"
date = 2022-02-10T22:58:11+05:30
image = "/images/2022/02/code-coverage.jpeg"
draft = true
authors = "Akshay Vadher"
authorLink = "/authors/akshay-vadher/"
description = ""
tags = ["Software Craftsmanship", "Measure", "Not to do"]
categories = ["Playbook", "Software Craftsmanship"]
type = ""
+++

## What is code coverage?
It is the measure of how many lines were actually executed when the test ran. 

### Example
Below is the my super awesome mood detector function based on number of chocolates I have
```java
public String getMyMood(int noOfChocolatesIHave) {
  if (noOfChocolatesIHave == 0) {
    return "sad";
  } else if (noOfChocolatesIHave == 1) {
    return "happy";
  } else if (noOfChocolatesIHave > 1) {
    return "very happy";
  }
}
```
Test cases looks likes this
```java
@Test
void testWhenNoChocolates() {
  assertThat(getMyMood(0)).is("sad")
}

@Test
void testWhenIHaveOneChocoloate() { 
  assertThat(getMyMood(1)).is("happy")
}
```

As per the example, we covered only two cases and `if (noOfChocolatesIHave > 1) return "very happy"` case is not covered. So in layman's terms, case coverage is `2/3 = 66%`

## Standard rule
The acceptable coverage number is 80+%. Why 80 and why not 100%? Let's take one example,
```java
// two files available at location /src/demo -> config.yaml and ConfigReader.java
// ConfigReader.java
public String getMeHostName() {
  try {
    String fileContent = readFile("config.yaml")
    return fileContent;
  } catch (Exception e) {
    // ...
  }
  //
}
```
It is hard to generate test fixtures where the config file does not exist; Also it is not worth putting that effort to check that test case at all as, if the config file is not available then the app might fail to start and another test case anyways will fail.

So these edge cases are hard to cover and hence 80% is industry standard. 

## Problem 1 - Code coverage doesn't actually measure test case integrity
Example time again. Let's write a function that capitalizes the first character of the input word.
```java
public String capitalizeFirstChar(String word) {
  return word.toUpperCase();
}
// test case 
@Test
void testThatItCapitalizeTheFirstChar() {
  assertThat(capitalizeFirstChar("hERO")).is("HERO");
}
```
Do you see the problem here? Our test case executes the function and it is covering all the lines, still, it is not covering all the scenarios. Even though our code coverage is 100%, our tests are rubbish! 

What happens when someone sends `"hero"` and the function returns `"HERO"`! That is the bug in the system but test cases are not covering that. Hence, we falsely assume that because of 100% code coverage, our app is robust and tests are very well written.

**The higher percentage of coverage does not mean coverage of most scenarios**. It just means that all the lines were executed!

## Problem 2 - When you focus on a measure, people stop focusing on quality
Let's assume that you have established a rule in the automated pipeline (If you don't have an automated pipeline then stop reading further, leave everything, and setup automation) that coverage should be minimum 80%. 

Some developer didn't bother to write tests and the build is failing. He would do something which any lazy and clever developer would do; that is, either add unnecessary code or add unnecessary tests. 

Example of how un necessary code can increase code coverage
```java
void unTestedFunction(int i) {
  // some 10 lines of code here
}
void aHack() {
  int i = 0;
  i += 1;
  i += 1;
  i += 1;
  i += 1;
  i += 1;
  // more such 45 lines
  return i;  
}
@Test
void testTheHack() {
  assertThat(aHack()).is(50);
}
```
Saw the problem? Since the hack function has 50 lines and original function had around 10 lines, total line coverage is `50 / (10 + 50) = 83% `. Yey, he achieved the coverage threshold!

# How should we use code coverage measure?
It should be used as a safety net. 
If **coverage is low**, it should be considered **unreliable** code. 

But if **coverage is high**, then just **verify other** measures and PROD code to increase confidence and hence reliability. 