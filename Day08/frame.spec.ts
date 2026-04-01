import { expect, test } from "@playwright/test";


test(`frame`,async ({page}) => {

    await page.goto("https://leafground.com/frame.xhtml")
    const frame = page.frameLocator(`[src ="default.xhtml"]`)
    
    await frame.locator("#Click").click()
    expect(frame.locator("#Click")).toHaveText("Hurray! You Clicked Me.")
    console.log(await page.title())


})