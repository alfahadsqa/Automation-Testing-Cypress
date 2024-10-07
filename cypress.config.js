const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
    experimentalWebKitSupport:true,
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
