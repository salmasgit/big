Feature('pretaacomments_test');

Scenario('Select random company', async ({ I, loginPage, companylistPage,launchPage}) => {
  await loginPage.login();
  I.see('Companies');
  await companylistPage.companylist();
  await launchPage.launch();
  
});


Scenario.skip('Select random company', async({ launchPage}) => {
 
  
  await launchPage.launch();
 
});


