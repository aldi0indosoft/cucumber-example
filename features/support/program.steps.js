const { Given, When, Then, After, Before } = require("cucumber");

When("I click [Programs] nav", { timeout: 120 * 1000 }, async function () {
  return await Promise.all([
    this.page.click(".puppet-side-nav-item-program"),
    this.page.waitForNavigation({
      waitUntil: "load"
    }),
  ])
})
When("I click [Create Program] Button", async function () {
  return await Promise.all([
    this.page.waitForSelector(".puppet-button-add-program"),
    this.page.click(".puppet-button-add-program"),
    this.page.waitForFunction(
      () => document.getElementById("name") != null
      , {polling: "mutation"}
    )
  ])
})
When("I click [Create Sub Program] Button", async function () {
  return await Promise.all([
    this.page.waitForSelector(".puppet-button-add-sub-program"),
    this.page.click(".puppet-button-add-sub-program"),
    this.page.waitForFunction(
      () => document.getElementById("name") != null
      , {polling: "mutation"}
    )
  ])
})
When("I click [View All Programs] Button", async function () {
  return await Promise.all([
    this.page.waitForSelector(".puppet-button-view-all-program"),
    this.page.click(".puppet-button-view-all-program"),
    this.page.waitForFunction(
      () => document.querySelector(".puppet-panel-body-program") != null
      , {polling: "mutation"}
    )
  ])
})

Then("I expect to see list of Programs", async function () {
  return await this.page.waitForSelector(".puppet-panel-body-program")
})
Then("I expect to see [Create Program] Button", async function () {
  return await this.page.waitForSelector(".puppet-button-add-program")
})
Then("I expect to see [Create Sub Program] Button", async function () {
  return await this.page.waitForSelector(".puppet-button-add-sub-program")
})
Then("I expect to see [View All Programs] Button", async function () {
  return await this.page.waitForSelector(".puppet-button-view-all-program")
})
Then("I expect to see Program Form", async function () {
  return await Promise.all([
    this.page.waitForSelector("#name"),
    this.page.waitForSelector("#prefix"),
  ])
})
Then("I expect to see Sub Program Form", async function () {
  return await Promise.all([
    this.page.waitForSelector("#name"),
    this.page.waitForSelector("#link_id"),
  ])
})
Then("I expect to see Program Container", async function () {
  return await this.page.waitForSelector(".puppet-panel-body-program")
})