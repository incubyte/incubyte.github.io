+++
title = "Rails RESTful API, Outside in TDD"
slug = "rails-restapi-tdd"
date = 2022-07-02T02:32:46+05:30
image = "/images/2022/07/horizon.jpg"
draft = true
authors = ["Nitin Rajkumar"]
description = ""
tags = ["Ruby on Rails","Outside->In TDD", "Software Craftsmanship"]
categories = ["Playbook", "Software Craftsmanship"]
type = ""
+++

### There is always a disciplined way to do things

Even before I sipped the coffee, as the machine was dispensing it a rush, probably of pride, passed through, caused by the recent solution I had provided for a race-condition problem. While having the coffee staring at the rain outside through the glass door I intuitively thought about the number of ways in which I could skip taking up the tickets in the backlog considering them not be challenging and menial. My manager came upto me and asked me if I could, start that evening and go to a client location "A remote place with some historical significance" and work from there for a week on a small REST ful API, ofcourse I thought about it to be menial as he said. I just wanted to visit that place, in fact my first thoughts were to finish it as soon as possible and save time to explore the place. Took some time delivering the fix for race condition. In short of time, while travelling called home to help me gather the things to backpack.

I reached the stay at the place only to realize that I had forgot to pack my dental kit, and had to wait for the stores to open up. With hindsight, I surely should have made a checklist of things to carry and marked them as soon as the item made its way into the bag.

After the warm welcome at the client location and after listening to the expectations I had quickly setup the Rails Api- only project.

*Rails is a web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.*

To start a new rails api only project

```bash
rails new project_name --api
```

#### Active Record

Generated an active-record, if no datatype is provided string is considered as default

```bash
rails generate model Todo title description done:boolean

rails db:create
rails db:migrate

```

In Active Record, objects carry both persistent data and behavior, which operates on that data.
Rails ORM(object relational mapping) connects objects of an application to tables in a relational database management system.

Spent few extra hours that night and finished the assignment.

I woke up in the morning and felt tired and soon figured out I have forgot my medication too, and I could not get them in that town. Just before submitting the project I was quickly reviewing the major functionalities, the ones I considered to be challenging, if at all are working as expected and soon found that the model accepts input with title as empty string, which shouldn't be the case, and I found few other minor issues just at a glance, and I was unaware and worried how many more may surface up. By then I was already regretting that I have relied too much on my gut. I then decided to create a safety-net for the RESTful API just like the check-list I thought of having for the backpack.

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

#### **Test Data Preperation For Controller Tests**

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

I started writing unit-tests for Active record model followed by tests for the controller. Very soon into creating the safety-net, towards the end of that day, I have realized that I am actually writing specs that affirm the code that has been written is correct. Just like picking up a thing from the backpack and writing its name in the checklist and placing it back in the backpack and marking the checklist. Too late to write unit tests.

{{< figure src="/images/2022/07/right-time.jpg" >}}

### Few minutes of planning saves few hours of work

I took a long walk pondering about the reputation this quality-less and ill-confident code that I have written would bring to me and my company. Never have I thought a work that I considered to be menial would pose such a challenge. I had made my mind arrived at a decision to build the application from scratch by writing specs first. I did not want to realize that it is too late again. They say few minutes of planning would save few hours of work.
Did some research and found that the code should pass the following basic checks.

[x] Fulfil Requirements without errors.
[x] The code should be maintainable and scalable
[x] The code should adhere to Single Responsibility Principle(SRP).

Test-driven development is a software development process relying on software requirements being converted to test cases before software is fully developed.

1. Write production code only to pass a failing unit test.
2. Write no more of a unit test than enough to fail.(RED)
3. Write no more production code than necessary to pass the one failing unit test.(GREEN)

A quick feedback on my previous code is that it is not maintainable, it is not scalable and that it violates one of the basic SOLID principles, which is SRP.
Single Responsibility Principle states that every module of class should have one responsibility in a program.

