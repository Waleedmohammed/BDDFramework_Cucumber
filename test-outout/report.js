$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/waleed.elbarbary/Downloads/BDDFrameWork/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "\nScenario : Free CRM Login Test Case\n\n  Given User navigated to login page\n\n  When Title of login page is Free CRM\n\n  Then User Enter userName and Password\n    | waleed.m.science@gmail.com | Passwordmmhh88 |\n\n  Then User click login button\n\n  Then User is on Home page\n\n  Then Signout and close the browser",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
});