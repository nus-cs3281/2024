
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"markdown-it"}},[_v("markdown-it"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#markdown-it","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("MarkBind uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(" for rendering html from markdown files. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(" is a fast markdown parser and has very extensive plugins support and great extensibility.")]),_v(" "),_c('h3',{attrs:{"id":"adding-custom-rules-to-markdown-it-through-adding-a-rule-to-markdown-it-s-attribute"}},[_v("Adding custom rules to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(" through adding a rule to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v("'s attribute"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-custom-rules-to-markdown-it-through-adding-a-rule-to-markdown-it-s-attribute","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Adding custom rules to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v(" can be done easily by adding a rule to the attribute.\nFor example, if we want to add our rules for rendering fenced code blocks, we can do so by adding a rule to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdown-it")]),_v("'s attribute.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_v("markdownIt.renderer.rules.fence = "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("tokens: Token[],")])]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("                                   idx: number, options: Options, env: any, slf: Renderer")]),_v(") =>")]),_v(" {}\n")])])]),_c('p',[_c('strong',[_v("Parameters")])]),_v(" "),_c('ul',[_c('li',[_c('strong',[_v("tokens (Token[]):")]),_v(" An array of Token objects. Each token represents a segment of the parsed Markdown content. Tokens of particular interest for the fence rule include:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("token.type")]),_v(": The type of the token (e.g., 'fence', 'code', 'paragraph').")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("token.info")]),_v(": Contains the language specified after the opening set of backticks, if any, plus additional options.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("token.content")]),_v(": The text content within the fenced code block.")])])]),_v(" "),_c('li',[_c('strong',[_v("idx (number):")]),_v(" The index of the current "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fence")]),_v(" token within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tokens")]),_v(" array. This lets us find tokens before and after the fence if needed.")]),_v(" "),_c('li',[_c('strong',[_v("options (Options):")]),_v(" This object contains global options passed to the Markdown-it parser. This could include settings specific to our setup.")]),_v(" "),_c('li',[_c('strong',[_v("env (any):")]),_v(" An object containing environment variables and potentially additional data derived from the parsed Markdown. This can be useful for accessing context when defining rendering logic.")]),_v(" "),_c('li',[_c('strong',[_v("slf (Renderer):")]),_v("  A reference to the Markdown-it Renderer object itself. This is primarily used when we need to call other rendering rules to process nested Markdown code within the fenced block.")])]),_v(" "),_c('p',[_c('strong',[_v("Purpose of the fence renderer rule")])]),_v(" "),_c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("markdownIt.renderer.rules.fence")]),_v(" function is responsible for taking a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fence")]),_v(" token (representing a fenced code block) and converting it into the appropriate HTML output. This could include syntax highlighting, if our setup supports it.")]),_v(" "),_c('p',[_c('strong',[_v("How it Works")])]),_v(" "),_c('p',[_v("Inside the function, we have access to all the information in the tokens, options, and the environment. We can craft custom logic to generate the desired HTML structure for our fenced code blocks. Here's a very basic example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_v("markdownIt.renderer.rules.fence = "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("tokens, idx, options, env, slf")]),_v(") =>")]),_v(" {\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" token = tokens[idx];\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" content = token.content;\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" language = token.info.trim(); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// Language after the opening backticks")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("`<pre><code class=\"language-"),_c('span',{pre:true,attrs:{"class":"hljs-subst"}},[_v("${language}")]),_v("\">"),_c('span',{pre:true,attrs:{"class":"hljs-subst"}},[_v("${content}")]),_v("</code></pre>`")]),_v(";\n")]),_c('span',[_v("};\n")])])]),_c('h3',{attrs:{"id":"tool-technology-2"}},[_v("Tool/Technology 2"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tool-technology-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("...")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Fri, 1 Mar 2024, 9:46:14 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  