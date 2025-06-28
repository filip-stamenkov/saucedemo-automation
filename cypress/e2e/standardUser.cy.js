describe('Test scenarios to verify when a standard user logs in.', () => {
  
  it.only('Should succesfully login and verify the page.', () => {
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    cy.login(username, password)
  });

});