import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Successful Login', async ({ page }) => {
  // Login attempt
  await page.goto('https://quotes.toscrape.com/login');
  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();

  // Wait for page to load  
  // await page.waitForURL('http://quotes.toscrape.com/') // this should be changed to a landing page path like */dashboard
});

test('Login with POM', async ({ page }) => {
  const loginPage = new LoginPage(page);
  loginPage.goTo();
  await loginPage.fillForm("admin", "admin");
});