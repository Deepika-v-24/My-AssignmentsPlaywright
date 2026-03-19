import {test} from "@playwright/test"

test("Login to CRM application" , async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("input[id='username']").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator("input[type='submit']").click()
    await page.locator("#button").click()
     await page.locator('a:has-text("Create Lead")').click()
     //dropdown
     await page.locator("//select[@id='createLeadForm_dataSourceId']").selectOption("Partner")
   
     const industrydropdown =  page.locator(`//select[@id='createLeadForm_industryEnumId']/option`)
     const count = await industrydropdown.count()

     for(let i=0;i<count;i++)
     {
        console.log(await industrydropdown.nth(i).innerText())
     }
    



})
