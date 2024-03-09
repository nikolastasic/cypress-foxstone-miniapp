import selectors from "../fixtures/selectors.json";

Cypress.Commands.add("waitPageToLoad", () => {
  cy.get(selectors.loader).should("not.exist");
});

Cypress.Commands.add("clickOnSubmitButton", () => {
  cy.get(selectors.submitBtn).click();
  cy.waitPageToLoad();
});

Cypress.Commands.add("clickOnNextButton", () => {
  cy.get(".btn").contains("Next");
  cy.waitPageToLoad();
});

Cypress.Commands.add("login", (email, password) => {
  cy.get(selectors.emailInput).type(email);
  cy.get(selectors.passwordInput).type(password);
  cy.clickOnSubmitButton();
});

Cypress.Commands.add("clickOnSignUp", () => {
  cy.get(selectors.signupBtn).click();
  cy.waitPageToLoad();
});

Cypress.Commands.add("signUp", (email, password) => {
  cy.get(selectors.emailInput).type(email);
  cy.get(selectors.passwordInput).type(password);
  cy.get(selectors.termsAndConditionsCb).click({ force: true });
  cy.clickOnSubmitButton();
});

Cypress.Commands.add("verifyUserProfileName", (firstName, lastName) => {
  cy.get(selectors.topbarName).contains(firstName + " " + lastName);
});

Cypress.Commands.add("selectTitle", (title) => {
  cy.get("select").select(title);
});

Cypress.Commands.add("enterName", (firstName, lastName) => {
  cy.get(selectors.firstNameInput).type(firstName);
  cy.get(selectors.lastNameInput).type(lastName);
});

Cypress.Commands.add("clickOnElementContainsText", (text) => {
  cy.contains(text).click();
});

Cypress.Commands.add(
  "selectCountryAndEnterMobileNumber",
  (country, mobileNumber) => {
    cy.get(selectors.countrySelect).click();
    cy.get(selectors.countryOption).contains(country).click();
    cy.get(selectors.mobileNumberInput).type(mobileNumber);
  }
);

Cypress.Commands.add("interceptVerificationPin", (text) => {
  cy.intercept("PATCH", Cypress.env("getPinUrl")).as("getVerificationPhonePin");
  cy.clickOnElementContainsText("Next");
  cy.wait("@getVerificationPhonePin").then((xhr) => {
    const verification_phone_pin = xhr.response.body["verification_phone_pin"];
    cy.get(selectors.verificationPhonePinInput).type(verification_phone_pin);
  });
});

Cypress.Commands.add("waitProgressBar", () => {
  cy.get(".progress-bar", { timeout: 12000 }).should("not.exist");
  cy.waitPageToLoad();
});
