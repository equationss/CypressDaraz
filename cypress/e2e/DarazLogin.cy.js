//beforeEach(() => {
  //cy.visit('https://member.daraz.pk/user/login');

//})

describe('Daraz Functionallity', () => {
    it('Test 1: Login', () => {
    //it.only('Logs in successfully', () => {
    // Visit the Swag Labs website
    cy.visit('https://member.daraz.pk/user/login');

    // Enter username and password
    //cy.get('.mod-login-input-loginName > input').type('TestProject@mailinator.com');
    //cy.get('.mod-input-password > input').type('Test123');
    
    cy.login('TestProject@mailinator.com', 'Test123');

    // Click the login button
    //cy.get('.next-btn').click();

    // Verify that the login was successful
    cy.url().should('include', '/user/profile#/');
    //cy.viewport(1024, 768);

    //cy.get('#myAccountTrigger').click();
  })
})

//describe('Daraz Login Functionallity', () => {
  //it.skip('Logs in unsuccessfull', () => {
  //it('Logs in unsuccessfull', () => {  
    // Visit the Swag Labs website
    //cy.visit('https://member.daraz.pk/user/login');

    // Enter username and password
    //cy.get('.mod-login-input-loginName > input').type('Testproject@mailinator.com');
    //cy.get('.mod-input-password > input').type('test123');

    // Click the login button
    //cy.get('.next-btn').click();

    //cy.login('Testproject@mailinator.com', 'TeSt123');

    //cy.fixture('example').then(function (data){
    //this.data = data;
    //cy.login(this.data.Username, this.data.Password)

    //})



    // Verify that the login was unsuccessful
  //cy.get('YOUR_ERROR_MESSAGE_SELECTOR').should('be.visible')});
//});

//afterEach(() => {
  //cy.visit('https://member.daraz.pk/user/login');

//})

describe('Search', () => {

  before(() => {
    // Login before running the search test
    cy.visit('https://member.daraz.pk/user/login');
    // Perform login actions
        cy.login('TestProject@mailinator.com', 'Test123');

  });

  it('Test 2: Search',() =>{

    //cy.search('Table Mats');    
    //cy.get('.lzd-logo-content > a > img').click();
    cy.visit('https://www.daraz.pk');
    const searchTerm = 'Table';

    cy.get('#q').clear().type(searchTerm);
    cy.get('.search-box__button--1oH7').click();

    //Assertion
    //cy.contains('Search results for').should('be.visible');
    cy.get('[data-item-id="376875863"] > .box--pRqdD > .inner--SODwy').should('be.visible');
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the uncaught exception here
    console.error('Uncaught exception:', err);
    // Return false to prevent Cypress from failing the test
    return false;
  });
  
  });

  describe('Add New Address', () => {

    before(() => {
      // Login before running the search test
      cy.visit('https://member.daraz.pk/user/login');
      // Perform login actions
          cy.login('TestProject@mailinator.com', 'Test123');
  
    });
  
    it('Test 3: New Address',() =>{
      cy.viewport(1280, 720);
      cy.get('#Address-book > a').click();
      cy.get('.mod-address-book-ft-content', {force: true}).click();

      //Form fill
      cy.get('.mod-input-name > input').type('Raja Junaid Ullah Khan');
      cy.get('.mod-input-detailAddress > input').type('Summan Burj');
      cy.get('.mod-input-phone > input').type('03113117444');
      cy.get('.mod-input-extendAddress > input').type('Logic School');
      cy.get('.mod-select-location-tree-1 > .next-select > .next-select-inner').click();
      cy.get('#R357988').click();
      //cy.get('.mod-select-location-tree-1 > .next-select > .next-select-inner', { timeout: 10000 }).contains('Punjab').click({ force: true });
      cy.get('.mod-address-tag-home').click();
      cy.get('.mod-select-location-tree-2 > .next-select > .next-select-inner').click();
      cy.get('#R80302463').click();
      cy.get(':nth-child(1) > label > .next-checkbox-label').click();
      cy.get('.mod-select-location-tree-3 > .next-select > .next-select-inner').click();
      cy.get('#R80303515').click();
      cy.get('.mod-address-form-action > .next-btn').click();

      //Assertion
      cy.get(':nth-child(1) > .mod-address-book-card-tags > .mod-address-book-card-tag-default').should('be.visible');

    });
    });
