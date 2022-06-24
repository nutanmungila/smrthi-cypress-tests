Feature: katalon demo
    Scenario: visting the frontpage
        Given I navigate to the page
        When I visit katalon demo
        Then I should see make appointment

    Scenario: clicking make appointment
        When I click make appointment
        Then I should see login page
    Scenario: Login the user
        When I login an user
        Then I should see make appointment page
    Scenario: book an appointment
        When I book an appointment
        Then I should see Appointment Confirmation


