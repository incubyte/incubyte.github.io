+++
title = "Why Code Coverage Should Not Be Your Measure of Reliability"
slug = "code-coverage-and-reliability"
date = 2022-02-10T22:58:11+05:30
image = "/images/2022/02/code-coverage.jpeg"
draft = false
authors = ["Akshay Vadher"]
authorLink = "/authors/akshay-vadher/"
description = ""
tags = ["Software Craftsmanship", "Measure", "Not to do"]
categories = ["Playbook", "Software Craftsmanship"]
type = ""
+++

Code coverage is a measure (in percentage) of the degree to which the source code of a program is executed wh­en a particular test suite is run.

Measuring test code coverage can be a useful technique for finding where the gaps are in your automated tests, and assessing the quality of your test suite. However, that is not always true. Coverage when used as a target, can be misleading, encourage the wrong behaviors, and even at times distort development.

Here, we will try to debunk the myth (by using relatable examples) that code coverage should not be the only measure of reliability.
Keep reading to find out why!

#### Example

Below is the awesome mood detector function which represents my mood based on the number of chocolates I have:

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

Test cases look like this

```java
@Test
void test_when_no_chocolates() {
  assertThat(getMyMood(0)).is("sad")
}

@Test
void test_when_I_have_one_chocolate() {
  assertThat(getMyMood(1)).is("happy")
}
```

In the above example, the tests we have written only cover two of the three cases. The third case where `noOfChocolatesIHave > 1` is not covered. This results in 2/3 i.e. 67% code coverage only.

### Standard Rule

You may be wondering why it is 80% and not 100%. Let's take one example,

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

People usually keep tests in the code to make sure each small chunk is doing what it is supposed to do.

It is hard to generate test fixtures where the config file does not exist. Also, it is not worth putting in the effort to check that test case at all.

This is because if the config file is not available, then the app might fail to start and by default, another test case will also crash.

In short, these edge cases are hard to cover and hence 80% is the standard industry benchmark.

### Problem 1 - Code coverage doesn't actually measure test case integrity

Time for another example. Let's write a function that capitalizes the first character of the input word.

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

Do you see the problem here? Our test case executes the function and it is covering all the lines, still, it is not covering all the scenarios. Even though our code coverage is 100%, our tests make no sense!

What happens when someone sends `"hero"` and the function returns `"HERO"`? That is a bug in the system that is not covered by the test suite. Hence, we are mistaken in assuming that because of 100% code coverage, our app is robust and tests are very well written.

**A higher percentage of coverage does not mean coverage of all scenarios**. It just means that all the lines were executed!

### Problem 2 - When you focus on a measure, people stop focusing on quality

Let's assume that you have established a rule in the automated pipeline that checks for at least 80% coverage.

Now, a scenario arises where a new function is created without the relevant tests being added. This would cause the build to fail as the code coverage slips below the required threshold. For whatever reason, someone could easily add unnecessary code to artificially increase the code coverage and make the build pipeline run to completion.

Example of how unnecessary code can increase code coverage:

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

Do you see the problem?

Since the hack function has 50 lines and the original function had around 10 lines, the total line coverage is 50 / (10 + 50) = 83%. It is clear that the coverage criterion is achieved but at the cost of compromised quality.

### How should we use code coverage measure?

Code coverage is a useful metric in the sense that it gives us assurance about so many lines of our code base having been executed by the test suite. But if that is the only metric being used, then it may give a false indication of the robustness and integrity of the tests.

Instead, code coverage should be coupled with functional coverage, where one ensures that the test suite actually tests all the functionality of the product.

### Conclusion

Code Coverage is **required** but not **enough**.

> Notes: [Code coverage Wikipedia](https://en.wikipedia.org/wiki/Code_coverage)
