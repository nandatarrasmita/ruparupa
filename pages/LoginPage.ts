import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';

export class LoginPage extends BasePage {

  // Locators as getters
  get inputIdentifier(): Locator {
    return this.page.locator('input[name="identifier"]');
  }

  get buttonLanjutkan(): Locator {
    return this.page.getByRole('button', { name: 'Lanjutkan' });
  }

  get inputPassword(): Locator {
    return this.page.locator('input[name="password"]');
  }

  get buttonMasuk(): Locator {
    return this.page.getByRole('button', { name: 'Masuk' });
  }

  // High-level flow method
  async login(identifier: string, password: string): Promise<void> {
    await this.inputIdentifier.fill(identifier);
    await this.buttonLanjutkan.click();
    await this.inputPassword.fill(password);
    await this.buttonMasuk.click();
  }

}
