import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dwhatsapp%26oq%3Dwhatsapp%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDMxNzVqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DVtbCaeC-C-7J1sQP7tSnmQw&q=EhAoBAGwFABfpVFp8D2gfhKOGNasi84GIjDEfr1V1oFIfikzVv9dNf-b8ccLf7_vhf5c-Qx7bdUc5KDYGSfY3aNJHbPuul-UIX8yAVJaAUM');
  await page.locator('iframe[name="a-fzddfu7pqx66"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="1"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="2"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="4"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-fzddfu7pqx66"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'WhatsApp WhatsApp Web https' }).click();
  await page.goto('https://web.whatsapp.com/');
  await page.getByRole('textbox', { name: 'Search or start a new chat' }).click();
  await page.getByRole('textbox', { name: 'Search or start a new chat' }).fill('n');
  await page.locator('[id="_r_a_"]').fill('john');
  await page.locator('div').filter({ hasText: /^Johny$/ }).first().click();
  await page1.goto('https://www.google.com/search?q=rapido+bolsonaro+quer+comer&oq=rapido+bolsonaro+quer+comer&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQzNTBqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8');
  await page1.getByRole('link', { name: 'O Bolsonaro quer comer meu cu' }).click();
  await page1.locator('video').click();
  await page.getByRole('paragraph').click();
  await page.getByRole('paragraph').click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('paragraph').click();
  await page.getByRole('textbox', { name: 'Type a message to Johny' }).press('ControlOrMeta+z');
  await page.getByRole('textbox', { name: 'Type a message to Johny' }).press('ControlOrMeta+z');
  await page.getByRole('textbox', { name: 'Type a message to Johny' }).press('ControlOrMeta+z');
  await page.getByRole('textbox', { name: 'Type a message to Johny' }).press('ControlOrMeta+y');
  await page.getByRole('paragraph').click();
  await page.getByRole('paragraph').click();
  await page.getByRole('paragraph').dblclick();
  await page.getByRole('paragraph').click();
  await page.getByRole('textbox', { name: 'Type a message to Johny' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Type a message to Johny' }).press('ArrowRight');
});