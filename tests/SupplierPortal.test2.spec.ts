import { test, expect, chromium } from '@playwright/test';
import { devices } from '@playwright/test';

test.use(devices['Desktop Chrome']);

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('Test to Check Login', async ({ page }) => {

  // Accessing the Endpoint for HT Application
  await page.goto('https://qa-supplier.healthtrustpg.com/');

  // Clicking on the Sign-In button 
  await page.getByRole('button', { name: 'Sign In' }).click();

  // Using Username & Password to Login 
  await page.locator('#identifierInput').click();
  await page.locator('#identifierInput').fill('valify-supplier@mailinator.com');
  await page.getByText('Next').click();
  await page.locator('#UserName').click();
  await page.locator('#UserName').fill('valify-supplier@mailinator.com');
  await page.locator('#Password').click();
  await page.locator('#Password').click({
    modifiers: ['Control']
  });
  await page.locator('#Password').fill('P@ssw0rd');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'Contacts' }).click();
})