import { test, expect, Page } from '@playwright/test';



test.describe('SP Login Testing', () => {

test.beforeEach(async ({ page }) => {
await page.goto('https://dev-supplier.healthtrustpg.com/');
});

test('Verify the Signin Page', async ({ page }) => 
{
await page.waitForSelector('text=Sign In',{state:'visible'});
await page.locator('text=Sign In').first().click();
await page.waitForSelector('#identifierInput')
await page.locator('#identifierInput').type('santoshi.kothuru@healthtrustpg.com');
await page.locator('#postButton').click();
});



test.afterEach(async ({ page }) => 
{
});

});


