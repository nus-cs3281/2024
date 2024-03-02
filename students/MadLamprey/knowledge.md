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