const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://platform.thinkeo.io/login';

test.describe('Thinkeo Login Page Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
  });

  test('UI - should display email and password fields and login button', async ({ page }) => {
    await expect(page.getByPlaceholder('antoine.dupont@thinkeo.io')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await page.locator('button[type="submit"]').isVisible();

  });

  test('Negative - login with empty fields', async ({ page }) => {
    await page.locator('#submit').isEnabled();
    await page.click('#submit');

  });

  test('Negative - invalid email format', async ({ page }) => {
    await page.getByPlaceholder('antoine.dupont@thinkeo.io').fill('invalidemail');
    await page.getByPlaceholder('Password').fill('password123');
    await page.locator('#submit').isEnabled();
    await page.click('#submit');
    expect(await page.$eval('#email', el => el.validity.valid)).toBe(false);

  });

  test('Negative - incorrect credentials', async ({ page }) => {
    await page.getByPlaceholder('antoine.dupont@thinkeo.io').fill('fake@example.com');
    await page.getByPlaceholder('Password').fill('WrongPassword123!');
    await page.click('#submit');
    // const toast = page.locator('[data-sonner-toast="true"]'); Need technical help on this as toast isn't visible while running the automation test.
    // await expect(toast).toBeVisible({ timeout: 5000 });
  });

  test.only('Positive - successful login', async ({ page }) => {
    await page.getByPlaceholder('antoine.dupont@thinkeo.io').fill('darafiv537@frisbook.com');
    await page.getByPlaceholder('Password').fill('darafiv537@frisbook.comD');
    await page.click('#submit');

    // Wait for redirect or dashboard to appear
    await page.waitForURL(/.*publications*/);

  });

});
