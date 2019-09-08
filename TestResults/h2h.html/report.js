$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginPositive.feature");
formatter.feature({
  "line": 1,
  "name": "BookreviewAndRecommendation login.",
  "description": "",
  "id": "bookreviewandrecommendation-login.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "User logins using correct credentials",
  "description": "",
  "id": "bookreviewandrecommendation-login.;user-logins-using-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user should land on home page.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 91918982218,
  "status": "passed"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_enters_username()"
});
formatter.result({
  "duration": 1894221197,
  "status": "passed"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_enters_password()"
});
formatter.result({
  "duration": 384142109,
  "status": "passed"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 8246571986,
  "status": "passed"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_should_land_on_home_page()"
});
formatter.result({
  "duration": 329676483,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h1\"}\n  (Session info: chrome\u003d76.0.3809.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-7OTDMTD\u0027, ip: \u002710.10.0.188\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\Suhail\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:58290}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2181c0d2806ca38d830e23f7ec9b28c0\n*** Element info: {Using\u003dxpath, value\u003d//h1}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy14.getText(Unknown Source)\r\n\tat com.hack2hire.pages.HomePage.getHeading(HomePage.java:32)\r\n\tat com.hack2hire.stepDefinitions.LoginPositiveStepDefinition.user_should_land_on_home_page(LoginPositiveStepDefinition.java:75)\r\n\tat ✽.Then user should land on home page.(loginPositive.feature:9)\r\n",
  "status": "failed"
});
});