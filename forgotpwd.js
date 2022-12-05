const { I } = inject();

module.exports = {

  forgotpwd() {

    //I.amOnPage('/login');
    I.click('[href="/forgot_password"]');
    I.seeElement('.text-gray-150.mb-8.text-center.sub-text')
    I.fillField('[class="flex flex-col"] [name=email]', 'abc@abc')
    I.wait(2)
    I.click('[type="submit"]')
  
    I.wait(2);
    
    I.seeElement('[data-testid="error-id"]')
    
    I.wait(2)


  }

  // insert your locators and methods here
}
