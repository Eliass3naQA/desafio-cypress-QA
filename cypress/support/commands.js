import ProductPage from '../pages/ProductPage';

const productPage = new ProductPage();


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
