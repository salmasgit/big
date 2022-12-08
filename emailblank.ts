const { I } = inject();

export = {

  emailblank () {
    I.refreshPage('/login')
    //I.amOnPage('/login')
    I.click('[data-testid="continue-btn"]');
    I.wait(2);
    I.seeElement('[data-testid="email-error"]')
    I.wait(2)


  }
  // insert your locators and methods here
}
