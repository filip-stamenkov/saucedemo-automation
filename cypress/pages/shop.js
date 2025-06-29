class shopPage {

    elements = {
        cartBadge:() => cy.get('[data-test="shopping-cart-badge"]'),
        addItemToCartBtn:(item) => cy.get(`[data-test="add-to-cart-sauce-labs-${item}"]`),
        removeItemBtn:(item) => cy.get(`[data-test="remove-sauce-labs-${item}"]`),
        itemImage:(item) => cy.get(`[data-test="inventory-item-sauce-labs-${item}-img"]`)
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