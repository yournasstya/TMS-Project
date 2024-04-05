<h1 align="center">AQA-diploma project</h1>
Test framework includes unit, API and UI (e2e) tests.

# Frameworks:
Unit tests - Jest<br>
API tests - Jest + Axios<br>
E2E tests - Cypress<br>

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
UI tests 
```
```
The following folders/files were added to the `.gitignore` file: `.vscode`, `node_modules/`, and `package-lock.json`.<br>

# Commands:
Run tests `npm run`
