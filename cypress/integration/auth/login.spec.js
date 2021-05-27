/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Login', () => {
  beforeEach(() => {
    // cy.viewport('iphone-10');
    cy.visit('http://localhost:3000/auth/login');
  });

  it('login with username and password', () => {
    cy.loginUser({ username: 'perminder.klair@gmail.com', password: '123456' });

    cy.url().should('include', '/auth/account');
  });

  it('login with incorrect username and password', () => {
    cy.loginUser({ username: 'perminder.klair@gmail.com', password: '111111' });

    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
