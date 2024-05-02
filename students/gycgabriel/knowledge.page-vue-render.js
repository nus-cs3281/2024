
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"error-messages-and-hint-labels-in-angular-forms"}},[_v("Error messages and Hint labels in Angular forms"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#error-messages-and-hint-labels-in-angular-forms","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Forms have a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FormGroup")]),_v(", where each part of the form is controled by a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FormControl")]),_v(" component.")]),_v(" "),_c('p',[_v("In the ts file, Validators check and ensure the form is valid for submission. If it is not, the submit button is greyed out.")]),_v(" "),_c('p',[_v("In the html file, the individual form input boxes are built, and shown with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*ngIf")]),_v(" statements. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<input>")]),_v(" also has additional parameters to specify whether the input is required and the max length of the input. The form error messages are programmed here in the html file, for example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<mat-error *ngIf=\"title.errors && title.errors['required'] && (title.touched || title.dirty)\">\n")]),_c('span',[_v("    Title required.\n")]),_c('span',[_v("</mat-error>\n")])])]),_c('p',[_v("Hint labels can be used to show the remaining characters in a input box with limited characters when approaching that limit.")]),_v(" "),_c('p',[_v("While a string with validators could be used to instantiate a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FormGroup")]),_v(", a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FormControl")]),_v(" element ensured that validators are processed such that the form error messages are shown in components that are children to other Angular components. (PR "),_c('a',{attrs:{"href":"https://github.com/CATcher-org/CATcher/pull/861"}},[_v("#861")]),_v(")")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.kiltandcode.com/2020/08/13/show-validation-error-messages-for-reactive-forms-in-angular-9/"}},[_v("Show Validation Error Messages for Reactive Forms in Angular 9")])])]),_v(" "),_c('h3',{attrs:{"id":"lifecycle-hooks-in-angular"}},[_v("Lifecycle Hooks in Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#lifecycle-hooks-in-angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("After a component is instantiated, the ts file has lifecycle hooks in the form of methods that initialize or modify the component content or state. These methods are prefixed with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ng")]),_v(".")]),_v(" "),_c('p',[_v("The sequence in which these lifecycle hooks are called:")]),_v(" "),_c('ul',[_c('li',[_v("OnChanges")]),_v(" "),_c('li',[_v("OnInit")]),_v(" "),_c('li',[_v("DoCheck  - repeated")]),_v(" "),_c('li',[_v("AfterContentInit")]),_v(" "),_c('li',[_v("AfterContentChecked  - repeated")]),_v(" "),_c('li',[_v("AfterViewInit")]),_v(" "),_c('li',[_v("AfterViewChecked   - repeated")]),_v(" "),_c('li',[_v("OnDestroy")])]),_v(" "),_c('p',[_v("Most notably used is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngOnInit")]),_v(", which used to instantiate the component variables. In CATcher, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngAfterViewInit")]),_v(" is also used to load issues after the component has been initialized.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/lifecycle-hooks"}},[_v("Lifecycle Hooks")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://blog.logrocket.com/angular-lifecycle-hooks/"}},[_v("Angular lifecycle hooks explained")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/questions/40817336/whats-the-difference-between-ngoninit-and-ngafterviewinit-of-angular2#:~:text=ngOnInit()%20is%20called%20right,its%20children's%20views%2C%20are%20created"}},[_v("What's the difference between ngOnInit and ngAfterViewInit of Angular2?")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=kKtrHrciIVs&ab_channel=WebTechTalk"}},[_v("Video: Angular - Zero to Hero - Life Cycle Hooks")])])]),_v(" "),_c('h3',{attrs:{"id":"viewchild-in-angular"}},[_v("ViewChild in Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewchild-in-angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While html files can add custom child components using custom defined decorators such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<my-custom-component>")]),_v(", the parent component may need references to these children components to add change content or add interactability. ViewChild, ContentChild are queries to access child components from the parent component.")]),_v(" "),_c('p',[_v("For example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@ViewChild(ViewIssueComponent, { static: false }) viewIssue: ViewIssueComponent;\n")])])]),_c('h4',{attrs:{"id":"static-vs-dynamic-queries"}},[_v("Static vs Dynamic queries"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#static-vs-dynamic-queries","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Static queries are queries on child components that do not change during runtime, as such result of the reference to the child component can be made available in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngOnInit")]),_v(".")]),_v(" "),_c('p',[_v("Dynamic queries are queries on child components that change during runtime, so reference to child component can only be made available in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ngAfterViewInit")]),_v(".")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://blog.angular-university.io/angular-viewchild/"}},[_v("Angular @ViewChild")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/static-query-migration#what-does-this-flag-mean-and-why-is-it-necessary"}},[_v("Static query migration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=4YmnbGoh49U&ab_channel=AngularConnect"}},[_v("Video: Better concepts, less code in Angular 2 - Victor Savkin and Tobias Bosch")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/questions/34326745/whats-the-difference-between-viewchild-and-contentchild"}},[_v("What's the difference between @ViewChild and @ContentChild?")])])]),_v(" "),_c('h3',{attrs:{"id":"property-binding"}},[_v("Property Binding"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#property-binding","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Square brackets in html tags in angular indicate that the right hand side is a dynamic expression. For example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("<span\n")]),_c('span',[_v("        (click)=\"$event.stopPropagation()\"\n")]),_c('span',[_v("        *ngIf=\"issue.testerDisagree\"\n")]),_c('span',[_v("        [ngStyle]=\"this.labelService.setLabelStyle(this.labelService.getColorOfLabel('Rejected'))\" >\n")]),_c('span',[_v("\n")])])]),_c('p',[_v("The dynamic expression can be evaluated in the context of the corresponding .ts file of the html file.")]),_v(" "),_c('h3',{attrs:{"id":"event-binding"}},[_v("Event binding"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#event-binding","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Parenthesis within html tags, for example "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("(click)")]),_v(" are used to call the component's corresponding method on click. In the example above, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("$event.stopPropagation()")]),_v(" is a Javascript call that prevents the label "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Disagree")]),_v(" within the issue bar from being clickable because its parent is clickable. The click event from parent is stopped from propagating to this particular child.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/property-binding"}},[_v("Angular Doc Property Binding")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://angular.io/guide/event-binding"}},[_v("Angular Doc Event Binding")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/a/35944965"}},[_v("StackOverflow simple summary")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/questions/32315647/javascript-how-does-event-stoppropagation-work"}},[_v("StackOverflow Stop Propagation")])])]),_v(" "),_c('h3',{attrs:{"id":"git-rebase"}},[_v("Git Rebase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-rebase","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Below is a link to a good explanation with visuals to explain rebasing. Rebasing helped to clean the commit history of my main branch after accidental merging with other branches.")]),_v(" "),_c('p',[_v("Resource:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/a/29049698"}},[_v("github fork : your branch is 5 commits ahead how to clean this without pushing")]),_v(" |")])]),_v(" "),_c('h3',{attrs:{"id":"github-file-upload-api-createfile-vs-createtree"}},[_v("Github File Upload API: CreateFile vs CreateTree"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-file-upload-api-createfile-vs-createtree","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The API for committing a single file and committing multiple files at once are different.\nAttempting to do multiple single file commits in a short duration of time will likely cause HttpError to occur. The current recommeded fix is to put in sleep before the next single file commit, or merge multiple single file commits into a single multiple file commit.")]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/a/58837709"}},[_v("Use Octokit or the GitHub Rest API to upload multiple files")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/a/19732043"}},[_v("GITHub API Issue with file upload")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://gist.github.com/StephanHoyer/91d8175507fcae8fb31a"}},[_v("Committing multiple files code gist Octokat")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://github.com/octokit/octokit.js/issues/1308"}},[_v("Octokit Pushing a tree")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://stackoverflow.com/questions/61583403/edit-multiple-files-in-single-commit-with-github-api"}},[_v("Github API Edit multiple files upload")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.5.2")])]),_v(" on Thu, 2 May 2024, 10:41:28 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  