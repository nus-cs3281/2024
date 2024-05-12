### Project: Godot

While I was not able to make a contribution to the main repository, as I was using this software and following development discussions I'd like to share my understanding. Additionally, I made a PR to the documentation repository which I will elaborate on later. 

### Sphinx

I tested out this open source documentation when working on the Godot documentation.


* [This Medium article](https://towardsdatascience.com/documenting-python-code-with-sphinx-554e1d6c4f6d) is a good upfront summary of setting up Sphinx. As you can see from the article, the set up process is not trivial.
* Sphinx does offer some good features such as strong search, layouts and versioning. There seem to be [other features](https://www.sphinx-doc.org/en/master/) which might be worth evaluating for MarkBind
* In my exploration with using Sphinx to run the Godot documentation, one part was very frustrating - I hated not being able to hot reload the docs as I wrote them; you have to run an additional command. This feature is very useful for MarkBind.

### HSR Optimizer
[HSR Optimizer](https://github.com/fribbels/hsr-optimizer/issues) is a tool built to help Honkai:Star Rail players figure out how to build their characters by helping to abstract some of the math away in a user friendly interface.

They are very light on documentation - essentially just [the getting started](https://github.com/fribbels/hsr-optimizer/blob/main/GETTING_STARTED.md) and [CONTRIBUTING.MD](https://github.com/fribbels/hsr-optimizer/blob/main/CONTRIBUTING.md) pages. To compensate for this, the discord server where development takes place is very active, and new developers are encouraged to hop over and ask questions. One advantage I noticed form having a very light set of documentation is you feel empowered to start pretty fast, as you aren't worried that you've missed something that isn't written down. However, this also does restrict some communication to a more closed platform, and knowledge about the architecture and why certain decisions are made is totally opaque unless someone calls it out explicitly. Furthermore, code comments/discussion may also occur primarily in Discord.

An active, up to date issue tracker is mantained by the main developer, which uses a simple format of "Motivation" and "Goal" and also uses the GitHub project tracker to manage all issues. One thing I really liked about the issue tracker is that it mainly uses only two criteria - priority and size - but this is very effective as a contributor to understand what is worth working on. XS PRs only involve a small amount of code, and the are good PRs to try in multiple categories. The quick response from developers was very motivating when exploring this project.

One nice aspect of the project is it is dogfooded by the creator and there's fairly close communication with a passionate community, so there is a clear motivation for features which are asked for and developments made. This is aided by a very clear value proposition to Honkai: Star Rail players.


### React-Admin

React-Admin is a tool to build CRUD apps for business usecases very quickly. It's robust, flexible, and very easy to use. As a result, it is well adopted by the industry. I explored this project and used it for another project I was doing this semester, and also presented on this for tech talks. 

Some interesting aspects:

* Funded by Enterprise - has ability to add

### My Contributions

Give a description of your contributions, including links to relevant PRs

* [Add new documentation about the pre-commit hook #9094](https://github.com/godotengine/godot-docs/pull/9094) - PR Merged 

* [feat(#278): add button to ScoringModal to reset all characters](https://github.com/fribbels/hsr-optimizer/pull/282) - PR merged

* [[Bug] Recalculate score for saved builds #170 ](https://github.com/fribbels/hsr-optimizer/issues/170) - investigated & PR merged

### My Learning Record

Give tools/technologies you learned here. Include resources you used, and a brief summary of the resource.

RST - different syntax & how to run it

Supabase
* What it is and how to use it and it's capabilities. Example: learned that I was able to 
* Using APIs that tie in (godot-supabase)