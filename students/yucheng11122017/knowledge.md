### Vue

#### Vue components

Since Markbind uses Vue components, I had to pick this up, having only experience with React before. I had to learn what is a Vue instance, how to compile Vue and so on.
Resources I used included the Markbind dev page regarding [SSR](https://markbind.org/devdocs/devGuide/design/serverSideRendering.html) of course, the [Vue Official Documentation](https://vuejs.org/guide/introduction.html) and [another Vue tutorial](https://markbind.org/devdocs/devGuide/design/serverSideRendering.html).
This was especially useful when dealing with Vue templates in one of my PRs about jQuery, which logged an warning since there was a script tag in the template. I had to learn about side effects in Vue from resources such as this [stackflow post](https://github.com/vuejs/vue/issues/11697) about Vue disallowing side effects for not just script tags but also style tags.

####==Vue slots and named slots==

I also learnt about Vue slots and named slots and what is the difference. I was confused about how to enable more dynamic content for content in annotation point, which had to enable more than one slot hence needed to learn about named slots to enable multiple slots to be used. I referred to tutorials [here](https://blog.logrocket.com/understanding-slots-vue-js/#working-multiple-named-slots) and [here](https://vuejs.org/guide/components/slots.html)

#### Vue test utils

Since every new feature in Markbind required unit testing, I had to create unit tests for the scroll top button component. Therefore, I had to learn how to use Vue Test Utils and its snapshots.
I had to learn how to

- deal with setTimeout. This was probably the hardest part as trying to mock the setTimeout (following this [tutorial](https://stackoverflow.com/questions/67981140/how-to-test-settimeout-function-calld-in-vue-created-hook-using-vue-utils-jes)) and using nextTick (using this [tutorial](https://dmitripavlutin.com/vue-next-tick/)) on Vue test did not work. I had to resort to using setTimeout in the test to wait out the setTimeout in the component.
- mount components with props and attached to a document
- dispatch events to trigger the scroll event needed for the scroll top button component
- test if a function has been called

#### ==Vue test utils: Mount vs shallow mount==

When writing test cases for my PR, I had to investigate the differences between mount and shallow mount. The idea is that the mount function renders all child and parent components in a DOM. In contrast, the shallowMount does not render the child components and only adds the parent component. Hence, mount offers a more mocked environment. This information was learnt from [here](https://reflect.run/articles/introduction-to-vue-test-utils/#:~:text=The%20mount%20function%20renders%20all,only%20adds%20the%20parent%20component)

#### ==Custom directives==

Directives was used in the new plugins [Datatable](https://github.com/MarkBind/markbind/pull/2446) and [Mermaid](https://github.com/MarkBind/markbind/pull/2475) to solve the issue about these diagrams not rendering in panels and modals. Hence, I learnt about Vue custom directives, which are basically objects that contain lifecycle hooks. This was used in both PRs to force the Datatable and Mermaid diagram to render even when within the panel or modal. I learnt about custom directives from [here](https://vuejs.org/guide/reusability/custom-directives)

### Jquery, Cheerio and Javascript for DOM manipulation

As I had to write a plugin and remove jQuery, I became a lot more familiar with DOM manipulation using Cheerio, jQuery and vanilla Javascript. Since I had to remove jQuery from Markbind, this [page](https://youmightnotneedjquery.com/) was very useful for me to understand how to convert from jQuery to vanilla Javascript. I also learnt from the [jQuery API documentation](https://api.jquery.com/) about each functions' behavior, especially more advanced functions like wrap and on. Through this PR, I became more familiar with using vanilla Javascript for DOM manipulation as well. For example, how to create elements, add styling and scroll etc.
Because the contact form plugin required DOM manipulation, I used cheerio for this PR and learnt about its API calls. The [cheerio API documentation](https://cheerio.js.org/) was very helpful in my understanding of the calls.

### CSS

As I worked on some front end bugs, I had to learn more about CSS. Specifically:

- How styles override each other. The iconColor in bozes are not working in certain circumstances due to Bootstrap styling. Hence, I had to learn more about overriding in CSS styles. This [guide](https://www.tutorialspoint.com/Rules-to-override-Style-Sheet-Rule-in-CSS) was useful in teaching me about it and I also about the [important property in CSS](https://www.w3schools.com/css/css_important.asp) which was what was causing the bug
- Transitions. The panel transition had some errors with an abrupt transition, which was a bug regarding the CSS transitions. I learnt about how CSS transitions from 0 to the max-height, and if the max-height was not set correctly (in this case it did not include margins) there would be problems.
- CSS selectors. As I had to style the form plugin and also had to finish up a PR regarding standardising tab buttons, I learnt about CSS selectors used for styling, from selecting by tag to by descendents. This [guide](http://web.simmons.edu/~grabiner/comm244/weekfour/selectors.html) was useful for my learning

#### ==Vendor prefixing==

I also learnt about vendor prefixing. This is basically where browser specific CSS were offered and hence the CSS was prefixed by certain identifiers that were unique to the browser.
However, this also causes some issues since there is inconsistency between browsers. This was causing problems in my PR which aimed to optimize code printing but the behaviour was not consistent across machines and browsers. Hence I learnt about this [here](https://css-tricks.com/is-vendor-prefixing-dead/).

### Typescript and migration

As I did a typescript migration, I learnt to code in it. Specifically

- Different ways to import and export files and functions in Typescript, which differed significantly from Javascript. The [Markbind documentation](https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html#import-export-syntax-reference) on that was very useful in my understanding.
- Defining and importing types. I learnt that npm packages often defined interfaces for their packages, making it easier to convert.

I learnt about the simliarity index about github files. According to the typescript migration documentation, there was a need to have two seperate commits, one to rename and one to adapt. If both were done within one commit, the simliarity index would be below the threshold and the commit history would be lost. This is something that I would definitely take note of in the future when renaming files.

I had to do a squash commit for the typescript migration. I learnt about the differences between rebasing vs merging through this [article](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) and about the pros and cons and dos and don'ts for rebasing. I was encountering the problem where squashing the merge resulted in the PR containing the recent commits from the master branch. This taught me not to miz up merging and rebasing and just do one or the other.

### Github actions

I learnt how to configure Github actions as I had to upgrade node version from 14 to 16 in Markbind/markbind-action and to also remove some depreated syntaxes. I learnt about the workflow of github actions and it's purpose.
I also had to learn how to test GitHub actions. I followed the tutorial in [Markbind Dev Guide](https://markbind.org/devdocs/devGuide/githubActions/markbindAction.html) on testing and also attempted to use VSCode Extension for Github Actions to test more effectively following this [tutorial](https://github.blog/2023-03-28-announcing-the-github-actions-extension-for-vs-code/).

#### ==Attemping to write a Github action==

I attempted to do a PR which notifies the person who merged the PR if the author of the PR is a first-time contributor, and adds a comment to remind them to add them to the contributor list.

While there was an existing package which checks if the user is a first-time contributor, I thought that there was some issues with their Github-action and hence attempted to fork and write [my own](https://github.com/yucheng11122017/first-contribution-check-action). Hence, I had to learn about the learning working of a github action and I also had to learn about the [Github API](https://docs.github.com/en/rest/actions?apiVersion=2022-11-28).

Additionally, this Github action was rather difficult to test manually because one would need to create a new repo and contribute to it etc to check the workflow works. Hence I tried to write unit test cases for it. Therefore I learnt about [nock](https://github.com/nock/nock) library which was recommended to use for Github actions, which mocks the Github API. I also used this [tutorial](https://akashrajpurohit.com/blog/integration-testing-in-javascript-with-jest-and-nock-a-beginners-guide/).

#### ==Github action security==

A PR was also created to improve the [Github action security](https://github.com/MarkBind/markbind/pull/2510). Hence I learnt about the good practises in Github Action to enhance security. For example, using the SHA of the commit rather than the version number could prevent attacks. Specifying the permissions that a workflow has also improves security practises. I refered to some blogs that the author of the PR specified [here](https://blog.gitguardian.com/github-actions-security-cheat-sheet/) and [here](https://dev.to/suzukishunsuke/secure-github-actions-by-pullrequesttarget-641).

### Nunjucks

I learnt about Nunjucks when making documentation updates. Specifically, regarding Nunjucks Macros: how to declare them, write if statements and how to use them. The [documentation on Nunjucks](https://mozilla.github.io/nunjucks/getting-started.html) are particularly useful.

### Node.js versioning

I learnt about Node.js versioning when upgrading the Node version and when writing the documentaiton on migrating Node js. For example, odd numbered Node.js versions are unstable and will reach end of life sooner, while even numbered Node.js version will be maintained for a longer period. I also learnt the difference between a major release and minor release, with the <tooltip content="Eg. 1.0.0 to 2.0.0">former increasing the first number</tooltip> and containing major and breaking changes, while the later has smaller changes which are not breaking.

### Deployment

For the node.js version upgrade, I had to check that the deployment was ok with the higher version. I therefore had to learn how to deploy the sites with github pages,CircleCi and Appveyor and Surge. I didn't do it with Travis due to a persistent account error. I followed the tutorial in the [Markbind tutorial](https://markbind.org/userGuide/deployingTheSite.html) to learn the deploying for each CI platform.

### Reuse principle

There was an issue with Markdown using include within another include, because the outer variable was overriding the inner variable. This causes a cyclical reference error. I was told that this was inline with the golden principle of reuse, where inner variables should be allowed to override the inner variables so that components can be reused without having to change the inner contents.

### Documentation

I learnt about the importance of good documentation and how to manage documentation. I think it is quite easy to keep adding things into documentation but it is more important to be able to present information in a way that is presentation and pallatable to users. For example, Markbind had an issue with cyclical references in includes and it would be good to document this. However, since it was an edge case, it was recommended to instead use a panel which was not as noticable so users could easily skip over it if not applicable to them.

### Project management

#### People management

I would actually argue that my biggest takeaway from CS3282 this semester is how to manage people.
In the beginning, the juniors from CS3281 were struggling a lot with the project and managing their own workload.
They were struggling with the steep learning curve that such an open module that CS3281 has.

Initially, I was rather frustrated with them and I didn't really understand their concerns and problems.
However, after taking some time to think about it, I tried to remain objective and patient with them, the same way my seniors were with me.
The rest of the seniors and I also tried different ways to motivate them and encourage them.

For example, we started having weekly stand ups every Saturday, where the juniors had to talk about what they did and what they planned to do. Having these stand ups created an arbitary deadline for the juniors to do some work and this motivated them more. It also gave them the opportunity to ask us any questions immediately. I also tried to drop by their lectures (whenever I can remember) so they can ask me questions immediately and ping me for any reviews they needed. I think this slot was really important for me to understand their problems better. For example, I was wondering why a certain junior was writing test suites in a rather odd way, and how come he didn't catch problems with the test suites. When I spoke to him during the lecture slot, he told me that he actually did not know how to check through the test suite properly and that is why he did not notice any issues. Hence I spent that time teaching him how to test the test suites.

Overall, I feel that people management was my biggest takeaway from the project. Just from learning from the juniors and how they behaved, I hope that this can translate to other projects when managing other developers.

#### PR reviews

I learnt was how to phrase my comments precisely and with sufficient detail. If my comments are too vague, they sometimes intepreted it differently from what I meant it to be. I tried to give more context to my comments and, if I could, provide exact suggestions on what I wanted to change.

An example of this was a discussion I had with a junior. I commented on his PR and told him to delete a certain part. But because I only referred to one line in his PR, he thought that I meant for him to only delete that specific line, when I wanted an entire hunk to be deleted, and this let to a lot of back and forth between us. The discussion can be seen [here](https://github.com/MarkBind/markbind/pull/2446#discussion_r1567581147). Hence, I learnt that I should give clearer and more direct instructions.

Also another thing that I learnt was to strike the right balance between being encourgaing and also being direct enough. As a reviewer, I don't want to come off too harsh which is discouraging, after all mistakes are a normal part of the process. However, it was also important to call out certain mistakes for the code writer to improve. For example, a junior had a certain way of writing code which was generally considered bad practise. Initially, I simply offered a suggestion on the PR, hoping that he would get the message that this was bad practise. However, after he did it multiple times, I specifically called him out for it and told him to correct it. While it may be a bit more harsh, he stopped doing so and his code quality improved.

#### Release

I also learnt how to do a release for Markbind. It was actually rather straightforward due to the detailed documentation on Markbind's [developer guide](https://markbind.org/devdocs/devGuide/projectManagement.html#doing-a-release).

I learnt about the versioning number in NPM and also about SERVER impact, which was important in helping me decide what should the version upgrade be. I refered to this [link](https://semver.org/).

However, due to some issues with regards to the permissions on NPM, I also learnt about the way NPM packages are organised and the NPM organisations. The issue was that markbind-cli package was not under the same organisation markbind because of naming conventions. Because packages under an organisation would have @{organisation_name}/{package_name} under it, hence markbind-cli was not under the organisation initially. Hence, I learnt about the naming convention in NPM packages and the work arounds.

### Web accessibility

I attempted to do a PR about web accessibility. The idea was that users can make use of an inbuilt web accessibility tool to check if their website is considered accessible. For example, it could flag out issues with color constrast that make it harder for people with poor eyesight to use their website. While I did not manage to finish this PR in the end, I learnt about web accessibilty.

For example I learnt about the color constrast ratio and how to calculate it. This is used to ensure that those with poor eyesight could still use the website with enough color constrast. This was learnt from [here](https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156) and [here](https://www.w3.org/TR/WCAG20-TECHS/G17.html)

Another thing I learnt was about tab index. The idea is that some users rely on tabbing to navigate through the website. Hence, it is important for websites to use a tab index in their elements to enable users to tab between different elements. Therefore, I learnt about tab index from [here](https://www.a11yproject.com/posts/how-to-use-the-tabindex-attribute/#:~:text=tabindex%20is%20a%20global%20attribute,via%20the%20keyboard's%20Tab%20key.)
