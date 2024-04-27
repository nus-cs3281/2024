
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"gradle"}},[_v("Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Gradle is a very flexible build automation tool used for everything from testing and formatting, to builds and deployments. Unlike with other build automation tools like Maven where build scripts written in XML (a widely hated feature of the tool), Gradle build scripts are written in a domain specific language based on Groovy or Kotlin, which are both JVM based languages. This means that it can interact seamlessly with Java libraries.")]),_v(" "),_c('p',[_v("Gradle is also much more performant than alternatives like Maven because of its:")]),_v(" "),_c('ul',[_c('li',[_v("Build caching: Only reruns tasks whose inputs have been changed.")]),_v(" "),_c('li',[_v("Gradle daemon: A background process that stores information about the project in memory so that startup time can be cut down during builds.")])]),_v(" "),_c('p',[_v("RepoSense recently added functionality for hot reload on frontend as a Gradle task, which made frontend development a lot more productive. Unfortunately, the feature isn't available on Linux because the package we were using (Apache Ant's "),_c('a',{attrs:{"href":"https://ant.apache.org/manual/api/org/apache/tools/ant/taskdefs/condition/package-summary.html"}},[_v("condition package")]),_v(") could not specifically check for it. Migrating to Gradle's own "),_c('a',{attrs:{"href":"https://docs.gradle.org/current/javadoc/org/gradle/nativeplatform/platform/package-summary.html"}},[_v("platform package")]),_v(" recently taken out of incubation, allowed us to support all 3 prominent operating systems.")]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/userguide.html"}},[_v("https://docs.gradle.org/current/userguide/userguide.html")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/gradle_daemon.html#sec:why_the_daemon"}},[_v("https://docs.gradle.org/current/userguide/gradle_daemon.html#sec:why_the_daemon")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/javadoc/index.html?overview-summary.html"}},[_v("https://docs.gradle.org/current/javadoc/index.html?overview-summary.html")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/javadoc/org/gradle/nativeplatform/platform/package-summary.html"}},[_v("https://docs.gradle.org/current/javadoc/org/gradle/nativeplatform/platform/package-summary.html")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://ant.apache.org/manual/api/org/apache/tools/ant/taskdefs/condition/package-summary.html"}},[_v("https://ant.apache.org/manual/api/org/apache/tools/ant/taskdefs/condition/package-summary.html")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/a/31443955"}},[_v("https://stackoverflow.com/a/31443955")])])]),_v(" "),_c('h3',{attrs:{"id":"github-actions-and-api"}},[_v("GitHub Actions and API"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions-and-api","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Like Gradle, Github Actions help with automation of workflows like CI/CD and project management, and can be triggered by a variety of events (pull requests, issues, releases, forks, etc). It also has a growing library of plugins that make workflows a lot easier to set-up. I was surprised that there is some nice tooling support for GitHub actions on IntelliJ.")]),_v(" "),_c('p',[_v("GitHub actions allows users to run CI on a variety of operating systems, such as Ubuntu XX.04, macOS and Windows Server (which is virtually the same as Windows 10/11 but with better hardware support and more stringent security features).")]),_v(" "),_c('p',[_v("GitHub also provides a variety of API to interact with these objects. One quirk I came across with the API was that posting single comments on pull requests need to go through the issues endpoint instead of the pulls endpoint (the endpoint for pulls requires code to be referenced). This doesn't cause problems since issues and pulls will never have identical IDs.")]),_v(" "),_c('p',[_v("GitHub deployment APIs also returns deployment information in pages, which is a sensible thing to do but can cause slight inconvenience when long running PRs have more deployments than can fit in a page.")]),_v(" "),_c('p',[_v("Actions and APIs also have some great documentation:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api"}},[_v("https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"}},[_v("https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"}},[_v("https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows")])])]),_v(" "),_c('h3',{attrs:{"id":"git-remotes"}},[_v("Git Remotes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-remotes","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Git exploded in popularity in large part due to Git hosting providers like GitHub. GitLab and Bitbucket are also commonly used Git hosts. RepoSense has thus far only largely supported GitHub, but there is a clear incentive to support other commonly used remotes. This is made a little challenging due to differences in conventions between the sites:")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',{staticStyle:{"text-align":"center"}}),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("base_url")])]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Commit View")]),_v(" "),_c('th',{staticStyle:{"text-align":"center"}},[_v("Blame View")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_v("GitHub")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("github.com")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{base_url}/{org}/{repo_name}/commit/{commit_hash}")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{base_url}/{org}/{repo_name}/blame/{branch}/{file_path}")])])]),_v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_v("GitLab")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("gitlab.com")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{base_url}/{org}/{repo_name}/-/commit/{commit_hash}")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{base_url}/{org}/{repo_name}/-/blame/{branch}/{file_path}")])])]),_v(" "),_c('tr',[_c('td',{staticStyle:{"text-align":"center"}},[_v("Bitbucket")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_v("bitbucket.org")]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{base_url}/{org}/{repo_name}/commits/{commit_hash}")])]),_v(" "),_c('td',{staticStyle:{"text-align":"center"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{base_url}/{org}/{repo_name}/annotate/{branch}/{file_path}")])])])])])]),_c('p',[_v("For example, Bitbucket uses the term 'annotate' instead of 'blame' because the word 'blame' is insufficiently positive.")]),_v(" "),_c('h3',{attrs:{"id":"triangular-git-workflows"}},[_v("Triangular Git workflows"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#triangular-git-workflows","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In investigating the output of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git remote -v")]),_v(", I noticed there were 2 remotes (fetch and push) for each remote name, which I was confused by. The utility of the separation of fetch and push remotes is for triangular workflows.")]),_v(" "),_c('p',[_v("We are probably familiar with the common workflow for updating a branch on a forked repo which involves first pulling updates from upstream master, then making changes and pushing to our own fork. This requires remembering to fetch and push to separate repos. With triangular workflows, you can have fetch and push apply to separate repos but with the same remote name, which makes this process much more convenient.")]),_v(" "),_c('h3',{attrs:{"id":"cypress-tests"}},[_v("Cypress Tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cypress-tests","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Cypress is a frontend testing tool for testing applications that run in the browser, with tests that are easy to read and write. It uses browser automation (similar to Selenium) and comes with a browser and relevant dependencies out of the box, so it's very easy to set-up. Cypress also provides a dashboard for convenient monitoring of test runs.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell"}},[_v("https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell")])]),_v(" "),_c('h3',{attrs:{"id":"bash-scripting"}},[_v("Bash Scripting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bash-scripting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Bash scripts can be run in a github action workflow, which greatly expands the scope of things you can do with actions. Bash is quite expressive (I hadn't realised just how much it could do). some cool things I learned you could do:")]),_v(" "),_c('ul',[_c('li',[_v("{$VAR,,} to lowercase string in $VAR.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("$*")]),_v(" gives parameter values separated by the value in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("IFS")]),_v(" (Internal File Separator).")]),_v(" "),_c('li',[_v("Pipe output into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("python3")]),_v(" with a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-c")]),_v(" flag and perform more complex processing with a single line python program.")]),_v(" "),_c('li',[_v("Standard output and error can be redirected separately (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ls 1> out 2> err")]),_v(")")])]),_v(" "),_c('h3',{attrs:{"id":"vue"}},[_v("Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Being relatively new to frontend tools, I found Vue.js to be quite interesting. Vue allows code reusability and abstractions through components. While I didn’t work extensively on the frontend, what I learned from the bits that I did work on was quite cool:")]),_v(" "),_c('p',[_c('strong',[_v("Vue state")]),_v(": I found it interesting that you could have computed properties that are accessed the same way as properties, but can depend on other properties and can dynamically update when these properties change. This is often more elegant than using a Vue watcher to update a field. You can even have computed setters that update dependent properties when set. A watcher, however, can be more appropriate when responses to changing data are expensive or need to be done asynchronously.")]),_v(" "),_c('p',[_c('strong',[_v("Vue custom directives")]),_v(": Directives are ways to reuse lower level DOM logic. Directives can define vue life-cycle hooks and later be bound to components (can actually take in any JavaScript object literal). For implementing lazy loads, I needed to use the vue-observe-visibility (external library) directive with slight modification to the hooks to be compatible with Vue3.")]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://v2.vuejs.org/v2/guide/computed.html"}},[_v("https://v2.vuejs.org/v2/guide/computed.html")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://vuejs.org/guide/reusability/custom-directives.html"}},[_v("https://vuejs.org/guide/reusability/custom-directives.html")])])]),_v(" "),_c('h3',{attrs:{"id":"pug"}},[_v("Pug"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#pug","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Pug is a templating language that compiles to HTML. It is less verbose and much more maintainable than HTML, and also allows basic presentation logic with conditionals, loops and case statements.")]),_v(" "),_c('h3',{attrs:{"id":"javascript-quirks"}},[_v("JavaScript Quirks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#javascript-quirks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("There are a lot of these, and most just remain quirks but some result in actual unintended bugs in production (often in edge cases). It was interesting to see this in our contribution bar logic. A technique sometimes used to extract the integer part of a number is to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("parseInt")]),_v(" (it's even suggested in a Stack Overflow "),_c('a',{attrs:{"href":"https://stackoverflow.com/a/48262505"}},[_v("answer")]),_v("). It turns out we were using this for calculating the number of contribution bars to display for a user. This works for most values, but breaks when numbers become very large or small (less than 10^-7). In this unlikely situation, we'd display anywhere from 1 to 9 extra bars (moral: use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Math.floor")]),_v(" instead!).")]),_v(" "),_c('h3',{attrs:{"id":"browser-engines"}},[_v("Browser Engines"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#browser-engines","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("An investigation into string representations in browsers led me down a rabbit hole of JavaScript runtimes and engines, and ultimately improved my understanding of JavaScript in general. Different browsers have different JS engines - Chrome uses V8, Firefox uses SpiderMonkey (the original JS engine written by Brendan Eich), Edge used to use Chakra but now also uses V8, Safari uses WebKit, etc. Engines often differ significantly in terms of the pipeline for code execution, garbage collection, and more.")]),_v(" "),_c('p',[_v("The V8 engine as an example, first parses JavaScript into an Abstract Syntax Tree (AST) which is then compiled into bytecode. This bytecode is interpreted by the Ignition interpreter (Ignition also handles compilation of the AST into bytecode). Code that is revisited often during interpretation is marked \"hot\" and compiled further into highly efficient machine code. This technique of optimising compilation based on run-time profiling (Just-In-Time (JIT) compilation) is also used in other browser engines like SpiderMonkey and the JVM.")]),_v(" "),_c('p',[_v("The engine is used for running things that are on the browser stack. JS is run in a single thread, and asynchronous tasks are done through callbacks in a task queue. The main script is first run, with things like promises and timeouts inserting tasks into a task queue. Tasks (and microtasks which are more urgent, lower overhead tasks that can execute when the call stack is empty even while the main script is running) in a task queue wait for the stack to be empty before being executed. Page re-renders are also blocked by running code on the stack (long delays between re-renders are undesirable). Using callbacks and hence not blocking the task queue, allows re-rendering to be done more regularly, improving responsiveness. The precise behaviour of task de-queueing (and lower overhead microtasks) can actually differ between browsers, which causes considerable headache.")]),_v(" "),_c('p',[_v("References:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://cabulous.medium.com/how-v8-javascript-engine-works-5393832d80a7"}},[_v("https://cabulous.medium.com/how-v8-javascript-engine-works-5393832d80a7")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"}},[_v("https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=8aGhZQkoFbQ"}},[_v("https://www.youtube.com/watch?v=8aGhZQkoFbQ")])])]),_v(" "),_c('h3',{attrs:{"id":"general-software-engineering-design-considerations"}},[_v("General Software Engineering/Design Considerations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-software-engineering-design-considerations","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Discussions over PRs, issues and generally attempting to solve issues, were a great way to explore design considerations. Here is a non-exhaustive list of interesting points that came up this semester:")]),_v(" "),_c('p',[_c('strong',[_v("In-house vs External Library")])]),_v(" "),_c('p',[_v("In implementing new functionality or extending existing functionality (Git interface for example), there is usually a question of whether it would be easier to maintain features in-house, or use external libraries. It might be a good idea to maintain core functionality in-house since we'd want more fine-grained control over these features and new features can be added/fixed quickly as needed. At the same time, external libraries save time and cost of learning about and solving possibly complex problems.")]),_v(" "),_c('p',[_v("External libraries can however introduce vulnerabilities (several incidences of dependency sabotage with npm packages like color.js and node-ipc hit fairly close to home over the course of the semester). Hence, selection of libraries should be a well-deliberated process and should include considerations like active-ness of the project and diversity of maintainers.")]),_v(" "),_c('p',[_c('strong',[_v("Recency vs Ubiquity")])]),_v(" "),_c('p',[_v("In maintaining versions of dependencies, it is often important to weigh upgrading to a new version to get the newest features against possibly alienating users who don't already have that version. Neither is necessarily better than the other and will likely depend on the nature of the product. A new product for developers would probably have users who want new versions with the bleeding edge of features. On the other hand products that already have a large user base and aimed at less technical users might want to favour ubiquitous versions. Since RepoSense is aimed at users of all skill levels, including novice developers, we often default to the later approach.")]),_v(" "),_c('p',[_v("In a similar vein, it might be important to make sure that new features don't break backward compatibility so that the end-user won't face significant hindrances with making upgrades. At the same time, the need to be backwards compatible can be a root of evil, introducing all manners of hacks and fixes. This highlights the importance of foresight in the early stages of development. Also, deciding when to stop backwards compatibility with a significant version bump can be a non-trivial decision. Doing so should come with thorough migration documentation (sparse documentation for Vue2 -> Vue3 migration caused a lot of developer grievances).")]),_v(" "),_c('p',[_c('strong',[_v("Isolated Testing")])]),_v(" "),_c('p',[_v("While it's fairly obvious that modularity with tests is important and that components should be tested in isolation with unchanging inputs, it is easy to let slip lapses in the form of hidden dependencies that prevent components from being isolated, or having inputs that are actually non-static. Some of these issues came up over the course of the semester but it struck me just how easy it was for them to slip by unnoticed. There aren't necessarily language-level features that enforce coupling rules for the most part since many of these dependencies can be quite implicit.")]),_v(" "),_c('p',[_v("This had me thinking about the importance of being explicit in crucial sections of code, as described below.")]),_v(" "),_c('p',[_c('strong',[_v("Being Explicit")])]),_v(" "),_c('p',[_v("It is important that programmers make the behaviour of certain crucial sections of code as explicit as possible. One way of doing this is through good naming of methods and variables, and grouping statements semantically into methods or classes. Large chunks of code is detrimental and allows implicit slips in behaviour that can go unnoticed. So we might even want to make new special classes that do very specific things to make it clear that it is an important subroutine/behaviour that deserves its own abstraction.")]),_v(" "),_c('p',[_v("At the same time, high reliance on object orientation can lead to too many classes, each class doing trivial things and with high coupling between the classes leading to spaghetti logic that doesn't do very much to alleviate implicit behaviour. There exists a delicate middle ground characterised by semantically well partitioned code.")]),_v(" "),_c('p',[_c('strong',[_v("Behavioural Consistency")])]),_v(" "),_c('p',[_v("The earlier section on Javascript quirks were a result of an overly accommodating feature integration during the early stages of development. It's become a cautionary tale of sorts of the importance of consistency and predictability in behaviour. In adding new features, it was personally very tempting to allow small inconsistencies in behaviour in favour of simplicity of implementation. While simplicity is a desirable outcome, I'd argue that consistency is more important (small inconsistencies can runaway into larger un-fixable differences).")]),_v(" "),_c('p',[_v("Consistency can be with respect to various things. For example, we might want that identical inputs behave the same under similar conditions (differing in non-semantic respects) or that similar inputs (differing in non-semantic respects) behave the same under the identical conditions, etc.")]),_v(" "),_c('h3',{attrs:{"id":"miscellaneous-helpful-tools"}},[_v("Miscellaneous helpful tools"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#miscellaneous-helpful-tools","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("The command line tool "),_c('a',{attrs:{"href":"https://github.com/cli/cli"}},[_v("GitHub cli")]),_v(" provides a very handy way to access GitHub API, and has been useful for checking out PRs, interacting with issues, managing workflows, etc right from the command line.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git bisect")]),_v(" is a very nice way to find problematic commits. Given a bad commit and a previously good commit, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git bisect")]),_v(" does a binary search (either automatically with a test or with manual intervention) to find the problematic commit where the issue was introduced.")]),_v(" "),_c('li',[_v("Search through previously run commands (with the first few characters) with ctrl-r in a bash shell.")]),_v(" "),_c('li',[_v("GitHub issues and PRs have advanced search syntax like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("involves:USER")]),_v(" for all items that involve a user. This was very useful for updating "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("progress.md")]),_v(". More features "),_c('a',{attrs:{"href":"https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests"}},[_v("here")]),_v(".")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sat, 27 Apr 2024, 7:58:59 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  