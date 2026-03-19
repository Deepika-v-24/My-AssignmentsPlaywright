import {test,expect} from "@playwright/test"

test("AutoWait" , async({page}) => {

    await page.goto("https://leafground.com/waits.xhtml")

    //Wait for an element to become visible before interacting with it.
    
    await page.locator('h5:has-text("Wait for Visibility")').locator('..').getByRole('button', { name: 'Click' }).click()
    const Visiblebutton = page.getByRole('button', {name: 'I am here'})
    await expect(Visiblebutton).toBeVisible({ timeout: 10000 })

    //Wait for an element to disappear from the page.
    await page.locator('h5:has-text("Wait for Invisibility")').locator('..').getByRole('button',{name: 'Click'}).click()
    const invisiblebutton = page.getByRole('button', {name:'I am about to hide'})
    await expect(invisiblebutton).not.toBeVisible({timeout:5000})

    //Check for text changes within an element and respond accordingly.
    await page.locator('h5:has-text("Wait for Text Change")').locator('..').getByRole('button',{name:'Click'}).click()
    const textchange = page.getByRole('button',{name:'Did you notice?'})
    await expect(textchange).toHaveText('Did you notice?',{ timeout: 10000 })


})