/// <reference types="cypress" />

describe('Fluxo: Adicionar múltiplos produtos ao carrinho', () => {
  
  beforeEach(() => {
    cy.log('Carregando lista de produtos...');
    cy.fixture('product').as('products');
  });

  it('Deve adicionar vários produtos ao carrinho com sucesso', function() {
    cy.log('Iniciando o teste de adicionar múltiplos produtos');
    cy.addProduct(this.products);
  });
});
