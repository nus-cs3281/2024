### Angular
In order to work on CATcher and WATcher, I had to learn how to use Angular. With a background in react, it was a difficult transition due to the added checks and strict nature of Angular.  
Below are a few of my learning points:
* Components:
  * Each component consists of 4 different files, each of them critical to know. Logic can be contained in either typescript of html component files and you initialise other components through the HTML rather than the typescript file
  * Components also have a module file which is where its dependencies are stated, i.e., the other components, services, modules it depends on
* Services:
  * Each service is like a component but without anything to display. They perform functions that could be contained within components but are extracted out to increase modularity and reusability
  * Like components, services can depend on other services and are often injected into components as dependencies
* Modules:
  * Modules are containers for a dedicated group of files consisting of components, services or other modules
  * Each module conventionally contains all the code pertaining to a certain feature
  * The root module thus contains all code in the code base, child modules under the root module contain more feature-specific code in a hierarchial structure
  * Modules are critical to understand in order to understand the code base and create new features
* RxJS
  * While not exactly part of angular, it is important in learning angular as they are often if not always used in tandem
  * RxJS is a library that allows reactive programming, i.e., the ability to subscribe to changes instead of polling for a change
  * This makes it easier to compose asynchronous and cleaner, more optimized code using observer pattern
  * Observers are a very useful tool that allows me to react to changes by subscribing to an event. This contributes to cleaner, more optimised and reusable code.
  * Pipes allow you to consevutively call functions on the prior function's output, similar to function chaining. This allows us to have cleaner and reusable and more understandable code since you don't need to call functions separately and you can create functions out of a chain of other functions easily.
  * Not to be confused with angular pipes which run via the "|" symbol in the html file, allowing you to transform data before it is displayed to the user.

I learned Angular through various Youtube tutorials, Udemy tutorials, reading the documentation and trying out different things through personal test projects venturing into Angular.
* Youtube taught me basic fundamentals of Angular.
* Udemy taught me more in depth and guided me through small personal projects.
* The documentation gave me deeper understanding and insight into details not covered in tutorials


### TypeScript
Angular uses TypeScript, so I needed to learn TypeScript. I had only a background in JavaScript while working with React and learning TypeScript had its own difficulties.
Below are a few of my learning points:
* What and Why TypeScript:
  * TypeScript acts as a wrapper over JavaScript, compiling into JavaScript code behind the scenes when you build your project
  * The reason people use TypeScript is because of the increased strictness where things have to be statically typed. This reduces the occurences of bugs and makes bugs easier to find when they do occur
  * This makes TypeScript an extremely useful language to pick up and is used widely in industry
* Types:
  * As in the name, typescript has types and almost everything is required to by statically typed
  * The "any" type bypassed this requirement but is generally regarded as a bad practice as you have made TypeScript into JavaScript
  * You can define your own types and use those types, similar to a typedef in other languages. This is often how objects are passed in TypeScript

I learned TypeScript through Youtube tutorials
* Youtube taught me the fundamentals as well as understanding the why and underlying implementation of typescript

### Testing
Still in the process of learning. To be updated.