This is how my controller's create action(to save a todo) looked like, every thing was in the controller be it Rails specific code, active record specific code or application logic code.

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

The above three methods needs to be shifted into their own respective independent classes, and their instances should be invoked from the dependent classes and to reduce the coupling between dependent classes, need to create the instance at the class level and provide it to the methods.

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

### Simplicity is the key for a system to work in the best way

With clear plan of architecture, and a checklist of practices to follow and there was one last question where do I start with the development.

{{< figure src="/images/2022/07/crossroads.jpeg" >}}

Where should I start first write model specs, controller specs, Runner specs or Repository Specs, this question has to be responded with every time a new resource or funcionality is addressed. In 1952 William Edmund Hick and Ray Hyman a pair of psychologits conducted an experiment to examine relationship between number of stimuli present and individual's reaction time to any given stimulus, the result was obvious the more stimuli to choose from, the longer it takes user to make a decision on which one to interact with.

`Out side in test driven development` resolves this problem.

Using this approach I started with the feature or end point specification and worked my way inwards towards the repository layer.

This test dropped me to the next layer, Controller, whose implementation is written after writing a spec for it.

Fixing this should have fixed the end point specification, but it drops further down to the next layer, Runner(which contains the application login), whose implementation is written after the spec for it.

The model is independent and can the spec for it can be written independent of the above flow.

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
```

running the above specification resulted in the error

```ruby
rspec

RED:

  1) Todos with valid request attributes will create a Todo and return 201 returns status code 201
     Failure/Error: post '/todos', params: {title: "Todo-1", description:'First todo' }, as: :json

     ActionController::RoutingError:
     <span style="color:red">No route matches [POST] "/todos"</span>.

```

I need not have to ponder on what to do next, the spec failure suggested what needs to be fixed and that is the route.

```ruby
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
I created a new folder in the spec directory and named it as `controllers` and added a spec file and named it as `todos_controller_spec.rb`

The primary goal of writing this spec file is that a controller is missing, and the secondary goal is to check if the controller exists it can invoke the instance of the runner, which serves the application/feature logic.

At this moment neither the controller exists, nor the runner exists, for the controller runner is an external class and to check if it can invoke I had to create a double for the runner and make the double react, as if it is the original, when it is called. This concept is also called mocking.

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
Run the tests

$ rspec

RED:
     1) Todos Controller invokes the instance of CreateRunner successfully
     Failure/Error: create_new_todo.create(todo)

     NoMethodError:
       undefined method `create` for #<TodosController:0x0000000000bba8>
GREEN:
    def create

    end

rspec

RED:

  1) Todos Controller invokes the instance of Create_Runner successfully
     Failure/Error: allow(create_new_todo).to receive(:todo_params).and_return(params)
       #<TodosController:0x000000000069a0> does not implement: todo_params

GREEN:
    def todo_params

    end

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


RED:

  1) Todos Controller invokes the instance of Create_Runner successfully
     Failure/Error: @runner.create_todo()

       #<Double "TodosRunner"> received :create_todo with unexpected arguments
         expected: ({:description=>"First todo", :title=>"Todo-1"})
              got: (no args)
       Diff:
       @@ -1 +1 @@
       -[{:description=>"First todo", :title=>"Todo-1"}]
       +[]

GREEN:
    def create
        @runner.create_todo(todo_params)
    end
    def todo_params
        params.permit(:title, :description)
    end
$ rspec

RED:

  1) Todos with valid request attributes will create a Todo and return 201 returns status code 201
     Failure/Error: @runner.create_todo(todo_params)

     NoMethodError:
       undefined method `create_todo` for "":String

GREEN:

    def initialize(runner = TodoRunner.new)
        @runner = runner
    end
