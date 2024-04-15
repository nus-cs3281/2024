### Angular

Being the framework that CATcher and WATcher are built on, it was of paramount importance to learn Angular. While I had no past experience working with Angular, my experience with ReactJs proved to be of some help in the transition, but the learning curve was still quite steep. 

I have tried learning Angular in depth over the course of a few weeks and authoring pull requests has helped me in understanding different aspects of using Angular.

* Angular Directives:
    * In one of the first PRs that I authored, I had the distinct pleasure of studying about Angular directives. Directives are essentially markers that Angular allows us to attach to elements to influence their behaviour in a specific way. 
    * Directives empower us, as developers, to manipulate the DOM dynamically, which entails changing the structure and content of the HTML depending on certain conditions or data, without having to reload the page. 
    * They also allow for more expressiveness. In the case of the PR I worked on, I made use of Angular's Structural Directive `*ngIf` to conditionally render an error message based on a validation.
* Validators:
    * Linking back to the use of Angular Directives, their coupling with Validators makes for a robustness and expressiveness, especially in the case of forms, to allow for proper feedback to be given to the user.
    * I learned about the creation and use of custom validators as part of the `@angular/forms` library, which are a crucial aspect of an application that consists of Form-based components.
* Software Maintenance:
    * In a bid to keep the application and its dependencies up-to-date, constant upgrade to newer versions of the tech stack used, is crucial. This also falls in line with our goal to follow best software practices.
    * Particularly, for Angular, this required a thorough review of its documentation, and that of its dependencies to identify versions compatible with our application (since it still does not use the LTS versions).

### Docker

As part of DevOps for the documentation of WATcher, I worked on creating a Dev Container using Docker. This led me to understand and appreciate the use of dev containers in general.

* The basic principle of dev containers is to provide an isolated, lightweight environment that allows developers to work on a containerized version of a build environment
* Docker is a container management service, and its key benefit is to package an application with all its dependencies into a standardized unit.
* A containerized version of the build environment is referred to as a Docker Image, and these images are created through the Dockerfile
* For the WATcher-docs, the VSCode Dev Container was used as a base dev container, with a variable argument for the variant, to allow for customizability during the build process. 
* The `devcontainer.json`, then defines the container properties specific to the WATcher docs. It specifies the additional dependencies, list the ports to be forwarded, and specify the command to be run once the container is created. 

All in all, the dev container helps provide a reproducible development environment, that allows new developers to start working on WATcher-docs more seamlessly.

### Linters

As part of maintaining development tools, I worked on migrating the project from using TSLint (which is now deprecated), to ESLint. This helped me understand the true role of linters, and how they are defined for a project. 

A linter (as studied in CS2103T) is a static code analysis tool that allows us to define a style we want our codebase to adhere to, reduce code smells and higlight performance areas. 

* TSLint is one of the most popular static analysis tools that checks TypeScript code for readability and maintainability. However, in 2019, TSLint was deprecated in favour of ESLint.
* ESLint is the dominant linting tool for JavaScript, but it has fully matured to support TypeScript.
* Since a large number of projects that made use of TSLint prior to 2019 had to be migrated to ESLint, an `npm` packages, `tslint-to-eslint` has been provided, that converts the existing TSLint configuration of a project to the closest reasonable ESLint equivalent. However, in the context of CATcher, I found that the resulting ESLint config file did not accurately map all TSLint rules. Hence, I had to follow a migration process which involved:
    * Assessing the impact of the migration on the project; understanding how the TSLint configurations and rules translate to ESLint, without sacrificing code quality
    * Translating the configuration which involves mapping the TSLint rules to equivalent ESLint rules, or adapting the codebase if direct matches for rules are not found
This process not only ensured accurate rule translation but also enhanced my understanding of how linters influence coding standards. The rules that linters enforce range from:
    1. Code quality rules such as `no-unused-vars`
    2. Security rules such as `no-new-func`
    3. Error prevention rules such as `no-console`
And more that focus on style, best practices and code complexity.

All in all, linters play a crucial role in enforcing certain rules that we wish the codebase to follow.