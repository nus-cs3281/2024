
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"vue-js"}},[_v("Vue.js"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-js","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("One of the largest takeaways from working with MarkBind in the last semester has been Vue.js, an open-source front-end framework that MarkBind uses to build it's UI components. Previously, only knowing the React.js framework, Vue.js is a handy addition to my arsenal. The basics of Vue.js was rather simple to pick up. Reading the "),_c('a',{attrs:{"href":"https://vuejs.org/guide/introduction.html"}},[_v("Vue.js documentation")]),_v(", and referencing examples of already implemented Vue components in MarkBind, I quickly understood the use of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<template>")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<style>")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<script>")]),_v(". Through "),_c('a',{attrs:{"href":"https://markbind.org/devdocs/devGuide/development/writingComponents.html"}},[_v("Markbind's Developer Guide")]),_v(", I learnt how to easily create different kinds of Vue components and implement them in MarkBind.")]),_v(" "),_c('p',[_v("As I implemented my first Vue component, "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2193"}},[_v("Add autogenerated breadcrumbs component #2193")]),_v(", I delved deeper into Vue, exploring the use of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data()")]),_v(", to manage the internal state of Vue components, and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("methods()")]),_v(" to define methods to be used within the component. I also learnt more about Vue lifecycle hooks, in which I used the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mounted")]),_v(" hook to allow the Breadcrumb component to query the SiteNav to figure out the hierarchy of the current page.")]),_v(" "),_c('p',[_v("As I continued working on improving MarkBind's frontend, I learnt more about Vue's "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<transition>")]),_v(" component, in particular using transition hooks. While I was working on "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2184"}},[_v("Fix Quiz expanding between questions #2184")]),_v(", I came realize how useful these hooks were, helping to create seamless transitions for different situations. I relied heavily on "),_c('a',{attrs:{"href":"https://vuejs.org/guide/built-ins/transition.html#javascript-hooks"}},[_v("Vue.js documentation")]),_v(" and "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/59632929/vue-js-animation-enter-after-leave-and-not-simultaneously"}},[_v("StackOverflow Posts")]),_v(" as I was researching about Vue's transition hooks.")]),_v(" "),_c('h3',{attrs:{"id":"document-object-model-dom-manipulation"}},[_v("Document Object Model (DOM) Manipulation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#document-object-model-dom-manipulation","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When I was working on implementing the new Breadcrumb and Collapse/Expand All Buttons components, I had to extensively use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Document.querySelector()")]),_v(" and other related methods. I was new to this and had to do some research about how the methods work, what happens if the object cannot be found and handling edge cases. By practicing these while implementing the two components mentioned above, I believe that I have become more proficient in doing this. As a side-effect of this, I have also gained a deeper understanding on how the DOM works.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://developer.mozilla.org/en-US/docs/Web/API/Document/"}},[_v("Documentation")])])]),_v(" "),_c('h3',{attrs:{"id":"jest-vue-test-utils"}},[_v("Jest/Vue Test Utils"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jest-vue-test-utils","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Jest and Vue Test Utils were something that I was new to coming into MarkBind. MarkBind uses Jest together with Vue Test Utils for its snapshot tests, which test Vue components against their expected snapshots. As I was updating and implementing Vue components, I had to update and create the relevant test suites to ensure that the Vue components that I was updating or creating were working as expected. I explored mounting the components, attaching components to a document to allow another component to interact with them.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://v1.test-utils.vuejs.org/"}},[_v("Vue Test Utils Documentation")])])]),_v(" "),_c('h3',{attrs:{"id":"typescript"}},[_v("Typescript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As MarkBind is undergoing a migration to Typescript, I put in some time to learn basic Typescript. This was important as mid-way through the semester, as many of the files were being migrated to Typescript. This has also helped me in reviewing PRs that deals with Typescript migration and PRs which affect the Typscript files in MarkBind.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.typescriptlang.org/docs/"}},[_v("Typescript Docs")])])]),_v(" "),_c('h3',{attrs:{"id":"ui"}},[_v("UI"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When updating the looks of old components and creating new ones, I had to do some research about what makes a website visually pleasing. My most interesting finds were about the use of "),_c('a',{attrs:{"href":"https://www.invisionapp.com/inside-design/golden-ratio-designers/"}},[_v("golden ratios")]),_v(" in design and choosing complementary colours with tools such as "),_c('a',{attrs:{"href":"https://www.canva.com/colors/color-wheel/"}},[_v("Canva's Colour Wheel")]),_v(". I also learnt the different meanings of different icons through exploration and discussions with "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2265"}},[_v("Update Breadcrumb icons #2265")]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2206"}},[_v("Add CollapseExpandButtons component")]),_v(".")]),_v(" "),_c('p',[_v("I also internalized how to create transitions and effects that fit with the theme of the project, for MarkBind, had a more minimal theme. This was done when updating designs of components in "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2204"}},[_v("Tweak sitenav design #2204")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2131"}},[_v("Update Question/Quiz component design #2131")]),_v(".")]),_v(" "),_c('h3',{attrs:{"id":"project-management"}},[_v("Project Management"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-management","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As I progressed to start managing the project, I started reviewing and merging PRs. Initially as I reviewed smaller PRs, I had little problem understanding the code and understanding where it can be improved. However, as I reviewed more complex PRs, I began having difficulties understanding the changes quickly. I came across a method to understand code in a more simple manner, the "),_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Rubber_duck_debugging"}},[_v("Rubber Duck Debugging")]),_v(" method. Using this helped me to try and understand the code line by line and handle more complex changes more managably, helping me to understanding them better.")]),_v(" "),_c('h3',{attrs:{"id":"upgrading-dependencies"}},[_v("Upgrading dependencies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#upgrading-dependencies","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As I worked on "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2411"}},[_v("bump nunjucks to 3.2.4 #2411")]),_v(", I was initially not confident what to look out for when upgrading dependencies. However, after I worked on this I understood how to look out for breaking changes and to find out how your project is using it in order to confidently upgrade it without breaking things in the project.")]),_v(" "),_c('h3',{attrs:{"id":"github-actions"}},[_v("GitHub Actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I gained a more in depth understanding about GitHub Actions when I was working on "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2530"}},[_v("Add install setuptools to ci #2530")]),_v(". Utilizing conditional runs for the macos platform which required a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("brew install")]),_v(" to get the CI to run properly which would throw errors for other platforms which do not use Homebrew.")]),_v(" "),_c('h3',{attrs:{"id":"husky"}},[_v("Husky"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#husky","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As I researched on improving code cleanliness in my projects and found that Husky was a tool that could be used to not only maintain the code cleanliness of projects but could be used for things like running tests as well. Husky has become a mainstay in all my JS projects together with ESLint, Prettier and lint-staged. I spent some time understanding how Husky has changed the way it should be used by deprecating the use of Husky within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" and rather is now in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".husky")]),_v(" folder.")]),_v(" "),_c('h3',{attrs:{"id":"aws-sagemaker"}},[_v("AWS SageMaker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aws-sagemaker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As I researched on AWS SageMaker for my lightning talk and used it during my internship, I got to understand more about AWS SageMaker and its benefits for hosting AI models in the cloud. AWS SageMaker is beneficial smaller players, or applications which have a pattern of use that comes in sporadic bursts as it reduces the upfront cost of expensive AI infrastructure. SageMaker also offers many services that helpes to simplify the development and deployment of AI models.")]),_v(" "),_c('h3',{attrs:{"id":"micro-frontends"}},[_v("Micro-frontends"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#micro-frontends","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As I worked on researching on micro-frontends for my internship, I gained a deeper understanding of micro-frontends. Micro-frontends are what micro-services for backends, but for the front-end. Micro-frontends allows the splitting up of the front-end and this brings many benefits. From allowing teams to manage their own vertical stack, by owning their own micro-frontend, to reducing the bundle size, micro-frontends are beneficial to large teams. I also worked on a POC of migrating parts of the application using WebPack 5 Module Federation for Next.js which allowed me to fully appreciate it.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 28 Apr 2024, 23:35:32 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  