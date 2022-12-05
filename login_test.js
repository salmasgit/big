Feature('pretaafeedback_test');




Scenario('login_check', ({ I ,loginPage}) => {

    I.amOnPage('/login');
    loginPage.login()
    
  });

Scenario('go to feedback', ({ I, feedbackPage}) => {
   
    feedbackPage.feedback()

});
  

    Scenario('submit feedback', ({ I, submitPage}) => {
    
    
      submitPage.submit()


    });





