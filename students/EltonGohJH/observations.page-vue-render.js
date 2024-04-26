
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"projects-i-have-worked-on"}},[_v("Projects I have worked on"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#projects-i-have-worked-on","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"mattermost"}},[_v("Mattermost"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mattermost","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Mattermost is an open-source collaboration platform designed for secure communication throughout the entire software development lifecycle. It serves as a self-hostable alternative to Slack, offering similar functionalities with the added benefit of full control over hosting and management.")]),_v(" "),_c('h3',{attrs:{"id":"twenty"}},[_v("Twenty"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#twenty","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Twenty CRM is a modern, open-source Customer Relationship Management (CRM) platform. It serves as an self-hostable alternative to Salesforce.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In the "),_c('a',{attrs:{"href":"https://github.com/mattermost/mattermost/pull/26278"}},[_v("mattermost PR (merged)")]),_v(". I addressed this "),_c('a',{attrs:{"href":"https://github.com/mattermost/mattermost/issues/25991"}},[_v("issue")]),_v(" where the CLI command to list the teams uses a magic number of 9999. Utilizing such large magic numbers presents two problems: it restricts the ability to list more than 9999 teams and could result in a request that is too large. To solve this, I implemented pagination for the request, with each page containing 200 teams. Subsequently, I updated the test cases to reflect the new expected behavior.")]),_v(" "),_c('p',[_v("In the "),_c('a',{attrs:{"href":"https://github.com/twentyhq/twenty/pull/4198"}},[_v("Twenty PR (merged)")]),_v(". I addressed an "),_c('a',{attrs:{"href":"https://github.com/twentyhq/twenty/issues/4181"}},[_v("issue")]),_v(" reported by a user concerning LinkedIn school URLs not parsing correctly. Upon investigating the issue on the frontend, I discovered that the existing regex was only configured to support company URLs. To resolve this, I updated the regex to also accommodate school URLs and conducted tests to ensure the fix was effective.")]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"gomock"}},[_v("gomock"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gomock","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have learned to use GoMock, a mocking framework for Golang, which streamlines the creation of mock objects for unit testing. It helps with decoupling components, enabling the simulation of complex behaviors and interactions. I am surprised how easy it to use to mock complex behaviours.\nWill definitely use it for Golang testing next time!")]),_v(" "),_c('h4',{attrs:{"id":"resource-used"}},[_v("Resource used:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resource-used","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/uber-go/mock"}},[_v("gomock docs")])])]),_v(" "),_c('h3',{attrs:{"id":"yarn-workspaces"}},[_v("Yarn workspaces"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#yarn-workspaces","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Yarn Workspaces is a feature of Yarn that simplifies handling multiple packages within a single repository by enabling shared dependencies and centralized script management. I learnt Yarn Workspaces while setting up the repository for the Twenty project.\nOverall, it is a good experience as I learnt more alternatives to Lerna and NPM workspaces.")]),_v(" "),_c('h4',{attrs:{"id":"resource-used-2"}},[_v("Resource used:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resource-used-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://yarnpkg.com/features/workspaces"}},[_v("Yarn workspaces docs")])])]),_v(" "),_c('h3',{attrs:{"id":"practices-tools-from-mattermost-that-could-be-adopted-by-markbind"}},[_v("Practices/tools from Mattermost that could be adopted by Markbind"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#practices-tools-from-mattermost-that-could-be-adopted-by-markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I was particularly impressed with the "),_c('a',{attrs:{"href":"https://docs.twenty.com/start/local-setup/"}},[_v("Twenty's onboarding guide")]),_v(" because it includes multi-OS setup guides and instructions on setting up through Docker containers. Furthermore, it provides an IDE setup guide, and its repository contains a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".vscode/extensions.json")]),_v(" file that assists users in configuring VS Code. For Markbind, while the Docker container setup may not be necessary, adopting a multi-OS guide could be beneficial. It could promote useful tools like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nvm")]),_v(" for testing across multiple Node.js versions, and a VS Code extensions list could help new developers adhere to our coding practices.")]),_v(" "),_c('p',[_v("I was really impressed with the PR review workflow at Mattermost. It's incredibly systematic, featuring stages such as UI review, Dev review, and QA review, which make the process feel seamless. Additionally, they utilize bots to remind reviewers to complete their reviews. While Markbind is smaller and might not require such an elaborate setup, investigating the potential of GitHub PR bots could be beneficial. These tools could streamline our review process and ensure that contributions are efficiently and effectively vetted.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 26 Apr 2024, 15:28:12 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  