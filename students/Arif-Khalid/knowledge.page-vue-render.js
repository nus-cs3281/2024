
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In order to work on CATcher and WATcher, I had to learn how to use Angular. With a background in react, it was a difficult transition due to the added checks and strict nature of Angular."),_c('br'),_v("\nBelow are a few of my learning points:")]),_v(" "),_c('ul',[_c('li',[_v("Components:\n"),_c('ul',[_c('li',[_v("Each component consists of 4 different files, each of them critical to know. Logic can be contained in either typescript of html component files and you initialise other components through the HTML rather than the typescript file")]),_v(" "),_c('li',[_v("Components also have a module file which is where its dependencies are stated, i.e., the other components, services, modules it depends on")])])]),_v(" "),_c('li',[_v("Services:\n"),_c('ul',[_c('li',[_v("Each service is like a component but without anything to display. They perform functions that could be contained within components but are extracted out to increase modularity and reusability")]),_v(" "),_c('li',[_v("Like components, services can depend on other services and are often injected into components as dependencies")])])]),_v(" "),_c('li',[_v("Modules:\n"),_c('ul',[_c('li',[_v("Modules are containers for a dedicated group of files consisting of components, services or other modules")]),_v(" "),_c('li',[_v("Each module conventionally contains all the code pertaining to a certain feature")]),_v(" "),_c('li',[_v("The root module thus contains all code in the code base, child modules under the root module contain more feature-specific code in a hierarchial structure")]),_v(" "),_c('li',[_v("Modules are critical to understand in order to understand the code base and create new features")])])]),_v(" "),_c('li',[_v("RxJS\n"),_c('ul',[_c('li',[_v("While not exactly part of angular, it is important in learning angular as they are often if not always used in tandem")]),_v(" "),_c('li',[_v("RxJS is a library that allows reactive programming, i.e., the ability to subscribe to changes instead of polling for a change")]),_v(" "),_c('li',[_v("This makes it easier to compose asynchronous and cleaner, more optimized code using observer pattern")]),_v(" "),_c('li',[_v("Observers are a very useful tool that allows me to react to changes by subscribing to an event. This contributes to cleaner, more optimised and reusable code.")]),_v(" "),_c('li',[_v("Pipes allow you to consevutively call functions on the prior function's output, similar to function chaining. This allows us to have cleaner and reusable and more understandable code since you don't need to call functions separately and you can create functions out of a chain of other functions easily.")]),_v(" "),_c('li',[_v("Not to be confused with angular pipes which run via the \"|\" symbol in the html file, allowing you to transform data before it is displayed to the user.")])])])]),_v(" "),_c('p',[_v("I learned Angular through various Youtube tutorials, Udemy tutorials, reading the documentation and trying out different things through personal test projects venturing into Angular.")]),_v(" "),_c('ul',[_c('li',[_v("Youtube taught me basic fundamentals of Angular.")]),_v(" "),_c('li',[_v("Udemy taught me more in depth and guided me through small personal projects.")]),_v(" "),_c('li',[_v("The documentation gave me deeper understanding and insight into details not covered in tutorials")])]),_v(" "),_c('h3',{attrs:{"id":"typescript"}},[_v("TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular uses TypeScript, so I needed to learn TypeScript. I had only a background in JavaScript while working with React and learning TypeScript had its own difficulties.\nBelow are a few of my learning points:")]),_v(" "),_c('ul',[_c('li',[_v("What and Why TypeScript:\n"),_c('ul',[_c('li',[_v("TypeScript acts as a wrapper over JavaScript, compiling into JavaScript code behind the scenes when you build your project")]),_v(" "),_c('li',[_v("The reason people use TypeScript is because of the increased strictness where things have to be statically typed. This reduces the occurences of bugs and makes bugs easier to find when they do occur")]),_v(" "),_c('li',[_v("This makes TypeScript an extremely useful language to pick up and is used widely in industry")])])]),_v(" "),_c('li',[_v("Types:\n"),_c('ul',[_c('li',[_v("As in the name, typescript has types and almost everything is required to by statically typed")]),_v(" "),_c('li',[_v("The \"any\" type bypassed this requirement but is generally regarded as a bad practice as you have made TypeScript into JavaScript")]),_v(" "),_c('li',[_v("You can define your own types and use those types, similar to a typedef in other languages. This is often how objects are passed in TypeScript")])])])]),_v(" "),_c('p',[_v("I learned TypeScript through Youtube tutorials")]),_v(" "),_c('ul',[_c('li',[_v("Youtube taught me the fundamentals as well as understanding the why and underlying implementation of typescript")])]),_v(" "),_c('h3',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Still in the process of learning. To be updated.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Fri, 1 Mar 2024, 14:38:18 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  