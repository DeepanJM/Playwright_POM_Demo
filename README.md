# Playwright POM Demo Project

## Overview
This project demonstrates the implementation of the Page Object Model (POM) pattern using Playwright for test automation.

## Project Structure
```
Playwright_POM_Demo/
├── pages/
│   └── login.js         # Login page object
└── tests/
    └── demo/
        └── login.spec.js # Login test implementation
```

## Key Features
- Implementation of Page Object Model (POM)
- Login functionality testing
- Clean and maintainable test structure

## Test Implementation
The project includes a login test that demonstrates:
- POM pattern usage
- Page object encapsulation
- Reusable login functionality

### Example Usage
```javascript
const loginPage = new LoginPage(page);
await loginPage.gotoLoginPage();
await loginPage.loginInfo('username', 'password');
```

## Getting Started
1. Install dependencies:
```bash
npm init -y
```
2. Install playwright:
```bash
npm init playwright@latest
```

3. Run tests:
```bash
npx playwright test
OR
npx playwright test tests/demo/login.spec.js --project chromium --headed
```
4. Record tests:
```bash
npx playwright codegen
```

## Best Practices
- Separation of concerns using POM
- Encapsulated page objects
- Maintainable test

## Target Application
Tests are designed for the demo site: https://the-internet.herokuapp.com/login