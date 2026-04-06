import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).fill('insetos');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).press('Enter');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('link', { name: 'latim' }).first().click();
  await page.getByRole('link', { name: 'Império Romano' }).nth(1).click();
  await page.getByRole('link', { name: 'Ásia' }).nth(1).click();
});