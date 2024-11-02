// @ts-check
const { test, expect } = require('@playwright/test');



test.beforeEach(async ({page}) => {
  await page.goto(process.env.URL);
  expect(await page.title()).toBe('minhamola | inicio');
});

test('Go to Ver Dicas', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
  await page.getByRole('button', { name: 'Dicas de poupança' }).click();
  expect(await page.title()).toBe('dicas de gestao | minhamola');

  //clicking the back button to go to homepage 
  await page.locator('div div div button').click();
  expect(await page.title()).toBe('minhamola | inicio');
  await page.waitForTimeout(5000);
});

test('Go to Sobre Minha Mola', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
  await page.getByRole('button', { name: 'Sobre minhamola' }).click();
  expect(await page.title()).toBe('sobre a aplicacao | minhamola');

  //clicking the back button to go to homepage 
  await page.locator('div div div button').click();
  expect(await page.title()).toBe('minhamola | inicio');
  await page.waitForTimeout(5000);
});

test('Go to Perguntas Frequentes', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
  await page.getByRole('button', { name: 'Perguntas frequentes' }).click();
  expect(await page.title()).toBe('perguntas frequentes | minhamola');

  //clicking the back button to go to homepage 
  await page.locator('div div div button').click();
  expect(await page.title()).toBe('minhamola | inicio');
  await page.waitForTimeout(5000);
});

test('Go to Contacte-me', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
 // await page.waitForSelector("ul > li [id='contacte-me']", { state: 'visible' });
  await page.getByRole('button', { name: 'Contacte-me' }).click();
  expect(await page.title()).toBe('contacte-me | minhamola');

  //clicking the back button to go to homepage 
  // await page.locator('div div div form p').click();
  // expect(await page.title()).toBe('minhamola | inicio');
  await page.waitForTimeout(5000);
});

test('Login Page', async ({ page }) =>  {
  await page.locator('text=entrar').nth(0).click();
  await page.locator('#phoneOrEmail').fill(process.env.USERNAME);
  await page.locator('#password').fill(process.env.PASSWORD);
  await page.locator('div div form button').click();
  await page.waitForLoadState('networkidle')
  expect(await page.getByText('Minhas Contas')).toBeVisible();
  await page.waitForTimeout(5000);
});

test('Getting Page properties', async ({page}) => {
    console.log("page title is: "+await page.title());
    console.log("page url is "+await page.url());
    await page.waitForTimeout(5000);
  });

