### Project: Zitadel

Zitadel is an open source user management tool that aims to provide easy identity infrastructure, with out-of-the-box features such as

- Multi-tenancy with team management
- Secure Login
- Self-service
- OpenID Connect
- SAML2
- LDAP

and more solutions. It provides easy integration with oAuth providers such as GitHub, Facebook, O365 and serves as an easy way for enterprises to set up multi-tenancy identity providers with clear separation of identities. Zitadel is written in Go and consists of an interesting mix of server-side rendered authentication (using Go and HTML templates), along with a client side application written in Angular, as well as modularised Core library that uses Event-driven architecture to ensure that all events are not only captured but also traceable.

The team favours transaction safety, with high availability, and have employed and implemented it's own message queue system. It works by placing events into an in-memory queue for subscribers, under the pub-sub model.

Zitadel has 7.1k stars and is used by many organisations as an alternative to other identity infrastructure platforms, due to it's heavy customisability in terms of branding and deployment options.

### My Contributions

- Fixed button positioning issues on email verification screen within the Login page [PR #7579](https://github.com/zitadel/zitadel/pull/7579)
- Fixed navigation issues where users would be directed incorrectly to another page when clicking on "Back" [PR #7683](https://github.com/zitadel/zitadel/pull/7683)

### My Learning Record

Deploying both an Angular console application, which is a management interface, as well as Server side pages for authentication (Login, Register and Password Reset pages) were important. Particularly, Zitadel uses HTML templates heavily along with a flexible component system that enables easy internationalisation, which is important for a tool like Zitadel that everyone can use.

Also, learning about gRPC through interactions with the backend was also enlightening as I was more familiar with GraphQL and traditional HTTP endpoints through my experience with CATcher/WATcher and personal projects and internships. 

gRPC uses Protocol Buffers (protobufs) by default, which is a lightweight, highly efficient serialization tool; which serves it's purpose when building a distributed application like Zitadel. It also allows for server-side and client-side streaming, both of which are used (particularly for event logging) in Zitadel.

### Project: Templ

Templ is a HTML templating language for Go that has great developer tooling, including an LSP (Language Server Protocol) for Vim users and extension for VSCode users. With Templ, we can create components that render fragments of HTML and then compose them to create screens, pages, documents or apps. 

This allows for
- Server-side rendering (deployed as a serverless function or standard Go program)
- Static rendering (create static HTML files to deploy how you choose)
- Compiled code (components compiled to performant Go code)
- Ability to move away from JavaScript in client-side and server-side contexts

Templ borrows heavily from the Component model in React and Angular, and as such models it's own components as mark up and code that is compiled into functions that return a `templ.Component` interface.

This allows for Templ to be used in tandem with htmx, to selectively replace content within a webpage instead of replacing the whole web page within the browser.

### My Contributions

- Add documentation for using Templ with i18n by using [ctxi18n](https://github.com/invopop/ctxi18n): [PR #666](https://github.com/a-h/templ/pull/666)

### My Learning Record

I learnt how to build an SSR application using Go, HTMX and Templ by building an example application to provide documentation for i18n support. I also used Server-side Events which enabled minified HTMX runtime to add elements based on the component that was received on the stream endpoint. I also understood how i18n was generally implemented on products with a need to support a variety of languages, as well as building generalised components that decoupled the actual components from the textual UI.

### Project: FerretDB

FerretDB was founded to become the de-facto open-source substitute to MongoDB. FerretDB is an open-source proxy, converting the MongoDB 5.0+ wire protocol queries to SQL - using PostgreSQL or SQLite as a database engine.

MongoDB was originally the eye-opening technology for developers that allowed developers to build applications faster than using relational databases. However, with MongoDB abandoning its open-source roots, there was a need for an easy-to-use open-source document database solution, which is what FerretDB aims to fill. 

### My Contributions

- Add local changelog generation that uses a milestone title to generate the batch of changes for the milestone [PR #4219](https://github.com/FerretDB/FerretDB/pull/4219)

### My Learning Record

While I did not learn much about the database design in itself, I learnt about Conventional Commits: a standardised format that dictates how developers should write their commit messages. Conventional commits allowed for projects with a large developer base to have visibility and transparency over who did what, when. Furthermore, the standardisation allows for easy automatic changelog generation, important for when products are shipped out to actual users; as well as making it easier for people to contribute to projects.

FerretDB suffered from the lack of implementation of Conventional Commits: without it, it was dependent on the platform (GitHub) the repository was hosted on to actually generate meaningful Changelogs. This added additional dependencies that tied the project with GitHub unnecessarily, instead of allowing the project to be independent of the Git versioning platform it was hosted on (GitLab, BitBucket are suitable alternatives).

As such, Changelog generation was originally done by using the GitHub workflow directly, which overly complicated the release process, necessitating for another way to locally generate the Changelog.