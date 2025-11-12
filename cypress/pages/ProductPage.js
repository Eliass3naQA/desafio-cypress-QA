class ProductPage {

  
  get productTitle() { return cy.get('h1.product_title'); }
  get sizeDropdown() { return cy.get('select[name="attribute_pa_size"]'); }
  get colorDropdown() { return cy.get('select[name="attribute_pa_color"]'); }
  get quantityInput() { return cy.get('input.qty'); }
  get addToCartButton() { return cy.get('button.single_add_to_cart_button'); }
  get successMessage() { return cy.get('.woocommerce-message'); }

  visitHome() {
    cy.visit('http://lojaebac.ebaconline.art.br/');
  }

  selectProduct(productName) {
    
    cy.contains('a', productName).click();
  }

  selectSize(size) {
    this.sizeDropdown.select(size);
  }

  selectColor(color) {
    this.colorDropdown.select(color);
  }

  setQuantity(quantity) {
    this.quantityInput.clear().type(quantity);
  }

  addToCart() {
    this.addToCartButton.click();
  }

  verifyProductAdded(productName) {
    this.successMessage.should('contain', `${productName} foi adicionado no seu carrinho`);
  }
}

export default new ProductPage();
