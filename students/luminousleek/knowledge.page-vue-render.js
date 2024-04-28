
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"css-flexbox"}},[_v("CSS Flexbox"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#css-flexbox","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Flexbox is used to order, align and space out items in a one dimensional container (i.e. a row or a column), even when the size of the items are unknown or dynamic.")]),_v(" "),_c('p',[_v("Items can be given a default size ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex-basis")]),_v("), and can also grow ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex-grow")]),_v(") and shrink ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex-shrink")]),_v(") according to the extra space in the container (or lack thereof). These three properties can be controlled with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex")]),_v(" property, e.g.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs css"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-selector-class"}},[_v(".item")]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attribute"}},[_v("flex")]),_v(": "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("0")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("10%")]),_v("\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("where the three parameters correspond to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex-grow")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex-shrink")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex-basis")]),_v(" respectively. In this case, the default width of the item is 10% of the width of the container, and it does not grow nor shrink relative to the other items (assuming the other items also have their "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex")]),_v(" property set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("0 1 auto")]),_v(").")]),_v(" "),_c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flex-basis")]),_v(" property can also be set to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("content")]),_v(" keyword, where the width of the item is based on the content within the item (e.g. if it contains text, then the width of the item is the length of the text string). This allows for dynamically sized items within the container, which may enable the layout to look cleaner.")]),_v(" "),_c('p',[_v("For a helpful summary of flexbox properties, visit "),_c('a',{attrs:{"href":"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}},[_v("https://css-tricks.com/snippets/css/a-guide-to-flexbox/")])]),_v(" "),_c('h3',{attrs:{"id":"prettier-husky-and-pretty-quick"}},[_v("Prettier, husky and pretty-quick"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#prettier-husky-and-pretty-quick","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Prettier is a tool to format code according to a given code style automatically. Unlike a linter such as TSLint, prettier only cares about formatting, rather than detecting programming errors. Prettier supports both Typescript and Angular, which CATcher is written in.")]),_v(" "),_c('p',[_v("Since it is quite wasteful to run prettier to format the entire codebase every time a change is made, so a more efficient method is to format the codebase once, and then format only the changes made during each commit.")]),_v(" "),_c('p',[_v("This is where the husky tool comes in, which enables hooks to be run before each commit. The relevant hook here is pretty-quick, and this formats the changed/staged files during each commit. This frees developers from having to fuss with maintaining code formatting or fixing formatting mistakes, leading to less frustration.")]),_v(" "),_c('p',[_v("For more information, visit "),_c('a',{attrs:{"href":"https://prettier.io"}},[_v("Prettier")]),_v(" and "),_c('a',{attrs:{"href":"https://typicode.github.io/husky/"}},[_v("husky")])]),_v(" "),_c('h3',{attrs:{"id":"arcsecond"}},[_v("Arcsecond"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#arcsecond","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://github.com/francisrstokes/arcsecond"}},[_v("Arcsecond")]),_v(" is a zero-dependency parser combinator library for Javascript that is now being used in CATcher to parse GitGub issues and comments.")]),_v(" "),_c('p',[_v("Previously in order to parse the  comments, we used the regex string "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("(${headerString})\\\\s+([\\\\s\\\\S]*?)(?=${headerString}|$)\\gi")]),_v(" which is neither human readable nor maintainable. In addition, this string only finds matches - more regex is used to extract relevant information from the comments.")]),_v(" "),_c('p',[_v("In comparison, arcsecond offers human friendly parsers such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("str")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("char")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("letters")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("digits")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("between")]),_v(" and so on, and these parsers can be composed and run in sequence. This makes building and maintaining parsers much easier. In addition, arcsecond also allows you to extract certain information from a string (as opposed to the entire string) by way of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("coroutine")]),_v(" parser.")]),_v(" "),_c('p',[_v("For example, take the string \"Today is Wednesday and the weather is 30 degrees Celsius\", and you want to extract the day (Wednesday) and the temperature (30). One parser that can achieve that is:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs typescript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" dayWeatherParser = coroutine("),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("function")]),_v("*("),_c('span',{pre:true,attrs:{"class":"hljs-params"}}),_v(") ")]),_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("yield")]),_v(" str("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"Today is \"")]),_v("); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// parse and ignore")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" day = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("yield")]),_v(" letters; "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// parse 'Wednesday' and store")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("yield")]),_v(" str("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\" and the weather is \"")]),_v("); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// parse and ignore")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("const")]),_v(" temperature = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("yield")]),_v(" digits; "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// parse '30' and store")]),_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("yield")]),_v(" str("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\" degrees Celsius\"")]),_v("); "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("// parse and ignore")]),_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("day")]),_v(": day,\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-attr"}},[_v("temperature")]),_v(": temperature\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("})\n")])])]),_c('p',[_v("This allows us to build complex and versatile parsers easily, yet in a way that is clear and understandable. For more information, check out the "),_c('a',{attrs:{"href":"https://github.com/francisrstokes/arcsecond/blob/master/tutorial/tutorial-part-1.md"}},[_v("tutorial here")])]),_v(" "),_c('h3',{attrs:{"id":"jasmine"}},[_v("Jasmine"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#jasmine","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://jasmine.github.io/"}},[_v("Jasmine")]),_v(" is a testing framework for Javascript code. In Jasmine, test suites are functions in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("describe")]),_v(" blocks, and each spec is also a function in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("it")]),_v(" block.")]),_v(" "),_c('p',[_v("For example, here is a suite that tests a certain function:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs typescript"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("function")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("testMethod")]),_v("("),_c('span',{pre:true,attrs:{"class":"hljs-params"}}),_v(") ")]),_v("{\n")]),_c('span',[_v("  "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v(";\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("describe("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"testMethod suite\"")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("() =>")]),_v(" {\n")]),_c('span',[_v("  it("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"testMethod should return true\"")]),_v(", "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("() =>")]),_v(" {\n")]),_c('span',[_v("    expect(testMethod()).toBe("),_c('span',{pre:true,attrs:{"class":"hljs-literal"}},[_v("true")]),_v(");\n")]),_c('span',[_v("  });\n")]),_c('span',[_v("});\n")])])]),_c('p',[_v("Expectations are built with the function "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("expect")]),_v(" which takes a value ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("testMethod()")]),_v(" in the example above), and is chained with a "),_c('a',{attrs:{"href":"https://jasmine.github.io/api/edge/matchers.html"}},[_v("Matcher")]),_v(" such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toBe")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toEqual")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("toBeGreaterThan")]),_v(". This provides greater flexibility than say JUnit's assert methods, since one assert method corresponds to one condition.")]),_v(" "),_c('p',[_v("Since test suites and specs are functions, normal Javascript scoping rules apply, so variables can be shared between specs. In addition, there are separate setup and teardown methods such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("beforeEach")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("afterAll")]),_v(".")]),_v(" "),_c('p',[_v("For more information, check out the "),_c('a',{attrs:{"href":"https://jasmine.github.io/tutorials/your_first_suite"}},[_v("Your First Suite tutorial here")])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 28 Apr 2024, 8:29:45 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  