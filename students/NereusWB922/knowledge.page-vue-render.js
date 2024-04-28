
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"components"}},[_v("Components"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#components","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Components are the main building blocks for Angular. Each components consists of 3 files:")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("HTML")]),_v(": Defines the layout of the component's view.")]),_v(" "),_c('li',[_c('strong',[_v("CSS")]),_v(": Defines the component-specific styles.")]),_v(" "),_c('li',[_c('strong',[_v("Typescript")]),_v(": Implements the component's logic and behavior.")])]),_v(" "),_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"https://angular.io/guide/component-overview"}},[_v("Angular Documentation")]),_v(" for guidelines on creating components.")]),_v(" "),_c('h4',{attrs:{"id":"attribute-directive"}},[_v("Attribute Directive"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#attribute-directive","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Attribute directives can change the appearance or behavior of DOM elements and Angular components.")]),_v(" "),_c('p',[_v("For detailed guidance, refer to the "),_c('a',{attrs:{"href":"https://angular.io/guide/attribute-directives"}},[_v("Angular Documentation")]),_v(". It provides guidelines on creating and applying attribute directive, covering user events handling and passing values to attribute directive.")]),_v(" "),_c('p',[_v("In "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/pull/1239"}},[_v("PR #1239")]),_v(", I implemented an attribute directive that listen to click event and will open error snackbar if the target link is an internal link.")]),_v(" "),_c('h4',{attrs:{"id":"ngtemplateoutlet"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NgTemplateOutlet")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ngtemplateoutlet","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NgTemplateOutlet")]),_v(" is a directive in Angular that allows for "),_c('strong',[_v("dynamic rendering")]),_v(" of templates. It allows the template to be specified along with the context data that should be injected into it.")]),_v(" "),_c('p',[_v("I utilized "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NgTemplateOutlet")]),_v(" to dynamically render different headers for the card view component based on current grouping criteria. Refer to "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/blob/main/src/app/issues-viewer/card-view/card-view.component.html"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CardViewComponenet")])]),_v(" for implementation details.")]),_v(" "),_c('h3',{attrs:{"id":"jasmine"}},[_v("Jasmine"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jasmine","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Jasmine is a behavior-driven development framewrok specific for JavaScript unit testing.")]),_v(" "),_c('p',[_v("I primarily learned how to use Jasmine from its "),_c('a',{attrs:{"href":"https://jasmine.github.io/api/edge/global"}},[_v("documentation")]),_v(". I utilized it extensively while working on WATcher test case refactoring. Some relevant PRs include: "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/241"}},[_v("PR #241")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/244"}},[_v("PR #244")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/245"}},[_v("PR #245")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/246"}},[_v("PR #246")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/247"}},[_v("PR #247")])]),_v(" "),_c('ul',[_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("describe")])]),_v(": Define a group of spec (suite)")]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("it")])]),_v(": Define a single spec.")]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("expect")])]),_v(": Create an expectation for a spec.")]),_v(" "),_c('li',[_c('strong',[_v("Class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Spy")])]),_v(": Mock functions (spies) that can be used to track function calls.")])]),_v(" "),_c('h4',{attrs:{"id":"asynchronous-testing-with-observables"}},[_v("Asynchronous Testing with Observables"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#asynchronous-testing-with-observables","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When dealing with asynchronous operations like observables, Jasmine provides support through the use of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("done")]),_v(" function. This allows for effective testing of asynchronous behavior by signaling when a test has completed its execution.")]),_v(" "),_c('p',[_v("Here's an example from my "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/275"}},[_v("pull request")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_v("it("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'should throw error for URL without repo parameter'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("done")]),_v(") =>")]),_v(" {\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" urlWithoutRepo = "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'/issuesViewer'")]),_v(";\n")]),_c('span',[_v("\n")]),_c('span',[_v("  phaseService.setupFromUrl(urlWithoutRepo).subscribe({\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("error")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("err")]),_v(") =>")]),_v(" {\n")]),_c('span',[_v("      expect(err).toEqual("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-built_in"}},[_v("Error")]),_v("(ErrorMessageService.invalidUrlMessage()));\n")]),_c('span',[_v("      done(); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Signal that the test has completed")]),_v("\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("  });\n")]),_c('span',[_v("});\n")])])]),_c('p',[_v("Resources: "),_c('a',{attrs:{"href":"https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#59a4"}},[_v("Angular — Unit Testing recipes (v2+)")])]),_v(" "),_c('h4',{attrs:{"id":"testing-for-behavior"}},[_v("Testing for Behavior"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing-for-behavior","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("It's essential to test for behavior rather than implementation details. This principle was emphasized by a senior in my pull reqeust. By focusing on behavior, tests become more resilient to changes in the codebase and provide better documentation for how components and functions should be used.")]),_v(" "),_c('p',[_v("Here's an example that illustrates the difference between testing behavior and implementation:")]),_v(" "),_c('p',[_v("Context: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("changeRepositoryIfValid")]),_v(" will call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("changeCurrentRepository")]),_v(" if repository is valid.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Test for behavior")]),_v("\n")]),_c('span',[_v("it("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'should set current repository if repository is valid'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("async")]),_v(" () => {\n")]),_c('span',[_v("  githubServiceSpy.isRepositoryPresent.and.returnValue("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("of")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v("));\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("await")]),_v(" phaseService.changeRepositoryIfValid(WATCHER_REPO);\n")]),_c('span',[_v("\n")]),_c('span',[_v("  expect(phaseService.currentRepo).toEqual(WATCHER_REPO);\n")]),_c('span',[_v("});\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Test for implementation")]),_v("\n")]),_c('span',[_v("it("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'should call changeRepository method if repository is valid'")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("async")]),_v(" () => {\n")]),_c('span',[_v("  githubServiceSpy.isRepositoryPresent.and.returnValue("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("of")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v("));\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" changeCurrentRepositorySpy = spyOn(phaseService, "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'changeCurrentRepository'")]),_v(");\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("await")]),_v(" phaseService.changeRepositoryIfValid(WATCHER_REPO);\n")]),_c('span',[_v("\n")]),_c('span',[_v("  expect(changeCurrentRepositorySpy).toHaveBeenCalledWith(WATCHER_REPO);\n")]),_c('span',[_v("});\n")])])]),_c('h3',{attrs:{"id":"design-pattern"}},[_v("Design Pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-pattern","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"strategy-design-pattern"}},[_v("Strategy Design Pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#strategy-design-pattern","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The Strategy design pattern allows for the selection of algorithms at runtime by defining a family of interchangeable algorithms and encapsulating each one. It enables flexibility and easy extension of functionality without modifying existing code.")]),_v(" "),_c('p',[_v("I utilized the Strategy Design Pattern to implement a "),_c('strong',[_v("\"Group by\"")]),_v(" feature that organizes issues / prs based on different criteria.")]),_v(" "),_c('p',[_v("Implementation of group by feature :")]),_v(" "),_c('ul',[_c('li',[_v("Grouping Strategy Interface ("),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/blob/main/src/app/core/services/grouping/grouping-strategy.interface.ts"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GroupingStrategy")])]),_v("): Defines a common interface for all supported grouping strategies.")]),_v(" "),_c('li',[_v("Concrete Grouping Strategy: Each strategy groups the issues/prs based on different criterias.\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/blob/main/src/app/core/services/grouping/assignee-grouping-strategy.service.ts"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AssigneeGroupingStrategy")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/blob/main/src/app/core/services/grouping/milestone-grouping-strategy.service.ts"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MilestoneGroupingStrategy")])])])])]),_v(" "),_c('li',[_v("Context ("),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/blob/main/src/app/core/services/grouping/grouping-context.service.ts"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GroupingContextService")])]),_v("): This service is used to apply the grouping strategies based on user selection.")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 28 Apr 2024, 23:35:32 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  