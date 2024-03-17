### Hibernate

#### Persistent entities

[Persistent entities](https://www.baeldung.com/hibernate-session-object-states) are entities that are known by the persistence provider, Hibernate in this case. An entity(object) can be made persistent by either saving or reading an object from a session. Any [changes (e.g., calling a setter) made to persistent entities are automatically persisted into the database](https://docs.jboss.org/hibernate/orm/4.0/devguide/en-US/html_single/#d0e1739).

We can stop hibernate from tracking and automatically updating the entities by calling `detach(Entity)` or `evict(Entity)`. This will result in the entity becoming detached. While detached, Hibernate will have no longer track the changes made to the entity. To save the changes to the database or make the entity persistent again, we can use  `merge(Entity)`.

### Testing

#### Mockito

In unit testing, a single component is isolated and tested by replacing its dependencies with stubs/mocks. This allows us to test only the behaviour of the SUT.

[Mockito](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html) provides multiple methods that help to verify the behaviour of the SUT and also determine how the mocked dependencies are supposed to behave.

* [`verify()`](https://www.baeldung.com/mockito-verify) this method allows us to verify that a method of a mocked class is called. It can be combined with other methods like `times(x)` which allowsus to verify that the method is only called `x` times.

* [Argument matchers](https://www.baeldung.com/mockito-argument-matchers) like `anyInt()`, `anyString()` and allows us to define a custom matcher using `argThat()`. These argument matchers can be used to ensure that the correct arguments are being passed to the other dependencies. This is useful if the method you are testing does not return a value useful for determining the correctness of the method.

* [`when()` and `thenReturn()`](https://www.baeldung.com/mockito-behavior) These are methods that allow us to define the behaviour of other dependencies that are not under test.

    For e.g., `when(mockLogic.someMethod(args)).thenReturn(value)` makes it such that when the SUT invokes `someMethod()` with `args` from the `mockLogic` class, `value` is will be returned by `someMethod(args)`.
