+++
title = "Monkey Patching"
slug = "monkey-patch"
date = 2023-10-17T18:29:54+05:30
image = "/images/2023/10/monkeypatch.jpg"
draft = false
authors = ["Nitin Rajkumar"]
description = "Monkey patching and it's sideeffects in Ruby"
tags = ["Software Craftsmanship", "GraphQL"]
categories = ["Software Craftsmanship", "Ruby", "Monkey Patching"]
type = ""
+++

Ruby, being a dynamic programming language provides the ability and hence freedom to reopen the existing classes and change their behavior during runtime by adding new methods or modifying existing methods. 

#### How to monkey patch

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
The above is a simple example where we reopened Sound class and added a new method. It provides many other opportunities including overriding the method of the original class.

#### When does one think of using it
Usually, when a programmer wants to quickly fix a bug, it occurs under the following circumstances:

1. When the gem or library being used has a bug and there is no patch or fix available from the library yet, one may wish to fix it in their own codebase.

2. When a certain method, which you expect the library to have, is missing, one can apply a monkey patch to that method.

#### Cons

```ruby
class String
  def upcase
    # do nothing 
  end
end
```
The above monkey patch would return nothing, causing the upcase method to fail wherever the patch is applied.

1. In a large codebase, multiple developers may be monkey patching the same method in different ways.

2. When a third-party gem is monkey patched, upgrading the gem may result in conflicts.

3. It can be difficult to determine which patch is producing the desired result.

4. This adds to technical debt, as monkey patches need to be removed once the fix is in place.
#### Measures to Take While Monkey-Patching

1. Instead of reopening classes where necessary, it is considered a good idea to place the patch in a module and include it in the class.
2. Document the applied monkey patches and remove them when the fix is implemented.

#### Conclusion

Be a good Samaritan and contribute to open source.
When a bug is discovered in a third-party library, raise an issue, fix it, and get the pull request merged. Meanwhile, add a monkey patch.
Monkey patching has gained the popularity it has as a power tool in Ruby because of the havoc it can cause if misused. Refrain from using it and use it only when it is the last resort.

