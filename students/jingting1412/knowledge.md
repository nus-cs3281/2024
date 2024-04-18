### Vue and Jest/Vue Test Utils

While working with Vue components this semester, I've learned more about `props` and `script` in vue when working on the template for panels through adding a new prop `isSeamless` and writing new script for the panel component.

MarkBind uses Jest together with Vue Test Utils for its snapshot tests, which test Vue components against their expected snapshots. While updating the component, I wrote new tests to ensure that the Vue components are working as expected. 

#### Resources
- [Vue official documentation](https://vuejs.org/guide/introduction.html)
- [Vue test utils documentation](https://v1.test-utils.vuejs.org/)

### ESM/CJS interoperality

An interesting issue I've encountered this semester while researching on integrating a full search functionality is the issue of importing esm like `pagefind` into cjs modules. CommonJS uses the `require('something')` syntax for importing other modules and ESM uses the `import {stuff} from './somewhere'` syntax for importing. 

Another crucial difference is that **CJS imports are synchronous** while **ESM imports are asynchronous**. As such, when importing ES modules into CJS, the normal `require('pagefind')` syntax would result in an error. Instead, you'll need to use `await import('pagefind')` to asynchronously import the module. This difference in imports is something that should be taken note of since we use both the ESM `import` syntax and CJS `require` syntax in various files in MarkBind.

### Resources
- [This blog post by Adam Coster](https://adamcoster.com/blog/commonjs-and-esm-importexport-compatibility-examples)
- [Typescript ESM/CJS Interoperability](https://www.typescriptlang.org/docs/handbook/modules/appendices/esm-cjs-interop.html)


### Nunjucks

Nunjucks is a rich and powerful templating language for JavaScript. MarkBind supports Nunjucks for templating and I’ve used Nunjucks specifically to create a set of mappings of topics to their pages, and to write macros.

#### Aspects
1. `macro`
<br/>

Nunjucks `macro` allows one to define reusable chunks of content. A great benefit of `macro` is the reduction of code duplication due to its ability to encapsulate chunks of code into templates and its ability to accept parameters so that the output can be customised based on the inputs provided.

2. `set` and `import`
<br/>

While combining the syntax pages in [this commit](https://github.com/jingting1412/markbind/commit/a44bdaa163ab457753e8e737711b2843dbcc9512), I worked on a `set` that keeps track of the various syntax topics and their information. This was a good exercise to experience how to create a variable using `set` and import it in other files to access its values using `import`.

#### Resources
- [Nunjucks Templating Documentation](https://mozilla.github.io/nunjucks/templating.html)

### Bootstrap

MarkBind has Vue.js components built on the popular BootStrap framework. Much of Bootstrap's features are supported in and out of these components as well. While creating the portfolio template, I got to learn more about the various components and layouts of Bootstrap. 

#### Aspects

1. `grid`
<br/>

Bootstrap `grid` built with `flexbox` and is fully responsive. More specific aspects I've learned
- When building grid layouts, all content goes in columns. The hierarchy of Bootstrap’s grid goes from container to row to column, which needs to be kept in mind while adding content.
- There are 12 template columns available per row, which allows for different combinations of elements that span any number of columns. The number 12 is very important when customising the width for each column to prevent unintended layout changes as Bootstrap does [column wrapping](https://getbootstrap.com/docs/5.3/layout/columns/#column-wrapping) when more than 12 columns are placed in a single row.

2. Components offered by Bootstrap
<br/>

Explored various components offered by Bootstrap, such as [accordions](https://getbootstrap.com/docs/5.3/components/accordion/), [cards](https://getbootstrap.com/docs/5.3/components/card/), [carousels](https://getbootstrap.com/docs/5.3/components/carousel/)

#### Resources

- [Bootstrap docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)


