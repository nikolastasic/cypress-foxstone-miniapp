import { faker } from "@faker-js/faker";

let email = faker.internet.email();
let password = faker.internet.password();
let firstName = faker.person.firstName();
let lastName = faker.person.firstName();
let country = "Serbia";
let mobileNumber = "+381111222333";

describe("Signup tests", () => {
  context("Front-end signup tests", () => {
    beforeEach(() => {
      cy.visit("en/signin");
      cy.waitPageToLoad();
    });

    it("Successfull signup", () => {
      cy.clickOnSignUp();
      cy.signUp(email, password);
      cy.log("Title" + cy.getTitle());
      cy.selectTitle("Mr.");
      cy.enterName(firstName, lastName);
      cy.clickOnSubmitButton();
      cy.clickOnElementContainsText("Press");
      cy.clickOnElementContainsText("Co-ownership");
      cy.clickOnElementContainsText("CHF");
      cy.clickOnSubmitButton();
      cy.clickOnElementContainsText("Now");
      cy.selectCountryAndEnterMobileNumber(country, mobileNumber);
      cy.interceptVerificationPin();
      cy.waitPageToLoad();
      cy.location("pathname").should("equal", "/en/thank-you");
      cy.waitProgressBar();
      cy.location("pathname").should("equal", "/en/offerings");
    });
  });
});
