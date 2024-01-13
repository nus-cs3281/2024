## Angular Essentials
I had contributed to CATcher as part of IWM, but I have never really approached the Angular aspects of the project.

Essentially, the core ideas behind Angular involves:
- Components, a TypeScript class with `@Component` decorator, an HTML template and styles. 
  - The decorator accepts parameters that help Angular know which HTML file is the component's template and which css file is the component's styles.
  - The decorator also accepts a parameter that is the component's selector, which is how we can reuse this component as an HTML element in other HTML files.
- An HTML template that instructs Angular how to render the component
- An optional set of CSS styles that define the appearance of the template's HTML elements

The other key concepts include event bindings and property binding that link the template to the TypeScript class. Knowing these essentials allowed me to fix [WATcher PR#57](https://github.com/CATcher-org/WATcher/pull/57).

Another key part of Angular is its Dependency Injection system and services. Angular allows us to provide dependencies at different levels of the application, and how the dependencies are instantiated.
- For example, when you providing a service at the root level, Angular creates a single, shared instance of the service and injects it into any class that asks for it. 
- Also, it seems like most of WATcher and CATcher's services are provided at the root level.


Finally, as part of fixing "[Remove label-filter-bar as module export #92](https://github.com/CATcher-org/WATcher/pull/92)", I also learned about how related components are organized and grouped into modules. Each Module are self-contained and provide a certain set of functionality and components related to that module, thereby achieving separation of concerns.
 
Resources:
- https://angular.io/guide/what-is-angular
- https://angular.io/guide/dependency-injection
- https://angular.io/guide/ngmodules


## E2E Testing with Playwright

After having 2 separate hotfixes pushed in a single semester, I started to look more deeply into ensuring the robustness of our application. During these 2 hotfixes, bugs were only uncovered during manual testing. However, it is time consuming to conduct manual tests, and we need to find a way to automate it. E2E tests simulate user interactions such as clicks and typing and is a useful way to ensure our end-product is performing as expected. 

During this semester, one of the high priority issues was to migrate our E2E solution away from Protractor. As such, I have investigated Cypress and Playwright as two potential E2E solutions.

#### Mocking services 

When performing migration from Protractor to Playwright, I learned about the different strategies E2E tests can be conducted. Typically, we would want to conduct E2E tests against our production server, since that is what our end users will be using. However, since CATcher depends alot on GitHub's API for its functionality, we are unable to perform automated tests against GitHub. A second strategy would be to mock the functions that hit GitHub's API, and we would test solely the functionalities and behaviours of the app. This let me realized that there is a test vs production version of CATcher.

I have also looked into whether it is possible to perform E2E testing against the production server, since one of the bugs fixed in the hotfixes can only be caught if we did not adopt a mocking strategy. One of the key feasibility concerns I had with testing against the GitHub API was simulating user authentication. This was because authenticating with GitHub requires multi-factor authentication, something that is difficult to achieve with automated E2E testing. Some potential solutions to bypassing MFA would be to use TOTP, which can be generated programmatically. More research will be needed in this area.

#### Aspects Learnt

- Configuring and setting up Playwright for a project.
- Learned about how Playwright/Cypress/Protractor identifies and interacts with HTML elements using selectors.
- Learned about how CATcher API calls are mocked during E2E testing

Resources:
- https://playwright.dev
- https://www.cypress.io/
- [This pull request by ptvrajsk documenting how he implemented E2E with Protractor](https://github.com/CATcher-org/CATcher/pull/539)


## Github Actions
I also picked up Github Actions when contributing to the CI/CD pipeline in [Enable linting in Github workflow #81](https://github.com/CATcher-org/WATcher/pull/81). I learned how Github Actions are set up and how they can be triggered upon pushing to main/master and also on pull requests.

Furthermore, I learnt how we can use matrix strategies to run the same job with different parameters, such as different OS and different node versions.

Resources:
- https://docs.github.com/en/actions/quickstart
- https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs

## RxJS and the Observer Pattern

Part of working with CATcher source code was frequently encountering Observables and Observers. RxJS supports `Observers` and `Observables`, allowing updates to some `Observable` to be received by some `Observer` that is subscribed to it. With this pattern, we can trigger updates in many dependent objects automatically and asynchronously when some object state changes.

Resources:
- https://rxjs.dev/