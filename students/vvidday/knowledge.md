### Vue & Options API

Although I was already familiar with Vue, I only ever used the newer composition API, and thus had to learn the Options API that is used in the frontend of RepoSense.

I got familiar with the API as I worked through the implementation of [this PR](https://github.com/reposense/RepoSense/pull/1866), which involved a decent amount of refactoring across multiple Vue files. The main resource that I used was the [official Vue docs](https://vuejs.org/guide/introduction.html), as it provides a comprehensive yet easy to understand overview of the different concepts. Additionally, it has a toggle to switch between the Composition API and Options API for each page of the documentation, allowing people who are already familiar with one to easily pick up the other.

Here are some of the main things that I learnt:

####  Importance of computed properties
In RepoSense, there are many properties that we need to calculate/obtain when other properties are changed. For instance, in the zoom panel, we need to maintain a list of commits to be displayed. This list needs to be re-calculated based on other properties, such as the author that is currently selected, the filters applied to the commits (e.g. only show commits in `.js` files), etc. In Vue, such properties should be implemented as a **computed property** under the `computed` object in the export.

The main advantage of computed properties are that they are **cached**, and are only re-computed when one of their reactive dependencies are changed. In the above example, this would be equivalent to our list of displayed commits only being re-computed when the currently selected author is changed, or a filter is added/removed. This **significantly improves performance**, as if we were to implement the computation of a list in a normal method, it will be re-computed on *every* re-render, even if the re-render was triggered by an unrelated reactive item - resulting in the unnecessary re-computation of the same value. In a frontend application like RepoSense's reports where there are many such properties, utilising Vue's computed properties provides a much needed performance boost.

#### Avoiding direct manipulation of DOM
One of the main advantages of using a framework like Vue is that certain aspects relating to modifying the DOM are abstracted away from the user. Vue handles reactivity for the user, by updating the DOM when reactive state is mutated. Hence, problems can arise when users bypass this functionality of Vue and manually modify the DOM within Vue components. This is because Vue has no knowledge of these modifications, resulting in potential modifications clashing with Vue's mutation of the DOM.

[This PR](https://github.com/reposense/RepoSense/pull/1866) involved deprecating the use of a method that manually modified the DOM in order to toggle the show/hide state of commits. This method of toggling commits involved a manual mutation of a CSS class, while there was a synchronous method that calculated and updated the number of shown/hidden commits based on this CSS class, which was stored in a reactive variable. However, since Vue's updates to the DOM are asynchronous, this resulted in the variable always being one action behind the 'true' state, which caused an incorrect display of the show/hide all commit messages text. This problem was fixed by working 'within' Vue - modifying a reactive variable on toggle change, and letting Vue handle the DOM mutation. Hence, we should always try to solve the problem within the framework, and try as best as possible to avoid direct mutations of the DOM.

#### Deep vs Shallow copy when passing data
When passing data between components, care should always be taken with regard to how the data is passed, and the consequences of any mutations of that data. If mutations to data only make sense within the context of a particular component, then it is preferable to pass a deep copy of the data to prevent said mutations from changing behaviour outside of its scope.

### Cypress testing

RepoSense utilizes [Cypress](https://www.cypress.io/) for E2E testing, where the tests run in an actual browser that accesses the entire web page by URL, as opposed to only a particular view/component. The [Cypress docs](https://docs.cypress.io/guides/overview/why-cypress) is a great resource for learning how to write tests, and was the main resource that I used when learning.

#### Test Isolation
One of the main things that confused me at first was why Cypress was configured to 'start from scratch' for each test case, i.e. it starts from the beginning of the RepoSense report/from a reload of the entire app for every single test case. After reading the corresponding page of the [docs](https://docs.cypress.io/guides/core-concepts/test-isolation), I learnt that this was important to ensure the consistency & usefulness of each individual test case. By resetting the DOM state before each test, it ensures that each test functions independently, which in turn ensures that the running of any test does not impact the outcome of other tests. Otherwise, there might be a scenario where test case A passes, but causes a change that results in test case B failing. In this case, the results of the tests might be misleading, as the failure was a result of actions not confined within the test case itself.

Along a similar line, testing of functionality should be isolated whenever possible. One of the test cases that I wrote was to test that the toggle state of a file persisted after sort. My original idea was to toggle the state of the first file, then change the sort order from 'descending' to 'ascending' and checking the toggle state of the last file. However, this implementation relies on the correctness of the sort functionality, and hence an error in the sorting function might result in this test case failing, which would be misleading. Therefore, in the [actual implementation](https://github.com/reposense/RepoSense/commit/1dd4ab44a1981023169f65ead4b24588c6344052#diff-c6e7d02d4131f1788f7ec1dc99e38edcee54f91e0774bc821361cc55d307b769R121), the file is tracked by file path and searched for after the sort, which isolates this test case from the correctness of the sort functionality.

### TypeScript
#### Importance of enums
TypeScript [supports enums](https://www.typescriptlang.org/docs/handbook/enums.html) similar to other languages like Java. Having enums is very convenient when you want to restrict a variable to a certain set of values, instead of an entire type. For instance, in RepoSense, there are many instances where variables only take specific values, such as a sort type only having valid values equal to "groupByNone", "groupByRepos" and "groupByAuthors".

In this instance, typing the variable as a `string` would technically be correct, and it would detect errors in the scenario where the variable is set to other types. However, it does not detect errors in the case where the variable is an invalid string, such as `GroupByNone` or `groupByNon`. This can easily occur due to a developer error, as the string is also manually referenced throughout the codebase (e.g. `filterType = 'groupByNone'`, `if (filterType === 'groupByNone'))`) etc. If a typo was made in one of these references, it would still compile properly without warnings, but the bug would exist in production. Using enums helps us twofold - first, we can replace all manual references with the enum instead (e.g. `filterType = FilterGroupSelection.GroupByNone`, `if (filterType === FilterGroupSelection.GroupByNone)`), which would prevent any individual typos (and a typo such as `FilterGroupSelection.GroupByNon` will fail to compile as the type does not exist), and secondly, if we want to change the string itself, we just have to change it in the enum definition instead of everywhere in the codebase.

#### Type Predicates
Often, we have objects of similar types that work closely together (for instance, both stored in the same array), and we might have to distinguish between them in certain circumstances. For instance, in RepoSense, when we initially read the commits from the report generated by the backend, we store these commits as a certain type, but in the frontend we process these raw commits to add certain attributes to form a different type that inherits from the former. Hence, in the codebase, it is important to distinguish between these two types.

In order to narrow the type (e.g. if we have an object that can be either one of the two types but we want to be certain which one it is), we can use [Type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates), which narrows down the object type **based on the compatability of that object**. For instance, in RepoSense, I used [this type predicate](https://github.com/vvidday/RepoSense/blob/c9048f56a2a2c67b559c89b50b05b4db2bb5e066/frontend/src/types/types.ts#L30) to differentiate between the `Commit` and `DailyCommit` type. The `Commit` type extends `DailyCommit`, but has an optional field `deletions`. The type predicate checks whether the field `deletions` exists on the object, and uses that to determine the type of the provided object. This is used in code where we have a bunch of objects which are minimally `Commit`s, but we are not sure if they are `DailyCommit`s. The type predicate allows us to distinguish this, and therefore safely access the appropriate objects (that have the `deletions` field) as `DailyCommit`s.

#### Type inference vs Explicit types
One difference between TypeScript and traditionally strongly typed languages is the **type inference** feature of the TypeScript compiler. In TypeScript, in certain cases such as function return types, the compiler can infer the type of the return object from the code itself without explicit declaration from the programmer. For instance, consider the following code:
```typescript
function double(x: number) {
  return x*2;
}
```
TypeScript automatically infers the return type to be `number` in this case. Of course, we can define the return type explicitly:
```typescript
function double(x: number): number {
  return x*2;
}
```
Which in this case would be functionally equivalent, with a small difference being explicit declaration reduces overhead, as the compiler doesn't need to do the inference. However, aside from that, at first glance explicit declaration *seems* redundant, as the compiler can do inference. However, solely relying on inference can be prone to bugs, because the compiler assumes that your function definition is correct. Consider this example:
```typescript
function double(x: number) {
  return (x*2).toString();
}
```
Although the above is an obvious bug (assuming we want double to return a number), the TypeScript compiler doesn't know what the user wants, and so happily infers the return type as string. Essentially, the compiler will never throw an error on inference, because it assumes the user's function implementation is correct (as it doesn't know the user's intention).
However, if we know that we want the `double` function to return a number, and use an explicit return type declaration, the same code will result in an error:
```typescript
function double(x: number): number {
  return (x*2).toString();
}
```
Hence, there *is* value in explicit type declarations, which is essentially telling the TypeScript compiler "I expect the function to return this", which allows TypeScript to check whether our function does indeed return the expected type, which adds value and improves type safety.
