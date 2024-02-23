
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"attribute-directive"}},[_c('strong',[_v("Attribute Directive")]),_v(":"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#attribute-directive","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Summary")]),_v(": Attribute directives can change the appearance or behavior of DOM elements and Angular components.")]),_v(" "),_c('li',[_c('strong',[_v("Resources")]),_v(":\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/attribute-directives"}},[_v("Angular Documentation")]),_v(": Provides guidelines on creating and applying attribute directive, covering user events handling and passing values to attribute directive.")])])]),_v(" "),_c('li',[_c('strong',[_v("Practice")]),_v(":\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/pull/1239"}},[_v("PR #1239")]),_v(": Created an attribute directive that listen to click event and will open error snackbar if the target link is an internal link.")])])])]),_v(" "),_c('h4',{attrs:{"id":"components"}},[_c('strong',[_v("Components")]),_v(":"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#components","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Summary")]),_v(": Components are the main building blocks for Angular. Each components consists of 3 files:\n"),_c('ul',[_c('li',[_v("HTML: Defines the layout of the component's view.")]),_v(" "),_c('li',[_v("CSS: Defines the component-specific styles.")]),_v(" "),_c('li',[_v("Typescript: Implements the component's logic and behavior.")])])]),_v(" "),_c('li',[_c('strong',[_v("Resources")]),_v(":\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/component-overview"}},[_v("Angular Documentation")]),_v(": Provides guidelines on creating components.")]),_v(" "),_c('li',[_v("Previous code by other developers: Learned from existing component implementations in the codebase.")])])]),_v(" "),_c('li',[_c('strong',[_v("Practice")]),_v(":\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/233"}},[_v("PR #233")]),_v(": Edited exsiting component and created new component to improve WATcher activity dashboard.")])])])]),_v(" "),_c('h3',{attrs:{"id":"jasmine"}},[_v("Jasmine"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jasmine","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Jasmine is a behavior-driven development framewrok specific for JavaScript unit testing.")]),_v(" "),_c('p',[_v("I primarily learned how to use Jasmine from its "),_c('a',{attrs:{"href":"https://jasmine.github.io/api/edge/global"}},[_v("documentation")]),_v(". I utilized it extensively while working on WATcher test case refactoring. Some relevant PRs include: "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/241"}},[_v("PR #241")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/244"}},[_v("PR #244")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/245"}},[_v("PR #245")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/246"}},[_v("PR #246")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/247"}},[_v("PR #247")])]),_v(" "),_c('ul',[_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("describe")])]),_v(": Define a group of spec (suite)")]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("it")])]),_v(": Define a single spec.")]),_v(" "),_c('li',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("expect")])]),_v(": Create an expectation for a spec.")]),_v(" "),_c('li',[_c('strong',[_v("Class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Spy")])]),_v(": Mock functions (spies) that can be used to track function calls.")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.2.0")])]),_v(" on Fri, Feb 23, 2024, 8:05:11 AM UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  