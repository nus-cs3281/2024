
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('p',[_v("Overall, I believe that because I was the least experienced (or at least I felt I was), I was also able to learn a whole lot from this module, especially front-end-wise.")]),_v(" "),_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While I used Angular to make "),_c('a',{attrs:{"href":"https://github.com/jayasting98/teammates/pull/1"}},[_v("a PR for TEAMMATES")]),_v(" before the semester started, I think I still had a lot more to learn about it, like front-end unit testing (especially this because that initial PR had no tests at that point in time) which I was able to learn when I eventually "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/11549"}},[_v("actually made that PR in the real TEAMMATES repo")]),_v(". Due to the bindings, I had to pay especially close attention to the component testing scenarios of a component with inputs and outputs and a component inside a test host.")]),_v(" "),_c('p',[_v("However, that was mostly component and snapshot testing. In order to also learn how to do testing for services, I also did "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/11629"}},[_v("testing for the feedback responses service")]),_v(". Though, I learned that testing services seemed largely similar to and yet much simpler than testing components.")]),_v(" "),_c('p',[_v("Beyond testing, I also learned how to create services themselves in "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES-2122S2-Team2/teammates/commit/3b008f4628cfa8f5f887b63ac95703e13bf69f75"}},[_v("this onboarding task commit")]),_v(" where I created the service to get feedback response statistics from the backend. I also learned how to "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES-2122S2-Team2/teammates/commit/0d4cc6e18a4f8ebef8e0dad88777def78fca403a"}},[_v("integrate")]),_v(" this service with the actual page component in order to actually obtain statistics to display using RxJS.")]),_v(" "),_c('p',[_v("As for components or their templates, I learned about more about how to use Angular's HTML templates in order to direct inputs to and outputs from a component through property binding and event binding respectively. I also learned about how the custom structural directive "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tmIsLoading")]),_v(" worked in "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/11628"}},[_v("this PR")]),_v(" as I was debugging when I initially wrongly caused the loading spinner to always display when I was in fact trying to display something else (eventually found out it was because I used the same boolean variable used to display the spinner, so don't be like me; check the usages of any variable you reuse). I also learned how to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<ng-container>")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<ng-template>")]),_v(" in that same PR, particularly with structural directives like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngIf")]),_v(".")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/testing-components-basics"}},[_v("Component Testing Basics")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/testing-components-scenarios"}},[_v("Component Testing Scenarios")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/testing-services"}},[_v("Service Testing")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/dependency-injection"}},[_v("Services (Dependency Injection)")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/property-binding"}},[_v("Property Binding")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/event-binding"}},[_v("Event Binding")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/structural-directives"}},[_v("Structural Directives")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/api/core/ng-container"}},[_v("ng-container")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/api/core/ng-template"}},[_v("ng-template")])])]),_v(" "),_c('h3',{attrs:{"id":"rxjs"}},[_v("RxJS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rxjs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In order to "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES-2122S2-Team2/teammates/commit/0d4cc6e18a4f8ebef8e0dad88777def78fca403a"}},[_v("integrate")]),_v(" Angular services that used asynchronous requests with components, I had to learn about Observables and Subscriptions from RxJS. I also had to learn other things from RxJS like the operators "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pipe")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("first")]),_v(" for the previously mentioned component testing I did due to the fact that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EventEmitter")]),_v(" objects used for event binding apparently functioned like RxJS "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable")]),_v(" objects.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://rxjs.dev/guide/observable"}},[_v("Observable")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://rxjs.dev/guide/subscription"}},[_v("Subscription")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://rxjs.dev/guide/operators"}},[_v("Operators")])])]),_v(" "),_c('h3',{attrs:{"id":"html-bootstrap-web-development-in-general"}},[_v("HTML/Bootstrap/Web development in general"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#html-bootstrap-web-development-in-general","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While I have taken some online web development courses in my free time before, I have actually never touched web development in a real project, only backend and mobile application development. Thus, doing some front-end work benefitted me a lot. For example, I was able to use my initially largely untested (and back then, slowly fading) knowledge of HTML and/or Bootstrap to some use such as in "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES-2122S2-Team2/teammates/commit/0d4cc6e18a4f8ebef8e0dad88777def78fca403a"}},[_v("my onboarding task commits")]),_v(" where I (re-)learned how to align everything nicely using the Bootstrap grid system (sorry if this is really basic) or in "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/11628"}},[_v("TEAMMATES PR #11628")]),_v(". Actually, after doing the front-end stuff in the onboarding task, I decided to go into the back-end for the deadline extensions feature so that I could learn TEAMMATES front to back, but perhaps I should have stayed in the front-end for the deadline extensions feature too to learn more. Still, virtually all my non-deadline extensions feature PRs were front-end related so maybe I was still able to learn as much as I could about the front-end.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://getbootstrap.com/docs/4.0/layout/grid/"}},[_v("Bootstrap grid system")])])]),_v(" "),_c('h3',{attrs:{"id":"jest-jasmine"}},[_v("Jest/Jasmine"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jest-jasmine","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learned how to use these to do front-end unit testing in Angular as previously mentioned, particularly things like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("expect")]),_v(" to check values are as expected, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("spyOn")]),_v(" to mock services, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("beforeEach")]),_v(" for common test setup code, and related attributes/functions ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toBeTruthy()")]),_v(", etc.).")]),_v(" "),_c('p',[_v("Also, I learned about snapshot testing. I initially had no idea this existed before (sorry if this is basic), and yet it seems to be pretty widely used (?) so learning of its existence seemed important.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://jestjs.io/docs/using-matchers"}},[_v("expect (Using Matchers)")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jasmine.github.io/api/edge/global.html#spyOn"}},[_v("spyOn")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jestjs.io/docs/setup-teardown"}},[_v("beforeEach (Setup and Teardown)")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jestjs.io/docs/snapshot-testing"}},[_v("Snapshot Testing")])])]),_v(" "),_c('h3',{attrs:{"id":"d3-js"}},[_v("D3.js"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#d3-js","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learned how to use D3 to display charts. I used this to create "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES-2122S2-Team2/teammates/commit/b09e174dcf9bca6aa0d775d70a8b721a38c4f2b3"}},[_v("the feedback responses statistics chart")]),_v(".")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://medium.com/weekly-webtips/build-a-simple-line-chart-with-d3-js-in-angular-ccd06e328bff"}},[_v("Build a simple line chart with D3.js in Angular")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://observablehq.com/@d3/line-chart"}},[_v("Official D3 Example - Line Chart")])])]),_v(" "),_c('h3',{attrs:{"id":"angular-material"}},[_v("Angular Material"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular-material","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I was looking into the issue "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/issues/8933"}},[_v("Instructor: Edit rubric question: reorder options using drag and drop #8933")]),_v("; I initially wanted to do a PR before my exams started but I unfortunately had no time to do so. Regardless, I was able to look into how I could possibly do it after my exams when I have time.")]),_v(" "),_c('p',[_v("I looked through the code base to see how drag and drop is implemented in other question types such as in multiple choice questions and I found out that we use the CDK Drag and Drop module from Angular Material. Angular Material allows Material Design components to be added into Angular. From what I understand, Material Design provides a sort of library or system with customizable front-end components to provide pre-made UI functionality. I have actually used it previously when I did my own side projects for Android, though this is my first time using the drag and drop component (or similar) because it is currently not available on Android. Besides, I have also never used Material Design within Angular at all before.")]),_v(" "),_c('p',[_v("The nice thing about Angular Material is it hides all the underlying code away and all that is minimally necessary to add is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cdkDrag")]),_v(" Angular directive. Unfortunately, from what I see, it seems that the drag and drop functionality provided by Angular Material does not work very well for table columns, which is the main focus of the issue. In general, it seems that tables are not well supported by Angular Material drag and drop, based on how tables are missing from the official documentation. Fortunately, there are workarounds like from "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/63493988/angular-drag-and-drop-intersection-e-g-rows-and-columns-in-a-table"}},[_v("this post from Stack Overflow")]),_v(" and "),_c('a',{attrs:{"href":"https://stackblitz.com/edit/angular-ivy-z3cpj2"}},[_v("its linked StackBlitz project")]),_v(" or from "),_c('a',{attrs:{"href":"https://howtomake.software/blog/draggable-table-with-angular-cdk"}},[_v("this blog post")]),_v(". However, these solutions do not produce satisfactory results, at least to me. When the columns are dragged along rows, the animations and \"previews\" do not show up for the rest of the rows, only for the row that was clicked on (such as the header). On the other hand, it does work well for dragging rows along columns. I suspect this has to do with how tables work in HTML, which is that they are essentially not really a single element but actually split into multiple table cell elements; this is unlike table rows which are single row elements. This means that Angular Material drag and drop probably works pretty well with rows, adding animations/previews. Unfortunately, this is not the case with columns. I believe that to enable this for table columns, it may be necessary after all to actually implement it from scratch after all, manually checking the location of the mouse and changing the columns appropriately to provide the animations/\"previews\" while dragging, or other similar implementations.")]),_v(" "),_c('p',[_v("Still, this was interesting and I did learn things. I also believe that with this, adding drag and drop for the table rows would be pretty simple, if necessary. I could also look through how drag and drop is currrently done in Angular for inspiration on how to do it for the columns, or maybe it actually "),_c('em',[_v("is")]),_v(" possible to do it without implementing the functionality myself.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://v12.material.angular.io/cdk/drag-drop/overview"}},[_v("Drag and Drop | Angular Material")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/questions/63493988/angular-drag-and-drop-intersection-e-g-rows-and-columns-in-a-table"}},[_v("Angular drag and drop intersection (e.g. rows and columns in a table) - Stack Overflow")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://howtomake.software/blog/draggable-table-with-angular-cdk"}},[_v("Draggable Table with Angular CDK")])])]),_v(" "),_c('h3',{attrs:{"id":"google-cloud-datastore-objectify"}},[_v("Google Cloud Datastore/Objectify"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#google-cloud-datastore-objectify","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have previously used Firebase Cloud Firestore, an NoSQL database. I remember how when I used Firestore, I also noticed Datastore, but I just told myself to look at it at another time, and it seems like the time was now. Overall, I found out more about Datastore and how it works, like how it is also a NoSQL database, and I found similarities between entities and documents, and between kinds and collections, which was how I was able to understand it quickly.")]),_v(" "),_c('p',[_v("For the deadline extensions feature, we had to maintain maps from email addresses to deadlines within the feedback session entities. I learned that this was not a standard Datastore value type so a possible way of storing this would be to store it as a Blob. I also learned that to do this within Objectify, this can be done through the Serialize annotation.")]),_v(" "),_c('p',[_v("In order to validate requests to update the deadline maps, we needed to check if the emails in the requests actually existed for the corresponding course. One way would be to load every single "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CourseStudent")]),_v(" entity and every "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Instructor")]),_v(" entity. However, I learned that this costs a certain amount and not only that, the cost scales for every read of every instance. I found out about projection queries, which only scales with the number of queries, not the number of entities read in that query. This was more economical and thus, I chose to do this instead. Strangely, I do not think projection queries are documented in Objectify, so I had to refer to StackOverflow to find out how to do projection queries within Objectify.")]),_v(" "),_c('p',[_v("I also learned that projection queries needed indices, and I initially wrongly thought that this was only for the properties that were projected, not other properties within the same query that were, say, filtered for instance. I also previously read that every property of each entity kind already has a built-in index of its own, so I initially wrongly assumed that I did not need to write any more indices for my projection queries. However, Fergus (I believe?) pointed out to me that this was wrong and looking at it again, it does make more sense for all properties used in a query, so both projections and filters, to require a composite index altogether. However, this then came with a downside, as I also found out that indices cost money to maintain too due to their storage costs.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/datastore/docs/concepts/entities"}},[_v("How data is stored in Datastore (Entities, Properties, and Keys)")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/datastore/docs/concepts/entities#supported_value_types"}},[_v("Datastore supported value types")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/objectify/objectify/wiki/Entities#serializing"}},[_v("Serialization")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/datastore/pricing"}},[_v("Datastore Pricing")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/datastore/docs/concepts/queries#projection_queries"}},[_v("Projection queries")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/questions/49691925/objectify-projection-query-with-id-as-well-in-the-result"}},[_v("Projection queries in Objectify")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/datastore/docs/concepts/queries#limitations_on_projections"}},[_v("Projection queries requires indexes")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/datastore/docs/concepts/indexes#built_in_indexes"}},[_v("Built-in indexes")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/datastore/docs/concepts/indexes#composite_indexes"}},[_v("Composite indexes")])])]),_v(" "),_c('h3',{attrs:{"id":"google-cloud-app-engine"}},[_v("Google Cloud App Engine"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#google-cloud-app-engine","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have also only previously used Google Cloud Functions or Firebase Cloud Functions. I also remember how when I used either of them, I also noticed App Engine and then also told myself to look at it at another time, so getting to learn it by joining TEAMMATES, like Datastore, was such a great thing.")]),_v(" "),_c('p',[_v("I think the main thing I learned was the task queues, though unfortunately, they are already phased out. I am at least hoping that this knowledge is transferable to what I believe is the new equivalent service of Google Cloud, which is Cloud Tasks. Regardless, I had to use task queues in order to run the workers created by Samuel which handle deadline extension entities for the deadline extensions feature.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/appengine/docs/standard/java/taskqueue/push/creating-push-queues"}},[_v("Creating Push Queues")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Thu, 4 Apr 2024, 6:23:47 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  