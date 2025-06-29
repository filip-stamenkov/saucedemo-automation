import shopPage from '../pages/shop.js'
import {URLs} from '../support/urls.js'
class loginPage {

    elements ={
        username: () => cy.get('[data-test="username"]'),
        password: () => cy.get('[data-test="password"]'),
        loginBtn: () => cy.get('[data-test="login-button"]'),
        errorMsg: () => cy.get('[data-test="error"]')
    }

    visitPage() {
        cy.visit('/')
        cy.url().should('eq', URLs.base)
    }

    verifyLoggedIn() {
        cy.url().should('eq', URLs.home)
        shopPage.elements.burgerMenu().should('be.visible')
        shopPage.elements.shoppingCart().should('be.visible')
    }

    verifyLoginErrorVisible() {
        this.elements.errorMsg()
            .should('be.visible')
            .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
    }

}

module.exports = new loginPage()