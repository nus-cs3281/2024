
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-godot"}},[_v("Project: Godot"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-godot","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While I was not able to make a contribution to the main repository, as I was using this software and following development discussions I'd like to share my understanding. Additionally, I made a PR to the documentation repository which I will elaborate on later.")]),_v(" "),_c('p',[_v("Godot is an open-source game engine, which can also be used to create other GUI centric applications such as RPG map makers. I have used Godot for a few games so that I could familiarise myself with the tool from the user perspective.")]),_v(" "),_c('h4',{attrs:{"id":"user-experience"}},[_v("User experience"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-experience","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("One area where Godot is strong is the new-user experience. It offers multiple ways to get started: a free playable desktop tutorial, step-by-step tutorial based documentation for 2d or 3d games, youtube video tutorials, primers to the overall concept, as well as active community support in the forum, discord, or over other social media platforms like Reddit.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://docs.google.com/presentation/d/1xuesBz7XkaeQNFNVyGkFE70QM5ILFrqiTuSbo_cvsME/edit#slide=id.g26929859d4f_0_37252"}},[_v("Here is a link to my slides where I discuss game design principles in Godot, introducing some of the concepts behind the engine as well as the ways users can get started")])]),_v(" "),_c('p',[_c('mark',[_v("With MarkBind, this lends validation to the idea that we might want to also have multiple ways to get started.")]),_v(" This informed my thoughts on this issue "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2257"}},[_v("Add a set of tutorials for MarkBind")]),_v(" which I added to the overall pinned goal to Make it easier for users to get started with markbind")]),_v(" "),_c('h4',{attrs:{"id":"arrangement-of-repository-and-maintenance"}},[_v("Arrangement of repository and maintenance"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#arrangement-of-repository-and-maintenance","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("It's clear that Godot is a huge project - they even have a development fund from donors, and I believe there are people paid to work on the project full time. Nevertheless, it seems that while there is an active developer community there is also an abundance of work and limits on attention. Furthermore, with such a big project and so many issues, this is a project that uses an organisation to group many active repositories - the main godot repository, as well as godot-docs and "),_c('a',{attrs:{"href":"https://github.com/godotengine/godot-proposals/issues?page=2&q=is%3Aissue+is%3Aopen"}},[_v("godot-proposals")]),_v(" are some examples. godot-proposals are used for new feature requests and has 4.2k issues as well as discussions! "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("godot")]),_v(" has over 5k issues - and over 2.4k PULL REQUESTS. This is an huge volume especially considering that it is an active repository - pull requests are closed or merged daily.")]),_v(" "),_c('p',[_c('strong',[_v("Decision Making")]),_v(": Godot mantainers discuss new features over PR meetings that happen on a regular basis before asking community members to work on them. Given the volume of requests and the number of users using the program, adding new features depends on certain principles. There has been some discussion over this issue that was very interesting: "),_c('a',{attrs:{"href":"https://github.com/godotengine/godot-proposals/issues/575"}},[_v(" Godot Engine's vision and development philosophy should be better formalized or easily accessible #575 ")])]),_v(" "),_c('p',[_v("(This user was later was banned from the organisation and "),_c('a',{attrs:{"href":"https://waiting-for-blue-robot.gitlab.io/no_longer_a_blue_robot.html"}},[_v("wrote a book about the experience")]),_v(")")]),_v(" "),_c('p',[_v("Leaving aside the drama, the point around \"What direction does an open source repository go\" was very intersting to investigate, though I haven't yet come to any conclusion. "),_c('mark',[_v("This is the source of one of my suggestions to the CS3282 team to document some of the design principles in MarkBind such as extensibility, so as to aid in new batches making decisions about the project")]),_v(". Right now, a lot of this knowledge only lives in a few people (like prof Damith). This could lead to a loss of knowledge in the future and inconsistency in the project.")]),_v(" "),_c('h3',{attrs:{"id":"sphinx"}},[_v("Sphinx"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#sphinx","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I tested out this open source documentation when working on the Godot documentation.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://towardsdatascience.com/documenting-python-code-with-sphinx-554e1d6c4f6d"}},[_v("This Medium article")]),_v(" is a good upfront summary of setting up Sphinx. As you can see from the article, the set up process is not trivial.")]),_v(" "),_c('li',[_v("Sphinx does offer some good features such as strong search, layouts and versioning. There seem to be "),_c('a',{attrs:{"href":"https://www.sphinx-doc.org/en/master/"}},[_v("other features")]),_v(" which might be worth evaluating for MarkBind")]),_v(" "),_c('li',[_v("In my exploration with using Sphinx to run the Godot documentation, one part was very frustrating - I hated not being able to hot reload the docs as I wrote them; you have to run an additional command. This feature is very useful for MarkBind.")])]),_v(" "),_c('h3',{attrs:{"id":"hsr-optimizer"}},[_v("HSR Optimizer"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hsr-optimizer","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/issues"}},[_v("HSR Optimizer")]),_v(" is a tool built to help Honkai:Star Rail players figure out how to build their characters by helping to abstract some of the math away in a user friendly interface.")]),_v(" "),_c('p',[_v("They are very light on documentation - essentially just "),_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/blob/main/GETTING_STARTED.md"}},[_v("the getting started")]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/blob/main/CONTRIBUTING.md"}},[_v("CONTRIBUTING.MD")]),_v(" pages. To compensate for this, the discord server where development takes place is very active, and new developers are encouraged to hop over and ask questions. One advantage I noticed form having a very light set of documentation is you feel empowered to start pretty fast, as you aren't worried that you've missed something that isn't written down. However, this also does restrict some communication to a more closed platform, and knowledge about the architecture and why certain decisions are made is totally opaque unless someone calls it out explicitly. Furthermore, code comments/discussion may also occur primarily in Discord.")]),_v(" "),_c('p',[_v("An active, up to date issue tracker is mantained by the main developer, which uses a simple format of \"Motivation\" and \"Goal\" and also uses the GitHub project tracker to manage all issues. One thing I really liked about the issue tracker is that it mainly uses only two criteria - priority and size - but this is very effective as a contributor to understand what is worth working on. XS PRs only involve a small amount of code, and the are good PRs to try in multiple categories. The quick response from developers was very motivating when exploring this project.")]),_v(" "),_c('p',[_v("One nice aspect of the project is it is dogfooded by the creator and there's fairly close communication with a passionate community, so there is a clear motivation for features which are asked for and developments made. This is aided by a very clear value proposition to Honkai: Star Rail players.")]),_v(" "),_c('h3',{attrs:{"id":"react-admin"}},[_v("React-Admin"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#react-admin","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("React-Admin is a tool to build CRUD apps for business usecases very quickly. It's robust, flexible, and very easy to use. As a result, it is well adopted by the industry. I explored this project and used it for another project I was doing this semester, and also presented on this for tech talks.")]),_v(" "),_c('p',[_v("Some interesting aspects:")]),_v(" "),_c('ul',[_c('li',[_v("Funded by Enterprise - since they can pay staff and have active paying customers, they have a well-organised and updated repository as well as regular updates of both the free content and the paid/locked content")]),_v(" "),_c('li',[_v("That funding seems to have a chilling effect on outside contributors (I think), as most PRs seem to be by the team; but deprioritised issues are up for grabs by the outside community. But that isn't such a downside considering the team is unlikely to have to spend time on mentoring or helping out new contributors")]),_v(" "),_c('li',[_v("Demo pages that show features and are navigable by users. The features that are used are clearly signposted. "),_c('mark',[_v("Looking at these demo pages informed some of the issues I created fro MarkBind in terms of making things easier for new users to get started")]),_v(" - an example is my suggestion to link netlify demo pages for new users to click around in.")]),_v(" "),_c('li',[_v("Codepen for the example makes it even easier to understand how everything fits together and use exactly what is used in the examples. "),_c('strong',[_v("Markbind seems to do a similar thing with netlify deploy buttons, but with a higher barrier to entry because you must make a repo in your own account")])]),_v(" "),_c('li',[_v("Ability to guess what the shape of user data looks like to get started even more quickly. "),_c('mark',[_v("It would not be trivial but the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markbind init --convert")]),_v(" command could be improved to better guess the shape of the user website")])])]),_v(" "),_c('h3',{attrs:{"id":"supabase"}},[_v("Supabase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#supabase","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Supabase. I learned: what it is and how to use it and it's capabilities. Example: learned that it can "),_c('a',{attrs:{"href":"https://supabase.com/docs/guides/database/joins-and-nesting"}},[_v("implicitly do joins")])]),_v(" "),_c('h3',{attrs:{"id":"godot-supabase"}},[_v("godot-supabase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#godot-supabase","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("This is an addon for godot, that helps to streamline the use of supabase in godot, where it can be used as a backend. godot-supabase is not actively updated or mantained, which was also pretty discouraging for me to PR on it... I considered it since I was using it, but it seems it may not be commonly used either. This was a good experience for me to try a less-wellknown opensource repository. It was extremely useful to me, which is a good example of how open source can help people you don't know anything about.")]),_v(" "),_c('p',[_v("While documentation was relatively sparse, one advantage of the way the user developed it was by creating demos using the system and making those code repos public - though the web based demos went down, the code was still up on Godot and very helpful to figure out syntax.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Give a description of your contributions, including links to relevant PRs")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/godotengine/godot-docs/pull/9094"}},[_v("Add new documentation about the pre-commit hook #9094")]),_v(" - PR Merged")])]),_v(" "),_c('p',[_v("After the precommit hook was added in the godot repository, there had to be documentation added for it. I took this up because it seemed to me to be something that would affect a lotof new developers, but even though I had 3-4 reviews, it took around a month to merge, which discouraged me from trying to merge something to the Godot repository. This PR also demonstrates the rate of change and development in Godot - after the commit hook improvement was made, only a few weeks later the decision was made to change one of the linting tools - which would also modify the documentation I had written as the precommit hook helped to lint using that tool.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/pull/282"}},[_v("feat(#278): add button to ScoringModal to reset all characters")]),_v(" - PR merged")])]),_v(" "),_c('p',[_v("This PR modified the UI to meet user demand. I think the most interesting part of this PR was the user demand aspect - the issue originated in the discord server, where the user shared their case and that helped to surface the need for the PR. The PR was very very well-scoped - great way to familiarise with code style and the related aspect of the repo while limiting problems. Doing this PR also was useful in using Ant design.")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/fribbels/hsr-optimizer/issues/170"}},[_v("[Bug] Recalculate score for saved builds #170 ")]),_v(" - investigated & PR merged")])]),_v(" "),_c('p',[_v("Here is my transferred comment with explanation summarising discord discussion")]),_v(" "),_c('blockquote',[_c('p',[_v("There are use cases where you might not want to update your saved build with the most recent algorithm, such as with characters who can have multiple build profiles: (see #35 for more discussion. When #35 is implemented, scores will eventually be attached to scoring profiles instead of characters. The build itself should be saved with a profile attached to it instead of the behaviour we have now in the fix)")]),_v(" "),_c('p',[_v("One obvious issue with mantaining build's score based on the scoring algorithm when it was saved is the user will probably forget what their custom settings were, and it'd be a whole bunch more (out of scope) work to make a UI that makes sense for this.")]),_v(" "),_c('p',[_v("so the fix for this bug is just to get the two numbers to match by updating the saved builds since \"we want to score both the character and its saved builds by the current user defined scoring algorithm\".")])]),_v(" "),_c('p',[_v("This feature was interesting to me because of how it interfaced with the game itself. Because there are multiple ways to develop a character, players might want to score / optimise their character to different stats. This was an interesting mid-point solution working towards a bigger solution in the future (multiple saved builds)")]),_v(" "),_c('p',[_v("It was also interesting how data was separated. Originally I wrote this PR to call a function from the data class (separation of concerns) but as the data class is in .js and not .ts (slow migration) and the feature is relatively isolated, they suggested I put it all into one file where it was called instead.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")])]),_v(" on Sun, 12 May 2024, 15:54:53 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  