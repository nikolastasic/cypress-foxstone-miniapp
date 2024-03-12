import { faker } from "@faker-js/faker";
import testData from "../../fixtures/testData.json";

const email = faker.internet.email();
const password = faker.internet.password();
const firstName = faker.person.firstName();
const lastName = faker.person.firstName();

describe("Signup process", () => {
  context("Back-end tests", () => {
    before(() => {
      cy.createUserAPI(email, password);
    });

    it("Successfull Signup Via API", () => {
      const bearerToken = `Bearer ${Cypress.env("access_token")}`;
      const userId = Cypress.env("user_id");

      cy.agreeTermsAndConditionsAPI(bearerToken);
      cy.sendNameAndTitleAPI(firstName, lastName); //removed bearer token
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
