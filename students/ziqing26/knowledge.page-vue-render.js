
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"data-migration"}},[_v("Data Migration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#data-migration","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Before data migration we need to make sure we are clear on the ERD and relationship mapping.")]),_v(" "),_c('li',[_v("To test scripts on data migration, we set up a staging Cloud SQL.")]),_v(" "),_c('li',[_v("Currently there is no way to persist data bundle in datastore. We are still figuring out a proper way to test it.")]),_v(" "),_c('li',[_v("Data validation after migration such as ensuring Foreign Keys are mapped correctly is important. We will explore more on that")])]),_v(" "),_c('h2',{attrs:{"id":"terraform"}},[_v("Terraform"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#terraform","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Saves a lot of time for deploying staging server. It will definitely save a lot of time if we have a shared staging server for testing. However TEAMMATEs might not be operating at a large enough scale to see the benefits.")])]),_v(" "),_c('h2',{attrs:{"id":"docker"}},[_v("Docker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#docker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. It is an isolated environment for code. This means that a container has no knowledge of the local operating system, or the local files.")]),_v(" "),_c('p',[_v("Container v.s. Virtual Machines:")]),_v(" "),_c('p',[_v("Containers virtualize the operating system instead of hardware, so they are more portable and lightweight. VM has a layer of hypervisor which allows multiple full OS running on the same machine.")]),_v(" "),_c('p',[_v("Container v.s. Microservices:")]),_v(" "),_c('p',[_v("The main difference between microservices and containers is that microservices are an architectural paradigm / design patterns, while containers are a means to implement that paradigm. Containers can host the individual microservices that form a microservices application.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://docs.docker.com/get-started/overview/"}},[_v("Docker Official Documentation")]),_v(" "),_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=8fi7uSYlOdc&t=1s"}},[_v("Containers From Scratch • Liz Rice • GOTO 2018")]),_v(" "),_c('a',{attrs:{"href":"https://docs.docker.com/engine/reference/builder/"}},[_v("DockerFile references")])]),_v(" "),_c('hr'),_v(" "),_c('h1',{attrs:{"id":"in-cs3281"}},[_v("In CS3281"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#in-cs3281","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h2',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular is a development platform built on TypeScript. There are three types of Angular directices in general:")]),_v(" "),_c('ol',[_c('li',[_v("Components: directives with a template.")]),_v(" "),_c('li',[_v("Attribute directives such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NgClass")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NgStyle")]),_v(": directives that change the appearance or behaviour of an element.")]),_v(" "),_c('li',[_v("Structural directives such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NgIf")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NgFor")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NgSwitch")]),_v(": directives that change the DOM layout by adding and removing DOM elements.")]),_v(" "),_c('li',[_v("Some less obvious built-in directives: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a, form, input, script, select, textarea")]),_v(".")])]),_v(" "),_c('p',[_v("There are two types of forms in Angular:")]),_v(" "),_c('ol',[_c('li',[_v("Reactive: Reusuable and synchronous data flow between the view and the data model.")]),_v(" "),_c('li',[_v("Template-driven: TEAMMATES generally uses this type of forms. It focuses on simple scenarios despite being not reusable.")])]),_v(" "),_c('p',[_v("Modules vs Directives vs Services:")]),_v(" "),_c('ol',[_c('li',[_v("Modules provide a way to namespace services, directives and filters. It helps avoid global variables.")]),_v(" "),_c('li',[_v("Services are singletons. BUIlt in services start with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("$")]),_v(". Dependency injection is required on the dependent.")]),_v(" "),_c('li',[_v("Directives allow componetized HTML.")])]),_v(" "),_c('p',[_v("Pipes encapsulates custom transformations and could be used in template expressions. We can chain pipes using a series of pipe operator "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("|")]),_v(" in templates.")]),_v(" "),_c('p',[_v("Binding:")]),_v(" "),_c('ol',[_c('li',[_v("Property binding: sets a specific elemtn property. (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[disabled]=\"isNotificationEditFormExpanded\"")]),_v(")")]),_v(" "),_c('li',[_v("Event binding: listens for an element change event. (e.g. `")]),_v(" "),_c('li',[_v("Two-way binding")]),_v(" "),_c('li',[_v("We can use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Input()")]),_v(" to receive data from parent and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Output()")]),_v(" to send data to parent.")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://angular.io/guide/developer-guide-overview"}},[_v("Angular Developer Guide Overview")]),_v("\n, "),_c('a',{attrs:{"href":"https://angular.io/tutorial"}},[_v("Tour of Heroes app and tutorial")])]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://developers.google.com/web/fundamentals/primers/service-workers/o"}},[_v("Introduction to Service Worker")]),_v(", "),_c('a',{attrs:{"href":"https://morioh.com/p/984afc91af1c"}},[_v("Service Worker and PWA in Angular")])]),_v(" "),_c('h2',{attrs:{"id":"d3-js"}},[_v("d3.js"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#d3-js","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("D3.js is a JavaScript library for manipulating documents based on data using HTML, SVG, and CSS. It is flexible due to its low-level approach that focuses on composable primitives such as shapes and scales rather than configurable charts.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://observablehq.com/@d3/learn-d3"}},[_v("d3 Tutorials")])]),_v(" "),_c('h2',{attrs:{"id":"oauth2-0"}},[_v("OAuth2.0"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#oauth2-0","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TEAMMATES staging and production server uses "),_c('a',{attrs:{"href":"https://datatracker.ietf.org/doc/html/rfc6749"}},[_v("OAuth 2.0")]),_v(" for authorization.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://developers.google.com/api-client-library/java/google-api-java-client/oauth2"}},[_v("Using OAuth 2.0 with the Google API Client Library for Java")])]),_v(" "),_c('h2',{attrs:{"id":"google-cloud-datastore-and-objectify"}},[_v("Google Cloud Datastore and Objectify"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#google-cloud-datastore-and-objectify","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TEAMMATES uses Google Cloud Datastore as database.\nThrough the onboarding task, I learnt about keys-only query which is a subtype of projection queries. Such queries allow querying for specific properties with lower latency and cost. From project of notification feature, I got the chance to apply my knowledge of key-only queries on GET API to fetch the ids of all notifications such that it saves cost for checking whether a notification is in the database or not.")]),_v(" "),_c('p',[_v("I also learnt about composite index which index multiple property value per index entity. It needs to be configured in an index configuration file.")]),_v(" "),_c('p',[_v("I learnt that eventually consistent queries generally run faster but may return stale results compared to strongly consistent queries which guarantee the most updated result but take longer to run. As we move from Datastore to Firestore in Datastore mode, it becomes strongly consistent instead of eventually consistent.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://cloud.google.com/datastore/docs/concepts/queries#projection_queries"}},[_v("Documentation Guides on Datastore Queries")])]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://cloud.google.com/appengine/docs/standard/java/datastore/data-consistency"}},[_v("Data Consistency in Datastore Queries")])]),_v(" "),_c('h2',{attrs:{"id":"backend"}},[_v("Backend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Backend workflow:")]),_v(" "),_c('ol',[_c('li',[_v("Request from users are forwarded to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("WebAPIServlet")]),_v(", which uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ActionFactory")]),_v(" to find the match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Action")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Action")]),_v(" has "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("checkAccessControl")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" generates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ActionResult")]),_v(" object, which will be sent back to user via "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("WebAPIServlet")]),_v(". For notifications, the format of output is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JsonResult")]),_v(".")])]),_v(" "),_c('p',[_v("Java keywords:")]),_v(" "),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("transient")]),_v(": Variable with this modifier will not be serialised. During serialisation, the original value is ignored and a default value of that variable would be saved. For example, if "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("typicalDataBundle")]),_v(" stores a transient variable of an object, when the object instance is fetched, that field will not be saved. This is useful to protect sensitive information.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("volatile")]),_v(": Instead of writing to cache, all writes to a volatile variable will be written back to main memory immediately. Therefore all reads will be read directly from main memory. This guarantees the visibility for other threads of writes to that variable.")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://en.wikibooks.org/wiki/Java_Programming/Keywords/transient"}},[_v("Java Programming/Keywords/transient")]),_v(" "),_c('a',{attrs:{"href":"https://jenkov.com/tutorials/java-concurrency/volatile.html"}},[_v("Java Volatile Keyword")])]),_v(" "),_c('h2',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Frontend - Jest:")]),_v(" "),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("jest.spyOn(object, methodName)")]),_v(" allows tracking calls to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("object[methodName]")]),_v(" and creating a mock function. The spied methods are useful for mock implementation of services in frontend testing.")]),_v(" "),_c('li',[_v("Snapshot testing renders a UI component, takes a snapshot and then compares it to a reference snapshot file stored together with the test. Snapshot testing is great when you want to validate the structure of something like a component or an object.")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://jestjs.io/docs/snapshot-testing"}},[_v("Jest Snapshot Testing documentation")])]),_v(" "),_c('p',[_v("Backend:")]),_v(" "),_c('ol',[_c('li',[_v("I learnt how to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("dataBundle")]),_v(" to create different instance of testing objects.")]),_v(" "),_c('li',[_v("Test Driven Development is helpful especially to catch bugs before fixing it.")])]),_v(" "),_c('p',[_v("E2E - Selenium, PageObject:")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Selenium provides extensions for website test automation. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Selenium WebDriver")]),_v(" APIs identifies Web elements. WebDriver provides bindings which support classes. It has two-way communication with broswer through a driver (eg. ChromeDriver). WebDriver passes commands to Broswer through driver, while receives information back via the same route.")])]),_v(" "),_c('li',[_c('p',[_v("Selenium helps identify web elements using locator strategies (e.g. class name, css selector, id, name or link text). "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("findElement")]),_v(" method will return the first element found in the context. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("findElements")]),_v(" returns all elements matching a locator.")])]),_v(" "),_c('li',[_c('p',[_v("Selenium helps interact with web elements. Basic commands are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("click")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("send keys")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("submit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("select")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("select")]),_v(" could be useful to selection an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<option>")]),_v(" in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<select>")]),_v(" element.")])]),_v(" "),_c('li',[_c('p',[_v("PageObject design pattern is useful to model UI as objects in test code, reducing duplicated code. The public method in page object represents serivices that the page offers with proper abstraction. They return page objects. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PageFactory")]),_v(" package is used in TEAMMATES.")])])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.selenium.dev/documentation/"}},[_v("Selenium Documenation")]),_v(" "),_c('a',{attrs:{"href":"https://martinfowler.com/bliki/PageObject.html"}},[_v("PageObject by Martin Fowler")])]),_v(" "),_c('h2',{attrs:{"id":"non-technical-knowledge"}},[_v("Non-technical knowledge"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-technical-knowledge","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("It is important to communicate openly and professionally so that everyone could sync up with each other.")]),_v(" "),_c('li',[_v("When releasing a feature, we might need to think of how to get the MVP done ASAP, so instead of working on everything simultaneously (i.e. both user facing features and admin features), sometimes it might be better to focus on getting one done thoroughly first.")]),_v(" "),_c('li',[_v("PR review requires strategy of concise and respectful communication. Writing reviewer friendly code is important to help them review more efficiently. It is also more preferred to make smaller PRs logically.")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Wed, 6 Mar 2024, 13:54:45 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  