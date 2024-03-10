import selectors from "../fixtures/selectors.json";
import { faker } from "@faker-js/faker";

let deviceId = faker.datatype.uuid();

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
  cy.get(selectors.passwordInput).type(password, { log: false });
  cy.clickOnSubmitButton();
});

Cypress.Commands.add("clickOnSignUp", () => {
  cy.get(selectors.signupBtn).click();
  cy.waitPageToLoad();
});

Cypress.Commands.add("signUp", (email, password) => {
  cy.get(selectors.emailInput).type(email);
  cy.get(selectors.passwordInput).type(password, { log: false });
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
  cy.intercept("PATCH", Cypress.env("joinUrl")).as("getVerificationPhonePin");
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

Cypress.Commands.add("createUserAPI", (email, password) => {
  cy.request({
    method: "POST",
    url: Cypress.env("joinUrl"),
    body: {
      email: email,
      password: password,
      referral_code: "",
      hubspotTrackingID: "",
      device_id: deviceId,
    },
  }).then((response) => {
    Cypress.env("access_token", response.body.access_token);
    Cypress.env("user_id", response.body.join_id);
    expect(response.status).to.eq(201);
  });
});

Cypress.Commands.add("agreeTermsAndConditionsAPI", (bearerToken) => {
  cy.request({
    method: "PATCH",
    url: Cypress.env("joinUrl"),
    headers: {
      Authorization: bearerToken,
    },
    body: {
      terms_agreed: true,
      language: "en",
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
  });
});

Cypress.Commands.add(
  "sendNameAndTitleAPI",
  (bearerToken, firstName, lastName) => {
    cy.request({
      method: "PATCH",
      url: Cypress.env("joinUrl"),
      headers: {
        Authorization: bearerToken,
      },
      body: {
        last_name: lastName,
        first_name: firstName,
        salutation: "mr",
        gender: "m",
        language: "en",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  }
);

Cypress.Commands.add(
  "sendPrefferedProductsAPI",
  (bearerToken, prefferedProducts) => {
    cy.request({
      method: "PATCH",
      url: Cypress.env("joinUrl"),
      headers: {
        Authorization: bearerToken,
      },
      body: {
        preferred_products: prefferedProducts,
        language: "en",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  }
);

Cypress.Commands.add(
  "sendCrowdfoundingBudgetAPI",
  (bearerToken, crowdFoundingBudget) => {
    cy.request({
      method: "PATCH",
      url: Cypress.env("joinUrl"),
      headers: {
        Authorization: bearerToken,
      },
      body: {
        crowdfunding_budget: crowdFoundingBudget,
        language: "en",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  }
);

Cypress.Commands.add(
  "sendInvestmentPeriodAPI",
  (bearerToken, investmentPeriod) => {
    cy.request({
      method: "PATCH",
      url: Cypress.env("joinUrl"),
      headers: {
        Authorization: bearerToken,
      },
      body: {
        investment_period: investmentPeriod,
        language: "en",
      },
    }).then((response) => {
      cy.log("Response: " + response);
      expect(response.status).to.eq(200);
    });
  }
);

Cypress.Commands.add(
  "getVerificationPhonePinAPI",
  (bearerToken, mobileNumber, userId) => {
    cy.request({
      method: "PATCH",
      url: Cypress.env("joinUrl"),
      headers: {
        Authorization: bearerToken,
      },
      body: {
        mobile: mobileNumber,
        mobile_prefix: "+381",
        language: "en",
      },
    }).then((response) => {
      cy.enterPhoneVerificationPinAPI(
        bearerToken,
        response?.body?.verification_phone_pin,
        userId
      );
      expect(response.status).to.eq(200);
    });
  }
);

Cypress.Commands.add(
  "enterPhoneVerificationPinAPI",
  (bearerToken, pin, userId) => {
    cy.request({
      method: "POST",
      url: Cypress.env("phoneVerificationUrl"),
      headers: {
        Authorization: bearerToken,
      },
      body: {
        pin: pin,
        userId: userId,
        device_id: deviceId,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  }
);
