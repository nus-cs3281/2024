### Summary of Key Contributions

I have spent most of my time working on [Issue #2302](https://github.com/MarkBind/markbind/issues/2302) where I was trying to make Markbind able to support setting global variables via nunjucks syntax, which would if done, significantly improve users' convenience while using the product. 
I have pushed the progress of solving this issue through various research and experiment efforts through [this PR](https://github.com/MarkBind/markbind/pull/2474). 
Lastly, I am able to document the major challenges that developers will face and the common pitfalls when tackling this issue.

Other than that, I have also focused on researching/investigating challenging issues that have caused or may cause bugs in Markbind. For example,
[the lazy loading issue](https://github.com/MarkBind/markbind/issues/2367), [gitignore not generated issue](https://github.com/MarkBind/markbind/issues/2416), [issue with script's defer attribute](https://github.com/MarkBind/markbind/issues/2508), [potential npm unlink issue](https://github.com/MarkBind/markbind/issues/2467), [Jest's mock issue](https://github.com/MarkBind/markbind/pull/2463)

I have also improved users' experience by optimizing our product's performance, related works are [introducing lazy loading](https://github.com/MarkBind/markbind/pull/2450) and [improve loading speed by moving scripts after the html files are loaded](https://github.com/MarkBind/markbind/pull/2522).


| Week    | Progress                                                                                                                                                                 |
|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2       | Authored PR: [#2395](https://github.com/MarkBind/markbind/pull/2395) Allow markbind serve to specify custom host                                                         |
| 4       | Authored PR: [#2425](https://github.com/MarkBind/markbind/pull/2425) Migrate stylelint to latest version                                                                 |
| 7       | Created Issue: [#2451](https://github.com/MarkBind/markbind/issues/2451) Missing output for plugins: Web3Forms                                                           |
| 7       | Researched on Issue: [#2367](https://github.com/MarkBind/markbind/issues/2367) Re-introduce lazy loading                                                                 |
| 7       | Authored PR: [#2450](https://github.com/MarkBind/markbind/pull/2450) Re-introduce lazy loading                                                                           |
| 8       | Created Issue: [#2468](https://github.com/MarkBind/markbind/issues/2468) Allow users to define the height/width in percentages for Pic and Annotate                      |
| 8       | Researched on Issue: [#2416](https://github.com/MarkBind/markbind/issues/2416) .gitignore not generated when init                                                        |
| 8       | Authored PR: [#2469](https://github.com/MarkBind/markbind/pull/2469) Fix .gitignore not generated bug                                                                    |
| 8       | Reviewed PR: [#2463](https://github.com/MarkBind/markbind/pull/2463) Test logger calls in tests for NodeProcessor                                                        |
| 8       | Researched on Issue: [#2467](https://github.com/MarkBind/markbind/issues/2467) Add documentation about npm unlink in DG                                                  |
| 9       | Authored PR: [#2474](https://github.com/MarkBind/markbind/pull/2474) Allow setting global variables using nunjucks syntax                                                |
| 10      | Reviewed PR: [#2484](https://github.com/MarkBind/markbind/pull/2484) Add a reminder when contributor is new to ping all contributor bot                                  |
| 10      | Reviewed PR: [#2472](https://github.com/MarkBind/markbind/pull/2472) Add the announcement component                                                                      |
| 10      | Reviewed PR: [#2481](https://github.com/MarkBind/markbind/pull/2481) Migrate Site.test to Typescript                                                                     |
| 11      | Reviewed PR: [#2491](https://github.com/MarkBind/markbind/pull/2491) Allocate space for scrollbar in sitenav and pagenav                                                 |                  
| 11      | Authored PR: [#2492](https://github.com/MarkBind/markbind/pull/2492) Defer scripts in page template                                                                      |
| 12      | Researched on Issue: [#2508](https://github.com/MarkBind/markbind/issues/2508) PR2492 causes regression to Modal                                                         |
| 13      | Authored PR: [#2522](https://github.com/MarkBind/markbind/pull/2522) Move scripts to bottom in page template                                                             |
| Reading | Merged PR: [#2446](https://github.com/MarkBind/markbind/pull/2446) Add dataTable plugin                                                                                  |
| Exam    | Merged PR: [#2540](https://github.com/MarkBind/markbind/pull/2540) Bump fontawesome to remove console error                                                              |
| Exam    | Researched on Issue: [#2302](https://github.com/MarkBind/markbind/issues/2302) Add support for setting & importing variables via Nunjucks syntax into global variables   |


