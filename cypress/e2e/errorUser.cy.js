import shoppingList from '../fixtures/shoppingList.json'
import loginPage from '../pages/login.js'

describe('Test scenarios to verify when an erroring user logs in.', () => {

    const username = Cypress.env('errorUsername')
    const password = Cypress.env('password')
  
    it('Should add fleece jacked to cart and confirm (this should fail)', () => {
        cy.negativeScenarioHandler()
        cy.login(username, password)
        loginPage.verifyLoggedIn()
        cy.populateCart(shoppingList.errorScenario)
    
    });

});