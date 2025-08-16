import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';

export class ProductPage extends BasePage {

    get productCards() : Locator {
        return this.page.locator('.row.product-card');
    }

    get iconCollapseLokasi() {
        return this.page.locator('.list-filter', { hasText: 'Lokasi' }).locator('.btn-collapse');
    }

    get buttonLihatSemuaLokasi() {
        return this.page.getByRole('button',{name : 'Lihat Semua Lokasi'});
    }

    get textBoxCariLokasi() {
        return this.page.getByRole('textbox',{name : 'Cari lokasi di sini'});
    }

    get checkBox() {
        return this.page.locator('#location-filter-modal-0');
    }

    get buttonTerapkan() {
        return this.page.getByRole('button',{name : 'Terapkan'});
    }

    checkBoxInModalByText(text: string) {
        return this.page.locator('.modal__dialog .checkbox__content', { hasText: new RegExp(`^${text}$`) });
    }

    get iconCollapseBrand() {
        return this.page.locator('.list-filter', { hasText: 'Brand' }).locator('.btn-collapse');
    }

    get textBoxCariBrand() {
        return this.page.getByRole('textbox',{name : 'Cari Brand'});
    }
    
    checkboxByBrandInList(brand: string) {
        return this.page.locator('.list-checkbox .checkbox__content', { hasText: brand });
    }
    get buttonLihatSemuaBrand() {
        return this.page.getByRole('button',{name : 'Lihat Semua Brand'});
    }

    get iconCollapseHarga() {
        return this.page.locator('.list-filter', { hasText: 'Harga' }).locator('.btn-collapse');
    }

    get textBoxHargaMinimum(): Locator {
        return this.page.getByRole('textbox', { name: 'Harga Minimum' });
    }

    get textBoxHargaMaksimum(): Locator {
        return this.page.getByRole('textbox', { name: 'Harga Maksimum' });
    }

    get productNames(): Locator {
        return this.page.locator("span.product__name");
    }

     // High-level flow method
    async filterAndCheckLokasi(lokasi: string) {
        await this.textBoxCariLokasi.fill(lokasi);
        await this.checkBoxInModalByText(lokasi).click();
    }

    async filterAndCheckBrand(brand: string) {
        await this.textBoxCariBrand.fill(brand);
        await this.checkBoxInModalByText(brand).click();
    }

    async selectSortOption(option: string) {
        await this.page.locator('.button__sort').click();
        await this.page.locator('.dropdown-menu .list-dropdown', { hasText: option }).click();
    }

    async getProductNames() {
        const names = await this.productNames.allTextContents();
        return names.map(n => n.trim());
    }
}