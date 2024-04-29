### Project: date-fns

date-fns is a modern TypeScript date utility library. It provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.

It is like Lodash for dates. It has 200+ functions to manipulate dates, is modular and immutable, uses native dates, provides I18n support, and is built using pure functions.

The project has a main library, [date-fns](https://github.com/date-fns/date-fns), and a documentation website, [date-fns.org](https://github.com/date-fns/date-fns.org).

### My Contributions

Having utilized the date-fns library in an event management system previously, I decided to contribute to the project. I did this by setting up the function aliases system and then focused on improving Duration support.

**Function Aliases and Documentation Site**

My first PR was to add aliases to functions in date-fns. I added an alias `formatDate` for the `format` function in [PR#3653](https://github.com/date-fns/date-fns/pull/3653) and reached out to the project maintainer [@kossnocorp](https://github.com/kossnocorp) for guidance regarding long-term contributions and getting more PR visibility. He agreed to provide weekly reviews to facilitate my contributions and we set up a communication channel on Discord.

He suggested that I work on the documentation website, [date-fns.org](https://github.com/date-fns/date-fns.org) as the docs did not support displaying function aliases yet. I then added aliases to functions in the TypeDoc documentation website in [PR#216](https://github.com/date-fns/date-fns.org/pull/216). 

**Duration Support**

Next, as per the project's current needs shared by the maintainer, I focussed on improving Duration support in date-fns. I submitted a [proposal to improve Duration support](https://gist.github.com/ckcherry23/e7641d65122259c699b2e1437f33d4c9) to the project maintainer and got started with reviewing issues and PRs related to Duration support. Since one of the PR authors was unresponsive, I took over the PR, fixed the issues, added extensive tests and updated the documentation in [PR#3768](https://github.com/date-fns/date-fns/pull/3768) for `parseISODuration`.


**Timeline of Contributions**

| Date       | Contribution              | Links                                                                                                                                                                                                          |
|------------|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 08 Jan 24  | Authored PR #1            | [Add alias formatDate for format function #3653](https://github.com/date-fns/date-fns/pull/3653)                                                                                                               | 
| 11 Jan 24  | Authored PR #2            | [Add aliases to functions in typedoc #216](https://github.com/date-fns/date-fns.org/pull/216)                                                                                                                  |
| 11 Jan 24  | Created issue             | [Blockstyle quotes not readable in light mode #217](https://github.com/date-fns/date-fns.org/issues/217)                                                                                                       |
| Week 2     | Reviewed PR               | [Add alias isExisting for isExists #3673](https://github.com/date-fns/date-fns/pull/3673)                                                                                                                      |
| Week 2     | Submitted proposal        | [Proposal to improve Duration support](https://gist.github.com/ckcherry23/e7641d65122259c699b2e1437f33d4c9), [Discussion comment](https://github.com/orgs/date-fns/discussions/3666#discussioncomment-8341732) |
| Week 3     | Contributed to discussion | [Formatting duration options #3693](https://github.com/orgs/date-fns/discussions/3693)                                                                                                                         |
| Week 3-5   | Reviewed PR               | [feat: add parseISODuration #3151](https://github.com/date-fns/date-fns/pull/3151)                                                                                                                             |
| Week 6-8   | Suggested improvements    | ExtendedDuration and [Temporal proposal](https://tc39.es/proposal-temporal/docs/duration.html)                                                                                                                 |
| Week 12-13 | Authored PR #3            | [Add parseISODuration function #3768](https://github.com/date-fns/date-fns/pull/3768)                                                                                                                          |

#### Other Projects

Before date-fns, I also tried contributing to other OSS projects to make a decision on which project to choose.

**matplotlib**

When applying for CS3281, I contributed to [matplotlib](https://github.com/matplotlib/matplotlib), a Python plotting library. I added an ellipse class for annotation box styles in [PR#24596](https://github.com/matplotlib/matplotlib/pull/24596). The PR was merged and I learned how to contribute to open-source projects by following the contributing guide. The maintainers were responsive to issues and PRs; however, I sought a project that aligned better with my interests and chosen area of expertise.

**react-awesome-loaders**

I also tried contributing to [react-awesome-loaders](https://github.com/ashutosh1919/react-awesome-loaders), a React component library, in Dec 2023. Although the library had amazing loader designs, it used Node 12 and could not be utilized in modern projects using Next.js, which has a minimum Node requirement of Node 18. I successfully updated the node version in the project and used `ncu` or `npm-check-updates` to update old dependencies in [PR#24](https://github.com/ashutosh1919/react-awesome-loaders/pull/24). Unfortunately, the documentation site could not be updated to Node 18 as it was created with [smooth-doc](https://github.com/gregberge/smooth-doc), which was not compatible with Node 18. Considering that I needed to migrate the entire documentation site to a new framework, I put the PR on hold and it was not merged.

**checkstyle**

Then I tried my hand at [checkstyle](https://github.com/checkstyle/checkstyle), a Java static code analysis tool, in Jan 2024. I removed //ok comments for the equalavoidsnull module in [PR#14215](https://github.com/checkstyle/checkstyle/pull/14215) and the PR was merged. The project maintainers were responsive and the issues for new contributors were handpicked by maintainers and labelled as "good first issue", "good second issue", "good third issue" and "good fourth issue" (1 - 3 each). This facilitated easy identification of issues for new contributors and progression through the contribution process. 

### My Learning Record

#### 1. Tools and Technologies

**1.1 Learning why date-fns over others**

Working with a popular npm package, I learned extensively about the library's perks from the documentation itself. I discovered that date-fns utilizes tree-shaking to reduce the size of the final bundle and read the [webpack documentation](https://webpack.js.org/guides/tree-shaking/) to understand its functionality. Tree shaking involves dead code elimination to ensure production-ready code with minimal file size, allowing compatibility with tools like webpack, Rollup, etc. 

The project also employs a function-based API where each function is a pure function, enabling better immutability and testability. Moreover, it allows for importing only the necessary functions, enhancing performance. Additionally, the project offers a functional-programming submodule facilitating improved function composition, which allowed revisiting some concepts taught in CS1101S.

**1.2 Testing npm packages**

Since I worked on an npm package, I learned various methods to test npm packages locally beyond standard unit testing. Instead of repeatedly publishing the package to npm (which I would have done a year ago -_-), I utilized `npm link` to test the package locally in other JavaScript projects. I learned about this approach from [Urban Sanden's blog](https://urre.me/writings/test-local-npm-packages/). Additionally, I used `npm tsx` to get a TypeScript REPL (Read-Eval-Print-Loop) and required the respective date-fns function to test them within the terminal. This was facilitated by [tsx](https://tsx.is/), which stands for TypeScript Execute, and enables running TypeScript in Node.js with improved Developer Experience (watch mode, scripts, etc).

**1.3 Generating documentation**

date-fns uses TypeDoc to generate documentation for the project. I used [the official TypeDoc docs](https://typedoc.org/guides/overview/) to understand its functionality. The documentation site generator created documentation based on the TSDoc comments deployed on Firebase. The TSDoc standard was used for documenting the code, akin to JavaDoc. Having worked with multiple TypeScript projects before, this was my first experience using a TypeScript documentation generator, and it was smooth.

**1.4 Date manipulation in JavaScript**

Exploring the history of [date manipulation in JavaScript](https://medium.com/@vitorbritto/mastering-date-an-time-in-javascript-a4c12501aa6a) and its evolution over time was enlightening. I learned about various methods for date manipulation in JavaScript and compared date-fns with competing libraries like [Moment.js](https://momentjs.com/) and [Day.js](https://day.js.org/).

Additionally, considering date-fns aims to improve Duration support, I explored the experimental ECMAScript [Temporal proposal](https://tc39.es/proposal-temporal/docs/duration.html) that seeks to provide native support for Durations in JavaScript. This proposal could potentially enhance duration functions without using our library, however, polyfills like these tend to be heavy, prompting date-fns to implement a lightweight solution as an interim API with a minimal subset of the Temporal proposal.


#### 2. Reflections on contributing to date-fns

date-fns has a [Contributing Guide](https://date-fns.org/docs/Contributing) detailing how to contribute to the project.

**2.1 Good: No more "Move fast and break things"**

Having worked in fast-paced environments before, I generally embrace the "move fast and break things" mentality (maybe a bit too much :3 -> RepoSense issues [#2164](https://github.com/reposense/RepoSense/issues/2164) and [#2184](https://github.com/reposense/RepoSense/issues/2184)). However, you do not have that "freedom" when working on an npm package with 20 million weekly downloads. This was a good learning experience for me as even a simple function such as `parseISODuration` required extensive discussions regarding design decisions, for example, whether undefined values should be preserved, what rules should be followed for parsing, etc., and all these should consider the standard proposals, the competitor libraries' features, and the community's feedback.

**2.2 Good: Making a difference**

While many other OSS projects I contributed to involved fixing bugs or adding small features, date-fns was more about making a difference. Since date-fns is a modular library with pure functions, contributors get to work on actual features that can be used by millions of developers worldwide. This was a great motivation for me to contribute to date-fns.

**2.3 Good: Targeted mentorship**

I reached out to the maintainers of date-fns and they were very helpful in guiding me on how to contribute to the project. This helped me work on the project for a longer period of time and make more meaningful contributions based on the project's needs instead of randomly picking issues to work on. 

**2.4 To improve: Community management**

date-fns has a large community and a lot of issues are opened every day. However, the 3-5 maintainers of the project do not have the bandwidth to manage all the issues. This makes it difficult for new contributors to find issues to work on. Moreover, repetitive issues are opened multiple times, leading to duplicated efforts in PRs. This is something that can be improved in date-fns.

Since there are too many PRs opened, the maintainers have decided to only focus on those PRs that contribute towards the project's long-term goals, which is a good strategy to ensure that the project is moving in the right direction. Sometimes, contributors are not responsive to maintainers' feedback and this leads to abandoned PRs. Instead of starting from scratch, I learned how to handle abandoned PRs by taking over one and completing the work.

**2.5 To improve: Documentation contrasts**

While date-fns has a very comprehensive documentation website, the [documentation website generator](https://github.com/date-fns/date-fns.org) did not have any contribution guidelines, because it was mainly handled by the core team. This made it difficult for me to understand how to contribute to the custom documentation website generator, and I had to reach out to the maintainers for guidance. This is understandable as the documentation site generator does not expect much community contributions, but is still something that can be improved in date-fns.

#### 3. Suggestions for RepoSense

**3.1 One-to-one mentorship**

date-fns has a system where maintainers provide weekly advice to contributors to help them make meaningful contributions to the project. This is a great way to guide new contributors and help them understand the project better. This is something that can be adopted by RepoSense to help new contributors make contributions that align with project goals.

**3.2 Automatic documentation generation**

Looking at the custom documentation generator for date-fns got me thinking about whether there is a way to automatically generate documentation for RepoSense, especially for the CLI arguments and the configuration files. This would help new contributors understand the project better and also assist in maintaining up-to-date documentation. Although the work required to set up the documentation generator might be substantial, it could prove to be a worthwhile investment in the long run, particularly if well-documented.

**3.3 New contributor issues**

If we aim to attract more first-time contributors to NUS-OSS projects as opposed to long-term contributors, we could establish a system akin to checkstyle's approach by labelling issues as "good first issue," "good second issue," and so on. By doing this, RepoSense can streamline the onboarding process and foster a welcoming community for a diverse pool of contributors. This would also help in managing the influx of new contributors and ensure that they have a smooth onboarding experience.
