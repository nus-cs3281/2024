
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"hibernate"}},[_v("Hibernate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As part of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v9-migration")]),_v(", I had to familiarise myself with the Hibernate ORM. It is my first time using Hibernate ORM, as I was only familiar with the Eloquent ORM from Laravel, as well as the ORM from Django. ORMs are extremely beneficial as they essentially translate between data representations used in the application and those in the database. It also makes your code more readable as it simplifies complex queries and makes transitioning between various database engines seamless, should the need arise.")]),_v(" "),_c('p',[_v("Aspects Learnt:")]),_v(" "),_c('ul',[_c('li',[_v("Learnt the fundamentals of Object-Relational Mapping (ORM), enabling the conversion of data between the database and object-oriented programming languages, in particular Java")]),_v(" "),_c('li',[_v("Usage of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persist")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge")]),_v(" to insert or update an entity respectively")]),_v(" "),_c('li',[_v("Learnt about Hibernate's internal caching mechanisms")]),_v(" "),_c('li',[_v("Managing transactions")])]),_v(" "),_c('p',[_v("Resources")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.geeksforgeeks.org/hibernate-caching/"}},[_v("GeeksForGeeks Article on Hibernate Caching")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://hibernate.org/orm/"}},[_v("Hibernate docs")])])]),_v(" "),_c('h3',{attrs:{"id":"solr"}},[_v("Solr"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#solr","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TEAMMATES uses Solr for full-text search, and is structured to function for both the datastore and SQL databases.")]),_v(" "),_c('p',[_v("Aspects Learnt:")]),_v(" "),_c('ul',[_c('li',[_v("Gained proficiency in Solr's query syntax to perform powerful searches, including filtering, sorting, and faceting to retrieve relevant documents efficiently")]),_v(" "),_c('li',[_v("Understood how Solr is integrated into the TEAMMATES backend for searching or indexing")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://solr.apache.org/guide/solr/latest/query-guide/json-request-api.html"}},[_v("Solr JSON Request API guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://solr.apache.org/docs/6_0_0/quickstart.html"}},[_v("Solr Quickstart guide")])])]),_v(" "),_c('h3',{attrs:{"id":"postgresql"}},[_v("PostgreSQL"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#postgresql","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Having only used "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SQLite")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MySQL")]),_v(" in the past, I had to familiarise myself with PostgreSQL as it is the SQL database used in TEAMMATES.")]),_v(" "),_c('p',[_v("Aspects Learnt:")]),_v(" "),_c('ul',[_c('li',[_v("Learnt about PostgreSQL's architecture, including its use of processes for client connections, MVCC (Multiversion Concurrency Control), and its write-ahead logging (WAL) for data integrity")]),_v(" "),_c('li',[_v("Write-Ahead Logging (WAL) involves recording changes to a log before any changes are made to the actual database. This method is crucial for recovery after a crash, as it ensures that all committed transactions are saved.")]),_v(" "),_c('li',[_v("MVCC allows multiple users to access the database concurrently without locking the data. This means readers don't block writers and vice-versa, leading to increased performance and lower waiting times during operations, which is a significant advantage over MySQL's more traditional locking mechanisms")]),_v(" "),_c('li',[_v("Learnt about the differences between the 3 SQL database engines")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems"}},[_v("Differences between "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MySQL")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SQLite")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PostgreSQL")])])])]),_v(" "),_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Having had no experience utilising Angular prior to working on TEAMMATES, I was introduced to several neat features that Angular has to offer.")]),_v(" "),_c('p',[_v("Aspects Learnt:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Angular's component-based architecture makes it easy to build and maintain large applications. Each component is encapsulated with its own functionality and is responsible for a specific UI element. This modularity allowed me to quickly understand and contribute to the project, as I could focus on individual components without being overwhelmed by the entire codebase.")])]),_v(" "),_c('li',[_c('p',[_v("Angular's dependency injection system is a design pattern in which a class receives its dependencies from external sources rather than creating them itself. This approach simplifies the development of large applications by making it easier to manage and test components.")])]),_v(" "),_c('li',[_c('p',[_v("Angular offers the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("trackBy")]),_v(" function, which I used in conjunction with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*ngFor")]),_v(" directive to manage lists more efficiently. Normally, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*ngFor")]),_v(" can be inefficient because it re-renders the entire list when the data changes. However, by implementing trackBy, Angular can track each item's identity and only re-render items that have actually changed. This reduces the performance cost, especially in large lists where only a few items change.")])])]),_v(" "),_c('h3',{attrs:{"id":"google-cloud"}},[_v("Google Cloud"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#google-cloud","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When deploying the staging environment for the ARF upgrade, I managed to work with and gain familiarity with the deployment workflow, as well as several GCP tools and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("gcloud")]),_v(" sdk.")]),_v(" "),_c('p',[_v("Aspects Learnt")]),_v(" "),_c('ul',[_c('li',[_v("Navigating GCP and the services they have to offer")]),_v(" "),_c('li',[_v("Setting up OAuth 2.0 Client and Gmail API credentials")]),_v(" "),_c('li',[_v("Configuring up a VPC for communication between various services")]),_v(" "),_c('li',[_v("Deployment using gcloud")]),_v(" "),_c('li',[_v("Navigating server logs to investigate issues")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates-ops/blob/master/platform-guide.md#deploying-to-a-staging-server"}},[_v("Guide created by mentors")])])]),_v(" "),_c('h3',{attrs:{"id":"snapshot-testing"}},[_v("Snapshot Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#snapshot-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Snapshot testing with Jest is an effective strategy to ensure that user interfaces remain consistent despite code changes. It's important for developers to maintain updated snapshots and commit these changes as part of their regular development process.")]),_v(" "),_c('p',[_v("Snapshot tests are particularly useful for detecting unexpected changes in the UI. By capturing the \"snapshot\" of an output, developers can compare the current component render against a stored version. If changes occur that aren't captured in a new snapshot, the test will fail, signaling the need for a review.")]),_v(" "),_c('h3',{attrs:{"id":"unit-testing-with-mockito"}},[_v("Unit Testing with Mockito"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#unit-testing-with-mockito","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Mockito is a popular Java-based framework used primarily for unit testing. It allows developers to isolate the units of code they are testing, to focus solely on the component of software that is being tested.")]),_v(" "),_c('p',[_v("Mockito allows developers to create mock implementations of dependencies for a particular class. This way, developers can isolate the behavior of the class itself without needing the actual dependencies to be active. By using mock objects instead of real ones, tests can be simplified as they don’t have to cater to the complexities of actual dependencies, such as database connections or external services. Mockito also provides tools to verify that certain behaviors happened during the test. For example, it can verify that a method was called with certain parameters or a certain number of times.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.toptal.com/java/a-guide-to-everyday-mockito"}},[_v("Mockito Tutorials")])])]),_v(" "),_c('h3',{attrs:{"id":"e2e-testing"}},[_v("E2E Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#e2e-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("E2E Testing allows us to ensure that the application functions as expected from the perspective of the user. This type of testing simulates real user scenarios to validate the complete functionality of the application. Common tools for conducting E2E testing include Selenium, Playwright, and Cypress.")]),_v(" "),_c('p',[_v("Throughout the semester, I had to migrate several E2E tests and also create some new ones as part of the ARF project, which exposed me to the Page Object Model, which allows for easier testing and maintenance. It enhances code reusability as the same Page Object Model can be reused across related test cases.")]),_v(" "),_c('p',[_v("E2E Tests may be the most complicated type of test to write, as it involves multiple components of the application; testing it as a whole, rather than in isolated components. As such, pinpointing the sources of errors or failures can be difficult. E2E Tests can also be flaky at times, passing in one run, and failing on others, which could occur due to numerous reasons such as timing issues, concurrency problems or subtle bugs that occur under specific circumstances. However, it is still highly useful as it helps to identify issues in the interaction between integrated components, and also simulates real user scenarios.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.selenium.dev/documentation/overview/"}},[_v("Selenium documentation")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.browserstack.com/guide/page-object-model-in-selenium"}},[_v("Page Object Model")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Wed, 24 Apr 2024, 8:30:02 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  