import loginPage  from "../practicets/pages/login";

import feedbackPage from "../practicets/pages/feedback";
import dynamicPage from "../practicets/pages/dynamic";


Feature('pretaacomments_test');

Scenario('Add random comments', ({I}) => {
  I.amOnPage('/login');
  loginPage.login()
  feedbackPage.feedback()


  dynamicPage.dynamic()

})



