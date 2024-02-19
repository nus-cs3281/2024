### Angular

Of course, Angular is the framework used to run CATcher and WATcher, so learning how it works is an essential part of contributing to the projects. These projects are my first experience using Angular.

As I have experienced React.js and Alpine.js, with experience of working in frontend development during my internship, I expected to pick up Angular with ease. However, slightly different from my expectation, the OOP aspect of Angular makes it quite difficult to pick up.

There are a few interesting concepts that I picked up along the way:
* Each class is decorated with `@Component` to mark it as an Angular component. This decorator determines a few important properties of the component, including the query selector, the HTML template and the stylesheets.
* Class fields, if used in HTML templates, updates the rendered HTML template if its value is changed. In React.js, this is only possible with a state hook.
* Dependencies of a component can be injected from root using factory methods, and does not have to be explicitly instantiated.

The knowledge of how a component is declared allows me to confidently create a new component in [WATcher-PR#235](https://github.com/CATcher-org/WATcher/pull/235), which was the component to show a list of users with 0 PRs and issues.

One interesting thing about Angular is that it provides a few methods that developers can make use of, to reduce the complexity of component class. This knowledge allows me to make [WATcher-PR#230](https://github.com/CATcher-org/WATcher/pull/230), where I directly modified the Angular model used in the HTML template.

### RxJS

I initially had a lot of trouble trying to understand the operators in RxJS. Ultimately, I was able to understand how it works, and the differences between different operators on an `Observable`. I was able to see the similarities between different RxJS operators and Java `stream` methods.
* `Observable::pipe` allows methods to modify the value within the `Observable`, notably with `map` and `mergeMap`.
* `Observable::subscribe` listens for changes within the `Observable`.

The knowledge of RxJS operators allow me to modify the underlying processes of the Angular services, and created [CATcher-PR#1234](https://github.com/CATcher-org/CATcher/pull/1234), where I set branch for image uploads to `main`.
