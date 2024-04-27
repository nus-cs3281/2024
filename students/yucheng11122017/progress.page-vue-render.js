
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"prs-i-wrote"}},[_v("PRs I wrote:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#prs-i-wrote","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Improvements to Annotation\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2388"}},[_v("Annotate support different labels #2388")]),_v(" "),_c('ul',[_c('li',[_v("Support slots for annotation which enables more flexible image for annotation point")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2427"}},[_v("Enable markdown for content, header and label in annotation point")]),_v(" "),_c('ul',[_c('li',[_v("Previously, annotation point did not support Markdown in content, header and label. Now, Markdown can be used providing more flexibility to the user.")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2436"}},[_v("Disable pop over in a-point if there is no header and content passed by user #2436")]),_v(" "),_c('ul',[_c('li',[_v("Fix bug where there is no header and content but there is still a popover, resulting in a small arrow pointing to nothing")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2375"}},[_v("Add horizontal spacing between the icon and text in the custom icon list #2352 #2375")]),_v(" "),_c('ul',[_c('li',[_v("Add i-spacing feature for customised list")])])])])]),_v(" "),_c('li',[_v("Release\n"),_c('ul',[_c('li',[_v("Did release for Markbind v5.3.0")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2455"}},[_v("Modify release documentation to add detailed instructions on permissions #2455")]),_v(" "),_c('ul',[_c('li',[_v("Due to some permission issues when doing the release, I created a PR to update the documentation with regards to permissions")])])])])]),_v(" "),_c('li',[_v("Customised lists\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2444"}},[_v("Add text for icon #2444")]),_v(" "),_c('ul',[_c('li',[_v("Added text attributes for customised icons")])])])])]),_v(" "),_c('li',[_v("Others\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2445"}},[_v("Optimize code printing #2445")]),_v(" "),_c('ul',[_c('li',[_v("Improve printing for code by making code light theme automatically when printing, removing code wrap and code copy buttons when printing, include code highlighting when printing")])])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2502"}},[_v("Ignore plantuml images for test sites #2502")]),_v(" "),_c('ul',[_c('li',[_v("Test sites previously only ignored plantuml images for test_site. This PR enables ignoring plantuml images for other test sites as well")])])])])])]),_v(" "),_c('p',[_v("PRs I guided/reviewed")]),_v(" "),_c('ul',[_c('li',[_v("Templates\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2398"}},[_v("MarkBind Template for Student Portfolio #2398")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2400"}},[_v("MarkBind Template for Software Project Documentation #2400")])])])]),_v(" "),_c('li',[_v("DevOps\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2429"}},[_v("Utilize GitHub Actions to aid checking of commit message #2429")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2470"}},[_v("Utilize GitHub Actions to check for SEMVER impact label #2470")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2484"}},[_v("Add a reminder when contributor is new to ping all contributor bot #2484")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2510"}},[_v("Improve security of GitHub Actions workflows #2510")])])])]),_v(" "),_c('li',[_v("Plugins\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2446"}},[_v("Add dataTable plugin #2446")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2475"}},[_v("Add Mermaid Plugin #2475")])])])]),_v(" "),_c('li',[_v("Customised Lists\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2520"}},[_v("Support text-icons of lists #2520")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2454"}},[_v("Customizing list icons: give a way to apply to current item only #2454")])])])]),_v(" "),_c('li',[_v("Logging and testing\n"),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2465"}},[_v("Efficient validation for intra-link with hash #2465")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2493"}},[_v("Rule based html validation against hydration #2493")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2483"}},[_v("Standardise NodeProcessor.data.ts constant names #2483")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2463"}},[_v("Test logger calls in tests for NodeProcessor #2463")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2506"}},[_v("Add warning for including empty segments or files in optional mode #2506")])])])])]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Week")]),_v(" "),_c('th',[_v("Achievements")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("1")]),_v(" "),_c('td',[_v("Opened PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2388"}},[_v("Annotate support different labels #2388")])])]),_v(" "),_c('tr',[_c('td',[_v("1")]),_v(" "),_c('td',[_v("Discussed Issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2370"}},[_v("Create specific instructions to enable PR preview for CS2103T tP users #2370")])])]),_v(" "),_c('tr',[_c('td',[_v("2")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2388"}},[_v("Annotate support different labels #2388")])])]),_v(" "),_c('tr',[_c('td',[_v("2")]),_v(" "),_c('td',[_v("Discussed Issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2370"}},[_v("Create specific instructions to enable PR preview for CS2103T tP users #2370")])])]),_v(" "),_c('tr',[_c('td',[_v("2")]),_v(" "),_c('td',[_v("Discussed Issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/659"}},[_v("Provide good examples of MarkBind usage #659")])])]),_v(" "),_c('tr',[_c('td',[_v("2")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2392"}},[_v("Correct broken UG external link #2392")])])]),_v(" "),_c('tr',[_c('td',[_v("2")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2389"}},[_v("Replacing default icon for conversion #2389")])])]),_v(" "),_c('tr',[_c('td',[_v("2")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2394"}},[_v("Use a more noticeable color for highlight words in fenced code #2393")])])]),_v(" "),_c('tr',[_c('td',[_v("2")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2395"}},[_v("Allow markbind serve to specify custom host #2395")])])]),_v(" "),_c('tr',[_c('td',[_v("6")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2427"}},[_v("Annotation content slot #2427")])])]),_v(" "),_c('tr',[_c('td',[_v("6")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2429"}},[_v("Utilize GitHub Actions to aid checking of commit message #2429")])])]),_v(" "),_c('tr',[_c('td',[_v("6")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2429"}},[_v("Utilize GitHub Actions to aid checking of commit message #2429")])])]),_v(" "),_c('tr',[_c('td',[_v("6")]),_v(" "),_c('td',[_v("Released Markbind v5.3.0")])]),_v(" "),_c('tr',[_c('td',[_v("6")]),_v(" "),_c('td',[_v("Opened Issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2434"}},[_v("Add warning about npm permissions for release notes #2434")])])]),_v(" "),_c('tr',[_c('td',[_v("6")]),_v(" "),_c('td',[_v("Opened PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2436"}},[_v("Disable pop over in a-point if there is no header and content passed by user #2436")])])]),_v(" "),_c('tr',[_c('td',[_v("Recess")]),_v(" "),_c('td',[_v("Researched on Issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2367"}},[_v("Re-introduce lazy loading for pictures #2367")])])]),_v(" "),_c('tr',[_c('td',[_v("Recess")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2431"}},[_v("Add line-numbers when wrapping is needed for printing #2431")])])]),_v(" "),_c('tr',[_c('td',[_v("Recess")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2436"}},[_v("Disable pop over in a-point if there is no header and content passed by user #2436")])])]),_v(" "),_c('tr',[_c('td',[_v("Recess")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2425"}},[_v("Migrate stylelint to latest version #2292 #2425")])])]),_v(" "),_c('tr',[_c('td',[_v("Recess")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2431"}},[_v("Add line-numbers when wrapping is needed for printing #2431")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2443"}},[_v("Add pageNav to Reader-Facing Features #2443")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2441"}},[_v("Debug cannot import footnote from hash #2441")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Researched issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2343"}},[_v("Support multiple levels in top navbar #2343")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Opened PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2445"}},[_v("Fix print code highlight #2445")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Opened PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2444"}},[_v("Add text for icon #2444")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Contributed to PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2375"}},[_v("Add horizontal spacing between the icon and text in the custom icon list #2352 #2375")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2446"}},[_v("Add SortableTable plugin #2446")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2400"}},[_v("MarkBind Template for Software Project Documentation #2400")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2453"}},[_v("Add keeping fork up to date section in DG #2453")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Discussed Issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/1616"}},[_v("[cs2103 website] Some top-nav menu items are not highlighted when visited #1616")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2375"}},[_v("Add horizontal spacing between the icon and text in the custom icon list #2352 #2375")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2454"}},[_v("Customizing list icons: give a way to apply to current item only #2454")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Discussed issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2140"}},[_v("Utilize GitHub Action to aid PR review #2140")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Opened issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2455"}},[_v("Automate all-contributors bot #2457")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2463"}},[_v("Test logger calls in tests for NodeProcessor #2463")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Opened issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2467"}},[_v("Add documentation about npm unlink in DG #2467")])])]),_v(" "),_c('tr',[_c('td',[_v("9")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2463"}},[_v("Test logger calls in tests for NodeProcessor #2463")])])]),_v(" "),_c('tr',[_c('td',[_v("9")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2470"}},[_v("Utilize GitHub Actions to check for SEMVER impact label #2470")])])]),_v(" "),_c('tr',[_c('td',[_v("9")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2455"}},[_v("Modify release documentation to add detailed instructions on permissions #2455")])])]),_v(" "),_c('tr',[_c('td',[_v("9")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2445"}},[_v("Optimize code printing #2445")])])]),_v(" "),_c('tr',[_c('td',[_v("9")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2444"}},[_v("Add text for icon #2444")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2472"}},[_v("Add the announcement component #2472")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2474"}},[_v("Set global variables using nunjucks syntax #2474")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2477"}},[_v("Add pagefind #2477")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2484"}},[_v("Add a reminder when contributor is new to ping all contributor bot #2484")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2487"}},[_v("Fix imported modal button position off #2487")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2492"}},[_v("Defer scripts in page template #2492")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2493"}},[_v("Rule based html validation against hydration #2493")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Review PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2494"}},[_v("Support Bootstrap icons #2494")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Opened PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2502"}},[_v("Ignore plantuml images for test sites #2502")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Discussed Issue: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/issues/2490"}},[_v("text-icons of lists: give a way to auto-increment #2490")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Merged PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2502"}},[_v("Ignore plantuml images for test sites #2502")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2520"}},[_v("Support text-icons of lists #2520")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2514"}},[_v("UG: images appear in two places #2514")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2510"}},[_v("Improve security of GitHub Actions workflows #2510")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2507"}},[_v("Add note on absolute links #2507")])])]),_v(" "),_c('tr',[_c('td',[_v("13")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2506"}},[_v("Add warning for including empty segments or files in optional mode #2506")])])]),_v(" "),_c('tr',[_c('td',[_v("13")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2501"}},[_v("Change seamless panels to inherit any parent's colours #2501")])])]),_v(" "),_c('tr',[_c('td',[_v("13")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/MarkBind/markbind/pull/2484"}},[_v("Add a reminder when contributor is new to ping all contributor bot #2484")])])])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sat, 27 Apr 2024, 7:43:03 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  