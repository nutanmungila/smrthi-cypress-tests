describe('Google Search', () => {
    it('loads search page', () => {
      cy.visit('https://www.google.com');
      

    });
  
    it('gets first search result', () => {
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').should('be.enabled')
      // cy.get('input[name="q"]').type('mac{enter}');
       //cy.get('#search a')
       // .invoke('attr', 'href')
      //  .then((href) => console.log(href));

    });

   /* it('login test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('#txtUsername').type('Admin');
        cy.get('#txtPassword').type('admin123');
        cy.get('#btnLogin').click();
        //cy.contains('Admin');
        
  
      }); */
  });