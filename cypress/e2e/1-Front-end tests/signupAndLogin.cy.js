import { faker } from "@faker-js/faker";
import testData from "../../fixtures/testData.json";

let email = faker.internet.email();
let password = faker.internet.password();
let firstName = faker.person.firstName();
let lastName = faker.person.firstName();

describe("Signup process", () => {
  context("Front-end tests", () => {
    beforeEach(() => {
      cy.visit("en/signin");
      cy.waitPageToLoad();
    });

    it("Successfull Signup", () => {
      cy.clickOnSignUp();
      cy.signUp(email, password);
      cy.selectTitle(testData.title);
      cy.enterName(firstName, lastName);
      cy.clickOnSubmitButton();
      cy.clickOnElementContainsText(testData.discoverFoxstone);
      cy.clickOnElementContainsText(testData.productInterestedIn);
      cy.clickOnElementContainsText(testData.availableCapital);
      cy.clickOnSubmitButton();
      cy.clickOnElementContainsText(testData.firstInvestmentTime);
      cy.selectCountryAndEnterMobileNumber(
        testData.country,
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
