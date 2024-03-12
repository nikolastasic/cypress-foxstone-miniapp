
# cypress-foxstone-miniapp

A brief description of what this project does and who it's for.


## Briefly overview

This mini-application is used to test the "Signup" and "Login" process on the "Foxstone" test environment.

The tests were written mainly in javascript using the cypress framework.
## Run Locally

In order for the project to run locally, it is necessary to have node.js version **18** or higher, as well as npm version **10** or higher (In my case, the following versions are:
 node.js version **20.11.1**, npm version **10.2.4**)

Clone the project

```bash
  git clone https://github.com/nikolastasic/cypress-foxstone-miniapp.git
```

Go to the project directory

```bash
  cd <my_project_directory>
```

Install dependencies

```bash
  npm install
```

Open Cypress Dev tool (And run tests with UI)

```bash
  npx cypress open
```

Run single test

```bash
  npx cypress run --spec <name_of_test_to_be_executed>
```

Run single test (Headless mode)

```bash
  npx cypress run –headless –spec <name_of_test_to_be_executed>
```

Run single test (Specify browser)
Google Chrome: **chrome**, Mozilla Firefox: **firefox**, Microsoft Edge: **edge**

```bash
  cypress run --browser <browser_name>
```






## Run tests with Github Actions

Tests can be run with [Github Actions](https://github.com/nikolastasic/cypress-foxstone-miniapp/actions), and a link to "Cypress Cloud" with a more detailed report will be generated in the Summary tab. Also with every run videos will be uploaded on the same tab, and screenshots will be provided only for tests that are failed.


## Test reporting

This site was built using [View run in Cypress Cloud](https://cloud.cypress.io/projects/rnzhqd/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222023-03-13%22%2C%22endDate%22%3A%222024-03-12%22%7D).
## Badges

[![cypress-foxstone-miniapp](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/rnzhqd/master&style=flat&logo=cypress)](https://cloud.cypress.io/projects/rnzhqd/runs)

