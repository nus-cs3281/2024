## End to end testing with Selenium
### Purpose of e2e tests
 E2E testing complements other form of tests by ensuring that the entire system works as intended and meets the user's requirements and expectations.
 E2E testing involves testing the application in a production-like environment or as close to it as possible. The complete application is tested from start to finish and it ensures that the application functions correctly from the user's perspective, including all the steps involved in completing a task or workflow.

### How to write E2E tests
Page Object Pattern is used in TEAMMATES to facilitate UI changes. 
In this pattern, a class is created for each page . It helps separate the details of the interactions with the webpage with the rest of the test. Page Object provides an interface for the tests to interact with the page's UI without having to directly manipulate the HTML elements.

Resourses: 
- Page Object Pattern: https://martinfowler.com/bliki/PageObject.html
- Examples of e2e test with Selenium: https://medium.com/@iamfaisalkhatri/end-to-end-testing-using-selenium-webdriver-and-java-4ff8667716ca
- Selenium documention: https://www.selenium.dev/documentation/webdriver/actions_api/


## Unit tests

### Mocking
Mock objects can isolate the component being tested by replacing actual dependencies with mocked ones that simulates the behaviour of the real ones. In this way, the unit test can focus on testing the function of a single component without involving the entire system. 

### Using Mockito
We can use the Mockito framework in Junit tests.
Use the `mock()` method to create a mocked object of some class. Once created, a mock will remember all interactions. Then we can selectively verify whatever interactions we are interested in.

We can verify the number of invocations of a method using `verify()`. For example:
```
verify(accountsDb, times(1)).getAccountByGoogleId(googleId);
```
We can force a method to return a specific value with **stubbing**. For example:
 ```
 when(accountsDb.getAccountByGoogleId(googleId)).thenReturn(account);
 ```

 Resources:
 - Mockito documentation: https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html

### Snapshot testing with Jest
Snapshot tests are a very useful tool when we want to make sure the UI does not change unexpectedly. Hence, when changing the UI, we need to regenerate the snapshots and commit them.

Generated snapshots do not include platform specific or other non-deterministic data. We can use mock or spy on calls to the class constructor for ES6 class and all of its methods using Jest.

Resourses: 
- JestJs documentation: https://jestjs.io/docs/snapshot-testing
 