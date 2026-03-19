import {test,expect} from "@playwright/test"

test("RadioButton" , async({page}) => {

    await page.goto("https://leafground.com/radio.xhtml")

    //Identify and assert the default selected radio button.
    const group = page.locator("div").filter({hasText: "Find the default select radio button"});
    await expect(group.getByRole("radio", {name: "Safari"}).nth(1)).toBeChecked();
    

    //Click your most favorite browser and assert that the browser is enabled
    const browser=page.getByText("Chrome",{exact: true}).first()
    await page.getByText("Chrome",{exact: true}).first().click()
    await expect(browser).toBeChecked()

    //Click one of the cities.
    const city=page.getByText("Chennai",{exact: true}).first()
    await page.getByText("Chennai",{exact: true}).first().check()
    await expect(city).toBeChecked()

    //Select the age group. Assert the default selected button.
    await expect(page.getByRole("radio",{name: '-40 Years'})).toBeChecked()




})