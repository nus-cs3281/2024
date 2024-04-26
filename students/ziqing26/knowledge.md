# In CS3282

## Data Migration

* Before data migration we need to make sure we are clear on the ERD and relationship mapping.
* To test scripts on data migration, we set up a staging Cloud SQL and a stating Datastore.
* We also figured out what is VPC and how to connect production server to production Cloud SQL.
* Data validation after migration such as ensuring Foreign Keys are mapped correctly is important. 
* Optimization for speed: we make the scripts faster by allowing batch updates to SQL db. That improves the speed by 10 times. The bottleneck was the SQL insert / updates takes too long.
* Optimization for usability: we make the scripts either patchable or rerunnable so that data migration has minimal impact on the online time of TEAMMATEs. It was made patchable by checking a flag in the entity or timestamp.

## Schema Migration

In the process of preparing for releases (e.g. v9.0.0-beta.5), I realized the need to make sure schema changes are compatible with the existing code. Here are rules I learnt from our project mentor:

- It is okay to add new tables. If the old version doesn’t use it, it’s as good as non-existent.
- It is okay to add new nullable columns. If they are intended to be non-nullable, they should either be nullable at the start or have a suitable default value.
- Columns and tables should not be dropped until all references in the code are removed.
- Adding and removing constraints should only be done if the business logic can work before and after such addition / removal.

## Project Management

I learned a lot about how to set milestones and release timeline for a project. It is always good to allow more time for testing. Moreover, setting an internal deadline that is earlier than the release deadline is important to allow some time for unexpected bugs and all kinds of unforeseen circumstances.

## Liquibase

Liquibase is used to track database schema change in TEAMMATEs. Due to lack of proper documentation from previous contributors, the data migration team spend time figuring out how exactly TEAMMATEs uses it.

In designing the development flow, we initially also wanted to get contributors to run Liquibase command to generate individual changelog for each change. However, we felt that this might raise the barrier to entry and is hard to resolve schema change conflicts in the case that there are two changes to the same column in one release. Therefore, we decide to let Release Leader to run Liquibase so that it is centralized, reducing maintenance cost.

Resources:

