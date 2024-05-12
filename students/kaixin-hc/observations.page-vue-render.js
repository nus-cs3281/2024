
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-godot"}},[_v("Project: Godot"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-godot","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While I was not able to make a contribution to the main repository, as I was using this software and following development discussions I'd like to share my understanding. Additionally, I made a PR to the documentation repository which I will elaborate on later.")]),_v(" "),_c('h3',{attrs:{"id":"sphinx"}},[_v("Sphinx"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sphinx","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I tested out this open source documentation when working on the Godot documentation.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://towardsdatascience.com/documenting-python-code-with-sphinx-554e1d6c4f6d"}},[_v("This Medium article")]),_v(" is a good upfront summary of setting up Sphinx. As you can see from the article, the set up process is not trivial.")]),_v(" "),_c('li',[_v("Sphinx does offer some good features such as strong search, layouts and versioning. There seem to be "),_c('a',{attrs:{"href":"https://www.sphinx-doc.org/en/master/"}},[_v("other features")]),_v(" which might be worth evaluating for MarkBind")]),_v(" "),_c('li',[_v("In my exploration with using Sphinx to run the Godot documentation, one part was very frustrating - I hated not being able to hot reload the docs as I wrote them; you have to run an additional command. This feature is very useful for MarkBind.")])]),_v(" "),_c('h3',{attrs:{"id":"hsr-optimizer"}},[_v("HSR Optimizer"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hsr-optimizer","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/issues"}},[_v("HSR Optimizer")]),_v(" is a tool built to help Honkai:Star Rail players figure out how to build their characters by helping to abstract some of the math away in a user friendly interface.")]),_v(" "),_c('p',[_v("They are very light on documentation - essentially just "),_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/blob/main/GETTING_STARTED.md"}},[_v("the getting started")]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/blob/main/CONTRIBUTING.md"}},[_v("CONTRIBUTING.MD")]),_v(" pages. To compensate for this, the discord server where development takes place is very active, and new developers are encouraged to hop over and ask questions. One advantage I noticed form having a very light set of documentation is you feel empowered to start pretty fast, as you aren't worried that you've missed something that isn't written down. However, this also does restrict some communication to a more closed platform, and knowledge about the architecture and why certain decisions are made is totally opaque unless someone calls it out explicitly. Furthermore, code comments/discussion may also occur primarily in Discord.")]),_v(" "),_c('p',[_v("An active, up to date issue tracker is mantained by the main developer, which uses a simple format of \"Motivation\" and \"Goal\" and also uses the GitHub project tracker to manage all issues. One thing I really liked about the issue tracker is that it mainly uses only two criteria - priority and size - but this is very effective as a contributor to understand what is worth working on. XS PRs only involve a small amount of code, and the are good PRs to try in multiple categories. The quick response from developers was very motivating when exploring this project.")]),_v(" "),_c('p',[_v("One nice aspect of the project is it is dogfooded by the creator and there's fairly close communication with a passionate community, so there is a clear motivation for features which are asked for and developments made. This is aided by a very clear value proposition to Honkai: Star Rail players.")]),_v(" "),_c('h3',{attrs:{"id":"react-admin"}},[_v("React-Admin"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#react-admin","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("React-Admin is a tool to build CRUD apps for business usecases very quickly. It's robust, flexible, and very easy to use. As a result, it is well adopted by the industry. I explored this project and used it for another project I was doing this semester, and also presented on this for tech talks.")]),_v(" "),_c('p',[_v("Some interesting aspects:")]),_v(" "),_c('ul',[_c('li',[_v("Funded by Enterprise - has ability to add")])]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Give a description of your contributions, including links to relevant PRs")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/godotengine/godot-docs/pull/9094"}},[_v("Add new documentation about the pre-commit hook #9094")]),_v(" - PR Merged")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/pull/282"}},[_v("feat(#278): add button to ScoringModal to reset all characters")]),_v(" - PR merged")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/issues/170"}},[_v("[Bug] Recalculate score for saved builds #170 ")]),_v(" - investigated & PR merged")])])]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Give tools/technologies you learned here. Include resources you used, and a brief summary of the resource.")]),_v(" "),_c('p',[_v("RST - different syntax & how to run it")]),_v(" "),_c('p',[_v("Supabase")]),_v(" "),_c('ul',[_c('li',[_v("What it is and how to use it and it's capabilities. Example: learned that I was able to")]),_v(" "),_c('li',[_v("Using APIs that tie in (godot-supabase)")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")])]),_v(" on Sun, 12 May 2024, 14:03:36 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  