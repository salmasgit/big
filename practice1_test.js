onst { login } = require("./loginnew_test");

Feature('pretaafeedback_test');

Scenario('feedback_norating', ({ I, noratingPage,loginPage,feedbackPage }) => {
   /* I.amOnPage('https://pretaa-staging.netlify.app/login');
    I.see('Continue');
    I.fillField('[data-testid="email"]' , 'admin@itobuz.com');
    I.click('[data-testid="continue-btn"]');
    I.fillField('[data-testid="password"]' , 'password');
    //I.wait(1);
    I.see('Show Password');
    I.wait(1);
    I.click('[type="button"]');
    I.click('[data-testid="submit-btn"]');*
    I.wait(2);
    I.click('[data-testid="feedback-link"]');
    I.see('Feedback');
    I.wait(2);
    I.fillField('[data-test-id="feedback-comment"]' , 'test comment');
    I.click('[data-testid="save-btn"]');
    I.wait(2);
    I.see('Feedback value is a required field');*/
    I.amOnPage('/login');
    loginPage.login()
    feedbackPage.feedback()

    
    noratingPage.norating()

});