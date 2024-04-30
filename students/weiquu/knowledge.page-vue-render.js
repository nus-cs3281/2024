
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"cs3282"}},[_v("CS3282"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cs3282","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"database-migration"}},[_v("Database Migration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#database-migration","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Before CS3282, I had little knowledge of database migration, as I was mainly working on frontend user friendliness issues. Hence, I had to learn the proper way to migrate actions so to as to effectively review PRs and mentor the CS3281 students. This gave me the chance to learn more about the Hibernate ORM, as well as the different components in the backend. For example, one of the PRs that I took on was about migrating search functionality. This involved me learning more about Solr, how it is setup and returns search results in the database, as well as how documents and their indexing are handled. The search functionality turned out to be quite issue-prone, and we had to troubleshoot many of the problems that inevitably cropped up.")]),_v(" "),_c('p',[_v("Another point is on database design and their consequences. Early on in the semester, I realised (along with Dominic (Lim)) that a lot of changes were being manually cascaded throughout the database tables. This didn't really make sense to us, as it seemed error-prone and went against what we knew about relational database design. In trying to find out why this decision was made, it seemed that it was because they feared that joining too many tables together might cause performance issues. However, after doing some research, we concluded that performance would not take too much of a hit, and anyway, the performance hit was worth it considering that we are able to better ensure correctness by using the built-in cascade function of the database. Due to documentation being hard to find, it is unclear if there were any other reasons behind manually cascading. Hence, there are a few lessons to be learnt here:")]),_v(" "),_c('ul',[_c('li',[_v("Documentation must be more complete and should properly consider all trade-offs. It also must be made more accessible to future batches")]),_v(" "),_c('li',[_v("We should follow the theoretically correct way of designing our database - TEAMMATES is not using databases in such a wildly unique way that would warrant doing things otherwise (in fact, I would say our use case is fairly standard)")]),_v(" "),_c('li',[_v("More research should be done into performance, and perhaps tests made - our own research showed that there shouldn't be any performance issue even if we use the built-in cascade")])]),_v(" "),_c('p',[_v("However, as a result of this decision being made already, there is a lot of work to be done to properly refactor the entities. This just goes to show how important prior planning is.")]),_v(" "),_c('h4',{attrs:{"id":"testing-capabilities"}},[_v("Testing Capabilities"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing-capabilities","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt much more about E2E tests, integration tests, and unit tests. I also learnt more about the best practices for going about them to ensure standardisation and minimal code duplication (shoutout to Cedric, whose PRs were instrumental in me gaining this knowledge). In addition, I am now better able to pinpoint the issues with our previous tests (seeming to join multiple test types together, as well as not adequately testing all possible pathways, including edge cases), which will be useful in improving testing in the future")]),_v(" "),_c('h4',{attrs:{"id":"security-vulnerabilities"}},[_v("Security Vulnerabilities"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#security-vulnerabilities","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As part of the database migration, I had to research into how security vulnerabilities are protected against and how tests are written to ensure that there are no vulnerabilities. In conducting this research, I also looked into how Hibernate and other ORMs protect against security vulnerabilities, for instance by using prepared statements. The other part of my research looked at OWASP guidelines, indicating how different attacks are carried out and how they should be protected against. We decided to focus on testing for SQL injection, and thus I was able to gain more insight into how SQL injections are carried out and how to effectively test for a wide range of cases against them.")]),_v(" "),_c('h4',{attrs:{"id":"tech-design"}},[_v("Tech Design"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tech-design","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In carrying out the preliminary research into the Multiple Course Structures (MCS) project, I learnt more about how to carry out tech design. The process of coming up with user requirements and thinking from the user perspective is still quite new to me, but I was able to learn a lot from listening to how Prof Damith looked through and considered various aspects of our UI design. In addition, I was able to learn about what features should be prioritised first, and what should be just added later after the MVP is completed.")]),_v(" "),_c('p',[_v("On the backend side, I gained valuable experience of how to design backend logic with minimal changes, and yet still have it be extensible. A significant part of this is related to database design, where we should aim to be backward compatible.")]),_v(" "),_c('p',[_v("As part of introducing the database schema changes into a separate branch, I was also exposed to the need to introduce database changes step by step, which is even more important at this stage since data migration is happening. For example, new columns should either be nullable at the start or have a suitable default value, and columns and tables shouldn't be dropped until all references in the code are removed. In addition, adding and removing constraints should only be done if the system logic can work before and after such addition or removal. (Thanks Wilson for coaching us through this!)")]),_v(" "),_c('h4',{attrs:{"id":"oss-skills"}},[_v("OSS Skills"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#oss-skills","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Lastly, I learnt a lot about OSS skills in leading a team of people, both individually (as in the security group and the MCS project) and as a small group (as in the entire database migration). I found that delegating work is not as easy as just deciding who does what - it is also essential to consider what others have done before, what their skills are, what they want to do, as well as whether the tasks will have any blockers. This requires both knowledge of the team members as well as a deep understanding of the system and the changes to be made to it.")]),_v(" "),_c('p',[_v("The soft skill of \"pushing\" people to get work done is also essential, and I think this was a good experience in cultivating this skill. This is especially so since our team is made out of full-time students, who are juggling many other responsibilities and work from other courses - hence, it is important to be both firm and understanding.")]),_v(" "),_c('h3',{attrs:{"id":"cs3281"}},[_v("CS3281"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cs3281","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"frontend"}},[_v("Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I previously had no experience with Angular, and so working on the frontend proved to be quite an uphill task. My\nmain resource for learning Angular was the Angular documentation, where I was introduced to components, templates,\ndirectives, and dependency injection. I also referred to several other guides, particularly for parts such as\nobservables (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EventEmitter")]),_v(") which I found more difficult to understand.")]),_v(" "),_c('p',[_v("Through learning about and getting more hands-on experience with Angular, I came to appreciate its transmission of\ndata between components as well as its conditional and looped rendering of webpage elements. The lifecycle hook\nmethods were also useful in determining when certain logic was to be run. I also found the separation of HTML, CSS,\nand TS files to be clean and easier to understand.")]),_v(" "),_c('p',[_v("I also learnt about how using certain features of Angular can help application performance, such as pipes, which is\nefficient and only run when the pipe input is changed. (However, ES6 template literals and nested string\ninterpolation aren't supported in Angular).")]),_v(" "),_c('h4',{attrs:{"id":"web-accessibility"}},[_v("Web Accessibility"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#web-accessibility","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt a lot about why we need web accessibility and what we can do to make our application more accessible. A lot\nof the resources I learnt from were those shared by our mentor, which also detailed best practices and other design\nconsiderations.")]),_v(" "),_c('p',[_c('strong',[_v("Screen reader:")]),_v(" A screen reader is useful to those who have their vision impaired. It reads out the elements on\nthe webpage and allows users to navigate through them, press on buttons, etc. This means that for a user to have a\ngood experience, our application must be designed such that they know what is on the webpage and can navigate\nthrough it easily.")]),_v(" "),_c('p',[_c('strong',[_v("Tab order and headings:")]),_v(" One way to help navigation is to ensure that tab order and headings are correct. In\nparticular, tabbing should be in logical order of how the field is presented on the page, and the user should not be\nable to tab to elements that are hidden or not visible at the moment. For headers, headings should be used to help\nusers quick navigate between sections, and should be used in order without skipping numbers, so as to avoid\nconfusion.")]),_v(" "),_c('p',[_c('strong',[_v("Aria attributes:")]),_v(" There are many aria attributes, but the ones mainly used are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-label")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-role")]),_v(", and\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-hidden")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-label")]),_v(" labels an element so that the screen reader knows what to read when the user is focusing\non that element. In the same vein, it is important to attach (descriptive) labels to fields for the same reason.\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-role")]),_v(" is used to tell the screen reader what role an element plays in the webpage, so that it knows what to\ntell the user. Finally, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("aria-hidden")]),_v(", when set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("true")]),_v(", tells the screen reader to skip past this element. This\nmight be desirable because sometimes we don't want images or small icons to be captured by the screen reader.")]),_v(" "),_c('h4',{attrs:{"id":"mobile-friendliness"}},[_v("Mobile Friendliness"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mobile-friendliness","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt about mobile friendliness and how to design a webpage in a way that is able to fit and work well in\nvarious screen widths. One way to do so, and in fact the way we mostly use, is by using Bootstrap's breakpoints,\nwhich helps to set styles depending on the screen width of the device.")]),_v(" "),_c('p',[_v("Certain elements need to be redesigned to fit smaller screenwidths. The elements that I learnt about, and read about\ndifferent design considerations, are modals and tables. In particular, there are several guidelines that specify\nhow each should be laid out.")]),_v(" "),_c('p',[_v("When thinking about how the frontend should look like, it is important to treat it from a user's perspective.\nCertain issues might not come to mind if we think of it purely as a developer, e.g. buttons need to be spaced\nfurther apart on mobile as putting them closer together makes it more difficult to press using fingers (as opposed\nto when using a mouse).")]),_v(" "),_c('h3',{attrs:{"id":"backend"}},[_v("Backend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt about how to properly migrate data across different databases while ensuring that the system stays up and\noperational. It felt that this way of managing the dual databases required a lot of effort in implementing double\nlogic in each action, entity, etc, but since most of the extra code would be retained, I found this to be a good\napproach.")]),_v(" "),_c('h4',{attrs:{"id":"hibernate-orm"}},[_v("Hibernate ORM"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate-orm","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I didn't learn about Hibernate ORM in much detail as I was mainly involved in user-friendliness. What I learnt from\nthe mentors was that Hibernate helps to map entity classes to database records (along with annotations that provide\nuseful information about the fields, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Nullable")]),_v("), and also about entity states and session flushing.")]),_v(" "),_c('p',[_v("In addition, I learnt about Hibernate's methods for database operations, and how these methods can be used in place\nof SQL queries for reasons like safety and performance.")]),_v(" "),_c('h4',{attrs:{"id":"docker"}},[_v("Docker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#docker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Docker makes starting services easier, and enables placing applications into various containers. I briefly looked\ninto how Docker is used, in particular how the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker compose")]),_v(" command works and how configurations can be\nspecified inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker-compose.yml")]),_v(" file.")]),_v(" "),_c('h3',{attrs:{"id":"others"}},[_v("Others"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#others","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Unit testing:")]),_v(" I learnt about unit testing, which is testing individual components in isolation, when looking\nthrough the backend code for the onboarding task and later for the migration. I also learnt about how dependencies\nshould be mocked so as to properly test for bugs in the current class without interference from other classes.")]),_v(" "),_c('p',[_c('strong',[_v("Integration testing:")]),_v(" I wrote a few integration tests for the migration, which tested if the various classes\nwere working together as intended. This usually involved ensuring data or errors are properly transferred across\nthe backend layers (e.g. database, actions, etc).")]),_v(" "),_c('p',[_c('strong',[_v("Snapshot testing:")]),_v(" These were the tests that I worked with the most, and are mostly frontend focused. I found\nthat they were most useful in helping me determine whether a change in code resulted in a similar change in the\nwebpage. This meant that looking through the potential changes in snapshot tests were crucial in ensuring that\nthese changes were to be expected.")]),_v(" "),_c('p',[_c('strong',[_v("E2E testing:")]),_v(" E2E tests help to test the application from end to end, as the name suggests. This involves opening\nthe browser, navigating to the page, interacting with elements, verifying state of webpage and database, etc. The\nscale of the test means that it takes a long time to run. I also learnt about the instability of the tests, and why\nit usually had to be run multiple times in order to pass. A skill I learnt was to analyse the error and determine\nfrom there whether the test was failing because of code changes or because of instability.")]),_v(" "),_c('p',[_c('strong',[_v("Importance of testing:")]),_v(" While the importance of testing is always quite intuitively understood, I think that\nseeing it in action makes its importance more pronounced. This is especially the case for regression testing like\nin the migration, where we want to ensure that adding in the second database doesn't change or break the Datastore\n(as we want both to function simultaneously).")]),_v(" "),_c('h4',{attrs:{"id":"git"}},[_v("Git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt several useful commands by searching online for solutions to pain points or just from talking to the rest\nof the team. For instance, I learnt about fetching a PR's code directly from the PR, which helped in reviews.")]),_v(" "),_c('h4',{attrs:{"id":"oss"}},[_v("OSS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#oss","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt how to better give code reviews, and in particularly how to think about it in a way that made code\nconsistent across the entire application (e.g. the \"space before checkbox\" issues). I also learnt the importance of\npresenting feedback across in a clear and conducive way.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Tue, 30 Apr 2024, 18:48:02 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  