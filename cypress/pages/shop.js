class shopPage {

    elements = {
        cartBadge:() => cy.get('[data-test="shopping-cart-badge"]'),
        addItemToCartBtn:(item) => cy.get(`[data-test="add-to-cart-sauce-labs-${item}"]`),
        removeItemBtn:(item) => cy.get(`[data-test="remove-sauce-labs-${item}"]`),
        itemImage:(item) => cy.get(`[data-test="inventory-item-sauce-labs-${item}-img"]`)
    }

    verifyItemImage(item) {
        this.elements.itemImage(item).should('be.visible')
            .and('have.attr', 'src')
            .and('include', `${item}`);
    }
}

module.exports = new shopPage();