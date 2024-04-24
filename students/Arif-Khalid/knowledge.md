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

### Continuous Integration/Continuous Deployment (CI/CD)
As an area I have litte experience in, I wanted to dive into the CI/CD pipeline of CATcher and WATcher, gain an understanding of how it works and contribute to make it better.
Below are a few of my learning points:
* Automated testing
  * With large projects like CATcher and WATcher, there are many areas that can and unavoidably will go wrong with many contributors editing different parts of the code base
  * Manual testing is very time consuming when there are so many features to test, any one of which could have been broken by any changes to the code
  * Human error might also cause us to miss certain bugs as we simply did not test for them
  * Automated testing allows for pre-written tests that perform these checks quickly on a headless browser when making any changes, greatly reducing the occurence of uncaught bugs introduced
  * Test case design must be comprehensive in positive and negative cases without testing every specific possible input, instead grouping inputs such as all invalid types given into one test case
* Continuous deployment
  * With mission-critical projects like CATcher, it is imperative to have automated deployment
  * One reason is to maintain stability of the deployment, completely negating human errors such as forgetting any one step in deployment. The deployment made is done the same everytime through an automated process
  * Another reason is to speed up development as developers will not need to go through the manual deployment on every release
* Github Actions
  * Github actions is a very useful CI/CD tool when the code is already hosted on github
  * Compared to alternatives, it is much simpler to set up as it is one click away for every github repo, create a workflow yml file and thats it
  * There are many pre-defined actions such as actions/checkout that you can use to simplify your dev-ops. In this case you don't need to write your own code to checkout your repository
* Angular deployment
  * Angular has a package that allows you to build directly into your github pages
  * This simplifies the process further since you simply call this command through the github actions for an immediate deployment

I learned CI/CD through inspecting the code base, trying out different workflows in my own repos and youtube tutorials
* The code base gave me a guideline as to the proper way and usage of workflows, along with the proper syntax of creating a workflow
* Youtube gave me broader knowledge into creating my own workflows not specific to the CATcher project
* Trying out creating my own workflows and contributing to WATcher workflows solidified my understanding and gave me confidence in what I learned

### Code Quality
Code quality is always important but is especially so when there are so many people working on the same project. Since large portions of WATcher was copied from CATcher, WATcher was made overtly large with a great number of redundant code. It was very poor code quality and the importance of code quality was made clear.
* Code Cleanliness
  * Redundant code clutters the code base, making it especially hard to understand certain functionality since you have to sift through so much to find what you are looking for
  * As a new developer, it created an unecessarily difficult experience getting a grasp of the code base
  * Over reliance on comments also clutters the code base when code should be self-explanatory
  * Over three levels of indentation should be avoided, at which point the code is made very hard to understand and inner indents should be refactored into separate functions
* Code simplicity (KISS)
  * There are many ways to do the same thing and it is always best to Keep It Simple
  * Always use the simplest way to come to the same outcome, even if they use unecessary variables
  * Variables and functions should be aptly named so they are understood readily such as a ``filteredData`` variable for storing data after it has been filtered
  * Since code is read more than it is written, keeping it simple allows future developers, even yourself to understand the purpose and reason behind any piece of code
* Documentation
  * Documentation is important to help others understand parts of the code that are not immediately apparent
  * However, it is important to not rely too heavily on documentation and wherever possible, code you write should be self-explanatory
  * Instead of writing a one-liner that does everything, split logically linked portions into separate parts, using different functions or storing outputs in appropriately named variables
* Following coding style
  * Assuming you are not the originator of the project, you need to follow the coding style of the project as well
  * Since there are always multiple ways of doing the same thing, it is often arguable which way is the best. When joining an already established project, it is critical to follow the coding style of your predecessors
  * An example would be returning a complete object instead of a part of an object and appending to a newly created object in the parent function. Both accomplish the same thing and arguably are equally understandable

I learned about code quality through analysing the responses of seniors to my own pull requests as well as other's pull requests, supplementing my knowledge by reading articles on code quality both generally and specific to web development
* Inspection of pull requests gave me understanding of what is good quality code and what is considered bad along with the reasoning behind those decisions
* Articles online provided me with more general guidelines pertaining to code quality in large projects, helping fill in the gaps that I didnt encounter in PR reviews

### Testing
Testing is another important part of any project as it reduces the occurrence of major errors and bugs throughout development. With little prior experience in testing, I sought to learn more about it and apply it in WATcher.
* Jasmine
  * A testing framework for javascript
  * Clean and intuitive syntax
  * Suite of functionality developed over many years
  * I learned Jasmine through looking through test cases in CATcher and WATcher, along with reading its official documentation
    * ``describe(string, function)`` houses related specs labeled by string and defined as function
    * ``it(string, function)`` defines a spec labeled by string and defined as function
    * ``expect(any).toBeFalse`` defines an expectation of ``any``. There are a large number of matchers for any possible comparison
    * ``beforeEach(function)`` defines a function to be called before each of the specs in this describe block
    * ``createSpyObj(string, string[])`` creates a spy object that acts as a stub for classes that are depended on by what is being tested. Spies can track calls to it and all arguments
* Test case design
  * Boundary Value Analysis and equivalence partitioning
    * Boundary value analysis is a technique where tests are designed to include representatives of boundary values in a range
    * Equivalence partitioning is a technique where input data is partitioned into units of equivalent data for which tests can be written
    * These techniques allow for a smaller number of tests to be written, for essentially the same amount of coverage
      * This is because inputs which would fail/pass for the same reason, such as being an input of an invalid type, are grouped as a single or only a few test cases.
      * The alternative would be to create tests for each input type in this example, straining developer resources for not much benefit
  * Testing for behaviour
    * A common mistake is to test for implementation rather than behaviour
    * This would result in failed test cases when implementation changes even though the resulting behaviour, what the user would experience, remains the same
    * Test cases should test for what the result is versus what the implementation is
    * An example would be testing whether a variable changes in component A correctly vs testing what other components receive from component A after the change
    * A developer might edit the implementation of component A so the variable no longer changes, however the accurate behaviour of emission to other components remains the same and the test cases should not fail
  * Testing coverage
    * Test coverage is how much of the code has actually been ran through during testing
      * Function/method coverage : based on functions executed e.g., testing executed 90 out of 100 functions
      * Statement coverage : based on the number of lines of code executed e.g., testing executed 23k out of 25k LOC
      * Decision/branch coverage : based on the decision points exercised e.g., an if statement evaluated to both true and false with separate test cases during testing is considered 'covered'
      * Condition coverage : based on the boolean sub-expressions, each evaluated to both true and false with different test cases
    * A good future implementation would be to implement code coverage as a github action report when making pull requests to main
    * At the very least, all public functions of a class should be uniquely tested in order to verify behaviour seen by other components
I learned about testing web applications through Nereus, reading Jasmine documentation, articles and youtube videos about testing and the [CS2113 website](https://nus-cs2113-ay2324s2.github.io/website/index.html)
* Nereus imparted knowledge of testing which helped me understand the core fundamentals, allowing me to more quickly pick up the technique as I learnt, especially the test case implementation
* The Jasmine documentation gave me confidence in creating my own test cases for unique behaviour such as changing routes in testing
* Youtube videos, articles and the CS2113 website helped me to understand and implement test case design techniques to create comprehensive and well designed test cases
