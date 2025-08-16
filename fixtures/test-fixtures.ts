import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductPage } from '../pages/ProductPage';
import { DetailProductPage } from '../pages/DetailProductPage';

type MyFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    productPage: ProductPage;
    detailProductPage : DetailProductPage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    detailProductPage: async ({ page }, use) => {
        await use(new DetailProductPage(page));
    },
});

export { expect } from '@playwright/test';