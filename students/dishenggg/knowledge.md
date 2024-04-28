### Hibernate

#### [session.flush()](https://www.baeldung.com/spring-jpa-flush)

EntityManagers do not always immediate execute the underly SQL statement. One such example is when we create and persist a new entity, the createdAt timestamp is not updated in the entity object in our application until we call flush().

This is because by calling flush() we can ensure that all outstanding SQL statements are executed and that the persistence context and the db is synchronized.

#### Persistent entities

[Persistent entities](https://www.baeldung.com/hibernate-session-object-states) are entities that are known by the persistence provider, Hibernate in this case. An entity(object) can be made persistent by either saving or reading an object from a session. Any [changes (e.g., calling a setter) made to persistent entities are automatically persisted into the database](https://docs.jboss.org/hibernate/orm/4.0/devguide/en-US/html_single/#d0e1739).

We can stop hibernate from tracking and automatically updating the entities by calling `detach(Entity)` or `evict(Entity)`. This will result in the entity becoming detached. While detached, Hibernate will have no longer track the changes made to the entity. To save the changes to the database or make the entity persistent again, we can use  `merge(Entity)`.

#### References

While using the new SQL db, we often find ourselves needing to refer to another related entity for example `FeedbackSessionLogs.setStudent(studentEntity)`. This would often require us to query the db for the object and then call the setter. This is inefficient especially if we already have information like the `studentEntity`'s primary key.

Hibernate provides a `getReference()` method which returns a proxy to an entity, that only contains a primary key, and other information are lazily fetched. While creating the proxy, Hibernate does not query the db. [Here](https://www.baeldung.com/jpa-entity-manager-get-reference) is an article that goes through different scenarios using reference to see which operations would result in Hibernate performing a SELECT query and which does not. It also includes some information on cached entities in Hibernate.

It is important to note that, since Hibernate does not check that the entity actually exists in the db on creation of the proxy, the proxy might contain a primary key that does not exist in the db. The application should be designed to handle such scenarios when using references. [Here](https://thorben-janssen.com/jpa-getreference/#the-getreference-method) is more information on the difference between `getReference()` and `find()`.

### Testing

#### Mockito

In unit testing, a single component is isolated and tested by replacing its dependencies with stubs/mocks. This allows us to test only the behaviour of the SUT.

[Mockito](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html) provides multiple methods that help to verify the behaviour of the SUT and also determine how the mocked dependencies are supposed to behave.

* [`verify()`](https://www.baeldung.com/mockito-verify) this method allows us to verify that a method of a mocked class is called. It can be combined with other methods like `times(x)` which allowsus to verify that the method is only called `x` times.

* [Argument matchers](https://www.baeldung.com/mockito-argument-matchers) like `anyInt()`, `anyString()` and allows us to define a custom matcher using `argThat()`. These argument matchers can be used to ensure that the correct arguments are being passed to the other dependencies. This is useful if the method you are testing does not return a value useful for determining the correctness of the method.

* [`when()` and `thenReturn()`](https://www.baeldung.com/mockito-behavior) These are methods that allow us to define the behaviour of other dependencies that are not under test.

    For e.g., `when(mockLogic.someMethod(args)).thenReturn(value)` makes it such that when the SUT invokes `someMethod()` with `args` from the `mockLogic` class, `value` is will be returned by `someMethod(args)`.

### GCP

Learnt about how the different features that are provided by GCP and other third parties come together to make Teammates possible.

Most of the information is from the [Platform Guide](https://github.com/TEAMMATES/teammates-ops/blob/master/platform-guide.md) in the teammates-ops repo.

* Setting up OAuth 2.0 to allow users to login with their google credentials
* Google cloud storage
* Google cloud SQL
* Debugging using logs from Google Cloud's logging service
* [Setting up a cron job](https://cloud.google.com/appengine/docs/flexible/scheduling-jobs-with-cron-yaml)
* Using email sending services like [Mailjet](https://www.mailjet.com/)
* Using [DBeaver](https://dbeaver.io/) to insepct and manipulate the SQL database