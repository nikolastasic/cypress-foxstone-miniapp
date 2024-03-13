
# cypress-foxstone-miniapp ![Static Badge](https://img.shields.io/badge/cypress.io-black?style=plastic&logo=cypress&logoColor=%2369D3A7&link=https%3A%2F%2Fwww.cypress.io%2F) 



A brief description of what this project does and who it's for.


## Briefly overview

This mini-application is used to test the "Signup" and "Login" process on the "Foxstone" test environment.

The tests were written mainly in Javascript using the Cypress framework.

In order for the project to run locally, it is necessary to have  ![Static Badge](https://img.shields.io/badge/Node.js-black?style=plastic&logo=nodedotjs&logoColor=%23339933&link=https%3A%2F%2Fwww.cypress.io%2F)  version **18** or higher, as well as  ![Static Badge](https://img.shields.io/badge/npm-white?style=plastic&logo=npm&logoColor=%23CB3837&link=https%3A%2F%2Fwww.cypress.io%2F)  version **10** or higher (In my case, the following versions are:  ![Static Badge](https://img.shields.io/badge/Node.js-black?style=plastic&logo=nodedotjs&logoColor=%23339933&link=https%3A%2F%2Fwww.cypress.io%2F)  version: **20.11.1**,  ![Static Badge](https://img.shields.io/badge/npm-white?style=plastic&logo=npm&logoColor=%23CB3837&link=https%3A%2F%2Fwww.cypress.io%2F)  version: **10.2.4**)

## Run Locally  

Go to the project directory

```bash
cd <my_project_directory>
```


Clone the project

```bash
git clone https://github.com/nikolastasic/cypress-foxstone-miniapp.git
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
npx cypress run --spec <**/my-spec.cy.js>
```

Run single test (Headless mode)

```bash
npx cypress run --headless --spec <**/my-spec.cy.js>
```

Run single test (Specify browser)
Google Chrome: **chrome**, Mozilla Firefox: **firefox**, Microsoft Edge: **edge**

```bash
cypress run --browser <browser-name-or-path>
```


## Project structure

1. Test cases are stored under:
```bash
cypress/e2e/..
```

2. All necessary test data is stored under:
```bash
cypress/fixtures/..
```

3. All necessary commands are stored under:
```bash
cypress/support/commands.js
```

4. Also some important constants are stored in project root path in Config file:
```bash
cypress.config.js
```





## Run tests with Github Actions

Tests can be run with [Github Actions](https://github.com/nikolastasic/cypress-foxstone-miniapp/actions), and a link to "Cypress Cloud" with a more detailed report will be generated in the Summary tab. Also with every run videos will be uploaded on the same tab, and screenshots will be provided only for tests that are failed.


## Test reporting

View test reports in Cypress Cloud: [Cypress Cloud](https://cloud.cypress.io/projects/rnzhqd/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&tagsMatch=ANY&timeRange=%7B%22startDate%22%3A%222023-03-13%22%2C%22endDate%22%3A%222024-03-12%22%7D).
## Badges

[![cypress-foxstone-miniapp](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/detailed/rnzhqd/master&style=flat&logo=cypress)](https://cloud.cypress.io/projects/rnzhqd/runs)

