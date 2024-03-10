import { faker } from "@faker-js/faker";
import testData from "../../fixtures/testData.json";

let email = faker.internet.email();
let password = faker.internet.password();
let firstName = faker.person.firstName();
let lastName = faker.person.firstName();
let preferredProducts = "coownership";
let crowdfundingBudget = "10k-25k";
let investmentPeriod = "now";
let mobileNumber = "69222449";

describe("Signup process", () => {
  context("Back-end tests", () => {
    before(() => {
      cy.createUserAPI(email, password);
    });

    it("Successfull Signup", () => {
      const bearerToken = `Bearer ${Cypress.env("access_token")}`;
      const userId = Cypress.env("user_id");

      cy.agreeTermsAndConditionsAPI(bearerToken);
      cy.sendNameAndTitleAPI(bearerToken, firstName, lastName);
      cy.sendPrefferedProductsAPI(bearerToken, preferredProducts);
      cy.sendCrowdfoundingBudgetAPI(bearerToken, crowdfundingBudget);
      cy.sendInvestmentPeriodAPI(bearerToken, investmentPeriod);
      cy.getVerificationPhonePinAPI(bearerToken, mobileNumber, userId);
    });
  });
});
