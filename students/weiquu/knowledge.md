### CS3282

#### Database Migration

Before CS3282, I had little knowledge of database migration, as I was mainly working on frontend user friendliness issues. Hence, I had to learn the proper way to migrate actions so to as to effectively review PRs and mentor the CS3281 students. This gave me the chance to learn more about the Hibernate ORM, as well as the different components in the backend. For example, one of the PRs that I took on was about migrating search functionality. This involved me learning more about Solr, how it is setup and returns search results in the database, as well as how documents and their indexing are handled. The search functionality turned out to be quite issue-prone, and we had to troubleshoot many of the problems that inevitably cropped up.

Another point is on database design and their consequences. Early on in the semester, I realised (along with Dominic (Lim)) that a lot of changes were being manually cascaded throughout the database tables. This didn't really make sense to us, as it seemed error-prone and went against what we knew about relational database design. In trying to find out why this decision was made, it seemed that it was because they feared that joining too many tables together might cause performance issues. However, after doing some research, we concluded that performance would not take too much of a hit, and anyway, the performance hit was worth it considering that we are able to better ensure correctness by using the built-in cascade function of the database. Due to documentation being hard to find, it is unclear if there were any other reasons behind manually cascading. Hence, there are a few lessons to be learnt here:

- Documentation must be more complete and should properly consider all trade-offs. It also must be made more accessible to future batches
- We should follow the theoretically correct way of designing our database - TEAMMATES is not using databases in such a wildly unique way that would warrant doing things otherwise (in fact, I would say our use case is fairly standard)
- More research should be done into performance, and perhaps tests made - our own research showed that there shouldn't be any performance issue even if we use the built-in cascade

However, as a result of this decision being made already, there is a lot of work to be done to properly refactor the entities. This just goes to show how important prior planning is.

#### Testing Capabilities

I learnt much more about E2E tests, integration tests, and unit tests. I also learnt more about the best practices for going about them to ensure standardisation and minimal code duplication (shoutout to Cedric, whose PRs were instrumental in me gaining this knowledge). In addition, I am now better able to pinpoint the issues with our previous tests (seeming to join multiple test types together, as well as not adequately testing all possible pathways, including edge cases), which will be useful in improving testing in the future

#### Security Vulnerabilities

As part of the database migration, I had to research into how security vulnerabilities are protected against and how tests are written to ensure that there are no vulnerabilities. In conducting this research, I also looked into how Hibernate and other ORMs protect against security vulnerabilities, for instance by using prepared statements. The other part of my research looked at OWASP guidelines, indicating how different attacks are carried out and how they should be protected against. We decided to focus on testing for SQL injection, and thus I was able to gain more insight into how SQL injections are carried out and how to effectively test for a wide range of cases against them.

#### Tech Design

In carrying out the preliminary research into the Multiple Course Structures (MCS) project, I learnt more about how to carry out tech design. The process of coming up with user requirements and thinking from the user perspective is still quite new to me, but I was able to learn a lot from listening to how Prof Damith looked through and considered various aspects of our UI design. In addition, I was able to learn about what features should be prioritised first, and what should be just added later after the MVP is completed.

On the backend side, I gained valuable experience of how to design backend logic with minimal changes, and yet still have it be extensible. A significant part of this is related to database design, where we should aim to be backward compatible.

As part of introducing the database schema changes into a separate branch, I was also exposed to the need to introduce database changes step by step, which is even more important at this stage since data migration is happening. For example, new columns should either be nullable at the start or have a suitable default value, and columns and tables shouldn't be dropped until all references in the code are removed. In addition, adding and removing constraints should only be done if the system logic can work before and after such addition or removal. (Thanks Wilson for coaching us through this!)

#### OSS Skills

Lastly, I learnt a lot about OSS skills in leading a team of people, both individually (as in the security group and the MCS project) and as a small group (as in the entire database migration). I found that delegating work is not as easy as just deciding who does what - it is also essential to consider what others have done before, what their skills are, what they want to do, as well as whether the tasks will have any blockers. This requires both knowledge of the team members as well as a deep understanding of the system and the changes to be made to it.

The soft skill of "pushing" people to get work done is also essential, and I think this was a good experience in cultivating this skill. This is especially so since our team is made out of full-time students, who are juggling many other responsibilities and work from other courses - hence, it is important to be both firm and understanding.


### CS3281

### Frontend

#### Angular

I previously had no experience with Angular, and so working on the frontend proved to be quite an uphill task. My
main resource for learning Angular was the Angular documentation, where I was introduced to components, templates,
directives, and dependency injection. I also referred to several other guides, particularly for parts such as
observables (e.g. `EventEmitter`) which I found more difficult to understand.

Through learning about and getting more hands-on experience with Angular, I came to appreciate its transmission of
data between components as well as its conditional and looped rendering of webpage elements. The lifecycle hook
methods were also useful in determining when certain logic was to be run. I also found the separation of HTML, CSS,
and TS files to be clean and easier to understand.

