# Autor: Elias sena silva
# Contato: 11970160720 - elias.sena.elg@gmail.com

Automação de Testes com Cypress - EBAC Store

Este projeto foi desenvolvido por mim **Elias Sena** como parte de uma prova prático de automação de testes com **Cypress**, é uma aplicação WEB. Aplicando conceitos de **Page Object Model**, **commands customizados** e **validação dinâmica de preços** no carrinho de uma loja online (EBAC Store).

O objetivo principal é demonstrar uma estrutura de testes limpa, organizada e de fácil manutenção — algo que possa ser entendido rapidamente por qualquer pessoa técnica que revisar o projeto.

1. Pré-requisito

Antes de rodar o projeto, é necessário ter instalado:

- **Node.js**
- **Git**
- **VS CODE** ou um editor de sua preferencia

---

2. Clonando o projeto

Criar a pasta do projeto (caso ainda não exista) e abra o terminal na sua IDE

**terminal bash**
- npm init -y
- npm install cypress --save-dev

- git clone https://github.com/Eliass3naQA/desafio-cypress-QA.git

- npx cypress open

escolha o browser da sua preferencia.
escolha o projeto que deseja executar.

Mudei o nome da branch por boas praticas de **master** para **main**. no momento não ha a necessidade de criar novas branch mas em um projeto com mais profissionais seria uma boa pratica para manter a funcionalidade da **main**


**Estrutura do projeto**

cypress/
│
├── e2e/
|   ├── AddProduct.cy.js           # Cenario para Adicionar 1 ou mais produtos no carrinho
│   ├── ValidandoPreco.cy.js       # Projeto mapeando a validação e consistencia dos valores dos produtos
|                                    de forma dinamica, não se limitando a quantidade ou tipo de produto. 
│
├── Elementos/
│   ├── CartElements.js            # Encapsula os seletores do carrinho
|   ├── AddProductElementos.js     # Encapsula os seletores para Add os produtos no carrinho
|  
│
├── fixtures/
│   ├── products.json              # Lista de produtos (massa de teste) utilizada nos testes
│
├── pages/
│   ├── ProductPage.js             # Ações e metodos utilizados no teste 
│   ├── CartPage.js                # Ações e metodos utilizados no teste
│
├── support/
│   ├── commands.js                # Comandos customizados do Cypress
│   ├── e2e.js                     # Arquivo padrão do Cypress
│
└── cypress.config.js              # Configurações gerais do Cypress

**Como criar um novo cenário de teste**

Este projeto foi estruturado para manter clareza, organização e facilidade de manutenção.
Abaixo estão as instruções para criar um novo cenário seguindo o mesmo padrão utilizado nos demais testes.

1. Criar o arquivo do cenário Dentro da pasta e2e
Faça a analise de um já existente para seguir o mesmo padrão.

- cypress/e2e/

2. Crie um arquivo dentro da pasta Elementos e adicione os seletores (Elementos) necessarios para o novo cenarios, Analise um arquivo já existente para seguir o padrão.

- cypress/elementos/

3. Crie um novo arquivo Page criando os metodos e ações utilizando os seletores mapeados

- cypress/pages/

4. em suporte no arquivo commands.js crie os comandos customizados para que o projeto criado no e2e seja executado corretamente, crie na sequencia que deve ser executado. 

- cypress/support/comands.js

5. Crie um novo arquivo em fixture/product para armazenar sua massa de teste ou reutilize um já existente 

- cypress/fixtures/product