```

With this all the controller specs are fixed before moving further I had ran the request spec to check if fixing the controller had fixed the request spec. The reques spec is not fixed, but I got my next direction to mover forward.

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

Created a spec file for the TodosRunner before creating the class TodosRunner by adding the file to the runners folder in spec directory.

The basic resposibility of this class is similar to the controller in terms of invoking the instance of the class it is dependent on, which is to invoke the Repository Class.

```ruby
GREEN:
    Just like I fixed the controller I followed the similar process.

```

The primary goal of writing this spec file is that a controller is missing, and the secondary goal is to check if the controller exists it can invoke the instance of the runner, which serves the application/feature logic.

At this moment neither the controller exists, nor the runner exists. For the controller runner is an external class and to check if controller can invoke the runner I had to create double and make the double react when it is called. This concept is called mocking.

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

Testing the Todos Runner spec resulted in the following error which is expected

RED:

  1) Todos Controller invokes the instance of Create_Runner successfully
     Failure/Error: create_new_todo = TodosRunner.new(mock)

     NameError:
       uninitialized constant TodosRunner

GREEN:

    Created new file todos_runner.rb in runners folder of app directory.

RED:

 1) Todos  Runner  invokes the repository method new_todo
     Failure/Error: todosRunner.create_todo(new_params)

     NoMethodError:
       undefined method `create_todo` for #<TodosRunner:

GREEN:
    def create_todo

    end

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

Now that the runner spec is fixed ran the request spec to check if it has been fixed too?

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

$ rspec

RED:

1) Todos with valid request attributes will create a Todo returns status code 201.
     Failure/Error:
       def initialize(repo = TodosRepository.new)
           @repo = repo

     NameError:
       uninitialized constant TodosRunner::TodosRepository
```

The repository has no further interactions with an external client and all the methods the repository would include querying the ActiveRecords and testing them would be testing the ActiveRecord api, which must have been thoroughly tested before becoming available.

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
            todo = Nitin.new(save_params)
            mock = double("TodosRepository")
            allow(mock).to receive(:new_todo).and_return(todo)
            expect(mock).to receive(:save_todo).with(todo)
            todosRunner = TodosRunner.new(mock)
            todosRunner.create_todo(save_params)
        end
RED :
  1) Todos  Runner  invokes the repository method new_todo
     Failure/Error: expect(mock).to receive(:save_todo).with(todo)

       (Double "TodosRepository").save_todo(#<Nitin id: nil, title: "Todo-1", description: "First todo", created_at: nil, updated_at: nil>)
           expected: 1 time with arguments: (#<Nitin id: nil, title: "Todo-1", description: "First todo", created_at: nil, updated_at: nil>)
           received: 0 times
GREEN:
    def create_todo(add_params)
        todo =@repo.new_todo(add_params)
        @repo.save_todo(todo)
    end

Failing Test Case:

        it " calls save_todo to save initialized todo and returns created" do

            save_params = {title: "Todo-1", description:'First todo' }
            todo = Nitin.new(save_params)
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

I went on to write the request spec(todos_spec.rb) that expects 422 when title, which is a mandatory field is not passed.

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

The fix has to be done at Runner layer as this layer contains the application logic.
todos_runner_spec.rb
Failing Test Case:
        it " returns unprocessable entity when title is not passed" do
            save_params = {title: "", description:'First todo' }
            todo = Nitin.new(save_params)
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
 $ rspec all greens
```

### It is always quite a sight to see all greens

I was so immersed into conversing with rspec to develop this code, I felt like I was a part of a play, playing a character and that the play is being observed, and I am responding only when there is a cue and refrained to when there is no cue as I may mislead them observers if I take any decision without the cue from the RSpec.

In this manner I had finished the assignment and gave it to the client. I had two days to go for a visit around the place. As I was watching a tomb my instinctive thoughts about the work start to take over me but with the fact that there never existed any piece of code before going through a test did not let those thoughts take over me, and they seem to have evaporated. The sight seeing was pleasant with nothing in the back of my mind.
