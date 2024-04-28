
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h2',{attrs:{"id":"context"}},[_v("Context"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#context","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Before TEAMMATES, I have only ever used React. To help me get started on Angular, I looked up videos on YouTube, specifically "),_c('a',{attrs:{"href":"https://www.youtube.com/playlist?list=PL0vfts4VzfNjsTV_6i9a9iczMnthWqHzM"}},[_v("Fireship's Angular playlist")]),_v(", to get an overview. I tried doing a Udemy course too but I thought it was a little far-fetched.")]),_v(" "),_c('p',[_v("With a background in React, I went onto look for the similarities and differences between these two popular frontend web frameworks which led me to decide to dive into TEAMMATES' codebase.")]),_v(" "),_c('h2',{attrs:{"id":"passing-data-between-parent-and-child-components"}},[_v("Passing data between Parent and Child components"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#passing-data-between-parent-and-child-components","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Similar to passing of props in React, Angular has its way to pass data between parent and child components.")]),_v(" "),_c('p',[_v("In Angular, we use "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Output")]),_v(" for sending data to parent and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Input")]),_v(" for sending data to child. It took me awhile to get used to the terms of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("in/output")]),_v(".")]),_v(" "),_c('p',[_v("What helped me through this was the "),_c('a',{attrs:{"href":"https://angular.io/guide/inputs-outputs"}},[_v("Angular docs")]),_v(" on this exact matter, it was a perfect read! It starts off with the introduction of Input and Output, and was surprised it's said to be like a pattern. This page was really well written as it goes straight to the subject and it takes a step by step approach with sufficient amount of examples.")]),_v(" "),_c('h2',{attrs:{"id":"services"}},[_v("Services"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#services","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Working on the onboarding task (Per Receiver Submission project), I have learned how Angular, a frontend framework, communicates with the backend that uses Java EE.")]),_v(" "),_c('p',[_v("For the frontend to send a HTTP request to TEAMMATES server, we have to make use of a library/dependency to handle this action. Similar to packages used in React apps such as Fetch API, Axios, etc.")]),_v(" "),_c('p',[_v("TEAMMATES makes use of "),_c('a',{attrs:{"href":"https://angular.io/api/core/Injectable"}},[_v("Injectable")]),_v(" as part of Angular's core package to create a service. In this case, a service to an entity class. An injectable service is created and in it consists of functions that work with HTTP requests e.g., A method to get entities, that calls another service, the custom written HTTP service.")]),_v(" "),_c('p',[_v("Angular recommends to make use of services for tasks that do not involve the view or application logic. These services are mainly used to communicate with the backend server. Here is a guide on "),_c('a',{attrs:{"href":"https://angular.io/guide/architecture-services#introduction-to-services-and-dependency-injection"}},[_v("Introduction to services and dependency injection")]),_v(".")]),_v(" "),_c('p',[_v("While working with HTTP requests, we need to handle the operations that are involved with each request sent. TEAMMATES backend uses a "),_c('a',{attrs:{"href":"https://teammates.github.io/teammates/design.html#architecture"}},[_v("RESTful API architectural style")]),_v(". These RESTful endpoints mainly involve asynchronous operations.")]),_v(" "),_c('p',[_v("To work with such operations, we use "),_c('a',{attrs:{"href":"https://angular.io/guide/observables-in-angular"}},[_v("Observables")]),_v(" to ensure we resolve or reject them properly. Observables are part of the "),_c('a',{attrs:{"href":"https://rxjs.dev/guide/observable"}},[_v("RxJS library")]),_v(".")]),_v(" "),_c('p',[_v("With Observables, we are able to not only handle the basic outcomes of calling these RESTful APIs, but we are able to chain each response that is returned to us and make use of it to perform further operations.")]),_v(" "),_c('h1',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have never written tests of this extent. Aside from CS4218 which I am currently reading, the work done in TEAMMATES has really helped me to improve the way I write tests, and fully understand the importance of tests.")]),_v(" "),_c('h2',{attrs:{"id":"spy-es-spies"}},[_v("Spy-es/Spies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#spy-es-spies","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have used "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("spy")]),_v(" before. Ironically, I never knew how to use it properly till I had to write tests on the work done.")]),_v(" "),_c('p',[_v("I was struggling to figure how to pass a check in a method of this object, let's define object as A. Object A has a method, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("a()")]),_v(", that has a condition in it "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("if b(...)")]),_v(".")]),_v(" "),_c('p',[_v("Method "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("b()")]),_v(" belongs to object A. I could not set this condition to be true when I was writing the test. However, spy did the trick!")]),_v(" "),_c('p',[_v("All I had to do was write this powerful line of code:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("A spyA = spy(A.class);\n")]),_c('span',[_v("doReturn("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("true")]),_v(").when(spyA).b(...);\n")])])]),_c('p',[_v("And it worked! Sounds pretty trivial and silly I know... But Today I Learned (TIL)!")]),_v(" "),_c('p',[_v("Spying on an object allows us to dig deep into its methods and intentionally set the outcome of what we expect a variable/object or method outcome to be, we are in control and we define the result.")]),_v(" "),_c('p',[_v("Here is a good read on "),_c('a',{attrs:{"href":"https://www.baeldung.com/mockito-spy"}},[_v("spies")]),_v(". Love baeldung!")]),_v(" "),_c('h2',{attrs:{"id":"integration-tests"}},[_v("Integration Tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#integration-tests","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("My mentor said something that will have me remember for life - \"We should not use mocks for Integration Tests.\". This was a 'Today I Learned' moment.")]),_v(" "),_c('h1',{attrs:{"id":"hibernate"}},[_v("Hibernate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h2',{attrs:{"id":"context-2"}},[_v("Context"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#context-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I have only ever used Java in my school work, mainly those small OOP projects. If I can recall, the extent was up till using "),_c('a',{attrs:{"href":"https://www.javatpoint.com/java-jdbc"}},[_v("JDBC")]),_v(" connecting to MySQL, building a MVC architecture, that was pretty much it.")]),_v(" "),_c('p',[_v("But wow! Java has its own framework for building a backend. I have also heard of Spring Boot (I believe it's another backend framework!) but never used or looked into it before.")]),_v(" "),_c('p',[_v("At least for me, learning Hibernate has been really eye opening and refreshing! It has not only expanded my technical skillset in the realm of Java but it drills me on my fundamentals of Object Oriented Programming.")]),_v(" "),_c('p',[_v("The evidence is that Hibernate expects developers to write out the entity classes in an OOP fashion and it does all the setup behind the scenes, e.g., Setting up of the schemas in the chosen database.")]),_v(" "),_c('h2',{attrs:{"id":"annotations"}},[_v("Annotations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#annotations","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("These said classes contain "),_c('a',{attrs:{"href":"https://thorben-janssen.com/key-jpa-hibernate-annotations/"}},[_v("annotations")]),_v(" provided by Hibernate where we specify what we would like to see in our relational schemas from non-nullable columns, connecting schemas via associations and foreign keys, working with natural keys, etc. Pretty cool and interesting stuff!")]),_v(" "),_c('h2',{attrs:{"id":"database-functionalities-of-hibernate-s-api"}},[_v("Database Functionalities of Hibernate's API"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#database-functionalities-of-hibernate-s-api","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Enough of the OOP stuff! Let's dive into the database functionalities.")]),_v(" "),_c('p',[_v("Hibernate provides out of the box in-built database functionalities in its API. These functions are closely similar to how we write SQL queries.")]),_v(" "),_c('p',[_v("Let's take a look at an example.")]),_v(" "),_c('p',[_v("Here, we have 2 entities - Instructor and Account. An Account is linked to an Instructor via a One to Many relationship i.e., An Account to many Instructors, and an attribute is in the Instructors schema. Hibernate does the work of linking these entities via the association we just specified.")]),_v(" "),_c('p',[_v("We would like to find all Instructors of a specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("accountId")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("courseId")]),_v(".")]),_v(" "),_c('p',[_v("In Hibernate, this is what we will write:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("cr.select(instructorTable).where(cb.and(\n")]),_c('span',[_v("        cb.equal(instructorTable.get("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"courseId\"")]),_v("), courseId),\n")]),_c('span',[_v("        cb.equal(instructorTable.get("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"accountId\"")]),_v("), accountId)));\n")])])]),_c('p',[_v("In native SQL, this is what we would have written (PostgreSQL format, might not be entirely correct, off the top of my head):")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs sql"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("SELECT")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-operator"}},[_v("*")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("FROM")]),_v(" instructors\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("JOIN")]),_v(" accounts\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("ON")]),_v(" instructors.account "),_c('span',{pre:true,attrs:{"class":"hljs-operator"}},[_v("=")]),_v(" accounts.accountId;\n")])])]),_c('p',[_v("Hence, Hibernate provides plug-and-play functionalities that closely relate to SQL operations.")]),_v(" "),_c('h2',{attrs:{"id":"data-persistence-through-jpa"}},[_v("Data Persistence through JPA"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#data-persistence-through-jpa","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Another thing to highlight is the data persistency that Hibernate promises.")]),_v(" "),_c('blockquote',[_c('p',[_v("Hibernate is a standard implementation of the Java Persistence API (JPA) specification.")])]),_v(" "),_c('p',[_v("An evident example on persistency is...")]),_v(" "),_c('p',[_v("For example, we have a Person that we would like to update his/her name. Since we have written Person class in an OOP fashion as mentioned above, we could simply just update the name via the setter of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("name")]),_v(" attribute by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("person.setName(\"NewName\");")]),_v(", and that's it!")]),_v(" "),_c('p',[_v("You might ask, \"How about telling your database above this person's name change?\".")]),_v(" "),_c('p',[_v("Hibernate does this behind the scenes for you! This is all thanks to JPA.")]),_v(" "),_c('p',[_v("Also with the help of unit tests between the Logic and Db Layers, I was able to guarantee that this worked.")]),_v(" "),_c('h2',{attrs:{"id":"cascade-types-delete"}},[_v("Cascade Types (Delete)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#cascade-types-delete","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In SQL systems, when we delete a parent entity that references to a child entity or a list of child entities, all the child entites get deleted along with it.")]),_v(" "),_c('p',[_v("To do this in Hibernate, we can make use of a few different types of annotation, each has its own specific use.")]),_v(" "),_c('h3',{attrs:{"id":"specifying-cascade-cascadetype-remove-when-declaring-the-association-between-2-entities-parent-and-child"}},[_v("Specifying "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cascade = CascadeType.REMOVE")]),_v(" when declaring the association between 2 entities, parent and child"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#specifying-cascade-cascadetype-remove-when-declaring-the-association-between-2-entities-parent-and-child","onclick":"event.stopPropagation()"}})]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@OneToMany(mappedBy = \"parent\", cascade = CascadeType.REMOVE)")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" List<Child> children = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" ArrayList<>();\n")])])]),_c('p',[_v("This snippet says many child entities belong to one and only 1 parent. When we delete this parent entity, we'd want to also cascade this deletion/removal onto all of the child entities linked to this parent.")]),_v(" "),_c('p',[_v("This is the go-to for a simple cascade removal operation.")]),_v(" "),_c('h3',{attrs:{"id":"specifying-orphanremoval-true-when-declaring-the-association-between-2-entities-parent-and-child"}},[_v("Specifying "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("orphanRemoval = true")]),_v(" when declaring the association between 2 entities, parent and child"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#specifying-orphanremoval-true-when-declaring-the-association-between-2-entities-parent-and-child","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Firstly, this is very similar as to what we have above.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@OneToOne(mappedBy = \"parent\", orphanRemoval = true)")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Child child;\n")])])]),_c('p',[_v("The difference is that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("orphanRemoval")]),_v(" acts on the address of the parent entity. In other words, when we have a single child entity that references to a parent entity and we happen to use the setter method of this attribute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("child")]),_v(".")]),_v(" "),_c('p',[_v("I.e., Doing this.")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("parent.setChild("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(");\n")])])]),_c('p',[_v("Hibernate will automatically detach the child entity from the parent entity and when a child entity is left alone without a parent, orphaned in this case, Hibernate will remove this child entity from the database.")]),_v(" "),_c('h3',{attrs:{"id":"using-ondelete-action-ondeleteaction-cascade"}},[_v("Using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@OnDelete(action = OnDeleteAction.CASCADE)")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-ondelete-action-ondeleteaction-cascade","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I found this out when I was figuring how to remove an entity that does not have any association/relationship to the current entity except a 'reference' like this:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("SomeClass")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" ClassWeDelete classWeDelete;\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("This means that there is no purpose in keeping an entity of SomeClass when it only makes sense if an entity "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("classWeDelete")]),_v(" exists. It really does sound as if it's overlapping with the above two scenarios.")]),_v(" "),_c('p',[_v("But again, the key here is that there is no form of association/relation between these two different entities.")]),_v(" "),_c('p',[_v("Here are some resources that helped me on understanding this:")]),_v(" "),_c('ul',[_c('li',[_v("From "),_c('a',{attrs:{"href":"https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html#pc-cascade-on-delete"}},[_v("Hibernate Docs")])]),_v(" "),_c('li',[_v("From "),_c('a',{attrs:{"href":"https://www.baeldung.com/jpa-cascade-remove-vs-orphanremoval"}},[_v("Baeldung")])]),_v(" "),_c('li',[_v("From "),_c('a',{attrs:{"href":"https://stackoverflow.com/questions/4329577/how-does-jpa-orphanremoval-true-differ-from-the-on-delete-cascade-dml-clause"}},[_v("Stackoverflow")])])]),_v(" "),_c('h2',{attrs:{"id":"inheritance-strategies"}},[_v("Inheritance Strategies"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#inheritance-strategies","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As mentioned above, Hibernate as a framework works with OOP heavily. To start off, in order to model the relationship between entities, we need to define the java classes in an OOP fashion. Hibernate as an Object Relational Mapping tool does the heavylifting for us - we just need to tell it what we want in the OOP 'language' that Hibernate interprets really well in.")]),_v(" "),_c('p',[_v("I picked this up when I was tasked to design the parent-child relationship for the User's entity (in this "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12071"}},[_v("PR #12071")]),_v("). "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("User")]),_v(" is the parent entity that has child entities i.e., These child entities extend this parent "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("User")]),_v(" class.")]),_v(" "),_c('p',[_v("When considering which strategy to use, there were other factors to consider - performance, scalability, maintainability.")]),_v(" "),_c('p',[_v("These were what I found during the research of the 4 inheritance strategies that Hibernate provides.")]),_v(" "),_c('hr'),_v(" "),_c('p',[_v("Below are the findings for the 4 available inheritance strategies in "),_c('a',{attrs:{"href":"https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance"}},[_v("Hibernate")]),_v(":")]),_v(" "),_c('h3',{attrs:{"id":"mappedsuperclass"}},[_v("MappedSuperclass"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mappedsuperclass","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Not scalable. If we use this, ancestors cannot contain associations with other entities.")]),_v(" "),_c('li',[_v("Each DB table contains both base and sub classes properties.")])]),_v(" "),_c('h3',{attrs:{"id":"single-table"}},[_v("Single Table"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#single-table","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Performant (polymorphic query performance) as only 1 table needs to be accessed when querying parent entities. Best performance among the other strategies.")]),_v(" "),_c('li',[_v("However, can no longer use NOT NULL constraints on subclass entity properties. I think this means that the identifying attributes of the rows of subclasses can be nullable?")]),_v(" "),_c('li',[_v("For our case of Student/Instructor IS-A User, we will only have 1 table in the DB, i.e., User, with all the fields combined. This means Single Table is out of our options? Student is a User but it shouldn't have Instructor attributes/data.")]),_v(" "),_c('li',[_v("Could use discriminator values which is used to differentiate between rows belonging to separate subclass types.")])]),_v(" "),_c('h3',{attrs:{"id":"joined-table-aka-table-per-subclass-mapping-strategy"}},[_v("Joined Table aka Table-per-subclass mapping strategy"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#joined-table-aka-table-per-subclass-mapping-strategy","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("TLDR: An inherited state is retrieved by joining with the table of the superclass.")]),_v(" "),_c('li',[_v("Great because the PK of User appears in its child classes, e.g., In Student/Instructor.")]),_v(" "),_c('li',[_v("Performance issues as retrieving entities requires joins between the tables, expensive for large number of records. Number of joins is higher when we query parent class as it will join with every single related child.")]),_v(" "),_c('li',[_v("Discriminator column not required. But each subclass must declare a table column holding the object identifier (which is kind of what we want as each subclass table contains the FKs to the base class, User; PKs of sub class tables are also FKs to the superclass table PK. If "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@PKJoinCol")]),_v(" not set, the PK/FK cols are assumed to have the same names as the PK cols of primary table of the superclass).")]),_v(" "),_c('li',[_v("When using polymorphic queries, base class table must be joined with all subclass tables to fetch every associated subclass instance.")])]),_v(" "),_c('h3',{attrs:{"id":"table-per-class"}},[_v("Table per Class"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#table-per-class","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Performance issue because we union in the background when we query the base class i.e., User.")]),_v(" "),_c('li',[_v("Each table defines all persistent states of the class, including the inherited state.")]),_v(" "),_c('li',[_v("If we want to use polymorphic associations (eg An association to the superclass of our hierarchy), we need to use union subclass mapping. This requires multiple "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UNION")]),_v(" queries, be aware of performance implications of a large class hierarchy. Also, not all database systems support "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UNION ALL")]),_v(". "),_c('a',{attrs:{"href":"https://docs.jboss.org/hibernate/orm/5.4/javadocs/org/hibernate/dialect/PostgreSQL81Dialect.html"}},[_v("PostgreSQL81Dialect")]),_v(" supports "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UNION ALL")]),_v(".")])]),_v(" "),_c('p',[_v("Some resources I used to help me work out the different inheritance strategies")]),_v(" "),_c('ul',[_c('li',[_v("Directly from the "),_c('a',{attrs:{"href":"https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html#entity-inheritance"}},[_v("Hibernate documentation")])]),_v(" "),_c('li',[_v("From "),_c('a',{attrs:{"href":"https://www.baeldung.com/hibernate-inheritance"}},[_v("Baeldung")]),_v(". This was slightly out of date compared to the Hibernate docs")])]),_v(" "),_c('hr'),_v(" "),_c('h2',{attrs:{"id":"conclusion"}},[_v("Conclusion"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#conclusion","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Hibernate does provide way more than the above but let's look forward to what else we can learn in the future tasks!")]),_v(" "),_c('p',[_v("Alright that's it for now, stick around folks!")]),_v(" "),_c('h2',{attrs:{"id":"resources"}},[_v("Resources"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#resources","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Below are some wonderful resources that have helped me along the way:")]),_v(" "),_c('ul',[_c('li',[_v("Baeldung's take on Hibernate "),_c('a',{attrs:{"href":"https://www.baeldung.com/learn-jpa-hibernate"}},[_v("here")])]),_v(" "),_c('li',[_v("Official Documentation of Hibernate "),_c('a',{attrs:{"href":"https://docs.jboss.org/hibernate/orm/6.1/userguide/html_single/Hibernate_User_Guide.html"}},[_v("here")]),_v(", literally the bible but I find some examples to be quite bare and the rest of the resources here and have helped me tremendously!")]),_v(" "),_c('li',[_v("The man himself Thorben Janssen! Over "),_c('a',{attrs:{"href":"https://thorben-janssen.com/tutorials/"}},[_v("here")])])]),_v(" "),_c('h1',{attrs:{"id":"miscellaneous"}},[_v("Miscellaneous"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#miscellaneous","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h2',{attrs:{"id":"large-modifications-to-a-live-system"}},[_v("Large Modifications to a Live System"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#large-modifications-to-a-live-system","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Crediting my teammate, Kevin, for bringing up this point.")]),_v(" "),_c('p',[_v("This semestral project, v9-migration - moving from NoSQL to SQL, could be detrimental to a live system that relies on huge chunks of data to function if not done with caution.")]),_v(" "),_c('p',[_v("In order for the team to carefully perform such a huge operation, a migrated check on the documents (previously NoSQL) is done before paving the way for an endpoint to take when called for.")]),_v(" "),_c('p',[_v("This allows us to work independently on migrating the relevant parts of this live system, dual DB as said by my mentors, without affecting the current state that the hundreds of thousands users see.")]),_v(" "),_c('p',[_v("In my opinion, it is really neat!")]),_v(" "),_c('h2',{attrs:{"id":"a-good-follow-up-after-submitting-a-pr"}},[_v("A good follow-up after submitting a PR"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#a-good-follow-up-after-submitting-a-pr","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Through the PRs that I have submitted, I learned that we should always set it as a draft first and look at the PR from the reviewer's perspective to ensure that we did not miss out anything or if there is any section of code that can be further improved on.")]),_v(" "),_c('p',[_v("A helpful part of the UI for a PR in GitHub is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Files Changed")]),_v(" tab. This allows us to get a full overview of the changes that were made, additions or deletions, to each file.")]),_v(" "),_c('p',[_v("This can definitely go a long way, especially when we have a large PR.")]),_v(" "),_c('h2',{attrs:{"id":"a-different-view-when-looking-at-a-pr"}},[_v("A different view when looking at a PR"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#a-different-view-when-looking-at-a-pr","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Crediting my mentor, Samuel, for introducing this.")]),_v(" "),_c('p',[_v("When looking at a Pull Request on GitHub, tapping on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".")]),_v(" key on our keyboard brings us to another page - "),_c('a',{attrs:{"href":"https://docs.github.com/en/codespaces/the-githubdev-web-based-editor"}},[_v("GitHub's built-in Visual Studio Code in the web browser")]),_v(". Extremely cool stuff!")]),_v(" "),_c('h2',{attrs:{"id":"github-cli"}},[_v("GitHub CLI"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-cli","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Prior to reviewing PRs in TEAMMATES, I haven't really experienced any trouble with pulling the branch I am reviewing locally.")]),_v(" "),_c('p',[_v("I faced troubles in doing so when reviewing my first TEAMMATE's PR. The reason was that this branch in the PR resides in the developer's own fork.")]),_v(" "),_c('p',[_v("The process was different as to what I have always been in when reviewing a PR - was a remote branch that resides in the same repository and not a fork.")]),_v(" "),_c('p',[_v("My first go-to solution to this was to add the developer's fork as a remote repository for me to track locally by using (some parts of this "),_c('a',{attrs:{"href":"https://www.freecodecamp.org/news/how-to-sync-your-fork-with-the-original-git-repository/"}},[_v("guide")]),_v(" helped!):")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("git remote add ANY_FORK_NAME FORK_URL\n")]),_c('span',[_v("git fetch ANY_FORK_NAME\n")]),_c('span',[_v("git checkout BRANCH_IN_PR\n")])])]),_c('p',[_v("This worked fine! But at one point, I could not get this working.")]),_v(" "),_c('p',[_v("I spent quite awhile to search on why but to no avail.")]),_v(" "),_c('p',[_v("There was a suggestion on Stackoverflow that proposed others to use the "),_c('a',{attrs:{"href":"https://cli.github.com/"}},[_v("GitHub CLI")]),_v(".")]),_v(" "),_c('p',[_v("This was a plug-and-play tool, especially developing on Windows some setup could be rather cumbersome. All I had to do was visit the link above and install this CLI. Next, it was just a single line command...")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("gh pr checkout PR_NUMBER\n")])])]),_c('p',[_v("This was a "),_c('strong',[_c('em',[_v("life saver")])]),_v("! Checking out to the developer's branch in his/her fork and reviewing a PR now have never been simpler!")]),_v(" "),_c('h2',{attrs:{"id":"lightning-talks"}},[_v("Lightning Talks"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#lightning-talks","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("A small section dedicated to the Lightning Talks we had throughout the semester.")]),_v(" "),_c('p',[_v("I have learnt quite a few things from the talks given by my course mates. There were many interesting technologies that were introduced -- some of which I have heard of, and some that I have used before.")]),_v(" "),_c('p',[_v("My takeaways from these talks were:")]),_v(" "),_c('ol',[_c('li',[_v("Got to learn new technologies. Even though each talk is 7 minutes long, it was a great way to get started and I will be sure to try them out in the future!")]),_v(" "),_c('li',[_v("Some talks were non-technical but more on the soft skills e.g., Fergus' talk on Tiny PRs, Charisma's talk on how we can improve developers' experience, etc.")]),_v(" "),_c('li',[_v("Or the AI-related talks too.")])]),_v(" "),_c('h2',{attrs:{"id":"soft-skills"}},[_v("Soft Skills"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#soft-skills","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I believe that CS3282 is a great second part of the Thematic Systems Project pair. I thoroughly enjoyed interacing with the 81 juniors, and more so working with some of them.")]),_v(" "),_c('p',[_v("It was nice to for a change, take on the role of managing a project.")]),_v(" "),_c('p',[_v("Reviewing Pull Requests don't look as easy as it seems as I have to understand the changes made and the context of the problem.")]),_v(" "),_c('p',[_v("It was a really great experience!")]),_v(" "),_c('h1',{attrs:{"id":"database-migration"}},[_v("Database Migration"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#database-migration","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I am glad to have been a part of working on the database migration, not rewriting the functionalities and tests in the codebase, but to actually migration data over to Google Cloud NoSQL.")]),_v(" "),_c('h2',{attrs:{"id":"scripts"}},[_v("Scripts"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#scripts","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("It was my first time performing database migration. TEAMMATES' mentor Wilson said (roughly), this might be your only chance to migrate a database.")]),_v(" "),_c('p',[_v("Before this, I had a high level understanding of how database migration would work. However, it was not as I have thought.")]),_v(" "),_c('p',[_v("There are so many more components to it such as understanding the constraints/restrictions e.g., When we could, and could not, do X, Y and Z., technical challenges imposed by the cloud provider, and writing the "),_c('strong',[_v("scripts")]),_v(" to perform the migration.")]),_v(" "),_c('p',[_v("In my opinion, the learnings of this database migration is actually higher due to the fact that we are migrating from NoSQL to SQL. This means having to map the NoSQL documents over to SQL entities and ensuring that the affected relations' constraints are being complied with e.g., Foreign key constraints between 2 related/associated entities.")]),_v(" "),_c('p',[_v("Aside from these, I have also learnt the steps needed to perform data migration and careful planning is a necessity as each next step relies on the previous.")]),_v(" "),_c('p',[_v("The cursor figured by Fergus and Nicolas brought back what we were taught in CS2102 too!")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 28 Apr 2024, 13:07:30 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  