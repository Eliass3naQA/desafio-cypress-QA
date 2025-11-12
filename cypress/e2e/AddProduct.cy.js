/// <reference types="cypress" />

describe('Fluxo: Adicionar produto ao carrinho', () => {
  beforeEach(() => {
    cy.fixture('product').as('productData');
  });

  it('Deve adicionar um produto ao carrinho com sucesso', function() {
    cy.addProductToCart(this.productData);
  });
});
