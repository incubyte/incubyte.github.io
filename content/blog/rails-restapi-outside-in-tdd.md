+++
title = "Rails RESTful API, Outside in TDD"
slug = "rails-restapi-tdd"
date = 2022-07-02T02:32:46+05:30
image = "/images/2022/07/outsidein.jpg"
draft = false
authors = ["Nitin Rajkumar"]
description = "Ruby on rails outside in test driven development"
tags = ["Ruby on Rails","TDD", "Software Craftsmanship"]
categories = ["Ruby on Rails","TDD", "Software Craftsmanship"]
type = ""
+++

### There is always a disciplined way to do things

I was waiting for the coffee dispenser to finish filling up my cup and my mind started wandering. Suddenly, I felt this rush. Was it a sense of pride? Could be. I had, just a few minutes ago, been able to solve a race-condition problem that was bugging me for a while. Sipping at the coffee I could see out the glass door, that it was raining. This is a good moment, I thought to myself. One thing I didn’t want to think about were the open tickets in the backlog. Unchallenging and menial, they bored me. With soothing sounds of the rain in the background and the warmth of the fuel of the Gods, I was now thinking of ways I could avoid working on them!

I had a train to catch, later that evening to travel to “a remote place with some historical significance”. This workation was in planning for months, so I was excited about it! I scoped out my work for the week I was travelling; a small RESTful API (Redacted to a Todo), of course I thought it to be menial as I went over it. All I wanted to do was to be done with so I could spend more time exploring.

Coming up with the fix for the race condition took a while, which meant, I had little to no time to pack and make sure that I didn’t miss my train! So, I called home to get some help gathering my things to shove into my backpack. Tough times call for desperate measures, folks!

The train-ride to my destination lasted the entire night and day. The relief of finally getting off and checking-in to my place of stay was short lived though, because soon enough, I realized that I’d completely forgotten to pack my dental kit. And thus began the wait for the stores to open and realization hit that even a checklist of essentials would have made my life easier!

Over breakfast, while chewing on a piece of bread I remember thinking to myself that the success of this workation depended on my ability to find a balance between finishing work stuff and finding the time to relax and enjoy my surroundings. I took a sip of coffee to help wash down the food and also cement that fact in my mind.

I had quickly set up the Rails API only project.

*Rails is a web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.*

```bash
To start a new rails api only project
rails new project_name --api
```

#### Active Record

Generated an active-record, if no data type is provided string is considered as default

```bash
rails generate model Todo title description done:boolean

rails db:create
rails db:migrate

```

In Active Record, objects carry both persistent data and behavior, which operates on that data.
Rails ORM(object relational mapping) connects objects of an application to tables in a relational database management system.

Spent few extra hours that night and finished the work.

I woke up the next morning, feeling a little tired and soon figured out that my memory had betrayed me yet again in my packing frenzy as I’d forgotten to bring along my medication as well. The worst part? I couldn’t get it in that town.
Oh well, couldn’t do much about it now. So, I set about reviewing the major functionalities [the challenging parts] of my project before I had to submit it. And soon found out that the day was going to get worse. The model accepted inputs for the title as an empty string, which it shouldn't have, and sure enough I found a few other minor issues soon after. How many more of these errors were there!? I started worrying

Gut feelings can be good sometimes, but it wasn’t working out for me right now so I set to work on creating a safety-net for the RESTful API just like the check-list I thought of having for the backpack.

### When is the right time to write unit tests

RSpec is a domain-specific language testing tool written in the programming language Ruby to test Ruby code.

#### **Gemfile**

```ruby
group :development, :test do
  gem 'rspec-rails' # testing framework for rails
end
$ bundle install
`$ rails generate rspec:install`
This generated the configuration files (.rspec, spec/spec_helper.rb, spec/rails_helper.rb)
```

```ruby
Included the following gems that come in handy while writing unit test cases
group :test do
  gem 'database_cleaner' # It can be used to ensure a clean slate for testing
  gem 'factory_bot_rails' # To create test data
  gem 'faker' # To generate fake data for fields
  gem 'shoulda-matchers' Reduces error prone lengthy specs to one-liners.
end
```

Configure the added gems by adding their configuration to `spec/rails_helper.rb`

