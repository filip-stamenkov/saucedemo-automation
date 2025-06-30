# Automation excercise on a Sauce Labs demo site

This repo contains certain test cases performed against the https://saucedemo.com website.

# **Current supported test cases:**

1. Login as standard user : Confirm login and check the URL
2. Login as standard user : Add item to cart, verify quantity, check remove button
visibility
3. Login as problem user : Check that the onesie image is shown as the source for
the onesie (this test should fail since the correct image isn't shown)
4. Login with locked user : Login with this user and confirm error is displayed
5. Login with error user : Add fleece jacked to cart and confirm (this should fail)

# Installation
You need to have Node.js installed before using Cypress.

For rest of the installations move to project folder in command prompt and type

```
npm install
```

which will install Cypress and other supporting tools
# Running the tests
```
npx cypress run --spec "cypress/e2e/*.cy.js"
```
# Github actions integration
Under the Actions tab of the repo there's a pipeline setup which triggers on code changes being pushed on any branch, for now.
