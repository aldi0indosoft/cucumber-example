Feature: Program
In order to view program
As I user
I want to manage program

  Scenario: admin view program
    Given I already logged in to Admin Page
    When I click [Program Options] nav
      And I click [Programs] nav
    Then I expect to see list of Programs
      And I expect to see [Create Program] Button
      And I expect to see [Create Sub Program] Button
      And I expect to see [View All Programs] Button

  Scenario: admin want to add program
    Given I already logged in to Admin Page
    When I click [Program Options] nav
      And I click [Programs] nav
      And I click [Create Program] Button
    Then I expect to see Program Form

  Scenario: admin want to add sub program
    Given I already logged in to Admin Page
    When I click [Program Options] nav
      And I click [Programs] nav
      And I click [Create Sub Program] Button
    Then I expect to see Sub Program Form

  Scenario: admin want to add view program again
    Given I already logged in to Admin Page
    When I click [Program Options] nav
      And I click [Programs] nav
      And I click [View All Programs] Button
    Then I expect to see Program Container
