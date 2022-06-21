describe('heroku',()=>{
    it('load home page',()=>{
        cy.visit('https://www.heroku.com/home');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('.node').click();
    })
})