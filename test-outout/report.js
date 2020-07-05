$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Case",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-case",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User navigated to login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User Enter UserName \u0026 Password",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Signout and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_navigated_to_login_page()"
});
formatter.result({
  "duration": 3732860468,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 11076335,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_Enter_UserName_Password()"
});
formatter.result({
  "duration": 1734081326,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 26654796,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 5710741,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.sign_out_and_close_the_browser()"
});
formatter.result({
  "duration": 123721009,
  "status": "passed"
});
});