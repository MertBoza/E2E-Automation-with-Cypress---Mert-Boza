import pom from './pom'

describe('About Us Page Test', () => {
  beforeEach(() => {
    pom.navigate()
  });

  it('should load the page and display text', () => {
    cy.get('h1.title').should('be.visible');
    cy.get('p').should('be.visible');
    cy.get('a').should('be.visible');
  })
})