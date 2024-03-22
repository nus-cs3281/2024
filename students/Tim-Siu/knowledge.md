## markdown-it

MarkBind uses `markdown-it` for rendering html from markdown files. `markdown-it` is a fast markdown parser and has very extensive plugins support and great extensibility.

### Adding custom rules to `markdown-it` through adding a rule to `markdown-it`'s attribute

Adding custom rules to `markdown-it` can be done easily by adding a rule to the attribute.
For example, if we want to add our rules for rendering fenced code blocks, we can do so by adding a rule to the `markdown-it`'s attribute.

```javascript
markdownIt.renderer.rules.fence = (tokens: Token[],
                                   idx: number, options: Options, env: any, slf: Renderer) => {}
```

**Parameters**

* **tokens (Token[]):** An array of Token objects. Each token represents a segment of the parsed Markdown content. Tokens of particular interest for the fence rule include:
    - `token.type`: The type of the token (e.g., 'fence', 'code', 'paragraph').
    - `token.info`: Contains the language specified after the opening set of backticks, if any, plus additional options.
    - `token.content`: The text content within the fenced code block.
* **idx (number):** The index of the current `fence` token within the `tokens` array. This lets us find tokens before and after the fence if needed.
* **options (Options):** This object contains global options passed to the Markdown-it parser. This could include settings specific to our setup.
* **env (any):** An object containing environment variables and potentially additional data derived from the parsed Markdown. This can be useful for accessing context when defining rendering logic.
* **slf (Renderer):**  A reference to the Markdown-it Renderer object itself. This is primarily used when we need to call other rendering rules to process nested Markdown code within the fenced block.

**Purpose of the fence renderer rule**

The `markdownIt.renderer.rules.fence` function is responsible for taking a `fence` token (representing a fenced code block) and converting it into the appropriate HTML output. This could include syntax highlighting, if our setup supports it.

**How it Works**

Inside the function, we have access to all the information in the tokens, options, and the environment. We can craft custom logic to generate the desired HTML structure for our fenced code blocks. Here's a very basic example:

```javascript
markdownIt.renderer.rules.fence = (tokens, idx, options, env, slf) => {
  const token = tokens[idx];
  const content = token.content;
  const language = token.info.trim(); // Language after the opening backticks

  return `<pre><code class="language-${language}">${content}</code></pre>`;
};
```
---

## Cheerio

MarkBind uses Cheerio for parsing and manipulating the HTML structure of Markdown files after they have been processed by `markdown-it`. Cheerio is a fast, flexible, and lean implementation of core jQuery designed specifically for the server.

### Loading HTML into Cheerio

To use Cheerio, you first need to load HTML into it. This is done by passing the HTML string to the `cheerio.load` function.

```javascript
const $ = cheerio.load('<h2 class="title">Hello world</h2>');
```

The `$` variable now contains a Cheerio instance that wraps the parsed HTML, and can be used similarly to how you would use jQuery in the browser.

### Selecting Elements

Cheerio uses CSS selectors to select elements, just like jQuery. Here are some examples:

```javascript
// Select all h2 elements
$('h2');

// Select the element with id "main"
$('#main');

// Select all elements with class "text"
$('.text');

// Select all a tags within h2 elements
$('h2 a');
```

### Manipulating Elements

Once you have selected elements, you can manipulate them in various ways. Some common methods include:

- `addClass(className)`: Adds the specified class to the selected elements.
- `removeClass(className)`: Removes the specified class from the selected elements.
- `attr(attributeName, value)`: Gets or sets the value of the specified attribute.
- `text(newText)`: Gets or sets the text content of the selected elements.
- `html(newHtml)`: Gets or sets the inner HTML of the selected elements.
- `append(content)`: Appends the specified content to the end of each selected element.
- `prepend(content)`: Prepends the specified content to the beginning of each selected element.
- `remove()`: Removes the selected elements from the DOM.

Here's an example that demonstrates some of these methods:

```javascript
// Add the class "highlight" to all h2 elements
$('h2').addClass('highlight');

// Set the text of the element with id "title"
$('#title').text('New Title');

// Append a span to each paragraph
$('p').append('<span>Some appended text</span>');
```

### Rendering Back to HTML

After manipulating the parsed HTML with Cheerio, you can render it back to an HTML string using the `html` method.

```javascript
$.html();
//=> '<h2 class="title highlight">New Title</h2><p>Some text<span>Some appended text</span></p>'
```

This is useful when you need to save the manipulated HTML back to a file or send it as a response in a web application.

