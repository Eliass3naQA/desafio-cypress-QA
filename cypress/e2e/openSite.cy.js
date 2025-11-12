/// <reference types="cypress" />

describe('Abrir o site da loja EBAC', () => {
  it('Deve acessar a página inicial com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
    cy.title().should('include', 'EBAC – Shop – Página de teste')
  })
})
