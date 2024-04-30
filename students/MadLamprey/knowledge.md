### Angular

Underpinning the development of CATcher and WATcher, it was of paramount importance to understand the nuances of the Angular framework. This presented a challenge, transitioning from ReactJs - a framework I was comfortable with. The structure of Angular, contrasted with React's flexibility, necessitated a deep and rigorous engagement with Angular's ecosystem.

- **Transitioning from ReactJs**:
    * I was initially struck by Angular's comprehensive framework, which unlike ReactJs's straightforward library-based approach, provides a full suite of development tools. Angular mandates a structured environment that rigorously applies TypeScript for static typing, modules for encapsulation, and injectors for dependency management, ensuring robust, scalable applications. This all-inclusive nature required adapting to a relatively complex development environment.
- **Angular Directives and DOM Manipulation**:
    * Directives are essentially markers that Angular allows us to attach to elements to influence their behaviour in a specific way. 
    * These constructs allow for direct DOM manipulation, a capability not native to React. I leveraged structural directives like `*ngIf` for conditional rendering, and attribute directives to modify behaviors of DOM elements dynamically. This exploration provided practical insights into complex DOM operations without full page reloads, facilitating rich, responsive user interactions.
- **Form Validation with Angular Validators**:
    * Linking back to the use of Angular Directives, their coupling with Validators makes for robustness and expressiveness, especially in the case of forms, to allow for proper feedback to be given to the user.
    * I learned about the creation and use of custom validators as part of the `@angular/forms` library, which are a crucial aspect of an application that consists of Form-based components. Angular's form validation is highly robust, integrated deeply with its reactive and template-driven forms, facilitating complex form handling with built-in validators and custom validation functions. In contrast, React forms often require additional libraries for similar levels of validation robustness.
- **Software Maintenance**:
    * In a bid to keep the application and its dependencies up-to-date, constant upgrade to newer versions of the tech stack used, is crucial. This also falls in line with our goal to follow best software practices.
    * My role extended to maintaining the application's health by upgrading Angular and its ecosystem. This task required a thorough understanding of semantic versioning, dependency conflicts, and the Angular update cycle. React, while flexible, typically requires third-party tools to manage similar tasks, leading to a more hands-on and sometimes fragmented maintenance experience.

Through contributions and an extensive understanding of the codebase, I have attained a certain degree of comfort with Angular as a frontend framework, and will further practice the use of Angular and its features in personal projects.

### Docker Integration in WATcher Documentation

Incorporating Docker into the WATcher documentation development process was a strategic move to standardize and streamline the development environment. My involvement with setting up a Dev Container using Docker provided valuable insights into containerization and its impact on development workflows.

- **Understanding and Implementing Dev Containers**:
    * Dev Containers provide a consistent, isolated, and replicable development environment for all contributors, regardless of their local setup. This is crucial for eliminating differences observed in working on the development environment on different systems.
    * I utilized Docker to encapsulate the build environment into a Docker Image, defined by a Dockerfile. This approach ensures that all dependencies and runtime environments are uniformly configured across different development setups.
- **Customization and Configuration**:
    * The use of the VSCode Dev Container as a base allowed for significant customization tailored to the specific needs of the WATcher documentation project. By parameterizing the build process (`devcontainer.json`), I was able to define and manage configurations such as environment variables, port forwarding, and startup commands efficiently.
    * One of the key benefits of implementing Docker was significantly reducing the onboarding time for new developers. By providing a container that includes all necessary dependencies pre-installed and pre-configured, new team members could get up and running with minimal setup.

Working with Docker deepened my understanding of containerization technologies and their role in modern software development. It highlighted the importance of infrastructure as code (IaC) in automating and simplifying development processes. It reinforced best practices in DevOps, particularly in terms of environment standardization.

### Linters

As part of maintaining development tools, I worked on migrating the project from using TSLint (which is now deprecated), to ESLint. This helped me understand the true role of linters, and how they are defined for a project.

- **Understanding Linters**:
    * As studied in CS2103T, linters are vital tools in modern software development, used for static code analysis to enforce coding standards and identify problematic patterns in the code. My experience with linters deepened during the migration, reinforcing their role in improving code quality, reducing bugs, and maintaining consistency across large codebases.
