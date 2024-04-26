## Summary:
This semester, I was involved in the database migration team, both in migrating the application code and creating the scripts to transport the data from Datastore to CloudSQL.
This involves [migrating actions in the backend application code, fixing previously undetected bugs](https://github.com/TEAMMATES/teammates/pull/12702), setting up of a development Google Cloud environment, [writing base script files for moving and verifying data](https://github.com/TEAMMATES/teammates/pull/12841) and mapping entities from non-sql entities to sql entities, [debugging errors such as OutOfMemory exceptions](https://github.com/TEAMMATES/teammates/pull/12845) during migration and exploring potential speedups.

During this journey, I also played the role of a mentor for one of the CS3281 mentees to help provide guidance on migrating of action code. This includes [sharing software engineering best practices](https://github.com/TEAMMATES/teammates/pull/12719) such as avoiding mutable instances in Constant files, use of inheritance etc to ensure TEAMMATES code is more maintenable and less bug-prone.

Secondly, I was involved in the SQL Injection testing team as well where I [contributed knowledge on common SQL Injection attack inputs](https://github.com/TEAMMATES/teammates/pull/12788#discussion_r1501745332) and helped formulate the test cases.

Thirdly, I was involved in the design of Multiple Course Structures feature. I participated in the discussion and helped with the implementation of Hibernate entities to be used for future implementation of this feature. This includes [updating existing ER designs](https://www.baeldung.com/hibernate-many-to-many) to support the existing schema and new schema simultaneously.

Finally, I was involved in [raising and fixing minor documentation errors](https://github.com/TEAMMATES/teammates/issues/12699) such as outdated commands on the developer guide to improve the experience of future developers.

As for external projects, I worked on Scribe-iOS project, a Google Summer of Code and project which is part of Wikimedia foundation to improve code quality of the software. My learning points are further described in "observations.md".

---

### Key achievements:

| Date | Role | Description  | Key Achievement |
| --- | --- | ------------ | ------------ |
| 24/01/2024 | Issue Reporter | [Found and reported issue #12699 with developer documentation `ng` command](https://github.com/TEAMMATES/teammates/issues/12699) | |
| 24/01/2024 | PR Author | [Fixed documentation bug #12699 in TEAMMATES developer documentation with ng command](https://github.com/TEAMMATES/teammates/pull/12701) | Fixed documentation bug on key page (TEAMMATES new developer guide)
| 07/02/2024 | PR Reviewer | [Review of PR #12706 Migrate CreateInstructorAction](https://github.com/TEAMMATES/teammates/pull/12706) | |
| 15/02/2024 | PR Author | [Review of PR #12702 Migrated CreateAccountAction](https://github.com/TEAMMATES/teammates/pull/12702) | 1. Over 20k LoC 2. Found and fixed previously undetected bugs with HibernateContext and circular toString() errors which cause Stack Overflow crashes 3. migrated 12k LoC of previous json bundle to new SQL bundle format |
| 20/02/2024 | PR Reviewer | [Review of #PR 12741 Migrate feedbackSessionPublishedRemindersAction](https://github.com/TEAMMATES/teammates/pull/12741) | |
| 20/02/2024 | PR Reviewer | [Review of #PR 12759 Add tests for FeedbackQuestionsDb](https://github.com/TEAMMATES/teammates/pull/12759)
| 20/02/2024 | PR Reviewer and mentor | [Review of #PR 12719 Migrate GetResultsSessionAction](https://github.com/TEAMMATES/teammates/pull/12719) | Provide guidance on best practices (Avoid shared mutable instances in Const file, only immutable String literals, naming conventions `is...` for boolean), provide mentorship on using inheritance for `NonExistentFeedbackResponse.java` instead of instantiating duplicate 'fake' feedback sessions multiple times, aid in explaining code. |
| 20/02/2024 | PR Contributor | [Create Database migration base scripts](https://github.com/TEAMMATES/teammates/pull/12766) | |
| 24/02/2024 | PR Author | [Wrote migration script for UsageStatistics](https://github.com/TEAMMATES/teammates/pull/12798) | | [Wrote migration script for AccountRequests](https://github.com/TEAMMATES/teammates/pull/12799) | |
| 25/02/2024 | PR Author | [Wrote verification script for UsageStatistics](https://github.com/TEAMMATES/teammates/pull/12842)| |
| 25/02/204 | PR Contributor | [Contributed SQL injection ideas to aid in SQL injection testing](https://github.com/TEAMMATES/teammates/pull/12788#discussion_r1501745332) | Provided SQL injection test cases to be used during SQLi testing |
| 26/02/2024 | PR Author | [Implementing pagination for SQL migration base script](https://github.com/TEAMMATES/teammates/pull/12845) | Prevent OutOfMemory errors due to large amount of data loaded and migrated by migrating page by page which can fit into memory |
| 26/02/2024 | PR Co-Author | [Wrote base script for DB migration verification](https://github.com/TEAMMATES/teammates/pull/12841) | Debugged issue regarding failure to verify equality of migrated entities due to incorrecly implemented isEqual() method, where instances should use .equals() instead of == to check equality of value |
| 14/03/2024 | Mentor | Discussion on Multiple course structure (formerly multiple team structures) | Ensure everyone on team understands project requirement, rename to Multiple Course Structure for clarity, since 'Teams' in TEAMMATES means something else, discussed UX flow and UI elements |
| 28/03/2024 | PR Co-Author / Contributor | [Implement Hibernate entities for Multiple Course Structure](https://github.com/TEAMMATES/teammates/pull/12948) | Database ERD schema discussion and validation, guidance on [many-to-many relationship representation in Hibernate](https://www.baeldung.com/hibernate-many-to-many). |