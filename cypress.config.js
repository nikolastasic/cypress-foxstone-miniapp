const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    login_email: "pata123@gmail.com",
    login_password: "Sifra123",
    firstName: "tik",
    lastName: "tok",
  },
  e2e: {
    baseUrl: "https://sso.foxstone.co",
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
