
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"java"}},[_v("Java"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#java","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Java is used extensively in the backend for RepoSense, from the generation of the RepoSense report, to the different "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git")]),_v(" commands required to clone repositories and analyse them. It was not difficult to pick up Java as I had some prior experience in Java in previous classes such as CS2030S, CS2040S and CS2103T, but the intricacies surrounding the different Java libraries was something that I was never properly exposed to and had to learn over time as I worked on the project.")]),_v(" "),_c('h4',{attrs:{"id":"aspects-learned"}},[_v("Aspects Learned"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspects-learned","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Some of the aspects I have learnt regarding Java:")]),_v(" "),_c('ul',[_c('li',[_v("Learning to read Java source code and using the built-in IntelliJ Java Profiler to identify possible optimisations in the current codebase\n"),_c('ul',[_c('li',[_v("One particular aspect of Java that was the target of optimisation was Regex. I realised that Regex was used extensively in the codebase in different contexts, whether to split up strings or to find a matching string pattern in a given string. However, after identifying some parts of the code that were potentially buggy or slow (especially snippets whereby Regex operations are used in conjunction with iteration) using the IntelliJ Java Profiler and consulting the Java source code, as well as some online sources, I was able to identify a latent anti-pattern in the way Regex code was written in the code base")]),_v(" "),_c('li',[_v("This experience taught me that Regex code should never be mixed with iteration and that we should precompile "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Pattern")]),_v(" objects for repeated use instead")])])]),_v(" "),_c('li',[_v("Learning more about different code design patterns such as the Builder pattern and how to adapt it to our codebase to suit our own needs\n"),_c('ul',[_c('li',[_v("The Builder pattern was one of the patterns that was not taught in the previous modules that I have taken, but I was aware of it due to reading up on coding patterns prior me taking up this project. At first, I thought that the Builder pattern could be adopted as is into the codebase without consideration of our use cases, however, through the guidance of my mentors, I soon realised that not all parts of the Builder pattern was relevant to what we needed the pattern for, and that we need to adapt the pattern to our use, and not the other way around.")])])])]),_v(" "),_c('h4',{attrs:{"id":"resources-used"}},[_v("Resources Used"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-used","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Java Source Code\n"),_c('ul',[_c('li',[_v("The source code for Java was used to verify the time and memory usage of the code given by the code profiler, by cross-referencing bottlenecks identified in the code profile with the source code to identify inefficient code in the codebase")])])]),_v(" "),_c('li',[_v("Online Java resources such as "),_c('a',{attrs:{"href":"https://www.baeldung.com/"}},[_v("baeldung.com")]),_v(" "),_c('ul',[_c('li',[_v("The resources provided alternative ways of achieving a certain results, which may help to increase the efficiency of the code")])])]),_v(" "),_c('li',[_v("Past modules taken that taught Java code\n"),_c('ul',[_c('li',[_v("CS2030S, CS2040S and CS2103T")])])])]),_v(" "),_c('h3',{attrs:{"id":"docker"}},[_v("Docker"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#docker","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Docker is something that I have always wanted to work with, especially so in combination with other container orchestration tools such as Kubernetes. I looked into the possibility of Docker being used to containerise RepoSense, enabling us to better test RepoSense, provide end users with a premade container with RepoSense's dependencies resolved for them, and a way to quickly deploy RepoSense to their favourite cloud providers (e.g. AWS ECS, etc.) for greater availability of RepoSense for their target users.")]),_v(" "),_c('h4',{attrs:{"id":"aspects-learned-2"}},[_v("Aspects Learned"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#aspects-learned-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Some of the aspects I have learnt:")]),_v(" "),_c('ul',[_c('li',[_v("Learning Dockerfile syntax\n"),_c('ul',[_c('li',[_v("While Docker is not exactly new to me as I have previously worked with Docker products in a past project, I have long forgotten the different syntax required for a Dockerfile, as well as the different Docker commands that work with building and running containers")])])]),_v(" "),_c('li',[_v("Docker integration with Github Actions\n"),_c('ul',[_c('li',[_v("It was also a challenge to integrate Docker with Github Actions for CI/CD purposes as it is not as easy to debug when things go wrong during the build and execution process. Every time changes are made, a new image needs to be created, tested and then deployed, all of which incurs precious Github Actions build time. Not to mention that the environment provided by Github Actions' Runners are distinctly different that my local environment (Github Runners run on x86 while my Mac environment runs on ARM64), making testing extremely difficult and time consuming")])])])]),_v(" "),_c('h4',{attrs:{"id":"resources-used-2"}},[_v("Resources Used"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources-used-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Docker references\n"),_c('ul',[_c('li',[_v("The references for the different Dockerfile syntax and Docker commands was referenced heavily during the creation of the different POC Dockerfiles")])])]),_v(" "),_c('li',[_v("Stackoverflow and other online references\n"),_c('ul',[_c('li',[_v("Some more obscure ways of doing things in Docker had to reference the code which others have written, as it was not readily available in the references for Docker")])])]),_v(" "),_c('li',[_v("ChatGPT\n"),_c('ul',[_c('li',[_v("ChatGPT was used to debug and identify potential reasons as to why my Dockerfile might be buggy and fails builds when they are pushed onto Github")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Thu, 4 Apr 2024, 6:30:00 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  