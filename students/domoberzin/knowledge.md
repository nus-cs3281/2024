### Hibernate

As part of the `v9-migration`, I had to familiarise myself with the Hibernate ORM

Aspects Learnt:

- Learnt the fundamentals of Object-Relational Mapping (ORM), enabling the conversion of data between the database and object-oriented programming languages, in particular Java
- Usage of `persist` and `merge` to insert or update an entity respectively
- Learnt about Hibernate's internal caching mechanisms

Resources
- [GeeksForGeeks Article on Hibernate Caching](https://www.geeksforgeeks.org/hibernate-caching/)
- [Hibernate docs](https://hibernate.org/orm/)

### Solr

TEAMMATES uses Solr for full-text search, and is structured to function for both the datastore and SQL databases.

Aspects Learnt:

- Gained proficiency in Solr's query syntax to perform powerful searches, including filtering, sorting, and faceting to retrieve relevant documents efficiently
- Understood how Solr is integrated into the TEAMMATES backend for searching or indexing

Resources:
- [Solr JSON Request API guide](https://solr.apache.org/guide/solr/latest/query-guide/json-request-api.html)
- [Solr Quickstart guide](https://solr.apache.org/docs/6_0_0/quickstart.html)

### PostgreSQL

Having only used `SQLite` and `MySQL` in the past, I had to familiarise myself with PostgreSQL as it is the SQL database used in TEAMMATES.

Aspects Learnt:

- Learnt about PostgreSQL's architecture, including its use of processes for client connections, MVCC (Multiversion Concurrency Control), and its write-ahead logging (WAL) for data integrity
- Write-Ahead Logging (WAL) involves recording changes to a log before any changes are made to the actual database. This method is crucial for recovery after a crash, as it ensures that all committed transactions are saved. 
- MVCC allows multiple users to access the database concurrently without locking the data. This means readers don't block writers and vice-versa, leading to increased performance and lower waiting times during operations, which is a significant advantage over MySQL's more traditional locking mechanisms
- Learnt about the differences between the 3 SQL database engines

Resources:
- [Differences between `MySQL`, `SQLite` and `PostgreSQL`](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)


### Angular

Having had no experience utilising Angular prior to working on TEAMMATES, I was introduced to several neat features that Angular has to offer.

Aspects Learnt:

- Angular's component-based architecture makes it easy to build and maintain large applications. Each component is encapsulated with its own functionality and is responsible for a specific UI element. This modularity allowed me to quickly understand and contribute to the project, as I could focus on individual components without being overwhelmed by the entire codebase.

- Angular's dependency injection system is a design pattern in which a class receives its dependencies from external sources rather than creating them itself. This approach simplifies the development of large applications by making it easier to manage and test components.

- Angular offers the `trackBy` function, which I used in conjunction with the `*ngFor` directive to manage lists more efficiently. Normally, `*ngFor` can be inefficient because it re-renders the entire list when the data changes. However, by implementing trackBy, Angular can track each item's identity and only re-render items that have actually changed. This reduces the performance cost, especially in large lists where only a few items change.

### Google Cloud

When deploying the staging environment for the ARF upgrade, I managed to work with and gain familiarity with the deployment workflow, as well as several GCP tools and the `gcloud` sdk.

### Snapshot Testing

Snapshot testing with Jest is an effective strategy to ensure that user interfaces remain consistent despite code changes. It's important for developers to maintain updated snapshots and commit these changes as part of their regular development process.

Snapshot tests are particularly useful for detecting unexpected changes in the UI. By capturing the "snapshot" of an output, developers can compare the current component render against a stored version. If changes occur that aren't captured in a new snapshot, the test will fail, signaling the need for a review.

### E2E Testing

E2E Testing allows us to ensure that the application functions as expected from the perspective of the user. This type of testing simulates real user scenarios to validate the complete functionality of the application. Common tools for conducting E2E testing include Selenium, Playwright, and Cypress.