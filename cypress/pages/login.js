class loginPage {

    elements ={
        username: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        errorMsg: () => cy.get('[data-test="error"]')
    }

    visitPage() {
        cy.visit('/')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }

    verifyLoggedIn() {
        cy.url().should('contain', '/inventory.html')
    }

    verifyLoginErrorVisible() {
        this.elements.errorMsg()
            .should('be.visible')
            .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
    }

}

module.exports = new loginPage()