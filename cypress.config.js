const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.ploomes.com',
    env: {
      hideCredentials: true,
      requestMode: true,
    },
   
  },
  fixturesFolder: false,
  video: false,
})