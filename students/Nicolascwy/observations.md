### Project: MermaidJS

JavaScript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

### My Contributions

While setting up the MermaidJS code base I realised that the recommended VSCode extension for Vitest (Community made) was deprecated and was replaced with the updated version maintained by the Vitest team. I had then filed an [issue](https://github.com/mermaid-js/mermaid/issues/5321) and made a [PR to update this(merged)](https://github.com/mermaid-js/mermaid/pull/5322).

While understanding the codebase to solve this [PR](https://github.com/mermaid-js/mermaid/issues/3801) (to be solved) which involved adding additional funcionality to git diagrams, I realised that there was an undocumented feature that was merged a few versions ago. I had then filed an [issue](https://github.com/mermaid-js/mermaid/issues/5324) an [added this to the documentation (merged)](https://github.com/mermaid-js/mermaid/pull/5336)

### My Learning Record

#### BISON/ Langium Parser Generator
I'm still in the midst of learning this, but I've learned that parsers can be generated using programs such as BISON and Langium. Mermaid is built on JIISON a BISON implementation in JS which has been unofficially deprecated and has been trying to make a move to move away from this to a maintained alternative Langium. I would be trying to learn BISON and rewrite some parts of the git graph parser to make it more flexible in allowing me to implement new features.

Resources: [GNU BISON Documentation](https://www.gnu.org/software/bison/manual/html_node/index.html)
