const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rnzhqd",
  env: {
    validEmail: "foxstone123@yahoo.com",
    validPassword: "Password123",
    validFirstName: "John",
    validLastName: "Doe",
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
