import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login.js';

test('test', async ({ page }) => {

  // This test case demonstrates how to use the LoginPage class to perform a login action
  // It first navigates to the login page and then fills in the username and password fields
  // Finally, it clicks the login button to submit the form
  // The LoginPage class encapsulates the functionality of the login page, making it reusable and maintainable
  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.loginInfo('tomsmith', 'SuperSecretPassword!');


  /*
  This is a simple way of implementing the login functionality
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  */
});