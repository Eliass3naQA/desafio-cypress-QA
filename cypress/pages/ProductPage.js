import AddProductElementos from "../Elementos/AddProductElementos";

const addProductElementos = new AddProductElementos();

class ProductPage {

  visitHome() {
    cy.visit('http://lojaebac.ebaconline.art.br/');
  }

  BtnPesquisar() {
    cy.get(addProductElementos.btnPesquisar).click();
  }

  selectProduct(productName) {
    cy.get('.product-block').contains(productName).click();
  }

  selectSize(size) {
    cy.log(`Selecionando cor: ${size}`);
    cy.get(`[data-value="${size}"]`)
      .wait(1000)
      .click();
  }

  selectColor(color) {
    cy.log(`Selecionando cor: ${color}`);
    cy.get(`[data-value="${color}"]`, { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });
  }

  setQuantity(qty) {
    cy.get('input.qty').clear().type(qty);
  }

  addToCart() {
    cy.get('button.single_add_to_cart_button').click();
  }

  verifyProductAdded() {
    cy.log('Verificando mensagem de sucesso...');
    cy.get('.woocommerce-message', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'foi adicionado no seu carrinho');
  }
}

export default ProductPage;

