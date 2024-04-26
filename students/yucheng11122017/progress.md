## PRs I wrote:

- Improvements to Annotation
  - [Annotate support different labels #2388](https://github.com/MarkBind/markbind/pull/2388)
    - Support slots for annotation which enables more flexible image for annotation point
  - [Enable markdown for content, header and label in annotation point](https://github.com/MarkBind/markbind/pull/2427)
    - Previously, annotation point did not support Markdown in content, header and label. Now, Markdown can be used providing more flexibility to the user.
  - [Disable pop over in a-point if there is no header and content passed by user #2436](https://github.com/MarkBind/markbind/pull/2436)
    - Fix bug where there is no header and content but there is still a popover, resulting in a small arrow pointing to nothing
  - [Add horizontal spacing between the icon and text in the custom icon list #2352 #2375](https://github.com/MarkBind/markbind/pull/2375)
    - Add i-spacing feature for customised list
- Release
  - Did release for Markbind v5.3.0
  - [Modify release documentation to add detailed instructions on permissions #2455](https://github.com/MarkBind/markbind/pull/2455)
    - Due to some permission issues when doing the release, I created a PR to update the documentation with regards to permissions
- Customised lists
  - [Add text for icon #2444](https://github.com/MarkBind/markbind/pull/2444)
    - Added text attributes for customised icons
- Others
  - [Optimize code printing #2445](https://github.com/MarkBind/markbind/pull/2445)
    - Improve printing for code by making code light theme automatically when printing, removing code wrap and code copy buttons when printing, include code highlighting when printing
  - [Ignore plantuml images for test sites #2502](https://github.com/MarkBind/markbind/pull/2502)
    - Test sites previously only ignored plantuml images for test_site. This PR enables ignoring plantuml images for other test sites as well

PRs I guided/reviewed

- Templates
  - [MarkBind Template for Student Portfolio #2398](https://github.com/MarkBind/markbind/pull/2398)
  - [MarkBind Template for Software Project Documentation #2400](https://github.com/MarkBind/markbind/pull/2400)
- DevOps
  - [Utilize GitHub Actions to aid checking of commit message #2429](https://github.com/MarkBind/markbind/pull/2429)
  - [Utilize GitHub Actions to check for SEMVER impact label #2470](https://github.com/MarkBind/markbind/pull/2470)
  - [Add a reminder when contributor is new to ping all contributor bot #2484](https://github.com/MarkBind/markbind/pull/2484)
  - [Improve security of GitHub Actions workflows #2510](https://github.com/MarkBind/markbind/pull/2510)
- Plugins
  - [Add dataTable plugin #2446](https://github.com/MarkBind/markbind/pull/2446)
  - [Add Mermaid Plugin #2475](https://github.com/MarkBind/markbind/pull/2475)
- Customised Lists
  - [Support text-icons of lists #2520](https://github.com/MarkBind/markbind/pull/2520)
  - [Customizing list icons: give a way to apply to current item only #2454](https://github.com/MarkBind/markbind/pull/2454)
- Logging and testing
  - [Efficient validation for intra-link with hash #2465](https://github.com/MarkBind/markbind/pull/2465)
  - [Rule based html validation against hydration #2493](https://github.com/MarkBind/markbind/pull/2493)
  - [Standardise NodeProcessor.data.ts constant names #2483](https://github.com/MarkBind/markbind/pull/2483)
  - [Test logger calls in tests for NodeProcessor #2463](https://github.com/MarkBind/markbind/pull/2463)
  - [Add warning for including empty segments or files in optional mode #2506](https://github.com/MarkBind/markbind/pull/2506)

| Week   | Achievements                                                                                                                                              |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1      | Opened PR: [Annotate support different labels #2388](https://github.com/MarkBind/markbind/pull/2388)                                                      |
| 1      | Discussed Issue: [Create specific instructions to enable PR preview for CS2103T tP users #2370](https://github.com/MarkBind/markbind/issues/2370)         |
| 2      | Merged PR: [Annotate support different labels #2388](https://github.com/MarkBind/markbind/pull/2388)                                                      |
| 2      | Discussed Issue: [Create specific instructions to enable PR preview for CS2103T tP users #2370](https://github.com/MarkBind/markbind/issues/2370)         |
| 2      | Discussed Issue: [Provide good examples of MarkBind usage #659](https://github.com/MarkBind/markbind/issues/659)                                          |
| 2      | Merged PR: [Correct broken UG external link #2392](https://github.com/MarkBind/markbind/pull/2392)                                                        |
| 2      | Merged PR: [Replacing default icon for conversion #2389](https://github.com/MarkBind/markbind/pull/2389)                                                  |
| 2      | Review PR: [Use a more noticeable color for highlight words in fenced code #2393](https://github.com/MarkBind/markbind/pull/2394)                         |
| 2      | Review PR: [Allow markbind serve to specify custom host #2395](https://github.com/MarkBind/markbind/pull/2395)                                            |
| 6      | Merged PR: [Annotation content slot #2427](https://github.com/MarkBind/markbind/pull/2427)                                                                |
| 6      | Review PR: [Utilize GitHub Actions to aid checking of commit message #2429](https://github.com/MarkBind/markbind/pull/2429)                               |
| 6      | Merged PR: [Utilize GitHub Actions to aid checking of commit message #2429](https://github.com/MarkBind/markbind/pull/2429)                               |
| 6      | Released Markbind v5.3.0                                                                                                                                  |
| 6      | Opened Issue: [Add warning about npm permissions for release notes #2434](https://github.com/MarkBind/markbind/issues/2434)                               |
| 6      | Opened PR: [Disable pop over in a-point if there is no header and content passed by user #2436](https://github.com/MarkBind/markbind/pull/2436)           |
| Recess | Researched on Issue: [Re-introduce lazy loading for pictures #2367](https://github.com/MarkBind/markbind/issues/2367)                                     |
| Recess | Review PR: [Add line-numbers when wrapping is needed for printing #2431](https://github.com/MarkBind/markbind/pull/2431)                                  |
| Recess | Merged PR: [Disable pop over in a-point if there is no header and content passed by user #2436](https://github.com/MarkBind/markbind/pull/2436)           |
| Recess | Review PR: [Migrate stylelint to latest version #2292 #2425](https://github.com/MarkBind/markbind/pull/2425)                                              |
| Recess | Merged PR: [Add line-numbers when wrapping is needed for printing #2431](https://github.com/MarkBind/markbind/pull/2431)                                  |
| 7      | Review PR: [Add pageNav to Reader-Facing Features #2443](https://github.com/MarkBind/markbind/pull/2443)                                                  |
| 7      | Review PR: [Debug cannot import footnote from hash #2441](https://github.com/MarkBind/markbind/pull/2441)                                                 |
| 7      | Researched issue: [Support multiple levels in top navbar #2343](https://github.com/MarkBind/markbind/issues/2343)                                         |
| 7      | Opened PR: [Fix print code highlight #2445](https://github.com/MarkBind/markbind/pull/2445)                                                               |
| 7      | Opened PR: [Add text for icon #2444](https://github.com/MarkBind/markbind/pull/2444)                                                                      |
| 7      | Contributed to PR: [Add horizontal spacing between the icon and text in the custom icon list #2352 #2375](https://github.com/MarkBind/markbind/pull/2375) |
| 7      | Review PR: [Add SortableTable plugin #2446](https://github.com/MarkBind/markbind/pull/2446)                                                               |
| 7      | Review PR: [MarkBind Template for Software Project Documentation #2400](https://github.com/MarkBind/markbind/pull/2400)                                   |
| 7      | Review PR: [Add keeping fork up to date section in DG #2453](https://github.com/MarkBind/markbind/pull/2453)                                              |
| 8      | Discussed Issue: [[cs2103 website] Some top-nav menu items are not highlighted when visited #1616](https://github.com/MarkBind/markbind/issues/1616)      |
| 8      | Merged PR: [Add horizontal spacing between the icon and text in the custom icon list #2352 #2375](https://github.com/MarkBind/markbind/pull/2375)         |
| 8      | Review PR: [Customizing list icons: give a way to apply to current item only #2454](https://github.com/MarkBind/markbind/pull/2454)                       |
| 8      | Discussed issue: [Utilize GitHub Action to aid PR review #2140](https://github.com/MarkBind/markbind/issues/2140)                                         |
| 8      | Opened issue: [Automate all-contributors bot #2457](https://github.com/MarkBind/markbind/pull/2455)                                                       |
| 8      | Review PR: [Test logger calls in tests for NodeProcessor #2463](https://github.com/MarkBind/markbind/pull/2463)                                           |
| 8      | Opened issue: [Add documentation about npm unlink in DG #2467](https://github.com/MarkBind/markbind/issues/2467)                                          |
| 9      | Review PR: [Test logger calls in tests for NodeProcessor #2463](https://github.com/MarkBind/markbind/pull/2463)                                           |
| 9      | Review PR: [Utilize GitHub Actions to check for SEMVER impact label #2470](https://github.com/MarkBind/markbind/pull/2470)                                |
| 9      | Merged PR: [Modify release documentation to add detailed instructions on permissions #2455](https://github.com/MarkBind/markbind/pull/2455)               |
| 9      | Merged PR: [Optimize code printing #2445](https://github.com/MarkBind/markbind/pull/2445)                                                                 |
| 9      | Merged PR: [Add text for icon #2444](https://github.com/MarkBind/markbind/pull/2444)                                                                      |
| 11     | Review PR: [Add the announcement component #2472](https://github.com/MarkBind/markbind/pull/2472)                                                         |
| 11     | Review PR: [Set global variables using nunjucks syntax #2474](https://github.com/MarkBind/markbind/pull/2474)                                             |
| 11     | Review PR: [Add pagefind #2477](https://github.com/MarkBind/markbind/pull/2477)                                                                           |
| 11     | Review PR: [Add a reminder when contributor is new to ping all contributor bot #2484](https://github.com/MarkBind/markbind/pull/2484)                     |
| 11     | Review PR: [Fix imported modal button position off #2487](https://github.com/MarkBind/markbind/pull/2487)                                                 |
| 11     | Review PR: [Defer scripts in page template #2492](https://github.com/MarkBind/markbind/pull/2492)                                                         |
| 11     | Review PR: [Rule based html validation against hydration #2493](https://github.com/MarkBind/markbind/pull/2493)                                           |
| 11     | Review PR: [Support Bootstrap icons #2494](https://github.com/MarkBind/markbind/pull/2494)                                                                |
| 11     | Opened PR: [Ignore plantuml images for test sites #2502](https://github.com/MarkBind/markbind/pull/2502)                                                  |
| 11     | Discussed Issue: [text-icons of lists: give a way to auto-increment #2490](https://github.com/MarkBind/markbind/issues/2490)                              |
| 12     | Merged PR: [Ignore plantuml images for test sites #2502](https://github.com/MarkBind/markbind/pull/2502)                                                  |
| 12     | Reviewed PR: [Support text-icons of lists #2520](https://github.com/MarkBind/markbind/pull/2520)                                                          |
| 12     | Reviewed PR: [UG: images appear in two places #2514](https://github.com/MarkBind/markbind/pull/2514)                                                      |
| 12     | Reviewed PR: [Improve security of GitHub Actions workflows #2510](https://github.com/MarkBind/markbind/pull/2510)                                         |
| 12     | Reviewed PR: [Add note on absolute links #2507](https://github.com/MarkBind/markbind/pull/2507)                                                           |
| 13     | Reviewed PR: [Add warning for including empty segments or files in optional mode #2506](https://github.com/MarkBind/markbind/pull/2506)                   |
| 13     | Reviewed PR: [Change seamless panels to inherit any parent's colours #2501](https://github.com/MarkBind/markbind/pull/2501)                               |
| 13     | Reviewed PR: [Add a reminder when contributor is new to ping all contributor bot #2484](https://github.com/MarkBind/markbind/pull/2484)                   |
