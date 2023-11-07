+++
title = "Monkey Patching in Ruby"
slug = "monkey-patch"
date = 2023-10-17T18:29:54+05:30
image = "/images/2023/monkeypatch.png"
draft = false
authors = ["Nitin Rajkumar"]
description = "Monkey patching and it's side-effects in Ruby"
tags = ["Software Craftsmanship", "Ruby"]
categories = ["Software Craftsmanship", "Ruby", "Monkey Patching"]
type = ""
+++

Ruby, as you all know, is a dynamic programming language that provides the ability and hence freedom to reopen the existing classes and change their behavior during runtime by adding new methods or modifying existing methods. This is what we refer to as 'Monkey Patching'.

Monkey patching allows developers to customize existing code without modifying its original source.

#### How to Monkey Patch

```ruby
class Sound
  def car
    "honnnnnk..."
  end
end

class Sound
  def bike
    "peep-peep"
  end
end
sound = Sound.new
sound.car #=> honnnnnk...
sound.bike #=> peep-peep
```
In the above code snippet, we reopen Sound class to add a new method. This way we can overrise the exisitng method of the original class.

#### When to Use Monkey Patching
Usually, programmers implement this technique when they need to add a quick fix. This could be adding functionality to existing code or replacing code for testing when modifying source code is impractical.

1. When you encounter a bug in a gem or library without an available patch or fix, you can temporarily address it within your own codebase using monkey patching.

2. When a library lacks a specific method you need, you can add the missing functionality using a monkey patch

#### Pitfalls of Using Monkey Patch

Monkey patching can make code more difficult to understand and maintain, leading to unexpected behavior and potential bugs.

```ruby
class String
  def upcase
    # do nothing 
  end
end
```
In the above example, we modified the built-in String class by  redefining the behavior of its `upcase` method to return nothing. This alteration has unintended consequences, as it will affect the outcome whenever the `upcase` method is invoked.

While monkey patching offers flexibility, it also introduces potential drawbacks:

**Conflict Potential**: In large codebases, multiple developers may modify the same method using monkey patching, leading to unexpected behavior and potential conflicts.

**Upgrade Issues**: Monkey patching third-party gems can cause issues when upgrading the gem, as the new version may conflict with the applied patches.

**Debugging Issues**: Identifying the specific monkey patch responsible for a particular outcome can be challenging, making debugging more difficult.

**Technical Debt Accumulation**: Monkey patches often act as temporary solutions, and eventually need to be removed once the underlying issue is resolved, adding to technical debt.

#### Measures to Take While Monkey-Patching

**Encapsulate Patches in Modules**: Rather than reopening classes, it is best practice to create a module to encapsulate the monkey patch and include it in the class as needed. This promotes modularity and simplifies patch management.

**Thorough Documentation**: Document all applied monkey patches to maintain code clarity. Clearly identify the purpose and scope of each patch, making it easier to remove them once the underlying issue is resolved.

#### Conclusion

Monkey patching has gained popularity as a power tool in Ruby because of the havoc it can wreak if misused. While monkey patching offers flexibility, it should be considered a last resort due to its potential risks. 

Meanwhile, it doesn't hurt to be a good samaritan and contribute to open source. When a bug is discovered in a third-party library, raise an issue, fix it, and get the pull request merged.

