+++
authors = ["Utsav Parmar"]
categories = ["ruby"] date = 2023-01-02T00:00:00Z
description = ""
draft = false
image = ""
slug = "ruby-boolean"
tags = ["ruby"]
title = "The Enigma of Ruby Boolean (or the lack of thereof)"
+++

You wake up half-asleep and find Darth Vader furious cause the number of alive stormtroopers he can see on the system that you coded does not match the Imperial Army data. This is a sev-0 bug, your life is on the line. You start debugging

```ruby
legion501 = stormtroopers.select{ |trooper| trooper.alive and trooper.commander == "Dark Lord" }
```

Well, everything looks fine here. Till you click on `alive` in your IDE and are taken to its definition. You find out that some newbie trooper has added this code (without tests of course) and instead of assigning a boolean value, they have assigned it integer values. "Well, big deal", you think assuming that `0` implies `false` and `1` implies `true` always. With that assumption, you begin testing.

```ruby
irb> StormTrooper.all.to_a.select{ |trooper| not trooper.alive }
```
Only to get all the stormtroopers. "Surely, not so many can still be alive", you ponder as you begin doubting the library implementation now.

```ruby
irb> 0 ? "true" : "false"
=> "true" # Hmm..it must be reversed in ruby. 1 must be false now

irb> 1 : "true" : "false"
=> "true"

irb> what the heck ruby
(irb):in `<main>': undefined local variable or method `ruby' for main (NameError)
```

Not knowing what is happening, you go ahead and change `alive` to take boolean values - `true` and `false` and sure enough, that solves the issue. You avert the risk of life and become increasingly curious about this.

> What is the point of 0 or 1 or any number to be accepted where there should be a boolean if everything is going to be evaluated to `true`?
>Why is only `true` and `false` actually `true` and `false` respectively?

In other higher languages such as Python, `0` is treated as `False` and `1` as `True` because `bool` is a subclass of `int`. So it's not that the integers are evaluated to boolean values but integers have the boolean value.

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

> Don't `true` and `false` have so much in common? It should make sense to keep them under the same class

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

>Yes, they both have a lot in common. Or do they?

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

It is evident from the above snippets that true and false share exactly opposite behaviour. There is nothing common between them (except the methods that are common to all `objects`) for us to move it to a single `Boolean` class.

`true` and `false` are also, in fact, the very opposite of each other by nature. Something can be true or not true i.e. `false` acting as its antithesis. If there is nothing similar between two objects, then what is the point of grouping them? Thus, there is no common class for `true` and `false` in Ruby.

There remains yet a mention of the special class `NilClass`
`nil` value means nothing, nada, devoid of everything. If there is nothing, then you don't do anything and so, it is treated as `false`.

> But why not 0 then?

Because 0 represents something. Similarly, empty arrays, strings, and hashes are simply empty and not nothing. That is why, except for false and nil, everything is truthy in Ruby.

PS - Remember that this is Ruby, one of the most dynamic languages. There is no boolean because `TrueClass` and `FalseClass` suffices everything we need until now. If you think it doesn't, then by all means, go ahead and create an encompassing class. After all, Ruby's philosophy is giving freedom to its users to choose.
