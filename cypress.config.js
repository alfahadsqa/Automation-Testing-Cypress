const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 60000,
    viewportWidth: 1366,
    viewportHeight: 768,
    experimentalWebKitSupport:true,
    retries: 1,
    setupNodeEvents(on, config) { 
      // implement node event listeners here
      allureWriter(on, config);
            return config;
    },
    experimentalStudio: true,
    experimentalRunAllSpecs: true,
    supportFile : 'cypress/support/e2e.js'
  
  },
});
