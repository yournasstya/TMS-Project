<h1 align="center">AQA-diploma project</h1>
Test framework includes unit, API, and UI (e2e) tests.

# Frameworks:
Unit tests - Jest<br>
API tests - Jest + Axios<br>
E2E tests - Cypress<br>

# Project Structure:
unit tests
```
data/                                                          
    ├── constants/         
src/                  
    ├── registrationForm.ts                                              
test/                                                          
    ├── registrationForm.unit.test.ts
```
api tests
```
api/                                    
    ├── endpoint/                             
    ├── api.ts
data/                  
    ├── models/                                               
    ├── testData/
test/                  
    ├── api.test.ts
utils/                  
```
UI tests 
```
```

# Commands:
Run tests `npm run`
