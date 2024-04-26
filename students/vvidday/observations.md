### Project: Recharts

[Recharts](https://github.com/reposense/RepoSense/issues) is a React library that provides an easy way to write & render charts in React applications.

### My Contributions

My first contribution was updating the [Storybook](https://storybook.js.org/) page of the project. Storybook is a frontend workshop that allows users to render UI components and/or pages in isolation, and is often used for interactive documentation of each component in UI libraries. Within Recharts, in addition to the standard markdown-based documentation of its components, it maintains a Storybook page that documents each component interactively, as well as providing examples of how to achieve common use-cases with the components it provides.

In [docs: add storybook example for line trailing icon in LineChart](https://github.com/recharts/recharts/pull/4339), I added an example of how to add a custom trailing icon to a line within a line chart, which was a common usecase that required a workaround.


### My Learning Record

The observed workflow/process of this external project has a couple of extremely important differences to our internal project (RepoSense in particular), which I feel we can learn from to improve developer experience, reduce the likelihood of regressions, and speed up turnaround time.

#### Usage of git hooks
The project has set up automatic hooks (using [Husky](https://github.com/typicode/husky)) that run before every [commit](https://github.com/recharts/recharts/blob/3.x/.husky/pre-commit) and [push](https://github.com/recharts/recharts/blob/3.x/.husky/pre-push). These hooks run the linter and automated tests, and prevent any user from pushing if the linter and/or tests fail. What this does is guarantee that by the time a pull request is open, there won't exist any lint or test errors. It is a very common occurence in RepoSense that a contributor will open a pull request, and only then be notified that their code has a bunch of lint errors (this is even more common in frontend PRs). The most likely reason for this is that the linter script in the frontend folder (`npm run lint`) is never run during self testing, resulting in newer contributors almost always not being aware of the presence of the lint checks until the first time they open a PR and the CI runs. We can potentially save a lot of headache by implementing automatic git hooks into RepoSense, at least for linting the frontend codebase at a minimum. This would also probably speed up turnaround/development time, since there usually is quite a lot of time wasted when reviewers have to ask contributors to fix their linting errors.

#### Snapshot testing
The project also utilizes snapshot testing in their automated tests. They use [Vitest to run snapshot tests](https://vitest.dev/guide/snapshot.html), which is a library that we're [considering](https://github.com/reposense/RepoSense/issues/2000) in RepoSense as well. Snapshot testing involves the automatic creation of snapshot files that stores the output at the time the tests were run, and compares future outputs to these refefrence values. The snapshot files are usually checked into version control, and can be examined alongside code changes. Here's an example of a [snapshot file](https://github.com/recharts/recharts/blob/3.x/test/cartesian/__snapshots__/ReferenceArea.spec.tsx.snap) and [snapshot check](https://github.com/recharts/recharts/blob/3.x/test/cartesian/ReferenceArea.spec.tsx#L375) in the external project's codebase. This is definitely something that we can consider implementing within RepoSense, with the intention of preventing regressions.

#### Importance of good first issues
The project makes a great effort to properly tag & maintain a list of good first issues for newer contributors, which usually consist of smaller and easier issues that don't require deep knowledge of large portions of the codebase to tackle. This was crucial in enabling my experience of contributing, and we should look to paying more attention to this in RepoSense, especially for each new batch.