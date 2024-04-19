
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h2',{attrs:{"id":"end-to-end-testing-with-selenium"}},[_v("End to end testing with Selenium"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#end-to-end-testing-with-selenium","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"purpose-of-e2e-tests"}},[_v("Purpose of e2e tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#purpose-of-e2e-tests","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("E2E testing complements other form of tests by ensuring that the entire system works as intended and meets the user's requirements and expectations.\nE2E testing involves testing the application in a production-like environment or as close to it as possible. The complete application is tested from start to finish and it ensures that the application functions correctly from the user's perspective, including all the steps involved in completing a task or workflow.")]),_v(" "),_c('h3',{attrs:{"id":"how-to-write-e2e-tests"}},[_v("How to write E2E tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-to-write-e2e-tests","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Page Object Pattern is used in TEAMMATES to facilitate UI changes.\nIn this pattern, a class is created for each page . It helps separate the details of the interactions with the webpage with the rest of the test. Page Object provides an interface for the tests to interact with the page's UI without having to directly manipulate the HTML elements.")]),_v(" "),_c('p',[_v("Resourses:")]),_v(" "),_c('ul',[_c('li',[_v("Page Object Pattern: "),_c('a',{attrs:{"href":"https://martinfowler.com/bliki/PageObject.html"}},[_v("https://martinfowler.com/bliki/PageObject.html")])]),_v(" "),_c('li',[_v("Examples of e2e test with Selenium: "),_c('a',{attrs:{"href":"https://medium.com/@iamfaisalkhatri/end-to-end-testing-using-selenium-webdriver-and-java-4ff8667716ca"}},[_v("https://medium.com/@iamfaisalkhatri/end-to-end-testing-using-selenium-webdriver-and-java-4ff8667716ca")])]),_v(" "),_c('li',[_v("Selenium documention: "),_c('a',{attrs:{"href":"https://www.selenium.dev/documentation/webdriver/actions_api/"}},[_v("https://www.selenium.dev/documentation/webdriver/actions_api/")])])]),_v(" "),_c('h2',{attrs:{"id":"unit-tests"}},[_v("Unit tests"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#unit-tests","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h3',{attrs:{"id":"mocking"}},[_v("Mocking"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#mocking","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Mock objects can isolate the component being tested by replacing actual dependencies with mocked ones that simulates the behaviour of the real ones. In this way, the unit test can focus on testing the function of a single component without involving the entire system.")]),_v(" "),_c('h3',{attrs:{"id":"using-mockito"}},[_v("Using Mockito"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#using-mockito","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("We can use the Mockito framework in Junit tests.\nUse the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("mock()")]),_v(" method to create a mocked object of some class. Once created, a mock will remember all interactions. Then we can selectively verify whatever interactions we are interested in.")]),_v(" "),_c('p',[_v("We can verify the number of invocations of a method using "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("verify()")]),_v(". For example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("verify(accountsDb, times(1)).getAccountByGoogleId(googleId);\n")])])]),_c('p',[_v("We can force a method to return a specific value with "),_c('strong',[_v("stubbing")]),_v(". For example:")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("when(accountsDb.getAccountByGoogleId(googleId)).thenReturn(account);\n")])])]),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_v("Mockito documentation: "),_c('a',{attrs:{"href":"https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html"}},[_v("https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html")])])]),_v(" "),_c('h3',{attrs:{"id":"snapshot-testing-with-jest"}},[_v("Snapshot testing with Jest"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#snapshot-testing-with-jest","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Snapshot tests are a very useful tool when we want to make sure the UI does not change unexpectedly. Hence, when changing the UI, we need to regenerate the snapshots and commit them.")]),_v(" "),_c('p',[_v("Generated snapshots do not include platform specific or other non-deterministic data. We can use mock or spy on calls to the class constructor for ES6 class and all of its methods using Jest.")]),_v(" "),_c('p',[_v("Resourses:")]),_v(" "),_c('ul',[_c('li',[_v("JestJs documentation: "),_c('a',{attrs:{"href":"https://jestjs.io/docs/snapshot-testing"}},[_v("https://jestjs.io/docs/snapshot-testing")])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Fri, 19 Apr 2024, 11:17:41 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  