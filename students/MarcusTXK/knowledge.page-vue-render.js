
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"devops"}},[_v("DevOps"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#devops","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"gradle"}},[_v("Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Gradle is a build tool designed specifically to meet the requirements of building Java applications. Once it’s set up, building an application is as simple as running a single command on the command line. Gradle performs well and is also useful for managing dependencies via its advanced dependency management system.")]),_v(" "),_c('p',[_v("Learned about Gradle through a really "),_c('a',{attrs:{"href":"https://tomgregory.com/gradle-tutorial-for-complete-beginners/"}},[_v("helpful tutorial")]),_v(".")]),_v(" "),_c('h3',{attrs:{"id":"bash-and-batch-scripting"}},[_v("Bash and Batch Scripting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bash-and-batch-scripting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learned how to write basic bash scripts via "),_c('a',{attrs:{"href":"https://www.tutorialspoint.com/batch_script/index.htm"}},[_v("tutorialspoint")]),_v(", and had to implement batch scripts to perform environmental checks for all files tracked by git, to ensure they end with a newline, no prohibited line endings ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\\r\\n")]),_v(") are present and no trailing whitespaces are present.")]),_v(" "),_c('p',[_v("Some interesting bugs were encountered when attempting to use pipes in batch files, particularly one that prevents delayed expansion of variables from being properly evaluated as per usual. This is due to variables not being evaluated in the batch context, as the lines are executed only in the cmd-line context. A more detailed analysis of the bug is done by a user of "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/8192318/why-does-delayed-expansion-fail-when-inside-a-piped-block-of-code"}},[_v("stackoverflow")]),_v(".")]),_v(" "),_c('h3',{attrs:{"id":"codecov"}},[_v("Codecov"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#codecov","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As I explored "),_c('a',{attrs:{"href":"https://about.codecov.io/"}},[_v("Codecov")]),_v(" to determine why it would intermittently fail for GitHub actions, I developed a greater appreciation for the role of code coverage analysis in ensuring software quality. I found its integration with popular CI/CD platforms to be seamless, making it easier to track and improve code coverage across projects. The visualization tools, such as the "),_c('a',{attrs:{"href":"https://docs.codecov.com/docs/graphs#sunburst"}},[_v("sunburst graph")]),_v(" and "),_c('a',{attrs:{"href":"https://docs.codecov.com/docs/comparing-commits"}},[_v("diff coverage reports")]),_v(", were especially helpful in identifying areas that needed more testing attention. Furthermore, learning about Codecov's ability to enforce coverage thresholds and generate pull request comments reinforced the importance of maintaining high-quality test suites.")]),_v(" "),_c('h2',{attrs:{"id":"frontend"}},[_v("Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"vue"}},[_v("Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://vuejs.org/"}},[_v("Vue")]),_v(" is a progressive JavaScript framework that simplifies the creation of responsive and efficient web applications. Its reactive "),_c('a',{attrs:{"href":"https://www.javatpoint.com/vue-js-data-binding"}},[_v("data-binding")]),_v(" and "),_c('a',{attrs:{"href":"https://vuex.vuejs.org/guide/structure.html"}},[_v("component-based architecture")]),_v(" promote modular programming, resulting in more maintainable and scalable code. Learning about Vue's component-based architecture also expanded my understanding of modular programming and how it can lead to more maintainable and scalable code.")]),_v(" "),_c('h3',{attrs:{"id":"pug"}},[_v("Pug"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#pug","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://pugjs.org/api/getting-started.html"}},[_v("Pug")]),_v(" is a templating engine that integrates well with Vue, allowing for cleaner and more concise HTML code with the use of whitespace and indentation for structure. By removing the need for closing tags, Pug attempts to make code more readable and organized. Its support for variables, mixins, and inheritance facilitates code reusability and modular design, improving the overall structure and readability of templates.")]),_v(" "),_c('h3',{attrs:{"id":"cypress"}},[_v("Cypress"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cypress","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.cypress.io/"}},[_v("Cypress")]),_v(" is an end-to-end testing framework that simplifies the process of writing and executing tests for web applications. Its intuitive syntax, real-time reloading, and support for network stubbing improve debugging and development efficiency, emphasizing thorough testing. I found its syntax and API to be intuitive and user-friendly, making the process of writing and executing tests more enjoyable. I was particularly impressed with the real-time reloading feature, which allows for faster debugging and development, simplifying "),_c('a',{attrs:{"href":"https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test"}},[_v("E2E")]),_v(" testing.")]),_v(" "),_c('h2',{attrs:{"id":"backend"}},[_v("Backend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"bloch-s-builder-pattern"}},[_v("Bloch’s Builder Pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bloch-s-builder-pattern","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Bloch’s Builder pattern is a design pattern that simplifies object instantiation in Java, particularly for classes with numerous constructor parameters, as it simplifies the process of object instantiation while maintaining immutability and improving readability. This was a particularly useful design pattern when refactoring the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CliArguments.java")]),_v(" class, as it had a large number of constructor parameters, and also required flexible construction as some of the fields were optional. The pattern facilitates immutability and reduces the risk of introducing errors in complex Java classes. Read more about "),_c('a',{attrs:{"href":"https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java"}},[_v("here")]),_v(" on Oracle's blog.")]),_v(" "),_c('h3',{attrs:{"id":"polymorphism"}},[_v("Polymorphism"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#polymorphism","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Polymorphism is a core object-oriented programming concept in Java that allows objects to adopt multiple forms and behaviors based on their context. It promotes code cleanliness, extensibility, and reduces coupling between components, resulting in more flexible and modular applications that can evolve and scale easily. By leveraging polymorphism, I was able to reduce the amount of logic in the main method of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("RepoSense.java")]),_v(", by utilizing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("RunConfigurationDecider")]),_v(" to return the appropriate "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("RunConfiguration")]),_v(" based on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CliArguments")]),_v(", where the config can be from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("getRepoConfigurations()")]),_v(".")]),_v(" "),_c('h3',{attrs:{"id":"discrete-event-simulator-des"}},[_v("Discrete Event Simulator (DES)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#discrete-event-simulator-des","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Discrete event simulator (DES) is a method used to model real-world systems that can be decomposed into a set of logically separate processes that autonomously progress through time. This was a design that was well suited for designing a CLI Wizard, as it allows for maintaining of a deque of prompts that to be shown to the user, while also allowing the addition of new prompts into the deque depending on the user's responses.")]),_v(" "),_c('h2',{attrs:{"id":"misc"}},[_v("Misc"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#misc","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"git-commmands-functionalities"}},[_v("Git Commmands/Functionalities"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-commmands-functionalities","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In RepoSense, a variety of git commands are utilized to get information about the repository. Through undertaking DevOps tasks, I was also exposed to other interesting git commands. Here are some of the interesting ones that I was not aware of before.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git shortlog")]),_v(" - Summarizes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git log")]),_v(" output, where each commit will be grouped by author and title. This is used in RepoSense to easily count the commits by the users.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git grep")]),_v(" - A powerful tool that looks for specified patterns in the tracked files in the work tree, blobs registered in the index file, or blobs in given tree objects. Patterns are lists of one or more search expressions separated by newline characters. An empty string as search expression matches all lines. Utilized to write Reposense scripts to perform environmental checks for all files tracked by git, to ensure they end with a newline, no prohibited line endings ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("\\r\\n")]),_v(") are present and no trailing whitespaces are present. Used "),_c('a',{attrs:{"href":"https://git-scm.com/docs/git-grep"}},[_v("git docs")]),_v(" to learn how to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git grep")]),_v(" properly and what its various flags do.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".mailmap")]),_v(" - If the file .mailmap exists at the top-level of the repository, it can be used to map author and committer names and email addresses to canonical real names and email addresses. This is useful to map multiple authors and commenters and provides a way to share the mapping with all other users of the repository. Used "),_c('a',{attrs:{"href":"https://git-scm.com/docs/git-grep"}},[_v("git docs")]),_v(" to learn how to configure git mailmap properly.")]),_v(" "),_c('h3',{attrs:{"id":"url-shortening"}},[_v("URL Shortening"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#url-shortening","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Researched interesting solutions for free URL shortening, looking into 3 main ways to do it. Read about an in-depth writeup in "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/1898"}},[_v("the\nGithub issue here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Sat, 2 Mar 2024, 6:13:39 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  