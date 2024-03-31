
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"frontend"}},[_v("Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"angular-frontend-framework"}},[_v("Angular (Frontend framework)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular-frontend-framework","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt Angular from having zero prior knowledge as part of CS3281.")]),_v(" "),_c('p',[_v("Having previous experience with React, it is interesting to see the different approaches between frameworks and use the frameworks to implement functionality such as sorting, search etc.\nFor example, Angular splits the CSS, HTML and JS into 3 distinct files while React mixes JS and HTML in a single file for each component.")]),_v(" "),_c('h4',{attrs:{"id":"frontend-optimization-techniques-debouncing-throttling"}},[_v("Frontend optimization techniques (Debouncing, throttling)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend-optimization-techniques-debouncing-throttling","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I also learnt about and implemented some frontend optimization techniques such as deboucing and throttling so that queries to the backend for not made for every input in the search bar.\nCompared to React, Angular has more built in functionality such as debouncing function already in-built into the EventEmitter whereas in React we would have to use 3rd party libraries such as Lodash.")]),_v(" "),_c('h2',{attrs:{"id":"backend"}},[_v("Backend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"presentation-logic-data-layering"}},[_v("Presentation-Logic-Data Layering"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#presentation-logic-data-layering","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt more about writing well abstracted code and in how to structure a backend system by splitting the system into distinct layers for each responsibility. I was also able to discuss of how to improve and abstract responsibilities with my mentors to improve the software architecture of TEAMMATES.")]),_v(" "),_c('p',[_v("Working on TEAMMATES led me to understand and discover more code architecture such as "),_c('a',{attrs:{"href":"https://martinfowler.com/bliki/PresentationDomainDataLayering.html"}},[_v("PresentationDomainDataLayering shared by Martin Fowler")]),_v(".")]),_v(" "),_c('p',[_v("For example, thanks for this code architecture, we are able to substitute out our database layer from Datastore to PostgreSQL with Hibernate without having to make extensive changes to the other layers! Working on TEAMMATES has allowed me to greatly appreciate the benefits of implementing well-designed code architecture and its effects on maintenability of software.")]),_v(" "),_c('h3',{attrs:{"id":"exception-wrapping"}},[_v("Exception wrapping"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exception-wrapping","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt and implemented the practice of exception wrapping (related to the above layering concept) to abstract lower level details from higher level components.")]),_v(" "),_c('p',[_v("For example, I delegated the DB layer be responsible only for database operations. Exceptions thrown during the primitive DB layer operations are wrapped in the logic layer into relevant logic layer exceptions so as to abstract away the details of data access from the rest of the application.")]),_v(" "),_c('p',[_v("I referred to this online guide by "),_c('a',{attrs:{"href":"https://jenkov.com/tutorials/java-exception-handling/exception-wrapping.html"}},[_v("Jenkov on Exception Wrapping")]),_v(".")]),_v(" "),_c('h3',{attrs:{"id":"how-to-ensure-product-stays-live-even-during-migration"}},[_v("How to ensure product stays live even during migration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-to-ensure-product-stays-live-even-during-migration","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Working on a product which serves live users every month, I learnt how we can migrate from the existing GCP Datastore product to PGSQL while still serving actual users (without downtime). This can be done through implementing logic in code to check if the entity has been migrated yet, allowing the code to be able to serve users throughout the migration process.")]),_v(" "),_c('p',[_v("Also, verification of the changes are important, hence a staging environment needs to be used to test and verify before redirecting traffic to the newly deployed database migrated version of TEAMMATES.")]),_v(" "),_c('h3',{attrs:{"id":"hibernate-orm"}},[_v("Hibernate ORM"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate-orm","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I've learnt how to use Hibernate ORM and understood the layers of abstraction it provides for us. Hibernate helps map entity classes to actual records in a database. Each entity has 2 main states, managed and unmanaged. If changes are made to managed entities in hibernate, they will be flushed at the end of the session and do not need to be explicitly flushed.")]),_v(" "),_c('h4',{attrs:{"id":"debugging-test-case-failures-due-to-hibernate"}},[_v("Debugging test case failures due to Hibernate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#debugging-test-case-failures-due-to-hibernate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The entity states initially added some complexity to updating entities in the database using Hibernate. I realised that the original entities are cached in the persistence context. However, after performing some updates despite first flushing the updates and then fetching them during testing, the joined entities were not found. This led to failing test cases.")]),_v(" "),_c('p',[_v("Upon consultation with my mentors Hieu and Samuel, I realised that this was caused due to only updating relations from 1 side in the Entities which is intentionally set currently (due to circular bidirectional dependencies causing cascade errors).\nThis caused the persistence context to not be updated despite the database being correctly updated.")]),_v(" "),_c('p',[_v("Hence, I learnt and implemented "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HibernateUtil.getSession.clear()")]),_v(" to allow for the managed entity cache to be cleared and hence ensure that the entities are fetched from the updated database.")]),_v(" "),_c('p',[_v("By using flush then clear, this ensures that the entities read transaction caused by clear is after the write transaction caused by flush, hence this results in a view serializable transaction schedule which fixes the test cases.")]),_v(" "),_c('h4',{attrs:{"id":"hibernate-flushing-behavior"}},[_v("Hibernate flushing behavior"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate-flushing-behavior","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Also, I learnt that flushing does not cause the transaction to commit and only orders the SQL statements to be queued for execution.\nHowever, it is not a good practice to force a commit for each transaction as it would negatively affect the performance and hence Hibernate's rationale for not mandating a commit after each flush (commits only occur after a certain number of transactions). "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/12688827/hibernate-not-updating-database-after-flush"}},[_v("Stackoverflow post")]),_v(".")]),_v(" "),_c('h4',{attrs:{"id":"eager-and-lazy-loading-concept"}},[_v("Eager and Lazy loading concept"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#eager-and-lazy-loading-concept","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I've also learnt that in Hibernate, eager loading means that related entities are loaded from the database along with the main entity, while lazy loading means that related entities are only loaded when they are explicitly accessed. Here are some examples:")]),_v(" "),_c('ul',[_c('li',[_v("Eager loading:")])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@Entity\n")]),_c('span',[_v("public class DeadlineExtension {\n")]),_c('span',[_v("    @ManyToOne(fetch = FetchType.EAGER)\n")]),_c('span',[_v("    private FeedbackSession feedbackSession;\n")]),_c('span',[_v("    // ...\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("In this example, the FeedbackSession entity is eagerly loaded along with the DeadlineExtension entity, meaning that whenever a DeadlineExtension is fetched from the database, its FeedbackSession is also fetched.")]),_v(" "),_c('ul',[_c('li',[_v("Lazy loading:")])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@Entity\n")]),_c('span',[_v("public class DeadlineExtension {\n")]),_c('span',[_v("    @ManyToOne(fetch = FetchType.LAZY) // this is the default we are using in TEAMMATES\n")]),_c('span',[_v("    private FeedbackSession feedbackSession;\n")]),_c('span',[_v("    // ...\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("In this example, the FeedbackSession entity is lazily loaded, meaning that it is not fetched from the database until it is explicitly accessed. This can help improve performance by reducing the number of database queries made during the application's lifecycle.")]),_v(" "),_c('h4',{attrs:{"id":"optimizing-queries-with-sql-and-abstracting-sql-with-criteria-api"}},[_v("Optimizing queries with SQL and abstracting SQL with Criteria API"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#optimizing-queries-with-sql-and-abstracting-sql-with-criteria-api","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have also learnt how to use CriteriaAPI to create SQL queries and even write dynamic queries to reduce the number of queries needed to fetch a large number of records based on dynamic selection predicates.")]),_v(" "),_c('p',[_v("For example, using SQL allowed me to optimize some of the previous queries. Instead of making n queries to fetch n records previously, I learnt to use CriteriaAPI which provides an abstraction over SQL to write a dynamic query as follows:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("List<Predicate> predicates = new ArrayList<>();\n")]),_c('span',[_v("        for (String userEmail : userEmails) {\n")]),_c('span',[_v("            predicates.add(cb.equal(instructorRoot.get(\"email\"), userEmail));\n")]),_c('span',[_v("        }\n")]),_c('span',[_v("\n")]),_c('span',[_v("        cr.select(instructorRoot)\n")]),_c('span',[_v("                .where(cb.and(\n")]),_c('span',[_v("                    cb.equal(instructorRoot.get(\"courseId\"), courseId),\n")]),_c('span',[_v("                    cb.or(predicates.toArray(new Predicate[0]))));\n")])])]),_c('p',[_v("As shown, CriteriaAPI allows us to specify a list of predicates as a selection condition for generating dynamic queries, while abstracting and not requiring the programmer to use SQL directly.")]),_v(" "),_c('h2',{attrs:{"id":"general-swe-skills-and-tools"}},[_v("General SWE skills and tools"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-swe-skills-and-tools","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"docker"}},[_v("Docker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#docker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Prior to TEAMMATES, I had used Docker but was not able to fully appreciate its utility. Working with Docker in TEAMMATES allowed me to both learn how to debug and appreciate the utility of container technologies such as Docker in Software development.")]),_v(" "),_c('p',[_v("Several of the benefits and learnings are:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Streamlining developer set up experience across different platforms.\nAs my team and myself were using different computer architectures and OS platforms, Docker's cross platform and run anywhere as long as the docker engine is installed allowed us to share new container configuration such as when we set up PostgreSQL for the migration as part of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker-compose.yml")]),_v(" file. Hence, I realised that Docker is a useful tool for improving the developer experience and makes program set up much simpler.")])]),_v(" "),_c('li',[_c('p',[_v("Debugging with Docker:\nIn order to verify and access PostgreSQL, I learnt that debugging can be done by logging into the container: When using Docker, it is common to run services inside containers. If issues with a service are encountered, I was able to log into the container and debug the service from there. This can be done using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docker exec")]),_v(" command, which allows me to interact with PostgreSQL inside a running container.")])])]),_v(" "),_c('h3',{attrs:{"id":"gradlew"}},[_v("Gradlew"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradlew","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("After bringing up "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/issues/12020"}},[_v("Issue #12020")]),_v(", I reviewed the solution from an open-sourced dev. However, to guide the dev to be able to fix the issue (as seen in the thread), I also learnt more about how gradle is configured and more about jobs. Hence, working on CS3281 allowed me to understand how to build and configure gradlew to run desired jobs such as lint and test.")]),_v(" "),_c('h3',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I've learnt of how to better utilise various tests such as unit and integration tests.")]),_v(" "),_c('h4',{attrs:{"id":"mockito-and-its-importance-for-unit-testing"}},[_v("Mockito and its importance for Unit testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mockito-and-its-importance-for-unit-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I've learnt how to effectively use Mockito to mock lower layer and third party dependencies, use spies to ensure certain methods are invoked etc to isolate a specific unit to be under test.")]),_v(" "),_c('p',[_v("For example, using mocks and spies are essential to isolate the software under test into small specific units.")]),_v(" "),_c('p',[_v("Using Mockito, I was able to mock and perform multiple powerful assertions such as verifying that methods were invoked for a number of times with specific arguments etc.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("verify(<object>, times(<number of times>)).<method>(<argument>);\n")])])]),_c('h4',{attrs:{"id":"importance-of-testing"}},[_v("Importance of testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#importance-of-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("For example, by writing tests for the various FeedbackSession actions I've migrated, I've discovered bugs that were previously undetected and merged into the main branch. For example, since the various entitys' toString() method were invoking each other, it caused a cyclic infinite loop which would have crashed the application if pushed into production.")]),_v(" "),_c('p',[_v("Through unit and integration testing, I also discovered other hard to detect bugs such as incorrect parameter orderings and CriteriaAPI bugs where the wrong key was being referenced and where Join needs to be explicitly indicated first that have been previously merged. This would not have been possible without good testing practice and identifying test cases where finding bugs are most likely.")]),_v(" "),_c('p',[_v("I have learnt how to analyse the written code to find places with higher cyclomatic complexity/complicated logic etc to find places of interest to focus writing test cases for to identify bugs at a higher percentage.")]),_v(" "),_c('h4',{attrs:{"id":"utility-of-static-analyzers-in-detecting-bugs"}},[_v("Utility of static analyzers in detecting bugs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#utility-of-static-analyzers-in-detecting-bugs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Through my CS3281 journey, I also realized how static analyzers such as pmd are not only able to enforce coding standards, but are also very effective in finding where potential bugs are. For example, pmd highlighted areas where null was possible and allowed me to discover and fix several bugs.")]),_v(" "),_c('h4',{attrs:{"id":"architecture-testing-with-archunit"}},[_v("Architecture testing with ArchUnit"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture-testing-with-archunit","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Prior to CS3281, I was unaware of the existence of Architectural tests.")]),_v(" "),_c('p',[_v("I've learnt these tests can be very useful in enforcing the interactions and layering of our software architecture. For example, TEAMMATES does not allow logic classes directly interacting with the UI or the UI interacting directly with the storage classes etc.")]),_v(" "),_c('p',[_v("Using Architectural tests can help us enforce the architecture of our application (eg, n-tier architecture with UI, logic, database).")]),_v(" "),_c('p',[_v("I managed to adapt the existing architectural tests to fit the new requirements where instead of having an atttribute DTO class, we are using the SQL entity class directly to pass data. Hence, I learnt more about architectural testing through writing DescribedPredicates to fit our needs.")]),_v(" "),_c('p',[_v("For example, ArchUnit uses a declarative style of defining the test cases:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("noClasses().that().resideInAPackage(includeSubpackages(LOGIC_PACKAGE))\n")]),_c('span',[_v("                .and().resideOutsideOfPackage(includeSubpackages(LOGIC_CORE_PACKAGE))\n")]),_c('span',[_v("                .should().accessClassesThat(new DescribedPredicate<>(\"\") {\n")]),_c('span',[_v("                    @Override\n")]),_c('span',[_v("                    public boolean apply(JavaClass input) {\n")]),_c('span',[_v("                        return input.getPackageName().startsWith(STORAGE_PACKAGE)\n")]),_c('span',[_v("                                && !input.getPackageName().startsWith(STORAGE_SQL_ENTITY_PACKAGE);\n")]),_c('span',[_v("                    }\n")]),_c('span',[_v("                })\n")]),_c('span',[_v("                .check(forClasses(LOGIC_PACKAGE, STORAGE_PACKAGE));\n")])])]),_c('p',[_v("In the above code, I was able to specify that no classes in the logic package should directly access the previous Google Datastore storage files, but can directly access the new SQL storage files (which is required since we have refactored the codebase to no longer use unnecessary "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Attribute")]),_v(" classes and to use the Hibernate entity directly)")]),_v(" "),_c('h4',{attrs:{"id":"regression-testing"}},[_v("Regression testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#regression-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Throughout my CS3281 journey, I was exposed to and wrote tests for regression to ensure new changes did not break existing code.")]),_v(" "),_c('p',[_v("I've learnt that regression testing is extremely important. Especially when there is collective effort in performing migration work and there are many changes, we need to ensure new changes don't break existing functionality.")]),_v(" "),_c('p',[_v("Also, working on a larger team in CS3281 emphasized this importance, since regressions are usually more likely when there are more developers working on the same code.")]),_v(" "),_c('h3',{attrs:{"id":"oss-project-maintenance"}},[_v("OSS project maintenance"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#oss-project-maintenance","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"working-with-international-devs"}},[_v("Working with international devs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#working-with-international-devs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I gained new experience learning to work with open-sourced devs from across the world. I helped guide and provide technical support and feedback and raised issues.")]),_v(" "),_c('h4',{attrs:{"id":"github-actions-for-automation-devops"}},[_v("Github Actions for automation / DevOps"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions-for-automation-devops","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Also, from TEAMMATES, I have learnt how tools such as Github Actions can be used to maintain a large-scale project, such as using the OSS-bot for regular maintenance updates and suggestions.")]),_v(" "),_c('h3',{attrs:{"id":"swe-project-management-best-practices"}},[_v("SWE/Project management best practices"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#swe-project-management-best-practices","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"splitting-prs"}},[_v("Splitting PRs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#splitting-prs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt of the importance of splitting PRs across smaller PRs so reviewers could review code easier.\nAs a reviewer and someone writing PRs, I've grown across the weeks as shown by splitting the PRs into smaller PRs for easier reviews. Though this might seem like a small tweak, I believe that my experience in CS3281 has made me better as a team player and software engineer.")]),_v(" "),_c('h4',{attrs:{"id":"communication-skills"}},[_v("Communication skills"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#communication-skills","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt of the importance of keeping the entire team updated with what each member is doing and the importance of sprint planning and standup meetings. For example, having regularly procedures for updates allows the team to better understand what everyone is doing and prevents potential duplicate/missing work. During CS3282, I hope to recommend and practice having standup meetings with my teammates.")]),_v(" "),_c('h4',{attrs:{"id":"swe-practices"}},[_v("SWE practices"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#swe-practices","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt some SWE practices and proposed changes to make the code quality better.\nFor example, I discussed with my mentors of best practices and refactored functions that existed solely to throw an exception vs returning a boolean. I learnt and discussed different SWE ideas and did research such as "),_c('a',{attrs:{"href":"https://codereview.stackexchange.com/questions/11724/is-it-better-practice-to-have-void-method-throw-an-exception-or-to-have-the-meth"}},[_v("considering which SWE practice is best")]),_v(".")]),_v(" "),_c('h2',{attrs:{"id":"improving-my-fluency-with-using-swe-tooling"}},[_v("Improving my fluency with using SWE tooling"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#improving-my-fluency-with-using-swe-tooling","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"debugger"}},[_v("Debugger"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#debugger","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("From CS3281, I've discovered and faced multiple bugs during my implementation journey.")]),_v(" "),_c('p',[_v("I've managed to use the debugger extensively, stepping in/out and over lines of code and setting breakpoints and monitoring variables. For example, when implementing "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12360"}},[_v("PR #12360")]),_v(", I managed to discover that certain conditionals were incorrect by monitoring the number of DeadlineExtensions in each map/list and correcting the conditionals using the debugger.")]),_v(" "),_c('h3',{attrs:{"id":"shortcuts"}},[_v("Shortcuts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#shortcuts","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Also, I've learnt many shortcuts to improve my developer workflow.")]),_v(" "),_c('h4',{attrs:{"id":"vsc-shortcuts"}},[_v("VSC shortcuts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vsc-shortcuts","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Ctrl + P for file search")]),_v(" "),_c('li',[_v("opt + click for multi-cursor etc")]),_v(" "),_c('li',[_v("And many more")])]),_v(" "),_c('h4',{attrs:{"id":"terminal-and-keyboard-shortcuts"}},[_v("Terminal and keyboard shortcuts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#terminal-and-keyboard-shortcuts","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("To delete words and navigate quickly (opt + backspace, opt + arrow keys)")]),_v(" "),_c('li',[_v("Deleting entire sentences (alt + u)")])]),_v(" "),_c('h4',{attrs:{"id":"github-s-editor"}},[_v("Github's editor"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-s-editor","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Can be accessed by changing .com to .dev or entering the . character on the keyboard. This has been very useful for comparing files between branches and reviewing code.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 31 Mar 2024, 15:51:04 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  