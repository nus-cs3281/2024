
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/activities-dashboard.html"}},[_v("Activities Dashboard")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-zitadel"}},[_v("Project: Zitadel"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-zitadel","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Zitadel is an open source user management tool that aims to provide easy identity infrastructure, with out-of-the-box features such as")]),_v(" "),_c('ul',[_c('li',[_v("Multi-tenancy with team management")]),_v(" "),_c('li',[_v("Secure Login")]),_v(" "),_c('li',[_v("Self-service")]),_v(" "),_c('li',[_v("OpenID Connect")]),_v(" "),_c('li',[_v("SAML2")]),_v(" "),_c('li',[_v("LDAP")])]),_v(" "),_c('p',[_v("and more solutions. It provides easy integration with oAuth providers such as GitHub, Facebook, O365 and serves as an easy way for enterprises to set up multi-tenancy identity providers with clear separation of identities. Zitadel is written in Go and consists of an interesting mix of server-side rendered authentication (using Go and HTML templates), along with a client side application written in Angular, as well as modularised Core library that uses Event-driven architecture to ensure that all events are not only captured but also traceable.")]),_v(" "),_c('p',[_v("The team favours transaction safety, with high availability, and have employed and implemented it's own message queue system. It works by placing events into an in-memory queue for subscribers, under the pub-sub model.")]),_v(" "),_c('p',[_v("Zitadel has 7.1k stars and is used by many organisations as an alternative to other identity infrastructure platforms, due to it's heavy customisability in terms of branding and deployment options.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Fixed button positioning issues on email verification screen within the Login page "),_c('a',{attrs:{"href":"https://github.com/zitadel/zitadel/pull/7579"}},[_v("PR #7579")])]),_v(" "),_c('li',[_v("Fixed navigation issues where users would be directed incorrectly to another page when clicking on \"Back\" "),_c('a',{attrs:{"href":"https://github.com/zitadel/zitadel/pull/7683"}},[_v("PR #7683")])])]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Deploying both an Angular console application, which is a management interface, as well as Server side pages for authentication (Login, Register and Password Reset pages) were important. Particularly, Zitadel uses HTML templates heavily along with a flexible component system that enables easy internationalisation, which is important for a tool like Zitadel that everyone can use.")]),_v(" "),_c('p',[_v("Also, learning about gRPC through interactions with the backend was also enlightening as I was more familiar with GraphQL and traditional HTTP endpoints through my experience with CATcher/WATcher and personal projects and internships.")]),_v(" "),_c('p',[_v("gRPC uses Protocol Buffers (protobufs) by default, which is a lightweight, highly efficient serialization tool; which serves it's purpose when building a distributed application like Zitadel. It also allows for server-side and client-side streaming, both of which are used (particularly for event logging) in Zitadel.")]),_v(" "),_c('h3',{attrs:{"id":"project-templ"}},[_v("Project: Templ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-templ","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Templ is a HTML templating language for Go that has great developer tooling, including an LSP (Language Server Protocol) for Vim users and extension for VSCode users. With Templ, we can create components that render fragments of HTML and then compose them to create screens, pages, documents or apps.")]),_v(" "),_c('p',[_v("This allows for")]),_v(" "),_c('ul',[_c('li',[_v("Server-side rendering (deployed as a serverless function or standard Go program)")]),_v(" "),_c('li',[_v("Static rendering (create static HTML files to deploy how you choose)")]),_v(" "),_c('li',[_v("Compiled code (components compiled to performant Go code)")]),_v(" "),_c('li',[_v("Ability to move away from JavaScript in client-side and server-side contexts")])]),_v(" "),_c('p',[_v("Templ borrows heavily from the Component model in React and Angular, and as such models it's own components as mark up and code that is compiled into functions that return a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("templ.Component")]),_v(" interface.")]),_v(" "),_c('p',[_v("This allows for Templ to be used in tandem with htmx, to selectively replace content within a webpage instead of replacing the whole web page within the browser.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions-2"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Add documentation for using Templ with i18n by using "),_c('a',{attrs:{"href":"https://github.com/invopop/ctxi18n"}},[_v("ctxi18n")]),_v(": "),_c('a',{attrs:{"href":"https://github.com/a-h/templ/pull/666"}},[_v("PR #666")])])]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record-2"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I learnt how to build an SSR application using Go, HTMX and Templ by building an example application to provide documentation for i18n support. I also used Server-side Events which enabled minified HTMX runtime to add elements based on the component that was received on the stream endpoint. I also understood how i18n was generally implemented on products with a need to support a variety of languages, as well as building generalised components that decoupled the actual components from the textual UI.")]),_v(" "),_c('h3',{attrs:{"id":"project-ferretdb"}},[_v("Project: FerretDB"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-ferretdb","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("FerretDB was founded to become the de-facto open-source substitute to MongoDB. FerretDB is an open-source proxy, converting the MongoDB 5.0+ wire protocol queries to SQL - using PostgreSQL or SQLite as a database engine.")]),_v(" "),_c('p',[_v("MongoDB was originally the eye-opening technology for developers that allowed developers to build applications faster than using relational databases. However, with MongoDB abandoning its open-source roots, there was a need for an easy-to-use open-source document database solution, which is what FerretDB aims to fill.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions-3"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Add local changelog generation that uses a milestone title to generate the batch of changes for the milestone "),_c('a',{attrs:{"href":"https://github.com/FerretDB/FerretDB/pull/4219"}},[_v("PR #4219")])])]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record-3"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While I did not learn much about the database design in itself, I learnt about Conventional Commits: a standardised format that dictates how developers should write their commit messages. Conventional commits allowed for projects with a large developer base to have visibility and transparency over who did what, when. Furthermore, the standardisation allows for easy automatic changelog generation, important for when products are shipped out to actual users; as well as making it easier for people to contribute to projects.")]),_v(" "),_c('p',[_v("FerretDB suffered from the lack of implementation of Conventional Commits: without it, it was dependent on the platform (GitHub) the repository was hosted on to actually generate meaningful Changelogs. This added additional dependencies that tied the project with GitHub unnecessarily, instead of allowing the project to be independent of the Git versioning platform it was hosted on (GitLab, BitBucket are suitable alternatives).")]),_v(" "),_c('p',[_v("As such, Changelog generation was originally done by using the GitHub workflow directly, which overly complicated the release process, necessitating for another way to locally generate the Changelog.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")])]),_v(" on Sun, 12 May 2024, 15:54:53 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  