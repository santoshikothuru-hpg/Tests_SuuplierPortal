import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
testDir: './tests',
timeout: 120 * 1000,
expect: {
timeout: 5000
},

reporter: 'html',
use: {
actionTimeout: 0,
ignoreHTTPSErrors: true,
trace: 'on-first-retry',
headless: false,
},

//testMatch: ["SupplierPortalOffNetwork.test.ts"],

};

export default config;