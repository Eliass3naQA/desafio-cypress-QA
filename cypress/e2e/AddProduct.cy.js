/// <reference types="cypress" />

describe('Fluxo: Adicionar produto ao carrinho', () => {

  // Antes de cada teste, carrega os dados do produto
  beforeEach(() => {
    cy.log('Carregando fixture do produto...');
    cy.fixture('product').as('productData');
  });

  it('Deve adicionar um produto ao carrinho com sucesso', function() {

    cy.log('Adicionar produto ao carrinho');

    // Acessar o site
    cy.log('Acessando o site...');
    cy.visit('http://lojaebac.ebaconline.art.br/');

    // Executar o fluxo encapsulado no comando customizado
    cy.log('Executando fluxo de adicionar produto ao carrinho...');
    cy.addProduct(this.productData);

    // Validação
    cy.log('Verificando mensagem de sucesso...');
    cy.contains('foi adicionado no seu carrinho').should('be.visible');

    cy.log('Teste finalizado com sucesso!');
  });
});
