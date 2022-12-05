const { I } = inject();

module.exports = {
  async companylist() {
    
    I.click('[href="/companies/list"]');
    I.wait(3)
    let companyList = await I.grabTextFromAll('[data-test-id="company-row"]');
    console.log(companyList);
    let random = Math.floor(Math.random() * companyList.length);
    console.log(random)
    let x=companyList[random]
    I.fillField('[data-testid="search-input"]', x);
    I.wait(2);
    I.click(x);
     //company = Math.floor((Math.random() * 5) + 1);

    I.seeElement('[data-test-id="page-title"]');
    I.see(x);
  
}
};