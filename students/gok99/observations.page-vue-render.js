
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-pandoc"}},[_v("Project: Pandoc"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-pandoc","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Pandoc is a Haskell library and command-line tool for converting between various document formats. It is a powerful tool that can convert between many different formats, including Markdown, LaTeX, HTML, and many others. It is also extensible, allowing for the creation of custom readers and writers for new formats. Pandoc has 31.8k stars on GitHub and is used widely by individuals for personal workflows and within deployment pipelines by larger organizations.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Fixed an issue involving Pandoc's Texinfo Writer: "),_c('a',{attrs:{"href":"https://github.com/jgm/pandoc/pull/9359"}},[_v("Add @var support in Texinfo Writer #8534")]),_v(" (merged)")]),_v(" "),_c('li',[_v("Fixed an issue involving Pandoc's RST Reader: "),_c('a',{attrs:{"href":"https://github.com/jgm/pandoc/pull/9744"}},[_v("RST reader: fix figclass and align annotations for figures")]),_v(" (merged)")])]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The Haskell tooling ecosystem (GHC, Cabal, Stack, Haskell LSP, etc) makes writing Haskell quite enjoyable. In particular, Haskell features like abstract data types, parametric polymorphism, and type inferencing make understanding and modifying code in a general and well-abstracted way really easy to do. The language also allows for strong editor tooling that also helps improve the developer experience. Contributing to Pandoc allowed me to get a deep look at practical Haskell in a widely adopted and loved tool—something I've always wanted to do.")]),_v(" "),_c('p',[_v("Pandoc is also a really great and flexible tool that has taught me a great deal about software design practices. Pandoc has lofty goals of providing good document conversion from a large number of input formats to a really large number of output formats. This is done by converting to and from Pandoc's own document intermediate representation, which has a large subset of the intersection of features of the input and output formats. By being very clear about the extent and specification of the intermediate representation, it is easy for several developers to concurrently add, modify, and fix existing readers and writers by mapping the semantics of the source or target specification to those of the Pandoc intermediate representation. In general, being very clear and thorough with interfaces between software segments seems to be an important and crucial aspect of any sufficiently sophisticated system. To a first approximation, Pandoc does a really good job of picking good defaults for the output format; if users want additional customizability, they can have that by writing their own custom Lua filters.")]),_v(" "),_c('h4',{attrs:{"id":"observations-from-contribution-process"}},[_v("Observations from contribution process"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#observations-from-contribution-process","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Great practices:")]),_v(" "),_c('ul',[_c('li',[_v("The maintainer, John MacFarlane (a philosophy professor at Berkeley), and other core maintainers are incredibly active. Both my PRs got attention within a day. The first PR was merged in under a day, and the second PR was merged in under an hour! Fast and active review provides contributors with quick feedback and, personally, was a very strong motivator for making more contributions. I definitely see myself tackling deeper issues over the summer.")]),_v(" "),_c('li',[_v("Great user documentation: The user documentation is really thorough and covers just about everything a user might need to get started and to get going with advanced features like Lua filters.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("good first issue")]),_v(" tags are a great entry point to the codebase. They cover issues that can be tackled without a very deep understanding of the codebase, but that still familiarize the contributor with the workflow of dealing with an issue and adding tests.")])]),_v(" "),_c('p',[_v("Possible improvements:")]),_v(" "),_c('ul',[_c('li',[_v("Since not as many people contribute to Pandoc (likely due to the Haskell learning curve) outside of the core team compared to other large open source projects, there has not been much of a need for PR workflow automation. While CI's are run, more checks could be conducted with bots and other tools provided by Github actions to automate more of the review process (as is quite common with most big open source projects).")]),_v(" "),_c('li',[_v("I found developer documentation to be a little lacking (again likely due to the small number of contributors). It would have been nice to see details of things like editor set-up with the Haskell LSP, build instructions for particular pandoc applications, and a more detailed look at the codebase architecture.")])]),_v(" "),_c('h4',{attrs:{"id":"suggestions-for-the-internal-project-based-on-external-project-observations"}},[_v("Suggestions for the internal project based on external project observations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#suggestions-for-the-internal-project-based-on-external-project-observations","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("I think the biggest takeaway personally was the importance of active maintenance and support. A community is only as active as its maintainers, and knowing that work will be promptly reviewed is crucial for the life and longevity of the community. This is definitely something we can improve on with RepoSense. It is, however, certainly a challenge with nus-oss, given that students come and go fairly frequently and attention has to contend with school work and other activities.")]),_v(" "),_c('li',[_v("Experience with Pandoc and Haskell has convinced me that advanced-type systems and function style programming help programmers write safer and more resilient software. Unfortunately, Java's type system (even with newer versions) is not nearly as powerful as Haskell's and limits how far we can take these ideas. Nevertheless, we can make some progress with making Reposense easier to reason about with refactors involving "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/pull/2144"}},[_v("immutability and optional monads")]),_v(".")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")])]),_v(" on Sun, 12 May 2024, 15:45:25 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  