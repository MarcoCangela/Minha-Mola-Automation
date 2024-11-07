// @ts-check
const { test, expect } = require('@playwright/test');


const url =  process.env.URL || 'https://www.minhamola.com/';
const password = process.env.PASSWORD || 'Sixsix123';
const username =  process.env.USERNAME || 877484869;
const email =  process.env.EMAIL || 'email@email.com';
const newuser =  process.env.NEWUSER || 890179912;
const newemail =  process.env.NEWEMAIL || 'newemail@email.com';
const newpass =  process.env.NEWPASSWORD || 'Password123';

test.beforeEach(async ({page}) => {
  // @ts-ignore
  await page.goto(url);
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
  await page.getByRole('button', { name: 'Contacte-me' }).click();
  expect(await page.title()).toBe('contacte-me | minhamola');

  //clicking the back button to go to homepage 
  // await page.locator('div div div form p').click();
  // expect(await page.title()).toBe('minhamola | inicio');
  await page.waitForTimeout(5000);
});

test('Login with Mobile Number', async ({ page }) =>  {
  await page.locator('text=entrar').nth(0).click();
  // @ts-ignore
  await page.locator('#phoneOrEmail').fill(username.toString());
  // @ts-ignore
  await page.locator('#password').fill(password);
  await page.locator('div div form button').click();
  await page.waitForLoadState('networkidle')
  expect(await page.getByText('Minhas Contas')).toBeVisible();
  await page.waitForTimeout(5000);
});

test('Failed Login with Mobile Number', async ({ page }) =>  {
  await page.locator('text=entrar').nth(0).click();
  // @ts-ignore
  await page.locator('#phoneOrEmail').fill('821231231');
  // @ts-ignore
  await page.locator('#password').fill('PindePass');
  await page.locator('div div form button').click();
  await page.waitForLoadState('networkidle');

  //error message that ensures that the number is a an invalid number
  await page.isVisible('text=Este numero de celular não possui nenhuma conta.');
  await page.waitForTimeout(5000);
});

test('Login with Email', async ({ page }) =>  {
  await page.locator('text=entrar').nth(0).click();
  await page.locator('#email').click();
    // @ts-ignore
  await page.locator('.email-input').fill(email);
  // @ts-ignore
  await page.locator('#password').fill(password);
  await page.locator('div div form button').click();
  await page.waitForLoadState('networkidle')
  expect(await page.getByText('Minhas Contas')).toBeVisible();
  await page.waitForTimeout(5000);
});

test('Failed Login with Email', async ({ page }) =>  {
  await page.locator('text=entrar').nth(0).click();
  await page.locator('#email').click();
    // @ts-ignore
  await page.locator('.email-input').fill('randomfalse@email.com');
  // @ts-ignore
  await page.locator('#password').fill('WrongPass1231');
  await page.locator('div div form button').click();
  await page.waitForLoadState('networkidle');

//error message that ensures that the email is an invalid email
  await page.isVisible('text=Este email não possui nenhuma conta.');
  await page.waitForTimeout(5000);
});

test('Go to Register Page', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
   await page.locator('.signup-button').click();
   await page.waitForLoadState('networkidle');
   expect(await page.title()).toBe('registar-se | minhamola');
   // @ts-ignore
   await page.locator('#phoneNumber').fill(newuser.toString());
   // @ts-ignore
   await page.locator('#email').fill(newemail);
   // @ts-ignore
   await page.locator('#password').fill(newpass);
   await page.locator('#show-password-button').check();
   await page.locator('#show-password-button').uncheck();
   await page.locator('#show-password-button').check();
   // Adding content to register to page 
   // @ts-ignore
   await page.waitForTimeout(5000);
});

test('Go to Register Page and then back to Login and Perform a Login', async ({ page }) =>  {
  await page.locator('div nav ul li svg').first().click();
  // await page.waitForSelector("ul > li [id='contacte-me']", { state: 'visible' });
   await page.locator('.signup-button').click();
   await page.waitForLoadState('networkidle');
   expect(await page.title()).toBe('registar-se | minhamola');
   // @ts-ignore
   await page.locator('#phoneNumber').fill(newuser.toString());
   // @ts-ignore
   await page.locator('#email').fill(newemail);
   // @ts-ignore
   await page.locator('#password').fill(newpass);
   await page.locator('#show-password-button').check();
   await page.locator('#show-password-button').uncheck();
   await page.locator('#show-password-button').check();
   await page.getByRole('button', { name: 'entrar' }).click();
   await page.waitForLoadState('networkidle');
   // Adding content to register to page 
    // @ts-ignore
  await page.locator('#phoneOrEmail').fill(username.toString());
  // @ts-ignore
  await page.locator('#password').fill(password);
  await page.locator('div div form button').click();
  await page.waitForLoadState('networkidle');
  // await page.getByText('Adicionar nova Conta').click();
  // await page.locator('#account-name').fill('New Account');
  // await page.getByRole("input", { name:"account-initial-balance"}).fill('1000');
   // @ts-ignore
   await page.waitForTimeout(5000);
});

test('Getting Page properties', async ({page}) => {
    console.log("page title is: "+await page.title());
    console.log("page url is "+await page.url());
    await page.waitForTimeout(5000);
  });