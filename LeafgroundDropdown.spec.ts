import {test,expect} from "@playwright/test"

test("Dropdown" , async({page}) => {

    await page.goto("https://leafground.com/select.xhtml")
    const option = page.locator('select.ui-selectonemenu')
    const optioncount = await option.count()
    for(let i=0;i<optioncount;i++)
    {
        console.log(await option.nth(i).innerText())   
    }
    //choose your preferred country
    await page.locator('label:has-text("Select Country")').click()
    await page.locator('li:has-text("India")').click()

    await page.locator('label:has-text("Select City")').click()
    const elements = page.locator('#j_idt87\\:city_items li')
    await expect(elements).toHaveCount(4)

    //choose the course
    const input = page.locator("#j_idt87\\:auto-complete_input");
    await input.pressSequentially("Play")
    await page.locator('li:has-text("Playwright")').click()

  
    await input.pressSequentially("AW")
    await page.getByRole("option", { name: "AWS" }).click();

    
    await input.pressSequentially("Rest")
    await page.locator('li:has-text("RestAssured")').click()

    await page.locator("body").click();

   
    
    //Choose language
    await page.locator('label:has-text("Select Language")').click()
    const language = page.locator("#j_idt87\\:lang_items li");
    const lcount = await language.count()
    for(let i=0;i<lcount;i++)
    {
        console.log(await language.nth(i).innerText())
    }
   
    await page.getByRole("option", {name: "Tamil"}).click()
    await page.waitForTimeout(3000)

})