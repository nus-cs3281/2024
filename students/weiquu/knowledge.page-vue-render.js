
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"cs3282"}},[_v("CS3282"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cs3282","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Point form for now, will expand later:")]),_v(" "),_c('ul',[_c('li',[_v("More data migration: migrating actions and search functionality")]),_v(" "),_c('li',[_v("Tradeoffs made in database design and their consequences")]),_v(" "),_c('li',[_v("Testing capabilities: E2E tests, integration tests, unit tests")]),_v(" "),_c('li',[_v("Security vulnerabilities: how Hibernate protects against them, testing for SQL injection")]),_v(" "),_c('li',[_v("Tech design: process of coming up with user requirements and thinking from user perspective, how to design backend with minimal changes and yet still have it be extensible")]),_v(" "),_c('li',[_v("OSS skills: managing a team of people, individually and as a small group")])]),_v(" "),_c('h3',{attrs:{"id":"frontend"}},[_v("Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I previously had no experience with Angular, and so working on the frontend proved to be quite an uphill task. My\nmain resource for learning Angular was the Angular documentation, where I was introduced to components, templates,\ndirectives, and dependency injection. I also referred to several other guides, particularly for parts such as\nobservables (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EventEmitter")]),_v(") which I found more difficult to understand.")]),_v(" "),_c('p',[_v("Through learning about and getting more hands-on experience with Angular, I came to appreciate its transmission of\ndata between components as well as its conditional and looped rendering of webpage elements. The lifecycle hook\nmethods were also useful in determining when certain logic was to be run. I also found the separation of HTML, CSS,\nand TS files to be clean and easier to understand.")]),_v(" "),_c('p',[_v("I also learnt about how using certain features of Angular can help application performance, such as pipes, which is\nefficient and only run when the pipe input is changed. (However, ES6 template literals and nested string\ninterpolation aren't supported in Angular).")]),_v(" "),_c('h4',{attrs:{"id":"web-accessibility"}},[_v("Web Accessibility"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#web-accessibility","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt a lot about why we need web accessibility and what we can do to make our application more accessible. A lot\nof the resources I learnt from were those shared by our mentor, which also detailed best practices and other design\nconsiderations.")]),_v(" "),_c('p',[_c('strong',[_v("Screen reader:")]),_v(" A screen reader is useful to those who have their vision impaired. It reads out the elements on\nthe webpage and allows users to navigate through them, press on buttons, etc. This means that for a user to have a\ngood experience, our application must be designed such that they know what is on the webpage and can navigate\nthrough it easily.")]),_v(" "),_c('p',[_c('strong',[_v("Tab order and headings:")]),_v(" One way to help navigation is to ensure that tab order and headings are correct. In\nparticular, tabbing should be in logical order of how the field is presented on the page, and the user should not be\nable to tab to elements that are hidden or not visible at the moment. For headers, headings should be used to help\nusers quick navigate between sections, and should be used in order without skipping numbers, so as to avoid\nconfusion.")]),_v(" "),_c('p',[_c('strong',[_v("Aria attributes:")]),_v(" There are many aria attributes, but the ones mainly used are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-label")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-role")]),_v(", and\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-hidden")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-label")]),_v(" labels an element so that the screen reader knows what to read when the user is focusing\non that element. In the same vein, it is important to attach (descriptive) labels to fields for the same reason.\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-role")]),_v(" is used to tell the screen reader what role an element plays in the webpage, so that it knows what to\ntell the user. Finally, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-hidden")]),_v(", when set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("true")]),_v(", tells the screen reader to skip past this element. This\nmight be desirable because sometimes we don't want images or small icons to be captured by the screen reader.")]),_v(" "),_c('h4',{attrs:{"id":"mobile-friendliness"}},[_v("Mobile Friendliness"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mobile-friendliness","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt about mobile friendliness and how to design a webpage in a way that is able to fit and work well in\nvarious screen widths. One way to do so, and in fact the way we mostly use, is by using Bootstrap's breakpoints,\nwhich helps to set styles depending on the screen width of the device.")]),_v(" "),_c('p',[_v("Certain elements need to be redesigned to fit smaller screenwidths. The elements that I learnt about, and read about\ndifferent design considerations, are modals and tables. In particular, there are several guidelines that specify\nhow each should be laid out.")]),_v(" "),_c('p',[_v("When thinking about how the frontend should look like, it is important to treat it from a user's perspective.\nCertain issues might not come to mind if we think of it purely as a developer, e.g. buttons need to be spaced\nfurther apart on mobile as putting them closer together makes it more difficult to press using fingers (as opposed\nto when using a mouse).")]),_v(" "),_c('h3',{attrs:{"id":"backend"}},[_v("Backend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt about how to properly migrate data across different databases while ensuring that the system stays up and\noperational. It felt that this way of managing the dual databases required a lot of effort in implementing double\nlogic in each action, entity, etc, but since most of the extra code would be retained, I found this to be a good\napproach.")]),_v(" "),_c('h4',{attrs:{"id":"hibernate-orm"}},[_v("Hibernate ORM"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate-orm","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I didn't learn about Hibernate ORM in much detail as I was mainly involved in user-friendliness. What I learnt from\nthe mentors was that Hibernate helps to map entity classes to database records (along with annotations that provide\nuseful information about the fields, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Nullable")]),_v("), and also about entity states and session flushing.")]),_v(" "),_c('p',[_v("In addition, I learnt about Hibernate's methods for database operations, and how these methods can be used in place\nof SQL queries for reasons like safety and performance.")]),_v(" "),_c('h4',{attrs:{"id":"docker"}},[_v("Docker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#docker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Docker makes starting services easier, and enables placing applications into various containers. I briefly looked\ninto how Docker is used, in particular how the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker compose")]),_v(" command works and how configurations can be\nspecified inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker-compose.yml")]),_v(" file.")]),_v(" "),_c('h3',{attrs:{"id":"others"}},[_v("Others"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#others","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Unit testing:")]),_v(" I learnt about unit testing, which is testing individual components in isolation, when looking\nthrough the backend code for the onboarding task and later for the migration. I also learnt about how dependencies\nshould be mocked so as to properly test for bugs in the current class without interference from other classes.")]),_v(" "),_c('p',[_c('strong',[_v("Integration testing:")]),_v(" I wrote a few integration tests for the migration, which tested if the various classes\nwere working together as intended. This usually involved ensuring data or errors are properly transferred across\nthe backend layers (e.g. database, actions, etc).")]),_v(" "),_c('p',[_c('strong',[_v("Snapshot testing:")]),_v(" These were the tests that I worked with the most, and are mostly frontend focused. I found\nthat they were most useful in helping me determine whether a change in code resulted in a similar change in the\nwebpage. This meant that looking through the potential changes in snapshot tests were crucial in ensuring that\nthese changes were to be expected.")]),_v(" "),_c('p',[_c('strong',[_v("E2E testing:")]),_v(" E2E tests help to test the application from end to end, as the name suggests. This involves opening\nthe browser, navigating to the page, interacting with elements, verifying state of webpage and database, etc. The\nscale of the test means that it takes a long time to run. I also learnt about the instability of the tests, and why\nit usually had to be run multiple times in order to pass. A skill I learnt was to analyse the error and determine\nfrom there whether the test was failing because of code changes or because of instability.")]),_v(" "),_c('p',[_c('strong',[_v("Importance of testing:")]),_v(" While the importance of testing is always quite intuitively understood, I think that\nseeing it in action makes its importance more pronounced. This is especially the case for regression testing like\nin the migration, where we want to ensure that adding in the second database doesn't change or break the Datastore\n(as we want both to function simultaneously).")]),_v(" "),_c('h4',{attrs:{"id":"git"}},[_v("Git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt several useful commands by searching online for solutions to pain points or just from talking to the rest\nof the team. For instance, I learnt about fetching a PR's code directly from the PR, which helped in reviews.")]),_v(" "),_c('h4',{attrs:{"id":"oss"}},[_v("OSS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#oss","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt how to better give code reviews, and in particularly how to think about it in a way that made code\nconsistent across the entire application (e.g. the \"space before checkbox\" issues). I also learnt the importance of\npresenting feedback across in a clear and conducive way.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Sat, 9 Mar 2024, 8:26:26 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  