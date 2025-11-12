import ProductPage from '../pages/ProductPage';

Cypress.Commands.add('addProduct', (product) => {
  ProductPage.visitHome();
  ProductPage.selectProduct(product.productName);
  ProductPage.selectSize(product.size);
  ProductPage.selectColor(product.color);
  ProductPage.setQuantity(product.quantity);
  ProductPage.addToCart();
  ProductPage.verifyProductAdded(product.productName);
});
