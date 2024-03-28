
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_m(1),_v(" "),_c('p',[_v("Researching whether to use rounded corners, sqared off corners, or fully rounded boxes was interesting from a usability perpective. Some resources I used to learn about them:")]),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('p',[_v("Using overflow-x: scroll on the default navbar, seemed to cause the dropdown to break.")]),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('p',[_v("This informed my decision that it would be better not to make a scrollable navbar the default, but have a dropdown menu with more options for smaller screens")]),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_c('p',[_v("Used when researching the deploy and build commands for MarkBind.")]),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_c('p',[_v("Used to write CLI programs.")]),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('p',[_v("Mainly studied the changelog to see if this would break when dependencies were updated.")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('p',[_v("Handy utility that I ended up using extensively")]),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('p',[_v("CI pipeline (particularly with git):")]),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_c('p',[_v("One suggestion for refactoring would be separating out each command into separate files. We could abstract away the command logic might be separating each command into classes, having each command inherit from a Command class, and having the site class just generate and execute each command when it is called to do so. But is this necessary or desirable?")]),_v(" "),_m(29),_v(" "),_c('p',[_v("Nevertheless, Site.js does use \"classes\" of managers to manage externals, etc, so perhaps in production avoiding classes is not a big deal. Would still be a useful abstraction to manage the complexity of the file.")]),_v(" "),_m(30),_v(" "),_c('panel',{attrs:{"title":"JavaScript forEach (and async loops)"}},[_c('p',[_v("\"JavaScript Array.prototype.forEach loop is not asynchronous. The Array.prototype.forEach method accepts a callback as an argument which can be an asynchronous function, but the forEach method will not wait for any promises to be resolved before moving onto the next iteration.\" ("),_c('a',{attrs:{"href":"https://atomizedobjects.com/blog/javascript/is-javascript-foreach-async/"}},[_v("Source")]),_v(").")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("forEach")]),_v(" does not look at what is returned, and won't handle the promise that an async function would return. Naturally, this means you cannot use async or await with it. The algorithm for forEach creates a loop that calls the callback function for each("),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/5050265/javascript-node-js-is-array-foreach-asynchronous"}},[_v("StackOverflow Source")]),_v(", "),_c('a',{attrs:{"href":"https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript"}},[_v("more information about loops")]),_v(")")]),_v(" "),_c('p',[_v("Instead, we could use map and the promise 'class' functions.")])]),_v(" "),_c('panel',{attrs:{"title":"Javascript map can be destructive sometimes"}},[_c('p',[_v("Just needed to note this, and consider other options. Refactoring my code allowed me to avoid destructively modifying the list.\n[source]("),_c('a',{attrs:{"href":"https://dev.to/lofiandcode/"}},[_v("https://dev.to/lofiandcode/")]),_v("\ncan-map-mutate-the-original-array-yes-dmb)")])]),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_c('p',[_v("In particular, I found the idea of semantic line breaks (single linebreaks being for your eyes only) in languages like HTML interesting. The argument for it(trivially rearranging items in a comma separated list, for example) was one I had not seen explicated before. While I am unlikely to adopt it, it also sheds light on why line-break problems are so common in MarkBind.")]),_v(" "),_m(33),_v(" "),_c('p',[_v("In the past, different browsers used different prefixes for CSS properties, so developers would often extensively cover the available cases with prefixes.")]),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_m(36)],1),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(37)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"frontend"}},[_v("Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#frontend","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"rounded-vs-square-edges-for-signalling-functionality"}},[_v("Rounded vs Square edges for signalling functionality"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rounded-vs-square-edges-for-signalling-functionality","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://ux.stackexchange.com/questions/40744/mixing-rounded-corners-and-square-corners"}},[_v("https://ux.stackexchange.com/questions/40744/mixing-rounded-corners-and-square-corners")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://medium.com/@carolinalina/how-to-design-ui-buttons-that-convert-d5ebb1080969"}},[_v("https://medium.com/@carolinalina/how-to-design-ui-buttons-that-convert-d5ebb1080969")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://prototypr.io/post/the-rounded-user-experience/"}},[_v("https://prototypr.io/post/the-rounded-user-experience/")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The information from "),_c('a',{attrs:{"href":"https://uxdesign.cc/make-sense-of-rounded-corners-on-buttons-dfc8e13ea7f7"}},[_v("https://uxdesign.cc/make-sense-of-rounded-corners-on-buttons-dfc8e13ea7f7")]),_v(" in particular made a case for fully rounded buttons for primary content when you have space to spare, to direct users attention to those buttons. They suggested to avoid fully rounded buttons when many are used next to each other as it may not be obvious which to click. I used this information to infer what the average user might takeaway if minimized panels were pills rather than rounded buttons.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"vue"}},[_v("Vue"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://v1.vuejs.org/guide/instance.html"}},[_v("https://v1.vuejs.org/guide/instance.html")])]),_v(" "),_c('li',[_v("Scoped styles: "),_c('a',{attrs:{"href":"https://vue-loader.vuejs.org/guide/scoped-css.html"}},[_v("https://vue-loader.vuejs.org/guide/scoped-css.html")]),_v(", also informing the issue I created "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/1768"}},[_v("#1768")]),_v(" in MarkBind")]),_v(" "),_c('li',[_v("Learning about slots: "),_c('a',{attrs:{"href":"https://learnvue.co/2021/03/when-why-to-use-vue-scoped-slots/#conclusion"}},[_v("https://learnvue.co/2021/03/when-why-to-use-vue-scoped-slots/#conclusion")]),_v(", "),_c('a',{attrs:{"href":"https://www.smashingmagazine.com/2019/07/using-slots-vue-js/"}},[_v("https://www.smashingmagazine.com/2019/07/using-slots-vue-js/")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"scrollbars"}},[_v("Scrollbars"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#scrollbars","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("After a few stack overflow posts and reading, I found this article: "),_c('a',{attrs:{"href":"https://css-tricks.com/popping-hidden-overflow/"}},[_v("https://css-tricks.com/popping-hidden-overflow/")]),_v(" that explains that setting "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("overflow-x")]),_v(" sets "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("overflow-y")]),_v(" as well, and it's just not possible to have a dropdown peep out of a scrollable overflow without setting positions relatively. "),_c('a',{attrs:{"href":"https://www.sitepoint.com/community/t/css-drop-down-menu-hidden-behind-horizontal-scrollbar/367783"}},[_v("This discussion")]),_v(" with the offered "),_c('a',{attrs:{"href":"https://codepen.io/paulobrien/embed/vYxWppv?"}},[_v("solution")]),_v(" was also interesting.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("I briefly explored existing libraries like "),_c('a',{attrs:{"href":"https://floating-ui.com/"}},[_v("https://floating-ui.com/")]),_v(". Libraries like this exist to make it easier to accomplish this surprisingly complex task.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("I also learned about the accessibility of scrollbars ("),_c('a',{attrs:{"href":"https://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html"}},[_v("https://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html")]),_v(") and ("),_c('a',{attrs:{"href":"https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/proposed/"}},[_v("https://www.w3.org/WAI/standards-guidelines/act/rules/0ssw9k/proposed/")]),_v("), which discussed what goes into making scrollbars accessible. Visually, visible scrollbars provide an obvious indication that there is more content. These design tips on scrollbars ("),_c('a',{attrs:{"href":"https://www.nngroup.com/articles/scrolling-and-scrollbars/"}},[_v("https://www.nngroup.com/articles/scrolling-and-scrollbars/")]),_v(") were also interesting, particularly the note to avoid horizontal scrolling wherever possible.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("[]::webkit-scrollbar]("),_c('a',{attrs:{"href":"https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar"}},[_v("https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar")]),_v(") pseudo-element does not work for all browsers and should be used with caution.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"open-source-dependencies"}},[_v("Open source dependencies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#open-source-dependencies","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ghpages"}},[_v("ghpages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ghpages","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/tschaub/gh-pages"}},[_v("https://github.com/tschaub/gh-pages")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"commander"}},[_v("Commander"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commander","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.npmjs.com/package/commander"}},[_v("https://www.npmjs.com/package/commander")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Usage_message"}},[_v("https://en.wikipedia.org/wiki/Usage_message")]),_v(" (conventions in defining parameters)")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"jest"}},[_v("jest"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jest","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Introduction: "),_c('a',{attrs:{"href":"https://jestjs.io/"}},[_v("https://jestjs.io/")]),_v(" and repository("),_c('a',{attrs:{"href":"https://github.com/facebook/jest"}},[_v("https://github.com/facebook/jest")]),_v(")")]),_v(" "),_c('li',[_v("relevant blog post: "),_c('a',{attrs:{"href":"https://jestjs.io/blog/2021/05/25/jest-27"}},[_v("https://jestjs.io/blog/2021/05/25/jest-27")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/facebook/jest/blob/main/CHANGELOG.md#2700"}},[_v("changelog")])]),_v(" "),_c('li',[_v("Jest testrunners: they plan on changing the default test-runner from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("jasmine2")]),_v(" to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("jest-circus")]),_v(" in version 27, with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("jasmine2")]),_v(" "),_c('a',{attrs:{"href":"https://jestjs.io/blog/2020/05/05/jest-26"}},[_v("to be discontinued afterwards")]),_v(". Though I think we're using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("jasmine2")]),_v(" and not "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("jest-circus")]),_v(", but MarkBind we never explicitly specify a change from the default")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"fs-extra"}},[_v("fs-extra"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#fs-extra","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/jprichardson/node-fs-extra"}},[_v("https://github.com/jprichardson/node-fs-extra")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"git"}},[_v("Git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration"}},[_v("https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration")]),_v(", particularly the section on "),_c('a',{attrs:{"href":"https://docs.github.com/en/actions/automating-builds-and-tests/about-continuous-integration#about-continuous-integration-using-github-actions"}},[_v("github actions")])]),_v(" "),_c('li',[_v("Follow-up research about github actions\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/quickstart"}},[_v("https://docs.github.com/en/actions/quickstart")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"}},[_v("https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions")])])])]),_v(" "),_c('li',[_v("Basic research about "),_c('a',{attrs:{"href":"https://travis-ci.org/"}},[_v("Travis CI")]),_v(" and "),_c('a',{attrs:{"href":"https://www.netlify.com/"}},[_v("Netlify")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"logging-framework"}},[_v("Logging Framework"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logging-framework","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.sentinelone.com/blog/logging-framework/"}},[_v("https://www.sentinelone.com/blog/logging-framework/")]),_v(" as an introduction")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://se-education.org/se-book/errorHandling/#-12"}},[_v("https://se-education.org/se-book/errorHandling/#-12")]),_v(" also as an introduction")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/winstonjs/winston"}},[_v("https://github.com/winstonjs/winston")]),_v(" (library used with markbind)")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"ways-versioning-is-implemented"}},[_v("Ways Versioning is Implemented"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ways-versioning-is-implemented","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Learn about semantic versioning: "),_c('a',{attrs:{"href":"https://semver.org/"}},[_v("https://semver.org/")])]),_v(" "),_c('li',[_v("Alternate versioning solutions:\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/jimporter/mike"}},[_v("https://github.com/jimporter/mike")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://docusaurus.io/docs/versioning"}},[_v("https://docusaurus.io/docs/versioning")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"javascript"}},[_v("Javascript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#javascript","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"javascript-with-regard-to-object-oriented-programming"}},[_v("Javascript with regard to object oriented programming"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#javascript-with-regard-to-object-oriented-programming","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Looking into this was inspired by the issues on refactoring the large "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("core/site/index.js")]),_v(" file which is over 1.5k lines into more manageable class. At present, most of the file is made up of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Site")]),_v(" class, which makes sense from an object oriented perspective. All the functions which are supported by Site are things which affect what the site itself holds or does: generating itself, deploying itself, initialising itself.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Java and Javascript are different in that Java is class based and Javascript is prototype-based. Class based languages are founded on the concept of classes and instances being distinct, where classes are an abstract description of a set of potential instances which have the properties defined in the class - no more and no less. Prototype based languages have a 'prototypical object' which is the template used to create a new object, but once you create it or at run time the object can specify its own additional properties and be assigned as the prototype for additional objects (source: "),_c('a',{attrs:{"href":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model"}},[_v("mozilla, class-based vs prototype based languages")]),_v(")")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"certain-functions-in-javascript"}},[_v("Certain functions in javascript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#certain-functions-in-javascript","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"softwrapping-vs-hard-wrapping-code"}},[_v("Softwrapping vs hard wrapping code"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#softwrapping-vs-hard-wrapping-code","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("After extensive reading, I am more familiar with the arguments for softwrapping code vs longwrapping code, as well as keyboard shortcuts for skilling to the next line in editors like vim which also affect developer preference. I liked "),_c('a',{attrs:{"href":"https://jesseduffield.com/Hard-Wrap-vs-Soft-Wrap/"}},[_v("this article")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"css-vendor-locking"}},[_v("CSS Vendor Locking:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#css-vendor-locking","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"https://stackoverflow.com/questions/76144712/visual-studio-code-warning-also-define-the-standard-property-background-clip"}},[_v("Stylelint removes vendor prefixes")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("There is a danger for specific properties... eg "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/75688924/background-clip-text-isnt-working-at-all-in-css"}},[_v("background-clip: text")]),_v(" ... but for other cases in the markbind code, like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("background-clip: padding-box")]),_v(", it is no longer to prefix in order to obtain the desired behaviour.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Background reading on vendor prefixing: "),_c('a',{attrs:{"href":"https://css-tricks.com/is-vendor-prefixing-dead/"}},[_v("Is vendor prefixing dead?")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Thu, 28 Mar 2024, 14:20:49 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  