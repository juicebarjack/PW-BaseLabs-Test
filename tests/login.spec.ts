import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful Login', async ({ page }) => {
  await page.goto('/login');
  await page.locator('#username').fill(process.env.USERNAME!);
  await page.locator('#password').fill(process.env.PASSWORD!);
  await page.getByRole('button', { name: 'Login' }).click();
});

test('Login with POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.goTo();
  await loginPage.fillForm();
});