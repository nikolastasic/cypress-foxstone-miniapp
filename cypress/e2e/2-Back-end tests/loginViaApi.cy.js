import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Login process", () => {
  context("Back-end tests", () => {
    before(() => {
      cy.createUserAPI(email, password);
    });

    it("Successfull Login Via API", () => {
      const bearerToken = `Bearer ${Cypress.env("access_token")}`;
      const userId = Cypress.env("user_id");

      cy.loginUserAPI(bearerToken, email, password, userId);
    });
  });
});
