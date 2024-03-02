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


### Tool/Technology 2

...
