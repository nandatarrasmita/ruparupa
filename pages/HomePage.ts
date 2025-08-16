import { BasePage } from './BasePage';
import { expect, Locator } from '@playwright/test';

export class HomePage extends BasePage {

    get nameGreeting() : Locator {
        return this.page.locator('.name__ruparupa');
    }

    get categoryFurnitur() : Locator{
        return this.page.locator('.category-text', { hasText: 'Furnitur' });
    }

    get furniturKursiMakan(): Locator {
        return this.page.locator('.third-child__content__ruparupa', { hasText: /^Kursi Makan$/ });
    }

    get searchBar() : Locator {
        return this.page.locator('#main-searchbar');
    }

    get buttonSearchBar() : Locator {
        return this.page.locator('.search-icon');
    }
   
    async assertUserGreetings() {
        await expect(this.nameGreeting).toHaveText(/^\s*Hi,/);
    }

}