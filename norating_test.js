//const { login } = require("./login_test");

Feature('pretaafeedback_test');

Scenario('feedback_norating', ({ I, noratingPage,loginPage,feedbackPage }) => {
   
    I.amOnPage('/login');
    loginPage.login()
    feedbackPage.feedback()

    
    noratingPage.norating()

});

