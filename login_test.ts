
import login  from "../practicets/pages/login";
import feedbackPage from "../practicets/pages/feedback";
import submitPage from "../practicets/pages/submit";

Feature('pretaafeedback_test');




Scenario('login_check', ({ I }) => {

    I.amOnPage('/login');
    login.login()
    
  });

Scenario('go to feedback', ({I}) => {
   
    feedbackPage.feedback()

});
  

    Scenario('submit feedback', ({ I}) => {
    
    
      submitPage.submit()


    });