```ruby
# Database cleaner requirement
require 'database_cleaner'
# shoulda matchers configuration
Shoulda::Matchers.configure do |config|
 config.integrate do |with|
   with.test_framework :rspec
   with.library :rails
 end
end

RSpec.configure do |config|
  #Factory Bot configuration
  config.include FactoryBot::Syntax::Methods
  #Database cleaner configuration
  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
    DatabaseCleaner.strategy = :transaction
  end

  config.around(:each) do |example|
    DatabaseCleaner.cleaning do
      example.run
    end
  end
end

```

#### **Test Data Preparation For Controller Tests**

```ruby
# Created a file todo.spec inside factories folder in spec directory.

FactoryBot.define do
    factory :todo do
        title {Faker::Name.name}

        description {Faker::Lorem.word}
    end
end

**Active Record Specs**
RSpec.describe Todo, type: :model do

 # Validation tests
 it { should validate_presence_of(:title) }
 it { should validate_length_of(:title).is_at_least(3)}
```

I wrote unit-tests for the Active record model followed with tests for the controller.
Very soon into creating the safety-net, towards the end of that day, I’d realized that I’d written specs that affirmed that the code that’d been written was correct.

Just like picking up an item from the backpack and checking it off in the checklist and placing it back in the backpack. Completely redundant!

Well, it was too late to write unit tests now.

{{< figure src="/images/2022/07/right-time.jpg" >}}

### A minute spent on planning can save an hour of work

I had to take a break from it all to digest the fact that all my effort had gone down the drain and ended up in a fiasco. This wasn’t the quality that was expected of me and by extension my company!
Never would I’ve imagined that the work that I considered to be menial would end up posing such a challenge to me!
It is at that moment that I made up my mind to re-build the application from scratch and do it the right way by writing specs first.
I did not want to revisit the realization of it being "too late".

Never underestimate the impact just a few minutes of planning can make.

Did some research and found out the basic checks my code was supposed to pass for optimum results.
- [x] Fulfill Requirements without errors.
- [x] The code should be maintainable and scalable.
- [x] The code should adhere to Single Responsibility Principle(SRP).

Test-driven development is a software development process relying on software requirements being transformed to test cases before software is fully developed.

1. Write production code only to pass a failing unit test.
2. Write no more of a unit test than enough to fail.(RED)
3. Write no more production code than necessary to pass the one failing unit test.(GREEN)

A quick glance at my previous piece of code tells me that is neither maintainable, nor scalable and it also violates one of the basic SOLID principles, which is SRP.

Single Responsibility Principle states that every module of class should have one responsibility in a program.

This is what my controller’s create action (to save a todo) looked like. Everything was in the controller - be it Rails specific code, active record specific code or application logic code.

```ruby
def create
    todo_params = params.require(:product).permit(:title, :price, :published)
    todo = Todo.new(todo_params)
    if todo.save
        render json: todo, status: :created
    else
        render json: todo.errors, status: :unprocessable_entity
    end
end
```

Need to fish out the application logic and active record code from the controller

```ruby
def create
    todo_params = params.permit(:title, :description)
    result, status = create_todo(todo_params)
    render json: result, status:status
end

def create_todo(todo_params)
    todo= new_todo(todo_params)
    if(save_todo(todo))
        return todo, :created
    else
        error=Hash.new
        error["message"] ="Invalid Input"
        return error, :unprocessable_entity
    end
end

def new_todo(todo_params)
    Todo.new(todo)
end
def save_todo(todo)
    todo.save
end
```

The above three methods need to be shifted into their own respective independent classes, and their instances should be invoked from the dependent classes and to reduce the coupling between dependent classes, need to create the instance at the class level and provide it to the methods.

```ruby
class TodosController < ApplicationController
    def initialize(runner=CreateRunner.new)
        @runner = runner
    end

    def create
        todo_params = params.permit(:title, :description)
        result, status = @runner.create_todo(todo_params)
        render json: result, status:status
    end
end


class CreateRunner
    def initialize(repository = Repository.new)
        @repository = repository
    end

    def create_todo(todo_params)
        todo= @repository.new_todo(todo_params)
        if(@repository.save_todo(todo))
            return todo, :created
        else
            error=Hash.new
            error["message"] ="Invalid Input"
            return error, :unprocessable_entity
        end
    end
end


class Repository
    def new_todo(todo_params)
        Todo.new(todo)
    end

    def save_todo(todo)
        todo.save
    end
end
```
### Simplicity is key
Where should I start first? Model specs, Controller specs, Runner specs or Repository Specs? This question has to be responded to every time a new resource or functionality is addressed.

In 1952, William Edmund Hick and Ray Hyman a pair of psychologists conducted an experiment to examine the relationship between the number of stimuli present and an individual’s reaction time to any given stimulus. The result was obvious, the more options the user had to choose from, the longer it took them to decide on which one to interact with.

