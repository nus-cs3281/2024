
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Having had experience in mainly React and NodeJS projects earlier, I was overall more used to creating projects with Functional Components, rather than Class Components as with Angular. However, I realised that one of the key aspects of frontend frameworks, namely reactivity, was in fact the main drivers of development of such frameworks in the first place!")]),_v(" "),_c('p',[_v("In fact, even React were originally championing the idea of Class Components in order to isolate various web components into areas or responsibility, following rule number 1 of Software Engineering: Single Responsibility. However, while React is largely unopinionated in how you structure your code with regards to the coupling of business logic and HTML, Angular differs by dictating where and how you structure your components.")]),_v(" "),_c('p',[_v("Angular separates components into modules which comprise of 3 to 4 files:")]),_v(" "),_c('ul',[_c('li',[_v("Components, which are necessarily TypeScript classes which have the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Component")]),_v(" decorator;")]),_v(" "),_c('li',[_v("Templates, which dictate the HTML that is produced and rendered by the component;")]),_v(" "),_c('li',[_v("Styles, which dictate the type of styling to apply to the component.")]),_v(" "),_c('li',[_v("Module, which indicate the modules or services that are to be imported by the component. Interestingly,")])]),_v(" "),_c('p',[_v("On the other hand, React only dictates that class components should produce some sort of HTML using the render function. Even this is removed with the introduction of Functional Components that are simply functions which render and produce some HTML. React introduces hooks which are often used by developers to manage some state at the component level, using functions with side effects.")]),_v(" "),_c('p',[_v("Each method has its positives and negatives. Because of its opinionated nature, Angular makes it easy to standardize frontend coding standards and pattern across an entire enterprise, making it an apt choice to use as a tool for OSS development. On the other hand, React allows you to develop code more quickly, with more attention needed to be paid at the rendering lifecycles in order to let the Virtual DOM know when a particular component needs to be rendered again. On top of this, Angular wholely separates business logic from rendered HTML, whereas React takes the does not make this distinction.")]),_v(" "),_c('p',[_v("Another key point is how React and Angular differentiate in providing context (sharing or passing down state between different branches of the DOM tree). React has its own Context API that is used to share some sort of state between different components, whereas Angular does this by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("providers")]),_v(" declaration in the module folder, which results in a set of singletons that are shared by components that exist below it in the tree.")]),_v(" "),_c('h3',{attrs:{"id":"rxjs"}},[_v("RxJS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rxjs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I also picked up RxJS along the way, which was Angular's answer to creating reactive components. RxJS essentially deals with asynchronous pipe/filter, publisher/subscriber behavior which allows values to change and other components or functions to subscribe to these changes. This works considering Angular's Change Detection strategy which I will explain later.")]),_v(" "),_c('p',[_v("In comparison, React introduced and adopted hooks to encapsulate the behavior of having to rerender. React does this by operating on a Virtual DOM, and appropriately rerendering components and their children in patches when a change was detected. On the other hand, Angular does not have any abstraction to operate and rerender components whose state have changed. Instead, Angular uses a Change Detection Strategy which can be configured by the user (either onPush or Default). Angular Change Detection works by using Zone.js and activating after every async action performed. CD traversal starts at the root component (usually App) and works its way down the component tree updating the DOM as needed. What's happening under the hood is that browser events are registered into Zone.js - Angular's mechanism for orchestrating async events - which emits changes after initial template bindings are created.\n...")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Sat, 9 Mar 2024, 8:26:26 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  