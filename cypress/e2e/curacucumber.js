import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
Given('I navigate to the page',()=>{
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
      
})

When('I visit katalon demo',()=>{
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
      
})
Then('I should see make appointment',()=>{

    cy.get('#btn-make-appointment').contains('Make Appointment')
      
})

When('I click make appointment',()=>{
    cy.get('#btn-make-appointment').click()
      
})
Then('I should see login page',()=>{

    cy.get('.lead').contains('Please login to make appointment.')
      
})
When('I login an user',()=>{
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.get('#btn-login').click()

      
})
Then('I should see make appointment page',()=>{

    cy.get('#appointment').contains('Make Appointment')
      
})

When('I book an appointment',()=>{
     cy.get('select').select('Hongkong CURA Healthcare Center')
      cy.get('#chk_hospotal_readmission').click()
      cy.get('#radio_program_medicare').click()
      cy.get('#txt_visit_date').type('15/06/2022')
      cy.get('#txt_comment').click({force:true})
      cy.get('#txt_comment').type('Jhon will be available on 15/06/2022')
      cy.get('#btn-book-appointment').click()

      
})
Then('I should see Appointment Confirmation',()=>{
    
    cy.get('.text-center').contains('Appointment Confirmation')
      
})