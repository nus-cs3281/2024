## Angular

### Attribute Directive
#### Summary
Attribute directives can change the appearance or behavior of DOM elements and Angular components.
#### Resources
[Angular Documentation](https://angular.io/guide/attribute-directives): Provides guidelines on creating and applying attribute directive, covering user events handling and passing values to attribute directive.
#### Practice
[PR #1239](https://github.com/CATcher-org/CATcher/pull/1239): Created an attribute directive that listen to click event and will open error snackbar if the target link is an internal link.

### Components
#### Summary
Components are the main building blocks for Angular. Each components consists of 3 files:
  - HTML: Defines the layout of the component's view.
  - CSS: Defines the component-specific styles.
  - Typescript: Implements the component's logic and behavior.
#### Resources
- [Angular Documentation](https://angular.io/guide/component-overview): Provides guidelines on creating components.
- Previous code by other developers: Learned from existing component implementations in the codebase.
- **Practice**:
    - [PR #233](https://github.com/CATcher-org/WATcher/pull/233): Edited exsiting component and created new component to improve WATcher activity dashboard.

### `NgTemplateOutlet`
#### Summary
`NgTemplateOutlet` is a directive in Angular that allows for dynamic rendering of templates. It allows the template to be specified along with the context data that should be injected into it.

#### Application
I utilized `NgTemplateOutlet` to dynamically render different headers for the card view component based on current grouping criteria. Refer to [`CardViewComponenet`](https://github.com/CATcher-org/WATcher/blob/main/src/app/issues-viewer/card-view/card-view.component.html) for implementation details.

## Jasmine 
Jasmine is a behavior-driven development framewrok specific for JavaScript unit testing.

I primarily learned how to use Jasmine from its [documentation](https://jasmine.github.io/api/edge/global). I utilized it extensively while working on WATcher test case refactoring. Some relevant PRs include: [PR #241](https://github.com/CATcher-org/WATcher/pull/241), [PR #244](https://github.com/CATcher-org/WATcher/pull/244), [PR #245](https://github.com/CATcher-org/WATcher/pull/245), [PR #246](https://github.com/CATcher-org/WATcher/pull/246), [PR #247](https://github.com/CATcher-org/WATcher/pull/247)

- **`describe`**: Define a group of spec (suite)
- **`it`**: Define a single spec.
- **`expect`**: Create an expectation for a spec.
- **Class `Spy`**: Mock functions (spies) that can be used to track function calls.

### Asynchronous Testing with Observables
When dealing with asynchronous operations like observables, Jasmine provides support through the use of the `done` function. This allows for effective testing of asynchronous behavior by signaling when a test has completed its execution.

Here's an example from my [pull request](https://github.com/CATcher-org/WATcher/pull/275):

```javascript
it('should throw error for URL without repo parameter', (done) => {
  const urlWithoutRepo = '/issuesViewer';

  phaseService.setupFromUrl(urlWithoutRepo).subscribe({
    error: (err) => {
      expect(err).toEqual(new Error(ErrorMessageService.invalidUrlMessage()));
      done(); // Signal that the test has completed
    }
  });
});
```
Resources: [Angular — Unit Testing recipes (v2+)](https://medium.com/google-developer-experts/angular-2-unit-testing-with-jasmine-defe20421584#59a4)

### Testing for Behavior
It's essential to test for behavior rather than implementation details. This principle was emphasized by a senior in my pull reqeust. By focusing on behavior, tests become more resilient to changes in the codebase and provide better documentation for how components and functions should be used.

Here's an example that illustrates the difference between testing behavior and implementation:

Context: `changeRepositoryIfValid` will call `changeCurrentRepository` if repository is valid.

```javascript
// Test for behavior
it('should set current repository if repository is valid', async () => {
  githubServiceSpy.isRepositoryPresent.and.returnValue(of(true));

  await phaseService.changeRepositoryIfValid(WATCHER_REPO);

  expect(phaseService.currentRepo).toEqual(WATCHER_REPO);
});

// Test for implementation
it('should call changeRepository method if repository is valid', async () => {
  githubServiceSpy.isRepositoryPresent.and.returnValue(of(true));

  const changeCurrentRepositorySpy = spyOn(phaseService, 'changeCurrentRepository');

  await phaseService.changeRepositoryIfValid(WATCHER_REPO);

  expect(changeCurrentRepositorySpy).toHaveBeenCalledWith(WATCHER_REPO);
});
```

## Design Pattern

### Strategy Design Pattern

#### Summary
The Strategy design pattern allows for the selection of algorithms at runtime by defining a family of interchangeable algorithms and encapsulating each one. It enables flexibility and easy extension of functionality without modifying existing code.

#### Application in WATcher
I utilized the Strategy Design Pattern to implement a **"Group by"** feature that organizes issues / prs based on different criteria.

#### Implementation
- Grouping Strategy Interface ([`GroupingStrategy`](https://github.com/CATcher-org/WATcher/blob/main/src/app/core/services/grouping/grouping-strategy.interface.ts)): Defines a common interface for all supported grouping strategies.
- Concrete Grouping Strategy: Each strategy groups the issues/prs based on different criterias.
  - [`AssigneeGroupingStrategy`](https://github.com/CATcher-org/WATcher/blob/main/src/app/core/services/grouping/assignee-grouping-strategy.service.ts)
  - [`MilestoneGroupingStrategy`](https://github.com/CATcher-org/WATcher/blob/main/src/app/core/services/grouping/milestone-grouping-strategy.service.ts)
- Context ([`GroupingContextService`](https://github.com/CATcher-org/WATcher/blob/main/src/app/core/services/grouping/grouping-context.service.ts)): This service is used to apply the grouping strategies based on user selection.