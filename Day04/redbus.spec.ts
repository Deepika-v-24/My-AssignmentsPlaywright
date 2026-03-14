import {chromium, firefox, test} from '@playwright/test'

test("Redbus in Edge Browser" , async({browser}) => {
    const browsername = await  chromium.launch({channel: "msedge" ,headless: false})
    const edgepage =  await browsername.newPage()
    await edgepage.goto("https://www.redbus.in")
    const redbustitle = await edgepage.title()
    const redbusurl = edgepage.url()

    console.log("RedBus Title:", redbustitle);
    console.log("RedBus URL:", redbusurl);

     await edgepage.close();

    const firefoxBrowser = await firefox.launch({ headless: false });
    const firefoxPage = await firefoxBrowser.newPage();

    await firefoxPage.goto("https://www.flipkart.com");
 
    const flipkartTitle = await firefoxPage.title();
    const flipkartURL = firefoxPage.url();

    console.log("Flipkart Title:", flipkartTitle);
    console.log("Flipkart URL:", flipkartURL);

  await firefoxBrowser.close();
})
