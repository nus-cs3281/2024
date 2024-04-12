
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"hibernate"}},[_v("Hibernate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"session-flush"}},[_c('a',{attrs:{"href":"https://www.baeldung.com/spring-jpa-flush"}},[_v("session.flush()")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#session-flush","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("EntityManagers do not always immediate execute the underly SQL statement. One such example is when we create and persist a new entity, the createdAt timestamp is not updated in the entity object in our application until we call flush().")]),_v(" "),_c('p',[_v("This is because by calling flush() we can ensure that all outstanding SQL statements are executed and that the persistence context and the db is synchronized.")]),_v(" "),_c('h4',{attrs:{"id":"persistent-entities"}},[_v("Persistent entities"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#persistent-entities","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://www.baeldung.com/hibernate-session-object-states"}},[_v("Persistent entities")]),_v(" are entities that are known by the persistence provider, Hibernate in this case. An entity(object) can be made persistent by either saving or reading an object from a session. Any "),_c('a',{attrs:{"href":"https://docs.jboss.org/hibernate/orm/4.0/devguide/en-US/html_single/#d0e1739"}},[_v("changes (e.g., calling a setter) made to persistent entities are automatically persisted into the database")]),_v(".")]),_v(" "),_c('p',[_v("We can stop hibernate from tracking and automatically updating the entities by calling "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("detach(Entity)")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("evict(Entity)")]),_v(". This will result in the entity becoming detached. While detached, Hibernate will have no longer track the changes made to the entity. To save the changes to the database or make the entity persistent again, we can use  "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge(Entity)")]),_v(".")]),_v(" "),_c('h4',{attrs:{"id":"references"}},[_v("References"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#references","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("While using the new SQL db, we often find ourselves needing to refer to another related entity for example "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FeedbackSessionLogs.setStudent(studentEntity)")]),_v(". This would often require us to query the db for the object and then call the setter. This is inefficient especially if we already have information like the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("studentEntity")]),_v("'s primary key.")]),_v(" "),_c('p',[_v("Hibernate provides a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("getReference()")]),_v(" method which returns a proxy to an entity, that only contains a primary key, and other information are lazily fetched. While creating the proxy, Hibernate does not query the db. "),_c('a',{attrs:{"href":"https://www.baeldung.com/jpa-entity-manager-get-reference"}},[_v("Here")]),_v(" is an article that goes through different scenarios using reference to see which operations would result in Hibernate performing a SELECT query and which does not. It also includes some information on cached entities in Hibernate.")]),_v(" "),_c('p',[_v("It is important to note that, since Hibernate does not check that the entity actually exists in the db on creation of the proxy, the proxy might contain a primary key that does not exist in the db. The application should be designed to handle such scenarios when using references. "),_c('a',{attrs:{"href":"https://thorben-janssen.com/jpa-getreference/#the-getreference-method"}},[_v("Here")]),_v(" is more information on the difference between "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("getReference()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find()")]),_v(".")]),_v(" "),_c('h3',{attrs:{"id":"testing"}},[_v("Testing"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#testing","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"mockito"}},[_v("Mockito"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mockito","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("In unit testing, a single component is isolated and tested by replacing its dependencies with stubs/mocks. This allows us to test only the behaviour of the SUT.")]),_v(" "),_c('p',[_c('a',{attrs:{"href":"https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html"}},[_v("Mockito")]),_v(" provides multiple methods that help to verify the behaviour of the SUT and also determine how the mocked dependencies are supposed to behave.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('a',{attrs:{"href":"https://www.baeldung.com/mockito-verify"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("verify()")])]),_v(" this method allows us to verify that a method of a mocked class is called. It can be combined with other methods like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("times(x)")]),_v(" which allowsus to verify that the method is only called "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("x")]),_v(" times.")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://www.baeldung.com/mockito-argument-matchers"}},[_v("Argument matchers")]),_v(" like "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("anyInt()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("anyString()")]),_v(" and allows us to define a custom matcher using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("argThat()")]),_v(". These argument matchers can be used to ensure that the correct arguments are being passed to the other dependencies. This is useful if the method you are testing does not return a value useful for determining the correctness of the method.")])]),_v(" "),_c('li',[_c('p',[_c('a',{attrs:{"href":"https://www.baeldung.com/mockito-behavior"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("when()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("thenReturn()")])]),_v(" These are methods that allow us to define the behaviour of other dependencies that are not under test.")]),_v(" "),_c('p',[_v("For e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("when(mockLogic.someMethod(args)).thenReturn(value)")]),_v(" makes it such that when the SUT invokes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("someMethod()")]),_v(" with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("args")]),_v(" from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mockLogic")]),_v(" class, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("value")]),_v(" is will be returned by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("someMethod(args)")]),_v(".")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 12 Apr 2024, 6:31:13 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  