Outside-In Test Driven Development solves this problem.

Using this approach I started with the feature or end point specification and worked my way inwards towards the repository layer.
This test dropped me to the next layer, Controller, whose implementation is written after writing a spec for it.
Fixing the controller spec should have fixed the end point specification, but it dropped further down to the next layer, Runner (which contained the application login), whose implementation is written after its spec.

The model is independent, and the spec for it can be written independent of the above flow.

```ruby
Failing Test Case:
RSpec.describe "Todos", type: :request do
  context 'with valid request attributes will create a Todo and return 201' do
    it 'returns status code 201' do
      post '/todos', params: {title: "Todo-1", description:'First todo' }, as: :json
      expect(response).to have_http_status(201)
    end
  end
end

$ rspec

running the above specification resulted in the error

RED:
  1) Todos with valid request attributes will create a Todo and return 201 
     Failure/Error: post '/todos', params: {title: "Todo-1", description:'First todo' }, as: :json

     ActionController::RoutingError:     

I need not ponder what to do next as the spec failure suggested what needed fixing.

GREEN:
    found routes.rb in app/config directory and added the route as following

    resources :todos, only: %i[create ]
```

Running the test after fixing it resulted in another error that reads

```ruby
 $ rspec

      Failure/Error: post '/todos', params: {title: "Todo-1", description:'First todo' }, as: :json

     ActionController::RoutingError:
       uninitialized constant TodosController
 ```

The fix would be to add a new controller but according to Test driven development we need to have the test file before the Controller itself.
I created a new folder in the spec directory and named it `controllers` and added a spec file and named it `todos_controller_spec.rb`

The primary goal of writing this spec file is to check if controller exists, and the secondary goal is to check if it can invoke the instance of the runner, which serves the application/feature logic.

At this moment neither the controller exists, nor the runner exists, for the controller runner is an external class and to check if it can invoke I had to create a double for the runner and make the double react, as if it is the original, when it is called.
This concept is also called mocking.

```ruby
Failing Test case:
RSpec.describe "Todos", type: :controller do
    describe "Controller" do
        it "invokes the instance of CreateRunner successfully" do
            todo = Todo.new({"title": "Todo-1", "description":'First todo' })
            mock = double("TodosRunner")
            expect(mock).to receive(:create_todo).with(todo)
            create_new_todo = TodosController.new(mock)
            create_new_todo.create
        end
    end
end

RED:
    1) Todos Controller invokes the instance of Create_Runner successfully
     Failure/Error: create_new_todo = TodosController.new(mock)

     ArgumentError:
       wrong number of arguments (given 1, expected 0)
GREEN:
    class TodosController < ApplicationController
        def initialize(runner="")
            @runner = runner
        end
    end
```
Run the tests

```ruby
$ rspec

RED:
     1) Todos Controller invokes the instance of CreateRunner successfully
     Failure/Error: create_new_todo.create(todo)

     NoMethodError:
       undefined method `create` for #<TodosController:0x0000000000bba8>
GREEN:
    def create

    end
```

```ruby
$ rspec

RED:
  1) Todos Controller invokes the instance of Create_Runner successfully
     Failure/Error: allow(create_new_todo).to receive(:todo_params).and_return(params)
       #<TodosController:0x000000000069a0> does not implement: todo_params

GREEN:
    def todo_params

    end
```

```ruby
$ rspec

RED:
  1) Todos Controller invokes the instance of Create_Runner successfully
     Failure/Error: expect(mock).to receive(:create_todo).with(params)

       (Double "TodosRunner").create_todo({:description=>"First todo", :title=>"Todo-1"})
           expected: 1 time with arguments: ({:description=>"First todo", :title=>"Todo-1"})
           received: 0 times

GREEN:
    def create
        @runner.create_todo
    end
```
```ruby

$ rspec

RED:
  1) Todos Controller invokes the instance of Create_Runner successfully
     Failure/Error: @runner.create_todo()

       #<Double "TodosRunner"> received :create_todo with unexpected arguments
         expected: ({:description=>"First todo", :title=>"Todo-1"})
              got: (no args)

GREEN:
    def create
        @runner.create_todo(todo_params)
    end
    def todo_params
        params.permit(:title, :description)
    end

```
```ruby
$ rspec

RED:
  1) Todos with valid request attributes will create a Todo and return 201 
     Failure/Error: @runner.create_todo(todo_params)

     NoMethodError:
       undefined method `create_todo` for "":String

GREEN:
    def initialize(runner = TodoRunner.new)
        @runner = runner
    end
```

