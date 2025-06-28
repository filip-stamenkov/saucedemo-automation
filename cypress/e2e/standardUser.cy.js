describe('Test scenarios to verify when a standard user logs in.', () => {

    const username = Cypress.env('username')
    const password = Cypress.env('password')
  
  it.only('Should succesfully login and verify the page.', () => {
    cy.login(username, password)
  });

});