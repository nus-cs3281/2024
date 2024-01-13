## Frontend
### Angular (Frontend framework)

I learnt Angular from having zero prior knowledge as part of CS3281.

Having previous experience with React, it is interesting to see the different approaches between frameworks and use the frameworks to implement functionality such as sorting, search etc.
For example, Angular splits the CSS, HTML and JS into 3 distinct files while React mixes JS and HTML in a single file for each component.

#### Frontend optimization techniques (Debouncing, throttling)

I also learnt about and implemented some frontend optimization techniques such as deboucing and throttling so that queries to the backend for not made for every input in the search bar.
Compared to React, Angular has more built in functionality such as debouncing function already in-built into the EventEmitter whereas in React we would have to use 3rd party libraries such as Lodash.

## Backend

### Presentation-Logic-Data Layering

I learnt more about writing well abstracted code and in how to structure a backend system by splitting the system into distinct layers for each responsibility. I was also able to discuss of how to improve and abstract responsibilities with my mentors to improve the software architecture of TEAMMATES.

Working on TEAMMATES led me to understand and discover more code architecture such as [PresentationDomainDataLayering shared by Martin Fowler](https://martinfowler.com/bliki/PresentationDomainDataLayering.html).

For example, thanks for this code architecture, we are able to substitute out our database layer from Datastore to PostgreSQL with Hibernate without having to make extensive changes to the other layers! Working on TEAMMATES has allowed me to greatly appreciate the benefits of implementing well-designed code architecture and its effects on maintenability of software.

### Exception wrapping

I learnt and implemented the practice of exception wrapping (related to the above layering concept) to abstract lower level details from higher level components.

For example, I delegated the DB layer be responsible only for database operations. Exceptions thrown during the primitive DB layer operations are wrapped in the logic layer into relevant logic layer exceptions so as to abstract away the details of data access from the rest of the application.

I referred to this online guide by [Jenkov on Exception Wrapping](https://jenkov.com/tutorials/java-exception-handling/exception-wrapping.html).

### How to ensure product stays live even during migration

Working on a product which serves live users every month, I learnt how we can migrate from the existing GCP Datastore product to PGSQL while still serving actual users (without downtime). This can be done through implementing logic in code to check if the entity has been migrated yet, allowing the code to be able to serve users throughout the migration process.

Also, verification of the changes are important, hence a staging environment needs to be used to test and verify before redirecting traffic to the newly deployed database migrated version of TEAMMATES.

### Hibernate ORM

I've learnt how to use Hibernate ORM and understood the layers of abstraction it provides for us. Hibernate helps map entity classes to actual records in a database. Each entity has 2 main states, managed and unmanaged. If changes are made to managed entities in hibernate, they will be flushed at the end of the session and do not need to be explicitly flushed.

#### Debugging test case failures due to Hibernate

The entity states initially added some complexity to updating entities in the database using Hibernate. I realised that the original entities are cached in the persistence context. However, after performing some updates despite first flushing the updates and then fetching them during testing, the joined entities were not found. This led to failing test cases.

Upon consultation with my mentors Hieu and Samuel, I realised that this was caused due to only updating relations from 1 side in the Entities which is intentionally set currently (due to circular bidirectional dependencies causing cascade errors).
This caused the persistence context to not be updated despite the database being correctly updated.

Hence, I learnt and implemented `HibernateUtil.getSession.clear()` to allow for the managed entity cache to be cleared and hence ensure that the entities are fetched from the updated database.

By using flush then clear, this ensures that the entities read transaction caused by clear is after the write transaction caused by flush, hence this results in a view serializable transaction schedule which fixes the test cases.

#### Hibernate flushing behavior

Also, I learnt that flushing does not cause the transaction to commit and only orders the SQL statements to be queued for execution.
However, it is not a good practice to force a commit for each transaction as it would negatively affect the performance and hence Hibernate's rationale for not mandating a commit after each flush (commits only occur after a certain number of transactions). [Stackoverflow post](https://stackoverflow.com/questions/12688827/hibernate-not-updating-database-after-flush).

#### Eager and Lazy loading concept

I've also learnt that in Hibernate, eager loading means that related entities are loaded from the database along with the main entity, while lazy loading means that related entities are only loaded when they are explicitly accessed. Here are some examples:

* Eager loading:

```
@Entity
public class DeadlineExtension {
    @ManyToOne(fetch = FetchType.EAGER)
    private FeedbackSession feedbackSession;
    // ...
}
```
In this example, the FeedbackSession entity is eagerly loaded along with the DeadlineExtension entity, meaning that whenever a DeadlineExtension is fetched from the database, its FeedbackSession is also fetched.

* Lazy loading:

```
@Entity
public class DeadlineExtension {
    @ManyToOne(fetch = FetchType.LAZY) // this is the default we are using in TEAMMATES
    private FeedbackSession feedbackSession;
    // ...
}
```

In this example, the FeedbackSession entity is lazily loaded, meaning that it is not fetched from the database until it is explicitly accessed. This can help improve performance by reducing the number of database queries made during the application's lifecycle.

#### Optimizing queries with SQL and abstracting SQL with Criteria API

I have also learnt how to use CriteriaAPI to create SQL queries and even write dynamic queries to reduce the number of queries needed to fetch a large number of records based on dynamic selection predicates.

For example, using SQL allowed me to optimize some of the previous queries. Instead of making n queries to fetch n records previously, I learnt to use CriteriaAPI which provides an abstraction over SQL to write a dynamic query as follows:

```
List<Predicate> predicates = new ArrayList<>();
        for (String userEmail : userEmails) {
            predicates.add(cb.equal(instructorRoot.get("email"), userEmail));
        }

        cr.select(instructorRoot)
                .where(cb.and(
                    cb.equal(instructorRoot.get("courseId"), courseId),
                    cb.or(predicates.toArray(new Predicate[0]))));
```
As shown, CriteriaAPI allows us to specify a list of predicates as a selection condition for generating dynamic queries, while abstracting and not requiring the programmer to use SQL directly.

## General SWE skills and tools

### Docker

Prior to TEAMMATES, I had used Docker but was not able to fully appreciate its utility. Working with Docker in TEAMMATES allowed me to both learn how to debug and appreciate the utility of container technologies such as Docker in Software development.

Several of the benefits and learnings are:
- Streamlining developer set up experience across different platforms.
    As my team and myself were using different computer architectures and OS platforms, Docker's cross platform and run anywhere as long as the docker engine is installed allowed us to share new container configuration such as when we set up PostgreSQL for the migration as part of the `docker-compose.yml` file. Hence, I realised that Docker is a useful tool for improving the developer experience and makes program set up much simpler.

- Debugging with Docker:
    In order to verify and access PostgreSQL, I learnt that debugging can be done by logging into the container: When using Docker, it is common to run services inside containers. If issues with a service are encountered, I was able to log into the container and debug the service from there. This can be done using the `docker exec` command, which allows me to interact with PostgreSQL inside a running container.

### Gradlew

After bringing up [Issue #12020](https://github.com/TEAMMATES/teammates/issues/12020), I reviewed the solution from an open-sourced dev. However, to guide the dev to be able to fix the issue (as seen in the thread), I also learnt more about how gradle is configured and more about jobs. Hence, working on CS3281 allowed me to understand how to build and configure gradlew to run desired jobs such as lint and test.

### Testing

I've learnt of how to better utilise various tests such as unit and integration tests.

#### Mockito and its importance for Unit testing

I've learnt how to effectively use Mockito to mock lower layer and third party dependencies, use spies to ensure certain methods are invoked etc to isolate a specific unit to be under test.

For example, using mocks and spies are essential to isolate the software under test into small specific units.

Using Mockito, I was able to mock and perform multiple powerful assertions such as verifying that methods were invoked for a number of times with specific arguments etc.

```
verify(<object>, times(<number of times>)).<method>(<argument>);
 ```

#### Importance of testing

For example, by writing tests for the various FeedbackSession actions I've migrated, I've discovered bugs that were previously undetected and merged into the main branch. For example, since the various entitys' toString() method were invoking each other, it caused a cyclic infinite loop which would have crashed the application if pushed into production.

Through unit and integration testing, I also discovered other hard to detect bugs such as incorrect parameter orderings and CriteriaAPI bugs where the wrong key was being referenced and where Join needs to be explicitly indicated first that have been previously merged. This would not have been possible without good testing practice and identifying test cases where finding bugs are most likely.

I have learnt how to analyse the written code to find places with higher cyclomatic complexity/complicated logic etc to find places of interest to focus writing test cases for to identify bugs at a higher percentage.

#### Utility of static analyzers in detecting bugs

Through my CS3281 journey, I also realized how static analyzers such as pmd are not only able to enforce coding standards, but are also very effective in finding where potential bugs are. For example, pmd highlighted areas where null was possible and allowed me to discover and fix several bugs.

#### Architecture testing with ArchUnit

Prior to CS3281, I was unaware of the existence of Architectural tests.

I've learnt these tests can be very useful in enforcing the interactions and layering of our software architecture. For example, TEAMMATES does not allow logic classes directly interacting with the UI or the UI interacting directly with the storage classes etc.

Using Architectural tests can help us enforce the architecture of our application (eg, n-tier architecture with UI, logic, database).

I managed to adapt the existing architectural tests to fit the new requirements where instead of having an atttribute DTO class, we are using the SQL entity class directly to pass data. Hence, I learnt more about architectural testing through writing DescribedPredicates to fit our needs.

For example, ArchUnit uses a declarative style of defining the test cases:

```
noClasses().that().resideInAPackage(includeSubpackages(LOGIC_PACKAGE))
                .and().resideOutsideOfPackage(includeSubpackages(LOGIC_CORE_PACKAGE))
                .should().accessClassesThat(new DescribedPredicate<>("") {
                    @Override
                    public boolean apply(JavaClass input) {
                        return input.getPackageName().startsWith(STORAGE_PACKAGE)
                                && !input.getPackageName().startsWith(STORAGE_SQL_ENTITY_PACKAGE);
                    }
                })
                .check(forClasses(LOGIC_PACKAGE, STORAGE_PACKAGE));
```
In the above code, I was able to specify that no classes in the logic package should directly access the previous Google Datastore storage files, but can directly access the new SQL storage files (which is required since we have refactored the codebase to no longer use unnecessary `Attribute` classes and to use the Hibernate entity directly)

#### Regression testing

Throughout my CS3281 journey, I was exposed to and wrote tests for regression to ensure new changes did not break existing code.

I've learnt that regression testing is extremely important. Especially when there is collective effort in performing migration work and there are many changes, we need to ensure new changes don't break existing functionality.

Also, working on a larger team in CS3281 emphasized this importance, since regressions are usually more likely when there are more developers working on the same code.

### OSS project maintenance

#### Working with international devs

I gained new experience learning to work with open-sourced devs from across the world. I helped guide and provide technical support and feedback and raised issues.

#### Github Actions for automation / DevOps

Also, from TEAMMATES, I have learnt how tools such as Github Actions can be used to maintain a large-scale project, such as using the OSS-bot for regular maintenance updates and suggestions.

### SWE/Project management best practices

#### Splitting PRs

I learnt of the importance of splitting PRs across smaller PRs so reviewers could review code easier.
As a reviewer and someone writing PRs, I've grown across the weeks as shown by splitting the PRs into smaller PRs for easier reviews. Though this might seem like a small tweak, I believe that my experience in CS3281 has made me better as a team player and software engineer.

#### Communication skills

I learnt of the importance of keeping the entire team updated with what each member is doing and the importance of sprint planning and standup meetings. For example, having regularly procedures for updates allows the team to better understand what everyone is doing and prevents potential duplicate/missing work. During CS3282, I hope to recommend and practice having standup meetings with my teammates.

#### SWE practices

I learnt some SWE practices and proposed changes to make the code quality better.
For example, I discussed with my mentors of best practices and refactored functions that existed solely to throw an exception vs returning a boolean. I learnt and discussed different SWE ideas and did research such as [considering which SWE practice is best](https://codereview.stackexchange.com/questions/11724/is-it-better-practice-to-have-void-method-throw-an-exception-or-to-have-the-meth).

## Improving my fluency with using SWE tooling
### Debugger

From CS3281, I've discovered and faced multiple bugs during my implementation journey.

I've managed to use the debugger extensively, stepping in/out and over lines of code and setting breakpoints and monitoring variables. For example, when implementing [PR #12360](https://github.com/TEAMMATES/teammates/pull/12360), I managed to discover that certain conditionals were incorrect by monitoring the number of DeadlineExtensions in each map/list and correcting the conditionals using the debugger.

### Shortcuts
Also, I've learnt many shortcuts to improve my developer workflow.
#### VSC shortcuts

* Ctrl + P for file search
* opt + click for multi-cursor etc
* And many more

#### Terminal and keyboard shortcuts

* To delete words and navigate quickly (opt + backspace, opt + arrow keys)
* Deleting entire sentences (alt + u)

#### Github's editor
Can be accessed by changing .com to .dev or entering the . character on the keyboard. This has been very useful for comparing files between branches and reviewing code.