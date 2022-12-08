
import invalidemailPage  from "../practicets/pages/invalidemail";
import pwdblankPage from "../practicets/pages/pwdblank";
import emailblankPage from "../practicets/pages/emailblank";
import forgotpwdPage from "../practicets/pages/forgotpwd";


Feature('pretaacomments_test');

Scenario('Invalid email validation', ({I}) => {


invalidemailPage.invalidemail()


}
);

Scenario('Password field blank validation', ({I}) => {

 
  pwdblankPage.pwdblank()
  }
  );

  Scenario('Email field blank validation', ({I}) => {

    emailblankPage.emailblank()
    }
    );

    Scenario('Forgotpwd_invalid email validation', ({I}) => {

      forgotpwdPage.forgotpwd()
      }
      );
    
  
