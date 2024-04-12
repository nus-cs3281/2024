
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-mattermost"}},[_v("Project: Mattermost"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-mattermost","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://mattermost.com"}},[_v("Mattermost")]),_v(" is an open-source alternative to slack and mircosoft teams, used by notable companies such as Samsung, NASA, DuckDuckGo.\nMattermost is self-deployable and enables full control over one's data. Mattermost has many intergrations with tools such as GitHub, Jenkins, Jira, to enable technical teams to collaborate more productively.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Contributed 2 PRs to Mattermost's mobile application:")]),_v(" "),_c('p',[_v("The first was a UX bug fix: "),_c('a',{attrs:{"href":"https://github.com/mattermost/mattermost-mobile/pull/7763"}},[_v("link")]),_v(", where the save button on editing a message was not greyed out when the message was too long.\nTo solve this, I edited the styling of the button, changing its opacity for when its disabled.\nI then replicated the issue locally to add a screenshot to my PR.")]),_v(" "),_c('p',[_v("The second was removal of a feature flag: "),_c('a',{attrs:{"href":"https://github.com/mattermost/mattermost-mobile/pull/7769"}},[_v("link")]),_v(", to enable timezone support permanently in the application.\nTo tackle this issue, I had to look at every location where there the feature flag was used in the codebase. When removing the flag, I had to make sure that the logic was correct, behaving as if the feature flag was "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("true")]),_v(" and that irrelevant code was removed.")]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"react-native"}},[_v("React Native"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#react-native","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The technology used in Mattermost's mobile application is React Native. React Native is a framework for building mobile applications using Javascript and React, and allows developers to create cross-platform applications for iOS and android using a single codebase. React Native utilizes native components and APIs, providing a user experience similar to native apps.")]),_v(" "),_c('p',[_v("I used React Native's "),_c('a',{attrs:{"href":"https://reactnative.dev/docs/getting-started"}},[_v("documentation")]),_v(" to learn more about it while contributing.")]),_v(" "),_c('h3',{attrs:{"id":"observations-from-mattermost"}},[_v("Observations from Mattermost"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#observations-from-mattermost","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("PRs are reviewed extensively, with clear steps. Each step is labelled clearly. (Dev Review, QA review, PM review) TEAMMATES also has a similar system in place in terms of labelling the stage of a PR review.")]),_v(" "),_c('li',[_v("Issues are labelled with the technology required (e.g. React, ReactNative, go), the difficulty level (from 1-4), and whether it is currently being worked on by someone. This makes it easier for potential contributors to select issues based on their own confidence level. In TEAMMATES, we only have "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("good first issue")]),_v(" as any indicator of difficulty level, but given that most difficult issues are handled by the internal team, there is unlikely a need for difficulty level. For technology required, TEAMMATES also does not have a label, but it should be quite clear when reading the issue if it requires Backend or Frontend. TEAMMATES also has a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a-UIX")]),_v(" tag that is meant for UIUX related issues, which is very often used to tag Frontend issues.")]),_v(" "),_c('li',[_v("Mattermost also has their own deployed instance of itself, where contributors can ask questions. It was really useful for me when I ran into issues trying to login to my locally setup Mattermost, and asking for PR reviews. TEAMMATES does not have this, but it would be really costly for us to maintain.")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 12 Apr 2024, 6:31:13 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  