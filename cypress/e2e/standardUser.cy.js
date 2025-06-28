import shoppingList from '../fixtures/shoppingList.json'

describe('Test scenarios to verify when a standard user logs in.', () => {

    const username = Cypress.env('username')
    const password = Cypress.env('password')
  
  it('Should succesfully login and verify the page.', () => {
    cy.login(username, password)
    loginPage.verifyLoggedIn()
  });

  it.only('Should succesfully login, add to cart, verify quantity and option to remove.', () => {
    cy.login(username, password)
    loginPage.verifyLoggedIn()
    cy.populateCart(shoppingList)
  });

});