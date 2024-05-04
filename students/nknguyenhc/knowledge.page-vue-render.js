
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Of course, Angular is the framework used to run CATcher and WATcher, so learning how it works is an essential part of contributing to the projects. These projects are my first experience using Angular.")]),_v(" "),_c('p',[_v("As I have experienced React.js and Alpine.js, with experience of working in frontend development during my internship, I expected to pick up Angular with ease. However, slightly different from my expectation, the OOP aspect of Angular makes it quite difficult to pick up.")]),_v(" "),_c('p',[_v("There are a few interesting concepts that I picked up along the way:")]),_v(" "),_c('ul',[_c('li',[_v("Each class is decorated with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Component")]),_v(" to mark it as an Angular component. This decorator determines a few important properties of the component, including the query selector, the HTML template and the stylesheets.")]),_v(" "),_c('li',[_v("Class fields, if used in HTML templates, updates the rendered HTML template if its value is changed. In React.js, this is only possible with a state hook.")]),_v(" "),_c('li',[_v("Dependencies of a component can be injected from root using factory methods, and does not have to be explicitly instantiated.")])]),_v(" "),_c('p',[_v("The knowledge of how a component is declared allows me to confidently create a new component in "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/235"}},[_v("WATcher-PR#235")]),_v(", which was the component to show a list of users with 0 PRs and issues.")]),_v(" "),_c('p',[_v("One interesting thing about Angular is that it provides a few methods that developers can make use of, to reduce the complexity of component class. This knowledge allows me to make "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/230"}},[_v("WATcher-PR#230")]),_v(", where I directly modified the Angular model used in the HTML template.")]),_v(" "),_c('h3',{attrs:{"id":"rxjs"}},[_v("RxJS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rxjs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I initially had a lot of trouble trying to understand the operators in RxJS. Ultimately, I was able to understand how it works, and the differences between different operators on an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable")]),_v(". I was able to see the similarities between different RxJS operators and Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("stream")]),_v(" methods.")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable::pipe")]),_v(" allows methods to modify the value within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable")]),_v(", notably with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("map")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mergeMap")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable::subscribe")]),_v(" listens for changes within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable")]),_v(".")])]),_v(" "),_c('p',[_v("The knowledge of RxJS operators allow me to modify the underlying processes of the Angular services, and created "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/pull/1234"}},[_v("CATcher-PR#1234")]),_v(", where I set branch for image uploads to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(".")]),_v(" "),_c('p',[_v("One thing to note about RxJS operator is that, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable")]),_v(" pipes are treated as functions, in a sense that they are only called when there is a subscriber. If there are multiple pipes merged into one, each individual pipes are called when there is a subscriber. Consider this example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_v("Observable a = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v("(); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// some declaration")]),_v("\n")]),_c('span',[_v("Observable b = a.pipe(f);\n")]),_c('span',[_v("Observable x = b.pipe(g);\n")]),_c('span',[_v("Observable y = b.pipe(h);\n")]),_c('span',[_v("Observable c = merge(x, y);\n")]),_c('span',[_v("c.subscribe();\n")])])]),_c('p',[_v("Notice that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("c")]),_v(" is a merged "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Observable")]),_v(" from pipes of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f, g")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f, h")]),_v(". So, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("g")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("h")]),_v(" each are called once, but "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f")]),_v(" is called twice! Imagine if "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f")]),_v(" is a function making multiple API calls to Github.")]),_v(" "),_c('p',[_v("This knowledge allows me to "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/WATcher/pull/360/files#diff-7006ea7c06fd1129a5fc2c0aefbf660f5b2ddf1821ede1c269a2f8f1a9c971bc"}},[_v("reduce Github API calls for issues")]),_v(". To get issues from a repository, one must make multiple API calls, each obtaining 100 issues. These API calls are contained within the function "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("f")]),_v(". So instead of splitting the pipe, I refactored to merge "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("g")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("h")]),_v(" and continue the pipe from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("b")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs ts"}},[_c('span',[_v("Observable a = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("from")]),_v("(); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// some declaration")]),_v("\n")]),_c('span',[_v("Observable b = a.pipe(f);\n")]),_c('span',[_v("Observable c = b.pipe(merge(g, h));\n")]),_c('span',[_v("c.subscribe();\n")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")])]),_v(" on Sat, 4 May 2024, 6:48:22 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  