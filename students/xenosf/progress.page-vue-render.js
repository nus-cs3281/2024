
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"teammates"}},[_v("TEAMMATES"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#teammates","onclick":"event.stopPropagation()"}})]),_v(" "),_c('h4',{attrs:{"id":"overview"}},[_v("Overview"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#overview","onclick":"event.stopPropagation()"}})]),_v(" "),_c('ul',[_c('li',[_v("Assisted in v9 migration from Datastore to SQL:\n"),_c('ul',[_c('li',[_v("Actions: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StudentSearchIndexingWorkersAction")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GetSessionResultsAction")])]),_v(" "),_c('li',[_v("Unit tests: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AccountsRequestLogicTest")])]),_v(" "),_c('li',[_v("Integration tests: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FeedbackResponsesDbIT")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FeedbackResponseCommentsDbIT")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AccountRequestsDbIT")])])])]),_v(" "),_c('li',[_v("Instructor Account Request Form (ARF) project:\n"),_c('ul',[_c('li',[_v("Designed and created front-end UI for instructor account request form, including front-end form validation and integration with back-end.")]),_v(" "),_c('li',[_v("Added snapshot tests for form page.")]),_v(" "),_c('li',[_v("Created instructor request acknowledgement email.")]),_v(" "),_c('li',[_v("Created account request rejection endpoint.")]),_v(" "),_c('li',[_v("Migrated "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AccountRequestsLogicTest")]),_v(" again to work with new changes.")]),_v(" "),_c('li',[_v("Fixed bug where admin creating account still sent emails.")]),_v(" "),_c('li',[_v("Add SQL injection tests for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AccountRequestsDb")]),_v(".")]),_v(" "),_c('li',[_v("Add reCAPTCHA to public-facing request form.")])])]),_v(" "),_c('li',[_v("Created 2 issues: 1 implementation bug and 1 documentation bug.")])]),_v(" "),_c('h4',{attrs:{"id":"achievements-by-week"}},[_v("Achievements by Week"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#achievements-by-week","onclick":"event.stopPropagation()"}})]),_v(" "),_c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Week")]),_v(" "),_c('th',[_v("Achievements")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("5")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12733"}},[_v("Migrate StudentSearchIndexingWorkersAction #12733")])])]),_v(" "),_c('tr',[_c('td',[_v("R")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12719"}},[_v("Migrate GetSessionResultsAction #12719")])])]),_v(" "),_c('tr',[_c('td',[_v("7")]),_v(" "),_c('td',[_v("Submitted issue: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/issues/12875"}},[_v("Some feedback sessions duplicated in student home page #12875")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12849"}},[_v("Add integration tests for FeedbackResponseCommentsDb #12849")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12856"}},[_v("Add integration tests for FeedbackResponsesDb #12856")])])]),_v(" "),_c('tr',[_c('td',[_v("8")]),_v(" "),_c('td',[_v("Created wireframe for new account request form UI")])]),_v(" "),_c('tr',[_c('td',[_v("9")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12898#pullrequestreview-1939749544"}},[_v("Add status and comments to AccountRequest #12898")])])]),_v(" "),_c('tr',[_c('td',[_v("9")]),_v(" "),_c('td',[_v("Submitted issue: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/issues/12909"}},[_v("Dev docs (E2E testing): Chromedriver link broken #12909")])])]),_v(" "),_c('tr',[_c('td',[_v("10")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12929/"}},[_v("Upgrade instructor request form UI #12929")])])]),_v(" "),_c('tr',[_c('td',[_v("10")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12942"}},[_v("Add snapshot tests for instructor request form UI #12942")])])]),_v(" "),_c('tr',[_c('td',[_v("10")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12944"}},[_v("Create instructor request acknowledgement email #12944")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12974"}},[_v("Change institute length limit #12974")])])]),_v(" "),_c('tr',[_c('td',[_v("11")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12943"}},[_v("Integrate instructor request form with API #12943")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Reviewed PR: Add AccountRequest Rejection email generator. #12987 "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12987#pullrequestreview-1985379377"}},[_v("[1]")]),_v(" "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12987#pullrequestreview-1985425576"}},[_v("[2]")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12780"}},[_v("Migrate AccountRequestsLogicTest #12780")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12985"}},[_v("Create reject account request endpoint #12985")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/12989#pullrequestreview-1989850246"}},[_v("Create Rejection Modal for Account Requests #12989")])])]),_v(" "),_c('tr',[_c('td',[_v("12")]),_v(" "),_c('td',[_v("Reviewed PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/13003#pullrequestreview-1992202918"}},[_v("Fix flaky component test #13003")])])]),_v(" "),_c('tr',[_c('td',[_v("13")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/13032"}},[_v("Check if account request is not created by admin before sending email #13032")])])]),_v(" "),_c('tr',[_c('td',[_v("13")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/13043"}},[_v("Migrate AccountRequestsLogic unit tests #13043")])])]),_v(" "),_c('tr',[_c('td',[_v("13")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/13047"}},[_v("Add SQL injection tests for AccountRequestsDb #13047")])])]),_v(" "),_c('tr',[_c('td',[_v("R")]),_v(" "),_c('td',[_v("Authored PR: "),_c('a',{attrs:{"href":"https://github.com/TEAMMATES/teammates/pull/13081"}},[_v("Add CAPTCHA to ARF #13081")])])])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.4.0")])]),_v(" on Sun, 28 Apr 2024, 8:29:45 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  