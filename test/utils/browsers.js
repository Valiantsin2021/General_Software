module.exports = {
  chrome: {
    maxInstances: 2,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: ['--start-maximized']
    }
  },
  edge: {
    maxInstances: 2,
    browserName: 'MicrosoftEdge',
    acceptInsecureCerts: true
  },
  firefox: {
    maxInstances: 2,
    browserName: 'firefox',
    acceptInsecureCerts: true
  }
}
