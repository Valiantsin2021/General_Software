const Page = require('./page')
class GooglePage extends Page {
  /**
   * define selectors using getter methods
   */
  get searchInput() {
    return $('//*[@name="q"]')
  }
  get acceptCookiesBtn() {
    return $('#L2AGLb')
  }
  get searchResultStr() {
    return $('#result-stats')
  }
  /**
   * open the Google page
   */
  open() {
    return super.open()
  }
  /**
   * a method to accept cookies modal on the Google page
   */
  async acceptCookies() {
    if (await this.acceptCookiesBtn.isExisting()) {
      await this.acceptCookiesBtn.waitForDisplayed()
      await this.acceptCookiesBtn.click()
    }
    return
  }
  /**
   * a method to perform the strict search on SPLUNK with the query passed to the method (string) as first parameter
   * and the number of logs expected (string) as second parameter
   */
  async search(searchStr) {
    await this.searchInput.waitForDisplayed()
    await this.searchInput.addValue(searchStr)
    await browser.keys('Enter')
    // waiting for search to finish
    await this.searchResultStr.waitForDisplayed()
  }
}

module.exports = new GooglePage()
