const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://app.ploomes.com',
    experimentalRunAllSpecs: true,
    env: {
      hideCredentials: true,
      hideCredentialsOptions: {
        headers: ['user-key'],
      },
      requestMode: true,
    },
  },
  fixturesFolder: false,
  video: false,
})