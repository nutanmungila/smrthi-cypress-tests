
describe('login scenario', () => {
    it('passes', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('abc@gmail.com')
        cy.get('#passwd').type('12345')
        cy.get('#SubmitLogin > span').click()
        //cy.title().should('include','')
    })
  })