describe('Login', () => {
    it('Test 1: Login', () => {
    cy.viewport(1280, 720);
    
    // Visit the Swag Labs website
    cy.visit('https://member.daraz.pk/user/login');

    //Login
    cy.login('TestProject@mailinator.com', 'Test123');

    // Verify that the login was successful
    cy.url().should('include', '/user/profile#/');
    
  });
});

describe('Search', () => {

  before(() => {
    // Login before running the search test
    cy.visit('https://member.daraz.pk/user/login');
    // Perform login actions
    cy.login('TestProject@mailinator.com', 'Test123');

  });

  it('Test 2: Search:',() =>{
    cy.viewport(1280, 720);
    cy.visit('https://www.daraz.pk');
    const searchTerm = 'Table';

    cy.get('#q').clear().type(searchTerm);
    cy.get('.search-box__button--1oH7').click();

    //Assertion
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
  
    it('Test 3: New Address:',() =>{
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

    describe('Add Cart', () => {

      before(() => {
        // Login before running the search test
        cy.visit('https://member.daraz.pk/user/login');
        // Perform login actions
        cy.login('TestProject@mailinator.com', 'Test123');
    
      });
    
      it('Test 4: Add to Cart:',() =>{
        cy.viewport(1280, 720);

        cy.visit('https://www.daraz.pk');

        //1st Item
        cy.get('#q').clear().type('Apple');
        cy.get('.search-box__button--1oH7').click();
        cy.get('[data-item-id="401723923"] > .box--pRqdD').click();
        cy.get('.pdp-button_theme_orange').click();
        cy.get('.next-dialog-close > .next-icon').click();

        //2nd Item
        cy.get('#q').clear().type('Cat Food');
        cy.get('.search-box__button--1oH7').click();
        cy.get('[data-item-id="266742962"] > .box--pRqdD').click();
        cy.get('.pdp-button_theme_orange').click();
        cy.get('.next-dialog-close > .next-icon').click();

        //3rd Item
        cy.get('#q').clear().type('Drinks');
        cy.get('.search-box__button--1oH7').click();
        cy.get('[data-item-id="144490042"] > .box--pRqdD').click();
        cy.get('.pdp-button_theme_orange').click();
        cy.get('.next-dialog-close > .next-icon').click();


        //4th Item
        cy.get('#q').clear().type('Chips');
        cy.get('.search-box__button--1oH7').click();
        cy.get('[data-item-id="199464498"] > .box--pRqdD').click();
        cy.get('.pdp-button_theme_orange').click();
        cy.get('.next-dialog-close > .next-icon').click();

        //5th Item
        cy.get('#q').clear().type('Plants');
        cy.get('.search-box__button--1oH7').click();
        cy.get('[data-item-id="260257940"] > .box--pRqdD').click();
        cy.get('.pdp-button_theme_orange').click();
        cy.get('.next-dialog-close > .next-icon').click();


        //Assertion
        cy.get('.cart-icon').click();
        cy.get('.checkbox-wrap > .next-checkbox > input').click();
        cy.get('.summary-section-heading').should('be.visible');


      });
    });


    describe('Delete Cart', () => {

        before(() => {
          // Login before running the search test
          cy.visit('https://member.daraz.pk/user/login');

          // Perform login actions
          cy.login('TestProject@mailinator.com', 'Test123');
      
        });

      it('Test 5: Delete from Cart:',() =>{
        cy.viewport(1280, 720);
        cy.visit('https://www.daraz.pk');
        
        // Go to cart
        cy.get('.cart-icon').click();
        cy.get('.checkbox-wrap > .next-checkbox > input').click();
        cy.get('.btn-wrap > .lazada').click();
        cy.get('.ok').click();
        cy.get('.cart-empty-text').should('be.visible');
        
      });
      });

      describe('Flash Sale', () => {

        before(() => {
          // Login before running the search test
          cy.visit('https://member.daraz.pk/user/login');

          // Perform login actions
          cy.login('TestProject@mailinator.com', 'Test123');
      
        });

      it('Test 6: Flash Sale:',() =>{
        cy.viewport(1280, 720);
        cy.visit('https://www.daraz.pk');
        
        // Go to Flash Sale
        cy.get('.card-fs-content-button').click();
        cy.get('[href="//www.daraz.pk/products/rs-19-i132302691-s1456489341.html"] > .flash-unit').click();
        cy.get('.next-number-picker-handler-up-inner > .next-icon').click();
        cy.get('.next-number-picker-handler-up-inner > .next-icon').click();

        //Assertion to select max Value 3
        cy.get('.next-input > input').should('have.value', '3');
        
      });
      });


      describe('Update Password', () => {

        before(() => {
          // Login before running the search test
          cy.visit('https://member.daraz.pk/user/login');
    
          // Perform login actions
          cy.login('TestProject@mailinator.com', 'Test123');
      
        });
      
        it('Test 7: New Password:',() =>{
          cy.viewport(1280, 720);

          //Go to My Profile
          cy.get('#My-profile > a').click();

          //Change Password 
          cy.get('a.next-btn').click();

          //Change Form
          cy.get('.change-form > :nth-child(1) > input').type('Test123');
          cy.get('.mod-input-newPassword > input').type("Bootcamp@123");
          cy.get('.mod-input-re-newPassword > input').type("Bootcamp@123");
          cy.get('.next-btn').click();

          //Assertion
          const successMessage = 'Success';
          cy.get('#dialog-header-0').should('be.visible').contains(successMessage);    

        });
        });