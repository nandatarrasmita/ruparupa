import { test } from '../fixtures/test-fixtures';
import { shoppingCartData } from '../test-data/ShopingCartData';


test.describe.serial('Shoping cart', () => {

  test('search product', async ({ loginPage, homePage, productPage}) => {
    await loginPage.navigate('https://beta.www.ruparupastg.my.id/auth/login');
    await loginPage.login('shimarin@tes.cc', 'Abcd1234!');
    // await homePage.assertUserGreetings();

    await homePage.searchBar.fill(shoppingCartData.product.code);
    await homePage.buttonSearchBar.click();
    await productPage.productCards.first().click();
  });

  
  test('search product dan beli sekarang', async ({ loginPage, homePage, productPage, detailProductPage}) => {
    await loginPage.navigate('https://beta.www.ruparupastg.my.id/auth/login');
    await loginPage.login('shimarin@tes.cc', 'Abcd1234!');
    await homePage.assertUserGreetings();

    await homePage.searchBar.fill(shoppingCartData.product.code);
    await homePage.buttonSearchBar.click();
    await productPage.productCards.first().click();

    await detailProductPage.inputProductQuantity.fill(shoppingCartData.product.quantity.toString());
    await detailProductPage.buttonBeliSekarang.click();
  });

});