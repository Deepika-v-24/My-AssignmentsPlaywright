import {test,expect} from "@playwright/test"


test("Flipkart" , async({page,context}) => {

    await page.goto("https://www.flipkart.com/")
    await page.locator("body").click()
    const searchbox = page.locator('input:visible').first()
    await searchbox.first().fill("Kechaoda A27")
    await searchbox.press("Enter")
    //const newpage = context.waitForEvent("page")
    await page.locator('div').filter({ hasText: 'Kechaoda A27' }).first().click()
    const childPage = await context.waitForEvent("page")
    await childPage.waitForLoadState("domcontentloaded")
    console.log("Child Page Title: " + await childPage.title())
    console.log("Parent Page Title: " + await page.title())
    await page.bringToFront()
    await page.getByText('Women', { exact: true }).click()

})