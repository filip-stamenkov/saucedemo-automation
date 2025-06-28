describe('Test scenarios to verify when a standard user logs in.', () => {
  
  it.only('Should succesfully login and verify the page.', () => {
    cy.login('standard_user', 'secret_sauce')
  });

});