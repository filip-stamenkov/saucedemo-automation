import loginPage from '../pages/login.js'
import shopPage from '../pages/shop.js'
import shoppingList from '../fixtures/shoppingList.json'

describe('Test scenarios to verify when a problem user logs in.', () => {

    const username = Cypress.env('problemUsername')
    const password = Cypress.env('password')
  
  //this one checks if the image is of the onesie, fails, but the fail is handled so the test auto passes
  it('Check that the onesie image is shown as the source for the onesie (fail)', () => {
    cy.negativeScenarioHandler()
    cy.login(username, password)
    loginPage.verifyLoggedIn()
    shopPage.verifyCorrectItemImage(shoppingList.problemScenario)
  });

  //this one will just expect the image not to be the one for the onesie
  it('Check that the onesie image is not shown as the source', () => { 
    cy.login(username, password)
    loginPage.verifyLoggedIn()
    shopPage.verifyIncorrectItemImage(shoppingList.problemScenario)
  });

});