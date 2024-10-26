// @ts-check
const { test, expect } = require('@playwright/test');

test('Go to Webpage', async ({ page }) =>  {
  await page.goto('https://www.minhamola.com/');
  expect(await page.title()).toBe('minhamola | inicio');
});

test('Getting Page properties', async ({page}) => {
    await page.goto('https://www.minhamola.com/');
    console.log("page title is "+await page.title());
    console.log("page url is "+await page.url());
    await page.close();
});

