Feature: Contacts Test cases

 Scenario Outline: Create new contact

    Given User navigated to login page

    When Title of login page is Free CRM

    Then User Enter "<userName>" & "<password>"

    Then User click login button

    Then User is on Home page

    Then User navigated to contact Page

    Then User enters "<firstName>" and "<lastName>" and "<position>"

    Then Signout and close the browser


   Examples:

     | userName                   | password       |firstName       |lastName       |position       |
     | waleed.m.science@gmail.com |  |Waleed          |Mohammed       |Software QA    |
