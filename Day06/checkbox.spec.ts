import {test,expect} from "@playwright/test"

test("CheckBox" , async({page}) => {

    await page.goto("https://leafground.com/checkbox.xhtml")

    //Click on the "Basic Checkbox.
    await page.getByText('Basic', { exact: true }).click()

    //Click on the "Notification Checkbox.
    const section = page.locator('h5:has-text("Notification")').locator('..');
    const checkbox = section.locator('.ui-chkbox-box');
    await checkbox.click();

    //Click on your favorite language (assuming it's related to checkboxes).
    const langSection = page.locator('h5:has-text("Choose your favorite language(s)")').locator('..');
    await langSection.getByText('Java',{exact: true}).click();
    await langSection.getByText('Python',{exact: true}).click();

    
    // Tri-State Checkbox
    const tristate = page.locator('h5:has-text("Tri State Checkbox")').locator('..');
    await tristate.locator('.ui-chkbox-box').click();


     //Verify disabled checkbox
    const disabledCheckbox = page.getByRole('checkbox', { name: 'Disabled' });
    await expect(disabledCheckbox).toBeDisabled();

    //Select Multiple
    await page.locator('.ui-selectcheckboxmenu').click()
    const panel = page.locator('.ui-selectcheckboxmenu-panel:visible');
    await panel.getByText('Miami').click();
    await panel.getByText('Berlin').click();

    await page.locator('body').click();

})