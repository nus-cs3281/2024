## Summary

- Aided in the migration from NoSQL (Datastore) to SQL
  - Migrated Action: GetOngoingSessionsAction ([#12710](https://github.com/TEAMMATES/teammates/pull/12710))
  - SQL Injection Tests ([#12857](https://github.com/TEAMMATES/teammates/pull/12857), [#12858](https://github.com/TEAMMATES/teammates/pull/12858))
  - Migrated E2E test: InstructorCourseDetailsPageE2ETest ([#12908](https://github.com/TEAMMATES/teammates/pull/12908))
  - Reviewed PRs together with the TEAMMATES team ([my reviews](https://github.com/TEAMMATES/teammates/pulls?q=is%3Apr+reviewed-by%3Ajayasting98+12048) for the migration issue [#12048](https://github.com/TEAMMATES/teammates/issues/12048))
- Mentored junior developers
  - In the first half of the semester, primarily Marques
  - In the second half of the semester, primarily Xenos in the second half, and secondarily Dominic Berzin with Eunice (his primary mentor)
- Developed the Account Request Form (ARF) feature
  - Prepared the tech design together with the ARF team, and adjusted it for aany changing requirements or problems found
  - Planned the ARF task allocation for each milestone with the other ARF mentors
  - Implemented the feature together with the ARF team ([my authored PRs](https://github.com/TEAMMATES/teammates/pulls?q=is%3Apr+author%3Ajayasting98+11878) for the ARF issue [#11878](https://github.com/TEAMMATES/teammates/issues/11878))
  - Reviewed PRs together with the ARF team ([my reviews](https://github.com/TEAMMATES/teammates/pulls?q=is%3Apr+reviewed-by%3Ajayasting98+11878) for the ARF issue [#11878](https://github.com/TEAMMATES/teammates/issues/11878))
- Submitted issues
  - Found (and fixed) critical bug where account requests were no longer being indexed ([#12921](https://github.com/TEAMMATES/teammates/issues/12921), [#12923](https://github.com/TEAMMATES/teammates/pull/12923))
  - Provided some low-hanging fruits for new contributors ([#12900](https://github.com/TEAMMATES/teammates/issues/12900), [#12901](https://github.com/TEAMMATES/teammates/issues/12901), [#12954](https://github.com/TEAMMATES/teammates/issues/12954))
- Worked on Python (CPython) for my external project. More details can be found in my observations.

## Submitted Issues

| Week | Achievements |
| ---- | ------------ |
|  6      | [Users with deadline extensions may not be able to submit feedback responses in V9](https://github.com/TEAMMATES/teammates/pull/12774) | <!-- 240223          -->
|  8      | [Gradle task componentTests should not stop entirely when only one task fails](https://github.com/TEAMMATES/teammates/pull/12900) | <!-- 240315          -->
|  8      | [Check if the search service is active in account request search test](https://github.com/TEAMMATES/teammates/pull/12901) | <!-- 240315          -->
|  9      | [Account requests are no longer search indexed, when they should be](https://github.com/TEAMMATES/teammates/pull/12921) | <!-- 240321          -->
| 10      | [CreateAccountAction seems to have redundant code](https://github.com/TEAMMATES/teammates/pull/12954) | <!-- 240328          -->

## Authored Pull Requests

| Week | Achievements |
| ---- | ------------ |
|  2 -  3 | [[#12048] Migrate GetOngoingSessionsAction for V9](https://github.com/TEAMMATES/teammates/pull/12710) | <!-- 240122 - 240203 -->
| Rc -  9 | [[#12048] Add SQL injection tests in FeedbackSessionsDbIT](https://github.com/TEAMMATES/teammates/pull/12857) | <!-- 240228 - 240318 -->
| Rc      | [[#12048] Add SQL injection tests in NotificationDbIT](https://github.com/TEAMMATES/teammates/pull/12858) | <!-- 240229 - 240303 -->
|  8 -  9 | [[#11878] Add status and comments to AccountRequest](https://github.com/TEAMMATES/teammates/pull/12898) | <!-- 240315 - 240319 -->
|  8 -  9 | [[#11878] Remove AccountRequest unique constraint](https://github.com/TEAMMATES/teammates/pull/12899) | <!-- 240315 - 240319 -->
|  9 - 10 | [[#12048] Migrate InstructorCourseDetailsPageE2ETest](https://github.com/TEAMMATES/teammates/pull/12908) | <!-- 240318 - 240327 -->
|  9 - 10 | [[#11878] Modify CreateAccountRequestAction](https://github.com/TEAMMATES/teammates/pull/12913) | <!-- 240319 - 240325 -->
|  9      | [[#12921] Reintroduce AccountRequest search indexing](https://github.com/TEAMMATES/teammates/pull/12923) | <!-- 240321 - 240322 -->
|  9 - 10 | [[#11878] Add new account request alert email for admins](https://github.com/TEAMMATES/teammates/pull/12926) | <!-- 240323 - 240325 -->
| 10      | [[#11878] Add methods to get an account request by ID](https://github.com/TEAMMATES/teammates/pull/12953) | <!-- 240328 - 240328 -->
| 10      | [[#11878] Get account requests by ID in storage update method](https://github.com/TEAMMATES/teammates/pull/12955) | <!-- 240328 - 240329 -->
| 10      | [[#11878] Get by account request ID in SQL injection tests](https://github.com/TEAMMATES/teammates/pull/12956) | <!-- 240328 - 240329 -->
| 10      | [[#11878] Foundation for getting by ID in account request endpoints](https://github.com/TEAMMATES/teammates/pull/12957) | <!-- 240328 - 240329 -->
| 12      | [[#11878] Reference account requests by ID in tests](https://github.com/TEAMMATES/teammates/pull/13017) | <!-- 240414          -->

## Reviewed Pull Requests

| Week | Achievements |
| ---- | ------------ |
|  2 -  3 | [[#12048] Migrate RemoveDataBundle](https://github.com/TEAMMATES/teammates/pull/12709) | <!-- 240128 - 240202 -->
|  3 -  4 | [[#12048] Refactor email generator](https://github.com/TEAMMATES/teammates/pull/12723) | <!-- 240204 - 240206 -->
|  4      | [[#12048] Migrate SubmitFeedbackResponseAction's Logic and Db methods](https://github.com/TEAMMATES/teammates/pull/12732) | <!-- 240207          -->
|  5 -  6 | [[#12048] Migrate UpdateStudentAction](https://github.com/TEAMMATES/teammates/pull/12727) | <!-- 240213 - 240225 -->
|  5      | [[#12048] Migrate FeedbackSessionClosedRemindersAction](https://github.com/TEAMMATES/teammates/pull/12738) | <!-- 240214          -->
|  5 -  6 | [[#12048] Migrate FeedbackSessionOpeningRemindersAction](https://github.com/TEAMMATES/teammates/pull/12739) | <!-- 240214 - 240223 -->
|  6 - Rc | [[#12048] SQL injection test for AccountRequestsDbIT](https://github.com/TEAMMATES/teammates/pull/12788) | <!-- 240225 - 240229 -->
| Rc      | [[#12048] SQL injection test for FeedbackQuestionsDbIT](https://github.com/TEAMMATES/teammates/pull/12847) | <!-- 240227          -->
| Rc      | [[#12048] SQL injection test for CoursesDbIT](https://github.com/TEAMMATES/teammates/pull/12801) | <!-- 240227 - 240229 -->
| Rc      | [[#12048] SQL Injection Test for FeedbackResponsesDb](https://github.com/TEAMMATES/teammates/pull/12848) | <!-- 240229          -->
| Rc      | [[#12048] SQL injection test for AccountsDbIT](https://github.com/TEAMMATES/teammates/pull/12800) | <!-- 240229          -->
| Rc      | [[#12048] SQL injection test for UsersDbIT](https://github.com/TEAMMATES/teammates/pull/12851) | <!-- 240229          -->
|  8      | [[#11878] Enable CI on account request form branch](https://github.com/TEAMMATES/teammates/pull/12888) | <!-- 240312          -->
|  9      | [[#12909] :Dev docs (E2E testing): update Chromedriver link](https://github.com/TEAMMATES/teammates/pull/12924) | <!-- 240322          -->
|  9 - 10 | [[#11878] Add GetAllPendingAccountRequests API](https://github.com/TEAMMATES/teammates/pull/12927) | <!-- 240324 - 240325 -->
|  9 - 10 | [[#11878] Upgrade instructor request form UI](https://github.com/TEAMMATES/teammates/pull/12929) | <!-- 240324 - 240327 -->
| 10      | [[#11878] Update Admin Home Page UI for ARF](https://github.com/TEAMMATES/teammates/pull/12933) | <!-- 240327          -->
| 10      | [[#11878] Add snapshot tests for instructor request form UI](https://github.com/TEAMMATES/teammates/pull/12942) | <!-- 240327          -->
| 10      | [[#11878] Admin Search UI Update for ARF](https://github.com/TEAMMATES/teammates/pull/12945) | <!-- 240327          -->
| 10 - 11 | [[#11878] Integrate instructor request form with API](https://github.com/TEAMMATES/teammates/pull/12943) | <!-- 240327 - 240404 -->
| 10      | [[#11878] Create instructor request acknowledgement email](https://github.com/TEAMMATES/teammates/pull/12944) | <!-- 240327 - 240330 -->
| 10      | [[#11878] Merge master into account-request-form](https://github.com/TEAMMATES/teammates/pull/12972) | <!-- 240330 - 240331 -->
| 10      | [[#11878] Update SearchAccountRequests endpoint](https://github.com/TEAMMATES/teammates/pull/12950) | <!-- 240331          -->
| 11      | [[#11878] Change institute length limit](https://github.com/TEAMMATES/teammates/pull/12974) | <!-- 240402          -->
| 11 -  ? | [[#12900] Gradle task componentTests should not stop entirely when only one task fails](https://github.com/TEAMMATES/teammates/pull/12963) | <!-- 240402 -      ? -->
| 11      | [[#11878] Add Edit and Approve Account Requests functionality](https://github.com/TEAMMATES/teammates/pull/12975) | <!-- 240407          -->
| 12      | [[#11878] Create reject account request endpoint](https://github.com/TEAMMATES/teammates/pull/12985) | <!-- 240409          -->
| 12      | [[#11878] Update DeleteAccountRequest to reference by ID](https://github.com/TEAMMATES/teammates/pull/12997) | <!-- 240411          -->
| 12      | [[#11878] Update ResetAccountRequest to reference by ID](https://github.com/TEAMMATES/teammates/pull/13002) | <!-- 240411          -->
| 12      | [[#11878] Add Error Message for Approving Existing Account](https://github.com/TEAMMATES/teammates/pull/13004) | <!-- 240411          -->
| 12      | [[#11878] Get account request by uuid](https://github.com/TEAMMATES/teammates/pull/13007) | <!-- 240411 - 240412 -->
| 12      | [[#11878] Add tests for Account Request Table](https://github.com/TEAMMATES/teammates/pull/12977) | <!-- 240411 - 240414 -->
| 12      | [[#11878] Handle Duplicate Approved Account Requests](https://github.com/TEAMMATES/teammates/pull/13009) | <!-- 240412          -->
| 12      | [[#11878] Merge master into feature](https://github.com/TEAMMATES/teammates/pull/13011) | <!-- 240413          -->
| 13      | [[#11878] Request Page E2E](https://github.com/TEAMMATES/teammates/pull/13015) | <!-- 240416          -->
| 13      | [[#12954] CreateAccountAction seems to have redundant code](https://github.com/TEAMMATES/teammates/pull/13039) | <!-- 240416          -->
| 13      | [[#11878] Remove ref by email and institute](https://github.com/TEAMMATES/teammates/pull/13044) | <!-- 240417          -->
| 13      | [[#11878] Migrate AccountRequestsLogic unit tests](https://github.com/TEAMMATES/teammates/pull/13043) | <!-- 240417          -->
| 13      | [[#11878] Add SQL injection tests for AccountRequestsDb](https://github.com/TEAMMATES/teammates/pull/13047) | <!-- 240418          -->
| 13      | [[#11878] Fix Edit](https://github.com/TEAMMATES/teammates/pull/13056) | <!-- 240418          -->
| 13      | [[#11878] Fix console errors](https://github.com/TEAMMATES/teammates/pull/13058) | <!-- 240419          -->
| 13      | [[#11878] Fix Rejection Modal](https://github.com/TEAMMATES/teammates/pull/13059) | <!-- 240419          -->
| Rd      | [[#11878] Account Request Indexing Script](https://github.com/TEAMMATES/teammates/pull/13076) | <!-- 240422          -->
| Rd      | [[#13064] Use AccountRequestUpdateRequest as parameter](https://github.com/TEAMMATES/teammates/pull/13068) | <!-- 240422 - 240423 -->
| Rd      | [[#11878] Add CAPTCHA to ARF](https://github.com/TEAMMATES/teammates/pull/13081) | <!-- 240423          -->

## General Project Management

| Week | Achievements |
| ---- | ------------ |
|  2 -  6 | Mentored Marques for onboarding task: [[#12048] Migrate UpdateStudentAction](https://github.com/TEAMMATES/teammates/pull/12727) | <!-- 240128 - 240225 -->
| Rc -  8 | Designed ARF with ARF team | <!--      ? -      ? -->
| Rc - 13 | Attended weekly ARF meetings | <!--      ? -      ? -->
|  7 - 13 | Planned ARF task allocation for each milestone with ARF team | <!--      ? -      ? -->
|  7 - Rd | Mentored Xenos (mainly) and Dominic Berzin (secondarily, with Eunice as the main mentor) | <!--      ? -      ? -->
|  8 - 13 | Adjusted ARF design with ARF team for changing requirements or issues predicted or encountered | <!--      ? -      ? -->
