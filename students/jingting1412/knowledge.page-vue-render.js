
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"vue-and-jest-vue-test-utils"}},[_v("Vue and Jest/Vue Test Utils"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#vue-and-jest-vue-test-utils","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While working with Vue components this semester, I've learned more about "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("props")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("script")]),_v(" in vue when working on the template for panels through adding a new prop "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("isSeamless")]),_v(" and writing new script for the panel component.")]),_v(" "),_c('p',[_v("MarkBind uses Jest together with Vue Test Utils for its snapshot tests, which test Vue components against their expected snapshots. While updating the component, I wrote new tests to ensure that the Vue components are working as expected.")]),_v(" "),_c('h4',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://vuejs.org/guide/introduction.html"}},[_v("Vue official documentation")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://v1.test-utils.vuejs.org/"}},[_v("Vue test utils documentation")])])]),_v(" "),_c('h3',{attrs:{"id":"esm-cjs-interoperality"}},[_v("ESM/CJS interoperality"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#esm-cjs-interoperality","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("An interesting issue I've encountered this semester while researching on integrating a full search functionality is the issue of importing esm like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pagefind")]),_v(" into cjs modules. CommonJS uses the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("require('something')")]),_v(" syntax for importing other modules and ESM uses the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import {stuff} from './somewhere'")]),_v(" syntax for importing.")]),_v(" "),_c('p',[_v("Another crucial difference is that "),_c('strong',[_v("CJS imports are synchronous")]),_v(" while "),_c('strong',[_v("ESM imports are asynchronous")]),_v(". As such, when importing ES modules into CJS, the normal "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("require('pagefind')")]),_v(" syntax would result in an error. Instead, you'll need to use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("await import('pagefind')")]),_v(" to asynchronously import the module. This difference in imports is something that should be taken note of since we use both the ESM "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" syntax and CJS "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("require")]),_v(" syntax in various files in MarkBind.")]),_v(" "),_c('h4',{attrs:{"id":"resources-2"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://adamcoster.com/blog/commonjs-and-esm-importexport-compatibility-examples"}},[_v("This blog post by Adam Coster")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.typescriptlang.org/docs/handbook/modules/appendices/esm-cjs-interop.html"}},[_v("Typescript ESM/CJS Interoperability")])])]),_v(" "),_c('h3',{attrs:{"id":"nunjucks"}},[_v("Nunjucks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#nunjucks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Nunjucks is a rich and powerful templating language for JavaScript. MarkBind supports Nunjucks for templating and I’ve used Nunjucks specifically to create a set of mappings of topics to their pages, and to write macros.")]),_v(" "),_c('h4',{attrs:{"id":"aspects"}},[_v("Aspects"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspects","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("macro")]),_v(" "),_c('br')])]),_v(" "),_c('p',[_v("Nunjucks "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("macro")]),_v(" allows one to define reusable chunks of content. A great benefit of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("macro")]),_v(" is the reduction of code duplication due to its ability to encapsulate chunks of code into templates and its ability to accept parameters so that the output can be customised based on the inputs provided.")]),_v(" "),_c('ol',{attrs:{"start":"2"}},[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("set")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(" "),_c('br')])]),_v(" "),_c('p',[_v("While combining the syntax pages in "),_c('a',{attrs:{"href":"https://github.com/jingting1412/markbind/commit/a44bdaa163ab457753e8e737711b2843dbcc9512"}},[_v("this commit")]),_v(", I worked on a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("set")]),_v(" that keeps track of the various syntax topics and their information. This was a good exercise to experience how to create a variable using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("set")]),_v(" and import it in other files to access its values using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("import")]),_v(".")]),_v(" "),_c('h4',{attrs:{"id":"resources-3"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://mozilla.github.io/nunjucks/templating.html"}},[_v("Nunjucks Templating Documentation")])])]),_v(" "),_c('h3',{attrs:{"id":"bootstrap"}},[_v("Bootstrap"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bootstrap","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind has Vue.js components built on the popular BootStrap framework. Much of Bootstrap's features are supported in and out of these components as well. While creating the portfolio template, I got to learn more about the various components and layouts of Bootstrap.")]),_v(" "),_c('h4',{attrs:{"id":"aspects-2"}},[_v("Aspects"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspects-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ol',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("grid")]),_v(" "),_c('br')])]),_v(" "),_c('p',[_v("Bootstrap "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("grid")]),_v(" built with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flexbox")]),_v(" and is fully responsive. More specific aspects I've learned")]),_v(" "),_c('ul',[_c('li',[_v("When building grid layouts, all content goes in columns. The hierarchy of Bootstrap’s grid goes from container to row to column, which needs to be kept in mind while adding content.")]),_v(" "),_c('li',[_v("There are 12 template columns available per row, which allows for different combinations of elements that span any number of columns. The number 12 is very important when customising the width for each column to prevent unintended layout changes as Bootstrap does "),_c('a',{attrs:{"href":"https://getbootstrap.com/docs/5.3/layout/columns/#column-wrapping"}},[_v("column wrapping")]),_v(" when more than 12 columns are placed in a single row.")])]),_v(" "),_c('ol',{attrs:{"start":"2"}},[_c('li',[_v("Components offered by Bootstrap\n"),_c('br')])]),_v(" "),_c('p',[_v("Explored various components offered by Bootstrap, such as "),_c('a',{attrs:{"href":"https://getbootstrap.com/docs/5.3/components/accordion/"}},[_v("accordions")]),_v(", "),_c('a',{attrs:{"href":"https://getbootstrap.com/docs/5.3/components/card/"}},[_v("cards")]),_v(", "),_c('a',{attrs:{"href":"https://getbootstrap.com/docs/5.3/components/carousel/"}},[_v("carousels")])]),_v(" "),_c('h4',{attrs:{"id":"resources-4"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-4","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://getbootstrap.com/docs/5.3/getting-started/introduction/"}},[_v("Bootstrap docs")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Thu, 18 Apr 2024, 16:52:03 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  