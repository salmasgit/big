const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://pretaa-staging.netlify.app',
      show: true,
      browser: 'chromium',
      restart: "session",
      keepBrowserState: true,
      keepCookies: true,


    }

  },
  include: {
    "I": "./steps_file.js",
    "abcPage": "./pages/abc.js",
    "loginPage": "./pages/login.js",
    "feedbackPage": "./pages/feedback.js",
    "submitPage": "./pages/submit.js",
    "dynamicPage": "./pages/dynamic.js",
    "noratingPage": "./pages/norating.js",
    "companylistPage": "./pages/companylist.js",
    "launchPage": "./pages/launch.js",
    "invalidemailPage": "./pages/invalidemail.js",
    "pwdblankPage": "./pages/pwdblank.js",
    "emailblankPage": "./pages/emailblank.js",
    "forgotpwdPage": "./pages/forgotpwd.js"
  },
  name: 'practice'
}