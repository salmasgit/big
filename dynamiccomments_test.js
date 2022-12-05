

Feature('pretaacomments_test');

Scenario('Add random comments', ({ I, dynamicPage,loginPage,feedbackPage }) => {
  I.amOnPage('/login');
  loginPage.login()
  feedbackPage.feedback()


  dynamicPage.dynamic()

})



