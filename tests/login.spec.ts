import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login();
  await expect(loginPage.logoutButton).toBeVisible();
});

test('Login with both fields empty', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.emptyLogin();
  await expect(loginPage.loginErrorMessage).toBeVisible();
});

test('Login with no Username', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginEmptyUsername();
  await expect(loginPage.loginErrorMessage).toBeVisible();
});

test('Login with no Password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.loginEmptyPassWord();
  await expect(loginPage.loginErrorMessage).toBeVisible();
});