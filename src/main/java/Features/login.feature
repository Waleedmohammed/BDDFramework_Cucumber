Feature: Free CRM Login Feature

  Scenario : Free CRM Login Test Case

    Given User navigated to login page

    When Title of login page is Free CRM

    Then User Enter userName and Password
      | waleed.m.science@gmail.com | Passwordmmhh88 |

    Then User click login button

    Then User is on Home page

    Then Signout and close the browser

  #without Examples keyword
#  Scenario: Free CRM Login Test Case
#
#    Given User navigated to login page
#
#    When Title of login page is Free CRM
#
#    Then User Enter "waleed.m.science@gmail.com" & "Passwordmmhh88"
#
#    Then User click login button
#
#    Then User is on Home page
#
#    Then Signout and close the browser


#    #with Examples keyword
#   Scenario Outline: Free CRM Login Test Case
#
#    Given User navigated to login page
#
#    When Title of login page is Free CRM
#
#    Then User Enter "<userName>" & "<password>"
#
#    Then User click login button
#
#    Then User is on Home page
#
#    Then Signout and close the browser
#
#
#      Examples:
#        | userName                   | password       |
#        | waleed.m.science@gmail.com |  |
#        | test123@gmail.com          | test@123       |








