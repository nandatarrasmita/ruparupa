import { Page, BrowserContext, expect } from '@playwright/test';

export class BasePage {
  protected context: BrowserContext;
   constructor(protected page: Page) {
    this.context = page.context(); // store the context
  }

  async navigate(path: string) {
    await this.page.goto(path);
  }

  async assertTitleContains(text: string) {
    await expect(this.page).toHaveTitle(new RegExp(text, 'i'));
  }

  async saveStorageState(path: string = './storageState.json') {
    await this.context.storageState({ path });
  }

  async assertUrlContains(text: string) {
    await expect(this.page).toHaveURL(new RegExp(text, 'i'));
  }

async reset() {
  await this.page.context().clearCookies();
  await this.page.goto('about:blank');
}

}