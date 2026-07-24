import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful Login', async ({ page }) => {
  await page.goto(process.env.BASE_URL!);
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator('#username').fill(process.env.USERNAME!);
  await page.locator('#password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});

test('Login with POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goTo();
  await loginPage.login();
  await loginPage.fillForm();
  await loginPage.submit();
  await expect(loginPage.logoutButton).toBeVisible();
});