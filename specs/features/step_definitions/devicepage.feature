

    Feature: Device page function

      Scenario: Search for a Label
        Given I am on the device page
        When I enter a search string
        And Submit the serch form
        Then I should see a list of matching devices