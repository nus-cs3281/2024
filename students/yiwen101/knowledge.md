### Tool/Technology git
To sync a forked repository with the original repository after discarding all the changes in the forked repository:
```bash
git remote add upstream <URL_of_original_repository>
git fetch upstream
git checkout master
git reset --hard upstream/master
git push origin master --force
```

To append a new commit onto the already existing commit you can do the following:

```bash
git add .
git commit --amend
git push origin <branch_name> --force
```

If there is significant changes to file after renaming, git treat it as a new file and the history of the file is lost. So to preserve the history of the file, need to separate the renaming and the changes (and do rebase and merge).

### Tool/Technology JavaScript/TypeScript
Use !! To change to boolean.

Use type && {key: value} to quick define type.

Use `as` to cast type.

use `!` to assert non-null.

In functional programming, many methods are bundled in the style like `Array.{method}`.

Redux/Saga is a predictable state container for JavaScript apps. It is a state management tool, and is often used with React (not very relevant to markbind).

Vscode's "goto references" does not work well with javascript (mixed inside the typescript). As currently, some of the core packages are not migrated to typescript yet, the references are not recognized. So need to use "findin file" instead.

Possible to auto re-compiling the typescript file into javascript files when it is changed, and only  recompile the changed files.

### Tool/Technology Miscellaneous
Workflow vice, a good practice is to not immediately merge a pull request after it is reviewed. Instead, wait for a day or two to see if there are any other comments or suggestions.

For command line tool (like markbind), a good project structure is to have a cli and a core folder. The cli folder contains the code for the command line interface, while the core folder contains the core logic of the project. When building from source, need to `npm link` the cli folder.

More comfortable with using loggers to debug.

Jest as the testing framework (and debugger).

Snapshot (Recursively comparing every folder and file in the expcted folder with the actual generated files) as a way to do the functional testing.

Cheerio to convert html string to dom, and locate elements in the dom.

Understand the concept of `hoisting` in JavaScript.

Npm is different from yarn in that it has a flat dependency tree, while yarn has a nested dependency tree. So yarn allows the reuse of the same package in the dependency tree, while npm does not.

Can use `npm run` to list all the runnable scripts.

Fix issues and simple bugs is the best way to gain familiarity with the codebase.

Understand the difference between inline markdown and non-inline markdown.

Can use comment like `eslint-disable-next-line no-await-in-loop` to disable eslint for the next line for a specific rule.