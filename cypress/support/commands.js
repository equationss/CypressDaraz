// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (Username, Password) => {

    cy.get('.mod-login-input-loginName > input').type(Username);
    cy.get('.mod-input-password > input').type(Password);
    cy.get('.next-btn').click();

});

Cypress.Commands.add('search' , (Search) =>{

    cy.get('.lzd-logo-content > a > img').click();
    cy.get('#q').type(Search);
    cy.get('.search-box__button--1oH7').click();


});