+++
authors = "Incubyte"
categories = ["97 Things Not To Do"]
date = 2020-09-01T00:00:00Z
description = ""
draft = false
image = "https://images.unsplash.com/photo-1506818144585-74b29c980d4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
slug = "do-not-optimize-prematurely"
tags = ["97 Things Not To Do"]
title = "Do not Optimize Prematurely"

+++


Once again, you would think that the software development community has moved past this point, but I still get many teammates who want to "save memory" using HashMaps instead of POJOs. I am not too sure how efficient HashMaps are compared to POJOs, but I am sure of how they can become a maintenance nightmare if we start using maps wherever we could use POJO.

In hindsight, it now seems foolish, but I have been guilty of committing crimes like sprinkling static variables, singletons, and data structures like maps instead of more compiler-friendly data structures. All this is because either I had some misconception about how performance optimization works or an obscure scenario in my mind like "what will happen when 2,13,00093 users access my piece of code in parallel."

Between a speculative performance issue that you may or may not encounter and the use of clean code, clean code should always win. If your code is clean, it will be easy to find it and fix it when a performance issue arises.

