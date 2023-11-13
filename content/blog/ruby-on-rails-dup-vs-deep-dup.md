+++
title = "Using dup vs deep dup in Ruby on Rails"
slug = "ruby-on-rails-dup-vs-deep-dup"
date = 2023-11-09T18:20:29+05:30
image = "/images/2023/11/copying.png"
draft = false
authors = ["Syed Mohd Mehndi", "Bhavesh Choudhary"]
description = "Using dup vs deep_dup in Ruby on Rails"
tags = ["Software Craftsmanship", "Ruby on Rails", "Dup", "Deep Dup"]
categories = ["Software Craftsmanship", "Ruby on Rails", "Dup", "Deep Dup"]
type = ""
+++

In Ruby on Rails, the `.dup` method is commonly used to create a duplicate of an object, allowing modifications without affecting the original.
However, it's crucial to understand its limitations, especially when dealing with nested structures.

## The Shallow Copy Pitfall

Consider the following scenario with a user object:

```ruby
user = { name: 'Hello', email: 'hello@gmail.com', address: { city: 'Delhi' } }

user_dup = user.dup

user_dup[:email] = 'world@gmail.com'

puts user_dup[:email]
# world@gmail.com

puts user[:email]
# hello@gmail.com
```

Here, modifying the duplicated object (`user_dup`) doesn't impact the original object (`user`), and everything seems fine.
However, things take an unexpected turn when dealing with nested attributes:

```ruby
user_dup[:address][:city] = 'Mumbai'

puts user_dup[:address][:city]
# Mumbai

puts user[:address][:city]
# Mumbai
```

Surprisingly, changing the city for `user_dup` also alters the city for the original `user` object.
The culprit here is the Shallow Copy nature of `.dup`.
While it creates a new object with a different `object_id`, the nested attributes still reference the original object.
This leads to unintended side effects when modifying nested values.

## The Solution:

To avoid such pitfalls, it's recommended to use the `deep_dup` method instead of `dup` when dealing with objects containing deep nesting.
Let's revisit the previous example with `deep_dup`:

```ruby
user = { name: 'Hello', email: 'hello@gmail.com', address: { city: 'Delhi' } }

user_deep_dup = user.deep_dup

user_deep_dup[:address][:city] = 'Mumbai'

puts user_deep_dup[:address][:city]
# Mumbai

puts user[:address][:city]
# Delhi
```

By using `deep_dup`, we ensure that the duplicated object is a deep copy, preventing unintended modifications to nested attributes.
This practice is particularly crucial when dealing with complex data structures in Ruby on Rails applications.

## Conclusion

Understanding the distinction between `dup` and `deep_dup` is vital for avoiding unexpected behaviors, especially when working with nested objects in Ruby on Rails.
While `dup` creates a shallow copy, retaining references to nested attributes, `deep_dup` ensures a complete duplication, safeguarding against unintended side effects.

Choosing the appropriate method based on the depth of your data structure is key to maintaining the integrity of your objects.

