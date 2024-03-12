import { faker } from "@faker-js/faker";
import testData from "../../fixtures/testData.json";

let email = faker.internet.email();
let password = Cypress.env("validPassword");
let firstName = faker.person.firstName();
let lastName = faker.person.firstName();

describe("End to End tests", () => {
  context("Complete Signup and Login proccess", () => {
    beforeEach(() => {
      cy.visit("en/signin");
      cy.waitPageToLoad();
    });

    it("Successfull Signup", () => {
      cy.clickOnSignUp();
      cy.signUp(email, password);
      cy.selectTitle(testData.titles.mr);
      cy.enterName(firstName, lastName);
      cy.clickOnSubmitButton();
      cy.clickOnElementContainsText(testData.discoverMethod.press);
      cy.clickOnElementContainsText(testData.productsInterestedIn.crowdlending);
      cy.clickOnElementContainsText(testData.availableCapital.chf100k250k);
      cy.clickOnSubmitButton();
      cy.clickOnElementContainsText(testData.firstInvestmentTime.later);
      cy.selectCountryAndEnterMobileNumber(
        testData.countries.srb,
        testData.mobileNumber
      );
      cy.interceptVerificationPin();
      cy.waitPageToLoad();
      cy.location("pathname").should("equal", "/en/thank-you");
      cy.waitProgressBar();
      cy.location("pathname").should("equal", "/en/offerings");
      cy.verifyUserProfileName(firstName, lastName);
    });

    it("Successfull Login", () => {
      cy.login(email, password);
      cy.location("pathname").should("equal", "/en/offerings");
      cy.verifyUserProfileName(firstName, lastName);
    });
  });
});
