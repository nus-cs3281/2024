
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"vue-and-amp-options-api"}},[_v("Vue & Options API"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-and-amp-options-api","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Although I was already familiar with Vue, I only ever used the newer composition API, and thus had to learn the Options API that is used in the frontend of RepoSense.")]),_v(" "),_c('p',[_v("I got familiar with the API as I worked through the implementation of "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1866"}},[_v("this PR")]),_v(", which involved a decent amount of refactoring across multiple Vue files. The main resource that I used was the "),_c('a',{attrs:{"href":"https://vuejs.org/guide/introduction.html"}},[_v("official Vue docs")]),_v(", as it provides a comprehensive yet easy to understand overview of the different concepts. Additionally, it has a toggle to switch between the Composition API and Options API for each page of the documentation, allowing people who are already familiar with one to easily pick up the other.")]),_v(" "),_c('p',[_v("Here are some of the main things that I learnt:")]),_v(" "),_c('h4',{attrs:{"id":"importance-of-computed-properties"}},[_v("Importance of computed properties"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#importance-of-computed-properties","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In RepoSense, there are many properties that we need to calculate/obtain when other properties are changed. For instance, in the zoom panel, we need to maintain a list of commits to be displayed. This list needs to be re-calculated based on other properties, such as the author that is currently selected, the filters applied to the commits (e.g. only show commits in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".js")]),_v(" files), etc. In Vue, such properties should be implemented as a "),_c('strong',[_v("computed property")]),_v(" under the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("computed")]),_v(" object in the export.")]),_v(" "),_c('p',[_v("The main advantage of computed properties are that they are "),_c('strong',[_v("cached")]),_v(", and are only re-computed when one of their reactive dependencies are changed. In the above example, this would be equivalent to our list of displayed commits only being re-computed when the currently selected author is changed, or a filter is added/removed. This "),_c('strong',[_v("significantly improves performance")]),_v(", as if we were to implement the computation of a list in a normal method, it will be re-computed on "),_c('em',[_v("every")]),_v(" re-render, even if the re-render was triggered by an unrelated reactive item - resulting in the unnecessary re-computation of the same value. In a frontend application like RepoSense's reports where there are many such properties, utilising Vue's computed properties provides a much needed performance boost.")]),_v(" "),_c('h4',{attrs:{"id":"avoiding-direct-manipulation-of-dom"}},[_v("Avoiding direct manipulation of DOM"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#avoiding-direct-manipulation-of-dom","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("One of the main advantages of using a framework like Vue is that certain aspects relating to modifying the DOM are abstracted away from the user. Vue handles reactivity for the user, by updating the DOM when reactive state is mutated. Hence, problems can arise when users bypass this functionality of Vue and manually modify the DOM within Vue components. This is because Vue has no knowledge of these modifications, resulting in potential modifications clashing with Vue's mutation of the DOM.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/1866"}},[_v("This PR")]),_v(" involved deprecating the use of a method that manually modified the DOM in order to toggle the show/hide state of commits. This method of toggling commits involved a manual mutation of a CSS class, while there was a synchronous method that calculated and updated the number of shown/hidden commits based on this CSS class, which was stored in a reactive variable. However, since Vue's updates to the DOM are asynchronous, this resulted in the variable always being one action behind the 'true' state, which caused an incorrect display of the show/hide all commit messages text. This problem was fixed by working 'within' Vue - modifying a reactive variable on toggle change, and letting Vue handle the DOM mutation. Hence, we should always try to solve the problem within the framework, and try as best as possible to avoid direct mutations of the DOM.")]),_v(" "),_c('h4',{attrs:{"id":"deep-vs-shallow-copy-when-passing-data"}},[_v("Deep vs Shallow copy when passing data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deep-vs-shallow-copy-when-passing-data","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When passing data between components, care should always be taken with regard to how the data is passed, and the consequences of any mutations of that data. If mutations to data only make sense within the context of a particular component, then it is preferable to pass a deep copy of the data to prevent said mutations from changing behaviour outside of its scope.")]),_v(" "),_c('h3',{attrs:{"id":"cypress-testing"}},[_v("Cypress testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cypress-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("RepoSense utilizes "),_c('a',{attrs:{"href":"https://www.cypress.io/"}},[_v("Cypress")]),_v(" for E2E testing, where the tests run in an actual browser that accesses the entire web page by URL, as opposed to only a particular view/component. The "),_c('a',{attrs:{"href":"https://docs.cypress.io/guides/overview/why-cypress"}},[_v("Cypress docs")]),_v(" is a great resource for learning how to write tests, and was the main resource that I used when learning.")]),_v(" "),_c('h4',{attrs:{"id":"test-isolation"}},[_v("Test Isolation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#test-isolation","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("One of the main things that confused me at first was why Cypress was configured to 'start from scratch' for each test case, i.e. it starts from the beginning of the RepoSense report/from a reload of the entire app for every single test case. After reading the corresponding page of the "),_c('a',{attrs:{"href":"https://docs.cypress.io/guides/core-concepts/test-isolation"}},[_v("docs")]),_v(", I learnt that this was important to ensure the consistency & usefulness of each individual test case. By resetting the DOM state before each test, it ensures that each test functions independently, which in turn ensures that the running of any test does not impact the outcome of other tests. Otherwise, there might be a scenario where test case A passes, but causes a change that results in test case B failing. In this case, the results of the tests might be misleading, as the failure was a result of actions not confined within the test case itself.")]),_v(" "),_c('p',[_v("Along a similar line, testing of functionality should be isolated whenever possible. One of the test cases that I wrote was to test that the toggle state of a file persisted after sort. My original idea was to toggle the state of the first file, then change the sort order from 'descending' to 'ascending' and checking the toggle state of the last file. However, this implementation relies on the correctness of the sort functionality, and hence an error in the sorting function might result in this test case failing, which would be misleading. Therefore, in the "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/commit/1dd4ab44a1981023169f65ead4b24588c6344052#diff-c6e7d02d4131f1788f7ec1dc99e38edcee54f91e0774bc821361cc55d307b769R121"}},[_v("actual implementation")]),_v(", the file is tracked by file path and searched for after the sort, which isolates this test case from the correctness of the sort functionality.")]),_v(" "),_c('h3',{attrs:{"id":"typescript"}},[_v("TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"importance-of-enums"}},[_v("Importance of enums"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#importance-of-enums","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TypeScript "),_c('a',{attrs:{"href":"https://www.typescriptlang.org/docs/handbook/enums.html"}},[_v("supports enums")]),_v(" similar to other languages like Java. Having enums is very convenient when you want to restrict a variable to a certain set of values, instead of an entire type. For instance, in RepoSense, there are many instances where variables only take specific values, such as a sort type only having valid values equal to \"groupByNone\", \"groupByRepos\" and \"groupByAuthors\".")]),_v(" "),_c('p',[_v("In this instance, typing the variable as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("string")]),_v(" would technically be correct, and it would detect errors in the scenario where the variable is set to other types. However, it does not detect errors in the case where the variable is an invalid string, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GroupByNone")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("groupByNon")]),_v(". This can easily occur due to a developer error, as the string is also manually referenced throughout the codebase (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filterType = 'groupByNone'")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("if (filterType === 'groupByNone'))")]),_v(") etc. If a typo was made in one of these references, it would still compile properly without warnings, but the bug would exist in production. Using enums helps us twofold - first, we can replace all manual references with the enum instead (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filterType = FilterGroupSelection.GroupByNone")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("if (filterType === FilterGroupSelection.GroupByNone)")]),_v("), which would prevent any individual typos (and a typo such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FilterGroupSelection.GroupByNon")]),_v(" will fail to compile as the type does not exist), and secondly, if we want to change the string itself, we just have to change it in the enum definition instead of everywhere in the codebase.")]),_v(" "),_c('h4',{attrs:{"id":"type-predicates"}},[_v("Type Predicates"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#type-predicates","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Often, we have objects of similar types that work closely together (for instance, both stored in the same array), and we might have to distinguish between them in certain circumstances. For instance, in RepoSense, when we initially read the commits from the report generated by the backend, we store these commits as a certain type, but in the frontend we process these raw commits to add certain attributes to form a different type that inherits from the former. Hence, in the codebase, it is important to distinguish between these two types.")]),_v(" "),_c('p',[_v("In order to narrow the type (e.g. if we have an object that can be either one of the two types but we want to be certain which one it is), we can use "),_c('a',{attrs:{"href":"https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates"}},[_v("Type predicates")]),_v(", which narrows down the object type "),_c('strong',[_v("based on the compatability of that object")]),_v(". For instance, in RepoSense, I used "),_c('a',{attrs:{"href":"https://github.com/vvidday/RepoSense/blob/c9048f56a2a2c67b559c89b50b05b4db2bb5e066/frontend/src/types/types.ts#L30"}},[_v("this type predicate")]),_v(" to differentiate between the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DailyCommit")]),_v(" type. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commit")]),_v(" type extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DailyCommit")]),_v(", but has an optional field "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletions")]),_v(". The type predicate checks whether the field "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletions")]),_v(" exists on the object, and uses that to determine the type of the provided object. This is used in code where we have a bunch of objects which are minimally "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commit")]),_v("s, but we are not sure if they are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DailyCommit")]),_v("s. The type predicate allows us to distinguish this, and therefore safely access the appropriate objects (that have the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletions")]),_v(" field) as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DailyCommit")]),_v("s.")]),_v(" "),_c('h4',{attrs:{"id":"type-inference-vs-explicit-types"}},[_v("Type inference vs Explicit types"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#type-inference-vs-explicit-types","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("One difference between TypeScript and traditionally strongly typed languages is the "),_c('strong',[_v("type inference")]),_v(" feature of the TypeScript compiler. In TypeScript, in certain cases such as function return types, the compiler can infer the type of the return object from the code itself without explicit declaration from the programmer. For instance, consider the following code:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs typescript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("function")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("double")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("x: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")])]),_v(") ")]),_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" x*"),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(";\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("TypeScript automatically infers the return type to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("number")]),_v(" in this case. Of course, we can define the return type explicitly:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs typescript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("function")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("double")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("x: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")])]),_v("): "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("number")]),_v(" ")]),_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" x*"),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(";\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Which in this case would be functionally equivalent, with a small difference being explicit declaration reduces overhead, as the compiler doesn't need to do the inference. However, aside from that, at first glance explicit declaration "),_c('em',[_v("seems")]),_v(" redundant, as the compiler can do inference. However, solely relying on inference can be prone to bugs, because the compiler assumes that your function definition is correct. Consider this example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs typescript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("function")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("double")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("x: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")])]),_v(") ")]),_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" (x*"),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(").toString();\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Although the above is an obvious bug (assuming we want double to return a number), the TypeScript compiler doesn't know what the user wants, and so happily infers the return type as string. Essentially, the compiler will never throw an error on inference, because it assumes the user's function implementation is correct (as it doesn't know the user's intention).\nHowever, if we know that we want the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("double")]),_v(" function to return a number, and use an explicit return type declaration, the same code will result in an error:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs typescript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("function")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("double")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("x: "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("number")])]),_v("): "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("number")]),_v(" ")]),_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" (x*"),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("2")]),_v(").toString();\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Hence, there "),_c('em',[_v("is")]),_v(" value in explicit type declarations, which is essentially telling the TypeScript compiler \"I expect the function to return this\", which allows TypeScript to check whether our function does indeed return the expected type, which adds value and improves type safety.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Mon, 15 Apr 2024, 5:32:44 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  