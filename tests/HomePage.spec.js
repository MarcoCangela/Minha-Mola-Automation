// @ts-check
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({page}) => {
  await page.goto('https://www.minhamola.com/');
  expect(await page.title()).toBe('minhamola | inicio');
});

test('Go to Ver Dicas', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
  await page.getByRole('button', { name: 'Dicas de poupança' }).click();
  expect(await page.title()).toBe('dicas de gestao | minhamola');

  //clicking the back button to go to homepage 
  await page.locator('div div div button').click();
  expect(await page.title()).toBe('minhamola | inicio');
  await page.pause();
});

test('Go to Sobre Minha Mola', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
  await page.getByRole('button', { name: 'Sobre minhamola' }).click();
  expect(await page.title()).toBe('sobre a aplicacao | minhamola');

  //clicking the back button to go to homepage 
  await page.locator('div div div button').click();
  expect(await page.title()).toBe('minhamola | inicio');
  await page.pause();
});

test('Go to Perguntas Frequentes', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
  await page.getByRole('button', { name: 'Perguntas frequentes' }).click();
  // expect(await page.title()).toBe('perguntas frequentes | minhamola');

  //clicking the back button to go to homepage 
  await page.locator('div div div button').click();
  expect(await page.title()).toBe('minhamola | inicio');
  await page.pause();
});

test('Go to Contacte-me', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
  await page.getByRole('button', { name: 'Contacte-me' }).click();
  expect(await page.title()).toBe('contacte-me | minhamola');

  //clicking the back button to go to homepage 
  await page.locator('div div div form p').click();
  expect(await page.title()).toBe('minhamola | inicio');
  await page.pause();
});

test('Login Page', async ({ page }) =>  {
  await page.locator('text=entrar').nth(0).click();
  await page.locator('#phoneOrEmail').fill('877484869');
  await page.locator('#password').fill('Sixsix123');
  await page.locator('div div form button').click();
  await page.waitForLoadState('networkidle')
  expect(await page.getByText('Minhas Contas')).toBeVisible();
  await page.pause();
});

test('Getting Page properties', async ({page}) => {
    console.log("page title is: "+await page.title());
    console.log("page url is "+await page.url());
    await page.close();
});