With this all the controller specs were fixed before moving further I had ran the request spec to check if fixing the controller had fixed the request spec.
The request spec is not fixed, but I got my next direction to move forward.

```ruby
$ rspec  - The request spec pops the following error.

RED:
  1) Todos with valid request attributes will create a Todo and return 201
     Failure/Error:
       def initialize(runner = TodosRunner.new)
           @runner = runner

     NameError:
       uninitialized constant TodosController::TodosRunner
```

Created a spec file for the TodosRunner before creating the class TodosRunner by adding the file to the runners folder in the spec directory.

The basic responsibility of this class is similar to the controller in terms of invoking the instance of the class it is dependent on, which is to invoke the Repository Class.

```ruby
GREEN:
    I followed a similar process here, as I did to fix the controller.

```

```ruby
Failing Test Case:
RSpec.describe "Todos", type: :runner do
    describe "Runner" do
        it "invokes the instance of Repository successfully" do
            todo = Todo.new({"title": "Todo-1", "description":'First todo' })
            mock = double("Repository")
            expect(mock).to receive(:new_todo).with(todo)
            create_new_todo = Respository.new(mock)
            create_new_todo.new_todo(todo)
        end
    end
end

Testing the Todos Runner spec resulted in the following error which was expected

$ rspec
RED:
  1) Todos Controller invokes the instance of Create_Runner successfully
     Failure/Error: create_new_todo = TodosRunner.new(mock)

     NameError:
       uninitialized constant TodosRunner

GREEN:
    Created new file todos_runner.rb in runners folder of app directory.

```
```ruby
$ rspec
RED:
 1) Todos  Runner  invokes the repository method new_todo
     Failure/Error: todosRunner.create_todo(new_params)

     NoMethodError:
       undefined method `create_todo` for #<TodosRunner:

GREEN:
    def create_todo

    end
```
```ruby
$ rspec

RED:
  1) Todos  Runner  invokes the repository method new_todo
     Failure/Error:
       def create_todo

       end

     ArgumentError:
       wrong number of arguments (given 1, expected 0)

GREEN:
    def create_todo(add_params)

    end
```
```ruby
$ rspec

RED:
  1) Todos  Runner  invokes the repository method new_todo
     Failure/Error: expect(mock).to receive(:new_todo).with(new_params)

       (Double "TodosRepository").new_todo({:description=>"First todo", :title=>"Todo-1"})
           expected: 1 time with arguments: ({:description=>"First todo", :title=>"Todo-1"})
           received: 0 times

GREEN:
    def create_todo(add_params)
        @repo.new_todo(add_params)
    end
```

Now that the runner spec is fixed, so has run the request spec to check if it has been fixed too?

```ruby
RED:
  1) Todos with valid request attributes will create a Todo returns status code 201
     Failure/Error: @repo.new_todo(add_params)

     NoMethodError:
       undefined method `new_todo for` "":String

GREEN:
    def initialize(repo = TodosRepository.new)
        @repo = repo
    end
```

```ruby
$ rspec

RED:
1) Todos with valid request attributes will create a Todo returns status code 201.
     Failure/Error:
       def initialize(repo = TodosRepository.new)
           @repo = repo

     NameError:
       uninitialized constant TodosRunner::TodosRepository
```

The repository has no further interactions with an external client and all the methods the repository would include querying the ActiveRecords and testing them would be testing the ActiveRecord API, which must have been thoroughly tested before becoming available.

Created a repository `repository.rb` and added a method that handles creating new todo

```ruby
GREEN:
    class TodosRepository
        def new_todo(add_params)
            Todo.new(add_params)
        end
    end

$ rspec

RED:
  1) Todos with valid request attributes will create a Todo and returns status code 201
     Failure/Error: expect(response).to have_http_status(201)
       expected the response to have status code 201 but it was 204
```

The application logic has not been implemented yet, to save the todo that has been initialized and return the saved todo.

Wrote a spec on Runner class to save the initialized todo and return it back.

