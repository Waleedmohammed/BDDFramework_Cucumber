$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/waleed.elbarbary/Downloads/BDDFrameWork/src/main/java/Features/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Contacts Test cases",
  "description": "",
  "id": "contacts-test-cases",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create new contact",
  "description": "",
  "id": "contacts-test-cases;create-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "User Enter \"\u003cuserName\u003e\" \u0026 \"\u003cpassword\u003e\"",
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
  "name": "User navigated to contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cfirstName\u003e\" and \"\u003clastName\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Signout and close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "contacts-test-cases;create-new-contact;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "firstName",
        "lastName",
        "position"
      ],
      "line": 24,
      "id": "contacts-test-cases;create-new-contact;;1"
    },
    {
      "cells": [
        "waleed.m.science@gmail.com",
        "Passwordmmhh88",
        "Waleed",
        "Mohammed",
        "Software QA"
      ],
      "line": 25,
      "id": "contacts-test-cases;create-new-contact;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "Create new contact",
  "description": "",
  "id": "contacts-test-cases;create-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "User Enter \"waleed.m.science@gmail.com\" \u0026 \"Passwordmmhh88\"",
  "matchedColumns": [
    0,
    1
  ],
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
  "name": "User navigated to contact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters \"Waleed\" and \"Mohammed\" and \"Software QA\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Signout and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginStepDefinition.user_navigated_to_login_page()"
});
formatter.result({
  "duration": 3639976220,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 11165733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "waleed.m.science@gmail.com",
      "offset": 12
    },
    {
      "val": "Passwordmmhh88",
      "offset": 43
    }
  ],
  "location": "loginStepDefinition.user_Enter_UserName_Password(String,String)"
});
formatter.result({
  "duration": 2350494082,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 29120674,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 7128530,
  "status": "passed"
});
formatter.match({
  "location": "loginStepDefinition.user_navigated_to_contact_Page()"
});
formatter.result({
  "duration": 5169101073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Waleed",
      "offset": 13
    },
    {
      "val": "Mohammed",
      "offset": 26
    },
    {
      "val": "Software QA",
      "offset": 41
    }
  ],
  "location": "loginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 31175527743,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.name: first_name (tried for 30 second(s) with 500 milliseconds interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat stepDefinitions.loginStepDefinition.user_enters_and_and(loginStepDefinition.java:102)\n\tat ✽.Then User enters \"Waleed\" and \"Mohammed\" and \"Software QA\"(/Users/waleed.elbarbary/Downloads/BDDFrameWork/src/main/java/Features/contacts.feature:17)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027C02ZT4V4MD6R\u0027, ip: \u00272003:ce:8f07:741d:bd7d:3b09:ba3b:a5e5%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.2\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/f2/d2k1smv92w7...}, goog:chromeOptions: {debuggerAddress: localhost:60371}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 590c34d1e3cdcd1e5e4da7a7c5906497\n*** Element info: {Using\u003dname, value\u003dfirst_name}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\n\tat stepDefinitions.loginStepDefinition.user_enters_and_and(loginStepDefinition.java:102)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\n",
  "status": "failed"
});
formatter.match({
  "location": "loginStepDefinition.sign_out_and_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});