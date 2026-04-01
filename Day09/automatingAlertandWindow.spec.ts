import { test, expect } from '@playwright/test';

test('Handle Alert and Window', async ({ page }) => {
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
  page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })
  await page.frameLocator('#iframeResult').getByRole('button', { name: 'Try it' }).click();
  
  await expect(page.frameLocator('#iframeResult').getByText('You pressed OK!')).toBeVisible();
  

})