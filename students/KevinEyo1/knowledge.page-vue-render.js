
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"summary-of-key-contributions"}},[_v("Summary of Key Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#summary-of-key-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Worked on adding "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2400"}},[_v("Software Project Documentation")]),_v(" template to MarkBind, allowing for users to have a starting point for using MarkBind in their project documentation.")]),_v(" "),_c('p',[_v("Researched into possible integrations of "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2448"}},[_v("Bun")]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2359"}},[_v("Bootstrap v5.2 and v5.3")]),_v(" into MarkBind, to determine the value and feasibility of these integrations.")]),_v(" "),_c('p',[_v("Worked on "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2454"}},[_v("customizing list icons")]),_v(", such that icons for list items can be customized to apply to the current item only instead of default inheritance to future items.")]),_v(" "),_c('p',[_v("Worked largely on DevOps side of MarkBind, utilizing GitHub Actions and workflows to handle automation of tasks. These tasks include checking for "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2429"}},[_v("commit messages in PR descriptions")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2470"}},[_v("SEMVER impact labels")]),_v(", "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2484"}},[_v("reminding adding of new contributors to contributor list")]),_v(".")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2140"}},[_v("Researched")]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2523"}},[_v("implemented")]),_v(" the use of DangerJS to automate checking of changes coupling of implementation files to test or documentation files, to ensure that any changes to the repository is properly documented and tested.")]),_v(" "),_c('p',[_v("Researched into the implementation of automating "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2495"}},[_v("unassigning of assigned users to issues")]),_v(" after a certain period of inactivity.")]),_v(" "),_c('p',[_v("Researched into "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2488"}},[_v("common security practices")]),_v(" for GitHub Actions, and "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2510"}},[_v("implementing these practices")]),_v(" into the MarkBind repository. These practices are also "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2528"}},[_v("documented")]),_v(" for future contributors to the project.")]),_v(" "),_c('h3',{attrs:{"id":"markbind-codebase"}},[_v("MarkBind codebase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markbind-codebase","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Learned the underlying workings and how different parts of the codebase are linked together to provide MarkBind's functionalities. From the parser to the renderer, and the different plugins that can be used to extend MarkBind's capabilities. Learned how to implement new features, adding relevant test and documentation to ensure that the codebase is maintainable and modifiable.")]),_v(" "),_c('h3',{attrs:{"id":"github-actions"}},[_v("GitHub Actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Learned how GitHub Actions fits into the development workflow, and how to use it to automate tasks. I used the GitHub Actions documentation to learn about the different types of workflows, how to create and configure workflows, and how to use the different actions available.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://docs.github.com/en/actions"}},[_v("GitHub Actions Documentation")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Summary")]),_v(": GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions"}},[_v("GitHub Actions Workflow Syntax")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Summary")]),_v(": GitHub Actions uses YAML syntax to define the events, jobs, and steps that make up your workflow. You can create a custom workflow or use a starter workflow template to get started.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"}},[_v("GITHUB_TOKEN")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Summary")]),_v(": The GITHUB_TOKEN is a GitHub Actions token that is automatically generated by GitHub and used to authenticate in a workflow run. It is scoped to the repository that contains the workflow file, and can be used to perform read and write operations on the repository. It is automatically available to your workflow and does not need to be stored as a secret.")])])]),_v(" "),_c('p',[_v("Learned yaml and bash for creation of workflows.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started"}},[_v("YAML Syntax")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Summary")]),_v(": YAML is a human-readable data serialization standard that can be used in conjunction with all programming languages and is often used to write configuration files. It can also be used in workflows to define the structure of the workflow, including the events, jobs, and steps that make up the workflow.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://devhints.io/bash"}},[_v("Bash Scripting")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Summary")]),_v(": Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. It has been distributed widely as the shell for the GNU operating system and as a default shell on Linux and OS X.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://web.archive.org/web/20230408142504/https://wiki.bash-hackers.org/syntax/pe"}},[_v("Bash Parameter Expansion")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Summary")]),_v(": Parameter expansion is a way to manipulate variables in Bash. It is a form of variable substitution that allows for the manipulation of variables in various ways.")])])]),_v(" "),_c('p',[_v("Learned how to use other actions in workflows, such as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actions/checkout")]),_v(" action to check out a repository onto the runner, allowing subsequent steps to execute operations on the checked-out repository.")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://github.com/marketplace"}},[_v("GitHub Marketplace")])]),_v(" "),_c('li',[_c('strong',[_v("Summary")]),_v(": The GitHub Marketplace is a collection of actions that can be used in your workflows. You can search for actions by category, language, or other criteria, and use them in your workflows to automate tasks.")])]),_v(" "),_c('p',[_v("Learned how to use DangerJS to aid with workflows.")]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://danger.systems/js/"}},[_v("DangerJS")])]),_v(" "),_c('li',[_c('strong',[_v("Summary")]),_v(": Danger runs during your CI process, and helps with automating common code review chores. This provides another layer of automation over the code review process, ensuring that all changes are properly documented and tested.")])]),_v(" "),_c('p',[_c('strong',[_v("When to create new workflows (outside of modifiability)")]),_v("\nAlthough keeping multiple jobs within the same workflow file is possible, sometimes it may be better not to. Jobs are run based on event triggers such as pull requests etc, but you must add it to the top. This meant that if you had multiple jobs in the same workflow file, they would all run when the event trigger was activated. If you wanted a trigger to only trigger a specific job, you would need to add a check to exclude all other jobs from that trigger.")]),_v(" "),_c('p',[_v("Pull request trigger by default has the types "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("opened")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("synchronize")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("reopened")]),_v(".")]),_v(" "),_c('p',[_c('strong',[_v("Testing and debugging workflows")]),_v("\nThis can be done locally with the help of Docker and act.")]),_v(" "),_c('p',[_v("Benefits of local testing:\nFast Feedback - Avoid commit/push every time you want to test out the changes.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://nektosact.com/usage/index.html"}},[_v("Act Usage")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Summary")]),_v(": Act reads in your GitHub Actions from .github/workflows/ and determines the set of actions that need to be run. It uses the Docker API to either pull or build the necessary images, as defined in your workflow files and finally determines the execution path based on the dependencies that were defined. Once it has the execution path, it then uses the Docker API to run containers for each action based on the images prepared earlier.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://docs.docker.com/get-started/overview/"}},[_v("Docker Docs")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Summary")]),_v(":")])])]),_v(" "),_c('p',[_v("Steps (PR):")]),_v(" "),_c('ol',[_c('li',[_v("Download act and Docker.")]),_v(" "),_c('li',[_v("Start up Docker daemon.")]),_v(" "),_c('li',[_v("Create a JSON file with the appropriate PR file structure (can use python script to generate it).")]),_v(" "),_c('li',[_v("Run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("act pull_request -j specific-job -e pr-event.json")]),_v(" to run a specific job on the PR event environment.")])]),_v(" "),_c('h4',{attrs:{"id":"keywords"}},[_v("Keywords"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#keywords","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("uses")]),_v(":\nCan be used to reference an action in the same repository, a public repository, or a published Docker container image. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("uses")]),_v(" keyword can also be used to reference an action in a private repository by specifying the repository using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("repository")]),_v(" keyword.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("env")]),_v(":\nIt is best to avoid having expressions "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("${{ }}")]),_v("  in "),_c('em',[_v("run")]),_v(" portion of a step. Instead, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("env")]),_v(" allows defining of variables that store the expression.")]),_v(" "),_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("awk")]),_v(" :\nCan be used to extract a section of body, from a line containing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("START")]),_v(" to a line containing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("END")]),_v(" (inclusive of full line).\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("section=$(echo \"$body\" | awk '/START/,/END/')")])]),_v(" "),_c('h4',{attrs:{"id":"use-of-third-party-actions"}},[_v("Use of third-party actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-of-third-party-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://github.com/marketplace?type=actions"}},[_v("GitHub Actions Marketplace")])]),_v(" "),_c('li',[_c('strong',[_v("Summary")]),_v(": The GitHub Actions Marketplace is a collection of actions that can be used in your workflows. You can search for actions by category, language, or other criteria, and use them in your workflows to automate tasks.")])]),_v(" "),_c('p',[_v("Useful actions:")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Description")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actions/checkout@v3")])]),_v(" "),_c('td',[_v("Check out a repository onto the runner, allowing subsequent steps to execute operations on the checked-out repository, i.e. gaining access to the repository's code.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actions/github-script@v7")])]),_v(" "),_c('td',[_v("Run a script in the GitHub Actions environment using the GitHub CLI. Refer to "),_c('a',{attrs:{"href":"https://octokit.github.io/rest.js/v20"}},[_v("here")])])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actions/setup-node@v3")])]),_v(" "),_c('td',[_v("Set up a Node.js environment for use in workflows.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actions/stale")])]),_v(" "),_c('td',[_v("Close stale issues and pull requests.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("boundfoxstudios/action-unassign-contributor-after-days-of-inactivity")])]),_v(" "),_c('td',[_v("Automatically unassign user from issues after a certain period of inactivity.")])])])])]),_c('h4',{attrs:{"id":"extra-information-about-how-stale-and-unassign-actions-work-in-the-context-of-markbind"}},[_v("Extra information about how stale and unassign actions work in the context of MarkBind"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#extra-information-about-how-stale-and-unassign-actions-work-in-the-context-of-markbind","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The definition of inactivity for the GitHub action is any form of history to the issue, be it labeling, comments or references. The action works such that issues and PRs are treated and checked for inactivity separately. This means that any updates done to a PR regarding this issue, will not reset inactivity for the issue.")]),_v(" "),_c('p',[_v("How unassign and stale actions work:")]),_v(" "),_c('ol',[_c('li',[_v("Stale action adds "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" label to issue or PR based on inactivity (default 60 days)")]),_v(" "),_c('li',[_v("Unassign action routinely checks for this "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" label, then checks whether it's been a set amount of days after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" label has been added with no other activity (default 7 days)")]),_v(" "),_c('li',[_v("For issues passing the check before, it un-assigns users and removes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" label")])]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/BoundfoxStudios/fairy-tale-defender/blob/develop/.github/workflows/project-management.yml#L105"}},[_v("Reference workflow of real-life example")])]),_v(" "),_c('h5',{attrs:{"id":"solution-using-unassign-and-stale-actions"}},[_v("Solution using unassign and stale actions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#solution-using-unassign-and-stale-actions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Add the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" label after 6 days and ping a reminder, then have the "),_c('a',{attrs:{"href":"https://github.com/marketplace/actions/unassign-contributor-after-days-of-inactivity"}},[_v("unassign-contributor-after-days-of-inactivity")]),_v(" run 1 day after.\nIt can also only check on issues that are actually assigned to someone, so that theres no redundancy.\n"),_c('strong',[_v("Limitations:")])]),_v(" "),_c('ol',[_c('li',[_v("Any changes in PR regarding issue will not reset inactivity of issue, meaning if discussion and updates are done on the PR instead of the issue, the issue risks being "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" and the user being unassigned despite them actively working on the PR.")]),_v(" "),_c('li',[_v("It can ping a general reminder (without resetting the inactivity) but it cannot ping the user directly with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@username")]),_v(" in the reminder due to how the code is written. It is possible to separately ping the user in another comment but that will cause a reset in inactivity. This means slightly lower visibility for the reminder.")])]),_v(" "),_c('h5',{attrs:{"id":"improvements-for-limitation-1"}},[_v("Improvements for limitation 1"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#improvements-for-limitation-1","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Building on unassign action, which at some point it might be better off just building our own unassign action for better integration and control\n"),_c('strong',[_v("Check corresponding PR (requires more implementation)")]),_v("\nAdd additional check before setting "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" label to check if corresponding PR has history.\nThis can be done through checking the list of open PRs and their descriptions whether it mentions the issue. It can also be done through looking at the issue’s history, for PRs that mention it, then checking the history of those PRs. This should be quite manageable since the number of open PRs at any point of time is still relatively low for Markbind’s scale.")]),_v(" "),_c('p',[_c('strong',[_v("Check corresponding issue (requires more implementation)")]),_v("\nOn any activity in PRs, check description to find issues linked to the PR, so activity on PR can be translated to activity on the issue as well by posting a comment on the corresponding issue or something of that nature. This might require checking for a specific issue that has the user assigned to avoid commenting on relevant but not directly linked issues, if the PR has multiple relevant issues. We can also only call it on commits instead of any activity, so as to avoid over-polluting the issue with comments.")]),_v(" "),_c('h5',{attrs:{"id":"improvements-for-limitation-2"}},[_v("Improvements for limitation 2"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#improvements-for-limitation-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('strong',[_v("Ping after unassign")]),_v("\nSame as before, add "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" level after 6 days, but don't need to ping the user, wait until unassign 1 day after, then ping the user that they have been unassigned and if they are still working on it, ask them to reassign themselves. This would likely fit better with a longer timeline.\nThis solves the visibility problem as it can directly ping the user as resetting the inactivity after the user has been unassigned wouldn't matter.")]),_v(" "),_c('p',[_c('strong',[_v("Implement our own stale action (requires more implementation)")]),_v("\nImplement a simplified version of stale action that now allows pinging of user before applying the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Stale")]),_v(" label.")]),_v(" "),_c('h4',{attrs:{"id":"pull-request-target"}},[_v("pull_request_target"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#pull-request-target","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Due to security reasons, for permissions given to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GITHUB_TOKEN")]),_v(", the maximum access for pull requests from public forked repositories is restricted to only read, so it is not possible to add labels since there is no write access. GitHub introduced the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull_request_target")]),_v(" event that will bypass this restriction and give the token write access.\nPros:")]),_v(" "),_c('ol',[_c('li',[_v("It allows labelling of PR")]),_v(" "),_c('li',[_v("Increased security as base branch workflows can be trusted, protecting job from running modified and malicious workflows\nCons:")]),_v(" "),_c('li',[_v("It can only run on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull_request")]),_v(" events and not "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull_request_review")]),_v(" events which means need to run on PR merge rather than on PR approved.")]),_v(" "),_c('li',[_v("This event runs in the context of the base of the pull request, rather than in the context of the merge commit, as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull_request")]),_v(" event does. This could lead to security vulnerabilities if scripts run are not properly checked for malicious code.\nCan be aided by seeking approval before running the job, refer to "),_c('a',{attrs:{"href":"https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#controlling-changes-from-forks-to-workflows-in-public-repositories"}},[_v("change repo settings")])])]),_v(" "),_c('h5',{attrs:{"id":"alternative-implementations"}},[_v("Alternative implementations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#alternative-implementations","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://stackoverflow.com/questions/67247752/how-to-use-secret-in-pull-request-review-similar-to-pull-request-target"}},[_v("Workaround")]),_v("\nPros: this can allow for still triggering on PR approved\nCons: immensely complicates the workflow")]),_v(" "),_c('p',[_v("Personal Access Token (PAT)\nCreate a PAT with the necessary permissions and add it to your repository's secrets. Then, modify the workflow to use this secret instead of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GITHUB_TOKEN")]),_v(".\nPros: this can allow for still triggering on PR approved\nCons: exposes your repository to risks if the forked code can access the token")]),_v(" "),_c('h3',{attrs:{"id":"github-actions-security"}},[_v("GitHub Actions Security"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-actions-security","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://dev.to/suzukishunsuke/secure-github-actions-by-pullrequesttarget-641"}},[_v("Using pull_request_target")])]),_v(" "),_c('li',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://blog.gitguardian.com/github-actions-security-cheat-sheet/"}},[_v("Security and Cheatsheet")])]),_v(" "),_c('li',[_c('strong',[_v("Resource")]),_v(": "),_c('a',{attrs:{"href":"https://securitylab.github.com/research/github-actions-preventing-pwn-requests/"}},[_v("Security Lab")])])]),_v(" "),_c('p',[_c('strong',[_v("Specific version tags")]),_v("\nWhen using third-party actions, pin the version with a commit hash rather than a tag to shield your workflow from potential supply-chain compromise, since tags can be adjusted to a malicious codebase state but commit hashes provide immutability.\nThis can be done by going to the codebase for the specific tag version and looking for the latest commit of the version desired and copying the commit’s full SHA from the url link.\nUse:\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("uses: someperson/post-issue@f054a8b5c1271c37293245628f1cae047eff08c9")]),_v("\nInstead of:\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("uses: someperson/post-issue@v7")]),_v("\nDownside is that the updates must be done by updating the commit hash instead of it being done automatically through moving the tag to a new release.\nThis can be solved by using tools like Dependabot or Renovatebot by adding a comment of the version used, enabling automated dependency updates. Tools like StepSecurity can also be used.")]),_v(" "),_c('p',[_c('strong',[_v("Minimally scoped credentials")]),_v("\nEvery credential used in the workflow should have the minimum required permissions to execute the job.\nIn particular, use the ‘permissions’ key to make sure the GITHUB_TOKEN is configured with the least privileges for each job.\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("permissions")]),_v(" can be restricted at the repo, workflow or job level.\n"),_c('strong',[_v("Environment variables")]),_v(", like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("${{ secrets.GITHUB_TOKEN }}")]),_v(", should be limited by scope, and should be declared at the step level when possible.")]),_v(" "),_c('p',[_c('strong',[_v("Pull_request_target")]),_v(" (must be used for write access if PR is from forked repo)\nDo not use actions/checkout with this as it can give write permission and secrets access to untrusted code. Any building step, script execution, or even action call could be used to compromise the entire repository. This can be fixed by adding code to ensure that the code being checked out belongs to the base branch, which would also be limiting since the code checked out is not up to date for the PR.\nThis can be done using:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("- uses: actions/checkout@v4\n")]),_c('span',[_v("  with:\n")]),_c('span',[_v("    ref: $ \n")])])]),_c('p',[_v("Triggers workflows based on the latest commit of the pull request's base branch.\nEven if workflow files are modified or deleted on feature branches, workflows on the default branch aren't affected so you can prevent malicious code from being executed in CI without code review.\nAnother solution that allows "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("pull_request_target")]),_v(" with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("actions/checkout")]),_v(" used on the PR branch, is to add an additional step of running workflow only on approval by trusted users, such that the trusted user has to check the changes in the code from the PR to ensure there is no malicious code before running the workflow.")]),_v(" "),_c('p',[_c('strong',[_v("Untrusted input")]),_v("\nDon't directly reference values you do not control, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("echo “${{github.event.pull_request.title}}”")]),_v(", since it can contain malicious code and lead to an injection attack.\nInstead use an action with arguments (recommended):")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("uses: fakeaction/printtitle@v3 \n")]),_c('span',[_v("with: \n")]),_c('span',[_v("title: $\n")])])]),_c('p',[_v("Or bind the value to an intermediate environment variable:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("env: \n")]),_c('span',[_v("PR_TITLE: $\n")]),_c('span',[_v("run: | \n")]),_c('span',[_v("echo “$PR_TITLE” \n")])])]),_c('p',[_v("Use "),_c('a',{attrs:{"href":"https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"}},[_c('strong',[_v("OIDC")])]),_v(" and respective Secrets Manager for access to cloud providers instead of using secrets.\nUse "),_c('a',{attrs:{"href":"https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions"}},[_c('strong',[_v("GitHub Secrets")])]),_v(" to store keys securely and reference in workflows using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("${{}}")]),_v(".\nCan use "),_c('a',{attrs:{"href":"https://github.com/GitGuardian/ggshield-action?ref=blog.gitguardian.com"}},[_c('strong',[_v("GitGuardian Shield")])]),_v(" to help with scanning for security vulnerabilities.")]),_v(" "),_c('h3',{attrs:{"id":"typescript"}},[_v("Typescript"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#typescript","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Typescript is a superset of JavaScript that adds static typing to the language. By manipulating variables and functions, Typescript can help catch errors before they occur.")]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Syntax")]),_v(" "),_c('th',[_v("Name")]),_v(" "),_c('th',[_v("Feature")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("?")])]),_v(" "),_c('td',[_v("Optional chaining operator")]),_v(" "),_c('td',[_v("variable returns undefined if doesn't exist. Also used for optional function parameters or class properties")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("??")])]),_v(" "),_c('td',[_v("Nullish coalescing operator")]),_v(" "),_c('td',[_v("returns the right-hand operand when the left-hand operand is null or undefined.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("!")])]),_v(" "),_c('td',[_v("Non-null assertion operator")]),_v(" "),_c('td',[_v("variable is not null or undefined, only used if you are sure that value will exist.")])])])])]),_c('h3',{attrs:{"id":"process-of-upgrading-dependencies-and-packages"}},[_v("Process of upgrading dependencies and packages"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#process-of-upgrading-dependencies-and-packages","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind uses a monorepo structure, which means that multiple packages are contained in a single repository.\nThe process of upgrading dependencies and packages in MarkBind involves the following steps:")]),_v(" "),_c('ol',[_c('li',[_c('p',[_c('strong',[_v("Checking current versions")]),_v(": Check the current versions of the dependencies and packages in the project. This can be done by looking at the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" file for each project. The command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm ls package_name")]),_v(" will output which packages are using what versions.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Review changelog and documentation")]),_v(": Review the changelog and documentation for the dependencies and packages to see what changes have been made in the new versions.")])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Upgrade dependencies and packages")]),_v(": Update the relevant "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("package.json")]),_v(" file or the root one for dependencies across all packages, then run "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run setup")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 26 Apr 2024, 20:06:52 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  