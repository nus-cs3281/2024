<!-- List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource. -->

# Angular

## Context

Before TEAMMATES, I have only ever used React. To help me get started on Angular, I looked up videos on YouTube, specifically [Fireship's Angular playlist](https://www.youtube.com/playlist?list=PL0vfts4VzfNjsTV_6i9a9iczMnthWqHzM), to get an overview. I tried doing a Udemy course too but I thought it was a little far-fetched.

With a background in React, I went onto look for the similarities and differences between these two popular frontend web frameworks which led me to decide to dive into TEAMMATES' codebase.

## Passing data between Parent and Child components

Similar to passing of props in React, Angular has its way to pass data between parent and child components.

In Angular, we use `Output` for sending data to parent and `Input` for sending data to child. It took me awhile to get used to the terms of `in/output`.

What helped me through this was the [Angular docs](https://angular.io/guide/inputs-outputs) on this exact matter, it was a perfect read! It starts off with the introduction of Input and Output, and was surprised it's said to be like a pattern. This page was really well written as it goes straight to the subject and it takes a step by step approach with sufficient amount of examples.

## Services

Working on the onboarding task (Per Receiver Submission project), I have learned how Angular, a frontend framework, communicates with the backend that uses Java EE.

For the frontend to send a HTTP request to TEAMMATES server, we have to make use of a library/dependency to handle this action. Similar to packages used in React apps such as Fetch API, Axios, etc.

TEAMMATES makes use of [Injectable](https://angular.io/api/core/Injectable) as part of Angular's core package to create a service. In this case, a service to an entity class. An injectable service is created and in it consists of functions that work with HTTP requests e.g., A method to get entities, that calls another service, the custom written HTTP service.

Angular recommends to make use of services for tasks that do not involve the view or application logic. These services are mainly used to communicate with the backend server. Here is a guide on [Introduction to services and dependency injection](https://angular.io/guide/architecture-services#introduction-to-services-and-dependency-injection).

While working with HTTP requests, we need to handle the operations that are involved with each request sent. TEAMMATES backend uses a [RESTful API architectural style](https://teammates.github.io/teammates/design.html#architecture). These RESTful endpoints mainly involve asynchronous operations.

To work with such operations, we use [Observables](https://angular.io/guide/observables-in-angular) to ensure we resolve or reject them properly. Observables are part of the [RxJS library](https://rxjs.dev/guide/observable).

With Observables, we are able to not only handle the basic outcomes of calling these RESTful APIs, but we are able to chain each response that is returned to us and make use of it to perform further operations.

# Testing

I have never written tests of this extent. Aside from CS4218 which I am currently reading, the work done in TEAMMATES has really helped me to improve the way I write tests, and fully understand the importance of tests.

## Spy-es/Spies

I have used `spy` before. Ironically, I never knew how to use it properly till I had to write tests on the work done.

I was struggling to figure how to pass a check in a method of this object, let's define object as A. Object A has a method, `a()`, that has a condition in it `if b(...)`.

Method `b()` belongs to object A. I could not set this condition to be true when I was writing the test. However, spy did the trick!

All I had to do was write this powerful line of code:

```java
A spyA = spy(A.class);
doReturn(true).when(spyA).b(...);
```

And it worked! Sounds pretty trivial and silly I know... But Today I Learned (TIL)!

Spying on an object allows us to dig deep into its methods and intentionally set the outcome of what we expect a variable/object or method outcome to be, we are in control and we define the result.

Here is a good read on [spies](https://www.baeldung.com/mockito-spy). Love baeldung!

## Integration Tests

My mentor said something that will have me remember for life - "We should not use mocks for Integration Tests.". This was a 'Today I Learned' moment.

# Hibernate

## Context

I have only ever used Java in my school work, mainly those small OOP projects. If I can recall, the extent was up till using [JDBC](https://www.javatpoint.com/java-jdbc) connecting to MySQL, building a MVC architecture, that was pretty much it.

But wow! Java has its own framework for building a backend. I have also heard of Spring Boot (I believe it's another backend framework!) but never used or looked into it before.

At least for me, learning Hibernate has been really eye opening and refreshing! It has not only expanded my technical skillset in the realm of Java but it drills me on my fundamentals of Object Oriented Programming.

The evidence is that Hibernate expects developers to write out the entity classes in an OOP fashion and it does all the setup behind the scenes, e.g., Setting up of the schemas in the chosen database.

## Annotations

These said classes contain [annotations](https://thorben-janssen.com/key-jpa-hibernate-annotations/) provided by Hibernate where we specify what we would like to see in our relational schemas from non-nullable columns, connecting schemas via associations and foreign keys, working with natural keys, etc. Pretty cool and interesting stuff!

## Database Functionalities of Hibernate's API

Enough of the OOP stuff! Let's dive into the database functionalities.

Hibernate provides out of the box in-built database functionalities in its API. These functions are closely similar to how we write SQL queries.

Let's take a look at an example.

Here, we have 2 entities - Instructor and Account. An Account is linked to an Instructor via a One to Many relationship i.e., An Account to many Instructors, and an attribute is in the Instructors schema. Hibernate does the work of linking these entities via the association we just specified.

We would like to find all Instructors of a specified `accountId` and `courseId`.

In Hibernate, this is what we will write:

```java
cr.select(instructorTable).where(cb.and(
        cb.equal(instructorTable.get("courseId"), courseId),
        cb.equal(instructorTable.get("accountId"), accountId)));
```

In native SQL, this is what we would have written (PostgreSQL format, might not be entirely correct, off the top of my head):

```sql
SELECT * FROM instructors
    JOIN accounts
        ON instructors.account = accounts.accountId;
```

Hence, Hibernate provides plug-and-play functionalities that closely relate to SQL operations.

## Data Persistence through JPA

Another thing to highlight is the data persistency that Hibernate promises.

> Hibernate is a standard implementation of the Java Persistence API (JPA) specification.

An evident example on persistency is...

For example, we have a Person that we would like to update his/her name. Since we have written Person class in an OOP fashion as mentioned above, we could simply just update the name via the setter of the `name` attribute by `person.setName("NewName");`, and that's it!

You might ask, "How about telling your database above this person's name change?".

Hibernate does this behind the scenes for you! This is all thanks to JPA.

Also with the help of unit tests between the Logic and Db Layers, I was able to guarantee that this worked.

## Cascade Types (Delete)

In SQL systems, when we delete a parent entity that references to a child entity or a list of child entities, all the child entites get deleted along with it.

To do this in Hibernate, we can make use of a few different types of annotation, each has its own specific use.

### Specifying `cascade = CascadeType.REMOVE` when declaring the association between 2 entities, parent and child

```java
@OneToMany(mappedBy = "parent", cascade = CascadeType.REMOVE)
private List<Child> children = new ArrayList<>();
```

This snippet says many child entities belong to one and only 1 parent. When we delete this parent entity, we'd want to also cascade this deletion/removal onto all of the child entities linked to this parent.

This is the go-to for a simple cascade removal operation.

### Specifying `orphanRemoval = true` when declaring the association between 2 entities, parent and child

Firstly, this is very similar as to what we have above.

```java
@OneToOne(mappedBy = "parent", orphanRemoval = true)
private Child child;
```

The difference is that `orphanRemoval` acts on the address of the parent entity. In other words, when we have a single child entity that references to a parent entity and we happen to use the setter method of this attribute `child`.

I.e., Doing this.

```java
parent.setChild(null);
```

Hibernate will automatically detach the child entity from the parent entity and when a child entity is left alone without a parent, orphaned in this case, Hibernate will remove this child entity from the database.

### Using `@OnDelete(action = OnDeleteAction.CASCADE)`

I found this out when I was figuring how to remove an entity that does not have any association/relationship to the current entity except a 'reference' like this:

```java
public class SomeClass {
    private ClassWeDelete classWeDelete;
}
```

This means that there is no purpose in keeping an entity of SomeClass when it only makes sense if an entity `classWeDelete` exists. It really does sound as if it's overlapping with the above two scenarios.

But again, the key here is that there is no form of association/relation between these two different entities.

Here are some resources that helped me on understanding this:

- From [Hibernate Docs](https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html#pc-cascade-on-delete)
- From [Baeldung](https://www.baeldung.com/jpa-cascade-remove-vs-orphanremoval)
- From [Stackoverflow](https://stackoverflow.com/questions/4329577/how-does-jpa-orphanremoval-true-differ-from-the-on-delete-cascade-dml-clause)

## Inheritance Strategies

As mentioned above, Hibernate as a framework works with OOP heavily. To start off, in order to model the relationship between entities, we need to define the java classes in an OOP fashion. Hibernate as an Object Relational Mapping tool does the heavylifting for us - we just need to tell it what we want in the OOP 'language' that Hibernate interprets really well in.

I picked this up when I was tasked to design the parent-child relationship for the User's entity (in this [PR #12071](https://github.com/TEAMMATES/teammates/pull/12071)). `User` is the parent entity that has child entities i.e., These child entities extend this parent `User` class.

When considering which strategy to use, there were other factors to consider - performance, scalability, maintainability.

These were what I found during the research of the 4 inheritance strategies that Hibernate provides.

---

Below are the findings for the 4 available inheritance strategies in [Hibernate](https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance):

### MappedSuperclass

- Not scalable. If we use this, ancestors cannot contain associations with other entities.
- Each DB table contains both base and sub classes properties.

### Single Table

- Performant (polymorphic query performance) as only 1 table needs to be accessed when querying parent entities. Best performance among the other strategies.
- However, can no longer use NOT NULL constraints on subclass entity properties. I think this means that the identifying attributes of the rows of subclasses can be nullable?
- For our case of Student/Instructor IS-A User, we will only have 1 table in the DB, i.e., User, with all the fields combined. This means Single Table is out of our options? Student is a User but it shouldn't have Instructor attributes/data.
- Could use discriminator values which is used to differentiate between rows belonging to separate subclass types.

### Joined Table aka Table-per-subclass mapping strategy

- TLDR: An inherited state is retrieved by joining with the table of the superclass.
- Great because the PK of User appears in its child classes, e.g., In Student/Instructor.
- Performance issues as retrieving entities requires joins between the tables, expensive for large number of records. Number of joins is higher when we query parent class as it will join with every single related child.
- Discriminator column not required. But each subclass must declare a table column holding the object identifier (which is kind of what we want as each subclass table contains the FKs to the base class, User; PKs of sub class tables are also FKs to the superclass table PK. If `@PKJoinCol` not set, the PK/FK cols are assumed to have the same names as the PK cols of primary table of the superclass).
- When using polymorphic queries, base class table must be joined with all subclass tables to fetch every associated subclass instance.

### Table per Class

- Performance issue because we union in the background when we query the base class i.e., User.
- Each table defines all persistent states of the class, including the inherited state.
- If we want to use polymorphic associations (eg An association to the superclass of our hierarchy), we need to use union subclass mapping. This requires multiple `UNION` queries, be aware of performance implications of a large class hierarchy. Also, not all database systems support `UNION ALL`. [PostgreSQL81Dialect](https://docs.jboss.org/hibernate/orm/5.4/javadocs/org/hibernate/dialect/PostgreSQL81Dialect.html) supports `UNION ALL`.

Some resources I used to help me work out the different inheritance strategies

- Directly from the [Hibernate documentation](https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance)
- From [Baeldung](https://www.baeldung.com/hibernate-inheritance). This was slightly out of date compared to the Hibernate docs

---

## Conclusion

Hibernate does provide way more than the above but let's look forward to what else we can learn in the future tasks!

Alright that's it for now, stick around folks!

## Resources

Below are some wonderful resources that have helped me along the way:

- Baeldung's take on Hibernate [here](https://www.baeldung.com/learn-jpa-hibernate)
- Official Documentation of Hibernate [here](https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html), literally the bible but I find some examples to be quite bare and the rest of the resources here and have helped me tremendously!
- The man himself Thorben Janssen! Over [here](https://thorben-janssen.com/tutorials/)

# Miscellaneous

## Large Modifications to a Live System

Crediting my teammate, Kevin, for bringing up this point.

This semestral project, v9-migration - moving from NoSQL to SQL, could be detrimental to a live system that relies on huge chunks of data to function if not done with caution.

In order for the team to carefully perform such a huge operation, a migrated check on the documents (previously NoSQL) is done before paving the way for an endpoint to take when called for.

This allows us to work independently on migrating the relevant parts of this live system, dual DB as said by my mentors, without affecting the current state that the hundreds of thousands users see.

In my opinion, it is really neat!

## A good follow-up after submitting a PR

Through the PRs that I have submitted, I learned that we should always set it as a draft first and look at the PR from the reviewer's perspective to ensure that we did not miss out anything or if there is any section of code that can be further improved on.

A helpful part of the UI for a PR in GitHub is the `Files Changed` tab. This allows us to get a full overview of the changes that were made, additions or deletions, to each file.

This can definitely go a long way, especially when we have a large PR.

## A different view when looking at a PR

Crediting my mentor, Samuel, for introducing this.

When looking at a Pull Request on GitHub, tapping on the `.` key on our keyboard brings us to another page - [GitHub's built-in Visual Studio Code in the web browser](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor). Extremely cool stuff!

## GitHub CLI

Prior to reviewing PRs in TEAMMATES, I haven't really experienced any trouble with pulling the branch I am reviewing locally.

I faced troubles in doing so when reviewing my first TEAMMATE's PR. The reason was that this branch in the PR resides in the developer's own fork.

The process was different as to what I have always been in when reviewing a PR - was a remote branch that resides in the same repository and not a fork.

My first go-to solution to this was to add the developer's fork as a remote repository for me to track locally by using (some parts of this [guide](https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/) helped!):

```git
git remote add ANY_FORK_NAME FORK_URL
git fetch ANY_FORK_NAME
git checkout BRANCH_IN_PR
```

This worked fine! But at one point, I could not get this working.

I spent quite awhile to search on why but to no avail.

There was a suggestion on Stackoverflow that proposed others to use the [GitHub CLI](https://cli.github.com/).

This was a plug-and-play tool, especially developing on Windows some setup could be rather cumbersome. All I had to do was visit the link above and install this CLI. Next, it was just a single line command...

```git
gh pr checkout PR_NUMBER
```

This was a **_life saver_**! Checking out to the developer's branch in his/her fork and reviewing a PR now have never been simpler!
