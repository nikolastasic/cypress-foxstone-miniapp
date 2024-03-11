const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rmn4p6",
  env: {
    joinUrl: "https://legacy-api.foxstone.co/api/join?lang=en",
    loginUrl:
      "https://legacy-api.foxstone.co/api/challenge/credentials?lang=en",
    phoneVerificationUrl:
      "https://legacy-api.foxstone.co/api/phone-verification?lang=en",
    access_token: "",
    verification_phone_pin: "",
    user_id: "",
  },
  e2e: {
    baseUrl: "https://sso.foxstone.co",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
