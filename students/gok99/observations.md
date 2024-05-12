### Project: Pandoc

Pandoc is a Haskell library and command-line tool for converting between various document formats. It is a powerful tool that can convert between many different formats, including Markdown, LaTeX, HTML, and many others. It is also extensible, allowing for the creation of custom readers and writers for new formats. Pandoc has 31.8k stars on GitHub and is used widely by individuals for personal workflows and within deployment pipelines by larger organizations.

### My Contributions

- Fixed an issue involving Pandoc's Texinfo Writer: [Add @var support in Texinfo Writer #8534](https://github.com/jgm/pandoc/pull/9359) (merged)
- Fixed an issue involving Pandoc's RST Reader: [RST reader: fix figclass and align annotations for figures](https://github.com/jgm/pandoc/pull/9744) (merged)

### My Learning Record

The Haskell tooling ecosystem (GHC, Cabal, Stack, Haskell LSP, etc) makes writing Haskell quite enjoyable. In particular, Haskell features like abstract data types, parametric polymorphism, and type inferencing make understanding and modifying code in a general and well-abstracted way really easy to do. The language also allows for strong editor tooling that also helps improve the developer experience. Contributing to Pandoc allowed me to get a deep look at practical Haskell in a widely adopted and loved tool—something I've always wanted to do.

Pandoc is also a really great and flexible tool that has taught me a great deal about software design practices. Pandoc has lofty goals of providing good document conversion from a large number of input formats to a really large number of output formats. This is done by converting to and from Pandoc's own document intermediate representation, which has a large subset of the intersection of features of the input and output formats. By being very clear about the extent and specification of the intermediate representation, it is easy for several developers to concurrently add, modify, and fix existing readers and writers by mapping the semantics of the source or target specification to those of the Pandoc intermediate representation. In general, being very clear and thorough with interfaces between software segments seems to be an important and crucial aspect of any sufficiently sophisticated system. To a first approximation, Pandoc does a really good job of picking good defaults for the output format; if users want additional customizability, they can have that by writing their own custom Lua filters.

#### Observations from contribution process

Great practices:
- The maintainer, John MacFarlane (a philosophy professor at Berkeley), and other core maintainers are incredibly active. Both my PRs got attention within a day. The first PR was merged in under a day, and the second PR was merged in under an hour! Fast and active review provides contributors with quick feedback and, personally, was a very strong motivator for making more contributions. I definitely see myself tackling deeper issues over the summer.
- Great user documentation: The user documentation is really thorough and covers just about everything a user might need to get started and to get going with advanced features like Lua filters.
- `good first issue` tags are a great entry point to the codebase. They cover issues that can be tackled without a very deep understanding of the codebase, but that still familiarize the contributor with the workflow of dealing with an issue and adding tests.

Possible improvements:
- Since not as many people contribute to Pandoc (likely due to the Haskell learning curve) outside of the core team compared to other large open source projects, there has not been much of a need for PR workflow automation. While CI's are run, more checks could be conducted with bots and other tools provided by Github actions to automate more of the review process (as is quite common with most big open source projects).
- I found developer documentation to be a little lacking (again likely due to the small number of contributors). It would have been nice to see details of things like editor set-up with the Haskell LSP, build instructions for particular pandoc applications, and a more detailed look at the codebase architecture.

#### Suggestions for the internal project based on external project observations

- I think the biggest takeaway personally was the importance of active maintenance and support. A community is only as active as its maintainers, and knowing that work will be promptly reviewed is crucial for the life and longevity of the community. This is definitely something we can improve on with RepoSense. It is, however, certainly a challenge with nus-oss, given that students come and go fairly frequently and attention has to contend with school work and other activities.
- Experience with Pandoc and Haskell has convinced me that advanced-type systems and function style programming help programmers write safer and more resilient software. Unfortunately, Java's type system (even with newer versions) is not nearly as powerful as Haskell's and limits how far we can take these ideas. Nevertheless, we can make some progress with making Reposense easier to reason about with refactors involving [immutability and optional monads](https://github.com/reposense/RepoSense/pull/2144).

