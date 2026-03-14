import {chromium, firefox, test, webkit} from "@playwright/test"

test('the browser laumch', async() => {
     
   const browser =  await firefox.launch();
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto('https://www.amazon.in/')
   console.log(await page.title())
   await page.waitForTimeout(3000)


})