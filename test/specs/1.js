const superagent = require('superagent')
const fs = require('fs')
const setCookie = require('set-cookie-parser')

async function cookies() {
  const req = await superagent.get('https://www.google.es/').then(res => {
    let cookies = setCookie.parse(res, {
      decodeValues: true // default: true
    })
    for (let el of cookies) {
      delete el.sameSite
    }
    fs.writeFileSync('./googlecookies.json', JSON.stringify(cookies))
    return cookies
  })
  return req
}
cookies().then(res => console.log(res))
