### Node Package Manager (npm)

A default package manager for Node.js. 
1. npm simplifies the process of installing, updating, and managing external libraries or modules in a Node.js project. 
2. npm allows developers to define and run scripts in their project's package.json file, automating common development tasks.
3. npm allows developers to publish their own packages on the npm registry.

#### Aspects learnt:
1. npm CLI - A powerful tool to interact with npm. Learnt the usages of the basic commands like `npm install`, `npm update`, `npm run <scripts>` etc. and how they helped streamline the development process.
2. package.json - Learnt how to interpret different parts of the json file eg. `"scripts"`, `"dependencies"` and how to manage them.
3. How to publish my own package to the public.
4. How to use `.npmignore`

#### Resources:
1. [npm Docs](https://docs.npmjs.com/) - Documentation for the npm registry, website, and command-line interface

### Stylelint

A CSS linter that helps enforce conventions and avoid errors. 

1. Stylelint has over 100 built-in rules for modern CSS syntax and features, but it is customisable and supports plugins/configs.
2. It can fix problems automatically where possible.
3. It can extract embedded styles from HTML, Markdown and CSS-in-JS template literals.
4. It can also parse CSS-like languages like SCSS, Sass, Less and SugarSS.

#### Aspects learnt:
1. Configuring the linter using the `stylelintrc.js` file, a configuration object for Stylelint to suit our own needs.
2. Integrating Stylelint into our project.

#### Resources:
1. [Stylelint offical Docs](https://stylelint.io/)


### Commander.js
A JavaScript library that provides a framework for building command-line interfaces (CLIs) in Node.js applications

#### Aspects learnt:
1. Define commands, options, and arguments using Commander.js for Markbind.

#### Resources:
1. [Commander.js README](https://www.npmjs.com/package/commander)


### Github Actions

A CI/CD platform allowing developers to automate workflows directly within their GitHub repository. 

1. It supports customised workflows using YAML files to automate tasks such as building, testing, and deploying code.

#### Aspects learnt:
1. Understanding how Github Actions works in a specific repository.
2. Interpreting `.yml` files in `.github/workflow`.


### Chrome DevTools

A set of web developer tools built directly into the Chrome browser. 

1. We can utilise it to diagnose problems and monitor our program's performance eg. time used for each file to load
2. We can see what is actually happening under the hood eg. which files are loaded before others

#### Aspects learnt:
1. How to check the attributes of each HTML component on the page.
2. How to change the behavior of the browser in terms of loading speed by utilising the `Network` section - disable cache and change network settings
3. How to monitor the behavior and performance of the browser by using the `Performance insights` section

#### Resources:
1. Most stack overflow articles will teach us how to interpret the output of Chrome DevTools, I realise it is easy to find such articles by searching "How to know xxxx", eg. How to know if lazy loading is working

### Nunjucks

A template engine for Javascript. It provides a way to mix static content with dynamic data. 

#### Aspect learnt:
1. I mostly learnt about nunjucks' API and learn to integrate it into our project.
2. Learnt how Nunjucks works under the hood, from configuring to parsing to rendering, I have developed a strong understanding on how to integrate Nunjucks to my own project.

#### Resources:
1. [Nunjucks offiical API](https://mozilla.github.io/nunjucks/api.html) 

### Jest

A Javascript testing framework that focuses on simplicity when writing tests.

#### Aspect learnt:
1. Learnt to differentiate mocks and spies and their particular use cases.
2. Learnt how to use `jest.mock`, `jest.fn` to implement mocks and `jest.spyOn` to create spies.

#### Resources:
1. [Jest official documentation](https://jestjs.io/)
2. [Explains how to use the three functions](https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c)


### mdn web_docs

A website that documents web technologies for developers. The articles are written by developers that covers a lot of aspects related to the web.

#### Aspects learnt:
1. Learnt about some fundamentals about the web eg. how browser renders the files, how the HTML elements like `<img>` and `<script>` behaves, along with some common issues eg. lazy loading

#### Resources:
1. [The website itself](https://developer.mozilla.org/en-US/docs/Web)
