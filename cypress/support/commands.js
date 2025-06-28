import loginPage from "../pages/login.js"

Cypress.Commands.add('login', (username, password) => { 
    loginPage.visitPage()
    loginPage.elements.username().type(username)
    loginPage.elements.password().type(password)
    loginPage.elements.loginBtn().click()
    loginPage.verifyLoggedIn()
 })
