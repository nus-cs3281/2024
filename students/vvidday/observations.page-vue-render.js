
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-recharts"}},[_v("Project: Recharts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-recharts","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues"}},[_v("Recharts")]),_v(" is a React library that provides an easy way to write & render charts in React applications.")]),_v(" "),_c('h3',{attrs:{"id":"my-contributions"}},[_v("My Contributions"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-contributions","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("My first contribution was updating the "),_c('a',{attrs:{"href":"https://storybook.js.org/"}},[_v("Storybook")]),_v(" page of the project. Storybook is a frontend workshop that allows users to render UI components and/or pages in isolation, and is often used for interactive documentation of each component in UI libraries. Within Recharts, in addition to the standard markdown-based documentation of its components, it maintains a Storybook page that documents each component interactively, as well as providing examples of how to achieve common use-cases with the components it provides.")]),_v(" "),_c('p',[_v("In "),_c('a',{attrs:{"href":"https://github.com/recharts/recharts/pull/4339"}},[_v("docs: add storybook example for line trailing icon in LineChart")]),_v(", I added an example of how to add a custom trailing icon to a line within a line chart, which was a common usecase that required a workaround.")]),_v(" "),_c('h3',{attrs:{"id":"my-learning-record"}},[_v("My Learning Record"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#my-learning-record","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The observed workflow/process of this external project has a couple of extremely important differences to our internal project (RepoSense in particular), which I feel we can learn from to improve developer experience, reduce the likelihood of regressions, and speed up turnaround time.")]),_v(" "),_c('h4',{attrs:{"id":"usage-of-git-hooks"}},[_v("Usage of git hooks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#usage-of-git-hooks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The project has set up automatic hooks (using "),_c('a',{attrs:{"href":"https://github.com/typicode/husky"}},[_v("Husky")]),_v(") that run before every "),_c('a',{attrs:{"href":"https://github.com/recharts/recharts/blob/3.x/.husky/pre-commit"}},[_v("commit")]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/recharts/recharts/blob/3.x/.husky/pre-push"}},[_v("push")]),_v(". These hooks run the linter and automated tests, and prevent any user from pushing if the linter and/or tests fail. What this does is guarantee that by the time a pull request is open, there won't exist any lint or test errors. It is a very common occurence in RepoSense that a contributor will open a pull request, and only then be notified that their code has a bunch of lint errors (this is even more common in frontend PRs). The most likely reason for this is that the linter script in the frontend folder ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("npm run lint")]),_v(") is never run during self testing, resulting in newer contributors almost always not being aware of the presence of the lint checks until the first time they open a PR and the CI runs. We can potentially save a lot of headache by implementing automatic git hooks into RepoSense, at least for linting the frontend codebase at a minimum. This would also probably speed up turnaround/development time, since there usually is quite a lot of time wasted when reviewers have to ask contributors to fix their linting errors.")]),_v(" "),_c('h4',{attrs:{"id":"snapshot-testing"}},[_v("Snapshot testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#snapshot-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The project also utilizes snapshot testing in their automated tests. They use "),_c('a',{attrs:{"href":"https://vitest.dev/guide/snapshot.html"}},[_v("Vitest to run snapshot tests")]),_v(", which is a library that we're "),_c('a',{attrs:{"href":"https://github.com/reposense/RepoSense/issues/2000"}},[_v("considering")]),_v(" in RepoSense as well. Snapshot testing involves the automatic creation of snapshot files that stores the output at the time the tests were run, and compares future outputs to these refefrence values. The snapshot files are usually checked into version control, and can be examined alongside code changes. Here's an example of a "),_c('a',{attrs:{"href":"https://github.com/recharts/recharts/blob/3.x/test/cartesian/__snapshots__/ReferenceArea.spec.tsx.snap"}},[_v("snapshot file")]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/recharts/recharts/blob/3.x/test/cartesian/ReferenceArea.spec.tsx#L375"}},[_v("snapshot check")]),_v(" in the external project's codebase. This is definitely something that we can consider implementing within RepoSense, with the intention of preventing regressions.")]),_v(" "),_c('h4',{attrs:{"id":"importance-of-good-first-issues"}},[_v("Importance of good first issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#importance-of-good-first-issues","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The project makes a great effort to properly tag & maintain a list of good first issues for newer contributors, which usually consist of smaller and easier issues that don't require deep knowledge of large portions of the codebase to tackle. This was crucial in enabling my experience of contributing, and we should look to paying more attention to this in RepoSense, especially for each new batch.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Tue, 30 Apr 2024, 18:57:07 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  