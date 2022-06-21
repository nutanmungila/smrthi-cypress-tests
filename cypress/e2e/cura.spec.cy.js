describe('cura make appointment', () => {
    
    it('visit the page', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      

    });
    it('click on make appointment', () => {
      //cy.visit('https://katalon-demo-cura.herokuapp.com/');
      cy.get('#btn-make-appointment').click()
      

    });
    it('login',()=>{
      // cy.visit('https://katalon-demo-cura.herokuapp.com/');
      // cy.get('#btn-make-appointment').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()

    })
    it('make appointment', () => {
      // cy.visit('https://katalon-demo-cura.herokuapp.com/');
      // cy.get('#btn-make-appointment').click()
      // cy.get('#txt-username').type('John Doe')
      // cy.get('#txt-password').type('ThisIsNotAPassword')
      // cy.get('#btn-login').click()
      cy.get('select').select('Hongkong CURA Healthcare Center')
      cy.get('#chk_hospotal_readmission').click()
      cy.get('#radio_program_medicare').click()
      cy.get('#txt_visit_date').type('15/06/2022')
      cy.get('#txt_comment').click({force:true})
      cy.get('#txt_comment').type('Jhon will be available on 15/06/2022')
      cy.get('#btn-book-appointment').click()
      

    });
    it('verify appointment', () => {
      cy.get('h2').contains('Appointment Confirmation')
      cy.get('#comment').contains('Jhon will be available on 15/06/2022')

    });

});