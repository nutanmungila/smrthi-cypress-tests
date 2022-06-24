import { Given, When, And } from "@badeball/cypress-cucumber-preprocessor";



Given('I navigate to the website',()=>{

    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')

})

When('I click on login button',()=>{
    cy.get(':nth-child(3) > .btn').click()
})

And('I validate title',()=>{
    cy.title().should('eq','Protractor practice website - Banking App')

})

And('I click on add customer button',()=>{

    cy.get('[ng-class=btnClass1]').click()
    
})

And('I entered',(datatable)=>{
    const data = datatable.hashes();

    for (let i = 0; i< data.length; i++) {
        let firstName = data[i].firstname;
        let lastName = data[i].lastname;
        let postcode = data[i].postcode;

        cy.get('[ng-model=fName]').type(firstName)
        cy.get('[ng-model=lName]').type(lastName)
        cy.get('[ng-model=postCd]').type(postcode)

    }
})
And('I click submit button',()=>{
    cy.get('form.ng-dirty > .btn').click()
})
And('I validate the alert text',()=>{
    cy.on('window:alert',(txt)=>{
        //Mocha assertions
        expect(txt).to.contains('Customer added successfully');
     })
    
})