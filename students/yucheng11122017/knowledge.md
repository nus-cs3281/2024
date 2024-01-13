### Vue

#### Vue components

Since Markbind uses Vue components, I had to pick this up, having only experience with React before. I had to learn what is a Vue instance, how to compile Vue and so on.
Resources I used included the Markbind dev page regarding [SSR](https://markbind.org/devdocs/devGuide/design/serverSideRendering.html) of course, the [Vue Official Documentation](https://vuejs.org/guide/introduction.html) and [another Vue tutorial](https://markbind.org/devdocs/devGuide/design/serverSideRendering.html).
This was especially useful when dealing with Vue templates in one of my PRs about jQuery, which logged an warning since there was a script tag in the template. I had to learn about side effects in Vue from resources such as this [stackflow post](https://github.com/vuejs/vue/issues/11697) about Vue disallowing side effects for not just script tags but also style tags.

#### Vue test utils

Since every new feature in Markbind required unit testing, I had to create unit tests for the scroll top button component. Therefore, I had to learn how to use Vue Test Utils and its snapshots.
I had to learn how to

- deal with setTimeout. This was probably the hardest part as trying to mock the setTimeout (following this [tutorial](https://stackoverflow.com/questions/67981140/how-to-test-settimeout-function-calld-in-vue-created-hook-using-vue-utils-jes)) and using nextTick (using this [tutorial](https://dmitripavlutin.com/vue-next-tick/)) on Vue test did not work. I had to resort to using setTimeout in the test to wait out the setTimeout in the component.
- mount components with props and attached to a document
- dispatch events to trigger the scroll event needed for the scroll top button component
- test if a function has been called

### Jquery, Cheerio and Javascript for DOM manipulation

As I had to write a plugin and remove jQuery, I became a lot more familiar with DOM manipulation using Cheerio, jQuery and vanilla Javascript. Since I had to remove jQuery from Markbind, this [page](https://youmightnotneedjquery.com/) was very useful for me to understand how to convert from jQuery to vanilla Javascript. I also learnt from the [jQuery API documentation](https://api.jquery.com/) about each functions' behavior, especially more advanced functions like wrap and on. Through this PR, I became more familiar with using vanilla Javascript for DOM manipulation as well. For example, how to create elements, add styling and scroll etc.
Because the contact form plugin required DOM manipulation, I used cheerio for this PR and learnt about its API calls. The [cheerio API documentation](https://cheerio.js.org/) was very helpful in my understanding of the calls.

### CSS

As I worked on some front end bugs, I had to learn more about CSS. Specifically:

- How styles override each other. The iconColor in bozes are not working in certain circumstances due to Bootstrap styling. Hence, I had to learn more about overriding in CSS styles. This [guide](https://www.tutorialspoint.com/Rules-to-override-Style-Sheet-Rule-in-CSS) was useful in teaching me about it and I also about the [important property in CSS](https://www.w3schools.com/css/css_important.asp) which was what was causing the bug
- Transitions. The panel transition had some errors with an abrupt transition, which was a bug regarding the CSS transitions. I learnt about how CSS transitions from 0 to the max-height, and if the max-height was not set correctly (in this case it did not include margins) there would be problems.
- CSS selectors. As I had to style the form plugin and also had to finish up a PR regarding standardising tab buttons, I learnt about CSS selectors used for styling, from selecting by tag to by descendents. This [guide](http://web.simmons.edu/~grabiner/comm244/weekfour/selectors.html) was useful for my learning

### Typescript and migration

As I did a typescript migration, I learnt to code in it. Specifically

- Different ways to import and export files and functions in Typescript, which differed significantly from Javascript. The [Markbind documentation](https://markbind.org/devdocs/devGuide/development/migratingToTypeScript.html#import-export-syntax-reference) on that was very useful in my understanding.
- Defining and importing types. I learnt that npm packages often defined interfaces for their packages, making it easier to convert.

I learnt about the simliarity index about github files. According to the typescript migration documentation, there was a need to have two seperate commits, one to rename and one to adapt. If both were done within one commit, the simliarity index would be below the threshold and the commit history would be lost. This is something that I would definitely take note of in the future when renaming files.

I had to do a squash commit for the typescript migration. I learnt about the differences between rebasing vs merging through this [article](https://www.atlassian.com/git/tutorials/merging-vs-rebasing) and about the pros and cons and dos and don'ts for rebasing. I was encountering the problem where squashing the merge resulted in the PR containing the recent commits from the master branch. This taught me not to miz up merging and rebasing and just do one or the other.

### Github actions

I learnt how to configure Github actions as I had to upgrade node version from 14 to 16 in Markbind/markbind-action and to also remove some depreated syntaxes. I learnt about the workflow of github actions and it's purpose.
I also had to learn how to test GitHub actions. I followed the tutorial in [Markbind Dev Guide](https://markbind.org/devdocs/devGuide/githubActions/markbindAction.html) on testing and also attempted to use VSCode Extension for Github Actions to test more effectively following this [tutorial](https://github.blog/2023-03-28-announcing-the-github-actions-extension-for-vs-code/).

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
