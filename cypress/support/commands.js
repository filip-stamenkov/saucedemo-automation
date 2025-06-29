import loginPage from "../pages/login.js"
import shopPage from "../pages/shop.js"

Cypress.Commands.add('login', (username, password) => { 
    
    expect(username).to.be.a('string').and.not.be.empty
    expect(password).to.be.a('string').and.not.be.empty

    loginPage.visitPage()
    loginPage.elements.username().type(username)
    loginPage.elements.password().type(password, { log: false })
    loginPage.elements.loginBtn().click()

 })

 Cypress.Commands.add('populateCart', (list) => {

        const buyItems = Object.keys(list).filter(key => list[key] === true);
        if (buyItems.length === 1) {
            shopPage.elements.addItemToCartBtn(buyItems).click();
            shopPage.elements.removeItemBtn(buyItems).should('be.visible');
        } else if (buyItems.length > 1) {
            buyItems.forEach(item => {
                shopPage.elements.addItemToCartBtn(item).click();
                shopPage.elements.removeItemBtn(item).should('be.visible');
            });
        } else {
            cy.log('No items to add to cart');
        }

        if(buyItems.length > 0) {
            shopPage.elements.cartBadge().should('have.text', buyItems.length);
        } else {
            shopPage.elements.cartBadge().should('not.exist');
        }

 })

 Cypress.Commands.add('negativeScenarioHandler', () => {

    cy.on('fail', () => {
            return false
        })

 })