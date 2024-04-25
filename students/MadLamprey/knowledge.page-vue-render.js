
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Being the framework that CATcher and WATcher are built on, it was of paramount importance to learn Angular. While I had no past experience working with Angular, my experience with ReactJs proved to be of some help in the transition, but the learning curve was still quite steep.")]),_v(" "),_c('p',[_v("I have tried learning Angular in depth over the course of a few weeks and authoring pull requests has helped me in understanding different aspects of using Angular.")]),_v(" "),_c('ul',[_c('li',[_v("Angular Directives:\n"),_c('ul',[_c('li',[_v("In one of the first PRs that I authored, I had the distinct pleasure of studying about Angular directives. Directives are essentially markers that Angular allows us to attach to elements to influence their behaviour in a specific way.")]),_v(" "),_c('li',[_v("Directives empower us, as developers, to manipulate the DOM dynamically, which entails changing the structure and content of the HTML depending on certain conditions or data, without having to reload the page.")]),_v(" "),_c('li',[_v("They also allow for more expressiveness. In the case of the PR I worked on, I made use of Angular's Structural Directive "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*ngIf")]),_v(" to conditionally render an error message based on a validation.")])])]),_v(" "),_c('li',[_v("Validators:\n"),_c('ul',[_c('li',[_v("Linking back to the use of Angular Directives, their coupling with Validators makes for a robustness and expressiveness, especially in the case of forms, to allow for proper feedback to be given to the user.")]),_v(" "),_c('li',[_v("I learned about the creation and use of custom validators as part of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@angular/forms")]),_v(" library, which are a crucial aspect of an application that consists of Form-based components.")])])]),_v(" "),_c('li',[_v("Software Maintenance:\n"),_c('ul',[_c('li',[_v("In a bid to keep the application and its dependencies up-to-date, constant upgrade to newer versions of the tech stack used, is crucial. This also falls in line with our goal to follow best software practices.")]),_v(" "),_c('li',[_v("Particularly, for Angular, this required a thorough review of its documentation, and that of its dependencies to identify versions compatible with our application (since it still does not use the LTS versions).")])])])]),_v(" "),_c('h3',{attrs:{"id":"docker"}},[_v("Docker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#docker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As part of DevOps for the documentation of WATcher, I worked on creating a Dev Container using Docker. This led me to understand and appreciate the use of dev containers in general.")]),_v(" "),_c('ul',[_c('li',[_v("The basic principle of dev containers is to provide an isolated, lightweight environment that allows developers to work on a containerized version of a build environment")]),_v(" "),_c('li',[_v("Docker is a container management service, and its key benefit is to package an application with all its dependencies into a standardized unit.")]),_v(" "),_c('li',[_v("A containerized version of the build environment is referred to as a Docker Image, and these images are created through the Dockerfile")]),_v(" "),_c('li',[_v("For the WATcher-docs, the VSCode Dev Container was used as a base dev container, with a variable argument for the variant, to allow for customizability during the build process.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("devcontainer.json")]),_v(", then defines the container properties specific to the WATcher docs. It specifies the additional dependencies, list the ports to be forwarded, and specify the command to be run once the container is created.")])]),_v(" "),_c('p',[_v("All in all, the dev container helps provide a reproducible development environment, that allows new developers to start working on WATcher-docs more seamlessly.")]),_v(" "),_c('h3',{attrs:{"id":"linters"}},[_v("Linters"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#linters","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As part of maintaining development tools, I worked on migrating the project from using TSLint (which is now deprecated), to ESLint. This helped me understand the true role of linters, and how they are defined for a project.")]),_v(" "),_c('p',[_v("A linter (as studied in CS2103T) is a static code analysis tool that allows us to define a style we want our codebase to adhere to, reduce code smells and higlight performance areas.")]),_v(" "),_c('ul',[_c('li',[_v("TSLint is one of the most popular static analysis tools that checks TypeScript code for readability and maintainability. However, in 2019, TSLint was deprecated in favour of ESLint.")]),_v(" "),_c('li',[_v("ESLint is the dominant linting tool for JavaScript, but it has fully matured to support TypeScript.")]),_v(" "),_c('li',[_v("Since a large number of projects that made use of TSLint prior to 2019 had to be migrated to ESLint, an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm")]),_v(" packages, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tslint-to-eslint")]),_v(" has been provided, that converts the existing TSLint configuration of a project to the closest reasonable ESLint equivalent. However, in the context of CATcher, I found that the resulting ESLint config file did not accurately map all TSLint rules. Hence, I had to follow a migration process which involved:\n"),_c('ul',[_c('li',[_v("Assessing the impact of the migration on the project; understanding how the TSLint configurations and rules translate to ESLint, without sacrificing code quality")]),_v(" "),_c('li',[_v("Translating the configuration which involves mapping the TSLint rules to equivalent ESLint rules, or adapting the codebase if direct matches for rules are not found\nThis process not only ensured accurate rule translation but also enhanced my understanding of how linters influence coding standards. The rules that linters enforce range from:")])]),_v(" "),_c('ol',[_c('li',[_v("Code quality rules such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("no-unused-vars")])]),_v(" "),_c('li',[_v("Security rules such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("no-new-func")])]),_v(" "),_c('li',[_v("Error prevention rules such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("no-console")]),_v("\nAnd more that focus on style, best practices and code complexity.")])])])]),_v(" "),_c('p',[_v("All in all, linters play a crucial role in enforcing certain rules that we wish the codebase to follow.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Thu, 25 Apr 2024, 8:25:22 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  