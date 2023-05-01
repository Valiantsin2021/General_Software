const GooglePage = require('../pageobjects/google.page')
const expectChai = require('chai').expect
const superagent = require('superagent')
const setCookie = require('set-cookie-parser')
const fs = require('fs')
const {
  searchresultOk,
  searchResultNok,
  searchString
} = require('../utils/constants')
async function getCookies() {
  const req = await superagent.get('https://www.google.es/').then(res => {
    let cookies = setCookie.parse(res, {
      decodeValues: true // default: true
    })
    // for (let el of cookies) {
    //   delete el.sameSite
    // }
    fs.writeFileSync('./googlecookies.json', JSON.stringify(cookies))
  })
  return req
}
let cookies
describe(`Should open Google page and perform positive and negative test for searching '${searchString}'`, async function () {
  this.beforeAll(async () => {
    await getCookies()
    cookies = await require('../../googlecookies.json')
  })
  beforeEach(async function () {
    await GooglePage.open()
    await browser.setCookies(cookies)
    // await GooglePage.acceptCookies()
  })
  // first test opens Google page, accepts cookies and assert the opened page is correct
  it(`Opens Google page, accepts cookies and assert the opened page is correct`, async function () {
    await expect(browser).toHaveUrlContaining('https://www.google.es/')
    await expect(browser).toHaveTitle('Google')
    // const cookies = await browser.getAllCookies()
    // await fs.writeFileSync('./cookies.json', JSON.stringify(cookies))
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
