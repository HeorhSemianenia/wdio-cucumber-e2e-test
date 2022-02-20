import {Given, When, Then} from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
    await browser.url("https://google.com");
    await browser.pause(2000);
})

When(/^Search with (.*)$/, async function (searchItem) {
    let ele = await $(`[name=q]`);
    await ele.setValue(searchItem);
    await browser.pause(2000);
    await browser.keys("Enter");
})

Then(/^Click on first search result$/, async function () {
    let ele = await $(`<h3>`);
    (await ele).click();
    await browser.pause(2000);
})

Then(/^URL should match (.*)$/, async function (expectedURL) {
    let url = await browser.getUrl()
    chai.expect(url).to.equal(expectedURL);
})

/**
 * WEB INTERACTIONS
 */
Given(/^A web page is opened$/, async function () {
    await browser.url("/inputs");
    await browser.setTimeout({implicit: 15000, pageLoad: 10000});
    await browser.maximizeWindow();
})

When(/^Perform web interactions$/, async function () {
    let str = "12345"
    let ele = await $(`[type=number]`);
    await ele.click();
    // await ele.addValue(str);

    for (let i=0; i<str.length; i++ ){
        let charStr = str.charAt(i);
        await browser.pause(1000);
        await browser.keys(charStr);
    }


    await browser.pause(3000);
})
