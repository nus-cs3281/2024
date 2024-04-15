
### Hibernate

As part of the V9 migration, I had to rewrite the logic to query from the SQL database using Hibernate ORM API instead of from Datastore.

#### ORM

TEAMMATES' back-end code follows the Object-Oriented (OO) paradigm. The code works with objects. This allows easy mapping of objects in the problem domain (e.g. app user) to objects in code (e.g. `User`).

For the data to persist beyond a single session, it must be stored/persisted into a database. V9 uses PostgreSQL, a relational database management system (RDBMS) to store data.

It is difficult to translate data from a relational model to an object models, resulting in the [object-relational impedance mismatch](https://en.wikipedia.org/wiki/Object%E2%80%93relational_impedance_mismatch).

A Object/Relational Mapping (ORM) framework helps bridge the object-relational impedance mismatch, allowing us to work with data from an RDBMS in a familiar OO fashion.

* [Hibernate website: What is an ORM](https://hibernate.org/orm/what-is-an-orm/)

#### JPA

Jakarta Persistence, formerly known as Java Persistence API (JPA) is an API for persistence and ORM.
Hibernate implements this specification.

* [JPA specification](https://jakarta.ee/specifications/platform/9/apidocs/jakarta/persistence/package-summary.html)

#### Criteria API

The Criteria API allows us to make database queries using objects in code rather than using query strings. The queries can be built based on certain criteria (e.g. matching field).

Using `Join<X, Y>`, we can navigate to related entities in a query, allowing us to access fields of a related class. For example, when querying a `User`, we can access its associated `Account`.

* [Jakarta EE tutorial: Using the Criteria API to Create Queries](https://jakarta.ee/learn/docs/jakartaee-tutorial/9.1/persist/persistence-criteria/persistence-criteria.html)

#### Persistence Operations

Hibernate maintains a persistence context, which serves as a cache of objects. This context allows for in-code objects to be synced with the data in the database.

Using `persist()`, `merge()`, and `remove()`, we can create, update, and remove an object's data from the database. These methods schedule SQL statements according to the current state of the Java object.

`clear()` clears the cached state and stops syncing existing Java objects with their corresponding database data. `flush()` synchronises the cached state with the database state. When writing integration tests, I found it helpful to `clear()` and `flush()` the persistence contexts before every test, to ensure that operations done in one test do not affect the others in unexpected ways.

* [Hibernate 6.4 introduction docs: Operations on the persistence context](https://docs.jboss.org/hibernate/orm/6.4/introduction/html_single/Hibernate_Introduction.html#persistence-operations)

### Mockito

To isolate units in unit testing, it is useful to create mocks or stubs of other components that are used by the unit.

#### Verify

We can create a mock of a class using `mock()`. We can then use this mocked object as we would a normal object (e.g. calling methods). Afterwards, we can verify several things, such as whether a particular method was called with particular parameters, and how many times a particular method call was performed.

#### Stub

If a method needs to return a value when called, the return value can be stubbed before the method of the mocked object is called. The same method can be stubbed with different outputs for different parameters. Exceptions can also be stubbed in a similar way.

* [Mockito website](https://site.mockito.org/)

### Angular

#### Forms

Angular has 2 form types: template-driven, and reactive.

Template-driven forms have implicit data models which are determined by the form view itself. Template-driven forms are simpler to add, but are more complicated to test and scale.

Reactive forms require an explicitly-defined data model that is then bound to the view. The explicit definition of the model in reactive forms makes it easier to scale and test, particularly for more complex forms.

* [Angular forms overview](https://angular.io/guide/forms-overview)
