/* eslint-disable no-undef */
/// <reference types="cypress" />

context('Account', () => {
  beforeEach(() => {
    // cy.viewport('iphone-10');
  });

  it('user is logged in', () => {
    cy.loginUser({ username: 'perminder.klair@gmail.com', password: '123456' });
    cy.url().should('include', '/auth/account');

    cy.get('[data-cy=check-login]').should(($el) => {
      const text = $el.text();
      expect(text).to.match(/Welcome/);
    });
  });

  it('user is not logged in', () => {
    cy.visit('http://localhost:3000/auth/account');

    cy.get('[data-cy=check-login]').should(
      'have.text',
      'You are not logged in!',
    );
  });
});
