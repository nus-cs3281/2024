### Data Migration
Data migration is critical aspect of software development and system maintenance, it involves moving data efficiently while maintaining data integrity, security, and consistency. Having the chance to be involve in data migration really opened my eyes to its general procedure. We were tasked with migrating NoSQL datastore entity to SQL postgresql.

- Efficiency, the longer the script, the longer the application is down
- Validation, what to do if validation fails?
- Order of migration
- Batch processing, batching expensive operation would result in higher efficiency
- Recovery, able to recover after a crash or SIGKILL

### End to End (E2E) testing
E2E tests are a type of software testing that evaluates the entire workflow of an application from start to finish, simulating real user interactions. The purpose of E2E testing is to ensure that all components of an application, including the user interface, backend services, databases, and external integrations, work together correctly to achieve the desired functionality. Here's an explanation of E2E tests and how they are conducted. As E2E tests are very expensive to run, it is crucial that we identify the important workflows and simulate the actions involved by interacting with the UI. You then assert the expected conditions are present after the interaction. Teammates uses Selenium to locate and interact with the elements in the UI. I have to admit, this is my first time doing tests for Frontend much less the whole application. It was cool to see the browser jump around and simulate the required action. I also saw the value in this as I managed to uncover many bugs that was not caught in earlier tests.

References: 
- [Simple Selenium setup](https://ariangarshi.medium.com/getting-started-with-e2e-testing-using-selenium-webdriver-4b1074cae825)
- [Selenium documentation](https://www.selenium.dev/documentation/webdriver/actions_api/)

### Mockito

Mockito facilitates unit testing by mocking dependencies. Mock objects are used to simulated objects that mimic the behaviors of real objects in a controlled way, allowing developers to isolate and test specific components of their code without relying on actual dependencies or external systems. While I have written Stubs in CS2103T, this is my first time using a dedicated mocking library and it has changed my life. I also have used what I have learnt in many job interviews.

- `mock` method to initialise the mock object
- `when/then` for you to inject the controlled outcome
- `verify` mainly to check number of invocations

References:
- [Mockito mock methods](https://www.baeldung.com/mockito-mock-methods)
- [Mockito docs](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html)

### Hibernate

TEAMMATES uses Hibernate, an Object-Relational Mapper(ORM). ORM are widely used in software development today as it provides several benefit to developers. While I have used ORMs before, such as Prisma, it is my first time using Hibernate. ORMs simplifies database interactions by allowing developers to work with Java objects directly, abstracting away the complexities of SQL queries. Also, as the name suggest, it allows us to map Java Objects to database table and their relationship. Allowing for easier and seamless operations with the database table. I read up on some Hibernate basics:

- JPA (Java Persistence API)
- Criteria API to make database queries
- Transactions
- Batch processing to improve performance, especially in Data Migration
- Lazy loading to improve performance
- operations such as evict, persist, merge, 

References:
- [Hibernate docs](https://docs.jboss.org/hibernate/orm/4.0/devguide/en-US/html_single/)
- [Learn Hibernate Tutorial](https://www.javatpoint.com/hibernate-tutorial)


### Google Cloud Compute
I was required to deploy a staging environment for the course entity migration. It was my first time using GCP so I managed to gain familiarity with the vast tools that GCP offers. The guides provided by the seniors was just very descriptive and encouraged me to explore tweaking settings to better fit my use case.

References:
- [GCP docs](https://cloud.google.com/docs)