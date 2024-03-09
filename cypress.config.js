const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login_email: "pata123@gmail.com",
    login_password: "Sifra123",
    firstName: "tik",
    lastName: "tok",
    getPinUrl: "https://legacy-api.foxstone.co/api/join?lang=en",
  },
  e2e: {
    baseUrl: "https://sso.foxstone.co",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
