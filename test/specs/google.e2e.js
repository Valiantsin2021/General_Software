const GooglePage = require('../pageobjects/google.page')
const expectChai = require('chai').expect
const {
  searchresultOk,
  searchResultNok,
  searchString
} = require('../utils/constants')
describe(`Should open Google page and perform positive and negative test for searching '${searchString}'`, async function () {
  beforeEach(async function () {
    await browser.deleteCookies()
    await GooglePage.open()
    await GooglePage.acceptCookies()
  })
  // first test opens Google page, accepts cookies and assert the opened page is correct
  it(`Opens Google page, accepts cookies and assert the opened page is correct`, async function () {
    await expect(browser).toHaveUrlContaining('https://www.google.es/')
    await expect(browser).toHaveTitle('Google')
  })
  // negative test to assert the number of returned results
  it(`checks the search result are not lower than '${searchResultNok}'`, async function () {
    await GooglePage.search(searchString)
    await GooglePage.searchResultStr.waitForDisplayed()
    expectChai(
      await browser.parseResultsNumber(await GooglePage.searchResultStr)
    ).not.to.be.below(
      searchResultNok,
      `Search are lower than ${searchResultNok}`
    )
  })
  // positive test to assert the number of returned results
  it(`checks the search results are more than '${searchresultOk}'`, async function () {
    await GooglePage.search(searchString)
    await GooglePage.searchResultStr.waitForDisplayed()
    expectChai(
      await browser.parseResultsNumber(await GooglePage.searchResultStr)
    ).to.be.above(
      searchresultOk,
      `Search are not greater than ${searchresultOk}`
    )
  })
})
