
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"summary"}},[_v("Summary:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#summary","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This semester, I was involved in the database migration team, both in migrating the application code and creating the scripts to transport the data from Datastore to CloudSQL.\nThis involves "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12702"}},[_v("migrating actions in the backend application code, fixing previously undetected bugs")]),_v(", setting up of a development Google Cloud environment, "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12841"}},[_v("writing base script files for moving and verifying data")]),_v(" and mapping entities from non-sql entities to sql entities, "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12845"}},[_v("debugging errors such as OutOfMemory exceptions")]),_v(" during migration and exploring potential speedups.")]),_v(" "),_c('p',[_v("During this journey, I also played the role of a mentor for one of the CS3281 mentees to help provide guidance on migrating of action code. This includes "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12719"}},[_v("sharing software engineering best practices")]),_v(" such as avoiding mutable instances in Constant files, use of inheritance etc to ensure TEAMMATES code is more maintenable and less bug-prone.")]),_v(" "),_c('p',[_v("Secondly, I was involved in the SQL Injection testing team as well where I "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12788#discussion_r1501745332"}},[_v("contributed knowledge on common SQL Injection attack inputs")]),_v(" and helped formulate the test cases.")]),_v(" "),_c('p',[_v("Thirdly, I was involved in the design of Multiple Course Structures feature. I participated in the discussion and helped with the implementation of Hibernate entities to be used for future implementation of this feature. This includes "),_c('a',{attrs:{"href":"https://www.baeldung.com/hibernate-many-to-many"}},[_v("updating existing ER designs")]),_v(" to support the existing schema and new schema simultaneously.")]),_v(" "),_c('p',[_v("Finally, I was involved in "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/issues/12699"}},[_v("raising and fixing minor documentation errors")]),_v(" such as outdated commands on the developer guide to improve the experience of future developers.")]),_v(" "),_c('p',[_v("As for external projects, I worked on Scribe-iOS project, a Google Summer of Code and project which is part of Wikimedia foundation to improve code quality of the software. My learning points are further described in \"observations.md\".")]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"key-achievements"}},[_v("Key achievements:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#key-achievements","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Date")]),_v(" "),_c('th',[_v("Role")]),_v(" "),_c('th',[_v("Description")]),_v(" "),_c('th',[_v("Key Achievement")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("24/01/2024")]),_v(" "),_c('td',[_v("Issue Reporter")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/issues/12699"}},[_v("Found and reported issue #12699 with developer documentation "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ng")]),_v(" command")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("24/01/2024")]),_v(" "),_c('td',[_v("PR Author")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12701"}},[_v("Fixed documentation bug #12699 in TEAMMATES developer documentation with ng command")])]),_v(" "),_c('td',[_v("Fixed documentation bug on key page (TEAMMATES new developer guide)")])]),_v(" "),_c('tr',[_c('td',[_v("07/02/2024")]),_v(" "),_c('td',[_v("PR Reviewer")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12706"}},[_v("Review of PR #12706 Migrate CreateInstructorAction")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("15/02/2024")]),_v(" "),_c('td',[_v("PR Author")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12702"}},[_v("Review of PR #12702 Migrated CreateAccountAction")])]),_v(" "),_c('td',[_v("1. Over 20k LoC 2. Found and fixed previously undetected bugs with HibernateContext and circular toString() errors which cause Stack Overflow crashes 3. migrated 12k LoC of previous json bundle to new SQL bundle format")])]),_v(" "),_c('tr',[_c('td',[_v("20/02/2024")]),_v(" "),_c('td',[_v("PR Reviewer")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12741"}},[_v("Review of #PR 12741 Migrate feedbackSessionPublishedRemindersAction")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("20/02/2024")]),_v(" "),_c('td',[_v("PR Reviewer")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12759"}},[_v("Review of #PR 12759 Add tests for FeedbackQuestionsDb")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("20/02/2024")]),_v(" "),_c('td',[_v("PR Reviewer and mentor")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12719"}},[_v("Review of #PR 12719 Migrate GetResultsSessionAction")])]),_v(" "),_c('td',[_v("Provide guidance on best practices (Avoid shared mutable instances in Const file, only immutable String literals, naming conventions "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("is...")]),_v(" for boolean), provide mentorship on using inheritance for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NonExistentFeedbackResponse.java")]),_v(" instead of instantiating duplicate 'fake' feedback sessions multiple times, aid in explaining code.")])]),_v(" "),_c('tr',[_c('td',[_v("20/02/2024")]),_v(" "),_c('td',[_v("PR Contributor")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12766"}},[_v("Create Database migration base scripts")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("24/02/2024")]),_v(" "),_c('td',[_v("PR Author")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12798"}},[_v("Wrote migration script for UsageStatistics")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("25/02/2024")]),_v(" "),_c('td',[_v("PR Author")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12842"}},[_v("Wrote verification script for UsageStatistics")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_v("25/02/204")]),_v(" "),_c('td',[_v("PR Contributor")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12788#discussion_r1501745332"}},[_v("Contributed SQL injection ideas to aid in SQL injection testing")])]),_v(" "),_c('td',[_v("Provided SQL injection test cases to be used during SQLi testing")])]),_v(" "),_c('tr',[_c('td',[_v("26/02/2024")]),_v(" "),_c('td',[_v("PR Author")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12845"}},[_v("Implementing pagination for SQL migration base script")])]),_v(" "),_c('td',[_v("Prevent OutOfMemory errors due to large amount of data loaded and migrated by migrating page by page which can fit into memory")])]),_v(" "),_c('tr',[_c('td',[_v("26/02/2024")]),_v(" "),_c('td',[_v("PR Co-Author")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12841"}},[_v("Wrote base script for DB migration verification")])]),_v(" "),_c('td',[_v("Debugged issue regarding failure to verify equality of migrated entities due to incorrecly implemented isEqual() method, where instances should use .equals() instead of == to check equality of value")])]),_v(" "),_c('tr',[_c('td',[_v("14/03/2024")]),_v(" "),_c('td',[_v("Mentor")]),_v(" "),_c('td',[_v("Discussion on Multiple course structure (formerly multiple team structures)")]),_v(" "),_c('td',[_v("Ensure everyone on team understands project requirement, rename to Multiple Course Structure for clarity, since 'Teams' in TEAMMATES means something else, discussed UX flow and UI elements")])]),_v(" "),_c('tr',[_c('td',[_v("28/03/2024")]),_v(" "),_c('td',[_v("PR Co-Author / Contributor")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12948"}},[_v("Implement Hibernate entities for Multiple Course Structure")])]),_v(" "),_c('td',[_v("Database ERD schema discussion and validation, guidance on "),_c('a',{attrs:{"href":"https://www.baeldung.com/hibernate-many-to-many"}},[_v("many-to-many relationship representation in Hibernate")]),_v(".")])])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 28 Apr 2024, 9:56:17 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  