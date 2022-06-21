describe('Automation Practice',()=>{

   it('Visit Automation Practice',()=>{
     cy.visit('https://ultimateqa.com/automation');
   })

   it('menu item',()=>{
    cy.visit('https://ultimateqa.com/automation');

    //cy.get('.menu-item').first().should('have.txt','Courses')
    
   })

   it('big page',()=>{

    cy.visit('https://ultimateqa.com/automation');
    cy.get('.et_pb_text_inner > ul > :nth-child(1) > a').click()

   })

   it('check big page url',()=>{
    cy.visit('https://ultimateqa.com/automation');
    cy.get('.et_pb_text_inner > ul > :nth-child(1) > a').click()
    cy.url().should('eq','https://ultimateqa.com/complicated-page')


   })
   it('check big page login',()=>{

    cy.visit('https://ultimateqa.com/complicated-page');
    cy.get('#et_pb_contact_name_0').type('abc')
    cy.get('#et_pb_contact_email_0').type('abc@gmail.com')
    cy.get('#et_pb_contact_message_0').type('xyz')
    cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').type('16')
    cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click()
    cy.contains('Thanks for contacting us')

   })
   

})