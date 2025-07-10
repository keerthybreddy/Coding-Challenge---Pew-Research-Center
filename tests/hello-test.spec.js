// Playwright test to check if the page is displaying the correct HTML

const { test, expect } = require('@playwright/test');

// This test uses an asynchronous function to navigate to the local environment URL and checks whether the page displays the text "Hello World" using h1 tags
test('display Hello World', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toHaveText('Hello World');
});
