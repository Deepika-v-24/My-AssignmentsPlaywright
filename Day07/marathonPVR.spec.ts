import {test,expect} from "@playwright/test"

test.use({permissions:['geolocation']})

test("PVR" , async({page}) => {

    await page.goto("https://www.pvrcinemas.com/")
    await page.getByText('Cinema', { exact: true }).click()
    const dropdown =  page.getByRole('button', { name: 'Select Cinema'})
    await dropdown.click()
    await page.locator('li', { hasText: 'PVR, Ampa Mall, Nelson Manickam Road Chennai' }).click();
    //await page.getByRole('button', { name: 'Select Date' }).click();
    await page.getByText('Today, 20 Mar', { exact: true }).click()
    await page.locator('li:has-text("YOUTH")').click()
    await page.locator('span:has-text("02:50 PM Tamil")').click()
    await page.getByRole('button',{name:'Submit'}).first().click()
    await page.getByRole('button', { name: 'Accept' }).click()

    //seat
    const screen = page.locator('.all-seats')
    const seat = screen.locator('.seat-current-pvr')
    await seat.nth(0).click()
    await seat.nth(1).click()
    await page.waitForTimeout(3000)

    //total
    const amount1 = await (await page.locator('.grand-prices').innerText()).trim()
    console.log(amount1)
    await page.getByRole('button', { name: 'Proceed' }).click()

    //next total
    const grandTotal = await page.locator('h6:has-text("Grand Total") + h6').textContent({ timeout: 30000 });
    console.log(grandTotal)   

    await expect(amount1).toEqual(grandTotal)





    



})