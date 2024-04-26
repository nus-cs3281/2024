
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"data-migration"}},[_v("Data Migration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#data-migration","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Data migration is critical aspect of software development and system maintenance, it involves moving data efficiently while maintaining data integrity, security, and consistency. Having the chance to be involve in data migration really opened my eyes to its general procedure. We were tasked with migrating NoSQL datastore entity to SQL postgresql.")]),_v(" "),_c('ul',[_c('li',[_v("Efficiency, the longer the script, the longer the application is down")]),_v(" "),_c('li',[_v("Validation, what to do if validation fails?")]),_v(" "),_c('li',[_v("Order of migration")]),_v(" "),_c('li',[_v("Batch processing, batching expensive operation would result in higher efficiency")]),_v(" "),_c('li',[_v("Recovery, able to recover after a crash or SIGKILL")])]),_v(" "),_c('h3',{attrs:{"id":"end-to-end-e2e-testing"}},[_v("End to End (E2E) testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#end-to-end-e2e-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("E2E tests are a type of software testing that evaluates the entire workflow of an application from start to finish, simulating real user interactions. The purpose of E2E testing is to ensure that all components of an application, including the user interface, backend services, databases, and external integrations, work together correctly to achieve the desired functionality. Here's an explanation of E2E tests and how they are conducted. As E2E tests are very expensive to run, it is crucial that we identify the important workflows and simulate the actions involved by interacting with the UI. You then assert the expected conditions are present after the interaction. Teammates uses Selenium to locate and interact with the elements in the UI. I have to admit, this is my first time doing tests for Frontend much less the whole application. It was cool to see the browser jump around and simulate the required action. I also saw the value in this as I managed to uncover many bugs that was not caught in earlier tests.")]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://ariangarshi.medium.com/getting-started-with-e2e-testing-using-selenium-webdriver-4b1074cae825"}},[_v("Simple Selenium setup")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.selenium.dev/documentation/webdriver/actions_api/"}},[_v("Selenium documentation")])])]),_v(" "),_c('h3',{attrs:{"id":"mockito"}},[_v("Mockito"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mockito","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Mockito facilitates unit testing by mocking dependencies. Mock objects are used to simulated objects that mimic the behaviors of real objects in a controlled way, allowing developers to isolate and test specific components of their code without relying on actual dependencies or external systems. While I have written Stubs in CS2103T, this is my first time using a dedicated mocking library and it has changed my life. I also have used what I have learnt in many job interviews.")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mock")]),_v(" method to initialise the mock object")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("when/then")]),_v(" for you to inject the controlled outcome")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("verify")]),_v(" mainly to check number of invocations")])]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.baeldung.com/mockito-mock-methods"}},[_v("Mockito mock methods")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html"}},[_v("Mockito docs")])])]),_v(" "),_c('h3',{attrs:{"id":"hibernate"}},[_v("Hibernate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TEAMMATES uses Hibernate, an Object-Relational Mapper(ORM). ORM are widely used in software development today as it provides several benefit to developers. While I have used ORMs before, such as Prisma, it is my first time using Hibernate. ORMs simplifies database interactions by allowing developers to work with Java objects directly, abstracting away the complexities of SQL queries. Also, as the name suggest, it allows us to map Java Objects to database table and their relationship. Allowing for easier and seamless operations with the database table. I read up on some Hibernate basics:")]),_v(" "),_c('ul',[_c('li',[_v("JPA (Java Persistence API)")]),_v(" "),_c('li',[_v("Criteria API to make database queries")]),_v(" "),_c('li',[_v("Transactions")]),_v(" "),_c('li',[_v("Batch processing to improve performance, especially in Data Migration")]),_v(" "),_c('li',[_v("Lazy loading to improve performance")]),_v(" "),_c('li',[_v("operations such as evict, persist, merge,")])]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.jboss.org/hibernate/orm/4.0/devguide/en-US/html_single/"}},[_v("Hibernate docs")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.javatpoint.com/hibernate-tutorial"}},[_v("Learn Hibernate Tutorial")])])]),_v(" "),_c('h3',{attrs:{"id":"google-cloud-compute"}},[_v("Google Cloud Compute"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#google-cloud-compute","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I was required to deploy a staging environment for the course entity migration. It was my first time using GCP so I managed to gain familiarity with the vast tools that GCP offers. The guides provided by the seniors was just very descriptive and encouraged me to explore tweaking settings to better fit my use case.")]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://cloud.google.com/docs"}},[_v("GCP docs")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 26 Apr 2024, 9:27:03 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  