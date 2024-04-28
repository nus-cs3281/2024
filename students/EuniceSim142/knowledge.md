### CS3282
#### SQL Injection (with ORM: Hibernate)
After v9 migration from NoSQL to SQL database, we have to protect the new database from SQL injection attacks. 

While working on this project, we had to evaluate if our backend which uses Hibernate ORM. I have previous experience with running SQLi attacks from a computer security introductory module and so had some knowledge of how to do simple testing for it, but this gave me a great chance to understand how injection attacks on modern servers are tested for and prevented.

However, since our backend uses Hibernate ORM, I had to also research on how malicious attackers will attack a Hibernate backend. Hibernate increases our attack surface, so not only do we have to test for SQLi attacks written vulnerable SQL queries, we also have to test for SQLi attacks on HQL (hibernate query language) as well as attacks on hibernate itself. 

Based on the research conducted, we have decided the following:
1. **SQLi**: Hibernate does us a favour as its Criteria API uses parameterized queries with prepared statements, which isolates the SQL code (which is written by developers) from data (provided by users) without restricting users. We will still write unit test cases (at database layer) to check that passing in a parameter with a SQL injection string fails, but we fortunately do not have to add any additional functionality.
2. **Attacks on Hibernate**: This is when an attacker specifically targets the hibernate architecture / some vulnerability in Hibernate. This is likely a low priority risk -- with how large-scale Hibernate is used, any vulnerability here would urgently be patched by Hibernate developers (we can find these from CVE database). As long as we keep up-to-date on hibernate versions (ie. upgrade if there is a an important update / bug fix for potential attack on hibernate), which our package manager can help with, we should be ok.
3. **HQLi**: Taking advantage of vulnerabilities in the Hibernate query language to execute an injection attack. Conclusion: These attacks requires a VERY advanced level of knowledge about HQLi, which is not the most popular language. Additionally, some attacks shown seem to rely on the developer using unsafe methods (eg. createQuery but with string concatenation of the query). 
- [Video: good understanding of ORM Injection attacks (Very sophisticated attacks on HQLi)](https://www.youtube.com/watch?v=DKEwWy043WI)
- [Source (Summary of HQLi attacks)](https://www.sonarsource.com/blog/exploiting-hibernate-injections/)

From this project and the research we had to do before discussing ways to move forward, I learned a lot about SQL injection attacks as well as some additional information about our hibernate database:
- Most modern applications nowadays have AT LEAST be some minimal level of protection for their database / backend servers. The basic SQLi attacks we learn in university will likely not work in real life in isolation. Often, advanced hackers use SQLi attacks in combination with many other techniques to gain access to a server. This was a great experience to understand how SQLi is foundational knowledge for these attacks and how to build upon it to create actual attacks (eg, to modify to use on ORM servers, tricks to bypass certain validation technqiues).
- Attacks on ORM -- Hibernate Query Language Injection attacks. 
- Parameterized queries and prepared statements (used in Hibernate's Criteria API)
- Hibernate: configured hibernate to print the SQL queries the hibernate will generate and use (simulates how a real attacker may clone our repo and make modifications to local configs to observe the queries the orm will create and use)

#### Testing: Migrating E2E Tests
- E2E Tests: I migrated a few E2E tests for v9 migration: mainly updated the tests to load SQL entities if they have been migrated at that point in v9 development, and for other entities that have not yet migrated, continue using the NoSQL entities. 
- SQL Injection Tests: Added tests at the database layer to test fields which accept long strings with little-to-no validations. Ensure that hibernate does not treat the data provided as SQL code.
- Integration tests: I've previously done this during data migration (modifying or writing new integration test cases), but also added new tests for ARF (Account Request Form).

#### Feature Design
In CS3281, I worked mainly on database migration and had very minimal work on a new feature. Even during the orientation where we technically did work on a feature, it was not merged in and there was very little discussions on the design -- the main objective was to gain an understanding of how the application was structured. 

I gained an excellent idea of how Teammates does Design planning as well as effort estimation and planning for timelines when working on ARF (Account request form):
1. Initial test design: database / API endpoint design, frontend / UI design, test case design, etc.
2. Communication with stakeholders (ie. admin): frequent communication with main user(s) of ARF and integrating their requests / feedback into our design (eg. what should be allowed depending on entity's state, UI preferences, etc)
3. Peer-evaluation: not only for PR reviews, but also evaluating each others' design plans and any additional details we may have missed (eg. following REST principles, fields or entites we may have missed out on, edge cases)
4. Weekly (Scrum?) Meetings: To keep each other up-to-date on our own progress and discuss issues encountered or possible improvements to make (which we sometimes realise when we start development).
5. Communicating when timelines cannot be met
6. Testing in staging / pre-release
7. Release: being present when we start release and respond if fixes are needed and urgent. 

#### Solr Searching
ARF was my first chance working with our search engine, solr and it was an unexpectedly large hurdle. 

1. Configurations & Documentation: This was my main pain point when working on this. The changed we implemented was not significant -- simple adding 2 new fields and updating the id field. However, the documentation for solr was very lacking (only about how to setup the docker container) and when there was issues with inserting items for indexing or even getting the instance up and running, there was very little debugging statements to track the source of the issue -- hence, quite a bit of effort and time was taken to trace the issues (not only for local development, but also for running tests as each environment had its own seperate config file)
However from this, I learned a lot about solr configs (), using solr's GUI () to debug / track the state of the solr instance and using solr in general for insert + indexing, retrieving entries, sorting, etc. 

2. Using solr: 
    - Updating solr's schema (solr.sh) to add 2 new fields
    - Updating solr's fields: initially, solr prepends all id of entries with 'java.util.UUID:' as the field was a UUID object when passed to solr for indexing.
    - Matching with any word in the given string and evaluate the performance cost for this (as the new comments field allows for huge number of words)

Resource:
- [Apache Solr Guide](https://solr.apache.org/guide/solr/latest/getting-started/introduction.html)

---

### Frontend
#### Angular
    I have had previous experience working with Angular, so I knew of some basic concepts.
    However there are still new things I learned while working on the onboarding task and review PRs:
        1. **Angular Pipes**:
            - It is preferred to use pipes over manually transforming the data
                - To illustrate:
                    ``` html
                    <!-- Function -->
                    <p>"Hello World".toUpperCase()</p>

                    <!-- Pipe -->
                    <p>{{ '{{' }} Hello World | uppercase {{ '}}' }}</p>
                    ```
                - better performance: as pure pipes only execute their `transform` method when the underlying value changes.
                - reduce code re-use: pipes can be declared once and used throughout the application.

            - There are 2 different types of pipes
                - pure pipe: only runs when the underlying value changes.
                - impure pipe: runs every Digest cycle / in almost every change-detection cycle.
                    - To create an impure pipe, set `pure: false` in the pipe's declaration.
                    ```javascript
                    @Pipe({
                        name: 'myPipe',
                        pure : false
                    })
                    ```

                If the input to the pipe is an object with nested fields, if there are any changes to the nested fields, a pure pipe will not detect the change.
                This can be fixed by creating an impure pipe, but the performance of an impure pipe is significantly worse as `transform` executes a lot more frequently, which is especially worse when input to the pipe is large (eg. a list).

        Resources:
        - [Pipes: improved performance](https://zmushegh.medium.com/why-use-pipe-instead-of-function-in-angular-507cf972bfb0)
        - [Pure vs Impure Pipes](https://upmostly.com/angular/understanding-pure-vs-impure-pipes-in-angular)

#### Bootstrap
	I had only used pure CSS before this module so this is the first time I worked with a CSS Framework like Bootstrap.
    When reviewing PRs on TEAMMATES, I learned about the various global styles Bootstrap provides.
    For example:
    - Grid system, `col` & `row`: built upon CSS's flexbox architecture; Bootstrap provides functionality to control how the column / row changes.
        - example: `class="col-6 col-lg-4"`: 50% wide when device specs < 992px (ie. `lg` grid breakpoint) and 1/3 of width on devices specs >= 992px
        - 6 default grid tiers: `sm`, `md`, `lg`, ...
        - if no unit/number provided, bootstrap will distribute the space equally (eg.`class="col"`)

    It is preferred to use Bootstrap classes where possible rather than creating our own responsive CSS.

    Resources:
    - [Bootstrap Docs: Grid System](https://getbootstrap.com/docs/5.3/layout/grid/)

#### Snapshot testing
	I have never used snapshot testing before and only heard of the concept in passing.
	From this module, I not only learned about how snapshot testing is done on TEAMMATES (from TEAMMATES' dev docs), but also did a bit of research into how snapshot tests are used to ensure no unexpected changes in the UI.

### Backend:
#### PostgreSQL (database)
	For local development on TEAMMATES, Docker creates a running instance of PostgreSQL database.

#### ORM (Object Relational Mapping)
	Before working on the data migration project, I have never worked with an ORM before, or even known of the concept of it.

	Over the course of the project, I learned what an ORM is, and how it makes backend development easier by mapping between code written in an OOP language and data in a relational database by simplifying and reducing time wasted on handling data manually.


    Additionally, I gained first-hand experience working with the Hibernate ORM.

#### Hibernate (Java ORM Framework)
	In particular, v9 migration uses Hibernate (an ORM framework for Java environments) for TEAMMATES.

	Over the course of the project, I learned some of Hibernate's concepts:
    - states in a Hibernate session (Transient state: not yet attached to a session, Persistent state: associated with a session)
	- **Persistence Context** & cache-memory / caching in Hibernate (including how the first-level cache, second-level cache and managed entities work)
        - Persistence Context: it is a staging area that sits between the code in TEAMMATES and the PostgreSQL database; the concept is implemented in Hibernate `session`.
        - Hibernate's `session` manages all the data loaded into it, keeps track of any changes to the data and is responsible for updating the data in the database later.
        - Managed Entity: a record in the database that's been loaded into a Hibernate session, and is managed by that session (ie. track any change to the entity and updates database accordingly).

	- flushing the session (synchronises the objects in memory / cache with the database)
        - Avoid manually forcing the session to flush
        - Hibernate has no guarantees of when the sesison will be flushed to

	- **Annotations** (Since Hibernate implements JPA specification, Hibernate supports any environment that uses Jakarta Persistance Annotations on top of providing their own Hibernate Annotations.)
        - Jakarta Persistence Annotations: `@Entity` (specifies a POJO as a JPA entity), `@Id` (specifies a field as the Primary Key), `@Column` (specifies details of a table's column, eg. `nullable`), `@Table` (to change table/relation name)
            ```java
            @Entity
            @Table(name = "DeadlineExtensions")
            class DeadlineExtension {
                @Id
                private UUID id;
            }
            ```
        - Jakarta Persistance Mapping Annotations (`@ManyToOne`, `@OneToMany`, `@JoinColumn`) to create relationships between entities.
            ```java
            // Bi-directional many-to-one relationship.
            // 1 feedback session to many deadline extensions.
            @Entity
            @Table(name = "DeadlineExtensions")
            class DeadlineExtension {
                @ManyToOne
                @JoinColumn(name = "sessionId", nullable = false)
                private FeedbackSession feedbackSession;
            }

            @Entity
            @Table(name = "FeedbackSessions")
            class FeedbackSession {
                @OneToMany(mappedBy = "feedbackSession", cascade = CascadeType.REMOVE)
                @Fetch(FetchMode.JOIN)
                private List<DeadlineExtension> deadlineExtensions;
            }
            ```
        - Hibernate Annotations (`@UpdateTimestamp`)

    Resources:
    - [Starting Guide for learning Hibernate](https://www.digitalocean.com/community/tutorials/hibernate-tutorial-for-beginners)
    - [Hibernate: Entity lifecycle](https://www.baeldung.com/hibernate-entity-lifecycle)
    - [Object States in Hibernate](https://www.baeldung.com/hibernate-session-object-states)
    - [Hibernate: Caching](https://docs.jboss.org/hibernate/orm/6.2/userguide/html_single/Hibernate_User_Guide.html#caching)
    - [Hibernate: Flushing the Session](https://docs.jboss.org/hibernate/core/3.3/reference/en/html/objectstate.html#objectstate-flushing)

#### Criteria API
	Criteria API is used to construct type-safe queries that fetch entities from the database.
	For the v9 migration, I learned and gained experience with using these queries to fetch entity / entities from the PostgreSQL database.
    Such complex queries (built using `CriteriaBuilder`, `CriteriaQuery` and `TypedQuery` classes) include:
    - using clauses (`SELECT`, `FROM`, `WHERE`),
    - joining multiple relations (`JOIN`) and
    - conditional conjunctions (`and`, `equal`, `greaterThan`, ...) provided by the API.

    Example of a complex query:
    ```java
        // parameters: feedbackSessionId, userId

        CriteriaBuilder cb = HibernateUtil.getCriteriaBuilder();
        // specifies that the query should return DeadlineExtension object(s)
        CriteriaQuery<DeadlineExtension> cr = cb.createQuery(DeadlineExtension.class);
        Root<DeadlineExtension> root = cr.from(DeadlineExtension.class);
        Join<DeadlineExtension, FeedbackSession> deFsJoin = root.join("feedbackSession");
        // Joins deadline extension table with User table by deadlineExtension's user field.
        Join<DeadlineExtension, User> deUserJoin = root.join("user");

        // equivalent to SQL's where clause:
        // SELECT ... WHERE de.feedbackSessionId = feedbackSessionId AND de.userId = userId
        cr.select(root).where(cb.and(
                cb.equal(deFsJoin.get("feedbackSessionId"), feedbackSessionId),
                cb.equal(deUserJoin.get("userId"), userId)));

        TypedQuery<DeadlineExtension> query = HibernateUtil.createQuery(cr);

        // Streams in the results of query, and find the first or return null if none.
        return query.getResultStream().findFirst().orElse(null);
    ```

#### Docker
    Docker provides services that allow us to run processes locally in containers (using processes). I wanted to do more research into Docker and understand more about how it worked when I was working on the onboarding task. This includes learning about the docker commands: `docker-compose` and how hosting and virtualisation is done on Docker.

    Resources:
    - [Containerization Explained by IBM Technology](https://www.youtube.com/watch?v=0qotVMX-J5s)
    - [Virtualization Explained by IBM Technology](https://www.youtube.com/watch?v=FZR0rG3HKIk&t=64s)

### Testing
    I had previously learned about the concept of testing and the various types of tests but never had a chance to work extensively with it.

    Over the course of the module when working with TEAMMATES, I realised the importance of testing and gained much valuable experience writing test cases (unit and integration tests in particular).

    Additionally, I learned to use the following testing frameworks:
    - **TestNG** (Automation Testing framework)
        I mainly used TestNG's Annotations to aid in writing unit and integration tests on TEAMMATES.
        For example:
        - `@Test`: to specify that the method is a test case.
        - `@BeforeMethod` and `@AfterMethod`: to specify that the annotated method must be executed before / after all `@Test` methods / test cases in the class.
        - `@BeforeClass`: to specify that the annotated method must be called before running all test cases in that class.
    - **Mockito** (Mocking Framework)
        Mockito was introduced in TEAMMATES to make mocking and stubbing in unit tests easier.
        Mocking in Mockito:
        - When Mockito creates a mock, the object is completely "fake" (completely ); it never executes real invocations of the mocked class.

        I used Mockito to mock classes that the class being tested on has a dependency with, stub method calls (with `when`, `thenReturn`, `thenThrow`, etc) and verify interactions with the mocked class (with `verify` method).
            ```java
            MyClass expectedObject = new MyClass("id");

            myMockedClass = mock(MyClass.class);
            // define the behavior of mocked class: instead of executing the real method, the mocked method only returns the expected object
            when(myMockedClass.getObject("id")).thenReturn(expectedObject);

            // verify number of calls to stubbed method with mocked class
            verify(myMockedClass, times(1)).getObject("id");
            ```

        Additionally, I researched other concepts Mockito provides: `spy` (for partial mocking) and mocking of static methods (`mockStatic`), but never had a chance to work with them.
        - Spy:
            - partial mocking is done for Spy; ie. in comparison to mocks which don't execute the stubbed method ("only fake object exists"), for spy: some parts will use real method invocations ("a real object exists and we are spy-ing on it").

        - Mocking of static methods:
            - in older versions of Mockito, it's not possible to mock static methods, but with PowerMock (a third-party tool), it is possible in newer versions.
            - instead of `mock`, use `mockStatic` to create a mock for a static class.

        - `verify`
            - I initially ran into some issues with `verify` and did more research into the cause;
                In the Action-layer tests, since the mocked logic object is shared with all action test classes, the mocked object accumulates the count of calls to any of the mocked logic methods across multiple test cases.
                Work-arounds:
                    1. create the mock whenever a new test case is called (like how it's done for logic and db layer classes) or
                    2. use `clearInvocations` method to clear to reset the invocation counts for a mock, between test cases.
            - Takeaway: A mock will keep track of all its past invocations.

        - Mocking void methods:
            - Mockito's default behaviour for void methods: `doNothing` (ie. the mock does nothing, will not execute the real method)
            - If void method has some complex behaviour: can use `doAnswer` (to define custom behaviour) or invoke the real method (`doCallRealMethod`, but this creates a dependency in unit test case)

    Resources:
    - [TestNG Annotations](https://www.javatpoint.com/testng-annotations)
    - [Mockito: Spy vs Mock](https://stackoverflow.com/questions/28295625/mockito-spy-vs-mock)
    - [Mocking Static Methods with Mockito](https://www.testim.io/blog/mocking-static-methods-mockito/)
    - [Handling void methods with Mockito](https://www.baeldung.com/mockito-void-methods)

### Git
    Over the course of the data migration, I learned how to rebase a branch and revert to a past commit.
    Additionally, I did some research into other git commands used during development like force pushing a branch.
    I think my knowledge and understanding of Git has improved greatly, beyond merging, `git pull`, `git fetch` and `git push`.

#### Github Editor
    A cool tip / trick I learned from my mentors / peers: change ".com" in the github url to ".dev" OR pressing "." when on a pull request page will open up the web editor for PR, making it very easy to submit PR reviews and review the code.

### OSS-related
#### PR / Code reviews
	While reviewing pull requests for other maintainers, I realised there is still much I can learn about Angular, Bootstrap, and even about the codebase (eg. its structure). Hence to be able to give the best review and advice, I did more research into these technologies and concepts before submitting reviews. (Some of this research is in the "Frontend" part)

#### Project management
	I realised over the course of the module that there are many facets to managing a large open-source project and it extends beyond reviewing PRs for contributors.
	In particular, I learned how I not only have to ensure the code works, but whether the code written is consistent with the codebase, if there are any better ways to solve the issue and to provide help that guides the contributor and not directly provide the solution.
