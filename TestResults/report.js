$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginNegative.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Negative scenarios#"
    }
  ],
  "line": 2,
  "name": "BookreviewAndRecommendation login.",
  "description": "",
  "id": "bookreviewandrecommendation-login.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Negative scenario for User unsuccessful login",
  "description": "",
  "id": "bookreviewandrecommendation-login.;negative-scenario-for-user-unsuccessful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" and user clicks on login button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify error message is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "bookreviewandrecommendation-login.;negative-scenario-for-user-unsuccessful-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "bookreviewandrecommendation-login.;negative-scenario-for-user-unsuccessful-login;;1"
    },
    {
      "cells": [
        "uname1",
        "pwd1"
      ],
      "line": 10,
      "id": "bookreviewandrecommendation-login.;negative-scenario-for-user-unsuccessful-login;;2"
    },
    {
      "cells": [
        "uname2",
        "pwd2"
      ],
      "line": 11,
      "id": "bookreviewandrecommendation-login.;negative-scenario-for-user-unsuccessful-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Negative scenario for User unsuccessful login",
  "description": "",
  "id": "bookreviewandrecommendation-login.;negative-scenario-for-user-unsuccessful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"uname1\" and \"pwd1\" and user clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginNegativeStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 171187884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uname1",
      "offset": 13
    },
    {
      "val": "pwd1",
      "offset": 26
    }
  ],
  "location": "LoginNegativeStepDefinition.user_enters_and_and_user_clicks_on_login_button(String,String)"
});
formatter.result({
  "duration": 3465270,
  "status": "passed"
});
formatter.match({
  "location": "LoginNegativeStepDefinition.verify_error_message_is_displayed()"
});
formatter.result({
  "duration": 28327,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Negative scenario for User unsuccessful login",
  "description": "",
  "id": "bookreviewandrecommendation-login.;negative-scenario-for-user-unsuccessful-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"uname2\" and \"pwd2\" and user clicks on login button",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginNegativeStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 50905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uname2",
      "offset": 13
    },
    {
      "val": "pwd2",
      "offset": 26
    }
  ],
  "location": "LoginNegativeStepDefinition.user_enters_and_and_user_clicks_on_login_button(String,String)"
});
formatter.result({
  "duration": 102632,
  "status": "passed"
});
formatter.match({
  "location": "LoginNegativeStepDefinition.verify_error_message_is_displayed()"
});
formatter.result({
  "duration": 28327,
  "status": "passed"
});
formatter.uri("loginPositive.feature");
formatter.feature({
  "line": 1,
  "name": "BookreviewAndRecommendation login.",
  "description": "",
  "id": "bookreviewandrecommendation-login.",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 3,
      "value": "#positive scenarios#"
    }
  ],
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
  "duration": 19738785698,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class com.hack2hire.stepDefinitions.LoginPositiveStepDefinition\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:45)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:39)\r\n\t... 32 more\r\nCaused by: java.lang.NullPointerException\r\n\tat com.hack2hire.base.TestBase.init(TestBase.java:27)\r\n\tat com.hack2hire.stepDefinitions.LoginPositiveStepDefinition.\u003cinit\u003e(LoginPositiveStepDefinition.java:36)\r\n\t... 37 more\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_should_land_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
});