```ruby
Failing Test Case:
        it " invokes the repository method new_todo" do
            save_params = {title: "Todo-1", description:'First todo' }
            todo = Todo.new(save_params)
            mock = double("TodosRepository")
            allow(mock).to receive(:new_todo).and_return(todo)
            expect(mock).to receive(:save_todo).with(todo)
            todosRunner = TodosRunner.new(mock)
            todosRunner.create_todo(save_params)
        end

RED :
  1) Todos  Runner  invokes the repository method new_todo
     Failure/Error: expect(mock).to receive(:save_todo).with(todo)

       (Double "TodosRepository").save_todo(#<Todo id: nil, title: "Todo-1", description: "First todo", created_at: nil, updated_at: nil>)
           expected: 1 time with arguments: (#<Todo id: nil, title: "Todo-1", description: "First todo", created_at: nil, updated_at: nil>)
           received: 0 times

GREEN:
    def create_todo(add_params)
        todo =@repo.new_todo(add_params)
        @repo.save_todo(todo)
    end
```
```ruby
Failing Test Case:
        it " calls save_todo to save initialized todo and returns created" do
            save_params = {title: "Todo-1", description:'First todo' }
            todo = Todo.new(save_params)
            todosRunner = TodosRunner.new
            todo, status = todosRunner.create_todo(save_params)
            expect(status).to eq(:created)
            expect(todo["id"]).to eq(1)
        end
$ rspec

RED:
  1) Todos  Runner  calls save_todo to save initialized todo and returns created
     Failure/Error: expect(status).to eq(:created)

       expected: :created
            got: nil

GREEN:
    def create_todo(add_params)
        todo =@repo.new_todo(add_params)
        @repo.save_todo(todo)
        return todo, :created
    end

$ rspec

```

The Request Spec still returns 204 whereas it expects 201 this is because the controller has not rendered the output it received.

```ruby
Failing Test Case:
        it "invokes the instance of Create_Runner successfully and renders the json" do
            params = {title: "Todo-1", description:'First todo' }
            mock = double("TodosRunner")
            expect(mock).to receive(:create_todo).with(params)
            create_new_todo = TodosController.new(mock)
            allow(create_new_todo).to receive(:todo_params).and_return(params)
            allow(create_new_todo).to receive(:json_result).and_return(true)
            create_new_todo.create
        end

$rspec

RED:
 1) Todos Controller invokes the instance of Create_Runner successfully and renders the json
     Failure/Error: allow(create_new_todo).to receive(:json_result).and_return(true)
       #<TodosController:0x000000000069f0> does not implement: json_result
GREEN:

    def create
        result, status = @runner.create_todo(todo_params)
        json_result(result, status)
    end
    def json_result(object, status)
        render json: object, status:status
    end

$ rspec

All Greens

```

I went on to write the request spec(todos_spec.rb) that expects 422 when the title, which is a mandatory field, is not passed.

```ruby
Failing Test Case:
  context 'with invalid request attributes ' do
    it 'returns status code 422' do
      post '/qwerts', params: {title: "", description:'First todo' }, as: :json
      expect(response).to have_http_status(422)
    end
  end

$ rspec

RED:
  1) Todos with invalid request attributes returns status code 422
     Failure/Error: expect(response).to have_http_status(422)
       expected the response to have status code 422 but it was 201
```

```ruby
The fix has to be done at Runner layer as this layer contains the application logic.
todos_runner_spec.rb
Failing Test Case:
        it " returns unprocessable entity when title is not passed" do
            save_params = {title: "", description:'First todo' }
            todo = Todo.new(save_params)
            todosRunner = TodosRunner.new
            todo, status = todosRunner.create_todo(save_params)
            expect(status).to eq(:unprocessable_entity)
            expect(todo["message"]).to eq("Invalid input values")
        end
Fix:
    def create_todo(add_params)
        todo =@repo.new_todo(add_params)
        if(@repo.save_todo(todo))
            return todo, :created
        else
            error = Hash.new
            error["message"] = " Invalid input values"
            return error ,:unprocessable_entity
        end
    end
 $ rspec

All Green

```

### All Green - quite a wonderful sight!

I was so immersed in conversing with rspec while developing this application that I kind of got distanced from reality. I felt like I’d embodied this character in a play that was being watched and I was to only act out my lines on cue lest I’d mislead the audience. Rspec called the shots here!

And there you have it, folks! I finally ended up finishing the assignment and got it ready to be handed over to the client!
With a couple of days left of my stay, I started out on my journey exploring the unknown!
At one such moment, I was looking at a tomb over at the distance when dreadful thoughts started to creep back in! Thoughts of possible errors in the app! But, I put all of that to rest as I’d let the tests do their magic now.
Now, with my mind at ease and feeling a sense of achievement, the sights all around seemed a bit more pleasant!
