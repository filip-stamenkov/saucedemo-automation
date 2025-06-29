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
        if (buyItems.length){
            buyItems.forEach(item => {
                shopPage.addItemToCart(item)
                shopPage.removeItemFromCartBtnVisible(item);
            });
        } else {
            cy.log('No items to add to cart');
        }

        if(buyItems.length) {
            shopPage.verifyCartQuantity(buyItems.length);
        } else {
            shopPage.verifyCartQuantityEmpty();
        }

 })

 Cypress.Commands.add('negativeScenarioHandler', () => {

    cy.on('fail', () => {
            return false
        })

 })