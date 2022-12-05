Feature('pretaacomments_test');

Scenario('Invalid email validation', ({ I, invalidemailPage}) => {


invalidemailPage.invalidemail()


}
);

Scenario('Password field blank validation', ({ I,pwdblankPage }) => {

 
  pwdblankPage.pwdblank()
  }
  );

  Scenario('Email field blank validation', ({ I, emailblankPage }) => {

    emailblankPage.emailblank()
    }
    );

    Scenario('Forgotpwd_invalid email validation', ({ I, forgotpwdPage}) => {

      forgotpwdPage.forgotpwd()
      }
      );
    
  

