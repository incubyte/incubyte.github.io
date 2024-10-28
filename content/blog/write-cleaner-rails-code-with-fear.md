+++
title = "Stop Fearing nil: Write Cleaner Rails Code With Fear"
slug = "write-cleaner-rails-code-with-fear"
date = 2024-10-28T11:35:54+05:30
image = "/images/2024/write-cleaner-rails-code-with-fear/header.svg"
draft = false
authors = ["Tilak Patidar"]
description = ""
tags = ["Rails", "Ruby", "Clean Code", "Fear Gem"]
categories = ["Rails", "Ruby", "Clean Code", "Fear Gem"]
type = ""
+++

Ever found yourself drowning in a sea of nil checks? Or perhaps you've built a fortress of begin/rescue 
blocks just to handle potential errors? If you're nodding along, you're not alone. Ruby developers often 
find themselves writing defensive code: checking for nil values, handling edge cases, and wrestling with 
error management. It's like walking on eggshells, always afraid of what might break.

Picture this: You're crafting a Ruby application, and it's like building a house of cards. One missing nil check, 
and everything tumbles down. Your code is peppered with defensive programming, if statements nested so deeply 
they're practically forming a pyramid, and begin/rescue blocks scattered like safety nets throughout your application. 
We've all been there, and let's be honest - it's not the Ruby elegance we signed up for.

But what if you could write Ruby code that flows like poetry? Where nil values are tamed, errors are handled 
gracefully, and nested conditionals are a thing of the past? That's where our unlikely hero steps in – the Fear gem.

Here's the cool part: The Fear gem is like a trusty sidekick for your Ruby code. Despite its name, it actually makes 
coding less scary! Think of it as a special tool that helps you write cleaner, safer code without all the messy checks 
and balances. It takes the best ideas from another programming language called Scala and brings them to Ruby in a 
way that just makes sense.

### What exactly is the Fear gem?
Think of the Fear gem as a Swiss Army knife for handling uncertain situations in your code. You know those moments when 
you're not sure if something exists, or if an operation will succeed? That's where Fear shines

This gem provides several powerful tools like Option, Try, and other functional programming patterns, all implemented 
in an idiomatic Ruby way.

### Option (Your Secret Weapon Against nil)
Think of Option as a special container, like a gift box. This box can either contain something (Some) or be empty 
(None). The magic is that you can safely work with this box without constantly checking if it's empty!

Let's dive into a real-world example that every developer can relate to. Imagine you're building a user profile feature 
where you need to display a user's name. The requirement is simple: if the user has set a nickname, show that, if not, 
fall back to showing their full name (first name + last name)

The Ruby way - using present? for nil/empty check:
```ruby
  def get_display_name(user)
    return user.nickname if user.nickname.present?
        
    "#{user.first_name} #{user.last_name}"
  end
```

Now, let's see how Fear's Option makes this elegant:
```ruby
  def get_display_name(user)
    Fear.option(user.nickname).get_or_else("#{user.first_name} #{user.last_name}")
  end
```
See what happened there? Instead of having separate return statements, Fear's Option lets us express our intent 
clearly: "Here's what I want to use if a nickname exists, and here's my fallback plan."

No more presence checks, just a clean way to handle both cases elegantly. Simple, right?

Still not convinced about Option's power? Let me show you another real-world scenario. Imagine you have a service that 
processes some data - maybe it's parsing a file, or calling an external API. Sometimes it gives you a result, 
sometimes it doesn't. Here's how we'd typically handle this:

The Ruby way - clean and straightforward:
```ruby
  def process_data(input)
    result = execute_complex_operation(input)
    return handle_result(result) if result.present?
  
    handle_nil
  end
```

Now, watch how Fear's Option makes this expressive:
```ruby
  def process_data(input)
    Fear.option(execute_complex_operation(input)).map do |m|
      m.some { |result| handle_result(result) }
      m.none { handle_nil }
    end
  end
```

Look at that! Fear's Option pattern matching using some and none makes our intentions crystal clear. When we have a 
result, handle it with `handle_result`, when we don't, run `handle_nil`. No if statements, no checking for presence, 
just clean, expressive code that tells a story.

