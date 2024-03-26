### Java

Java is used extensively in the backend for RepoSense, from the generation of the RepoSense report, to the different `git` commands required to clone repositories and analyse them. It was not difficult to pick up Java as I had some prior experience in Java in previous classes such as CS2030S, CS2040S and CS2103T, but the intricacies surrounding the different Java libraries was something that I was never properly exposed to and had to learn over time as I worked on the project.

#### Aspects Learned

Some of the aspects I have learnt regarding Java:

* Learning to read Java source code and using the built-in IntelliJ Java Profiler to identify possible optimisations in the current codebase
  * One particular aspect of Java that was the target of optimisation was Regex. I realised that Regex was used extensively in the codebase in different contexts, whether to split up strings or to find a matching string pattern in a given string. However, after identifying some parts of the code that were potentially buggy or slow (especially snippets whereby Regex operations are used in conjunction with iteration) using the IntelliJ Java Profiler and consulting the Java source code, as well as some online sources, I was able to identify a latent anti-pattern in the way Regex code was written in the code base
  * This experience taught me that Regex code should never be mixed with iteration and that we should precompile `Pattern` objects for repeated use instead
* Learning more about different code design patterns such as the Builder pattern and how to adapt it to our codebase to suit our own needs
  * The Builder pattern was one of the patterns that was not taught in the previous modules that I have taken, but I was aware of it due to reading up on coding patterns prior me taking up this project. At first, I thought that the Builder pattern could be adopted as is into the codebase without consideration of our use cases, however, through the guidance of my mentors, I soon realised that not all parts of the Builder pattern was relevant to what we needed the pattern for, and that we need to adapt the pattern to our use, and not the other way around.

#### Resources Used

* Java Source Code
  * The source code for Java was used to verify the time and memory usage of the code given by the code profiler, by cross-referencing bottlenecks identified in the code profile with the source code to identify inefficient code in the codebase
* Online Java resources such as [baeldung.com](https://www.baeldung.com/)
  * The resources provided alternative ways of achieving a certain results, which may help to increase the efficiency of the code
* Past modules taken that taught Java code
  * CS2030S, CS2040S and CS2103T

### Docker

Docker is something that I have always wanted to work with, especially so in combination with other container orchestration tools such as Kubernetes. I looked into the possibility of Docker being used to containerise RepoSense, enabling us to better test RepoSense, provide end users with a premade container with RepoSense's dependencies resolved for them, and a way to quickly deploy RepoSense to their favourite cloud providers (e.g. AWS ECS, etc.) for greater availability of RepoSense for their target users.

#### Aspects Learned

Some of the aspects I have learnt:

* Learning Dockerfile syntax
  * While Docker is not exactly new to me as I have previously worked with Docker products in a past project, I have long forgotten the different syntax required for a Dockerfile, as well as the different Docker commands that work with building and running containers
* Docker integration with Github Actions
  * It was also a challenge to integrate Docker with Github Actions for CI/CD purposes as it is not as easy to debug when things go wrong during the build and execution process. Every time changes are made, a new image needs to be created, tested and then deployed, all of which incurs precious Github Actions build time. Not to mention that the environment provided by Github Actions' Runners are distinctly different that my local environment (Github Runners run on x86 while my Mac environment runs on ARM64), making testing extremely difficult and time consuming

#### Resources Used

* Docker references
  * The references for the different Dockerfile syntax and Docker commands was referenced heavily during the creation of the different POC Dockerfiles
* Stackoverflow and other online references
  * Some more obscure ways of doing things in Docker had to reference the code which others have written, as it was not readily available in the references for Docker
* ChatGPT
  * ChatGPT was used to debug and identify potential reasons as to why my Dockerfile might be buggy and fails builds when they are pushed onto Github
