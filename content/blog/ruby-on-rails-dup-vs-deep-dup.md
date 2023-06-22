+++
title = "Using dup vs deep dup in Ruby on Rails"
slug = "ruby-on-rails-dup-vs-deep-dup"
date = 2023-06-13T19:20:29+05:30
image = "/images/2023/06/Ruby_On_Rails_Logo.png"
draft = false
authors = ["Syed Mohd Mehndi", "Bhavesh Choudhary"]
description = "Using dup vs deep_dup in Ruby on Rails"
tags = ["Software Craftsmanship", "Ruby on Rails", "Dup", "Deep Dup"]
categories = ["Software Craftsmanship", "Ruby on Rails", "Dup", "Deep Dup"]
type = ""
+++

We often use `.dup` in Ruby on Rails when we want to modify a copy of an object without modifying the original object

Usually everything works as expected

But sometimes using `.dup` can land you in trouble, if your object contains nested values

Lets look at the below code to understand it better

```ruby
user = { name: 'Hello', email: 'hello@gmail.com', address: { city: 'Delhi' } }

user_dup = user.dup

user_dup[:email] = 'world@gmail.com'

puts user_dup[:email]
# world@gmail.com

puts user[:email]
# hello@gmail.com

```


Everything works as expected

Original object still has email = 'hello@gmail.com' and the duplicate object has email = 'world@gmail.com'

Lets proceed to next step and try to do the same thing for city which is nested under address

```ruby
user_dup[:address][:city] = 'Mumbai'

puts user_dup[:address][:city]
# Mumbai

puts user[:address][:city]
# Mumbai

```

What happened!

Something is not right

We tried modifying the `city` field for `user_dup` object but ended up modifying `city` for the original user object too

What went wrong here?

The reason for this behaviour is **Shallow Copy**

When we call the `.dup` method, it creates a new object with a different `object_id` but the nested attributes still refer to original object

```ruby
user.object_id
# 101680
user_dup.object_id
# 101780

user[:name].object_id
# 101760
user_dup[:name].object_id
# 101760

```

Due to this if we try to update a value in a nested object, then because of reference sharing the data gets updated in the parent object as well

To avoid this we should use `deep_dup` instead of `dup` if our object contains deep nesting similar to our example where `city` is nested inside `address`

Lets test the same situation now with deep_dup

```ruby
user = { name: 'Hello', email: 'hello@gmail.com', address: { city: 'Delhi' } }

user_deep_dup = user.deep_dup

user_deep_dup[:address][:city] = 'Mumbai'

puts user_deep_dup[:address][:city]
# Mumbai

puts user[:address][:city]
# Delhi

```

Everything works as expected
