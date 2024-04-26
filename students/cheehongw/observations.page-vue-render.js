
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-sourceacademy-frontend"}},[_v("Project: SourceAcademy Frontend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-sourceacademy-frontend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Sourceacademy is the an online experiential environment used for teaching students computational thinking and is used by the School of Computing in NUS and Uppsala University in Sweden to teach introductory programming modules. The frontend is built using React and Redux.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In this project, I have authored and merged two PRs. They are listed as follows:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/source-academy/frontend/pull/2943"}},[_v("Fix double window prompt when uploading users #2943")])]),_v(" "),_c('p',[_v("In this PR, I fixed a long standing bug regarding the UI where two file prompts show up upon clicking a \"upload csv\" button. To solve this, I first reproduced the issue on my local development environment, and then identified the issue, which happened to be the incorrect use of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<FileInput>")]),_v(" react component within a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<CSVReader>")]),_v(" component. The components were imported from a "),_c('a',{attrs:{"href":"https://blueprintjs.com/"}},[_v("theming library")]),_v(" and a "),_c('a',{attrs:{"href":"https://www.papaparse.com/"}},[_v("CSV parser library")]),_v(" respectively.")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/source-academy/frontend/pull/2946"}},[_v("i18n framework #2946")])]),_v(" "),_c('p',[_v("In this PR, I laid the groundwork for future internationalization work to be done on SourceAcademy. SourceAcademy started out as a project in NUS but has plans to go international, as seen by its use in Uppsala university in Sweden. As such, adding i18n to the project will be crucial for its future.")]),_v(" "),_c('p',[_v("In this PR, I introduced the use of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("react-i18next")]),_v(" library, as well as define data structures to allow future translators to easily add on new translations and languages.")])])]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("React & Redux")])]),_v(" "),_c('p',[_v("Sourceacademy is built in React and Redux, and as such, I have had to learn how to work with these two libraries. While I have used React and Redux before, I have not seen how it can be used in a large scale project like Sourceacademy. In Sourceacademy, I have seen how Redux and Redux Toolkit was used to create a typesafe global state that is shared across the entire application and I appreciate how well structured the code was in the repository.")]),_v(" "),_c('p',[_c('strong',[_v("i18next")])]),_v(" "),_c('p',[_v("i18next is a library that allows for internationalization in a React project. It is a powerful library that allows for easy translation of text in a project. During my implementation of the i18n framework in Sourceacademy, I referenced several implementations of i18n across various established open source repos such as HospitalRun and FreeCodeCamp for any best practices. From these references, I learned how to structure the i18n files and the various translation resources to make it easy for future translators to add on new translations.")]),_v(" "),_c('p',[_v("Furthermore, the i18n framework that I contributed to has strong type safety and only allows keys that are defined in the translation files to be used, making it easier for future developers to see what keys are allowed on what file. I am grateful for the Sourceacademy maintainers for their guidance in this implementation.")]),_v(" "),_c('p',[_c('strong',[_v("Practices and tools from SourceAcademy that could be adopted by CATcher")])]),_v(" "),_c('p',[_v("SourceAcademy utilises Yarn as their package manager. From almost all points of view, yarn has the exact same functionality as npm, but it is faster and more reliable. As such, we could consider moving over to using Yarn in CATcher as well.")]),_v(" "),_c('p',[_v("Furthermore, I was particularly impressed with the testing framework that they had to ensure any new changes were not breaking.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 26 Apr 2024, 8:25:19 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  