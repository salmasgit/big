//var faker= require ('faker')

Feature('pretaacomments_test');

Scenario('Add random comments', ({ I, dynamicPage }) => {
  /*I.amOnPage('https://pretaa-staging.netlify.app/login');
  I.see('Continue');
  I.fillField('[data-testid="email"]' , 'admin@itobuz.com');
  I.click('[data-testid="continue-btn"]');
  I.fillField('[data-testid="password"]' , 'password');
  I.see('Show Password');
  I.wait(1);
  I.click('[type="button"]');
  I.click('[data-testid="submit-btn"]');
  I.see('Events');
  I.click('[data-testid="feedback-link"]');
  I.see('Feedback');
  I.wait(2);
  I.click('[data-test-id="rating-inactive"]');
  I.wait(2);
 var  words = faker.random.words();
 console.log("output",words);
  I.fillField('[data-test-id="feedback-comment"]' , words);
  I.click('[data-testid="save-btn"]');
  I.wait(2);
  I.seeElement('[data-test-id="modal-title"]');
  I.click('[class="text-xmd text-gray-400"]');
  I.wait(2);
  I.click('[href="/logout"]');
  I.wait(2);
  I.seeElement('[src="./pretaa-logo.png"]');*/

  dynamicPage.dynamic()

});
