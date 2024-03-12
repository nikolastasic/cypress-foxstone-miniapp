const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: false,
  projectId: "rnzhqd",
  env: {
    joinUrl: "https://legacy-api.foxstone.co/api/join?lang=en",
    loginUrl:
      "https://legacy-api.foxstone.co/api/challenge/credentials?lang=en",
    phoneVerificationUrl:
      "https://legacy-api.foxstone.co/api/phone-verification?lang=en",
    access_token: "",
    verification_phone_pin: "",
    user_id: "",
    grepFilterSpecs: true,
    grepOmitFiltered: true,
  },
  e2e: {
    //baseUrl: "https://sso.foxstone.co",
    baseUrl: "http://localhost:8888",
    specPattern: "cypress/e2e/**/*spec.js",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@bahmutov/cy-grep/src/plugin")(config);
      return config;
    },
  },
});
