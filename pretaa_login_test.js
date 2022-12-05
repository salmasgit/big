Feature('PretaaLogin_test');

Scenario('Login_test', ({ I }) => {
    I.amOnPage('https://pretaa-staging.netlify.app/login');
    I.see('pretaa');
    I.fillField('[name="email"]' , 'admin@itobuz.com');
    I.click('[type="submit"]');
    I.fillField('[type="submit"]' , 'password');
    I.see('Show Password');
    I.wait(1);
    I.click('[type="submit"]');
    I.click('[data-testid="submit-btn"]');
    I.see('Events');
    I.click('[data-testid="feedback-link"]');
    I.see('Feedback');
    I.wait(2);
});
