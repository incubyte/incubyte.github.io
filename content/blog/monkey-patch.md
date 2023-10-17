+++
title = "Monkey Patching"
slug = "monkey-patch"
date = 2023-10-17T18:29:54+05:30
image = "/images/2023/10/monkeywithsword.jpeg"
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
		"honk"
	end
end
class Sound
	def bike
		"peep-peep"
	end
end
noise = Sound.new
noise.car #=> honk
noise.bike #=> peep-peep
```
The above is a simple example where we reopened Sound class and added a new method. It provides many other opportunities including overriding the method of the original class.

#### When does one think of using it
Usually when the programmer wants to fix the bug quickly.
1. When the gem or library that is being used has a bug and before a patch-fix from the library if one wants to fix it in their code base.
2. When certain method you expect the library to contain is missing one can monkey patch the method.

#### Side Effects

```ruby
class String
  def upcase
    # do nothing 
  end
end
```
The above monkey patch would return nothing causing the `upcase` to fail everywhere the patch is being used.
1. In a large code base multiple developers may be monkey patching the same method in different ways.
2. When a 3rd-party gem is monkey patched, upgrading the gem may result in conflict.
3. Can be difficult to track which patch is giving the result.
4. Adds to tech debt as monkey patching needs to be cleaned out once the fix is in place.
#### Measures to take while monkey-patching
 
1. Instead of reopening the classes where needed, it is considered a good idea to have the patch in module and include it in the class.
2. Document the applied monkey patches and clean them up when the fix is in place.

#### Conclusion

Be a good Samaritan and contribute to the open source. When a bug is discovered in 3rd party library raise a issue, fix it, and get the pull request merged meanwhile add a monkey patch. Monkey patching has gained the popularity as the power tool in ruby because of the havoc it can cause if it is misused. Refrain from using it and use it only when it is the last resolution.

