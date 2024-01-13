### Angular 

Having had experience in mainly React and NodeJS projects earlier, I was overall more used to creating projects with Functional Components, rather than Class Components as with Angular. However, I realised that one of the key aspects of frontend frameworks, namely reactivity, was in fact the main drivers of development of such frameworks in the first place!

In fact, even React were originally championing the idea of Class Components in order to isolate various web components into areas or responsibility, following rule number 1 of Software Engineering: Single Responsibility. However, while React is largely unopinionated in how you structure your code with regards to the coupling of business logic and HTML, Angular differs by dictating where and how you structure your components.

Angular separates components into modules which comprise of 3 to 4 files: 
- Components, which are necessarily TypeScript classes which have the `@Component` decorator;
- Templates, which dictate the HTML that is produced and rendered by the component;
- Styles, which dictate the type of styling to apply to the component.
- Module, which indicate the modules or services that are to be imported by the component. Interestingly, 

On the other hand, React only dictates that class components should produce some sort of HTML using the render function. Even this is removed with the introduction of Functional Components that are simply functions which render and produce some HTML. React introduces hooks which are often used by developers to manage some state at the component level, using functions with side effects.

Each method has its positives and negatives. Because of its opinionated nature, Angular makes it easy to standardize frontend coding standards and pattern across an entire enterprise, making it an apt choice to use as a tool for OSS development. On the other hand, React allows you to develop code more quickly, with more attention needed to be paid at the rendering lifecycles in order to let the Virtual DOM know when a particular component needs to be rendered again. On top of this, Angular wholely separates business logic from rendered HTML, whereas React takes the does not make this distinction.

Another key point is how React and Angular differentiate in providing context (sharing or passing down state between different branches of the DOM tree). React has its own Context API that is used to share some sort of state between different components, whereas Angular does this by the `providers` declaration in the module folder, which results in a set of singletons that are shared by components that exist below it in the tree. 

### RxJS

I also picked up RxJS along the way, which was Angular's answer to creating reactive components. RxJS essentially deals with asynchronous pipe/filter, publisher/subscriber behavior which allows values to change and other components or functions to subscribe to these changes. This works considering Angular's Change Detection strategy which I will explain later.

In comparison, React introduced and adopted hooks to encapsulate the behavior of having to rerender. React does this by operating on a Virtual DOM, and appropriately rerendering components and their children in patches when a change was detected. On the other hand, Angular does not have any abstraction to operate and rerender components whose state have changed. Instead, Angular uses a Change Detection Strategy which can be configured by the user (either onPush or Default). Angular Change Detection works by using Zone.js and activating after every async action performed. CD traversal starts at the root component (usually App) and works its way down the component tree updating the DOM as needed. What's happening under the hood is that browser events are registered into Zone.js - Angular's mechanism for orchestrating async events - which emits changes after initial template bindings are created.
...