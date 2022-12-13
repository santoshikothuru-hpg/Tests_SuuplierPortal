import { test, expect, Page } from '@playwright/test';
test.describe('SP Login Test', () => 
{

    test.beforeEach(async ({ page }) => 
    {
    
    });
    
   test('Verify Signin Page', async ({  browser}) => 
    {
        const context= await browser.newContext({
            httpCredentials:{
               username: "hcaqa\mto6286",
               password: "Newlook@66"
                           }   
                          
            })
            await context.tracing.start({
                screenshots:true,
                snapshots:true
            })
            const page=await context.newPage();

    await page.goto('https://dev-supplier.healthtrustpg.com/');
    await page.waitForSelector('text=Sign In',{state:'visible'});
    await expect(page.locator('#sign-in-btn')).toContainText('Sign In');
    await page.locator('text=Sign In').first().click();
    await page.waitForSelector('#identifierInput')
    await page.locator('#identifierInput').type('santoshi.kothuru@healthtrustpg.com');
    await page.screenshot({ path: 'screenshot1.png', fullPage: true });
    await page.locator('#postButton').click();
    //page.waitForNavigation();
    await page.goto('https://qa-login.healthtrustpg.com/idp/sso');
    await expect(page.locator('#browse-link')).toContainText('Browse All Resources');

    await context.tracing.stop({
        path:"trace.zip"
    })
    });
    
  
    });

    



