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
