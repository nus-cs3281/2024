### Project: Mattermost

[Mattermost](https://mattermost.com) is an open-source alternative to slack and mircosoft teams, used by notable companies such as Samsung, NASA, DuckDuckGo.
Mattermost is self-deployable and enables full control over one's data. Mattermost has many intergrations with tools such as GitHub, Jenkins, Jira, to enable technical teams to collaborate more productively.

### My Contributions

Contributed 2 PRs to Mattermost's mobile application: 

The first was a UX bug fix: [link](https://github.com/mattermost/mattermost-mobile/pull/7763), where the save button on editing a message was not greyed out when the message was too long.
To solve this, I edited the styling of the button, changing its opacity for when its disabled.
I then replicated the issue locally to add a screenshot to my PR.

The second was removal of a feature flag: [link](https://github.com/mattermost/mattermost-mobile/pull/7769), to enable timezone support permanently in the application.
To tackle this issue, I had to look at every location where there the feature flag was used in the codebase. When removing the flag, I had to make sure that the logic was correct, behaving as if the feature flag was `true` and that irrelevant code was removed.

### My Learning Record

#### React Native
The technology used in Mattermost's mobile application is React Native. React Native is a framework for building mobile applications using Javascript and React, and allows developers to create cross-platform applications for iOS and android using a single codebase. React Native utilizes native components and APIs, providing a user experience similar to native apps.

I used React Native's [documentation](https://reactnative.dev/docs/getting-started) to learn more about it while contributing.

### Observations from Mattermost
- PRs are reviewed extensively, with clear steps. Each step is labelled clearly. (Dev Review, QA review, PM review) TEAMMATES also has a similar system in place in terms of labelling the stage of a PR review.
- Issues are labelled with the technology required (e.g. React, ReactNative, go), the difficulty level (from 1-4), and whether it is currently being worked on by someone. This makes it easier for potential contributors to select issues based on their own confidence level. In TEAMMATES, we only have `good first issue` as any indicator of difficulty level, but given that most difficult issues are handled by the internal team, there is unlikely a need for difficulty level. For technology required, TEAMMATES also does not have a label, but it should be quite clear when reading the issue if it requires Backend or Frontend. TEAMMATES also has a `a-UIX` tag that is meant for UIUX related issues, which is very often used to tag Frontend issues.
- Mattermost also has their own deployed instance of itself, where contributors can ask questions. It was really useful for me when I ran into issues trying to login to my locally setup Mattermost, and asking for PR reviews. TEAMMATES does not have this, but it would be really costly for us to maintain.