### Try (Your Escape from begin/rescue Hell)
Remember those times when you're dealing with "risky" operations - like parsing JSON, accessing APIs, or converting 
data types? You know, the kind of operations that make you wrap everything in begin/rescue blocks? Well, meet Try - 
your new best friend for handling these potentially explosive situations!

Think of Try as your code's safety harness. Instead of littering your code with begin/rescue blocks, Try gives you a 
clean way to handle operations that might blow up in your face. Let me show you a real-world example:

The Ruby way - with exception handling:
```ruby
  def parse_user_data(json_string)
    begin
      data = JSON.parse(json_string)
      return handle_user_data(data)
    rescue JSON::ParserError => error
      return handle_parsing_error(error)
    end
  end
```

Now see how Try makes this elegant:
```ruby
  def parse_user_data(json_string)
    Fear.try { JSON.parse(json_string) }.map do |m|
      m.success { |data| handle_user_data(data) }
      m.failure { |error| handle_parsing_error(error) }
    end
  end
```
Look at that! Try wraps our risky JSON parsing operation in a protective bubble. Using success and failure pattern 
matching, we can clearly express what should happen in each case. If the parsing succeeds, we'll handle the data, 
if it fails, we pass the error to our error handler. No more begin/rescue pyramids!

### Making Rails and Fear Work Together
Now that we've seen how powerful Fear can be, let's talk about integrating it into your Rails applications. Here's a 
neat trick I use frequently to make Fear's Option pattern play nicely with Rails `ActiveRecord`.

Ever found yourself writing code like this in Rails?
```ruby
  def process_user(id)
    user = User.find_by(id: id)
    return handle_missing_user if user.nil?
    
    handle_user(user)
  end
```

Instead, we can add a sprinkle of Fear's magic to our `ApplicationRecord` to make this more elegant,
In app/models/application_record.rb:
```ruby
  class ApplicationRecord < ActiveRecord::Base
    def self.option_find_by(*args)
      Fear.option(find_by(*args))
    end
  end
```

Now in your code:
```ruby
  def process_user(id)
    User.option_find_by(id: id).map do |m|
      m.some { |user| handle_user(user) }
      m.none { handle_missing_user }
    end
  end
```
Look how clean that is! By adding just one method to our `ApplicationRecord`, we've married Rails' powerful ORM with 
Fear's Option type. No more explicit nil checks, just clean, expressive code that clearly shows our intent.

This pattern is especially powerful when you're chaining database operations or working with associations. 
It makes your code both safer and more readable!

### Graceful Updates with Try
Here's another Rails integration that I love using. When updating records, we often need to handle success and error 
cases, show flash messages, and redirect users accordingly. Let's add another helper to our `ApplicationRecord`

In app/models/application_record.rb:
```ruby
  class ApplicationRecord < ActiveRecord::Base
    def try_update(*args)
      is_success = update(*args)
      return Fear.success(nil) if is_success
  
      Fear.failure(errors)
    end
  end
```

Now, let's see how this transforms our controller code,
The typical Rails way:
```ruby
  def update
    if @user.update(user_params)
      flash[:success] = "Profile updated successfully!"
      redirect_to user_path(@user)
    else
      flash[:error] = @user.errors.full_messages.to_sentence
      render :edit
    end
  end
```

The Fear way - clean and expressive:
```ruby
  def update
    @user.try_update(user_params).map do |m|
      m.success do
        flash[:success] = "Profile updated successfully!"
        redirect_to user_path(@user)
      end    
      m.failure do |errors|
        flash[:error] = errors.full_messages.to_sentence
        render :edit
      end
    end
  end
```

Look at that! No more if/else blocks. Our code clearly expresses what happens in both success and failure cases. 
The `try_update` method handles the update operation and wraps the result in Fear's Try type, making our controller 
code both cleaner and more maintainable.

This pattern is especially handy when you're dealing with complex updates that might involve multiple steps or 
validations. It keeps your controller code clean and your error handling consistent!

And that's how I tame uncertainty in my Rails applications using Fear! We've only scratched the surface here - 
Fear comes packed with more powerful tools that you can explore in its 
[GitHub documentation](https://github.com/bolshakov/fear).

What I've shown you is just how I use Fear to make my Rails code cleaner and more expressive. The real magic happens 
when you start mixing these patterns with Rails in your own way. Go ahead, give it a try - you might find even cooler 
ways to use it than I have!
