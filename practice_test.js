Feature('pretaafeedback_test');




Scenario('login_check', ({ I ,loginPage}) => {

    I.amOnPage('/login');
    loginPage.login()
    
  });

Scenario('go to feedback', ({ I, feedbackPage}) => {
   //I.amOnPage('https://pretaa-staging.netlify.app/login');
    // I.see('Continue');
    // I.fillField('[data-testid="email"]' , 'admin@itobuz.com');
    // I.click('[data-testid="continue-btn"]');
    // I.fillField('[data-testid="password"]' , 'password');
    // //I.wait(1);
    // I.see('Show Password');
    // I.wait(1);
    // I.click('[type="button"]');
    // I.click('[data-testid="submit-btn"]');
    
    //I.amOnPage('https://pretaa-staging.netlify.app/events');
    /*I.see('Events');
    I.click('[data-testid="feedback-link"]');
    I.see('Feedback');
    I.wait(1);*/
    feedbackPage.feedback()

});
  

    Scenario('submit feedback', ({ I, submitPage}) => {
    
    //I.amOnPage('https://pretaa-staging.netlify.app/events');
      /*I.see('Continue');
      I.fillField('[data-testid="email"]' , 'admin@itobuz.com');
      I.click('[data-testid="continue-btn"]');
      I.fillField('[data-testid="password"]' , 'password');
      //I.wait(1);
      I.see('Show Password');
      I.wait(1);
      I.click('[type="button"]');
      I.click('[data-testid="submit-btn"]');*/
      /*I.see('Events');
      I.click('[data-testid="feedback-link"]');
      I.wait(1);
      I.see('Feedback');
      I.wait(2);
      let x = Math.floor((Math.random() * 5) + 1);
      console.log('value',x)
      I.click(`[data-test-id="star-rating"] [data-test-id="rating-inactive"]:nth-child(${x})`);
      I.wait(2);
      I.fillField('[data-test-id="feedback-comment"]' , 'test comment');
      I.click('[data-testid="save-btn"]');''
      I.wait(2);
      I.seeElement('[data-test-id="modal-title"]');
      I.click('[class="text-xmd text-gray-400"]');
      I.wait(2);
      I.see('Events');
      I.click('[href="/logout"]');
      I.wait();
      I.seeElement('[src="./pretaa-logo.png"]');*/

      submitPage.submit()


    });






