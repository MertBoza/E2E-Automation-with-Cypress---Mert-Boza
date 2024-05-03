import pom from './pom'

describe('Services Page Test', () => {
  beforeEach(() => {
    pom.navigate()
  });
  it('should get the number of table rows and log the number', () => {
    cy.get('table > tbody > tr').its('length').then((rowCount) => {
        cy.log(`The page has ${rowCount} rows`);
      });
  })
})