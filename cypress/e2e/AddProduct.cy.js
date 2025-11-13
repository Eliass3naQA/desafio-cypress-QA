/// <reference types="cypress" />

describe('Fluxo: Adicionar produto ao carrinho', () => {
  
  beforeEach(() => {
    
    cy.log('Carregando dados do produto...');
    cy.fixture('product').as('productData');
  });

  it('Deve adicionar um produto ao carrinho com sucesso', function() {
    cy.log('Iniciando o teste de adicionar produto ao carrinho');

    
    cy.addProduct(this.productData);

    
    cy.log('Verificando se o produto foi adicionado com sucesso');
    cy.contains('foi adicionado no seu carrinho').should('be.visible');

    cy.log('Teste finalizado com sucesso!');
  });

});
