const { setWorldConstructor } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require("puppeteer");

const PAGE = "url";

class World {
  constructor() {
    // this.todo = "";
  }

  async closePage() {
    await this.browser.close();
  }

  async onLandingPage() {
    await this.page.screenshot({
      path: "landing.png"
    })
  }

  async seeLoginPage() {
    let el = ".help-block"
    await this.page.waitForSelector(el)
    let value = await this.page.$eval(el, e => e.innerText)
    expect(value).to.eql("Welcome back! Please sign in below.")
  }

  async fillCredentials() {
    let email = "email"
    let password = "pass"
    await this.page.evaluate((email, password) => {
      document.querySelector("#email").value = email
      document.querySelector("#password").value = password
    }, email, password)
  }

  async submit() {
    let elem = await this.page.$("#password");
    await elem.press("Enter");
  }

  async seeAdminPage() {
    let el = "#brand"
    await this.page.waitForSelector(el)
    let value = await this.page.$eval(el, e => e.innerText)
    expect(value.trim()).to.eql("eResources ID")
  }

  async loginAsAdmin() {
    // this.browser = await puppeteer.launch()
    this.browser = await puppeteer.launch(
      {
        headless: false
      }
    )
    this.page = await this.browser.newPage();
    await this.page.setViewport({
      "width": 1024,
      "height": 800,
    })
    await this.page.goto(PAGE);
    
    let el = ".help-block"
    await this.page.waitForSelector(el)
    let value = await this.page.$eval(el, e => e.innerText)
    expect(value).to.eql("Welcome back! Please sign in below.")

    let email = "email"
    let password = "pass"
    await this.page.evaluate((email, password) => {
      document.querySelector("#email").value = email
      document.querySelector("#password").value = password
    }, email, password)

    await this.page.click(".puppet-btn-login-submit")
    // on headless timed out
    await this.page.waitForFunction(() => document.querySelector(".puppet-nav-program-options") != null, {
      polling: "mutation"
    })
    // on headless timed out
    // await this.page.waitForNavigation({
    //   waitUntil: "load"
    // })
  }

  async seeListOfForms() {
    let el = ".puppet-forms-container .panel-heading h3.panel-title"
    await this.page.waitForSelector(el)
    let value = await this.page.$eval(el, e => e.innerText)
    expect(value).to.eql("All Forms")
  }

  async seeListOfSettings() {
    let el = ".app-body .app-body .panel-heading h3.panel-title"
    await this.page.waitForSelector(el)
    let value = await this.page.$eval(el, e => e.innerText)
    expect(value).to.eql("All Settings")
  }
}

setWorldConstructor(World);