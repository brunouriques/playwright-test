import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'Português 1.165.000+ artigos' }).click();
  await page.getByRole('searchbox', { name: 'Pesquisar na Wikipédia' }).click();
  await page.getByRole('combobox', { name: 'Pesquisar na Wikipédia' }).fill('taquara');
  await page.getByRole('link', { name: 'Taquara', exact: true }).click();
  await page.getByText('Etimologia[editar | editar có').click();
  await page.getByText('Taquara é a denominação comum').click();
  await page.getByText('Taquara é a denominação comum').click();
  await expect(page.locator('#mw-content-text')).toMatchAriaSnapshot(`
    - img
    - text: "Nota: Este artigo é sobre a gramínea. Para o município, veja"
    - link "Taquara (Rio Grande do Sul)":
      - /url: //pt.wikipedia.org/wiki/Taquara_(Rio_Grande_do_Sul)
    - text: . Para outros significados, veja
    - link "Taquara (desambiguação)":
      - /url: //pt.wikipedia.org/wiki/Taquara_(desambiguação)
    - text: .
    `);
  await expect(page.locator('#skin-client-prefs-wp25eastereggs-enable')).toMatchAriaSnapshot(`- text: Ativado`);
});