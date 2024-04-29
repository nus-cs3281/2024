### Project: SourceAcademy Frontend

Sourceacademy is the an online experiential environment used for teaching students computational thinking and is used by the School of Computing in NUS and Uppsala University in Sweden to teach introductory programming modules. The frontend is built using React and Redux.


### My Contributions

In this project, I have authored and merged two PRs. They are listed as follows:
- [Fix double window prompt when uploading users #2943](https://github.com/source-academy/frontend/pull/2943)

  In this PR, I fixed a long standing bug regarding the UI where two file prompts show up upon clicking a "upload csv" button. To solve this, I first reproduced the issue on my local development environment, and then identified the issue, which happened to be the incorrect use of a `<FileInput>` react component within a `<CSVReader>` component. The components were imported from a [theming library](https://blueprintjs.com/) and a [CSV parser library](https://www.papaparse.com/) respectively.



- [i18n framework #2946](https://github.com/source-academy/frontend/pull/2946)

  In this PR, I laid the groundwork for future internationalization work to be done on SourceAcademy. SourceAcademy started out as a project in NUS but has plans to go international, as seen by its use in Uppsala university in Sweden. As such, adding i18n to the project will be crucial for its future.

  In this PR, I introduced the use of `react-i18next` library, as well as define data structures to allow future translators to easily add on new translations and languages. 

### My Learning Record

**React & Redux**

Sourceacademy is built in React and Redux, and as such, I have had to learn how to work with these two libraries. While I have used React and Redux before, I have not seen how it can be used in a large scale project like Sourceacademy. In Sourceacademy, I have seen how Redux and Redux Toolkit was used to create a typesafe global state that is shared across the entire application and I appreciate how well structured the code was in the repository.


**i18next**

i18next is a library that allows for internationalization in a React project. It is a powerful library that allows for easy translation of text in a project. During my implementation of the i18n framework in Sourceacademy, I referenced several implementations of i18n across various established open source repos such as HospitalRun and FreeCodeCamp for any best practices. From these references, I learned how to structure the i18n files and the various translation resources to make it easy for future translators to add on new translations.

Furthermore, the i18n framework that I contributed to has strong type safety and only allows keys that are defined in the translation files to be used, making it easier for future developers to see what keys are allowed on what file. I am grateful for the Sourceacademy maintainers for their guidance in this implementation.


**Practices and tools from SourceAcademy that could be adopted by CATcher**

SourceAcademy utilises Yarn as their package manager. From almost all points of view, yarn has the exact same functionality as npm, but it is faster and more reliable. As such, we could consider moving over to using Yarn in CATcher as well.

Furthermore, I was particularly impressed with the testing framework that they had to ensure any new changes were not breaking. They made use of jest and had an interactive UI test runner that allowed the developer to see which tests were failing and why. This is something that CATcher could consider adopting as well.



