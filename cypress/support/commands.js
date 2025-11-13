import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CartElementos from '../Elementos/CartElementos';

const productPage = new ProductPage();
const cartPage = new CartPage();
const cartElementos = new CartElementos

Cypress.Commands.add('addProduct', (productOrList) => {
  const products = Array.isArray(productOrList) ? productOrList : [productOrList];

  products.forEach((product) => {
    cy.log(`Adicionando produto: ${product.productName}`);
    productPage.visitHome();
    productPage.selectProduct(product.productName);
    productPage.selectSize(product.size);
    productPage.selectColor(product.color);
    productPage.setQuantity(product.quantity);
    productPage.addToCart();
    productPage.verifyProductAdded(product.productName);
  });
});

Cypress.Commands.add('Validando o valor total', () => {
  let soma = 0;

  cy.get(cartElementos.subtotal(), { timeout: 10000 })
    .each(($el) => {
      const valor = parseFloat($el.text().replace(/[^\d,]/g, '').replace(',', '.'));
      soma += valor;
    })
    .then(() => {
      cy.get('.order-total .woocommerce-Price-amount.amount')
        .invoke('text')
        .then((totalText) => {
          const total = parseFloat(totalText.replace(/[^\d,]/g, '').replace(',', '.'));
          cy.log(`Soma dos produtos: ${soma} | Total exibido: ${total}`);
          expect(total).to.eq(soma);
        });
    });
});
