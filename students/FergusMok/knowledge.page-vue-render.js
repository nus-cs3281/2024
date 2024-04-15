
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"frontend"}},[_v("Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Angular is a frontend framework built on TypeScript. A majority of Angular's functions uses Typescript decorators, which are adds functionalities to functions and class.")]),_v(" "),_c('p',[_v("Each Angular component uses a selector (for other components to reference this component), HTML template, and CSS file to decorate the HTML template.")]),_v(" "),_c('p',[_v("Furthermore, within the HTML template, we are able to use Angular directives. Examples are *ngIf, *ngFor. The asterik is synthetic sugar that surrounds the HTML with a <ng-template>, and is useful for adding and removing tag elements. Another interesting feature is that Angular supports two-way data binding directly, where the HTML's value can affect the actual value and vice versa. Done with [(NgModel)]")]),_v(" "),_c('p',[_v("See:")]),_v(" "),_c('ol',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guidestructural-directives#what-are-structural-directives"}},[_v("https://angular.io/guidestructural-directives#what-are-structural-directives")]),_v(";")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/two-way-binding#adding-two-way-data-binding"}},[_v("https://angular.io/guide/two-way-binding#adding-two-way-data-binding")])])]),_v(" "),_c('p',[_v("Angular's CLI is also extremely useful, and most basic features from building and testing are ready out of the box.")]),_v(" "),_c('p',[_v("See: "),_c('a',{attrs:{"href":"https://angular.io/cli"}},[_v("https://angular.io/cli")])]),_v(" "),_c('h3',{attrs:{"id":"rxjs"}},[_v("RxJS"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rxjs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("RxJS is a library that helps with async and event-based functions in TEAMMATES through Observables and Subscriptions. RxJS can also be used with other frameworks, like React and Vue.")]),_v(" "),_c('p',[_v("Common pattern of usage:")]),_v(" "),_c('ol',[_c('li',[_v("Create a service class, with a function that calls the backend API. This function returns an Observable.")]),_v(" "),_c('li',[_v("We can call the service from our component, and add on "),_c('b',[_v("operators")]),_v(" to the Observable, such as pipe and subscribe.")]),_v(" "),_c('li',[_v("Pipe will chain observable operators, and subscribe will activate the observabe to listen for the emitted values.")])]),_v(" "),_c('h3',{attrs:{"id":"jasmine-and-jest"}},[_v("Jasmine and Jest"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jasmine-and-jest","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Jasmine is a testing framework. It describes test cases, and can make use of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("spies")]),_v(", that can mock return values, track the status of the function. Furthermore, combined with using inspecting HTML elements, we can check the values of the components in different conditions.\nJest is another testing framework used for snapshots. We're able to take snapshots, save them, and compare them later when running the tests again. This is especially useful for regression testing.")]),_v(" "),_c('h1',{attrs:{"id":"backend"}},[_v("Backend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"google-cloud-datastore"}},[_v("Google Cloud Datastore"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#google-cloud-datastore","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt how Datastore's key-value works, it's strengths and limitations, and important conventions. These conventions are seemly counterintuitive for users with an SQL background for smaller applications, but makes sense when building applications at scale.")]),_v(" "),_c('h4',{attrs:{"id":"counters"}},[_v("Counters"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#counters","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("For example, as datastore's structure does not support aggregating functions, functions such as counting is an O(n) operation. The Datastore community's (counterintuitive) convention is to have multiple Counter class.")]),_v(" "),_c('p',[_v("These counters may also face simultaneous write limitations, which is known as contention, when counters change at >5/s. This results in needing to implement 'sharding' counters.")]),_v(" "),_c('p',[_v("Google's article: "),_c('a',{attrs:{"href":"https://medium.com/@duhroach/datastore-sharded-counters-2ba6da7475b0"}},[_v("https://medium.com/@duhroach/datastore-sharded-counters-2ba6da7475b0")])]),_v(" "),_c('h4',{attrs:{"id":"hotspotting"}},[_v("Hotspotting"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hotspotting","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Datastore's (counterintuitive) convention when writing a large amount of data is to avoid monotonically increasing IDs. This is because ranges of storage with similar IDs are stored on the same 'node'(known as tablets), and massive writes to a node will lead to a significant slowdown, called hotspotting. This is a significant pain point for time-series data.")]),_v(" "),_c('p',[_v("Former Googler: "),_c('a',{attrs:{"href":"https://ikaisays.com/2011/01/25/app-engine-datastore-tip-monotonically-increasing-values-are-bad/"}},[_v("https://ikaisays.com/2011/01/25/app-engine-datastore-tip-monotonically-increasing-values-are-bad/")])]),_v(" "),_c('p',[_v("The convention is to prepend with a known amount of random numbers/hash, or prepend the ID with other useful fields that can be used for querying later on.")]),_v(" "),_c('p',[_v("Schema Design: "),_c('a',{attrs:{"href":"https://cloud.google.com/bigtable/docs/schema-design"}},[_v("https://cloud.google.com/bigtable/docs/schema-design")])]),_v(" "),_c('h4',{attrs:{"id":"indexes"}},[_v("Indexes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#indexes","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Datastore is built in a way that requires indexes for every single field that requires that needs to be queried. This is because Datastore cannot reference the data of columns, and ONLY the key during the query. The (counterintuitive) convetion is to make indexes for most fields of an entity, and this can lead to 90% of the storage for an entity to be indexes alone. This leads to a trade-off for more performance at scale.")]),_v(" "),_c('p',[_v("However, Google does not bill for storage, and only for writes and reads.")]),_v(" "),_c('p',[_v("Google's tutorial: "),_c('a',{attrs:{"href":"https://youtu.be/d4CiMWy0J70?t=75"}},[_v("https://youtu.be/d4CiMWy0J70?t=75")])]),_v(" "),_c('h3',{attrs:{"id":"git-rerere"}},[_v("Git ReReRe"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-rerere","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While most people know the basics of git, git rerere is slightly more advanced. It stands for "),_c('b',[_v("Re")]),_v("use "),_c('b',[_v("re")]),_v("corded "),_c('b',[_v("re")]),_v("solution.\nThis is useful when working in parallel with branches, and rebasing a long-lived branch that will give merge conflicts.\nThe common problem is having to resolve the same conflict each time you rebase your branch. After toggling rerere on,\nyou will no longer need to resolve the same conflict again after solving it once. This is because git will record your conflict merge results,\nand auto-solve them the next time around.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git config rerere.enabled true")])]),_v(" "),_c('p',[_v("Alternatively, if you are aware that many of your new commits will result in a conflict, it also be easier to squash them then rebase.")]),_v(" "),_c('p',[_v("Git ReReRe: "),_c('a',{attrs:{"href":"https://git-scm.com/docs/git-rerere"}},[_v("https://git-scm.com/docs/git-rerere")])]),_v(" "),_c('h3',{attrs:{"id":"additional-tips"}},[_v("Additional Tips"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#additional-tips","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_v("To pass additional flags to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run")]),_v(", you can use append "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-- --<flag>")]),_v(". E.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run test -- --detect-open-handles")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Mon, 15 Apr 2024, 16:48:23 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  