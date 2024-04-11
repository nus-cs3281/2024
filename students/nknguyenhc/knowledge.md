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

One thing to note about RxJS operator is that, `Observable` pipes are treated as functions, in a sense that they are only called when there is a subscriber. If there are multiple pipes merged into one, each individual pipes are called when there is a subscriber. Consider this example:

```ts
Observable a = from(); // some declaration
Observable b = a.pipe(f);
Observable x = b.pipe(g);
Observable y = b.pipe(h);
Observable c = merge(x, y);
c.subscribe();
```

Notice that `c` is a merged `Observable` from pipes of `f, g` and `f, h`. So, `g` and `h` each are called once, but `f` is called twice! Imagine if `f` is a function making multiple API calls to Github.

This knowledge allows me to [reduce Github API calls for issues](https://github.com/CATcher-org/WATcher/pull/360/files#diff-7006ea7c06fd1129a5fc2c0aefbf660f5b2ddf1821ede1c269a2f8f1a9c971bc). To get issues from a repository, one must make multiple API calls, each obtaining 100 issues. These API calls are contained within the function `f`. So instead of splitting the pipe, I refactored to merge `g` and `h` and continue the pipe from `b`:

```ts
Observable a = from(); // some declaration
Observable b = a.pipe(f);
Observable c = b.pipe(merge(g, h));
c.subscribe();
```
