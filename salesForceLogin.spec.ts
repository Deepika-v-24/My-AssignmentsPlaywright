import {chromium, firefox, test, webkit} from "@playwright/test"

test('the browser laumch', async({page}) => {

    await page.goto("https://login.salesforce.com/")
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("//input[@id='password']").fill("TestLeaf@2025")
    await page.locator("//input[@id='Login']").click()

    await page.locator('.slds-truncate').isVisible();
    console.log("Login verification completed");
})