I also learnt about how using certain features of Angular can help application performance, such as pipes, which is
efficient and only run when the pipe input is changed. (However, ES6 template literals and nested string
interpolation aren't supported in Angular).

#### Web Accessibility

I learnt a lot about why we need web accessibility and what we can do to make our application more accessible. A lot
of the resources I learnt from were those shared by our mentor, which also detailed best practices and other design
considerations.

**Screen reader:** A screen reader is useful to those who have their vision impaired. It reads out the elements on
the webpage and allows users to navigate through them, press on buttons, etc. This means that for a user to have a
good experience, our application must be designed such that they know what is on the webpage and can navigate
through it easily.

**Tab order and headings:** One way to help navigation is to ensure that tab order and headings are correct. In
particular, tabbing should be in logical order of how the field is presented on the page, and the user should not be
able to tab to elements that are hidden or not visible at the moment. For headers, headings should be used to help
users quick navigate between sections, and should be used in order without skipping numbers, so as to avoid
confusion.

**Aria attributes:** There are many aria attributes, but the ones mainly used are `aria-label`, `aria-role`, and
`aria-hidden`. `aria-label` labels an element so that the screen reader knows what to read when the user is focusing
on that element. In the same vein, it is important to attach (descriptive) labels to fields for the same reason.
`aria-role` is used to tell the screen reader what role an element plays in the webpage, so that it knows what to
tell the user. Finally, `aria-hidden`, when set to `true`, tells the screen reader to skip past this element. This
might be desirable because sometimes we don't want images or small icons to be captured by the screen reader.

#### Mobile Friendliness

I learnt about mobile friendliness and how to design a webpage in a way that is able to fit and work well in
various screen widths. One way to do so, and in fact the way we mostly use, is by using Bootstrap's breakpoints,
which helps to set styles depending on the screen width of the device.

Certain elements need to be redesigned to fit smaller screenwidths. The elements that I learnt about, and read about
different design considerations, are modals and tables. In particular, there are several guidelines that specify
how each should be laid out.

When thinking about how the frontend should look like, it is important to treat it from a user's perspective.
Certain issues might not come to mind if we think of it purely as a developer, e.g. buttons need to be spaced
further apart on mobile as putting them closer together makes it more difficult to press using fingers (as opposed
to when using a mouse).

### Backend

I learnt about how to properly migrate data across different databases while ensuring that the system stays up and
operational. It felt that this way of managing the dual databases required a lot of effort in implementing double
logic in each action, entity, etc, but since most of the extra code would be retained, I found this to be a good
approach.

#### Hibernate ORM

I didn't learn about Hibernate ORM in much detail as I was mainly involved in user-friendliness. What I learnt from
the mentors was that Hibernate helps to map entity classes to database records (along with annotations that provide
useful information about the fields, such as `@Nullable`), and also about entity states and session flushing.

In addition, I learnt about Hibernate's methods for database operations, and how these methods can be used in place
of SQL queries for reasons like safety and performance.

#### Docker

Docker makes starting services easier, and enables placing applications into various containers. I briefly looked
into how Docker is used, in particular how the `docker compose` command works and how configurations can be
specified inside the `docker-compose.yml` file.

### Others

#### Testing

**Unit testing:** I learnt about unit testing, which is testing individual components in isolation, when looking
through the backend code for the onboarding task and later for the migration. I also learnt about how dependencies
should be mocked so as to properly test for bugs in the current class without interference from other classes.

**Integration testing:** I wrote a few integration tests for the migration, which tested if the various classes
were working together as intended. This usually involved ensuring data or errors are properly transferred across
the backend layers (e.g. database, actions, etc).

**Snapshot testing:** These were the tests that I worked with the most, and are mostly frontend focused. I found
that they were most useful in helping me determine whether a change in code resulted in a similar change in the
webpage. This meant that looking through the potential changes in snapshot tests were crucial in ensuring that
these changes were to be expected.

**E2E testing:** E2E tests help to test the application from end to end, as the name suggests. This involves opening
the browser, navigating to the page, interacting with elements, verifying state of webpage and database, etc. The
scale of the test means that it takes a long time to run. I also learnt about the instability of the tests, and why
it usually had to be run multiple times in order to pass. A skill I learnt was to analyse the error and determine
from there whether the test was failing because of code changes or because of instability.

**Importance of testing:** While the importance of testing is always quite intuitively understood, I think that
seeing it in action makes its importance more pronounced. This is especially the case for regression testing like
in the migration, where we want to ensure that adding in the second database doesn't change or break the Datastore
(as we want both to function simultaneously).

#### Git

I learnt several useful commands by searching online for solutions to pain points or just from talking to the rest
of the team. For instance, I learnt about fetching a PR's code directly from the PR, which helped in reviews.

#### OSS

I learnt how to better give code reviews, and in particularly how to think about it in a way that made code
consistent across the entire application (e.g. the "space before checkbox" issues). I also learnt the importance of
presenting feedback across in a clear and conducive way.
