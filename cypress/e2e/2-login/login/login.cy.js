describe("Login tests", () => {
  context("Front-end login tests", () => {
    beforeEach(() => {
      cy.visit("/en");
      cy.waitPageToLoad();
    });

    it("Successfull login", () => {
      cy.login(Cypress.env("login_email"), Cypress.env("login_password"));
      cy.location("pathname").should("equal", "/en/offerings");
      cy.verifyUserProfileName(
        Cypress.env("firstName"),
        Cypress.env("lastName")
      );
    });
  });
});
