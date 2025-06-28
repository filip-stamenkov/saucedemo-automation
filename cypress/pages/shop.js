class shopPage {

    elements = {
        cartBadge:() => cy.get('[data-test="shopping-cart-badge"]'),
        addItemToCartBtn:(item) => cy.get(`[data-test="add-to-cart-sauce-labs-${item}"]`),
        removeItemBtn:(item) => cy.get(`[data-test="remove-sauce-labs-${item}"]`)
    }

}

module.exports = new shopPage();