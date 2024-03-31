
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"cs3282"}},[_v("CS3282"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cs3282","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("(outline:)")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("SQL Injection")]),_v(" "),_c('ul',[_c('li',[_v("Hibernate (HQL) --> vulnerabilities that may result in SQLi")]),_v(" "),_c('li',[_v("Stored procedures / Parameterized queries")])])]),_v(" "),_c('li',[_c('p',[_v("Testing: E2E, integration tests (for new sql actions)")])]),_v(" "),_c('li',[_c('p',[_v("ARF")])])]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"frontend"}},[_v("Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("I have had previous experience working with Angular, so I knew of some basic concepts.\nHowever there are still new things I learned while working on the onboarding task and review PRs:\n    1. **Angular Pipes**:\n        - It is preferred to use pipes over manually transforming the data\n            - To illustrate:\n                ``` html\n                <!-- Function -->\n                <p>\"Hello World\".toUpperCase()</p>\n\n                <!-- Pipe -->\n                <p>{{ Hello World | uppercase }}</p>\n                ```\n            - better performance: as pure pipes only execute their `transform` method when the underlying value changes.\n            - reduce code re-use: pipes can be declared once and used throughout the application.\n\n        - There are 2 different types of pipes\n            - pure pipe: only runs when the underlying value changes.\n            - impure pipe: runs every Digest cycle / in almost every change-detection cycle.\n                - To create an impure pipe, set `pure: false` in the pipe's declaration.\n                ```javascript\n                @Pipe({\n                    name: 'myPipe',\n                    pure : false\n                })\n                ```\n\n            If the input to the pipe is an object with nested fields, if there are any changes to the nested fields, a pure pipe will not detect the change.\n            This can be fixed by creating an impure pipe, but the performance of an impure pipe is significantly worse as `transform` executes a lot more frequently, which is especially worse when input to the pipe is large (eg. a list).\n\n    Resources:\n    - [Pipes: improved performance](https://zmushegh.medium.com/why-use-pipe-instead-of-function-in-angular-507cf972bfb0)\n    - [Pure vs Impure Pipes](https://upmostly.com/angular/understanding-pure-vs-impure-pipes-in-angular)\n")])]),_v(" "),_c('h4',{attrs:{"id":"bootstrap"}},[_v("Bootstrap"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootstrap","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("I had only used pure CSS before this module so this is the first time I worked with a CSS Framework like Bootstrap.\nWhen reviewing PRs on TEAMMATES, I learned about the various global styles Bootstrap provides.\nFor example:\n- Grid system, `col` & `row`: built upon CSS's flexbox architecture; Bootstrap provides functionality to control how the column / row changes.\n    - example: `class=\"col-6 col-lg-4\"`: 50% wide when device specs < 992px (ie. `lg` grid breakpoint) and 1/3 of width on devices specs >= 992px\n    - 6 default grid tiers: `sm`, `md`, `lg`, ...\n    - if no unit/number provided, bootstrap will distribute the space equally (eg.`class=\"col\"`)\n\nIt is preferred to use Bootstrap classes where possible rather than creating our own responsive CSS.\n\nResources:\n- [Bootstrap Docs: Grid System](https://getbootstrap.com/docs/5.3/layout/grid/)\n")])]),_v(" "),_c('h4',{attrs:{"id":"snapshot-testing"}},[_v("Snapshot testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#snapshot-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("I have never used snapshot testing before and only heard of the concept in passing.\nFrom this module, I not only learned about how snapshot testing is done on TEAMMATES (from TEAMMATES' dev docs), but also did a bit of research into how snapshot tests are used to ensure no unexpected changes in the UI.\n")])]),_v(" "),_c('h3',{attrs:{"id":"backend"}},[_v("Backend:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"postgresql-database"}},[_v("PostgreSQL (database)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#postgresql-database","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("For local development on TEAMMATES, Docker creates a running instance of PostgreSQL database.\n")])]),_v(" "),_c('h4',{attrs:{"id":"orm-object-relational-mapping"}},[_v("ORM (Object Relational Mapping)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#orm-object-relational-mapping","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("Before working on the data migration project, I have never worked with an ORM before, or even known of the concept of it.\n\nOver the course of the project, I learned what an ORM is, and how it makes backend development easier by mapping between code written in an OOP language and data in a relational database by simplifying and reducing time wasted on handling data manually.\n\n\nAdditionally, I gained first-hand experience working with the Hibernate ORM.\n")])]),_v(" "),_c('h4',{attrs:{"id":"hibernate-java-orm-framework"}},[_v("Hibernate (Java ORM Framework)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate-java-orm-framework","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("In particular, v9 migration uses Hibernate (an ORM framework for Java environments) for TEAMMATES.\n\nOver the course of the project, I learned some of Hibernate's concepts:\n- states in a Hibernate session (Transient state: not yet attached to a session, Persistent state: associated with a session)\n- **Persistence Context** & cache-memory / caching in Hibernate (including how the first-level cache, second-level cache and managed entities work)\n    - Persistence Context: it is a staging area that sits between the code in TEAMMATES and the PostgreSQL database; the concept is implemented in Hibernate `session`.\n    - Hibernate's `session` manages all the data loaded into it, keeps track of any changes to the data and is responsible for updating the data in the database later.\n    - Managed Entity: a record in the database that's been loaded into a Hibernate session, and is managed by that session (ie. track any change to the entity and updates database accordingly).\n\n- flushing the session (synchronises the objects in memory / cache with the database)\n    - Avoid manually forcing the session to flush\n    - Hibernate has no guarantees of when the sesison will be flushed to\n\n- **Annotations** (Since Hibernate implements JPA specification, Hibernate supports any environment that uses Jakarta Persistance Annotations on top of providing their own Hibernate Annotations.)\n    - Jakarta Persistence Annotations: `@Entity` (specifies a POJO as a JPA entity), `@Id` (specifies a field as the Primary Key), `@Column` (specifies details of a table's column, eg. `nullable`), `@Table` (to change table/relation name)\n        ```java\n        @Entity\n        @Table(name = \"DeadlineExtensions\")\n        class DeadlineExtension {\n            @Id\n            private UUID id;\n        }\n        ```\n    - Jakarta Persistance Mapping Annotations (`@ManyToOne`, `@OneToMany`, `@JoinColumn`) to create relationships between entities.\n        ```java\n        // Bi-directional many-to-one relationship.\n        // 1 feedback session to many deadline extensions.\n        @Entity\n        @Table(name = \"DeadlineExtensions\")\n        class DeadlineExtension {\n            @ManyToOne\n            @JoinColumn(name = \"sessionId\", nullable = false)\n            private FeedbackSession feedbackSession;\n        }\n\n        @Entity\n        @Table(name = \"FeedbackSessions\")\n        class FeedbackSession {\n            @OneToMany(mappedBy = \"feedbackSession\", cascade = CascadeType.REMOVE)\n            @Fetch(FetchMode.JOIN)\n            private List<DeadlineExtension> deadlineExtensions;\n        }\n        ```\n    - Hibernate Annotations (`@UpdateTimestamp`)\n\nResources:\n- [Starting Guide for learning Hibernate](https://www.digitalocean.com/community/tutorials/hibernate-tutorial-for-beginners)\n- [Hibernate: Entity lifecycle](https://www.baeldung.com/hibernate-entity-lifecycle)\n- [Object States in Hibernate](https://www.baeldung.com/hibernate-session-object-states)\n- [Hibernate: Caching](https://docs.jboss.org/hibernate/orm/6.2/userguide/html_single/Hibernate_User_Guide.html#caching)\n- [Hibernate: Flushing the Session](https://docs.jboss.org/hibernate/core/3.3/reference/en/html/objectstate.html#objectstate-flushing)\n")])]),_v(" "),_c('h4',{attrs:{"id":"criteria-api"}},[_v("Criteria API"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#criteria-api","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("Criteria API is used to construct type-safe queries that fetch entities from the database.\nFor the v9 migration, I learned and gained experience with using these queries to fetch entity / entities from the PostgreSQL database.\nSuch complex queries (built using `CriteriaBuilder`, `CriteriaQuery` and `TypedQuery` classes) include:\n- using clauses (`SELECT`, `FROM`, `WHERE`),\n- joining multiple relations (`JOIN`) and\n- conditional conjunctions (`and`, `equal`, `greaterThan`, ...) provided by the API.\n\nExample of a complex query:\n```java\n    // parameters: feedbackSessionId, userId\n\n    CriteriaBuilder cb = HibernateUtil.getCriteriaBuilder();\n    // specifies that the query should return DeadlineExtension object(s)\n    CriteriaQuery<DeadlineExtension> cr = cb.createQuery(DeadlineExtension.class);\n    Root<DeadlineExtension> root = cr.from(DeadlineExtension.class);\n    Join<DeadlineExtension, FeedbackSession> deFsJoin = root.join(\"feedbackSession\");\n    // Joins deadline extension table with User table by deadlineExtension's user field.\n    Join<DeadlineExtension, User> deUserJoin = root.join(\"user\");\n\n    // equivalent to SQL's where clause:\n    // SELECT ... WHERE de.feedbackSessionId = feedbackSessionId AND de.userId = userId\n    cr.select(root).where(cb.and(\n            cb.equal(deFsJoin.get(\"feedbackSessionId\"), feedbackSessionId),\n            cb.equal(deUserJoin.get(\"userId\"), userId)));\n\n    TypedQuery<DeadlineExtension> query = HibernateUtil.createQuery(cr);\n\n    // Streams in the results of query, and find the first or return null if none.\n    return query.getResultStream().findFirst().orElse(null);\n```\n")])]),_v(" "),_c('h4',{attrs:{"id":"docker"}},[_v("Docker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#docker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("Docker provides services that allow us to run processes locally in containers (using processes). I wanted to do more research into Docker and understand more about how it worked when I was working on the onboarding task. This includes learning about the docker commands: `docker-compose` and how hosting and virtualisation is done on Docker.\n\nResources:\n- [Containerization Explained by IBM Technology](https://www.youtube.com/watch?v=0qotVMX-J5s)\n- [Virtualization Explained by IBM Technology](https://www.youtube.com/watch?v=FZR0rG3HKIk&t=64s)\n")])]),_v(" "),_c('h3',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("I had previously learned about the concept of testing and the various types of tests but never had a chance to work extensively with it.\n\nOver the course of the module when working with TEAMMATES, I realised the importance of testing and gained much valuable experience writing test cases (unit and integration tests in particular).\n\nAdditionally, I learned to use the following testing frameworks:\n- **TestNG** (Automation Testing framework)\n    I mainly used TestNG's Annotations to aid in writing unit and integration tests on TEAMMATES.\n    For example:\n    - `@Test`: to specify that the method is a test case.\n    - `@BeforeMethod` and `@AfterMethod`: to specify that the annotated method must be executed before / after all `@Test` methods / test cases in the class.\n    - `@BeforeClass`: to specify that the annotated method must be called before running all test cases in that class.\n- **Mockito** (Mocking Framework)\n    Mockito was introduced in TEAMMATES to make mocking and stubbing in unit tests easier.\n    Mocking in Mockito:\n    - When Mockito creates a mock, the object is completely \"fake\" (completely ); it never executes real invocations of the mocked class.\n\n    I used Mockito to mock classes that the class being tested on has a dependency with, stub method calls (with `when`, `thenReturn`, `thenThrow`, etc) and verify interactions with the mocked class (with `verify` method).\n        ```java\n        MyClass expectedObject = new MyClass(\"id\");\n\n        myMockedClass = mock(MyClass.class);\n        // define the behavior of mocked class: instead of executing the real method, the mocked method only returns the expected object\n        when(myMockedClass.getObject(\"id\")).thenReturn(expectedObject);\n\n        // verify number of calls to stubbed method with mocked class\n        verify(myMockedClass, times(1)).getObject(\"id\");\n        ```\n\n    Additionally, I researched other concepts Mockito provides: `spy` (for partial mocking) and mocking of static methods (`mockStatic`), but never had a chance to work with them.\n    - Spy:\n        - partial mocking is done for Spy; ie. in comparison to mocks which don't execute the stubbed method (\"only fake object exists\"), for spy: some parts will use real method invocations (\"a real object exists and we are spy-ing on it\").\n\n    - Mocking of static methods:\n        - in older versions of Mockito, it's not possible to mock static methods, but with PowerMock (a third-party tool), it is possible in newer versions.\n        - instead of `mock`, use `mockStatic` to create a mock for a static class.\n\n    - `verify`\n        - I initially ran into some issues with `verify` and did more research into the cause;\n            In the Action-layer tests, since the mocked logic object is shared with all action test classes, the mocked object accumulates the count of calls to any of the mocked logic methods across multiple test cases.\n            Work-arounds:\n                1. create the mock whenever a new test case is called (like how it's done for logic and db layer classes) or\n                2. use `clearInvocations` method to clear to reset the invocation counts for a mock, between test cases.\n        - Takeaway: A mock will keep track of all its past invocations.\n\n    - Mocking void methods:\n        - Mockito's default behaviour for void methods: `doNothing` (ie. the mock does nothing, will not execute the real method)\n        - If void method has some complex behaviour: can use `doAnswer` (to define custom behaviour) or invoke the real method (`doCallRealMethod`, but this creates a dependency in unit test case)\n\nResources:\n- [TestNG Annotations](https://www.javatpoint.com/testng-annotations)\n- [Mockito: Spy vs Mock](https://stackoverflow.com/questions/28295625/mockito-spy-vs-mock)\n- [Mocking Static Methods with Mockito](https://www.testim.io/blog/mocking-static-methods-mockito/)\n- [Handling void methods with Mockito](https://www.baeldung.com/mockito-void-methods)\n")])]),_v(" "),_c('h3',{attrs:{"id":"git"}},[_v("Git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("Over the course of the data migration, I learned how to rebase a branch and revert to a past commit.\nAdditionally, I did some research into other git commands used during development like force pushing a branch.\nI think my knowledge and understanding of Git has improved greatly, beyond merging, `git pull`, `git fetch` and `git push`.\n")])]),_v(" "),_c('h4',{attrs:{"id":"github-editor"}},[_v("Github Editor"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-editor","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("A cool tip / trick I learned from my mentors / peers: change \".com\" in the github url to \".dev\" OR pressing \".\" when on a pull request page will open up the web editor for PR, making it very easy to submit PR reviews and review the code.\n")])]),_v(" "),_c('h3',{attrs:{"id":"oss-related"}},[_v("OSS-related"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#oss-related","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"pr-code-reviews"}},[_v("PR / Code reviews"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#pr-code-reviews","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("While reviewing pull requests for other maintainers, I realised there is still much I can learn about Angular, Bootstrap, and even about the codebase (eg. its structure). Hence to be able to give the best review and advice, I did more research into these technologies and concepts before submitting reviews. (Some of this research is in the \"Frontend\" part)\n")])]),_v(" "),_c('h4',{attrs:{"id":"project-management"}},[_v("Project management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-management","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true},[_v("I realised over the course of the module that there are many facets to managing a large open-source project and it extends beyond reviewing PRs for contributors.\nIn particular, I learned how I not only have to ensure the code works, but whether the code written is consistent with the codebase, if there are any better ways to solve the issue and to provide help that guides the contributor and not directly provide the solution.\n")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 31 Mar 2024, 19:21:23 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  