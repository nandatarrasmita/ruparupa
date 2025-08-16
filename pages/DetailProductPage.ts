import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';

export class DetailProductPage extends BasePage {

    get inputProductQuantity() : Locator {
        return this.page.locator('section:has-text("Atur Jumlah") .product-quantity__input');
    }

    get buttonBeliSekarang() {
        return this.page.getByRole('button', {name : 'Beli Sekarang'});
    }
}