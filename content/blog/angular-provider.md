+++
title = "Angular Provider"
slug = "angular-provider"
date = 2022-02-10T22:58:11+05:30
image = "/images/2022/08/angular-logo.png"
draft = false
authors = ["Waqar Shaikh"]
authorLink = "/authors/waqar-shaikh/"
description = ""
tags = ["Software Craftsmanship", "Angular"]
categories = ["Playbook", "Software Craftsmanship", "Angular"]
type = ""
+++

# Provider
A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide

Angular Providers allows us to register classes, functions, or values (dependencies) with the Angular Dependency Injection system. 

**Now you must be wondering what on earth is the Angular Dependency Injection system?**

{{< figure src="/images/2022/08/dependency-injection.png" height="300px" width="300px">}}

# Dependency Injection

**Dependency** is a service or an object that a class needs to perform its function.

[Dependency injection](https://en.wikipedia.org/wiki/Dependency_injection), or DI, is a design pattern in which a class requests dependencies from external sources rather than creating them.

### Example
We have a `CarFactory` in which `Car` object is created.
````typescript
class CarFactory {
  car: Car = new Car(); 
}
````
And here is our `Car` 
````typescript
export class Car {
  engine: Engine;
  
  constructor() {
    this.engine = new Engine();
  }
}
````
````typescript
export class Engine {}
````

In the above example, in order to create a `Car`, we first need to create an `Engine`.<br>
Because we are instantiating the `Engine` class inside the constructor of the `Car` class with `new` keyword, there is a tight coupling between the `Car` class and the `Engine` class.

### And this is a Problem. <br>
Actually there are many types of Engine

Like a Flat Engine
````typescript
export class FlatEngine {}
````
or an Inline Engine
````typescript
export class InlineEngine {}
````

The problem here is that if a `Car` class requires a specific type of `Engine` it can't have one.  
This `Car` can only have a generic `Engine` because of the tight coupling.
````typescript
export class Car {
    engine: Engine;
    
    constructor() {
        this.engine = new Engine();
    }
}
````

This problem can be resolved by making both the class loosely coupled with each other.
For that, first we will turn our `Engine` class to an interface like this
```typescript
interface class Engine {}
```
and let our `FlatEngine` and `InlineEngine` implement it.
```typescript
export class FlatEngine implements Engine {}
```
```typescript
export class InlineEngine implements Engine {}
```

With that our `Car` class will look like this
```typescript
export class Car {
    constructor(private engine: Engine) {}
}
```
The responsibility of object creation of `Engine` is no more with the `Car` class. And the dependency will be directly injected through the constructor of the `Car` class.

The Car Factory can now have `Car` with different `Engine` types
```typescript
class CarFactory {
    flatEngine: Engine = new FlatEngine();
    porsche911: Car = new Car(this.flatEngine);
    
    inlineEngine: Engine = new InlineEngine();
    bmwM88: Car = new Car(this.inlineEngine);
}
```
That was just a basic example of dependency injection.

Now let's get back to Angular Provider.
# How to use Angular Providers?
We register the services participating in the dependency injections in the Providers metadata. There are two ways by which we can do it.

1. Register directly in the Providers array of `@NgModule` or `@Component` or in `@Directive`.
2. Use the providedIn of the `@Injectable` decorator.

For this particular blog we will go with the first option.

# Configuring the Angular Provider

To Provide an instance of the dependency, we need to register it in the Providers metadata.
```typescript
 providers: [CarService]
```
The above is an actual shorthand notation for the following syntax:
```typescript
 providers: [{ provide: CarService, useClass: CarService }]
```

As you can see in the above example, the object has 2 properties. They are **provide** and **provider**.

# 1. Provide
The first property is Provide holds the Token or DI Token
The Injector uses the token to locate the provider in the Providers array
{{< figure src="/images/2022/08/provide.png" >}}

## Type Token
Here the type being injected is used as the token.
For Example, we would like to inject the instance of the `CarService`, we will use the `CarService` as the token as shown below
```typescript
 providers: [{ provide: CarService, useClass: CarService }]
```

The `CarService` is then injected to the component by using the following code.
```typescript
export class CarComponent {
    constructor(private carService: CarService) { }
}
 ```

## String Token
We can use a string literal to register the dependency. This is useful in scenarios where the dependency is a value or object etc., which is not represented by a class.
````typescript
{ provide: 'CAR_SERVICE', useClass: CarService },
{ provide: 'API_URL', useValue: 'https://randomcar.com/api' }
````

It is then injected using the `@Inject` in the constructor of the service/component.
```typescript
constructor(
    @Inject('CAR_SERVICE') private carService: CarService,
    @Inject('API_URL') private apiURL: string
) {}
```

## Injection Token
The Angular provides `InjectionToken` class to ensure that the Unique tokens are created.
The Injection Token is created by creating a new instance of the `InjectionToken` class.
````typescript
  export const API_URL = new InjectionToken<string>('api.url');
````
Register the token in the providers array.
````typescript
   providers: [{ provide: API_URL, useValue: 'https://randomcar.com/api' }]
````
It is then injected using the `@Inject` in the constructor of the service/component.
````typescript
  constructor(@Inject(API_URL) private apiURL: string) {}
````

# 2. Provider
The second property is the Provider definition object.
It tells Angular how to create the instance of the dependency.
The Angular can create the instance of the dependency in four different ways.
{{< figure src="/images/2022/08/provider.png" >}}

## Class Provider
`useClass` is used when you want to provide an instance of the provided class.
It expects us to provide a type.  The Injector creates a new instance from the type and injects it. It is like calling the new operator and returning instance. If the type requires any constructor parameters, the injector will resolve that also.
````typescript
  { provide: CarService, useClass: CarService }
````

We can also switch dependencies easily. You can provide a mock class for Testing purposes as shown below.
````typescript
  { provide: CarService, useClass: MockCarService }
````

## Value Provider
`UseValue` is used when you want to provide a simple value.
The Angular will inject whatever provided in the useValue as it is.
It is useful in scenarios like, where you want to provide API URL, application-wide configuration etc
````typescript
export const APP_CONFIG = Object.freeze({
  devUrl: 'https://dev.randomcar.com/api',
  IsDevelopmentMode: true
});
````
And we can use the APP_CONFIG as provided in the providers array.
```typescript
  providers: [{ provide: 'API_CONFIG', useValue: APP_CONFIG }]
```

## Factory Provider
`useFactory` expects us to provide a function.
It invokes the function and injects the returned value. We can also add optional arguments to the factory function using the deps array. The deps array specifies how to inject the arguments.
We usually use the useFactory when we want to return an object based on a certain condition.
```typescript
{
   provide: CarService,
   useFactory: (config: any, loggerService: LoggerService) => return config.IsDevelopmentMode 
        ? new MockCarService(loggerService) 
        : new CarService(),
   deps: [APP_CONFIG, LoggerService]
}
```

## Aliased Provider

The `useExisting` provider key lets you map one token to another. 
In effect, the first token is an alias for the service associated with the second token, creating two ways to access the same service object.

```typescript
  { provide: CarService, useExisting: 'MOCK_CAR_SERVICE' },
  { provide: 'MOCK_CAR_SERVICE', useClass: MockCarService },
```