import loginPage  from "../practicets/pages/login";
import companylistPage from "../practicets/pages/companylist";


Feature('pretaacomments_test');

Scenario('Select random company', ({I}) => {
  I.amOnPage('/login');
  loginPage.login()
  I.see('Companies');
 // I.click('[data-test-id="navLink-el"]:nth-child(3)');
  //I.wait(2);
  companylistPage.companylist()
  
  





});