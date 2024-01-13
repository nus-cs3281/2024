<!--
	List the aspects you learned, and the resources you used to learn them, and a brief summary of each resource.
-->

## DevOps

### Gradle

Gradle is a build tool designed specifically to meet the requirements of building Java applications. Once it’s set up, building an application is as simple as running a single command on the command line. Gradle performs well and is also useful for managing dependencies via its advanced dependency management system.

Learned about Gradle through a really [helpful tutorial](https://tomgregory.com/gradle-tutorial-for-complete-beginners/).

### Bash and Batch Scripting

I learned how to write basic bash scripts via [tutorialspoint](https://www.tutorialspoint.com/batch_script/index.htm), and had to implement batch scripts to perform environmental checks for all files tracked by git, to ensure they end with a newline, no prohibited line endings (`\r\n`) are present and no trailing whitespaces are present.

Some interesting bugs were encountered when attempting to use pipes in batch files, particularly one that prevents delayed expansion of variables from being properly evaluated as per usual. This is due to variables not being evaluated in the batch context, as the lines are executed only in the cmd-line context. A more detailed analysis of the bug is done by a user of [stackoverflow](https://stackoverflow.com/questions/8192318/why-does-delayed-expansion-fail-when-inside-a-piped-block-of-code).

### Codecov

As I explored [Codecov](https://about.codecov.io/) to determine why it would intermittently fail for GitHub actions, I developed a greater appreciation for the role of code coverage analysis in ensuring software quality. I found its integration with popular CI/CD platforms to be seamless, making it easier to track and improve code coverage across projects. The visualization tools, such as the [sunburst graph](https://docs.codecov.com/docs/graphs#sunburst) and [diff coverage reports](https://docs.codecov.com/docs/comparing-commits), were especially helpful in identifying areas that needed more testing attention. Furthermore, learning about Codecov's ability to enforce coverage thresholds and generate pull request comments reinforced the importance of maintaining high-quality test suites.

## Frontend

### Vue

[Vue](https://vuejs.org/) is a progressive JavaScript framework that simplifies the creation of responsive and efficient web applications. Its reactive [data-binding](https://www.javatpoint.com/vue-js-data-binding) and [component-based architecture](https://vuex.vuejs.org/guide/structure.html) promote modular programming, resulting in more maintainable and scalable code. Learning about Vue's component-based architecture also expanded my understanding of modular programming and how it can lead to more maintainable and scalable code.

### Pug

[Pug](https://pugjs.org/api/getting-started.html) is a templating engine that integrates well with Vue, allowing for cleaner and more concise HTML code with the use of whitespace and indentation for structure. By removing the need for closing tags, Pug attempts to make code more readable and organized. Its support for variables, mixins, and inheritance facilitates code reusability and modular design, improving the overall structure and readability of templates.

### Cypress

[Cypress](https://www.cypress.io/) is an end-to-end testing framework that simplifies the process of writing and executing tests for web applications. Its intuitive syntax, real-time reloading, and support for network stubbing improve debugging and development efficiency, emphasizing thorough testing. I found its syntax and API to be intuitive and user-friendly, making the process of writing and executing tests more enjoyable. I was particularly impressed with the real-time reloading feature, which allows for faster debugging and development, simplifying [E2E](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test) testing.

## Backend

### Bloch’s Builder Pattern

Bloch’s Builder pattern is a design pattern that simplifies object instantiation in Java, particularly for classes with numerous constructor parameters, as it simplifies the process of object instantiation while maintaining immutability and improving readability. This was a particularly useful design pattern when refactoring the `CliArguments.java` class, as it had a large number of constructor parameters, and also required flexible construction as some of the fields were optional. The pattern facilitates immutability and reduces the risk of introducing errors in complex Java classes. Read more about [here](https://blogs.oracle.com/javamagazine/post/exploring-joshua-blochs-builder-design-pattern-in-java) on Oracle's blog.

### Polymorphism

Polymorphism is a core object-oriented programming concept in Java that allows objects to adopt multiple forms and behaviors based on their context. It promotes code cleanliness, extensibility, and reduces coupling between components, resulting in more flexible and modular applications that can evolve and scale easily. By leveraging polymorphism, I was able to reduce the amount of logic in the main method of `RepoSense.java`, by utilizing `RunConfigurationDecider` to return the appropriate `RunConfiguration` based on the `CliArguments`, where the config can be from `getRepoConfigurations()`.

### Discrete Event Simulator (DES)

Discrete event simulator (DES) is a method used to model real-world systems that can be decomposed into a set of logically separate processes that autonomously progress through time. This was a design that was well suited for designing a CLI Wizard, as it allows for maintaining of a deque of prompts that to be shown to the user, while also allowing the addition of new prompts into the deque depending on the user's responses.

## Misc

### Git Commmands/Functionalities

In RepoSense, a variety of git commands are utilized to get information about the repository. Through undertaking DevOps tasks, I was also exposed to other interesting git commands. Here are some of the interesting ones that I was not aware of before.

`git shortlog` - Summarizes `git log` output, where each commit will be grouped by author and title. This is used in RepoSense to easily count the commits by the users.

`git grep` - A powerful tool that looks for specified patterns in the tracked files in the work tree, blobs registered in the index file, or blobs in given tree objects. Patterns are lists of one or more search expressions separated by newline characters. An empty string as search expression matches all lines. Utilized to write Reposense scripts to perform environmental checks for all files tracked by git, to ensure they end with a newline, no prohibited line endings (`\r\n`) are present and no trailing whitespaces are present. Used [git docs](https://git-scm.com/docs/git-grep) to learn how to use `git grep` properly and what its various flags do.

`.mailmap` - If the file .mailmap exists at the top-level of the repository, it can be used to map author and committer names and email addresses to canonical real names and email addresses. This is useful to map multiple authors and commenters and provides a way to share the mapping with all other users of the repository. Used [git docs](https://git-scm.com/docs/git-grep) to learn how to configure git mailmap properly.

### URL Shortening

Researched interesting solutions for free URL shortening, looking into 3 main ways to do it. Read about an in-depth writeup in [the
Github issue here](https://github.com/reposense/RepoSense/issues/1898).
