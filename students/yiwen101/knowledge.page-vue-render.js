
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"tool-technology-git"}},[_v("Tool/Technology git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-git","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("To sync a forked repository with the original repository after discarding all the changes in the forked repository:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs bash"}},[_c('span',[_v("git remote add upstream <URL_of_original_repository>\n")]),_c('span',[_v("git fetch upstream\n")]),_c('span',[_v("git checkout master\n")]),_c('span',[_v("git reset --hard upstream/master\n")]),_c('span',[_v("git push origin master --force\n")])])]),_c('p',[_v("To append a new commit onto the already existing commit you can do the following:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs bash"}},[_c('span',[_v("git add .\n")]),_c('span',[_v("git commit --amend\n")]),_c('span',[_v("git push origin <branch_name> --force\n")])])]),_c('p',[_v("If there is significant changes to file after renaming, git treat it as a new file and the history of the file is lost. So to preserve the history of the file, need to separate the renaming and the changes (and do rebase and merge).")]),_v(" "),_c('h3',{attrs:{"id":"tool-technology-javascript-typescript"}},[_v("Tool/Technology JavaScript/TypeScript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-javascript-typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Use !! To change to boolean.")]),_v(" "),_c('p',[_v("Use type && {key: value} to quick define type.")]),_v(" "),_c('p',[_v("Use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("as")]),_v(" to cast type.")]),_v(" "),_c('p',[_v("use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("!")]),_v(" to assert non-null.")]),_v(" "),_c('p',[_v("In functional programming, many methods are bundled in the style like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Array.{method}")]),_v(".")]),_v(" "),_c('p',[_v("Redux/Saga is a predictable state container for JavaScript apps. It is a state management tool, and is often used with React (not very relevant to markbind).")]),_v(" "),_c('p',[_v("Vscode's \"goto references\" does not work well with javascript (mixed inside the typescript). As currently, some of the core packages are not migrated to typescript yet, the references are not recognized. So need to use \"findin file\" instead.")]),_v(" "),_c('p',[_v("Possible to auto re-compiling the typescript file into javascript files when it is changed, and only  recompile the changed files.")]),_v(" "),_c('h3',{attrs:{"id":"tool-technology-miscellaneous"}},[_v("Tool/Technology Miscellaneous"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-miscellaneous","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Workflow vice, a good practice is to not immediately merge a pull request after it is reviewed. Instead, wait for a day or two to see if there are any other comments or suggestions.")]),_v(" "),_c('p',[_v("For command line tool (like markbind), a good project structure is to have a cli and a core folder. The cli folder contains the code for the command line interface, while the core folder contains the core logic of the project. When building from source, need to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm link")]),_v(" the cli folder.")]),_v(" "),_c('p',[_v("More comfortable with using loggers to debug.")]),_v(" "),_c('p',[_v("Jest as the testing framework (and debugger).")]),_v(" "),_c('p',[_v("Snapshot (Recursively comparing every folder and file in the expcted folder with the actual generated files) as a way to do the functional testing.")]),_v(" "),_c('p',[_v("Cheerio to convert html string to dom, and locate elements in the dom.")]),_v(" "),_c('p',[_v("Understand the concept of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hoisting")]),_v(" in JavaScript.")]),_v(" "),_c('p',[_v("Npm is different from yarn in that it has a flat dependency tree, while yarn has a nested dependency tree. So yarn allows the reuse of the same package in the dependency tree, while npm does not.")]),_v(" "),_c('p',[_v("Can use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run")]),_v(" to list all the runnable scripts.")]),_v(" "),_c('p',[_v("Fix issues and simple bugs is the best way to gain familiarity with the codebase.")]),_v(" "),_c('p',[_v("Understand the difference between inline markdown and non-inline markdown.")]),_v(" "),_c('p',[_v("Can use comment like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("eslint-disable-next-line no-await-in-loop")]),_v(" to disable eslint for the next line for a specific rule.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Tue, 26 Mar 2024, 3:31:16 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  