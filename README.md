<h1 align="center">AQA-diploma project</h1>
Test framework includes unit, API and UI (e2e) tests.

# Frameworks:
Unit tests - Jest | API tests - Jest + Axios | E2E tests - Cypress<br>

# Project Structure:
All tests are placed in separate branches.<br>

# Unit tests:

```
 ├── data/                                                          
     └── constants/         
 ├── src/                  
     └── registrationForm.ts                                              
 ├── test/                                                          
     └── registrationForm.unit.test.ts
 ├── .gitignore
 ├── jest.config.ts
 ├── package.json
 ├── tsconfig.json
```
# API tests:

```
 ├── api/                                    
     └── endpoint/                             
     └── api.ts
 ├── data/                  
     └── models/                                               
     └── testData/
 ├── test/                  
     └── api.test.ts
 ├── utils/
 ├── .gitignore
 ├── jest.config.ts
 ├── package.json
 ├── tsconfig.json                  
```
# UI tests 
```
 ├── cypress/
     ├── data/
         └── enums/
     ├── downloads/
     ├── e2e/
         └── tests/
             └── onliner.cy.ts
     ├── helpers/
     ├── pages/
         └── frames/
     ├── support/
 ├── .gitignore
 ├── cypress.config.ts
 ├── package.json
 ├── tsconfig.json                                     

```
The following folders/files were added to the `.gitignore` file: `node_modules/` and `package-lock.json`.<br>

# Commands:
Run Unit tests `npx jest`<br>
Run API tests `npm run`<br>
Run UI tests `npx cypress open`
