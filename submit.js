const { I } = inject();

module.exports = {

  submit() {


    /*I.see('Events');
    I.click('[data-testid="feedback-link"]');
    I.wait(1);
    I.see('Feedback');
    I.wait(2);*/
    let x = Math.floor((Math.random() * 5) + 1);
    console.log('value',x);
    I.click(`[data-test-id="star-rating"] [data-test-id="rating-inactive"]:nth-child(${x})`);
    I.wait(2);
    I.fillField('[data-test-id="feedback-comment"]' , 'test comment');
    I.click('[data-testid="save-btn"]');''
    I.wait(2);
    I.seeElement('[data-test-id="modal-title"]');
    I.click('[class="text-xmd text-gray-400"]');
    I.wait(2);
    I.see('Events');
    I.click('[href="/logout"]');
    I.seeElement('[src="./pretaa-logo.png"]');
  }
  };







  // insert your locators and methods here

