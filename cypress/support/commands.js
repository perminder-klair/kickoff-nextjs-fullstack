/* eslint-disable no-undef */
/// <reference types="cypress" />

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

Cypress.Commands.add('loginUser', ({ username, password }) => {
  cy.visit('http://localhost:3000/auth/login');
  cy.get('[data-cy=email]').type(username).should('have.value', username);
  cy.get('[data-cy=password]').type(password).should('have.value', password);
  cy.get('[data-cy=submit-btn]').click();
  cy.wait(2000);
});
