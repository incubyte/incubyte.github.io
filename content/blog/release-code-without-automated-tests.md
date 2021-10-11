+++
author = "Incubyte"
categories = ["97 Things !to do"]
date = 2020-09-24T00:00:00Z
description = ""
draft = false
slug = "release-code-without-automated-tests"
tags = ["97 Things !to do"]
title = "Do not Release Code Without Automated Tests"
image = "/images/2020/09/automated-tests.jpg"

+++

Most projects that I see facing serious problems lack tests. You should write tests for two things

1. Validating behavior of the system as you develop new features.
2. Automating reproduction of bugs. Yes, it stands true for bug fixes too! Create a failing test case before you fix your bug. This way, you have an automatic way to reproduce the bug and then pass the test case.

When every project starts, it's small enough to be tested manually in just a couple of hours. This becomes a big reason for developers to ignore automated tests initially. This behavior then "sticks." This lack of tests then becomes a vast technical debt. Organizations start paying interest in terms of release time. The same product that could be tested and released in a day would then take days, if not months, to reach customers. If you don't want to pay the exponential debt on the product's quality or release time, write automated tests!
