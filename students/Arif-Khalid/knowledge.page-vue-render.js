
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In order to work on CATcher and WATcher, I had to learn how to use Angular. With a background in react, it was a difficult transition due to the added checks and strict nature of Angular."),_c('br'),_v("\nBelow are a few of my learning points:")]),_v(" "),_c('ul',[_c('li',[_v("Components:\n"),_c('ul',[_c('li',[_v("Each component consists of 4 different files, each of them critical to know. Logic can be contained in either typescript of html component files and you initialise other components through the HTML rather than the typescript file")]),_v(" "),_c('li',[_v("Components also have a module file which is where its dependencies are stated, i.e., the other components, services, modules it depends on")])])]),_v(" "),_c('li',[_v("Services:\n"),_c('ul',[_c('li',[_v("Each service is like a component but without anything to display. They perform functions that could be contained within components but are extracted out to increase modularity and reusability")]),_v(" "),_c('li',[_v("Like components, services can depend on other services and are often injected into components as dependencies")])])]),_v(" "),_c('li',[_v("Modules:\n"),_c('ul',[_c('li',[_v("Modules are containers for a dedicated group of files consisting of components, services or other modules")]),_v(" "),_c('li',[_v("Each module conventionally contains all the code pertaining to a certain feature")]),_v(" "),_c('li',[_v("The root module thus contains all code in the code base, child modules under the root module contain more feature-specific code in a hierarchial structure")]),_v(" "),_c('li',[_v("Modules are critical to understand in order to understand the code base and create new features")])])]),_v(" "),_c('li',[_v("RxJS\n"),_c('ul',[_c('li',[_v("While not exactly part of angular, it is important in learning angular as they are often if not always used in tandem")]),_v(" "),_c('li',[_v("RxJS is a library that allows reactive programming, i.e., the ability to subscribe to changes instead of polling for a change")]),_v(" "),_c('li',[_v("This makes it easier to compose asynchronous and cleaner, more optimized code using observer pattern")]),_v(" "),_c('li',[_v("Observers are a very useful tool that allows me to react to changes by subscribing to an event. This contributes to cleaner, more optimised and reusable code.")]),_v(" "),_c('li',[_v("Pipes allow you to consevutively call functions on the prior function's output, similar to function chaining. This allows us to have cleaner and reusable and more understandable code since you don't need to call functions separately and you can create functions out of a chain of other functions easily.")]),_v(" "),_c('li',[_v("Not to be confused with angular pipes which run via the \"|\" symbol in the html file, allowing you to transform data before it is displayed to the user.")])])])]),_v(" "),_c('p',[_v("I learned Angular through various Youtube tutorials, Udemy tutorials, reading the documentation and trying out different things through personal test projects venturing into Angular.")]),_v(" "),_c('ul',[_c('li',[_v("Youtube taught me basic fundamentals of Angular.")]),_v(" "),_c('li',[_v("Udemy taught me more in depth and guided me through small personal projects.")]),_v(" "),_c('li',[_v("The documentation gave me deeper understanding and insight into details not covered in tutorials")])]),_v(" "),_c('h3',{attrs:{"id":"typescript"}},[_v("TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular uses TypeScript, so I needed to learn TypeScript. I had only a background in JavaScript while working with React and learning TypeScript had its own difficulties.\nBelow are a few of my learning points:")]),_v(" "),_c('ul',[_c('li',[_v("What and Why TypeScript:\n"),_c('ul',[_c('li',[_v("TypeScript acts as a wrapper over JavaScript, compiling into JavaScript code behind the scenes when you build your project")]),_v(" "),_c('li',[_v("The reason people use TypeScript is because of the increased strictness where things have to be statically typed. This reduces the occurences of bugs and makes bugs easier to find when they do occur")]),_v(" "),_c('li',[_v("This makes TypeScript an extremely useful language to pick up and is used widely in industry")])])]),_v(" "),_c('li',[_v("Types:\n"),_c('ul',[_c('li',[_v("As in the name, typescript has types and almost everything is required to by statically typed")]),_v(" "),_c('li',[_v("The \"any\" type bypassed this requirement but is generally regarded as a bad practice as you have made TypeScript into JavaScript")]),_v(" "),_c('li',[_v("You can define your own types and use those types, similar to a typedef in other languages. This is often how objects are passed in TypeScript")])])])]),_v(" "),_c('p',[_v("I learned TypeScript through Youtube tutorials")]),_v(" "),_c('ul',[_c('li',[_v("Youtube taught me the fundamentals as well as understanding the why and underlying implementation of typescript")])]),_v(" "),_c('h3',{attrs:{"id":"continuous-integration-continuous-deployment-ci-cd"}},[_v("Continuous Integration/Continuous Deployment (CI/CD)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#continuous-integration-continuous-deployment-ci-cd","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As an area I have litte experience in, I wanted to dive into the CI/CD pipeline of CATcher and WATcher, gain an understanding of how it works and contribute to make it better.\nBelow are a few of my learning points:")]),_v(" "),_c('ul',[_c('li',[_v("Automated testing\n"),_c('ul',[_c('li',[_v("With large projects like CATcher and WATcher, there are many areas that can and unavoidably will go wrong with many contributors editing different parts of the code base")]),_v(" "),_c('li',[_v("Manual testing is very time consuming when there are so many features to test, any one of which could have been broken by any changes to the code")]),_v(" "),_c('li',[_v("Human error might also cause us to miss certain bugs as we simply did not test for them")]),_v(" "),_c('li',[_v("Automated testing allows for pre-written tests that perform these checks quickly on a headless browser when making any changes, greatly reducing the occurence of uncaught bugs introduced")]),_v(" "),_c('li',[_v("Test case design must be comprehensive in positive and negative cases without testing every specific possible input, instead grouping inputs such as all invalid types given into one test case")])])]),_v(" "),_c('li',[_v("Continuous deployment\n"),_c('ul',[_c('li',[_v("With mission-critical projects like CATcher, it is imperative to have automated deployment")]),_v(" "),_c('li',[_v("One reason is to maintain stability of the deployment, completely negating human errors such as forgetting any one step in deployment. The deployment made is done the same everytime through an automated process")]),_v(" "),_c('li',[_v("Another reason is to speed up development as developers will not need to go through the manual deployment on every release")])])]),_v(" "),_c('li',[_v("Github Actions\n"),_c('ul',[_c('li',[_v("Github actions is a very useful CI/CD tool when the code is already hosted on github")]),_v(" "),_c('li',[_v("Compared to alternatives, it is much simpler to set up as it is one click away for every github repo, create a workflow yml file and thats it")]),_v(" "),_c('li',[_v("There are many pre-defined actions such as actions/checkout that you can use to simplify your dev-ops. In this case you don't need to write your own code to checkout your repository")])])]),_v(" "),_c('li',[_v("Angular deployment\n"),_c('ul',[_c('li',[_v("Angular has a package that allows you to build directly into your github pages")]),_v(" "),_c('li',[_v("This simplifies the process further since you simply call this command through the github actions for an immediate deployment")])])])]),_v(" "),_c('p',[_v("I learned CI/CD through inspecting the code base, trying out different workflows in my own repos and youtube tutorials")]),_v(" "),_c('ul',[_c('li',[_v("The code base gave me a guideline as to the proper way and usage of workflows, along with the proper syntax of creating a workflow")]),_v(" "),_c('li',[_v("Youtube gave me broader knowledge into creating my own workflows not specific to the CATcher project")]),_v(" "),_c('li',[_v("Trying out creating my own workflows and contributing to WATcher workflows solidified my understanding and gave me confidence in what I learned")])]),_v(" "),_c('h3',{attrs:{"id":"code-quality"}},[_v("Code Quality"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#code-quality","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Code quality is always important but is especially so when there are so many people working on the same project. Since large portions of WATcher was copied from CATcher, WATcher was made overtly large with a great number of redundant code. It was very poor code quality and the importance of code quality was made clear.")]),_v(" "),_c('ul',[_c('li',[_v("Code Cleanliness\n"),_c('ul',[_c('li',[_v("Redundant code clutters the code base, making it especially hard to understand certain functionality since you have to sift through so much to find what you are looking for")]),_v(" "),_c('li',[_v("As a new developer, it created an unecessarily difficult experience getting a grasp of the code base")]),_v(" "),_c('li',[_v("Over reliance on comments also clutters the code base when code should be self-explanatory")]),_v(" "),_c('li',[_v("Over three levels of indentation should be avoided, at which point the code is made very hard to understand and inner indents should be refactored into separate functions")])])]),_v(" "),_c('li',[_v("Code simplicity (KISS)\n"),_c('ul',[_c('li',[_v("There are many ways to do the same thing and it is always best to Keep It Simple")]),_v(" "),_c('li',[_v("Always use the simplest way to come to the same outcome, even if they use unecessary variables")]),_v(" "),_c('li',[_v("Variables and functions should be aptly named so they are understood readily such as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filteredData")]),_v(" variable for storing data after it has been filtered")]),_v(" "),_c('li',[_v("Since code is read more than it is written, keeping it simple allows future developers, even yourself to understand the purpose and reason behind any piece of code")])])]),_v(" "),_c('li',[_v("Documentation\n"),_c('ul',[_c('li',[_v("Documentation is important to help others understand parts of the code that are not immediately apparent")]),_v(" "),_c('li',[_v("However, it is important to not rely too heavily on documentation and wherever possible, code you write should be self-explanatory")]),_v(" "),_c('li',[_v("Instead of writing a one-liner that does everything, split logically linked portions into separate parts, using different functions or storing outputs in appropriately named variables")])])]),_v(" "),_c('li',[_v("Following coding style\n"),_c('ul',[_c('li',[_v("Assuming you are not the originator of the project, you need to follow the coding style of the project as well")]),_v(" "),_c('li',[_v("Since there are always multiple ways of doing the same thing, it is often arguable which way is the best. When joining an already established project, it is critical to follow the coding style of your predecessors")]),_v(" "),_c('li',[_v("An example would be returning a complete object instead of a part of an object and appending to a newly created object in the parent function. Both accomplish the same thing and arguably are equally understandable")])])])]),_v(" "),_c('p',[_v("I learned about code quality through analysing the responses of seniors to my own pull requests as well as other's pull requests, supplementing my knowledge by reading articles on code quality both generally and specific to web development")]),_v(" "),_c('ul',[_c('li',[_v("Inspection of pull requests gave me understanding of what is good quality code and what is considered bad along with the reasoning behind those decisions")]),_v(" "),_c('li',[_v("Articles online provided me with more general guidelines pertaining to code quality in large projects, helping fill in the gaps that I didnt encounter in PR reviews")])]),_v(" "),_c('h3',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Testing is another important part of any project as it reduces the occurrence of major errors and bugs throughout development. With little prior experience in testing, I sought to learn more about it and apply it in WATcher.")]),_v(" "),_c('ul',[_c('li',[_v("Jasmine\n"),_c('ul',[_c('li',[_v("A testing framework for javascript")]),_v(" "),_c('li',[_v("Clean and intuitive syntax")]),_v(" "),_c('li',[_v("Suite of functionality developed over many years")]),_v(" "),_c('li',[_v("I learned Jasmine through looking through test cases in CATcher and WATcher, along with reading its official documentation\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("describe(string, function)")]),_v(" houses related specs labeled by string and defined as function")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("it(string, function)")]),_v(" defines a spec labeled by string and defined as function")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("expect(any).toBeFalse")]),_v(" defines an expectation of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("any")]),_v(". There are a large number of matchers for any possible comparison")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("beforeEach(function)")]),_v(" defines a function to be called before each of the specs in this describe block")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("createSpyObj(string, string[])")]),_v(" creates a spy object that acts as a stub for classes that are depended on by what is being tested. Spies can track calls to it and all arguments")])])])])]),_v(" "),_c('li',[_v("Test case design\n"),_c('ul',[_c('li',[_v("Boundary Value Analysis and equivalence partitioning\n"),_c('ul',[_c('li',[_v("Boundary value analysis is a technique where tests are designed to include representatives of boundary values in a range")]),_v(" "),_c('li',[_v("Equivalence partitioning is a technique where input data is partitioned into units of equivalent data for which tests can be written")]),_v(" "),_c('li',[_v("These techniques allow for a smaller number of tests to be written, for essentially the same amount of coverage\n"),_c('ul',[_c('li',[_v("This is because inputs which would fail/pass for the same reason, such as being an input of an invalid type, are grouped as a single or only a few test cases.")]),_v(" "),_c('li',[_v("The alternative would be to create tests for each input type in this example, straining developer resources for not much benefit")])])])])]),_v(" "),_c('li',[_v("Testing for behaviour\n"),_c('ul',[_c('li',[_v("A common mistake is to test for implementation rather than behaviour")]),_v(" "),_c('li',[_v("This would result in failed test cases when implementation changes even though the resulting behaviour, what the user would experience, remains the same")]),_v(" "),_c('li',[_v("Test cases should test for what the result is versus what the implementation is")]),_v(" "),_c('li',[_v("An example would be testing whether a variable changes in component A correctly vs testing what other components receive from component A after the change")]),_v(" "),_c('li',[_v("A developer might edit the implementation of component A so the variable no longer changes, however the accurate behaviour of emission to other components remains the same and the test cases should not fail")])])]),_v(" "),_c('li',[_v("Testing coverage\n"),_c('ul',[_c('li',[_v("Test coverage is how much of the code has actually been ran through during testing\n"),_c('ul',[_c('li',[_v("Function/method coverage : based on functions executed e.g., testing executed 90 out of 100 functions")]),_v(" "),_c('li',[_v("Statement coverage : based on the number of lines of code executed e.g., testing executed 23k out of 25k LOC")]),_v(" "),_c('li',[_v("Decision/branch coverage : based on the decision points exercised e.g., an if statement evaluated to both true and false with separate test cases during testing is considered 'covered'")]),_v(" "),_c('li',[_v("Condition coverage : based on the boolean sub-expressions, each evaluated to both true and false with different test cases")])])]),_v(" "),_c('li',[_v("A good future implementation would be to implement code coverage as a github action report when making pull requests to main")]),_v(" "),_c('li',[_v("At the very least, all public functions of a class should be uniquely tested in order to verify behaviour seen by other components\nI learned about testing web applications through Nereus, reading Jasmine documentation, articles and youtube videos about testing and the "),_c('a',{attrs:{"href":"https://nus-cs2113-ay2324s2.github.io/website/index.html"}},[_v("CS2113 website")])])])])])]),_v(" "),_c('li',[_v("Nereus imparted knowledge of testing which helped me understand the core fundamentals, allowing me to more quickly pick up the technique as I learnt, especially the test case implementation")]),_v(" "),_c('li',[_v("The Jasmine documentation gave me confidence in creating my own test cases for unique behaviour such as changing routes in testing")]),_v(" "),_c('li',[_v("Youtube videos, articles and the CS2113 website helped me to understand and implement test case design techniques to create comprehensive and well designed test cases")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sat, 27 Apr 2024, 7:30:09 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  