
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-date-fns"}},[_v("Project: date-fns"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-date-fns","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("date-fns is a modern TypeScript date utility library. It provides the most comprehensive, yet simple and consistent toolset for manipulating JavaScript dates in a browser & Node.js.")]),_v(" "),_c('p',[_v("It is like Lodash for dates. It has 200+ functions to manipulate dates, is modular and immutable, uses native dates, provides I18n support, and is built using pure functions.")]),_v(" "),_c('p',[_v("The project has a main library, "),_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns"}},[_v("date-fns")]),_v(", and a documentation website, "),_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns.org"}},[_v("date-fns.org")]),_v(".")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Having utilized the date-fns library in an event management system previously, I decided to contribute to the project. I did this by setting up the function aliases system and then focused on improving Duration support.")]),_v(" "),_c('p',[_c('strong',[_v("Function Aliases and Documentation Site")])]),_v(" "),_c('p',[_v("My first PR was to add aliases to functions in date-fns. I added an alias "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("formatDate")]),_v(" for the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("format")]),_v(" function in "),_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns/pull/3653"}},[_v("PR#3653")]),_v(" and reached out to the project maintainer "),_c('a',{attrs:{"href":"https://github.com/kossnocorp"}},[_v("@kossnocorp")]),_v(" for guidance regarding long-term contributions and getting more PR visibility. He agreed to provide weekly reviews to facilitate my contributions and we set up a communication channel on Discord.")]),_v(" "),_c('p',[_v("He suggested that I work on the documentation website, "),_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns.org"}},[_v("date-fns.org")]),_v(" as the docs did not support displaying function aliases yet. I then added aliases to functions in the TypeDoc documentation website in "),_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns.org/pull/216"}},[_v("PR#216")]),_v(".")]),_v(" "),_c('p',[_c('strong',[_v("Duration Support")])]),_v(" "),_c('p',[_v("Next, as per the project's current needs shared by the maintainer, I focussed on improving Duration support in date-fns. I submitted a "),_c('a',{attrs:{"href":"https://gist.github.com/ckcherry23/e7641d65122259c699b2e1437f33d4c9"}},[_v("proposal to improve Duration support")]),_v(" to the project maintainer and got started with reviewing issues and PRs related to Duration support. Since one of the PR authors was unresponsive, I took over the PR, fixed the issues, added extensive tests and updated the documentation in "),_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns/pull/3768"}},[_v("PR#3768")]),_v(" for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("parseISODuration")]),_v(".")]),_v(" "),_c('p',[_c('strong',[_v("Timeline of Contributions")])]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Date")]),_v(" "),_c('th',[_v("Contribution")]),_v(" "),_c('th',[_v("Links")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("08 Jan 24")]),_v(" "),_c('td',[_v("Authored PR #1")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns/pull/3653"}},[_v("Add alias formatDate for format function #3653")])])]),_v(" "),_c('tr',[_c('td',[_v("11 Jan 24")]),_v(" "),_c('td',[_v("Authored PR #2")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns.org/pull/216"}},[_v("Add aliases to functions in typedoc #216")])])]),_v(" "),_c('tr',[_c('td',[_v("11 Jan 24")]),_v(" "),_c('td',[_v("Created issue")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns.org/issues/217"}},[_v("Blockstyle quotes not readable in light mode #217")])])]),_v(" "),_c('tr',[_c('td',[_v("Week 2")]),_v(" "),_c('td',[_v("Reviewed PR")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns/pull/3673"}},[_v("Add alias isExisting for isExists #3673")])])]),_v(" "),_c('tr',[_c('td',[_v("Week 2")]),_v(" "),_c('td',[_v("Submitted proposal")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://gist.github.com/ckcherry23/e7641d65122259c699b2e1437f33d4c9"}},[_v("Proposal to improve Duration support")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/orgs/date-fns/discussions/3666#discussioncomment-8341732"}},[_v("Discussion comment")])])]),_v(" "),_c('tr',[_c('td',[_v("Week 3")]),_v(" "),_c('td',[_v("Contributed to discussion")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/orgs/date-fns/discussions/3693"}},[_v("Formatting duration options #3693")])])]),_v(" "),_c('tr',[_c('td',[_v("Week 3-5")]),_v(" "),_c('td',[_v("Reviewed PR")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns/pull/3151"}},[_v("feat: add parseISODuration #3151")])])]),_v(" "),_c('tr',[_c('td',[_v("Week 6-8")]),_v(" "),_c('td',[_v("Suggested improvements")]),_v(" "),_c('td',[_v("ExtendedDuration and "),_c('a',{attrs:{"href":"https://tc39.es/proposal-temporal/docs/duration.html"}},[_v("Temporal proposal")])])]),_v(" "),_c('tr',[_c('td',[_v("Week 12-13")]),_v(" "),_c('td',[_v("Authored PR #3")]),_v(" "),_c('td',[_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns/pull/3768"}},[_v("Add parseISODuration function #3768")])])])])])]),_c('h4',{attrs:{"id":"other-projects"}},[_v("Other Projects"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#other-projects","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Before date-fns, I also tried contributing to other OSS projects to make a decision on which project to choose.")]),_v(" "),_c('p',[_c('strong',[_v("matplotlib")])]),_v(" "),_c('p',[_v("When applying for CS3281, I contributed to "),_c('a',{attrs:{"href":"https://github.com/matplotlib/matplotlib"}},[_v("matplotlib")]),_v(", a Python plotting library. I added an ellipse class for annotation box styles in "),_c('a',{attrs:{"href":"https://github.com/matplotlib/matplotlib/pull/24596"}},[_v("PR#24596")]),_v(". The PR was merged and I learned how to contribute to open-source projects by following the contributing guide. The maintainers were responsive to issues and PRs; however, I sought a project that aligned better with my interests and chosen area of expertise.")]),_v(" "),_c('p',[_c('strong',[_v("react-awesome-loaders")])]),_v(" "),_c('p',[_v("I also tried contributing to "),_c('a',{attrs:{"href":"https://github.com/ashutosh1919/react-awesome-loaders"}},[_v("react-awesome-loaders")]),_v(", a React component library, in Dec 2023. Although the library had amazing loader designs, it used Node 12 and could not be utilized in modern projects using Next.js, which has a minimum Node requirement of Node 18. I successfully updated the node version in the project and used "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ncu")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm-check-updates")]),_v(" to update old dependencies in "),_c('a',{attrs:{"href":"https://github.com/ashutosh1919/react-awesome-loaders/pull/24"}},[_v("PR#24")]),_v(". Unfortunately, the documentation site could not be updated to Node 18 as it was created with "),_c('a',{attrs:{"href":"https://github.com/gregberge/smooth-doc"}},[_v("smooth-doc")]),_v(", which was not compatible with Node 18. Considering that I needed to migrate the entire documentation site to a new framework, I put the PR on hold and it was not merged.")]),_v(" "),_c('p',[_c('strong',[_v("checkstyle")])]),_v(" "),_c('p',[_v("Then I tried my hand at "),_c('a',{attrs:{"href":"https://github.com/checkstyle/checkstyle"}},[_v("checkstyle")]),_v(", a Java static code analysis tool, in Jan 2024. I removed //ok comments for the equalavoidsnull module in "),_c('a',{attrs:{"href":"https://github.com/checkstyle/checkstyle/pull/14215"}},[_v("PR#14215")]),_v(" and the PR was merged. The project maintainers were responsive and the issues for new contributors were handpicked by maintainers and labelled as \"good first issue\", \"good second issue\", \"good third issue\" and \"good fourth issue\" (1 - 3 each). This facilitated easy identification of issues for new contributors and progression through the contribution process.")]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"1-tools-and-technologies"}},[_v("1. Tools and Technologies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-tools-and-technologies","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("1.1 Learning why date-fns over others")])]),_v(" "),_c('p',[_v("Working with a popular npm package, I learned extensively about the library's perks from the documentation itself. I discovered that date-fns utilizes tree-shaking to reduce the size of the final bundle and read the "),_c('a',{attrs:{"href":"https://webpack.js.org/guides/tree-shaking/"}},[_v("webpack documentation")]),_v(" to understand its functionality. Tree shaking involves dead code elimination to ensure production-ready code with minimal file size, allowing compatibility with tools like webpack, Rollup, etc.")]),_v(" "),_c('p',[_v("The project also employs a function-based API where each function is a pure function, enabling better immutability and testability. Moreover, it allows for importing only the necessary functions, enhancing performance. Additionally, the project offers a functional-programming submodule facilitating improved function composition, which allowed revisiting some concepts taught in CS1101S.")]),_v(" "),_c('p',[_c('strong',[_v("1.2 Testing npm packages")])]),_v(" "),_c('p',[_v("Since I worked on an npm package, I learned various methods to test npm packages locally beyond standard unit testing. Instead of repeatedly publishing the package to npm (which I would have done a year ago -_-), I utilized "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm link")]),_v(" to test the package locally in other JavaScript projects. I learned about this approach from "),_c('a',{attrs:{"href":"https://urre.me/writings/test-local-npm-packages/"}},[_v("Urban Sanden's blog")]),_v(". Additionally, I used "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm tsx")]),_v(" to get a TypeScript REPL (Read-Eval-Print-Loop) and required the respective date-fns function to test them within the terminal. This was facilitated by "),_c('a',{attrs:{"href":"https://tsx.is/"}},[_v("tsx")]),_v(", which stands for TypeScript Execute, and enables running TypeScript in Node.js with improved Developer Experience (watch mode, scripts, etc).")]),_v(" "),_c('p',[_c('strong',[_v("1.3 Generating documentation")])]),_v(" "),_c('p',[_v("date-fns uses TypeDoc to generate documentation for the project. I used "),_c('a',{attrs:{"href":"https://typedoc.org/guides/overview/"}},[_v("the official TypeDoc docs")]),_v(" to understand its functionality. The documentation site generator created documentation based on the TSDoc comments deployed on Firebase. The TSDoc standard was used for documenting the code, akin to JavaDoc. Having worked with multiple TypeScript projects before, this was my first experience using a TypeScript documentation generator, and it was smooth.")]),_v(" "),_c('p',[_c('strong',[_v("1.4 Date manipulation in JavaScript")])]),_v(" "),_c('p',[_v("Exploring the history of "),_c('a',{attrs:{"href":"https://medium.com/@vitorbritto/mastering-date-an-time-in-javascript-a4c12501aa6a"}},[_v("date manipulation in JavaScript")]),_v(" and its evolution over time was enlightening. I learned about various methods for date manipulation in JavaScript and compared date-fns with competing libraries like "),_c('a',{attrs:{"href":"https://momentjs.com/"}},[_v("Moment.js")]),_v(" and "),_c('a',{attrs:{"href":"https://day.js.org/"}},[_v("Day.js")]),_v(".")]),_v(" "),_c('p',[_v("Additionally, considering date-fns aims to improve Duration support, I explored the experimental ECMAScript "),_c('a',{attrs:{"href":"https://tc39.es/proposal-temporal/docs/duration.html"}},[_v("Temporal proposal")]),_v(" that seeks to provide native support for Durations in JavaScript. This proposal could potentially enhance duration functions without using our library, however, polyfills like these tend to be heavy, prompting date-fns to implement a lightweight solution as an interim API with a minimal subset of the Temporal proposal.")]),_v(" "),_c('h4',{attrs:{"id":"2-reflections-on-contributing-to-date-fns"}},[_v("2. Reflections on contributing to date-fns"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-reflections-on-contributing-to-date-fns","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("date-fns has a "),_c('a',{attrs:{"href":"https://date-fns.org/docs/Contributing"}},[_v("Contributing Guide")]),_v(" detailing how to contribute to the project.")]),_v(" "),_c('p',[_c('strong',[_v("2.1 Good: No more \"Move fast and break things\"")])]),_v(" "),_c('p',[_v("Having worked in fast-paced environments before, I generally embrace the \"move fast and break things\" mentality (maybe a bit too much :3 -> RepoSense issues "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/2164"}},[_v("#2164")]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/2184"}},[_v("#2184")]),_v("). However, you do not have that \"freedom\" when working on an npm package with 20 million weekly downloads. This was a good learning experience for me as even a simple function such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("parseISODuration")]),_v(" required extensive discussions regarding design decisions, for example, whether undefined values should be preserved, what rules should be followed for parsing, etc., and all these should consider the standard proposals, the competitor libraries' features, and the community's feedback.")]),_v(" "),_c('p',[_c('strong',[_v("2.2 Good: Making a difference")])]),_v(" "),_c('p',[_v("While many other OSS projects I contributed to involved fixing bugs or adding small features, date-fns was more about making a difference. Since date-fns is a modular library with pure functions, contributors get to work on actual features that can be used by millions of developers worldwide. This was a great motivation for me to contribute to date-fns.")]),_v(" "),_c('p',[_c('strong',[_v("2.3 Good: Targeted mentorship")])]),_v(" "),_c('p',[_v("I reached out to the maintainers of date-fns and they were very helpful in guiding me on how to contribute to the project. This helped me work on the project for a longer period of time and make more meaningful contributions based on the project's needs instead of randomly picking issues to work on.")]),_v(" "),_c('p',[_c('strong',[_v("2.4 To improve: Community management")])]),_v(" "),_c('p',[_v("date-fns has a large community and a lot of issues are opened every day. However, the 3-5 maintainers of the project do not have the bandwidth to manage all the issues. This makes it difficult for new contributors to find issues to work on. Moreover, repetitive issues are opened multiple times, leading to duplicated efforts in PRs. This is something that can be improved in date-fns.")]),_v(" "),_c('p',[_v("Since there are too many PRs opened, the maintainers have decided to only focus on those PRs that contribute towards the project's long-term goals, which is a good strategy to ensure that the project is moving in the right direction. Sometimes, contributors are not responsive to maintainers' feedback and this leads to abandoned PRs. Instead of starting from scratch, I learned how to handle abandoned PRs by taking over one and completing the work.")]),_v(" "),_c('p',[_c('strong',[_v("2.5 To improve: Documentation contrasts")])]),_v(" "),_c('p',[_v("While date-fns has a very comprehensive documentation website, the "),_c('a',{attrs:{"href":"https://github.com/date-fns/date-fns.org"}},[_v("documentation website generator")]),_v(" did not have any contribution guidelines, because it was mainly handled by the core team. This made it difficult for me to understand how to contribute to the custom documentation website generator, and I had to reach out to the maintainers for guidance. This is understandable as the documentation site generator does not expect much community contributions, but is still something that can be improved in date-fns.")]),_v(" "),_c('h4',{attrs:{"id":"3-suggestions-for-reposense"}},[_v("3. Suggestions for RepoSense"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-suggestions-for-reposense","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("3.1 One-to-one mentorship")])]),_v(" "),_c('p',[_v("date-fns has a system where maintainers provide weekly advice to contributors to help them make meaningful contributions to the project. This is a great way to guide new contributors and help them understand the project better. This is something that can be adopted by RepoSense to help new contributors make contributions that align with project goals.")]),_v(" "),_c('p',[_c('strong',[_v("3.2 Automatic documentation generation")])]),_v(" "),_c('p',[_v("Looking at the custom documentation generator for date-fns got me thinking about whether there is a way to automatically generate documentation for RepoSense, especially for the CLI arguments and the configuration files. This would help new contributors understand the project better and also assist in maintaining up-to-date documentation. Although the work required to set up the documentation generator might be substantial, it could prove to be a worthwhile investment in the long run, particularly if well-documented.")]),_v(" "),_c('p',[_c('strong',[_v("3.3 New contributor issues")])]),_v(" "),_c('p',[_v("If we aim to attract more first-time contributors to NUS-OSS projects as opposed to long-term contributors, we could establish a system akin to checkstyle's approach by labelling issues as \"good first issue,\" \"good second issue,\" and so on. By doing this, RepoSense can streamline the onboarding process and foster a welcoming community for a diverse pool of contributors. This would also help in managing the influx of new contributors and ensure that they have a smooth onboarding experience.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")])]),_v(" on Sun, 12 May 2024, 15:16:31 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  