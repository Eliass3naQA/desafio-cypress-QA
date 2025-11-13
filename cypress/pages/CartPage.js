// cypress/support/pages/CartPage.js
import CartElements from '../Elementos/CartElementos';

const cartElements = new CartElements();

class CartPage {
  getProductPrice() {
    return cy.get(cartElements.productSubtotal(), { timeout: 10000 });
  }

  getCartTotal() {
    return cy.get(cartElements.cartTotal(), { timeout: 10000 });
  }
}

export default CartPage;
