const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.ploomes.com',
  },
  fixturesFolder: false,
  video: false,
})