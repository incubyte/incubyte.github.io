+++
authors = ["Utsav Parmar"]
categories = ["Ruby"]
date = 2024-01-09T00:00:00Z
description = ""
draft = false
image = ""
slug = "ruby-boolean"
tags = ["Ruby"]
title = "The Enigma of Ruby Boolean (or the lack thereof)"
+++

Imagine this:
You wake up half-asleep to discover Darth Vader in a rage. He's furious because the count of active stormtroopers he
sees on the system you coded doesn't align with the Imperial Army data.

It's a sev-0 bug, and your life is on the line.

Without hesitation, you dive into debugging mode:

```ruby
legion501 = stormtroopers.select{ |trooper| trooper.alive and trooper.commander == "Dark Lord" }

```

All seems well until you click on `alive` in your IDE and navigate to its definition. To your dismay, you discover that
a rookie trooper added this code (without any tests (╥﹏╥)), and instead of assigning a boolean value, they've assigned
integer values.

"Not a big deal," you think, assuming that `0` implies `false` and `1` implies `true` always.

```ruby
irb> StormTrooper.all.to_a.select{ |trooper| not trooper.alive }

```

With that assumption, you embark on your testing journey, only to get all the stormtroopers.

"Surely, not so many can still be alive", you ponder, now casting doubt on the library implementation

```ruby
irb> 0 ? "true" : "false"
=> "true" # Hmm..it must be reversed in ruby. 1 must be false now

irb> 1 : "true" : "false"
=> "true"

irb> what the heck ruby
(irb):in `<main>': undefined local variable or method `ruby' for main (NameError)

```

Confused by the situation, you proceed to change `alive` to accept boolean values — `true` and `false` — and,
surprisingly,
this resolves the issue.

You manage to avert the risk to your life and, growing more curious, delve into understanding the intricacies at play.

## Lack of Boolean in Ruby

> **What is the point of 0 or 1 or any number to be accepted for a boolean parameter if everything is going to be
> evaluated to `true`?**  
> Why is only `true` and `false` actually `true` and `false` respectively?

In other higher languages such as Python, `0` is treated as `False` and `1` as `True` because `bool` is a subclass
of `int`. So it's not that the integers are evaluated to boolean values but integers have the boolean value.

```python
>>> False == 0
True
>>> False == 1
False
>>> True == 1
True
>>> True == 0
False

```

All of this makes perfect sense. Then why not Ruby?

```ruby
irb> 0.class.ancestors
=> [Integer, Numeric, Comparable, Object, PP::ObjectMixin, Kernel, BasicObject]
irb> true.class.ancestors
=> [TrueClass, Object, PP::ObjectMixin, Kernel, BasicObject]

```

Weirdly, there are no common ancestors between integer class and boole..? No boolean class here?!

```ruby
irb> false.class.ancestors
=> [FalseClass, Object, PP::ObjectMixin, Kernel, BasicObject]

```

Not only there is no `Boolean` class but `true` and `false` have their own classes!?

> Don't `true` and `false` have so much in common? It should make sense to keep them under the same class.

```ruby
irb> false.methods.count
59
irb> true.methods.count
59

# Aha, language fault possibly

irb> (false.methods & true.methods).count
59
irb> (false.methods & true.methods) - Object.methods
=> [:&, :|, :^]

# Most definitely

```

<!-- prettier-ignore -->
> They only have three methods precisely in common with each other (╭ರ_•́)

```ruby
irb> true & true
=> true
irb> false & false
=> false

irb> true | false
=> true
irb> false | false
=> false

irb> true ^ true
=> false
irb> false ^ true
=> true

```

It is evident from the above snippets that true and false share exactly opposite behaviour. There is nothing common
between them (except the methods that are common to all `objects`) for us to move it to a single `Boolean` class.

#### To sum it up

`true` and `false` are indeed the very opposite of each other by nature. Something can be true or not true, i.e., false,
its antithesis. If there is nothing similar between two objects, then what is the point of grouping them? Thus, there is
no common class for `true` and `false` in Ruby.

**There remains yet a mention of the special class: `NilClass`**  
`nil` value means nothing, nada, devoid of everything. If there is nothing, then you don't do anything and so, it is
treated as `false`.

> But why not 0 then?

Because 0 represents something. Similarly, empty arrays, strings, and hashes are simply empty and not nothing. That is
why, except for false and nil, everything is truthy in Ruby.

Remember that this is Ruby, one of the most dynamic languages. There is no boolean because `TrueClass` and `FalseClass`
suffices everything we need until now. If you think it doesn't, then by all means, go ahead and create an encompassing
class. After all, Ruby's philosophy is giving freedom to its users to choose.
