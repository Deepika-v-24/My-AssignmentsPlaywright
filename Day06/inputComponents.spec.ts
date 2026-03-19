import {test,expect} from "@playwright/test"

test("Input Components" , async({page}) => {

    await page.goto("https://leafground.com/input.xhtml")

    //Validate a Disabled Textbox
    await expect(page.getByPlaceholder('Disabled')).toBeDisabled()

    //Validate an Enabled Textbox
    await expect(page.getByPlaceholder('Babu Manickam')).toBeEditable()

    //Soft Assertion Practice
    await expect.soft(page.getByPlaceholder('About yourself')).toBeDisabled()

    //Fill Data
    await page.locator('[name="j_idt88:j_idt95"]').clear()
    await page.locator('[name="j_idt88:j_idt95"]').fill("Playwright Learning")
    await page.waitForTimeout(5000)

})