### Datastore

Datastore is a NoSQL document database. While it provides scalability and performance advantages, it falls short when dealing with complex queries. While writing migration scripts, I read up on the following from the Datastore documentation:

- property indexes and composite indexes
- optimization on multiple field queries
- cursor paging

References:
- [Datastore docs](https://cloud.google.com/datastore/docs)

### Hibernate

TEAMMATES uses Hibernate, an Object-Relational Mapping framework which allows us to interact with the database without writing SQL commands. It abstracts these low-level database interactions, enabling developers to work with high-level objects and queries instead. I read up on some Hibernate basics:

- JPA persistence context / Hibernate session
- entity states: transient, persistent, detached
- entity operations: persist, merge, evict
- criteria queries

References:
- [Hibernate docs](https://docs.jboss.org/hibernate/orm/4.0/devguide/en-US/html_single/)
- [Article on Hibernate entity operations](https://www.baeldung.com/hibernate-save-persist-update-merge-saveorupdate)

### Mockito

Mockito facilitates unit testing by reducing the setup needed to create and define behaviour of mocked objects. The provided `mock`, `when/then` and `verify` methods not only simplify the test writing process, but also enhance their readability and clarity for future developers.

References:
- [Mockito mock methods](https://www.baeldung.com/mockito-mock-methods)
- [Mock vs Spy](https://stackoverflow.com/questions/15052984/what-is-the-difference-between-mocking-and-spying-when-using-mockito)

### Docker

I was introduced to Docker during the onboarding process. I learnt about containers and the benefits of containerization, such as portability and isolation, and how they enable developers on different infrastructure to work in a consistent environment.

References:
- [Docker overview](https://docs.docker.com/get-started/overview/)
- [Docker containers](https://devops.stackexchange.com/questions/390/what-is-a-container)

