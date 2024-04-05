
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In order to work on CATcher and WATcher, I had to learn how to use Angular. With a background in react, it was a difficult transition due to the added checks and strict nature of Angular."),_c('br'),_v("\nBelow are a few of my learning points:")]),_v(" "),_c('ul',[_c('li',[_v("Components:\n"),_c('ul',[_c('li',[_v("Each component consists of 4 different files, each of them critical to know. Logic can be contained in either typescript of html component files and you initialise other components through the HTML rather than the typescript file")]),_v(" "),_c('li',[_v("Components also have a module file which is where its dependencies are stated, i.e., the other components, services, modules it depends on")])])]),_v(" "),_c('li',[_v("Services:\n"),_c('ul',[_c('li',[_v("Each service is like a component but without anything to display. They perform functions that could be contained within components but are extracted out to increase modularity and reusability")]),_v(" "),_c('li',[_v("Like components, services can depend on other services and are often injected into components as dependencies")])])]),_v(" "),_c('li',[_v("Modules:\n"),_c('ul',[_c('li',[_v("Modules are containers for a dedicated group of files consisting of components, services or other modules")]),_v(" "),_c('li',[_v("Each module conventionally contains all the code pertaining to a certain feature")]),_v(" "),_c('li',[_v("The root module thus contains all code in the code base, child modules under the root module contain more feature-specific code in a hierarchial structure")]),_v(" "),_c('li',[_v("Modules are critical to understand in order to understand the code base and create new features")])])]),_v(" "),_c('li',[_v("RxJS\n"),_c('ul',[_c('li',[_v("While not exactly part of angular, it is important in learning angular as they are often if not always used in tandem")]),_v(" "),_c('li',[_v("RxJS is a library that allows reactive programming, i.e., the ability to subscribe to changes instead of polling for a change")]),_v(" "),_c('li',[_v("This makes it easier to compose asynchronous and cleaner, more optimized code using observer pattern")]),_v(" "),_c('li',[_v("Observers are a very useful tool that allows me to react to changes by subscribing to an event. This contributes to cleaner, more optimised and reusable code.")]),_v(" "),_c('li',[_v("Pipes allow you to consevutively call functions on the prior function's output, similar to function chaining. This allows us to have cleaner and reusable and more understandable code since you don't need to call functions separately and you can create functions out of a chain of other functions easily.")]),_v(" "),_c('li',[_v("Not to be confused with angular pipes which run via the \"|\" symbol in the html file, allowing you to transform data before it is displayed to the user.")])])])]),_v(" "),_c('p',[_v("I learned Angular through various Youtube tutorials, Udemy tutorials, reading the documentation and trying out different things through personal test projects venturing into Angular.")]),_v(" "),_c('ul',[_c('li',[_v("Youtube taught me basic fundamentals of Angular.")]),_v(" "),_c('li',[_v("Udemy taught me more in depth and guided me through small personal projects.")]),_v(" "),_c('li',[_v("The documentation gave me deeper understanding and insight into details not covered in tutorials")])]),_v(" "),_c('h3',{attrs:{"id":"typescript"}},[_v("TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular uses TypeScript, so I needed to learn TypeScript. I had only a background in JavaScript while working with React and learning TypeScript had its own difficulties.\nBelow are a few of my learning points:")]),_v(" "),_c('ul',[_c('li',[_v("What and Why TypeScript:\n"),_c('ul',[_c('li',[_v("TypeScript acts as a wrapper over JavaScript, compiling into JavaScript code behind the scenes when you build your project")]),_v(" "),_c('li',[_v("The reason people use TypeScript is because of the increased strictness where things have to be statically typed. This reduces the occurences of bugs and makes bugs easier to find when they do occur")]),_v(" "),_c('li',[_v("This makes TypeScript an extremely useful language to pick up and is used widely in industry")])])]),_v(" "),_c('li',[_v("Types:\n"),_c('ul',[_c('li',[_v("As in the name, typescript has types and almost everything is required to by statically typed")]),_v(" "),_c('li',[_v("The \"any\" type bypassed this requirement but is generally regarded as a bad practice as you have made TypeScript into JavaScript")]),_v(" "),_c('li',[_v("You can define your own types and use those types, similar to a typedef in other languages. This is often how objects are passed in TypeScript")])])])]),_v(" "),_c('p',[_v("I learned TypeScript through Youtube tutorials")]),_v(" "),_c('ul',[_c('li',[_v("Youtube taught me the fundamentals as well as understanding the why and underlying implementation of typescript")])]),_v(" "),_c('h3',{attrs:{"id":"continuous-integration-continuous-deployment-ci-cd"}},[_v("Continuous Integration/Continuous Deployment (CI/CD)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#continuous-integration-continuous-deployment-ci-cd","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As an area I have litte experience in, I wanted to dive into the CI/CD pipeline of CATcher and WATcher, gain an understanding of how it works and contribute to make it better.\nBelow are a few of my learning points:")]),_v(" "),_c('ul',[_c('li',[_v("Automated testing\n"),_c('ul',[_c('li',[_v("With large projects like CATcher and WATcher, there are many areas that can and unavoidably will go wrong with many contributors editing different parts of the code base")]),_v(" "),_c('li',[_v("Manual testing is very time consuming when there are so many features to test, any one of which could have been broken by any changes to the code")]),_v(" "),_c('li',[_v("Human error might also cause us to miss certain bugs as we simply did not test for them")]),_v(" "),_c('li',[_v("Automated testing allows for pre-written tests that perform these checks quickly on a headless browser when making any changes, greatly reducing the occurence of uncaught bugs introduced")]),_v(" "),_c('li',[_v("Test case design must be comprehensive in positive and negative cases without testing every specific possible input, instead grouping inputs such as all invalid types given into one test case")])])]),_v(" "),_c('li',[_v("Continuous deployment\n"),_c('ul',[_c('li',[_v("With mission-critical projects like CATcher, it is imperative to have automated deployment")]),_v(" "),_c('li',[_v("One reason is to maintain stability of the deployment, completely negating human errors such as forgetting any one step in deployment. The deployment made is done the same everytime through an automated process")]),_v(" "),_c('li',[_v("Another reason is to speed up development as developers will not need to go through the manual deployment on every release")])])]),_v(" "),_c('li',[_v("Github Actions\n"),_c('ul',[_c('li',[_v("Github actions is a very useful CI/CD tool when the code is already hosted on github")]),_v(" "),_c('li',[_v("Compared to alternatives, it is much simpler to set up as it is one click away for every github repo, create a workflow yml file and thats it")]),_v(" "),_c('li',[_v("There are many pre-defined actions such as actions/checkout that you can use to simplify your dev-ops. In this case you don't need to write your own code to checkout your repository")])])]),_v(" "),_c('li',[_v("Angular deployment\n"),_c('ul',[_c('li',[_v("Angular has a package that allows you to build directly into your github pages")]),_v(" "),_c('li',[_v("This simplifies the process further since you simply call this command through the github actions for an immediate deployment")])])])]),_v(" "),_c('p',[_v("I learned CI/CD through inspecting the code base, trying out different workflows in my own repos and youtube tutorials")]),_v(" "),_c('ul',[_c('li',[_v("The code base gave me a guideline as to the proper way and usage of workflows, along with the proper syntax of creating a workflow")]),_v(" "),_c('li',[_v("Youtube gave me broader knowledge into creating my own workflows not specific to the CATcher project")]),_v(" "),_c('li',[_v("Trying out creating my own workflows and contributing to WATcher workflows solidified my understanding and gave me confidence in what I learned")])]),_v(" "),_c('h3',{attrs:{"id":"code-quality"}},[_v("Code Quality"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#code-quality","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Code quality is always important but is especially so when there are so many people working on the same project. Since large portions of WATcher was copied from CATcher, WATcher was made overtly large with a great number of redundant code. It was very poor code quality and the importance of code quality was made clear.")]),_v(" "),_c('ul',[_c('li',[_v("Code Cleanliness\n"),_c('ul',[_c('li',[_v("Redundant code clutters the code base, making it especially hard to understand certain functionality since you have to sift through so much to find what you are looking for")]),_v(" "),_c('li',[_v("As a new developer, it created an unecessarily difficult experience getting a grasp of the code base")]),_v(" "),_c('li',[_v("Over reliance on comments also clutters the code base when code should be self-explanatory")]),_v(" "),_c('li',[_v("Over three levels of indentation should be avoided, at which point the code is made very hard to understand and inner indents should be refactored into separate functions")])])]),_v(" "),_c('li',[_v("Code simplicity (KISS)\n"),_c('ul',[_c('li',[_v("There are many ways to do the same thing and it is always best to Keep It Simple")]),_v(" "),_c('li',[_v("Always use the simplest way to come to the same outcome, even if they use unecessary variables")]),_v(" "),_c('li',[_v("Variables and functions should be aptly named so they are understood readily such as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filteredData")]),_v(" variable for storing data after it has been filtered")]),_v(" "),_c('li',[_v("Since code is read more than it is written, keeping it simple allows future developers, even yourself to understand the purpose and reason behind any piece of code")])])]),_v(" "),_c('li',[_v("Documentation\n"),_c('ul',[_c('li',[_v("Documentation is important to help others understand parts of the code that are not immediately apparent")]),_v(" "),_c('li',[_v("However, it is important to not rely too heavily on documentation and wherever possible, code you write should be self-explanatory")]),_v(" "),_c('li',[_v("Instead of writing a one-liner that does everything, split logically linked portions into separate parts, using different functions or storing outputs in appropriately named variables")])])]),_v(" "),_c('li',[_v("Following coding style\n"),_c('ul',[_c('li',[_v("Assuming you are not the originator of the project, you need to follow the coding style of the project as well")]),_v(" "),_c('li',[_v("Since there are always multiple ways of doing the same thing, it is often arguable which way is the best. When joining an already established project, it is critical to follow the coding style of your predecessors")]),_v(" "),_c('li',[_v("An example would be returning a complete object instead of a part of an object and appending to a newly created object in the parent function. Both accomplish the same thing and arguably are equally understandable")])])])]),_v(" "),_c('p',[_v("I learned about code quality through analysing the responses of seniors to my own pull requests as well as other's pull requests, supplementing my knowledge by reading articles on code quality both generally and specific to web development")]),_v(" "),_c('ul',[_c('li',[_v("Inspection of pull requests gave me understanding of what is good quality code and what is considered bad along with the reasoning behind those decisions")]),_v(" "),_c('li',[_v("Articles online provided me with more general guidelines pertaining to code quality in large projects, helping fill in the gaps that I didnt encounter in PR reviews")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 5 Apr 2024, 18:52:51 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  