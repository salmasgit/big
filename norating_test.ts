

import noratingPage  from "../practicets/pages/norating";
import loginPage from "../practicets/pages/login";
import feedbackPage from "../practicets/pages/feedback";
import forgotpwdPage from "../practicets/pages/forgotpwd";


Feature('pretaafeedback_test');

Scenario('feedback_norating', ({I}) => {
   
    I.amOnPage('/login');
    loginPage.login()
    feedbackPage.feedback()

    
    noratingPage.norating()

});

