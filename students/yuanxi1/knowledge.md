## End to end testing with Selenium
### Purpose of e2e tests
 E2E testing complements other form of tests by ensuring that the entire system works as intended and meets the user's requirements and expectations.
 E2E testing involves testing the application in a production-like environment or as close to it as possible. The complete application is tested from start to finish and it ensures that the application functions correctly from the user's perspective, including all the steps involved in completing a task or workflow.

### How to write E2E tests
Page Object Pattern is used in TEAMMATES to facilitate UI changes. 
In this pattern, a class is created for each page . It helps separate the details of the interactions with the webpage with the rest of the test. Page Object provides an interface for the tests to interact with the page's UI without having to directly manipulate the HTML elements.

Resources: 
- Page Object Pattern: https://martinfowler.com/bliki/PageObject.html
- Examples of e2e test with Selenium: https://medium.com/@iamfaisalkhatri/end-to-end-testing-using-selenium-webdriver-and-java-4ff8667716ca
- Selenium documentation: https://www.selenium.dev/documentation/webdriver/actions_api/


## Unit tests

### Mocking
Mock objects can isolate the component being tested by replacing actual dependencies with mocked ones that simulates the behaviour of the real ones. In this way, the unit test can focus on testing the function of a single component without involving the entire system. 

### Using Mockito
We can use the Mockito framework in Junit tests.
Use the `mock()` method to create a mocked object of some class. Once created, a mock will remember all interactions. Then we can selectively verify whatever interactions we are interested in.

We can verify the number of invocations of a method using `verify()`. For example:
```
verify(accountsDb, times(1)).getAccountByGoogleId(googleId);
```
We can force a method to return a specific value with **stubbing**. For example:
 ```
 when(accountsDb.getAccountByGoogleId(googleId)).thenReturn(account);
 ```

 Resources:
 - Mockito documentation: https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html

### Snapshot testing with Jest
Snapshot tests are a very useful tool when we want to make sure the UI does not change unexpectedly. Hence, when changing the UI, we need to regenerate the snapshots and commit them.

Generated snapshots do not include platform specific or other non-deterministic data. We can use mock or spy on calls to the class constructor for ES6 class and all of its methods using Jest.

Resourses: 
- JestJs documentation: https://jestjs.io/docs/snapshot-testing
 
## Hibernate ORM
**Entity lifecycle**\
Hibernate can help manage objects and automatically propagate the changes to database. Hibernate entity lifecycle state explains how the entity is related to a persistence context.
- Transient: a newly created object (such as created by calling the constructor) is not associated with a Hibernate session. To save it to the database, `persist` need to be called to
- Persistent: entity has been associated with a database table row.Any change made to such entity is going to be detected and propagated to the database (during the Session flush-time) 
- Detached: A detached entity is not tracked anymore by any persistence context
- Removed: An entity is in a deleted (removed) state if Session.delete(entity) has been called, and the Session has marked the entity for deletion.

**JPA & Hibernate Annotations**\
Annotations are used to provide the metadata for the Object and Relational Table mapping directly in the Java source code. Annotations such as `@Entity`, `@Column`, `@Table`, and `@OneToMany`,  can define the structure of the database schema. 

They are also important for enhancing performance. For example, a join column if not specified with a lazy fetch strategy will cause unnecessary fetch if the data in the join column are not often needed. (Similar problems were presented during data migration  some annotations had to be changed in the migration branch). 


Resources:
- [Hibernate 6 documentation](https://docs.jboss.org/hibernate/orm/6.5/introduction/html_single/Hibernate_Introduction.html#entities-summary)
- [A beginner’s guide to entity state transitions with JPA and Hibernate](https://vladmihalcea.com/a-beginners-guide-to-jpa-hibernate-entity-state-transitions/)
- [Hibernate Entity Lifecycle](https://www.baeldung.com/hibernate-entity-lifecycle)


## Data Migration with Technology Integration

- #### Optimization
    Techniques such as batch processing can minimize overhead and maximize throughput during data transfer. Avoiding unnecessary joins and fetches are also important. For example, [`EntityManager.getReference`](https://docs.oracle.com/javaee/7/api/javax/persistence/EntityManager.html#getReference-java.lang.Class-java.lang.Object-) can be used to lazily fetch the foreign key referenced object. 
- #### Dependency Preservation
    topological ordering of the tables being migrated should be established and migrate entities in order.
- #### Patchable Script Design
  large-scale data migration needs to be patchable as it needs to be executed multiple times to minimise downtime.

- #### Testing with Staging
    the initial step involved setting up a Google Cloud SQL instance for testing to provide insights into the real-time performance and scalability.

Resources:
- [Teammates staging server set up guide](https://github.com/TEAMMATES/teammates-ops/blob/master/platform-guide.md)
- [Hibernate 6 documentation](https://docs.jboss.org/hibernate/orm/6.5/introduction/html_single/Hibernate_Introduction.html#entities-summary)
