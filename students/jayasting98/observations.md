### Project: Python (CPython)

Python is a high-level, general-purpose programming language. CPython is the reference implementation of the Python programming language. Written in C and Python, CPython is the default and most widely used implementation of the Python language.

### My Contributions

#### [gh-115323: Add meaningful error message for using bytearray.extend with str](https://github.com/python/cpython/pull/115332)

I added a more meaningful error message when `bytearray.extend` is incorrectly used with a `str` object input, to tackle the bug highlighted in the GitHub issue, "[bytearray.extend: Misleading error message](https://github.com/python/cpython/issues/115323)".

`str` is a built-in type in Python. `str` objects are strings of text; strings are immutable sequences of Unicode code points. `bytearray` is another built-in type in Python; `bytearray` objects are mutable sequences of single bytes. `bytearray.extend` can be used to add all the bytes of another sequence of bytes to the end of the `bytearray` object. This means that `bytearray.extend` can only be used with inputs that are sequences of individual bytes. In other words, `str` objects cannot be used as input to `bytearray.extend` because they are not sequences of single bytes.

When a `str` object is passed as input into `bytearray.extend`, Python correctly raises an error due to the type of the input. However, the error message is misleading, as it states `TypeError: 'str' object cannot be interpreted as an integer`. The `str` object mentioned can be interpreted as referring to the input passed, which seems to suggest that integers can be passed as input, which is incorrect because integers are not sequences, much less sequences of bytes. In reality, the `str` object mentioned is referring to the elements of the sequence represented by the input `str` object, which are themselves also `str` objects.

The error message is not wrong. However, it is just misleading. The PR I contributed fixed this by doing a check when an error is raised for when the input is a `str` object, before changing the error message to a more meaningful one, which would be `TypeError: expected iterable of integers; got: 'str'`.

### My Learning Record

#### Tools and technologies

##### reStructuredText (RST)

Python uses reStructuredText (RST) to document their project. RST is a lightweight markup language. It is not difficult to use, but it has its own syntax, which is different from the more popular markup languages like Markdown. I had to write a `NEWS` entry[^1] using RST. I used the [Python Developer's Guide page on RST](https://devguide.python.org/documentation/markup/) to help me figure out how to write using RST.

#### Comparisons between the external project and the internal project

##### The Python project seems to care a lot more about performance

My first attempt at fixing the misleading error message was checking the type of the input very early on, even before any error was raised. I believe that in any other project, including in TEAMMATES, my first attempt might be seen as reasonable, and I think it might even be accepted, maybe after only a few minor changes, if any.

However, this was not the most performant way to fix the bug. Checking the type of the input before an error is raised means that the input would be checked even if the input was valid. The first review wanted me to change this, and so I did.

##### The Python project seems to document virtually every change into its changelog and highlights more important ones

When I made my PR to fix the misleading error message, I was also required to write a `NEWS` entry, just like almost every other PR made to the project. In the Python project, `NEWS` entries document contributions so that it can be added into the changelog. They are necessary for any contribution made, except for those that do not affect users of the Python programming language itself, including:
- documentation changes
- test changes
- strictly internal changes with no user-visible effects
- changes that already have a `NEWS` entry
- reverts that have not yet been included in any formal release (including alpha and beta releases)

From what I understand, changes that are more significant can be highlighted in "What's New in Python" entries.

In comparison, I do not think this is done in TEAMMATES. I think all the changes are mentioned equally in the releases.

##### The Python project has room to be less strict with minor contributions

If somebody wants to fix a typo in the Python project, they do not need to post a new issue before making a pull request. They can simply make the pull request immediately. From what I know, this is not the case in TEAMMATES. At the very least, it is not explicitly mentioned in the TEAMMATES developer guide.

##### The Python project automatically merges bug fixes on all its branches

When a Python version is released, people will use that version of Python. They may continue to use that version for their projects even when much newer Python versions are released. Thus, the Python team needs to continue to support older versions (up to a limit) by making sure that bug fixes, and security patches are also made to the supported older Python versions.

Each version is maintained on their own respective Git branch, but all changes are initially made by submitting a PR to the main branch. The PRs are given labels like `needs backport to 3.12` which indicate whether the PR needs to be backported to a specific Git branch for a Python version. When a PR is merged into the main branch, a bot ([miss-islington-app](https://github.com/apps/miss-islington-app)) backports it to older Python branches according to the labels. It does this by submitting the same PR to the Git branches of the relevant Python versions. A member of the Python project team can then merge the PR into the Git branches of the relevant Python versions.

In TEAMMATES, we may often have multiple feature branches in addition to the main branch. Fixes may be made to the main branch that are also required on the feature branches. In TEAMMATES, we often integrate these fixes into the feature branches by manually rebasing the feature branch onto the last commit on the main branch or merging the main branch into the feature branch. In other words, unlike in the Python project where changes in the main branch are almost automatically integrated into the other branches, in TEAMMATES, these changes to the main branch are manually integrated into other branches.

#### Suggestions for the internal project based on external project observations

##### Changelog with highlights

Instead of displaying all the changes equally, it may be better to highlight some of them, as they be more significant to more users. Users may not notice those changes if they are displayed equally with the rest, even it may be of interest to them.

##### Minor contributions should not require GitHub issues

For minor contributions, it seems like it would be overkill to need to post an issue before a pull request can be made. If it is not already the case, then maybe we should allow minor contributions without their own GitHub issues. We should also make it clear in the developer guide that this is allowed.

##### Automation to integrate changes in the main branch into the feature branches

Instead of manually rebasing onto the main branch or manually merging the main branch into a feature branch, maybe it would be better to do it automatically. Maybe a bot can do this for us. A problem I can foresee with this is if there are merge conflicts. However, it is possible to make a PR for merging branches. The merge conflicts may be resolved manually in the branch created for the PR. While this reintroduces some manual work, the merge conflicts should not occur all the time. If this automation is possible, with some of the changes in the main branch being integrated into the feature branches automatically, this may reduce some of the load on the developers.

[^1]: In the Python project, `NEWS` entries document contributions so that it can be added into the changelog.

<!-- ### Project: Foo

Give an intro to the project here ...

### My Contributions

Give a description of your contributions, including links to relevant PRs

### My Learning Record

Give tools/technologies you learned here. Include resources you used, and a brief summary of the resource. -->
