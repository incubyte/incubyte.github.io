+++
title = "Dynamic method in ruby"
slug = "dynamic-method"
date = 2023-10-27T13:31:36+05:30
image = "/images/2023/10/methodmissing.jpg"
draft = false
authors = ["Nitin Rajkumar"]
description = "Dynamic and ghost methods in ruby"
tags = ["Software Craftsmanship", "GraphQL"]
categories = ["Software Craftsmanship", "Ruby", "Dynamic Dispatch", "Ghost Methods"]
type = ""
+++

In Ruby, the dynamic nature of method dispatch is one of its key features. Method calls are resolved at runtime based on the actual type of the object. This flexibility allows for polymorphic and dynamic behavior

#### Dynamic Dispatch

```ruby
	class Number
		def square(argument)
			argument ** 2
		end
		def cube(argument)
			argument ** 3
		end
	end
	number = Number.new
	number.square(3) #=> 9
```

Method can be called using dot notation but this restricts making the method call being dynamic.

`class.method("method_name").call` is way to invoke a method but is not a common pattern because it involves a more indirect and less flexible approach compared to other dynamic method invocation techniques.

There is another way to call a method that is using `send`. It accepts method name and the method's arguments as it own arguments.

```ruby
	number.send(:square, 3) #=> 9
```

Since the method name is an argument it can be replaced by any method name during runtime.

```ruby
puts "Enter a number:"
user_input = gets.chomp
puts "Enter the method name:"
method_name = gets.chomp
number.send(method_name.to_sym, 4) #=> 16

```

`to_sym is used to convert string to symbol but method name can be passed as string.`
Using send to dispatch a method has a downside when it comes to privacy concerns as it invokes even a private method of the class without throwing an error.
This can be prevented using by using `public_send`.

We can not only call methods during runtime but also define methods during runtime.

#### Dynamic Methods

A method can be defined using `define_method` at the run time.

```ruby
  class Number
    define_component(method_name, argument, power)
  	define_method(method_name) do |argument, power|
  		argument ** power
  	end
    end
  end
	number = Number.new
	number.define_component(square,4, 2) #=> 16
	number.define_component(cube,4, 3) #=> 64
```

There is another way of defining methods dynamically using method_missing.

### Ghost Method

What happens when you call a method on an object that is not yet defined. A method missing error is displayed. What happens internally is ruby goes up the object hierarchy and checks up till `BasicObject` and when the method is not found it transfers the call to `method_missing` in `BasicObject` class, which returns `NoMethodError`.

```ruby
class Book
end
book = Book.new
book.author
#=>undefined method `author' for #<Book:0x00005585e38e9720> (NoMethodError)
```

We can override this method and return what we want to.

```ruby
class Book
	def method_missing(method, args)
		"All missing methods return this string"
	end
end
book = Book.new
book.author
#=>"All missing methods return this string"

```

`method_missing` comes with huge advantage when there are many methods with similar definition. It saves the time of writing them and testing them independently.

#### Cons

1. Readability and maintainability of code.
2. Security issues arise when method name is taken from input.
3. When the method which is supposed to be missing is found in ancestors chain.
4. Debugging would be complex.

#### Conclusion

It is worth noting that while these dynamic features of ruby are powerful they should be used with caution, considering trade-offs.
