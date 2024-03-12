import { faker } from "@faker-js/faker";
import testData from "../../fixtures/testData.json";

const email = faker.internet.email();
const password = Cypress.env("validPassword");
const firstName = faker.person.firstName();
const lastName = faker.person.firstName();

describe("Back-end tests", () => {
  context("Signup process", () => {
    before(() => {
      cy.createUserAPI(email, password);
    });

    it("Successfull Signup Via API", () => {
      const bearerToken = `Bearer ${Cypress.env("access_token")}`;
      const userId = Cypress.env("user_id");

      cy.agreeTermsAndConditionsAPI(bearerToken);
      cy.sendNameAndTitleAPI(bearerToken, firstName, lastName);
      cy.sendPrefferedProductsAPI(
        bearerToken,
        testData.productsInterestedIn.crowdlending.toLowerCase()
      );
      cy.sendCrowdfoundingBudgetAPI(
        bearerToken,
        testData.availableCapital.chf10k25kApiValue
      );
      cy.sendInvestmentPeriodAPI(
        bearerToken,
        testData.firstInvestmentTime.now.toLowerCase()
      );
      cy.getVerificationPhonePinAPI(
        bearerToken,
        testData.mobileNumber.slice(4),
        userId
      );
    });
  });
});
