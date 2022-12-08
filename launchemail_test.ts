import loginPage  from "../practicets/pages/login";

import companylistPage from "../practicets/pages/companylist";
import launchPage from "../practicets/pages/launch";




Feature('pretaacomments_test');

Scenario('Select random company', async ({I}) => {
  await loginPage.login();
  I.see('Companies');
  await companylistPage.companylist();
  await launchPage.launch();
  
});


/*Scenario.skip('Select random company', async({ launchPage}) => {
 
  
  await launchPage.launch();
 
});*/

