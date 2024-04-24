
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"angular-essentials"}},[_v("Angular Essentials"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular-essentials","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I had contributed to CATcher as part of IWM, but I have never really approached the Angular aspects of the project.")]),_v(" "),_c('p',[_v("Essentially, the core ideas behind Angular involves:")]),_v(" "),_c('ul',[_c('li',[_v("Components, a TypeScript class with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Component")]),_v(" decorator, an HTML template and styles.\n"),_c('ul',[_c('li',[_v("The decorator accepts parameters that help Angular know which HTML file is the component's template and which css file is the component's styles.")]),_v(" "),_c('li',[_v("The decorator also accepts a parameter that is the component's selector, which is how we can reuse this component as an HTML element in other HTML files.")])])]),_v(" "),_c('li',[_v("An HTML template that instructs Angular how to render the component")]),_v(" "),_c('li',[_v("An optional set of CSS styles that define the appearance of the template's HTML elements")])]),_v(" "),_c('p',[_v("The other key concepts include event bindings and property binding that link the template to the TypeScript class. Knowing these essentials allowed me to fix "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/57"}},[_v("WATcher PR#57")]),_v(".")]),_v(" "),_c('p',[_v("Another key part of Angular is its Dependency Injection system and services. Angular allows us to provide dependencies at different levels of the application, and how the dependencies are instantiated.")]),_v(" "),_c('ul',[_c('li',[_v("For example, when you providing a service at the root level, Angular creates a single, shared instance of the service and injects it into any class that asks for it.")]),_v(" "),_c('li',[_v("Also, it seems like most of WATcher and CATcher's services are provided at the root level.")])]),_v(" "),_c('p',[_v("Finally, as part of fixing \""),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/92"}},[_v("Remove label-filter-bar as module export #92")]),_v("\", I also learned about how related components are organized and grouped into modules. Each Module are self-contained and provide a certain set of functionality and components related to that module, thereby achieving separation of concerns.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/what-is-angular"}},[_v("https://angular.io/guide/what-is-angular")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/dependency-injection"}},[_v("https://angular.io/guide/dependency-injection")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/ngmodules"}},[_v("https://angular.io/guide/ngmodules")])])]),_v(" "),_c('h2',{attrs:{"id":"e2e-testing-with-playwright"}},[_v("E2E Testing with Playwright"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#e2e-testing-with-playwright","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("After having 2 separate hotfixes pushed in a single semester, I started to look more deeply into ensuring the robustness of our application. During these 2 hotfixes, bugs were only uncovered during manual testing. However, it is time consuming to conduct manual tests, and we need to find a way to automate it. E2E tests simulate user interactions such as clicks and typing and is a useful way to ensure our end-product is performing as expected.")]),_v(" "),_c('p',[_v("During this semester, one of the high priority issues was to migrate our E2E solution away from Protractor. As such, I have investigated Cypress and Playwright as two potential E2E solutions.")]),_v(" "),_c('h4',{attrs:{"id":"mocking-services"}},[_v("Mocking services"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mocking-services","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When performing migration from Protractor to Playwright, I learned about the different strategies E2E tests can be conducted. Typically, we would want to conduct E2E tests against our production server, since that is what our end users will be using. However, since CATcher depends alot on GitHub's API for its functionality, we are unable to perform automated tests against GitHub. A second strategy would be to mock the functions that hit GitHub's API, and we would test solely the functionalities and behaviours of the app. This let me realized that there is a test vs production version of CATcher.")]),_v(" "),_c('p',[_v("I have also looked into whether it is possible to perform E2E testing against the production server, since one of the bugs fixed in the hotfixes can only be caught if we did not adopt a mocking strategy. One of the key feasibility concerns I had with testing against the GitHub API was simulating user authentication. This was because authenticating with GitHub requires multi-factor authentication, something that is difficult to achieve with automated E2E testing. Some potential solutions to bypassing MFA would be to use TOTP, which can be generated programmatically. More research will be needed in this area.")]),_v(" "),_c('h4',{attrs:{"id":"aspects-learnt"}},[_v("Aspects Learnt"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspects-learnt","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Configuring and setting up Playwright for a project.")]),_v(" "),_c('li',[_v("Learned about how Playwright/Cypress/Protractor identifies and interacts with HTML elements using selectors.")]),_v(" "),_c('li',[_v("Learned about how CATcher API calls are mocked during E2E testing")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://playwright.dev"}},[_v("https://playwright.dev")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.cypress.io/"}},[_v("https://www.cypress.io/")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/pull/539"}},[_v("This pull request by ptvrajsk documenting how he implemented E2E with Protractor")])])]),_v(" "),_c('h2',{attrs:{"id":"github-actions"}},[_v("Github Actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I also picked up Github Actions when contributing to the CI/CD pipeline in "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/81"}},[_v("Enable linting in Github workflow #81")]),_v(". I learned how Github Actions are set up and how they can be triggered upon pushing to main/master and also on pull requests.")]),_v(" "),_c('p',[_v("Furthermore, I learnt how we can use matrix strategies to run the same job with different parameters, such as different OS and different node versions.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/quickstart"}},[_v("https://docs.github.com/en/actions/quickstart")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs"}},[_v("https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs")])])]),_v(" "),_c('h2',{attrs:{"id":"rxjs-and-the-observer-pattern"}},[_v("RxJS and the Observer Pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rxjs-and-the-observer-pattern","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Part of working with CATcher source code was frequently encountering Observables and Observers. RxJS supports "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observers")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observables")]),_v(", allowing updates to some "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable")]),_v(" to be received by some "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observer")]),_v(" that is subscribed to it. With this pattern, we can trigger updates in many dependent objects automatically and asynchronously when some object state changes.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://rxjs.dev/"}},[_v("https://rxjs.dev/")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Wed, 24 Apr 2024, 8:30:02 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  