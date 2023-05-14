// @ts-check
const { defineConfig, devices } = require('@playwright/test');


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for */
  timeout: 30 * 1000,
  expect:{

    timeout: 5000

  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : true,
    screenshot : 'on',
    trace: 'on'//off, on , reatain-on-failure

  },
  
};
module.exports = config;
