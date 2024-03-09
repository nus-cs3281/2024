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
- Learnt about the differences between the 3 SQL database engines

Resources:
- [Differences between `MySQL`, `SQLite` and `PostgreSQL`](https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems)