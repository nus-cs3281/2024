
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"file-structure"}},[_v("File Structure"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#file-structure","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Unlike React which bundles structure and functionality into a single file, Angular divides this task for a few files such as:")]),_v(" "),_c('ul',[_c('li',[_v("Component file: Defines the functionality of the component using Typescript (x.component.ts)")]),_v(" "),_c('li',[_v("Template file: Define structure and what the component looks like in HTML (x.component.html)")]),_v(" "),_c('li',[_v("Specification file: Used to perform unit/ integration on the component (x.spec.ts)")])]),_v(" "),_c('h4',{attrs:{"id":"directives"}},[_v("Directives"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#directives","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("After defining the component it is still possible to use provide it with extra behaviour using directives. Directives are classes that can be added to the component when it is used on a page.\nThe directives I have encountered are")]),_v(" "),_c('ol',[_c('li',[_v("(NgIf)["),_c('a',{attrs:{"href":"https://angular.io/api/common/NgIf"}},[_v("https://angular.io/api/common/NgIf")]),_v("]: Allows conditional rendering for a component based on a boolean condition")]),_v(" "),_c('li',[_v("(NgbDropdown)["),_c('a',{attrs:{"href":"https://ng-bootstrap.github.io/#/components/dropdown/api"}},[_v("https://ng-bootstrap.github.io/#/components/dropdown/api")]),_v("]: Helps create dropdown menus - added from Angular Bootstrap")])]),_v(" "),_c('h4',{attrs:{"id":"event-emitters"}},[_c('a',{attrs:{"href":"https://angular.io/api/core/EventEmitter"}},[_v("Event Emitters")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#event-emitters","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Communication between components from the child to the parent are done through event emitters. These are helpful when a child component on a page has been clicked, and the parent has to have knowledge of which child has been selected before fetching data for the child to be displayed to the user. After defining an event emitter, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("emit()")]),_v(" method can be called to return a value to the parent.")]),_v(" "),_c('p',[_v("This snippet uses the @Output decorator to informs the parent which row has been clicked when the function is called.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("// Component file - reminder.component.ts\n")]),_c('span',[_v("@Output()\n")]),_c('span',[_v("sendRemindersToAllNonSubmittersEvent: EventEmitter<number> = new EventEmitter();\n")]),_c('span',[_v("\n")]),_c('span',[_v("sendRemindersToAllNonSubmitters(rowIndex: number): void {\n")]),_c('span',[_v("    this.sendRemindersToAllNonSubmittersEvent.emit(rowIndex);\n")]),_c('span',[_v("  }\n")]),_c('span',[_v("\n")]),_c('span',[_v("// child template file - child.component.html\n")]),_c('span',[_v("<reminder (click)=\"sendRemindersToAllNonSubmitters(idx)\">\n")]),_c('span',[_v("\n")]),_c('span',[_v("// parent template file - parent calls sendEmail function open receiving event from child.\n")]),_c('span',[_v("<table (sendRemindersToAllNonSubmittersEvent)=\"sendEmail($Event)\">\n")])])]),_c('h4',{attrs:{"id":"flow-of-inputs-and-outputs"}},[_v("Flow of inputs and outputs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#flow-of-inputs-and-outputs","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("There are 3 ways data can flow between components.")]),_v(" "),_c('ol',[_c('li',[_v("[disabled]=\"canViewSessionInSections\": [] bracket indicate data flows from parent's property canViewSessionInSections to the child's property disabled.")]),_v(" "),_c('li',[_v("(click)=\"sendRemindersToAllNonSubmitters(idx): () like the previous example, triggers the event emitter to inform the parent to send all reminders for the course on the xth row.")]),_v(" "),_c('li',[_v("[(size)]=\"fontSizePx\": A combination of 1 and 2 and is called 2 way binding, where data can flow between parent and child.")])]),_v(" "),_c('p',[_v("References: "),_c('a',{attrs:{"href":"https://angular.io/guide/inputs-outputs"}},[_v("Event Emitters inputs and outputs")])]),_v(" "),_c('h3',{attrs:{"id":"backend"}},[_v("Backend"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#backend","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"servlets-and-backend-routing"}},[_v("Servlets and backend routing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#servlets-and-backend-routing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("My experience with the backend was limited to Express (a Node.JS framework), and did not even know that Java it was possible to have a backend in Java. TEAMMATES uses Jetty, a Java framework to route requests from users. The entry point to the backend is in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("web.xml")]),_v(" a file that is read from top to bottom and can be thought of as a sieve which directs requests in that order.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs xml"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter-name")]),_v(">")]),_v("WebSecurityHeaderFilter"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter-name")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter-class")]),_v(">")]),_v("teammates.ui.servlets.WebSecurityHeaderFilter"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter-class")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter-mapping")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter-name")]),_v(">")]),_v("WebSecurityHeaderFilter"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter-name")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("/web/*"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("/index.html"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("/"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("filter-mapping")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("description")]),_v(">")]),_v("Servlet that handles the single web page application"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("description")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-name")]),_v(">")]),_v("WebPageServlet"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-name")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-class")]),_v(">")]),_v("teammates.ui.servlets.WebPageServlet"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-class")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("load-on-startup")]),_v(">")]),_v("0"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("load-on-startup")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-mapping")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-name")]),_v(">")]),_v("WebPageServlet"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-name")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("/web/*"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-mapping")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("description")]),_v(">")]),_v("REST API Servlet"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("description")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-name")]),_v(">")]),_v("WebApiServlet"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-name")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-class")]),_v(">")]),_v("teammates.ui.servlets.WebApiServlet"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-class")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("load-on-startup")]),_v(">")]),_v("0"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("load-on-startup")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-mapping")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-name")]),_v(">")]),_v("WebApiServlet"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-name")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("/webapi/*"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("/auto/*"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("/worker/*"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("url-pattern")]),_v(">")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("servlet-mapping")]),_v(">")]),_v("\n")])])]),_c('p',[_v("Above is a snippet from the web.xml file in TEAMMATES. The main 2 constructs used in routing are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filters")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("servlets")]),_v(". Filters can be thought of as sieves, where a request that matches the pattern found in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<filter-mapping>")]),_v(" would execute the filter defined in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter-class")]),_v(" before continuing execution in the web.xml file. Servlets follow the same pattern but start with the prefix "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("servlet")]),_v(" for example "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("<servlet-mapping>")]),_v(". Unlike filters, servlets dead-end a request, the request gets passed on to the servlet that it matches and does not get passed down any further.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor#Servlets_and_URL_Paths"}},[_v("https://cloud.google.com/appengine/docs/flexible/java/configuring-the-web-xml-deployment-descriptor#Servlets_and_URL_Paths")])]),_v(" "),_c('h3',{attrs:{"id":"gradle"}},[_v("Gradle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#gradle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"tasks-and-gradle-configuration"}},[_v("Tasks and Gradle configuration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tasks-and-gradle-configuration","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Tasks are snippets of code that can be executed by gradle. There are a few tasks that are pre-configured to perform a task by configuring some variables. I used the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("javaexec")]),_v(" task which executes a java script when run. One problem faced was that Gradle configures every task on build evaluating an expression and assigning it to the variable. This led to a null pointer exceptions even if the task was not run e.g user wants to use gradle to lint the project. This was because I had directly assigned the environment variable as the java class to be run. To get around this an if-statement which checks if the environment variable is present before assigning it to the variable. I had not done this previously as I had thought variables could only be assigned once and was not optional.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html"}},[_v("https://docs.gradle.org/current/dsl/org.gradle.api.tasks.JavaExec.html")]),_v(" "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/31065193/passing-properties-to-a-gradle-build"}},[_v("https://stackoverflow.com/questions/31065193/passing-properties-to-a-gradle-build")]),_v(" "),_c('a',{attrs:{"href":"https://www.youtube.com/watch?v=g56O_HeefBE"}},[_v("https://www.youtube.com/watch?v=g56O_HeefBE")]),_v(" "),_c('a',{attrs:{"href":"https://docs.gradle.org/current/userguide/build_lifecycle.html"}},[_v("https://docs.gradle.org/current/userguide/build_lifecycle.html")]),_v(" "),_c('a',{attrs:{"href":"http://www.joantolos.com/blog/gradletask/"}},[_v("http://www.joantolos.com/blog/gradletask/")])]),_v(" "),_c('h3',{attrs:{"id":"git"}},[_v("Git"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"fetching"}},[_v("Fetching"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#fetching","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("During PR reviews, I learnt that it is sometimes better to see the changes a person has made directly in my browser. Previously, I was only familiar with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git pull")]),_v(" which under the hood combined the fetch and the merge into a single step, but required the branch to track a remote which was not feasible for PR reviewing since this remote would be used once or at most a few times. I then found that git fetch allowed you to specify the repository URL (the link used to clone a repo) and the name of the branch to fetch, assigning it to a reference called FETCH_HEAD, which can be checkout-ed. This allowed me to quickly fetch the branch and switch into it and make some testing, usually I would also create a temporary branch so that I can check on the changes at another time.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.atlassian.com/git/tutorials/syncing/git-fetch"}},[_v("https://www.atlassian.com/git/tutorials/syncing/git-fetch")]),_v(" "),_c('a',{attrs:{"href":"https://git-scm.com/docs/git-fetch"}},[_v("https://git-scm.com/docs/git-fetch")])]),_v(" "),_c('h4',{attrs:{"id":"rebasing"}},[_v("Rebasing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#rebasing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("When my team started to work on the notification banner feature, we realised that no matter how much planning is done, it was sometimes inevitable for our code to be dependent on someone elses. Instead of more conventional methods such as copying pasting code, which does not have the benefit of resolving conflicts, merging branches into my working branch would also be messy since their branches are actively updated, sometimes even force pushed. Instead, I learnt how to rebase from my teammates, which lets you put a series of commits on your branch on top another branch. This can be done several times, if a branch X is in turn dependent on branch Y, and you require Y. One downside is that you would have to fetch and update each branch and perform a rebase ontop of this new branch, but this is a small cost instead of rushing out a PR or idling, when the code you require is completed but just not merged into master.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Mon, 11 Mar 2024, 3:46:00 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  