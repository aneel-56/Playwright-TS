# Playwright Learning Journey

This repository is dedicated to my journey of learning Playwright, a powerful library for end-to-end testing of web applications.

## About Playwright

Playwright is an open-source framework developed by Microsoft for testing modern web applications. It supports multiple browsers like Chromium, Firefox, and WebKit, and provides features for reliable and fast browser automation.

## Prerequisites

Before you get started with Playwright, make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** or **yarn**: Comes with Node.js installation.
- A code editor like [Visual Studio Code](https://code.visualstudio.com/).

## Getting Started

1. **Initialize a new project**:

   ```bash
   mkdir playwright-learning
   cd playwright-learning
   npm init -y
   ```

2. **Install Playwright**:

   Run the following command to install Playwright:

   ```bash
   npm install playwright
   ```

3. **Run Playwright's example script**:

   After installation, you can use Playwright's example script to test your setup:

   ```bash
   npx playwright codegen
   ```

   This will open a browser window and a code generation tool. You can interact with the browser, and Playwright will generate the corresponding code.

4. **Write Your First Test**:

   Create a file named `example.spec.js` and add the following code:

   ```javascript
   const { test, expect } = require('@playwright/test');

   test('Basic test', async ({ page }) => {
     await page.goto('https://example.com');
     const title = await page.title();
     expect(title).toBe('Example Domain');
   });
   ```

   Run the test with:

   ```bash
   npx playwright test
   ```

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)
- [Playwright Videos on YouTube](https://www.youtube.com/results?search_query=playwright+testing)

## Notes

- Use `npx playwright install` to download browser binaries if needed.
- Playwright supports multiple languages like Python, C#, and Java, but this guide uses JavaScript.
- Explore Playwright's debugging tools using the `--debug` flag for tests.

## Goals

- Understand the basics of Playwright.
- Write and execute simple tests.
- Gradually move to advanced features like intercepting network requests, handling authentication, and visual testing.

## Progress Tracker

- [ ] Install Playwright.
- [ ] Run the example script.
- [ ] Write a basic test.
- [ ] Explore browser-specific settings.
- [ ] Learn about test runners and assertions.

Happy testing! 🎉
