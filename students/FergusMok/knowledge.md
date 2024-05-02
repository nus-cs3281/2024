# Frontend
### Angular
Angular is a frontend framework built on TypeScript. A majority of Angular's functions uses Typescript decorators, which are adds functionalities to functions and class.

Each Angular component uses a selector (for other components to reference this component), HTML template, and CSS file to decorate the HTML template.

Furthermore, within the HTML template, we are able to use Angular directives. Examples are *ngIf, *ngFor. The asterik is synthetic sugar that surrounds the HTML with a \<ng-template>, and is useful for adding and removing tag elements. Another interesting feature is that Angular supports two-way data binding directly, where the HTML's value can affect the actual value and vice versa. Done with [(NgModel)]

See: 
1. https://angular.io/guidestructural-directives#what-are-structural-directives;
2. https://angular.io/guide/two-way-binding#adding-two-way-data-binding


Angular's CLI is also extremely useful, and most basic features from building and testing are ready out of the box. 

See: https://angular.io/cli

### RxJS
RxJS is a library that helps with async and event-based functions in TEAMMATES through Observables and Subscriptions. RxJS can also be used with other frameworks, like React and Vue. 

Common pattern of usage:
1. Create a service class, with a function that calls the backend API. This function returns an Observable.
2. We can call the service from our component, and add on <b>operators</b> to the Observable, such as pipe and subscribe.
3. Pipe will chain observable operators, and subscribe will activate the observabe to listen for the emitted values.

### Jasmine and Jest
Jasmine is a testing framework. It describes test cases, and can make use of `spies`, that can mock return values, track the status of the function. Furthermore, combined with using inspecting HTML elements, we can check the values of the components in different conditions.
Jest is another testing framework used for snapshots. We're able to take snapshots, save them, and compare them later when running the tests again. This is especially useful for regression testing.

# Backend
### Migration of data
The 2 main considerations for migration this year was: correctness and performance. I've always been more interested in the performance aspect, and have learnt great amount of things during both processes.

#### Eager and lazy loading
The biggest improvement in performance can be found when switching from lazy loading to eager loading. The scenario would be having to query for a collection of entities's relations. Lazy loading would be to query one entity's relations at a time, and eager loading would be to query the entire collections' relations in 1 single query. Lazy loading would incur N round-trip times to the database, leading it to be extremely slow. This is also called the N+1 query problem.

However, a main limitation of this method would be the Out-Of-Memory (OoM) error. Lazy loading is preferred only in the situtation where the collection of entities' relations are extremely huge, leading to an inability to load all of them at once in memory. A method the course migration team has done was to query the number of relations the collection has. If it exceeds a certain threshold, we will utilize the lazy method to prevent OoM. Likewise, we are also able to increase the available memory in a Java program.

#### Batch loading by the database ORM
One of the biggest improvements seen was also configuring our ORM to utilize batch-loading and batch-saving. Behind the scenes, the ORM may only send a UPDATE request after reaching 5 entities or so. However, an even better method would be asking the ORM to send the request when reaching 50 entities. In fact, this is a pattern recommended by the Hibernate ORM. Implementation can be seen here:

https://github.com/TEAMMATES/teammates/pull/12896/files

In fact, Hibernate also has common patterns for saving in batches for the most optimal performance

https://docs.jboss.org/hibernate/core/3.3/reference/en/html/batch.html

#### Utilizing traditional database techniques
When loading a large amount of entities, a wise method to improve performance was to only load needed fields. In traditional SQL, this would be done with the SELECT method. Reducing the amount of data to be loaded has significantly improved our query times during migration, with up to 50% at certain times.

Another method would the main querying-speed improvers for SQL, indexes. When querying the entire database with an ordered method, a intuitive method would be the sort by createdAt. However, we should instead sort by an index. In fact, all database tables have an implicit index, which is the ID column. Hence, the team used the ID column to sort instead to improve querying performance.

### Connection pools
With the set-up of the SQL database on production, one unseen circumstance during deployment was choosing of the connection pool tool. Connection pools contain the pool of connections for users to query the database. These pools must scale the number of connections accordingly, and also handle any dead connections. 

During the deployment on production, we initially received errors as our default connection pool was not testing connections on whether they were dead before handing it to users. I quickly learnt that proper connection pools will usually send a **connection test query** ("SELECT 1") before handing the connection to users.

Apart from correctness of connections, connection pools are one of the most important parts when scaling a database's performance. There are many considerations, such as setting the minimum and maximum size of connection pools. A very shocking and counter-intuitive learning point was that DBAs often overestimate the size of connection pools, and reducing the size can actually lead to a 50x improvement. In fact, there's a formula given by PostgreSQL to calculate the optimal number of connections your server can handle, number of connections connections = ((core_count * 2) + effective_spindle_count). More can be read up here:

Hikari Connection Pool tuning: https://github.com/brettwooldridge/HikariCP/wiki/About-Pool-Sizing

### Google Cloud Datastore
I learnt how Datastore's key-value works, it's strengths and limitations, and important conventions. These conventions are seemly counterintuitive for users with an SQL background for smaller applications, but makes sense when building applications at scale.

#### Counters
For example, as datastore's structure does not support aggregating functions, functions such as counting is an O(n) operation. The Datastore community's (counterintuitive) convention is to have multiple Counter class. 

These counters may also face simultaneous write limitations, which is known as contention, when counters change at >5/s. This results in needing to implement 'sharding' counters.

Google's article: https://medium.com/@duhroach/datastore-sharded-counters-2ba6da7475b0

#### Hotspotting
Datastore's (counterintuitive) convention when writing a large amount of data is to avoid monotonically increasing IDs. This is because ranges of storage with similar IDs are stored on the same 'node'(known as tablets), and massive writes to a node will lead to a significant slowdown, called hotspotting. This is a significant pain point for time-series data. 

Former Googler: https://ikaisays.com/2011/01/25/app-engine-datastore-tip-monotonically-increasing-values-are-bad/

The convention is to prepend with a known amount of random numbers/hash, or prepend the ID with other useful fields that can be used for querying later on.

Schema Design: https://cloud.google.com/bigtable/docs/schema-design
#### Datastore Indexes
Datastore is built in a way that requires indexes for every single field that requires that needs to be queried. This is because Datastore cannot reference the data of columns, and ONLY the key during the query. The (counterintuitive) convetion is to make indexes for most fields of an entity, and this can lead to 90% of the storage for an entity to be indexes alone. This leads to a trade-off for more performance at scale. 

However, Google does not bill for storage, and only for writes and reads.

Google's tutorial: https://youtu.be/d4CiMWy0J70?t=75

### Git ReReRe
While most people know the basics of git, git rerere is slightly more advanced. It stands for <b>Re</b>use <b>re</b>corded <b>re</b>solution.
This is useful when working in parallel with branches, and rebasing a long-lived branch that will give merge conflicts. 
The common problem is having to resolve the same conflict each time you rebase your branch. After toggling rerere on, 
you will no longer need to resolve the same conflict again after solving it once. This is because git will record your conflict merge results, 
and auto-solve them the next time around.

`git config rerere.enabled true`

Alternatively, if you are aware that many of your new commits will result in a conflict, it also be easier to squash them then rebase.

Git ReReRe: https://git-scm.com/docs/git-rerere

### Additional Tips
1. To pass additional flags to `npm run`, you can use append `-- --<flag>`. E.g `npm run test -- --detect-open-handles`