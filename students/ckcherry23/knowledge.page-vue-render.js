
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"1-tools-and-technologies"}},[_v("1. Tools and Technologies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-tools-and-technologies","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The RepoSense frontend is built with Vue.js and Pug, with most of the JavaScript files being migrated to TypeScript over\nthe semester. Node.js is used to manage the packages, while static code analysis is performed with ESLint.\nCypress is the tool of choice for testing the frontend.")]),_v(" "),_c('h4',{attrs:{"id":"1-1-vue-js"}},[_v("1.1 Vue.js"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-1-vue-js","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Prior to working on RepoSense, I had experienced working with Vue.js using Vuetify components and the\n"),_c('a',{attrs:{"href":"https://vuejs.org/api/options-state.html"}},[_v("Options API")]),_v(". However, working on the project allowed me to delve deeper into\nthe intricacies of Vue and how to fully utilize its features.")]),_v(" "),_c('p',[_c('strong',[_v("1.1.1 MVVM Architecture Pattern")])]),_v(" "),_c('p',[_v("Vue.js focuses on the 'ViewModel' layer of the MVVM (Model-View-ViewModel) architectural pattern. This is because it connects\nthe Views and Models via 2-way data bindings. In this case, the view is the DOM (Document Object Model), and the models are\nthe plain JavaScript objects.")]),_v(" "),_c('p',[_c('strong',[_v("1.1.2 Leveraging Template Refs for Custom Behaviors")])]),_v(" "),_c('p',[_v("While Vue has a rendering model that abstracts away direct manipulation of the DOM, sometimes it is necessary to have access\nto the DOM to programmatically control an element. Hence, Vue gives us access to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("$refs")]),_v(", which are similar to\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("document.querySelector('.element')")]),_v(" in JavaScript, but are more efficient as they give direct access to the element needed\nrather than returning the first element that matches the given selector. This allowed me to implement custom behaviour such as\n"),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1860"}},[_v("pinning the file title")]),_v(" within Vue.")]),_v(" "),_c('p',[_c('strong',[_v("1.1.3 Reusability with Custom Directives")])]),_v(" "),_c('p',[_v("Reuse of code is an essential concept in software engineering, which is why Vue offers custom directives.\nCustom directives allow the reuse of logic that involves low-level DOM access. They are basically objects containing\nlifecycle hooks similar to those of a component.")]),_v(" "),_c('p',[_v("One of the custom directives that RepoSense was already utilizing was a plugin called\n"),_c('a',{attrs:{"href":"https://github.com/Akryum/vue-observe-visibility/tree/next"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue-observe-visibility")])]),_v(". This made use of the\n"),_c('a',{attrs:{"href":"https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry"}},[_v("IntersectionObserverEntry Web API")]),_v(" to observe\nwhether an element is in view and execute a function accordingly.")]),_v(" "),_c('p',[_v("During my work on the "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1860"}},[_v("pin file title PR")]),_v(", I encountered a bug where\ntooltips appeared out of the viewport when at the top of the page. As the file title would be pinned to the top of the\npage, this issue needed to be resolved before my PR could be merged. To address this, I thought of using a custom\ndirective, and I utilized the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("vue-observe-visibility")]),_v(" directive to modify the CSS of the tooltip to be bottom-aligned\nbased on visibility changes. While this solution was successful, we required more customization as the tooltip needed\nto move back to being top-aligned when scrolling up. I eventually used template refs to address this issue, but this\nexperience allowed me to understand better about custom directives.")]),_v(" "),_c('h4',{attrs:{"id":"1-2-vuex"}},[_v("1.2 Vuex"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-2-vuex","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Vuex is a state management pattern and library for Vue that serves as the centralized source for all components. It\nenforces rules to ensure that the state can only be mutated in a predictable manner.")]),_v(" "),_c('p',[_c('strong',[_v("1.2.1 Single Source of Truth")])]),_v(" "),_c('p',[_v("During my work on a "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1939"}},[_v("PR")]),_v(" to differentiate between authors when using\nthe 'merge group' option in RepoSense, I faced an issue with unsynchronised data copies. Initially, I had stored the\ncolors assigned to authors in both a local "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data()")]),_v(" variable and the Vuex store. To resolve this, I employed "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mapState")]),_v("\nas a Vue "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computed")]),_v(" property to access the Vuex state from Vue components. This approach allowed me to re-evaluate the\ncomputed property every time the data changed, which triggered DOM updates and allowed a single source of truth.\nHowever, relying on the global store singleton could potentially be considered an anti-pattern as it would make the code\ndifficult to test.")]),_v(" "),_c('h4',{attrs:{"id":"1-3-javascript"}},[_v("1.3 JavaScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-3-javascript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("1.3.1 Dot vs Bracket Notation for Accessing Object Properties:")])]),_v(" "),_c('p',[_v("The dot notation ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("objectName.propertyName")]),_v(") is commonly used to access properties in a clean manner. However, it limits\nproperty identifiers to alphanumeric characters, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("_")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("$")]),_v(". On the other hand, the bracket notation\n("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("objectName['propertyName']")]),_v(") can use all UTF-8 characters in property names or even variables that finally resolve to\na string. This notation is useful when the property name is only known during runtime, as in this\n"),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1860"}},[_v("PR")]),_v(" where "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("this.$refs[file.path]")]),_v(" is used because the reference to\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("file.path")]),_v(" is only resolved based on the file being interacted with.")]),_v(" "),_c('p',[_c('strong',[_v("1.3.2 ES6 String Interpolation for Cleaner Code")])]),_v(" "),_c('p',[_v("ES6 introduced template strings as a concise and readable way to insert values into strings. In contrast, the string\nconcatenation approach can be harder to read and edit, and requires creating multiple strings that need to be put\ntogether. Moreover, string concatenation would take up more memory and computation compared to creating just one string.")]),_v(" "),_c('h4',{attrs:{"id":"1-4-typescript"}},[_v("1.4 TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-4-typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TypeScript is an object-oriented programming language that allows for classes, interfaces, and inheritance support in\nthe frontend. It provides static typing and type inference, making it easier to catch errors before runtime.\nTherefore, we decided to migrate our codebase from JavaScript to TypeScript to align our frontend with our OOP Java backend.")]),_v(" "),_c('p',[_c('strong',[_v("1.4.1 Class vs Interface for Typing")])]),_v(" "),_c('p',[_v("When working on "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1852"}},[_v("my first PR")]),_v(" for defining Vue prop types explicitly,\nI initially used classes in TypeScript. However, after gaining more knowledge about TypeScript, I realized that\ninterfaces are more suitable for type-checking at compile time. Interfaces have less overhead since they do not exist at\nruntime and are erased when the code is transpiled to JS. Although classes can define methods relevant to class objects,\nthis feature was not useful for us. In a "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1965"}},[_v("later PR")]),_v(", we decided to\nswitch to using an interface to improve the performance of the frontend.")]),_v(" "),_c('h4',{attrs:{"id":"1-5-pug"}},[_v("1.5 Pug"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-5-pug","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Pug is a templating language that makes it easier to write reusable HTML components with cleaner syntax. It is useful\nwhen working with data-driven web applications like RepoSense. Although it can be challenging to find resources that\nprovide documentation on\n"),_c('a',{attrs:{"href":"https://medium.com/@martinsOnuoha/building-vue-components-with-pug-stylus-564615ed289"}},[_v("using Vue and Pug together")]),_v(",\nPug's syntax is much faster to develop in than HTML once you get used to it.")]),_v(" "),_c('h4',{attrs:{"id":"1-6-sass-and-css"}},[_v("1.6 Sass and CSS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-6-sass-and-css","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Sass is a CSS pre-processor and an extension of CSS. It helps reduce repetition in CSS and saves programming time by\nproviding features like variables, mixins, imports, and inheritance. A Sass pre-processor transpiles Sass code into\nstandard CSS as browsers can only understand plain CSS code.")]),_v(" "),_c('p',[_c('strong',[_v("1.6.1 Choosing between Placeholders and Mixins")])]),_v(" "),_c('p',[_v("The difference between mixins and placeholders is that placeholders consolidate mutually-shared code, whereas mixins just\nassign the properties to the individual classes — along with whatever was specific to that class. Because of this, it’s\npreferred to use placeholders. But since placeholders aren’t able to take parameters, it’s better to use mixins in such\ncases.")]),_v(" "),_c('p',[_v("I had to decide between placeholders and mixins when trying to consolidate the code required for a tooltip tail, and assign\nit along with some specific properties depending on whether the tooltip was top-aligned or bottom-aligned. Hence, I made use\nof placeholders for this as they group together mutually-shared code. In another\n"),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1979"}},[_v("PR")]),_v(", I used mixins to standardize the fonts used throughout the\nfrontend as fonts only need to be assigned to the CSS classes along with their other properties.")]),_v(" "),_c('h4',{attrs:{"id":"1-7-cypress"}},[_v("1.7 Cypress"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-7-cypress","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Cypress is a powerful web testing framework designed for end-to-end testing. Unlike Selenium, it operates within the application,\nallowing high flexibility to access any objects in the app, including DOM objects and the window, similar to how we do\nwithin the code itself.")]),_v(" "),_c('p',[_c('strong',[_v("1.7.1 Effective and efficient test case design")])]),_v(" "),_c('p',[_v("To ensure effective and efficient test case design, I have targeted potential fault points with each of my Cypress test\ncases. However, I noticed repetitive Cypress commands in these test cases, which can be extracted into a common function\nfor better reusability. While the rest of the codebase also uses such repetitive commands in all test cases\nfor setup, we should plan to extract all the setup commands into a common function to allow for reusability.")]),_v(" "),_c('h4',{attrs:{"id":"1-8-linting"}},[_v("1.8 Linting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-8-linting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Linting is the process of performing static analysis on code to identify programming or code style errors. While I have used\ncode analysis tools of IDEs, I had not explicitly enforced custom coding rules using lints before.")]),_v(" "),_c('p',[_c('strong',[_v("1.8.1 Enforcing Custom Coding Rules with ESLint")])]),_v(" "),_c('p',[_v("During the migration to TypeScript, we decided to use the Airbnb style guide, similar to how we used it for JavaScript.\nBesides, we defined other "),_c('a',{attrs:{"href":"https://typescript-eslint.io/rules/"}},[_v("custom rules")]),_v(", and I created a\n"),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/1980"}},[_v("first-timer issue")]),_v(" that deals with the consistent use of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("T[]")]),_v(" or\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Array")]),_v(" throughout the codebase. This helps enforce coding standards and make the code more consistent and maintainable.")]),_v(" "),_c('hr'),_v(" "),_c('p',[_v("The Backend for RepoSense is written in Java, and testing is done using JUnit. Since RepoSense is for contribution analysis,\nGit commands are highly used within the project. Gradle is used to manage the project dependencies and for DevOps tasks.")]),_v(" "),_c('h4',{attrs:{"id":"1-9-git"}},[_v("1.9 Git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-9-git","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("1.9.1 Understanding "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git log")])])]),_v(" "),_c('p',[_v("For working on the "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1882"}},[_v("PR to include merge commits")]),_v(" in the web dashboard, some\nbackend changes were required as merge commits were not included in the generated report itself. Hence, I had to look into the\ndocs of git commands, specifically "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git log")]),_v(", to understand what flags I could make use of to include all the desired\ncommits in the report. Previously, we were using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--no-merges")]),_v(" flag to remove all merges from the report. However, simply\nremoving this flag did not help in including all the merge commits in the new report. This may be because git continues to\nsimplify “uninteresting” merges in the default mode. Finally, the use of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("--full-history")]),_v(" helped include all commits without\nmerging any same content commits together. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git log")]),_v(" also had to option to format its output with a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<format-string>")]),_v(", and\nthis formatted output makes it easy for us to parse the results and generate our repository analysis reports.")]),_v(" "),_c('p',[_c('strong',[_v("1.9.2 Spoofing for Good")])]),_v(" "),_c('p',[_v("I was surprised by how easy it is to commit as someone else using Git as long as one has write access. I had to make use of this\ntechnique when I had to create a test commit, as only commits from a selected group of users are part of the Cypress test\ndashboard. I "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/commit/ffbc714a11c39fae870d1ea994ce200008c63756"}},[_v("spoofed")]),_v(" one of\nthese users so that the commit to test appears on the test dashboard.")]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"2-software-engineering"}},[_v("2. Software Engineering"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-software-engineering","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"2-1-design-choices"}},[_v("2.1 Design choices"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-1-design-choices","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("2.1.1 Object parameter vs multiple parameters for constructors")])]),_v(" "),_c('p',[_v("While creating a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("User")]),_v(" object in TypeScript, I encountered the challenge of passing in a large number of arguments (~10)\nto construct the object. This made me wonder what the best way of initialising such objects with large number of\nattributes is. I was exploring the use of a single object parameter, as it makes the code much cleaner. However, there\nis a tradeoff of whether it would be type safe to just pass an object without any type as a parameter into the function.\nYet, I decided to continue with the method of using an object argument as this issue of type safety could be mitigated\nin the future by checking that the object being passed in as the argument implements the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("User")]),_v(" interface,\nwhen migrating to TypeScript, which was eventually done.")]),_v(" "),_c('h4',{attrs:{"id":"2-2-reflections"}},[_v("2.2 Reflections"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-2-reflections","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("2.2.1 Understanding a Language/Tool Before Working with It")])]),_v(" "),_c('p',[_v("Previously, I had the mindset of just making things work without understanding the inner workings of a language or tool.\nHowever, I realized that this approach only led to superficial knowledge, making each challenge as difficult as the last.\nThis semester, I gained a new perspective on how understanding the language/tool can make things easier down the road.\nI now strive for a good balance of theory and practical knowledge to accumulate my understanding and improve over time.")]),_v(" "),_c('p',[_c('strong',[_v("2.2.2 Applying the \"Make it Work, Make it Right, Make it Fast\" Principle")])]),_v(" "),_c('p',[_v("While working on a "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1939"}},[_v("PR")]),_v(" to differentiate between authors while using\n'merge group', I applied the principle of "),_c('em',[_v("\"Make it work, Make it right, Make it fast.\"")]),_v(" Initially, I focused on making\nit work and fixing any edge cases. Later on, I refactored the code to optimize it. Additionally, I conducted performance\nanalysis for the PR after it was complete, which can be accessed\n"),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1939#issuecomment-1518718579"}},[_v("here")]),_v(".")]),_v(" "),_c('p',[_c('strong',[_v("2.2.3 Full-Stack Development Experience")])]),_v(" "),_c('p',[_v("Working on the "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1882"}},[_v("show merge commits PR")]),_v(" provided a chance to work on\nall aspects of the codebase as a frontend developer. I researched Git to find out how to include all merge commits,\nedited the Java backend parsers to include an additional field for whether a commit is a merge commit, and made frontend\nchanges to include merge commits within the HTML report. Furthermore, I wrote test cases for frontend Cypress, backend\nunit tests, and system tests. This experience was rewarding as it allowed me to do full-stack development and learn how\nall the components work together while solving a single problem.")]),_v(" "),_c('hr'),_v(" "),_c('h3',{attrs:{"id":"3-project-management"}},[_v("3. Project Management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-project-management","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"3-1-lessons-learned-from-contributing-to-an-open-source-project"}},[_v("3.1 Lessons Learned from Contributing to an Open-Source Project"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-1-lessons-learned-from-contributing-to-an-open-source-project","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("3.1.1 Understanding the Contribution Workflow")])]),_v(" "),_c('p',[_v("Contributing to RepoSense has provided me with valuable insights into the contribution workflow for open-source projects.\nIt has helped me understand the quality expectations that are necessary for maintaining a high-quality codebase.\nHowever, having strict rules can sometimes hinder the PR review process, leading to longer review cycles. Hence, to\nstrike a balance between quality and speed, setting guidelines and maintaining effective communication channels is\nessential.")]),_v(" "),_c('p',[_c('strong',[_v("3.1.2 Importance of Documentation")])]),_v(" "),_c('p',[_v("Documentation is an integral part of open-source projects, and its importance cannot be overemphasized. It's easy to forget to\nupdate the documentation after making changes in a PR, leading to outdated documentation. Going forward, I recognize the need to\nmaintain an up-to-date documentation to ensure that future contributors have access to accurate and comprehensive information.\nTo this end, I suggest having a checklist in the PR issue template to remind contributors of the need to update documentation.")]),_v(" "),_c('p',[_c('strong',[_v("3.1.3 Optimal PR Length")])]),_v(" "),_c('p',[_v("I received feedback from my mentors that my PRs were too long, leading to difficulty in reviewing. It was suggested that\nbreaking down the PRs into smaller ones would make the review process easier. Based on this feedback, I have made a conscious\neffort to create smaller PRs going forward.")]),_v(" "),_c('p',[_c('strong',[_v("3.1.4 Understanding Versioning")])]),_v(" "),_c('p',[_v("Contributing to RepoSense has provided me with insights into versioning and how it is maintained for open-source projects.\nThe process of maintaining separate web pages for documentation of released versions and the master version has been an\nimportant lesson. To deepen my understanding of project management, I am planning on making a release myself in the near future.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 21 Apr 2024, 7:07:56 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  