- **The Migration Process**:
    * The migration from TSLint to ESLint involved a strategic review and translation of linting rules to ensure continuity and adherence to our established coding practices. Despite the availability of automated tools like `tslint-to-eslint`, which attempts to convert configurations, many rules required manual adjustments to align with ESLint’s syntax and capabilities, as well as to not make too many disruptive changes to the codebase.
    * This process was meticulous, involving:
        - **Rule Assessment**: Evaluating each TSLint rule and its impact on our codebase, determining essential rules, and mapping them to their ESLint counterparts.
        - **Configuration Translation**: Manually configuring ESLint rules where automated tools fell short, ensuring that our new linting setup maintained the integrity and intent of the original rules without compromising on code quality.
        - **Testing and Adjustment**: Rigorously testing the new ESLint configurations across our projects to identify any discrepancies and adjust rules to better fit our development practices and project specifics.
    * ESLint provides comprehensive support for both JavaScript and TypeScript, offering a unified linting solution that reduces complexity and improves analysis accuracy. ESLint’s architecture allows for extensive customization and extension, enabling the integration of plugins that address specific needs such as React-specific linting rules or accessibility checks.

The migration to ESLint has not only streamlined the development environment but also enriched my understanding of effective coding practices.

### Jasmine

While developing tests for the `ErrorHandlingService` and `MilestoneService` in WATcher, I gained significant insights into Jasmine's powerful features and how they can be leveraged to create thorough, reliable, and maintainable test suites.

- **Behavior-Driven Development Approach**:
    * Jasmine's BDD framework encourages a more descriptive and natural language style in writing tests, which aligns well with how software behavior is described in real-world scenarios.
- **Mocking and Spying**:
    * Jasmine's mocking and spying capabilities were instrumental in isolating the tests. By creating spy objects for dependencies like `MatSnackBar` and `LoggingService`, I could simulate their behavior and assert that they were being called correctly without actually triggering real side effects.
    * A spy object was created for `GithubService` using Jasmine's `createSpyObj` method, which allowed us to simulate its `fetchAllMilestones` method without actual HTTP requests. This approach isolates the test environment from external dependencies.
- **Asynchronous Testing**:
    * The use of RxJS's of function to return observable sequences makes the method calls predictable and easily testable.
    * Jasmine's asynchronous testing capability, demonstrated with the done callback, was crucial. It ensures that tests involving observables only complete after all asynchronous operations have been resolved, providing an accurate assessment of the method's behavior.
- **Conditional Behavior Testing**:
    * The `handleError()` method's conditional logic, which dictates different responses based on the error type, highlighted the importance of comprehensive test paths. I learned to utilize Jasmine's `it` blocks effectively to specify and isolate each logical branch within the method. This practice ensures that every potential execution path is tested, which is crucial for error handling logic where different types of errors can lead to different user experiences.

This exploration into Jasmine's capabilities not only enhanced my technical skills but also deepened my understanding of strategic test planning and execution in a behavior-driven development context. The experience emphasized the value of detailed, well-structured tests in maintaining high software quality and reliability.

### UI/UX Design

A rather inconspicuous but significant learning point, while working on WATcher and CATcher, was UI and UX design. Since the main aim of these applications is to assist students, tutors, professors to understand, contextualise and identify key information with ease, several design decisions had to made from the point of view of how it would most benefit the users.

Some of these included:

1. **[#361](https://github.com/CATcher-org/WATcher/issues/361) Make ItemsPerPage common for all card views**
   - Implementing a consistent ItemsPerPage filter across different views ensures that users have a predictable and stable interface, improving usability and reducing cognitive load.

2. **[#363](https://github.com/CATcher-org/WATcher/issues/363) Remodel the design of the Filter bar**
   - Redesigning the filter bar to create a design that is both functionally effective and aesthetically pleasing, requiring a balance between form and function.

3. **[#307](https://github.com/CATcher-org/WATcher/pull/307) Add tool tip for hidden users**
   - Adding tooltips is a critical aspect of UI design for enhancing user understanding without cluttering the interface, to ensure that they appear in contexts where users most need guidance.

4. **[#318](https://github.com/CATcher-org/WATcher/pull/318) Add sorting by Status**
   - Understanding of the most logical ways users might want to organize data, enhancing the application's usability.

5. **[#337](https://github.com/CATcher-org/WATcher/pull/337) Add icon for PRs without milestones**
   - The use of icons to convey information is a staple in UI design, providing visual cues that help users quickly grasp the status of items.

Working on these PRs likely provided a deep dive into the principles of user-centered design, focusing on enhancing the user's journey through intuitive layouts, actionable insights, and consistent behaviors across the application. The challenges often revolved around integrating new features without disrupting the existing user experience, requiring careful consideration of design continuity and user expectations.

