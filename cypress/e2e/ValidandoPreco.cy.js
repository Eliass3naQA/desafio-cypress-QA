/// <reference types="cypress" />

describe('Validar preços e total do carrinho', () => {
  before(() => {
    
    cy.fixture('product').then((products) => {
      cy.addProduct(products);
    });
  });

  it('Deve validar dinamicamente os preços e o total do carrinho', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/carrinho/');
    cy.wait(3000);
    cy.validateCartTotal();
  });
});
