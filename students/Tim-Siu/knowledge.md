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

*Content partly generated by GenAI.*
