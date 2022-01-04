+++
authors = "Abhishek Keshri"
categories = ["Careers", "Software Craftsmanship"]
date = 2022-01-04T00:00:00Z
description = "Incubyte DevOps Assessment for DevOps Engineers"
draft = false
image = "/images/2021/09/laptop-plant.jpg"
slug = "devops-assessment"
tags = ["Careers", "Software Craftsmanship", "DevOps"]
title = "Incubyte DevOps Assessment"
+++

Hello there, Welcome to the Incubyte DevOps Assessment!

Through this assessment, we want to evaluate how well you can work with CI/CD tools across the board. We want see the Devops Engineer in you.

For this assessment, your goal is to create a CI/CD pipeline that can be used to test, build and deploy an application.
The application should be deployed to Azure and will be tested against a set of test cases.

## Tasks

Your task is to implement the CI/CD pipelines for this application, that can acheive the following:

- Have SonarQube static analysis tool run on the code
- Run the included tests against the application
- Build the application
- Deploy the application to Azure

### Application Details

This is a simple Micronaut application that makes requests to a REST API and returns the response.
The source code for the application along with the test cases is available in [this repository](https://github.com/incubyte/ci-cd-kata/).

#### Example

```json
// curl $APP-HOST:PORT/tickers/HCC
{
  "ticker": "HCC",
  "name": "Hindustan Construction Company Limited",
  "price": 65.0
}

// curl $APP-HOST:PORT/tickers/TATAMOTORS
{
  "ticker": "TATAMOTORS",
  "name": "TATA MOTORS LIMITED",
  "price": 99
}
```

## Submitting the assessment

1. Fork [this repository](https://github.com/incubyte/ci-cd-kata/).
2. Complete the tasks as described above.
3. Make sure you follow best practices for DevOps, git and commit often.
4. Push your changes to GitHub/GitLab.
5. Send us a link to your repository.

## Have questions?

Feel free to ask us anything! We are [here](mailto:careers@incubyte.co) to help.
