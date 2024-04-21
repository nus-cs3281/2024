
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"angular"}},[_v("Angular"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"context"}},[_v("Context"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#context","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Having worked on CATcher for IWM last summer, I've gained familiarity with Angular. Working on TEAMMATES, I've deepened my knowledge\nof the framework, and there were two new things that I've picked up about Angular.")]),_v(" "),_c('h3',{attrs:{"id":"pipes"}},[_v("Pipes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#pipes","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Although I was previously aware of the use of pipes, I was not aware of the performance aspect. In particular, using pipes\nare much more efficient than methods to render strings:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_v("\n")]),_c('span',[_v("<h1>{{ name.toLowerCase() }}</h1>\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"xml"}},[_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("<"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("h1")]),_v(">")]),_v("{{ name | lowercase }}"),_c('span',{pre:true,attrs:{"class":"hljs-tag"}},[_v("</"),_c('span',{pre:true,attrs:{"class":"hljs-name"}},[_v("h1")]),_v(">")])]),_v("\n")]),_c('span',[_v("\n")])])]),_c('p',[_v("When using a method, it is always run whenever the component is detecting changes. However, for pipes, they are only run\nwhen the input of the pipe, in this case "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("name")]),_v(", is changed.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://medium.com/angular-in-depth/tiny-angular-pipe-to-make-any-function-memoizable-f6c8fa917f2f"}},[_v("Here")]),_v(" is a medium article that\ndives more into the benefits of using pipes.")]),_v(" "),_c('h3',{attrs:{"id":"angular-template"}},[_v("Angular Template"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#angular-template","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("ES6 template literals and nested string interpolation aren't supported in Angular:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs javascript"}},[_c('span',[_v("\n")]),_c('span',[_v("<div>{{ "),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("`("),_c('span',{pre:true,attrs:{"class":"hljs-subst"}},[_v("${text}")]),_v(")`")]),_v(") }}</div>\n")]),_c('span',[_v("\n")])])]),_c('p',[_v("This was something that I learnt from an open source contributor in "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12249"}},[_v("this")]),_v(" PR.")]),_v(" "),_c('h2',{attrs:{"id":"hibernate"}},[_v("Hibernate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"context-2"}},[_v("Context"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#context-2","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Prior to taking CS3281, I've only used Java in CS2030S, CS2040S and of course CS2103T, never on a live system used by actual users.\nThis was hence my first experience in writing a Java backend, and I'm glad that I got the opportunity, and I am confident that\nI'm now able to work on backend systems with Hibernate, from defining database tables, specifying entity relations, and writing queries.\nThe following are a few aspects of Hibernate I'd like to highlight.")]),_v(" "),_c('h3',{attrs:{"id":"entities"}},[_v("Entities"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#entities","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In Hibernate, each class created by the developer creates a corresponding table in the database. (with some exceptions, I'll get to that later) A typical Hibernate entity looks like this:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Entity")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Class")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Id")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@GeneratedValue")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Long id;\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Column(nullable=false)")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" String field;\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("There's quite alot going on here, so let's break it down:")]),_v(" "),_c('ul',[_c('li',[_v("On top of normal Java classes, Hibernate uses annotations (preceded with '@') to denote properties of classes and class fields.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Entity")]),_v(" annotation identifies a class as an entity class, whose fields are to be persisted to the database.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Id")]),_v(" specifies the primary key.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@GeneratedValue")]),_v(" is typically used for primary key columns, to denote that a field should be generated by the database upon object creation.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("@Column")]),_v(" is an optional annotation that allows one to customise the mapping between the entity attribute and database column. In this case, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nullable=false")]),_v(" ensures that the database column "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("field")]),_v(" for the table "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Class")]),_v(" cannot have non-null values.")])]),_v(" "),_c('p',[_v("A database table corresponding to the class will be created, with columns "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("id")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("field")]),_v(".")]),_v(" "),_c('p',[_v("There are numerous annotations, and Thorben Janssen's "),_c('a',{attrs:{"href":"https://thorben-janssen.com/key-jpa-hibernate-annotations/"}},[_v("guide")]),_v(" gives a in depth overview of the most essential ones.")]),_v(" "),_c('h3',{attrs:{"id":"entity-lifecycle"}},[_v("Entity lifecycle"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#entity-lifecycle","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Once the entities are defined, we can perform create, update and delete operations, and these effects will be persisted to the database.")]),_v(" "),_c('p',[_v("For instance, when we have a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Student")]),_v(" class with a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("name")]),_v(" field, and we would like to update it, we simply call the field's setter, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("student.setName(\"newName\");")]),_v(" to update the student's name.")]),_v(" "),_c('p',[_v("Hibernate will persist the changes to the database automatically, without the developer having to explicitly do so.")]),_v(" "),_c('p',[_v("There's a great guide on the entity lifecycle "),_c('a',{attrs:{"href":"https://thorben-janssen.com/entity-lifecycle-model/"}},[_v("here")])]),_v(" "),_c('h3',{attrs:{"id":"inheritance"}},[_v("Inheritance"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#inheritance","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Inheritance is a key feature of OOP languages such as Java, and is also supported by Hibernate.")]),_v(" "),_c('p',[_v("There are a few different ways that inherited entities are mapped to database tables.")]),_v(" "),_c('p',[_v("One of which is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SingleTable")]),_v(" inheritance strategy.")]),_v(" "),_c('p',[_v("As per its namesake, in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SingleTable")]),_v(" inheritance, all child classes are mapped to one table.")]),_v(" "),_c('p',[_v("For example, the classes below,")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Entity")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Inheritance(strategy = InheritanceType.SINGLE_TABLE)")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Class")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Id")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@GeneratedValue")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Long id;\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Entity")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("ClassA")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("extends")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Class")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Column")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" String description;\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Entity")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("ClassB")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("extends")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Class")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-meta"}},[_v("@Column")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("private")]),_v(" Integer quantity;\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Will be mapped onto a single table, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Class")]),_v(", with the fields "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("id")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("description")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("quantity")]),_v(".")]),_v(" "),_c('p',[_v("A drawback would be that we cannot enforce non-null constraints on any of the database columns, since for records of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ClassA")]),_v(", they\nwould have the attribute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("description")]),_v(" but not "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("quantity")]),_v(", and for records of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ClassB")]),_v(", they would not have the attribute "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("description")]),_v("\nbut have "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("quantity")]),_v(".")]),_v(" "),_c('p',[_v("An advantage of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SingleTable")]),_v(" strategy compared to others is that there is no need for joins. For instance, in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Joined Table")]),_v(" strategy,\neach subclass will have its own table, and when querying, it is joined with the parent class' table. This was one of the reasons why\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SingleTable")]),_v(" inheritance was ultimately chosen for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FeedbackQuestion")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FeedbackResponse")]),_v(" entities, as they had many subclasses.")]),_v(" "),_c('p',[_v("Baeldung's "),_c('a',{attrs:{"href":"https://www.baeldung.com/hibernate-inheritance"}},[_v("guide")]),_v(" on inheritance strategies was extremely helpful to me in understanding the differences between them, and the tradeoffs one needs to consider when choosing among them.")]),_v(" "),_c('h2',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"context-3"}},[_v("Context"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#context-3","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Prior to working on TEAMMATES, the only exposure to software testing I had was in CS2103T. Working on the migration to postgresql involved writing tests, and\nthrough that I've gained a slightly better understanding of the different types of tests, and a much greater appreciation of the importance of tests. When\nmigrating the system to postgres, having the old test cases provided us with some reassurance that the changes we made to the system would not impact the\nexisting functionalities, which is absolutely essential for a live system.")]),_v(" "),_c('h3',{attrs:{"id":"unit-vs-integration-testing"}},[_v("Unit vs Integration testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#unit-vs-integration-testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Unit testing is testing individual components, in isolation. For components with dependancies, these dependancies are mocked to ensure that any errors\nwould be due to bugs in the component itself, and not its underlying dependancies. An example of this in TEAMMATES would be that when doing unit testing\nfor the logic layer, which depends on the database layer, we mock the database layer.")]),_v(" "),_c('p',[_v("Integration testing on the other hand, tests if the various components are working when combined together. Building upon the unit testing example, when doing\nintegration testing for the logic layer, we would not mock the database layer, but rather have the database layer actually perform its operations.")]),_v(" "),_c('p',[_v("Having both of these types of tests are necessary in a big system like TEAMMATES: unit testing gives us the reassurance that the invididual components\nare working on its own, while integration testing ensures that they work together. With good unit testing, we can be certain that any issues in integration\ntesting is most likely due to the interaction between the components, rather than the component itself, making debugging easier. The tests together ensures that no\nbreaking changes are introduced to the system, and is thus essential in a live system like TEAMMATES.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.softwaretestinghelp.com/the-difference-between-unit-integration-and-functional-testing/"}},[_v("Here")]),_v(" is an article that summarises the differences between\nunit testing, integration testing and")]),_v(" "),_c('h2',{attrs:{"id":"oop-patterns"}},[_v("OOP patterns"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#oop-patterns","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"builder-pattern"}},[_v("Builder pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#builder-pattern","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The builder pattern is useful when a class has many fields that are optional upon instantiation.\nImagine a Java class that has 3 fields:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Foo")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    String a;\n")]),_c('span',[_v("    Integer b;\n")]),_c('span',[_v("    Long c;\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("For this class, say that a, b and c are optional, and that they are not needed when creating a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Foo")]),_v(" object.\nTo cater for every combination, we would require many constructors:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("Foo(String a) {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".a = a;\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("Foo(String a, Integer b) {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".a = a;\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".b = b;\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("Foo(String a, Integer b, Long c) {\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".a = a;\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".b = b;\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".c = c;\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")])])]),_c('p',[_v("And many more for the other combinations...")]),_v(" "),_c('p',[_v("To solve this issue, we can make use of the builder pattern, creating a static builder class inside "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Foo")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" class "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("FooBuilder")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" Foo "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("setA")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(String a)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".a = a;\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(";\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" Foo "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("setB")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(Integer b)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".b = b;\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(";\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" Foo "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("setC")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(Long c)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(".c = c;\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(";\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" Foo "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("build")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("()")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Foo("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("this")]),_v(");\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")])])]),_c('p',[_v("We can then create "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Foo")]),_v(", with a b or c being optional without having to create numerous constructors:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("Foo foo = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" Foo.FooBuilder().setA("),_c('span',{pre:true,attrs:{"class":"hljs-string"}},[_v("\"string\"")]),_v(").setC("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("100")]),_v(").build();\n")])])]),_c('h3',{attrs:{"id":"factory-pattern"}},[_v("Factory pattern"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#factory-pattern","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("The factory pattern should be used when an object needs to be created, but the object to be created is dependant on criteria.\nThe creation logic should then be encapsulated in a factory method.")]),_v(" "),_c('p',[_v("A simple example would be creation of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SomeClass")]),_v(" below:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("abstract")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("SomeClass")]),_v(" ")]),_v("{\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("SomeClassA")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("extends")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("SomeClass")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    Integer a;\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("SomeClassB")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("extends")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("SomeClass")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("boolean")]),_v(" b;\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("Say that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SomeClass")]),_v(" is required to be created, and whether we create "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SomeClassA")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SomeClassB")]),_v(" depends on an enum:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("enum")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Type")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    A,\n")]),_c('span',[_v("    B\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("Type type = Type.A;\n")]),_c('span',[_v("SomeClass someClass;\n")]),_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("switch")]),_v("(type) {\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" Type.A:\n")]),_c('span',[_v("    someClass = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" SomeClassA("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(");\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("break")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" Type.B:\n")]),_c('span',[_v("    someClass = "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" SomeClassB("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("true")]),_v(");\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("break")]),_v(";\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("default")]),_v(":\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("break")]),_v(";\n")]),_c('span',[_v("}\n")])])]),_c('p',[_v("It would be much better to encapsulate this logic in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SomeClass")]),_v(":")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("abstract")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("class")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("SomeClass")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    \n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("static")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("createSomeClass")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(Type type)")]),_v(" ")]),_v("{\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("switch")]),_v("(type) {\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" Type.A:\n")]),_c('span',[_v("            "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" SomeClassA("),_c('span',{pre:true,attrs:{"class":"hljs-number"}},[_v("1")]),_v(");\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("case")]),_v(" Type.B:\n")]),_c('span',[_v("            "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("new")]),_v(" SomeClassB("),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("true")]),_v(");\n")]),_c('span',[_v("        "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("default")]),_v(":\n")]),_c('span',[_v("            "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("return")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("null")]),_v(";\n")]),_c('span',[_v("        }\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("}\n")]),_c('span',[_v("\n")]),_c('span',[_v("SomeClass someClass = SomeClass.createSomeClass(type);\n")]),_c('span',[_v("\n")])])]),_c('p',[_v("This way, the creation logic is able to be reused throughout the application, and also any changes, such as adding a new subclass, can be more easily done,\nallowing for more extensible code.\n"),_c('a',{attrs:{"href":"https://sergeyzhuk.me/2017/05/22/when-to-factory/"}},[_v("Here")]),_v(" is a great article on why the factory method is useful.")]),_v(" "),_c('h2',{attrs:{"id":"misc"}},[_v("Misc"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#misc","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"migrations"}},[_v("Migrations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#migrations","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Observing how the migration from datastore to postgresql is carried out for a live system used by users worldwide, with no impact to them is pretty amazing to me.\nOur dualDB approach, where we still query the datastore for courses that are not migrated yet, ensures that functionalities are still avaliabile for the users,\neven when we make huge changes to the system. This is also known as a trickle migration.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.talend.com/resources/understanding-data-migration-strategies-best-practices/"}},[_v("Here")]),_v(" is an article I came across when searching up on\nthe types of migration strategies used.")]),_v(" "),_c('h3',{attrs:{"id":"github-web-editor"}},[_v("Github web editor"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-web-editor","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Credits to Samuel for this, but I was previously unaware that github had a web editor. By pressing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".")]),_v(" on PRs, it opens the web editor which is\nextremely useful for reviewing PRs, especially those that make changes to large files, so that we can easily view the changes made with the context\nof the entire file, and also its various dependencies.")]),_v(" "),_c('h3',{attrs:{"id":"git-interactive-rebase"}},[_v("Git interactive rebase"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#git-interactive-rebase","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("I've learnt the use of interactive rebase, and how I can use it to rewrite my commit history. This is particularly useful when I would like to remove\ncommits that are unncesary (for instance commits like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fix checkstyle")]),_v("), and create a more meaningful commit chain for my PRs. Although the commits are\nsquashed in the end when merged, I find that it is important especially for larger PRs to keep a meaningful commit history, to make it easier on reviewers.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase"}},[_v("Here")]),_v(" is an article by atlassian that provides more details about the rebase command.")]),_v(" "),_c('h3',{attrs:{"id":"github-cli"}},[_v("Github CLI"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#github-cli","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Prior to this module, I've never used the github CLI, sticking with just "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("git")]),_v(" commands. However, I found it very useful to use the CLI, especially when reviewing\nPRs, as it allowed me to checkout someone's branch with just one command, which github provides on the review page, rather than having to add their remote repo,\nfetching their branches and then checking out the branch.")])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 21 Apr 2024, 9:46:42 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  