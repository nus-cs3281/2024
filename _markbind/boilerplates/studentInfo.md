<box>

## {{ name }}

<div class="container">
 <div class="row">
  <div class="col">
<img src="photo.png" width="100" /><br>
  </div>
  <div class="col">

**GitHub:** <include src="info.md#github" optional inline trim /><br>

**Projects:** <include src="info.md#projects" optional inline trim />
 </div>
 </div>
</div>
<p/>
<panel header="**Progress**" minimized>
  <include src="progress.md" optional />
</panel>
<panel header="**Knowledge gained**" minimized>
  <include src="knowledge.md" optional />
</panel>
{% if mod == "cs3282" %}
<panel header="**Observations** from external projects" minimized>
  <include src="observations.md" optional />
</panel>
{% endif %}
</box>
