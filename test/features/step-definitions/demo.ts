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
