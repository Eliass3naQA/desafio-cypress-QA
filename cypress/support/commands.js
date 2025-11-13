import ProductPage from '../pages/ProductPage';

const productPage = new ProductPage();


Cypress.Commands.add('addProduct', (product) => {
  productPage.visitHome();
  productPage.selectProduct(product.productName);
  productPage.selectSize(product.size);
  productPage.selectColor(product.color);
  productPage.setQuantity(product.quantity);
  productPage.addToCart();
  productPage.verifyProductAdded(product.productName);
});
