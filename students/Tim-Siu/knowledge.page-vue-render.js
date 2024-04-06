
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"markdown-it"}},[_v("markdown-it"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markdown-it","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(" for rendering html from markdown files. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(" is a fast markdown parser and has very extensive plugins support and great extensibility.")]),_v(" "),_c('h3',{attrs:{"id":"adding-custom-rules-to-markdown-it-through-adding-a-rule-to-markdown-it-s-attribute"}},[_v("Adding custom rules to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(" through adding a rule to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v("'s attribute"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-custom-rules-to-markdown-it-through-adding-a-rule-to-markdown-it-s-attribute","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Adding custom rules to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(" can be done easily by adding a rule to the attribute.\nFor example, if we want to add our rules for rendering fenced code blocks, we can do so by adding a rule to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v("'s attribute.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_v("markdownIt.renderer.rules.fence = "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("tokens: Token[],")])]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("                                   idx: number, options: Options, env: any, slf: Renderer")]),_v(") =>")]),_v(" {}\n")])])]),_c('p',[_c('strong',[_v("Parameters")])]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("tokens (Token[]):")]),_v(" An array of Token objects. Each token represents a segment of the parsed Markdown content. Tokens of particular interest for the fence rule include:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("token.type")]),_v(": The type of the token (e.g., 'fence', 'code', 'paragraph').")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("token.info")]),_v(": Contains the language specified after the opening set of backticks, if any, plus additional options.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("token.content")]),_v(": The text content within the fenced code block.")])])]),_v(" "),_c('li',[_c('strong',[_v("idx (number):")]),_v(" The index of the current "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fence")]),_v(" token within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tokens")]),_v(" array. This lets us find tokens before and after the fence if needed.")]),_v(" "),_c('li',[_c('strong',[_v("options (Options):")]),_v(" This object contains global options passed to the Markdown-it parser. This could include settings specific to our setup.")]),_v(" "),_c('li',[_c('strong',[_v("env (any):")]),_v(" An object containing environment variables and potentially additional data derived from the parsed Markdown. This can be useful for accessing context when defining rendering logic.")]),_v(" "),_c('li',[_c('strong',[_v("slf (Renderer):")]),_v("  A reference to the Markdown-it Renderer object itself. This is primarily used when we need to call other rendering rules to process nested Markdown code within the fenced block.")])]),_v(" "),_c('p',[_c('strong',[_v("Purpose of the fence renderer rule")])]),_v(" "),_c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdownIt.renderer.rules.fence")]),_v(" function is responsible for taking a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fence")]),_v(" token (representing a fenced code block) and converting it into the appropriate HTML output. This could include syntax highlighting, if our setup supports it.")]),_v(" "),_c('p',[_c('strong',[_v("How it Works")])]),_v(" "),_c('p',[_v("Inside the function, we have access to all the information in the tokens, options, and the environment. We can craft custom logic to generate the desired HTML structure for our fenced code blocks. Here's a very basic example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_v("markdownIt.renderer.rules.fence = "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("tokens, idx, options, env, slf")]),_v(") =>")]),_v(" {\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" token = tokens[idx];\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" content = token.content;\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" language = token.info.trim(); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Language after the opening backticks")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("`<pre><code class=\"language-"),_c('span',{pre:true,attrs:{"class":"hljs-subst"}},[_v("${language}")]),_v("\">"),_c('span',{pre:true,attrs:{"class":"hljs-subst"}},[_v("${content}")]),_v("</code></pre>`")]),_v(";\n")]),_c('span',[_v("};\n")])])]),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"cheerio"}},[_v("Cheerio"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cheerio","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind uses Cheerio for parsing and manipulating the HTML structure of Markdown files after they have been processed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(". Cheerio is a fast, flexible, and lean implementation of core jQuery designed specifically for the server.")]),_v(" "),_c('h3',{attrs:{"id":"loading-html-into-cheerio"}},[_v("Loading HTML into Cheerio"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#loading-html-into-cheerio","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("To use Cheerio, you first need to load HTML into it. This is done by passing the HTML string to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cheerio.load")]),_v(" function.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" $ = cheerio.load("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'<h2 class=\"title\">Hello world</h2>'")]),_v(");\n")])])]),_c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("$")]),_v(" variable now contains a Cheerio instance that wraps the parsed HTML, and can be used similarly to how you would use jQuery in the browser.")]),_v(" "),_c('h3',{attrs:{"id":"selecting-elements"}},[_v("Selecting Elements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#selecting-elements","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Cheerio uses CSS selectors to select elements, just like jQuery. Here are some examples:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Select all h2 elements")]),_v("\n")]),_c('span',[_v("$("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'h2'")]),_v(");\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Select the element with id \"main\"")]),_v("\n")]),_c('span',[_v("$("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'#main'")]),_v(");\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Select all elements with class \"text\"")]),_v("\n")]),_c('span',[_v("$("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'.text'")]),_v(");\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Select all a tags within h2 elements")]),_v("\n")]),_c('span',[_v("$("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'h2 a'")]),_v(");\n")])])]),_c('h3',{attrs:{"id":"manipulating-elements"}},[_v("Manipulating Elements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#manipulating-elements","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Once you have selected elements, you can manipulate them in various ways. Some common methods include:")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addClass(className)")]),_v(": Adds the specified class to the selected elements.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("removeClass(className)")]),_v(": Removes the specified class from the selected elements.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("attr(attributeName, value)")]),_v(": Gets or sets the value of the specified attribute.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("text(newText)")]),_v(": Gets or sets the text content of the selected elements.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("html(newHtml)")]),_v(": Gets or sets the inner HTML of the selected elements.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("append(content)")]),_v(": Appends the specified content to the end of each selected element.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("prepend(content)")]),_v(": Prepends the specified content to the beginning of each selected element.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remove()")]),_v(": Removes the selected elements from the DOM.")])]),_v(" "),_c('p',[_v("Here's an example that demonstrates some of these methods:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Add the class \"highlight\" to all h2 elements")]),_v("\n")]),_c('span',[_v("$("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'h2'")]),_v(").addClass("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'highlight'")]),_v(");\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Set the text of the element with id \"title\"")]),_v("\n")]),_c('span',[_v("$("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'#title'")]),_v(").text("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'New Title'")]),_v(");\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Append a span to each paragraph")]),_v("\n")]),_c('span',[_v("$("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'p'")]),_v(").append("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("'<span>Some appended text</span>'")]),_v(");\n")])])]),_c('h3',{attrs:{"id":"rendering-back-to-html"}},[_v("Rendering Back to HTML"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rendering-back-to-html","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("After manipulating the parsed HTML with Cheerio, you can render it back to an HTML string using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("html")]),_v(" method.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_v("$.html();\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("//=> '<h2 class=\"title highlight\">New Title</h2><p>Some text<span>Some appended text</span></p>'")]),_v("\n")])])]),_c('p',[_v("This is useful when you need to save the manipulated HTML back to a file or send it as a response in a web application.")]),_v(" "),_c('p',[_v("Cheerio provides a simple and efficient way to parse and manipulate HTML structures in MarkBind plugins, enabling powerful transformations of the rendered Markdown content.")]),_v(" "),_c('p',[_c('em',[_v("Content partly generated by GenAI.")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sat, 6 Apr 2024, 12:55:31 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  