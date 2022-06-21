describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')
      cy.contains('type').and('be.visible')
      cy.contains('contains')
      cy.get('.home-list > :nth-child(2) > ul > :nth-child(1) > a').as('Title')
      //cy.get('@Title').click()
      cy.get('@Title').trigger('mouseover')
       
    })
    
  })