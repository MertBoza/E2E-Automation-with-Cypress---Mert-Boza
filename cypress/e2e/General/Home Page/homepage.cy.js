import pom from './pom'

describe('Home Page Test', () => {
  beforeEach(() => {
    pom.navigate()
  });

  it('all buttons except customer login buttons should be visible', () => {
    cy.get('img.logo').should('be.visible');

    cy.contains('a', 'About Us').should('be.visible');
    cy.contains('a', 'Services').should('be.visible');
    cy.contains('a', 'Products').should('be.visible');
    cy.contains('a', 'Locations').should('be.visible');
    cy.contains('a', 'Admin Page').should('be.visible');

    cy.contains('a', 'home').should('be.visible');
    cy.contains('a', 'about').should('be.visible');
    cy.contains('a', 'contact').should('be.visible');

    cy.get('li.captionone').should('be.visible');
    cy.contains('a', 'Withdraw Funds').should('be.visible');
    cy.contains('a', 'Transfer Funds').should('be.visible');
    cy.contains('a', 'Check Balances').should('be.visible');
    cy.contains('a', 'Make Deposits').should('be.visible');

    cy.get('.captiontwo').should('be.visible');
    cy.contains('a', 'Bill Pay').should('be.visible');
    cy.contains('a', 'Account History').should('be.visible');
    cy.get('.servicestwo > :nth-child(4) > a');

    cy.contains('a', 'Read More').should('be.visible');

    cy.contains('a', 'ParaBank Is Now Re-Opened').should('be.visible');
    cy.contains('a', 'New! Online Bill Pay').should('be.visible');
    cy.contains('a', 'New! Online Account Transfers').should('be.visible');

    cy.get('#rightPanel > :nth-child(7) > a').should('be.visible');
    cy.contains('a', 'www.parasoft.com').should('be.visible');
    });

    it('all text should be visible', () => {
        cy.get('li.Solutions').should('be.visible');
        cy.get('li.captionthree').should('be.visible');
        cy.get('p.caption').should('be.visible');
        cy.get('h2').should('be.visible');
        cy.get(':nth-child(1) > b').should('be.visible');
        cy.get(':nth-child(3) > b').should('be.visible');
        cy.get('p.copyright').should('be.visible');
        cy.get('.visit > :nth-child(1)').should('be.visible');
    });
})