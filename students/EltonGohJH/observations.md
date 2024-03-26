### Projects I have worked on

#### Mattermost
Mattermost is an open-source collaboration platform designed for secure communication throughout the entire software development lifecycle. It serves as a self-hostable alternative to Slack, offering similar functionalities with the added benefit of full control over hosting and management.

### Twenty
Twenty CRM is a modern, open-source Customer Relationship Management (CRM) platform. It serves as an self-hostable alternative to Salesforce.

### My Contributions
In the [mattermost PR (approved not merged yet)](https://github.com/mattermost/mattermost/pull/26278). I addressed this [issue](https://github.com/mattermost/mattermost/issues/25991) where the CLI command to list the teams uses a magic number of 9999. Utilizing such large magic numbers presents two problems: it restricts the ability to list more than 9999 teams and could result in a request that is too large. To solve this, I implemented pagination for the request, with each page containing 200 teams. Subsequently, I updated the test cases to reflect the new expected behavior.

In the [Twenty PR (merged)](https://github.com/twentyhq/twenty/pull/4198). I addressed an [issue](https://github.com/twentyhq/twenty/issues/4181) reported by a user concerning LinkedIn school URLs not parsing correctly. Upon investigating the issue on the frontend, I discovered that the existing regex was only configured to support company URLs. To resolve this, I updated the regex to also accommodate school URLs and conducted tests to ensure the fix was effective.


### My Learning Record

### gomock
I have learned to use GoMock, a mocking framework for Golang, which streamlines the creation of mock objects for unit testing. It helps with decoupling components, enabling the simulation of complex behaviors and interactions. I am surprised how easy it to use to mock complex behaviours.
Will definitely use it for Golang testing next time!

#### Resource used:
- [gomock docs](https://github.com/uber-go/mock)

### Yarn workspaces
Yarn Workspaces is a feature of Yarn that simplifies handling multiple packages within a single repository by enabling shared dependencies and centralized script management. I learnt Yarn Workspaces while setting up the repository for the Twenty project.
Overall, it is a good experience as I learnt more alternatives to Lerna and NPM workspaces.

#### Resource used:
- [Yarn workspaces docs](https://yarnpkg.com/features/workspaces)

### Practices/tools from Mattermost that could be adopted by Markbind

I was particularly impressed with the [Twenty's onboarding guide](https://docs.twenty.com/start/local-setup/) because it includes multi-OS setup guides and instructions on setting up through Docker containers. Furthermore, it provides an IDE setup guide, and its repository contains a `.vscode/extensions.json` file that assists users in configuring VS Code. For Markbind, while the Docker container setup may not be necessary, adopting a multi-OS guide could be beneficial. It could promote useful tools like `nvm` for testing across multiple Node.js versions, and a VS Code extensions list could help new developers adhere to our coding practices.

I was really impressed with the PR review workflow at Mattermost. It's incredibly systematic, featuring stages such as UI review, Dev review, and QA review, which make the process feel seamless. Additionally, they utilize bots to remind reviewers to complete their reviews. While Markbind is smaller and might not require such an elaborate setup, investigating the potential of GitHub PR bots could be beneficial. These tools could streamline our review process and ensure that contributions are efficiently and effectively vetted.