Cheerio provides a simple and efficient way to parse and manipulate HTML structures in MarkBind plugins, enabling powerful transformations of the rendered Markdown content.

---
## Vue.js

Vue.js is a progressive JavaScript framework for building user interfaces. It provides a declarative and component-based approach to UI development, making it easier to create and maintain complex applications.

### Custom Directives in Vue

Vue allows you to extend the behavior of HTML elements or Vue components through custom directives. Custom directives provide a way to encapsulate and reuse DOM manipulation logic across your application.

```javascript
Vue.directive('my-directive', {
  bind(el, binding, vnode) {
    // Directive initialization logic
  },
  inserted(el, binding, vnode) {
    // Logic to be executed when the directive is inserted into the DOM
  },
  update(el, binding, vnode, oldVnode) {
    // Logic to be executed when the directive's bound value changes
  },
  componentUpdated(el, binding, vnode, oldVnode) {
    // Logic to be executed after the containing component's VNode has updated
  },
  unbind(el, binding, vnode) {
    // Cleanup logic when the directive is unbound from the element
  }
})
```

**Parameters**

* **el (HTMLElement):** The DOM element the directive is bound to. This allows you to perform direct DOM manipulations or access the element's properties.
* **binding (DirectiveBinding):** An object containing the directive's binding information, including:
  - `binding.value`: The value passed to the directive. It can be a primitive value, an object, or a function.
  - `binding.oldValue`: The previous value of the directive, only available in the `update` and `componentUpdated` hooks.
  - `binding.arg`: The argument passed to the directive, if any, denoted by a colon (e.g., `v-my-directive:arg`).
  - `binding.modifiers`: An object containing any modifiers applied to the directive (e.g., `v-my-directive.modifier`).
* **vnode (VNode):** The virtual node representing the bound element. It provides access to the Vue instance properties and methods.
* **oldVnode (VNode):** The previous virtual node, only available in the `update` and `componentUpdated` hooks.

**Directive Lifecycle Hooks**

Custom directives have access to several lifecycle hooks that allow you to execute logic at different stages:

* **bind:** Called once when the directive is first bound to the element. This is where you can perform any one-time setup or initialization.
* **inserted:** Called when the bound element is inserted into the parent node. This is a good place to execute logic that relies on the element being in the DOM.
* **update:** Called whenever the bound value of the directive changes. You can compare the current and old values and perform updates accordingly.
* **componentUpdated:** Called after the containing component's VNode and the VNodes of its children have updated.
* **unbind:** Called when the directive is unbound from the element. This is where you can perform any necessary cleanup or teardown logic.

**Usage**

To use a custom directive, you can attach it to an element or component using the `v-` prefix followed by the directive name. For example:

```html
<div v-my-directive="value"></div>
```

In this case, `my-directive` is the name of the custom directive, and `value` is the value being passed to the directive.

Custom directives provide a powerful way to encapsulate and reuse DOM manipulation logic in Vue applications. They allow you to extend the behavior of elements and solve specific problems related to integrating external libraries or custom functionality.

### Solving Issues with Third-Party Library Integration

When integrating third-party libraries into Vue components, you may encounter scenarios where the library's initialization script doesn't work as expected within the component's lifecycle. This can happen due to timing differences between the library's initialization and the component's rendering process.

One common issue is when a library relies on the presence of certain DOM elements during its initialization, but those elements are dynamically rendered by the Vue component and may not be available when the library's initialization script runs.

To solve this problem, you can leverage Vue's custom directives. By creating a custom directive that handles the library's initialization logic, you can ensure that the initialization happens at the appropriate time within the component's lifecycle.

Here's an example of how you can create a custom directive to initialize a third-party library on a specific element:

```javascript
Vue.directive('my-library', {
  inserted(el) {
    // Initialize the library on the element
    myLibrary.init(el);
  },
  unbind(el) {
    // Cleanup the library when the directive is unbound
    myLibrary.destroy(el);
  }
})
```

In this example, the `my-library` directive is responsible for initializing the `myLibrary` on the bound element when it is inserted into the DOM. It also handles the cleanup process when the directive is unbound from the element.

To use this directive in a Vue component, you can simply attach it to the desired element:

```html
<template>
  <div v-my-library>
    <!-- Element content -->
  </div>
</template>
```

By using the custom directive, you ensure that the library initialization happens at the appropriate time within the component's lifecycle, solving the issue of initialization timing.

---
*Content partly generated by GenAI.*
