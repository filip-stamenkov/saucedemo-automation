class shopPage {

    elements = {
        burgerMenu:() => cy.get('#react-burger-menu-btn'),
        shoppingCart:() => cy.get('[data-test="shopping-cart-link"]'),
        cartBadge:() => cy.get('[data-test="shopping-cart-badge"]'),
        addItemToCartBtn:(item) => cy.get(`[data-test="add-to-cart-${item}"]`),
        removeItemBtn:(item) => cy.get(`[data-test="remove-${item}"]`),
        itemImage:(item) => cy.get(`[data-test="inventory-item-${item}-img"]`)
    }

    verifyCartQuantity(number) {
        this.elements.cartBadge().should('have.text', number);
    }

    verifyCartQuantityEmpty() {
        this.elements.cartBadge().should('not.exist');
    }

    addItemToCart(item){
        this.elements.addItemToCartBtn(item).click();
    }

    removeItemFromCartBtnVisible(item){
        this.elements.removeItemBtn(item).should('be.visible');
    }

    verifyCorrectItemImage(list) {
        const problemItem = Object.keys(list).filter(key => list[key] === true);
        this.elements.itemImage(problemItem).should('be.visible')
            .and('have.attr', 'src')
            .and('include', `${problemItem}`);
    }

    verifyIncorrectItemImage(list) {
        const problemItem = Object.keys(list).filter(key => list[key] === true);
        this.elements.itemImage(problemItem).should('be.visible')
            .and('have.attr', 'src')
            .and('not.include', `${problemItem}`);
    }

}

module.exports = new shopPage();