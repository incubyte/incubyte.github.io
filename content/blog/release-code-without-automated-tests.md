+++
author = "Incubyte"
categories = ["97 Things !to do"]
date = 0001-01-01T00:00:00Z
description = ""
draft = false
slug = "release-code-without-automated-tests"
tags = ["97 Things !to do"]
title = "!Release code without automated tests"

+++


Most projects that I see facing serious problems lack tests. You should write tests for two things

1. Validating behavior of the system as you develop new features.
2. Automating reproduction of bugs. Yes, it stands true for bug fixes too!Create a failing test case before you fix your bug. This way, you have an automatic way to reproduce the bug then work towards passing the test case.

When every project starts, it's small enough to be tested manually in just a couple of hours. This becomes a big reason for developers to ignore automated tests initially,  this behavior then "sticks." This lack of tests then becomes a vast technical debt, organizations start paying interest in terms of release time. The same product which could be tested and released in a day would then take days if not months before it reaches customers. If you don't want to pay the exponential debt on the quality or the release time of the product, write automated tests!

