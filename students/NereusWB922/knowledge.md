### Angular

#### **Attribute Directive**:
- **Summary**: Attribute directives can change the appearance or behavior of DOM elements and Angular components.
- **Resources**:
    - [Angular Documentation](https://angular.io/guide/attribute-directives): Provides guidelines on creating and applying attribute directive, covering user events handling and passing values to attribute directive.
- **Practice**:
    - [PR #1239](https://github.com/CATcher-org/CATcher/pull/1239): Created an attribute directive that listen to click event and will open error snackbar if the target link is an internal link.

#### **Components**:
- **Summary**: Components are the main building blocks for Angular. Each components consists of 3 files:
    - HTML: Defines the layout of the component's view.
    - CSS: Defines the component-specific styles.
    - Typescript: Implements the component's logic and behavior.
- **Resources**:
    - [Angular Documentation](https://angular.io/guide/component-overview): Provides guidelines on creating components.
    - Previous code by other developers: Learned from existing component implementations in the codebase.
- **Practice**:
    - [PR #233](https://github.com/CATcher-org/WATcher/pull/233): Edited exsiting component and created new component to improve WATcher activity dashboard.

### Jasmine 
Jasmine is a behavior-driven development framewrok specific for JavaScript unit testing.

I primarily learned how to use Jasmine from its [documentation](https://jasmine.github.io/api/edge/global). I utilized it extensively while working on WATcher test case refactoring. Some relevant PRs include: [PR #241](https://github.com/CATcher-org/WATcher/pull/241), [PR #244](https://github.com/CATcher-org/WATcher/pull/244), [PR #245](https://github.com/CATcher-org/WATcher/pull/245), [PR #246](https://github.com/CATcher-org/WATcher/pull/246), [PR #247](https://github.com/CATcher-org/WATcher/pull/247)

- **`describe`**: Define a group of spec (suite)
- **`it`**: Define a single spec.
- **`expect`**: Create an expectation for a spec.
- **Class `Spy`**: Mock functions (spies) that can be used to track function calls.