class loginPage {

    elements ={
        username: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]')
    }

    visitPage() {
        cy.visit('/')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }

    verifyLoggedIn() {
        cy.url().should('contain', '/inventory.html')
    }

}

module.exports = new loginPage()