# AdvancePlaywrightFramework2x

A scalable Playwright test automation framework built with TypeScript, designed for UI and API testing with a structured page object model, reusable utilities, environment configuration, and Allure reporting.

## Project Overview

This project is set up to support:

- Playwright end-to-end UI automation
- API test organization
- Reusable page objects and helpers
- Test data management
- Environment-based configuration
- Allure reporting integration
- TypeScript-based test implementation

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Allure Playwright
- dotenv
- Faker
- Excel/CSV processing utilities

## Project Structure

```text
AdvancePlaywrightFramework2x/
├── .github/
├── .env
├── .env.example
├── .gitignore
├── allure-report/
├── allure-results/
├── docs/
├── node_modules/
├── reports/
├── rules/
├── src/
│   ├── api/
│   ├── config/
│   ├── fixtures/
│   ├── helpers/
│   ├── pages/
│   ├── test-data/
│   └── utils/
├── tests/
│   ├── api/
│   └── ui/
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── yes/
```

## Prerequisites

Before running the tests, make sure you have:

- Node.js 18 or above
- npm
- Playwright browsers installed

## Installation

```bash
npm install
npx playwright install
```

## Environment Configuration

Create your local environment file from the example:

```bash
copy .env.example .env
```

Example contents:

```env
BASE_URL=https://example.com
API_BASE_URL=https://reqres.in/api
BROWSER=chromium
HEADLESS=true
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

Run in headed mode:

```bash
npx playwright test --headed
```

Generate HTML report:

```bash
npx playwright show-report
```

## Allure Reporting

Generate Allure results:

```bash
npx playwright test --reporter=line,allure-playwright
```

Generate HTML report from generated result files:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## Useful Commands

```bash
npx playwright test --list
npx playwright test --project=chromium
npx playwright test --ui
```

## Git Workflow

Initialize git repository (if not already initialized):

```bash
git init
git branch -M main
git add .
git commit -m "Initial project setup"
```

Add remote repository:

```bash
git remote add origin https://github.com/<your-username>/AdvancePlaywrightFramework2x.git
```

Push to GitHub:

```bash
git push -u origin main
```

## Commit Guidelines

Use meaningful commit messages such as:

```bash
git add .
git commit -m "Add Playwright framework setup"
git commit -m "Add login page object and base test setup"
git commit -m "Integrate Allure reporting"
```

## Notes

- Keep the framework modular and maintainable.
- Store test data in the test-data folder.
- Keep custom helper methods in the helpers folder.
- Use page objects for UI logic to improve reusability.
- Store environment values in .env and keep secrets out of version control.

## Author

AdvancePlaywrightFramework2x
