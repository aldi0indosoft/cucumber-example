const { Given, When, Then, After, Before } = require("cucumber");

Before({ timeout: 120 * 1000 }, async function () {
    return await this.loginAsAdmin()
});
After(async function () {
    return await this.closePage()
});


Given("I already logged in to Admin Page", async function () {
    return await this.seeAdminPage()
})

When("I click [Program Options] nav", async function () {
    return await Promise.all([
        this.page.click(".puppet-nav-program-options"),
        this.page.waitForSelector(".side-nav-child.open"),
        this.page.waitFor(3000),
    ])
})