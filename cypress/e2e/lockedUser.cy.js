import loginPage from '../pages/login.js'

describe('Test scenarios to verify when a locked user logs in.', () => {

    const username = Cypress.env('lockedUsername')
    const password = Cypress.env('password')
  
  it('Try to login with user and verify error.', () => {
    cy.login(username, password)
    loginPage.verifyLoginErrorVisible()
  });

});