$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginPositive.feature");
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
  "duration": 22894207238,
  "status": "passed"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_enters_username()"
});
formatter.result({
  "duration": 531013163,
  "status": "passed"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_enters_password()"
});
formatter.result({
  "duration": 222246945,
  "status": "passed"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 513087030,
  "status": "passed"
});
formatter.match({
  "location": "LoginPositiveStepDefinition.user_should_land_on_home_page()"
});
formatter.result({
  "duration": 19294,
  "status": "passed"
});
});