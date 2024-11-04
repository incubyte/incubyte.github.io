+++
title = "Dynamic Translations in Rails: Why Constants Can’t Adapt to Locale Changes and How to Fix It?"
slug = "rails-dynamic-translation-constants"
date = 2024-11-04T10:35:08+05:30
image = "/images/2023/ruby-generic.png"
draft = true
authors = ["Nitin Rajkumar"]
description = ""
tags = ["Playbook", "Software Craftsmanship", "Ruby on Rails", "I18n"]
categories = ["Playbook", "Software Craftsmanship", "Ruby on Rails"]
type = ""
+++

In math and science a particular number or value that does not change is called a constant. In programming too, a constant typically represents a value that doesn’t change — a number, string, or any data type that remains the same throughout the application’s runtime. But what if you need to assign a dynamic, changing value to a constant? Can a constant, by its nature, ever be dynamic?

Let’s explore this concept using a practical example in Rails and learn why, when working with multilingual support (I18n), a constant might not behave as expected.

---

### Setting Up a Constant for a Static Value

Imagine you want to return a plain string whose value will never change upon request. A constant might seem like a good choice:

```ruby
class ReturnPlainString
  PLAIN_STRING = {
    title: "Meaningless title ever",
    subtitle: "It's hard to explain you"
  }

  def simple_request
    "1. " + PLAIN_STRING[:title]
  end
end

ReturnPlainString.new.simple_request
#=> "1. Meaningless title ever"

```

Everything works fine until now, not only the people from your country but people from other countries want to make use of this wonderful application you have built. You just can't ask them to go ahead and use it because they don't understand your language. So you decide to make you app available in all the languages.

#### Introducing I18n for Multilingual Support

Internationalization is the process of designing and building a product so that it can be easily adapted to specific languages and cultures.

> I18n is a numeronym for Internationalization. Numeronyms are abbreviations where numbers replace letters to represent the count of letters omitted between the first and last letters of a word.

**Configure I18n**

- Rails adds all `.rb` and `.yml` files from the `config/locales` directory to the **translations load path**, automatically.
- You can change the default locale as well as configure the translations load paths in `config/application.rb` as follows:

```ruby
config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}')]
config.i18n.default_locale = :pirate
```

- The locale should be set at the beginning of each request so that all strings are translated using the desired locale during the lifetime of that request.

```ruby
# The locale can be set in an `around_action` in the `ApplicationController`:
around_action :switch_locale

def switch_locale(&action)
  locale = params[:locale] || I18n.default_locale
  I18n.with_locale(locale, &action)
end

```

---

**Define Translations**

Now, let’s add some translation files for our example:

```ruby
# config/locales/en.yml
en:
  title: Meaning less title ever
  subtitle: It is hard to explain you

# config/locales/pirate.yml
pirate:
  title: kajhf askdjf sjkdf wr
  subtitle: hdn nmckari jkfln yerfks asd hj

```

**Update code to reflect the translations**

Let’s update our constant to use these translations:

```ruby
class ReturnPlainString
  PLAIN_STRING = {
  "title" : I18n.t(title)
  "subtitle": I18n.t(subtitle)
  }

  def simple_request
      "1." + PLAIN_STRING[:title]
  end
end

ReturnPlainString.new.simple_request
```

When you run this code, you might expect the output to change based on the locale:

```ruby

# Expected: "1. Meaningless title ever"
# Actual: "1. Meaningless title ever"

```

However, if you change the locale (e.g., to `pirate`), `PLAIN_STRING` will still display the English version.

---

#### The Problem: Why Constants Don’t Update with Locale Changes

Rails’ **autoloading** mechanism plays a significant role here. In a typical Ruby program, files are loaded when explicitly required. In Rails, however, classes and modules are autoloaded, meaning they are automatically loaded into memory. In production, these constants are stored in memory after the application boots and remain unchanged.

Since `PLAIN_STRING` was assigned a value when the class was first loaded, the translations are fixed in memory and won’t change when the locale updates.

---

#### The Solution: Use a Method Instead of a Constant

To handle dynamic translations, avoid using constants. Instead, define a method that fetches the translations dynamically:

```ruby
class ReturnPlainString
	def plain_string
		{
			"title" : I18n.t(title)
			"subtitle": I18n.t(subtitle)
		}
	end

	def simple_request
		"1." + plain_string[:title]
	end
end

ReturnPlainString.new.simple_request
```

With this approach, `plain_string` will re-evaluate the translations each time it’s called, reflecting the current locale without the limitations of a constant.

---

### Takeaway

Constants are designed for values that don’t change, which makes them unsuitable for dynamic data like translations that depend on the user’s locale. When working with translations in Rails, use methods instead of constants to ensure your content adapts to the correct language for each request. This approach keeps your application flexible, multilingual, and easy to maintain.
