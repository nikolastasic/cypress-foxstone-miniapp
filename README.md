# cypress-foxstone-miniapp  [![cypress-foxstone-miniapp](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/rnzhqd/master&style=flat&logo=cypress)](https://cloud.cypress.io/projects/rnzhqd/runs)


This mini-application is used to test the "Signup" and "Login" process on the "Foxstone" test environment.

The tests were written mainly in javascript using the cypress framework.

In order for the project to run locally, it is necessary to have node.js version 18 or higher, as well as npm version 10 or higher (In my case, the following versions are: node.js version 20.11.1, npm version 10.2.4) .
After cloning the project, it is necessary to run a command "npm install" in order to install all the necessary "dependencies" from package.json file.

Tests can be run via Github Actions, and a link to "Cypress Cloud" with a more detailed report will be generated in the Summary tab.

Command for running seperate tests is: npx cypress run --record --spec "cypress/e2e/my-spec.cy.js" (Instead of "my-spec" you can type a name of the existing test file from this project)
