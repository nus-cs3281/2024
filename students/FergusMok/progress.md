#### Overview

* Aided in the migration of logic from NoSQL (Datastore) to SQL
  - Migrated SubmitFeedbackResponseAction and it's relevant tests
  - Reviewed other actions authored by others
* Took part in Multiple course structure initial discussions
* Researched and created the SQL setup on Google Cloud Platform
  - Creation of database and VPC to connect to the application
  - Updated the relevant documentation on teammates-ops
  - Created the relevant SQL commands for creating a non-superuser for production usage
  - Researched and setup the Hikari connection pool for Hibernate
* Authored and reviewed PRs in the initial non-course migration
  - Researched and gave alternatives on the methods of migration (by application code or BigQuery on GCP)
  - Created the staging environment for non-course migration to test
* Reviewed and gave suggestions for the Logs project
  - Primarily guided Di Sheng on some user considerations, overall design and review of PRs
* Authored and reviewed PRs in course migration
  - Mentored and reviewed the PRs and overall design for the mentee developers

#### Achievements by Week
| Week | Achievements |
| ---- | ------------ |
| Before CS3282 | Reviewed PR (merged): [[#9976] Instructor copying course: Progress bar does not load when no feedback sessions are copied](https://github.com/TEAMMATES/teammates/pull/11906) |
| Before CS3282 | Reviewed PR (merged): [[#11639] Create DateTime service and replace time-related magic numbers](https://github.com/TEAMMATES/teammates/pull/11943) |
| Before CS3282 | Reviewed PR (merged): [[#11911] Instructor copying course: Progress bar does not load when no feedback sessions are copied](https://github.com/TEAMMATES/teammates/pull/11914) |
|  2 - 3 | Authored PR (merged): [[#12048] Migrate SubmitFeedbackResponseAction's Logic and Db methods](https://github.com/TEAMMATES/teammates/pull/12732) |
|  2 - 3 | Reviewed PR (merged): [[#12048] Migrate GetCourseJoinStatusAction](https://github.com/TEAMMATES/teammates/pull/12713) |
|  2 - 3 | Authored PR (merged): [[#12048] Migrate SubmitFeedbackResponseAction](https://github.com/TEAMMATES/teammates/pull/12720) |
|  2 - 3 | Authored PR (closed): [[#12048] Migrate OPTIMIZED_SAVING_POLICY_APPLIED for updateFeedbackResponseComment](https://github.com/TEAMMATES/teammates/pull/12745) |
|  2 - 3 | Authored PR (merged): [[#12048] Migrate SubmitFeedbackResponseAction tests ](https://github.com/TEAMMATES/teammates/pull/13033) |
|  4 - 5 | Authored PR (merged): [[#12048] Add DataMigrationEntitiesBaseScriptSql and DataMigrationForAccountSql](https://github.com/TEAMMATES/teammates/pull/12766) |
|  4 - 5 | Authored PR (merged): [[#12048] Add verify to seed db](https://github.com/TEAMMATES/teammates/pull/12767) |
|  5 - 6 | Reviewed PR (merged): [[#12048] Create script to verify row count for non-course entities](https://github.com/TEAMMATES/teammates/pull/12824) |
|  5 - 6 | Reviewed PR (merged): [[#12048] Add checks to notification script](https://github.com/TEAMMATES/teammates/pull/12836) |
|  5 - 6 | Authored PR (merged): [[#12048] Improve base script for verifying migrated attributes](https://github.com/TEAMMATES/teammates/pull/12844) |
|  7 | Authored PR (merged): [[#12048] Improve seeding and migration for non course entities](https://github.com/TEAMMATES/teammates/pull/12846) |
|  7 | Authored PR (merged): [[#12048] V9 Migration: Fix verification pagination, improve logging](https://github.com/TEAMMATES/teammates/pull/12874) |
|  7 | Reviewed PR (merged): [[#12048] Fix seeding for notification](https://github.com/TEAMMATES/teammates/pull/12866) |
|  7 | Reviewed PR (merged): [[#12048] Fix seeding of data for data migration](https://github.com/TEAMMATES/teammates/pull/12873) |
|  8 | Reviewed PR (merged): [[#12048] Add verification migration script](https://github.com/TEAMMATES/teammates/pull/12890) |
|  8 | Authored PR (merged): [[#12048] V9 migration and verification script optimization ](https://github.com/TEAMMATES/teammates/pull/12896) |
|  8 | Reviewed PR (merged): [[#12048] V9 migration verification script optimisation - fetch ReadNotifications for account comparison](https://github.com/TEAMMATES/teammates/pull/12905) |
|  8 | Reviewed PR (merged): [[#11843] Create FeedbackSessionLog entity and cron job action](https://github.com/TEAMMATES/teammates/pull/12895) |
|  9 | Authored PR (merged): [[#12048] Add SQL configuration into build.properties and build-dev.properties](https://github.com/TEAMMATES/teammates/pull/12917) |
|  9 | Authored PR (merged): [[#12048] Add SQL description for postgres config](https://github.com/TEAMMATES/teammates/pull/12931) |
|  9 | Reviewed PR (merged): [[#12048] add delay to task queuer for indexing account request](https://github.com/TEAMMATES/teammates/pull/12936) |
|  9 | Reviewed PR (merged): [[#12048] Relax read notif verification for migration verification script](https://github.com/TEAMMATES/teammates/pull/12937) |
|  10 | Authored PR (merged): [[#12048] Config prod settings and convenience scripts for non course migration](https://github.com/TEAMMATES/teammates/pull/12959) |
|  10 | Reviewed PR (merged): [[#11843] Create Logic and Db layer for FeedbackSessionLogs](https://github.com/TEAMMATES/teammates/pull/12914) |
|  10 | Reviewed PR (merged): [[#12048] Rerunnable Account Request Migration Script](https://github.com/TEAMMATES/teammates/pull/12932) |
|  10 | Reviewed PR (merged): [[#12048] Add reverse data migration script for account](https://github.com/TEAMMATES/teammates/pull/12962) |
|  11 | Authored PR (merged): [[#12048] V9 non course migration for accounts not migrating](https://github.com/TEAMMATES/teammates/pull/12965) |
|  11 | Authored PR (merged): [[#12048] V9 non course migration fix to check extra SQL accounts](https://github.com/TEAMMATES/teammates/pull/12966) |
|  11 | Authored PR (merged): [[#12048] Configure connection pool using hikari](https://github.com/TEAMMATES/teammates/pull/12978) |
|  11 | Reviewed PR (merged): [[#12048] configure agroal connection pool](https://github.com/TEAMMATES/teammates/pull/12971) |
|  11 | Reviewed PR (merged): [[#12048] Fix account request indexing](https://github.com/TEAMMATES/teammates/pull/12967) |
|  11 | Reviewed PR (merged): [Add patch data migration script for usage stats](https://github.com/TEAMMATES/teammates/pull/12970) |
|  12 | Reviewed PR (merged): [[#12048] Data migration for feedback session entities](https://github.com/TEAMMATES/teammates/pull/12986) |
|  12 | Reviewed PR (merged): [[#12048] Data migration for section entities](https://github.com/TEAMMATES/teammates/pull/12991) |
|  12 | Reviewed PR (merged): [[#12048] Remove feedbackSession attributes @fetch annotation](https://github.com/TEAMMATES/teammates/pull/12992) |
|  13 | Reviewed PR (merged): [ [#11843] Update front end for session activity logs](https://github.com/TEAMMATES/teammates/pull/12973) |
|  Reading Week | Authored PR (merged): [ [#12048] Delete redundant index ](https://github.com/TEAMMATES/teammates/pull/13095) |
|  Reading Week | Authored PR (merged): [ [#12048] Hot fix for migration](https://github.com/TEAMMATES/teammates/pull/13092) |
|  Reading Week | Authored PR (merged): [ [#12048] Prepare for migration testing](https://github.com/TEAMMATES/teammates/pull/13089) |
|  Reading Week | Authored PR (merged): [ [#12048] Add database changes and speed up seeding](https://github.com/TEAMMATES/teammates/pull/13085) |
