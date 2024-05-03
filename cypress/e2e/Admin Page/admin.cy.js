import pom from './pom'

describe('Admin Page Test', () => {
  beforeEach(() => {
    pom.navigate()
  });

  it('should click in a button, select one of the radio buttons, choose an option from dropdown and click on submit button', () => {
    cy.contains('button','INIT').click();
    cy.get('input#accessMode1').click();
    cy.get('select#loanProvider').select('ws');
    cy.get('#adminForm > .button').click();
  })
})