[Liquibase Official Document](https://docs.liquibase.com/change-types/home.html)


## Terraform

It can save a lot of time for deploying staging server. It will definitely save a lot of time if we have a shared staging server for testing. However TEAMMATEs might not be operating at a large enough scale to see the benefits.


## Docker

A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. It is an isolated environment for code. This means that a container has no knowledge of the local operating system, or the local files.

Container v.s. Virtual Machines:

Containers virtualize the operating system instead of hardware, so they are more portable and lightweight. VM has a layer of hypervisor which allows multiple full OS running on the same machine.

Container v.s. Microservices:

The main difference between microservices and containers is that microservices are an architectural paradigm / design patterns, while containers are a means to implement that paradigm. Containers can host the individual microservices that form a microservices application.

Resources:

[Docker Official Documentation](https://docs.docker.com/get-started/overview/)
[Containers From Scratch • Liz Rice • GOTO 2018](https://www.youtube.com/watch?v=8fi7uSYlOdc&t=1s)
[DockerFile references](https://docs.docker.com/engine/reference/builder/)

---
# In CS3281

## Angular
Angular is a development platform built on TypeScript. There are three types of Angular directices in general:

1. Components: directives with a template.
2. Attribute directives such as `NgClass` and `NgStyle`: directives that change the appearance or behaviour of an element.
3. Structural directives such as `NgIf`, `NgFor` and `NgSwitch`: directives that change the DOM layout by adding and removing DOM elements.
4. Some less obvious built-in directives: `a, form, input, script, select, textarea`.

There are two types of forms in Angular:

1. Reactive: Reusuable and synchronous data flow between the view and the data model.
2. Template-driven: TEAMMATES generally uses this type of forms. It focuses on simple scenarios despite being not reusable.

Modules vs Directives vs Services:

1. Modules provide a way to namespace services, directives and filters. It helps avoid global variables. 
2. Services are singletons. BUIlt in services start with `$`. Dependency injection is required on the dependent.
3. Directives allow componetized HTML. 

Pipes encapsulates custom transformations and could be used in template expressions. We can chain pipes using a series of pipe operator `|` in templates.

Binding:

1. Property binding: sets a specific elemtn property. (e.g. `[disabled]="isNotificationEditFormExpanded"`)
2. Event binding: listens for an element change event. (e.g. `
3. Two-way binding
4. We can use `@Input()` to receive data from parent and `@Output()` to send data to parent.

Resources:

[Angular Developer Guide Overview](https://angular.io/guide/developer-guide-overview)
, [Tour of Heroes app and tutorial](https://angular.io/tutorial)

[Introduction to Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/o), [Service Worker and PWA in Angular](https://morioh.com/p/984afc91af1c)

## d3.js
D3.js is a JavaScript library for manipulating documents based on data using HTML, SVG, and CSS. It is flexible due to its low-level approach that focuses on composable primitives such as shapes and scales rather than configurable charts.

Resources:

[d3 Tutorials](https://observablehq.com/@d3/learn-d3)

## OAuth2.0
TEAMMATES staging and production server uses [OAuth 2.0](https://datatracker.ietf.org/doc/html/rfc6749) for authorization.

Resources:

[Using OAuth 2.0 with the Google API Client Library for Java](https://developers.google.com/api-client-library/java/google-api-java-client/oauth2)

## Google Cloud Datastore and Objectify
TEAMMATES uses Google Cloud Datastore as database.
Through the onboarding task, I learnt about keys-only query which is a subtype of projection queries. Such queries allow querying for specific properties with lower latency and cost. From project of notification feature, I got the chance to apply my knowledge of key-only queries on GET API to fetch the ids of all notifications such that it saves cost for checking whether a notification is in the database or not.

I also learnt about composite index which index multiple property value per index entity. It needs to be configured in an index configuration file.

I learnt that eventually consistent queries generally run faster but may return stale results compared to strongly consistent queries which guarantee the most updated result but take longer to run. As we move from Datastore to Firestore in Datastore mode, it becomes strongly consistent instead of eventually consistent.

Resources:

[Documentation Guides on Datastore Queries](https://cloud.google.com/datastore/docs/concepts/queries#projection_queries)

[Data Consistency in Datastore Queries](https://cloud.google.com/appengine/docs/standard/java/datastore/data-consistency)

## Backend
Backend workflow:

1. Request from users are forwarded to `WebAPIServlet`, which uses `ActionFactory` to find the match `Action`.
2. `Action` has `checkAccessControl` and `execute`. `execute` generates an `ActionResult` object, which will be sent back to user via `WebAPIServlet`. For notifications, the format of output is `JsonResult`.

Java keywords:

1. `transient`: Variable with this modifier will not be serialised. During serialisation, the original value is ignored and a default value of that variable would be saved. For example, if `typicalDataBundle` stores a transient variable of an object, when the object instance is fetched, that field will not be saved. This is useful to protect sensitive information.
2. `volatile`: Instead of writing to cache, all writes to a volatile variable will be written back to main memory immediately. Therefore all reads will be read directly from main memory. This guarantees the visibility for other threads of writes to that variable.

Resources: 

[Java Programming/Keywords/transient](https://en.wikibooks.org/wiki/Java_Programming/Keywords/transient)
[Java Volatile Keyword](https://jenkov.com/tutorials/java-concurrency/volatile.html)

## Testing

Frontend - Jest:

1. `jest.spyOn(object, methodName)` allows tracking calls to `object[methodName]` and creating a mock function. The spied methods are useful for mock implementation of services in frontend testing.
2. Snapshot testing renders a UI component, takes a snapshot and then compares it to a reference snapshot file stored together with the test. Snapshot testing is great when you want to validate the structure of something like a component or an object.

Resources:

[Jest Snapshot Testing documentation](https://jestjs.io/docs/snapshot-testing)

Backend:

1. I learnt how to use `dataBundle` to create different instance of testing objects.
2. Test Driven Development is helpful especially to catch bugs before fixing it.

E2E - Selenium, PageObject:

1. Selenium provides extensions for website test automation. `Selenium WebDriver` APIs identifies Web elements. WebDriver provides bindings which support classes. It has two-way communication with broswer through a driver (eg. ChromeDriver). WebDriver passes commands to Broswer through driver, while receives information back via the same route.

2. Selenium helps identify web elements using locator strategies (e.g. class name, css selector, id, name or link text). `findElement` method will return the first element found in the context. `findElements` returns all elements matching a locator.

3. Selenium helps interact with web elements. Basic commands are `click`, `send keys`, `clear`, `submit` and `select`. `select` could be useful to selection an `<option>` in a `<select>` element.

4. PageObject design pattern is useful to model UI as objects in test code, reducing duplicated code. The public method in page object represents serivices that the page offers with proper abstraction. They return page objects. `PageFactory` package is used in TEAMMATES.

Resources:

[Selenium Documenation](https://www.selenium.dev/documentation/)
[PageObject by Martin Fowler](https://martinfowler.com/bliki/PageObject.html)


## Non-technical knowledge

1. It is important to communicate openly and professionally so that everyone could sync up with each other.
2. When releasing a feature, we might need to think of how to get the MVP done ASAP, so instead of working on everything simultaneously (i.e. both user facing features and admin features), sometimes it might be better to focus on getting one done thoroughly first.
3. PR review requires strategy of concise and respectful communication. Writing reviewer friendly code is important to help them review more efficiently. It is also more preferred to make smaller PRs logically.
