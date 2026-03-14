import {test} from "@playwright/test"

test("Login to CRM application" , async({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("input[id='username']").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator("input[type='submit']").click()
    await page.locator("#button").click()
    await page.locator('a:has-text("Create Lead")').click()
    await page.locator("#createLeadForm_companyName").fill("Cognizant")
    await page.locator("#createLeadForm_firstName").fill("deepika")
    await page.locator("#createLeadForm_lastName").fill("V")
    await page.locator("#createLeadForm_personalTitle").fill("mrs")
    await page.locator('input[name="generalProfTitle"]').fill("Associate")
    await page.locator('input[type="submit"]').click()
    console.log(await page.title())




})