Feature: Login Page
  As a user  I want to visit the homepage
  So that can enter valid credentials and i will be logged in


  Scenario: Visit the homepage and login in with valid credentials

    Given I am on the homepage
    Then I should se a login form
    When I enter a valid email into the email field
    And I enter a valid password into the password field
    And I click the submit button
    Then I should be logged in

