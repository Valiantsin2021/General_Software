const basicConfig = require('./wdio.conf')
exports.config = {
  ...basicConfig.config,
  capabilities: [
    {
      maxInstances: 3,
      browserName: 'chrome',
      acceptInsecureCerts: true,
      'goog:chromeOptions': {
        args: [
          '--headless',
          '--start-maximized',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--window-size=1920,1080',
          '--no-sandbox',
          //'--disable-web-security',
          '--ignore-certificate-errors',
          //'--no-experiments',
          //'--disable-webgl',
          //'--disable-extensions',
          //'--disable-d3d11',
          //'--disable-local-storage',
          '--disable-notifications'
          //'--disable-offne-pages',
          //'--disable-plugin-power-saver',
          //'--disable-plugins-discovery',
          //'--disable-sync',
          //'--disable-translate'
        ]
      }
    }
  ]
}
