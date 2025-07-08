const { test, expect } = require('@playwright/test');

test('display Hello World', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('h1')).toHaveText('Hello');
});