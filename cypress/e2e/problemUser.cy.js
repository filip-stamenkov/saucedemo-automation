import loginPage from '../pages/login.js'
import shopPage from '../pages/shop.js'

describe('Test scenarios to verify when a problem user logs in.', () => {

    const username = Cypress.env('problemUsername')
    const password = Cypress.env('password')
  
  it('Check that the onesie image is shown as the source for the onesie (fail)', () => {
    cy.negativeScenarioHandler()
    cy.login(username, password)
    loginPage.verifyLoggedIn()
    shopPage.verifyItemImage('onesie')
  });

});