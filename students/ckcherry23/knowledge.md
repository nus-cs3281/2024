## CS3282

### 1. Expertise Area: Frontend Engineering

In CS3282, I've chosen frontend engineering as my "expertise" area. Given its breadth, I've narrowed my focus to the most popular frontend technology stack today: Next.js, TypeScript, React, and Tailwind CSS. The majority of my recent projects, as showcased in [my project archive](https://ckcherry23.github.io/archive/), have been built using these technologies. As a UI/UX enthusiast, I am also interested in the usability and accessibility aspects of frontend development.

#### 1.1 Open Source Contributions 

My involvement as a RepoSense mentor primarily centers around the frontend in Vue.js and TypeScript. I've been actively reviewing frontend PRs, mentoring new contributors, and working on process improvements as a team. 

Additionally, I've chosen to contribute to an external project that uses TypeScript and React: [date-fns](https://date-fns.org/). Having utilized date-fns in my own projects extensively, I've found it to be an efficient solution for handling dates in JavaScript. My contributions to date-fns include fixing issues and reviewing PRs. I've detailed my insights from working with date-fns [here](/students/ckcherry23/observations.md).

#### 1.2 Lightning Talks

I also delivered one of my lightning talks on [Tailwind CSS](https://tailwindcss.com/), to evangelize it to the class. I have been using Tailwind CSS for a while now, and I find it to be a very efficient way to style web applications. In fact, one of my projects, [artisan.land](https://www.artisan.land/), depends on the atomic classes of Tailwind to [dynamically style components](https://www.artisan.land/components) with user-selected options and generate React code for them. Such a project would not have been possible without the ease of use and flexibility of Tailwind CSS.

Driven by my interest in frontend technologies, I took up the role of Frontend Lead in Google Developer Student Clubs NUS. Leading a team of frontend developers, I initiated the development of a website for an NGO using Next.js, TypeScript, and Tailwind CSS. This experience provided valuable insights into frontend development best practices while allowing me to mentor junior developers. Additionally, I implemented quality-of-life enhancements such as setting up ESLint, Prettier, and refining the CI/CD pipeline. Subsequently, I delivered a lightning talk on improving DevEx, which would benefit NUS-OSS mentors as well. In fact, we've begun slowly integrating these practices into RepoSense, adopting tools like [Vite](https://github.com/reposense/RepoSense/pull/2178) and [Vitest](https://github.com/reposense/RepoSense/pull/2102#issuecomment-1950123596) for faster development and testing, and enhancing CI runs for [improved accuracy](https://github.com/reposense/RepoSense/pull/2189).

#### 1.3 Q/A Community

I tried contributing to Stack Overflow by providing answers to questions related to frontend technologies such as Next.js, React, and component libraries. Some of my answers can be found [here](https://stackoverflow.com/users/15226661/charisma-kausar?tab=answers&sort=activity). 

Engaging with the Stack Overflow community was a good way to reinforce my understanding of these technologies while enabling me to assist others effectively. This experience has helped me improve my communication skills and ability to explain complex concepts in a simple manner. Yet, looking back, I realize that contributing more frequently is difficult as it may seem forced and inauthentic. I believe that contributing organically when I encounter a question that I can answer is more beneficial in the long run.

### 2. Tools and Technologies

#### 2.1 Vue.js

**2.1.1 Single-File Components (SFCs)**

I have been working with Vue.js for a while now, and I find Single-File Components (SFCs) to be a very efficient way to organize Vue components. SFCs allow you to define the template, script, and styles of a component within a single file, making it easier to maintain the component. 

When componentizing our frontend, one of the proposed approches was to split the template, script, and styles into separate files. While this approach does break down the huge file into smaller chunks, it creates multiple files that are highly interrelated instead of multiple loosely coupled components with good separation of concerns.

We decided it was better if we do our modularization by continuing to follow the Single-File Component pattern of Vue. The separation of concerns in SFCs also helps in keeping the codebase clean and reduces context switching when working on a single component, enhancing overall code quality.

#### 2.2 YAML 

For our title component, we decided to migrate from a JSON format `report-config.json` to a YAML format `report-config.yaml`. This choice was because of YAML's superior readability and compact syntax for defining configuratons compared to JSON or XML.

**2.2.1 YAML Frontmatter**

YAML Frontmatter is a YAML block that is placed at the beginning of a file and is used to store metadata about the file. This metadata can be accessed to provide additional information or functionality based on the metadata.

I explored the usage of [frontmatter for a custom navbar](https://github.com/reposense/RepoSense/pull/2102#issuecomment-1919095515) for the RepoSense report. We proposed integrating YAML frontmatter into the user-provided markdown files.  The frontmatter obtained (for example, a list of links and the header color) using a tool such as [gray-matter](https://github.com/jonschlinkert/gray-matter) could be injected into a template header component as props, dynamically rendering the RepoSense HTML report.

#### 2.3 Quality Assurance

**2.3.1 Frontend Testing Methodologies**

In addressing a bug within the RepoSense report where all charts were erroneously grouped under one team, we realised that our end-to-end tests mainly focus on testing features rather than data representation. To avoid this in the future, we decided we needed any of the following:

* Data-driven testing: Add tests to check if the actual JSON data is being represented in the expected manner.
* Snapshot testing: Implement snapshot testing to ensure there are no visual regressions.

We added more repositories to the Cypress testing data to ensure that the tests cover a wider range of scenarios. This will help us in identifying more bugs and ensuring that the report is accurate and reliable in the future. 

**2.3.2 Frontend Security Best Practices**

When working with mentees for the [Add title component PR](https://github.com/reposense/RepoSense/pull/2102), I realized that we need to be more cautious about the security of our frontend code. So I researched about the library we were using for markdown parsing, `markdown-init`, which had no security vulnerabilities and was also being used extensively by MarkBind. I also learned about the importance of sanitizing user input to prevent XSS attacks. However, since we were using a self-defined title component, we did not need to sanitize the input as we assumed good intentions from the user on their own report.

### 3. Project Management

#### 3.1 Guiding New Contributors

Guiding contributors through a project was definitely a new challenge as a mentor. Each mentee had different working styles and areas of expertise, so I had to adapt my guidance to suit their needs. 

At the beginning, my focus was on recommending issues that were suitable for the mentees' skill levels and expertise. Then, it was about communicating project needs and expectations clearly. 

The biggest challenge was pushing the mentees to partake in more managerial responsibilities within the project. I had to learn how to provide clear instructions and set expectations for the mentees to take on more substantial roles.

#### 3.2 Reviewing PRs

While exploring topics for my lightning talk, I came across a [YouTube video](https://www.youtube.com/watch?v=Y9sp8gONv9M) where a Staff Software Engineer discusses the best practices for reviewing PRs. I also found another [article](https://mtlynch.io/human-code-reviews-2/#aim-to-bring-the-code-up-a-letter-grade-or-two) by an ex-Google engineer that talks about reviewing PRs like a human. These resources gave me a good understanding of how to review PRs constructively. 

Sometimes we got some pretty big PRs, and it was difficult to review them in one go. I learned how to break down the review into smaller chunks, focusing on specific aspects of the code, and providing detailed feedback for improvement at various levels of abstraction. The [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) extension for VS Code was also very helpful in reviewing PRs.

We should also be generous with code examples for clear, uncontroversial improvements. This can help the contributor understand how to make the necessary changes much faster without having to research it themselves. 

Lastly, I learned that a good rule to follow is to aim to bring the code up by a letter grade or two. This means that the reviewer should aim to improve the code quality by a small amount with each review, rather than trying to make it perfect in one go.

---

## CS3281
### 1. Tools and Technologies
The RepoSense frontend is built with Vue.js and Pug, with most of the JavaScript files being migrated to TypeScript over
the semester. Node.js is used to manage the packages, while static code analysis is performed with ESLint. 
Cypress is the tool of choice for testing the frontend.

#### 1.1 Vue.js
Prior to working on RepoSense, I had experienced working with Vue.js using Vuetify components and the
[Options API](https://vuejs.org/api/options-state.html). However, working on the project allowed me to delve deeper into 
the intricacies of Vue and how to fully utilize its features.

**1.1.1 MVVM Architecture Pattern**

Vue.js focuses on the 'ViewModel' layer of the MVVM (Model-View-ViewModel) architectural pattern. This is because it connects
the Views and Models via 2-way data bindings. In this case, the view is the DOM (Document Object Model), and the models are
the plain JavaScript objects.

**1.1.2 Leveraging Template Refs for Custom Behaviors**

While Vue has a rendering model that abstracts away direct manipulation of the DOM, sometimes it is necessary to have access
to the DOM to programmatically control an element. Hence, Vue gives us access to `$refs`, which are similar to
`document.querySelector('.element')` in JavaScript, but are more efficient as they give direct access to the element needed
rather than returning the first element that matches the given selector. This allowed me to implement custom behaviour such as
[pinning the file title](https://github.com/reposense/RepoSense/pull/1860) within Vue.

**1.1.3 Reusability with Custom Directives**

Reuse of code is an essential concept in software engineering, which is why Vue offers custom directives.
Custom directives allow the reuse of logic that involves low-level DOM access. They are basically objects containing 
lifecycle hooks similar to those of a component.

One of the custom directives that RepoSense was already utilizing was a plugin called
[`vue-observe-visibility`](https://github.com/Akryum/vue-observe-visibility/tree/next). This made use of the
[IntersectionObserverEntry Web API](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry) to observe
whether an element is in view and execute a function accordingly.

During my work on the [pin file title PR](https://github.com/reposense/RepoSense/pull/1860), I encountered a bug where 
tooltips appeared out of the viewport when at the top of the page. As the file title would be pinned to the top of the 
page, this issue needed to be resolved before my PR could be merged. To address this, I thought of using a custom 
directive, and I utilized the `vue-observe-visibility` directive to modify the CSS of the tooltip to be bottom-aligned 
based on visibility changes. While this solution was successful, we required more customization as the tooltip needed 
to move back to being top-aligned when scrolling up. I eventually used template refs to address this issue, but this 
experience allowed me to understand better about custom directives.

#### 1.2 Vuex
Vuex is a state management pattern and library for Vue that serves as the centralized source for all components. It 
enforces rules to ensure that the state can only be mutated in a predictable manner.

**1.2.1 Single Source of Truth**

During my work on a [PR](https://github.com/reposense/RepoSense/pull/1939) to differentiate between authors when using 
the 'merge group' option in RepoSense, I faced an issue with unsynchronised data copies. Initially, I had stored the 
colors assigned to authors in both a local `data()` variable and the Vuex store. To resolve this, I employed `mapState` 
as a Vue `computed` property to access the Vuex state from Vue components. This approach allowed me to re-evaluate the 
computed property every time the data changed, which triggered DOM updates and allowed a single source of truth. 
However, relying on the global store singleton could potentially be considered an anti-pattern as it would make the code 
difficult to test.

#### 1.3 JavaScript
**1.3.1 Dot vs Bracket Notation for Accessing Object Properties:**

The dot notation (`objectName.propertyName`) is commonly used to access properties in a clean manner. However, it limits 
property identifiers to alphanumeric characters, `_`, and `$`. On the other hand, the bracket notation 
(`objectName['propertyName']`) can use all UTF-8 characters in property names or even variables that finally resolve to 
a string. This notation is useful when the property name is only known during runtime, as in this
[PR](https://github.com/reposense/RepoSense/pull/1860) where `this.$refs[file.path]` is used because the reference to 
`file.path` is only resolved based on the file being interacted with.

**1.3.2 ES6 String Interpolation for Cleaner Code**

ES6 introduced template strings as a concise and readable way to insert values into strings. In contrast, the string 
concatenation approach can be harder to read and edit, and requires creating multiple strings that need to be put 
together. Moreover, string concatenation would take up more memory and computation compared to creating just one string.

#### 1.4 TypeScript
TypeScript is an object-oriented programming language that allows for classes, interfaces, and inheritance support in 
the frontend. It provides static typing and type inference, making it easier to catch errors before runtime. 
Therefore, we decided to migrate our codebase from JavaScript to TypeScript to align our frontend with our OOP Java backend.

**1.4.1 Class vs Interface for Typing**

When working on [my first PR](https://github.com/reposense/RepoSense/pull/1852) for defining Vue prop types explicitly, 
I initially used classes in TypeScript. However, after gaining more knowledge about TypeScript, I realized that 
interfaces are more suitable for type-checking at compile time. Interfaces have less overhead since they do not exist at 
runtime and are erased when the code is transpiled to JS. Although classes can define methods relevant to class objects, 
this feature was not useful for us. In a [later PR](https://github.com/reposense/RepoSense/pull/1965), we decided to 
switch to using an interface to improve the performance of the frontend.

#### 1.5 Pug
Pug is a templating language that makes it easier to write reusable HTML components with cleaner syntax. It is useful 
when working with data-driven web applications like RepoSense. Although it can be challenging to find resources that 
provide documentation on 
[using Vue and Pug together](https://medium.com/@martinsOnuoha/building-vue-components-with-pug-stylus-564615ed289), 
Pug's syntax is much faster to develop in than HTML once you get used to it.

#### 1.6 Sass and CSS
Sass is a CSS pre-processor and an extension of CSS. It helps reduce repetition in CSS and saves programming time by 
providing features like variables, mixins, imports, and inheritance. A Sass pre-processor transpiles Sass code into 
standard CSS as browsers can only understand plain CSS code.

**1.6.1 Choosing between Placeholders and Mixins**

The difference between mixins and placeholders is that placeholders consolidate mutually-shared code, whereas mixins just
assign the properties to the individual classes — along with whatever was specific to that class. Because of this, it’s
preferred to use placeholders. But since placeholders aren’t able to take parameters, it’s better to use mixins in such 
cases.

I had to decide between placeholders and mixins when trying to consolidate the code required for a tooltip tail, and assign
it along with some specific properties depending on whether the tooltip was top-aligned or bottom-aligned. Hence, I made use
of placeholders for this as they group together mutually-shared code. In another 
[PR](https://github.com/reposense/RepoSense/pull/1979), I used mixins to standardize the fonts used throughout the 
frontend as fonts only need to be assigned to the CSS classes along with their other properties.

#### 1.7 Cypress
Cypress is a powerful web testing framework designed for end-to-end testing. Unlike Selenium, it operates within the application, 
allowing high flexibility to access any objects in the app, including DOM objects and the window, similar to how we do 
within the code itself.

**1.7.1 Effective and efficient test case design**

To ensure effective and efficient test case design, I have targeted potential fault points with each of my Cypress test 
cases. However, I noticed repetitive Cypress commands in these test cases, which can be extracted into a common function 
for better reusability. While the rest of the codebase also uses such repetitive commands in all test cases
for setup, we should plan to extract all the setup commands into a common function to allow for reusability.

#### 1.8 Linting
Linting is the process of performing static analysis on code to identify programming or code style errors. While I have used
code analysis tools of IDEs, I had not explicitly enforced custom coding rules using lints before.

**1.8.1 Enforcing Custom Coding Rules with ESLint**

During the migration to TypeScript, we decided to use the Airbnb style guide, similar to how we used it for JavaScript. 
Besides, we defined other [custom rules](https://typescript-eslint.io/rules/), and I created a
[first-timer issue](https://github.com/reposense/RepoSense/issues/1980) that deals with the consistent use of `T[]` or 
`Array` throughout the codebase. This helps enforce coding standards and make the code more consistent and maintainable.

---

The Backend for RepoSense is written in Java, and testing is done using JUnit. Since RepoSense is for contribution analysis,
Git commands are highly used within the project. Gradle is used to manage the project dependencies and for DevOps tasks.

#### 1.9 Git
**1.9.1 Understanding `git log`**

For working on the [PR to include merge commits](https://github.com/reposense/RepoSense/pull/1882) in the web dashboard, some
backend changes were required as merge commits were not included in the generated report itself. Hence, I had to look into the
docs of git commands, specifically `git log`, to understand what flags I could make use of to include all the desired
commits in the report. Previously, we were using the `--no-merges` flag to remove all merges from the report. However, simply
removing this flag did not help in including all the merge commits in the new report. This may be because git continues to
simplify “uninteresting” merges in the default mode. Finally, the use of `--full-history` helped include all commits without
merging any same content commits together. `git log` also had to option to format its output with a `<format-string>`, and
this formatted output makes it easy for us to parse the results and generate our repository analysis reports.

**1.9.2 Spoofing for Good**

I was surprised by how easy it is to commit as someone else using Git as long as one has write access. I had to make use of this
technique when I had to create a test commit, as only commits from a selected group of users are part of the Cypress test
dashboard. I [spoofed](https://github.com/reposense/RepoSense/commit/ffbc714a11c39fae870d1ea994ce200008c63756) one of 
these users so that the commit to test appears on the test dashboard.

---

### 2. Software Engineering

#### 2.1 Design choices
**2.1.1 Object parameter vs multiple parameters for constructors**

While creating a `User` object in TypeScript, I encountered the challenge of passing in a large number of arguments (~10) 
to construct the object. This made me wonder what the best way of initialising such objects with large number of 
attributes is. I was exploring the use of a single object parameter, as it makes the code much cleaner. However, there 
is a tradeoff of whether it would be type safe to just pass an object without any type as a parameter into the function. 
Yet, I decided to continue with the method of using an object argument as this issue of type safety could be mitigated 
in the future by checking that the object being passed in as the argument implements the `User` interface, 
when migrating to TypeScript, which was eventually done.

#### 2.2 Reflections
**2.2.1 Understanding a Language/Tool Before Working with It**

Previously, I had the mindset of just making things work without understanding the inner workings of a language or tool.
However, I realized that this approach only led to superficial knowledge, making each challenge as difficult as the last.
This semester, I gained a new perspective on how understanding the language/tool can make things easier down the road.
I now strive for a good balance of theory and practical knowledge to accumulate my understanding and improve over time.

**2.2.2 Applying the "Make it Work, Make it Right, Make it Fast" Principle**

While working on a [PR](https://github.com/reposense/RepoSense/pull/1939) to differentiate between authors while using 
'merge group', I applied the principle of _"Make it work, Make it right, Make it fast."_ Initially, I focused on making 
it work and fixing any edge cases. Later on, I refactored the code to optimize it. Additionally, I conducted performance 
analysis for the PR after it was complete, which can be accessed 
[here](https://github.com/reposense/RepoSense/pull/1939#issuecomment-1518718579).

**2.2.3 Full-Stack Development Experience**

Working on the [show merge commits PR](https://github.com/reposense/RepoSense/pull/1882) provided a chance to work on 
all aspects of the codebase as a frontend developer. I researched Git to find out how to include all merge commits, 
edited the Java backend parsers to include an additional field for whether a commit is a merge commit, and made frontend 
changes to include merge commits within the HTML report. Furthermore, I wrote test cases for frontend Cypress, backend 
unit tests, and system tests. This experience was rewarding as it allowed me to do full-stack development and learn how 
all the components work together while solving a single problem.

---

### 3. Project Management

#### 3.1 Lessons Learned from Contributing to an Open-Source Project

**3.1.1 Understanding the Contribution Workflow**

Contributing to RepoSense has provided me with valuable insights into the contribution workflow for open-source projects.
It has helped me understand the quality expectations that are necessary for maintaining a high-quality codebase.
However, having strict rules can sometimes hinder the PR review process, leading to longer review cycles. Hence, to
strike a balance between quality and speed, setting guidelines and maintaining effective communication channels is 
essential.

**3.1.2 Importance of Documentation**

Documentation is an integral part of open-source projects, and its importance cannot be overemphasized. It's easy to forget to
update the documentation after making changes in a PR, leading to outdated documentation. Going forward, I recognize the need to
maintain an up-to-date documentation to ensure that future contributors have access to accurate and comprehensive information.
To this end, I suggest having a checklist in the PR issue template to remind contributors of the need to update documentation.

**3.1.3 Optimal PR Length**

I received feedback from my mentors that my PRs were too long, leading to difficulty in reviewing. It was suggested that
breaking down the PRs into smaller ones would make the review process easier. Based on this feedback, I have made a conscious
effort to create smaller PRs going forward.

**3.1.4 Understanding Versioning**

Contributing to RepoSense has provided me with insights into versioning and how it is maintained for open-source projects.
The process of maintaining separate web pages for documentation of released versions and the master version has been an
important lesson. To deepen my understanding of project management, I am planning on making a release myself in the near future.