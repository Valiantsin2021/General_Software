# JS automation tests using WebdriverIO <a href="https://webdriver.io/" target="blank"><img align="center" src="https://cdn.icon-icons.com/icons2/3915/PNG/512/webdriverio_logo_icon_249213.png" alt="WebdriverIO" height="40" width="40" /></a>

## Author

- [@Valiantsin2021](https://www.github.com/Valiantsin2021) [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## This repository purpose is to functional test automation of [google] https://www.google.com/

## Test report page can be found on https://valiantsin2021.github.io/General_Software/

## Before the test run make sure to update local browsers versions to latest

## The test suite purpose is to perform the following assertions:

The basic steps flow to test the steps:

1. Visit https://www.google.com
2. Accept cookies modal and assert the page url and title
3. Perform search with the parametrized search string
4. Assert the number of the returned search results is not less than parametrized low search results number
5. Assert the number of the returned search results is more than parametrized low search results number
6. Report results

## Test suite

## Job done:

1.  Page Object model implemented (constants parametrized in .test//utils/constants.js)
2.  Chrome, MSEdge, Firefox tests via ENV variable (browsers capabilities are in .test//utils/browsers.js)
3.  Test suite 'google' in configuration file
4.  Allure reporter with report published on GitHub pages
5.  Screenshots with timestamp on failure (./screenshots/failed-tests)
6.  Chai expect assertion imported
7.  Test suite integration to GitHub Actions with automated tests run on push and report publishing to gh-pages
8.  Precommit hook for code linting and formatting
9.  Custom command implemented in wdio.conf.js to parse search results

## Setup:

1. Clone this repository or unzip downloaded file
2. Install dependencies with "npm install"
3. To run tests - open terminal and navigate to the path of the cloned project and:

   - choose browser and suite manually - please add ENV and run with "npx cross-env ENV=(chrome | edge | firefox) npm run test"
   - to clean reports directory and screenshots: npm run pretest
   - to open report run : allure open
   - to run headless with Chrome: npm run test
   - to run headed with Chrome: npm run test:headed
   - report is created in folder allure-report (should be opened via live server plugin in VSCode)

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://valiantsin2021.github.io/Portfolio/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/valiantsin-lutchanka/)
