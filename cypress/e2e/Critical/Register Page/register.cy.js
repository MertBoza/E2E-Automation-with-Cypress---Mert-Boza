import pom from './pom'
const { faker } = require('@faker-js/faker');

describe('Register Page Test', () => {
  beforeEach(() => {
    pom.navigate()
  });

  it('should be able to register as an account using faker and log into that account without manual intervention', () => {
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const address = faker.address.streetAddress();
    const city = faker.address.cityName();
    const state = faker.address.state();
    const zip = faker.address.zipCode('#####');
    const phone = faker.phone.number('+383 4# ### ###')
    const ssn = faker.phone.number('#########')
    const username = faker.internet.userName();
    const password = faker.internet.password();


    cy.get('input#customer\\.firstName').type(firstname);
    cy.get('input#customer\\.lastName').type(lastname);
    cy.get('input#customer\\.address\\.street').type(address);
    cy.get('input#customer\\.address\\.city').type(city);
    cy.get('input#customer\\.address\\.state').type(state);
    cy.get('input#customer\\.address\\.zipCode').type(zip);
    cy.get('input#customer\\.phoneNumber').type(phone);
    cy.get('input#customer\\.ssn').type(ssn);
    cy.get('input#customer\\.username').type(username);
    cy.get('input#customer\\.password').type(password);
    cy.get('input#repeatedPassword').type(password);
    cy.get('input[type="submit"].button[value="Register"]').click();
    cy.contains('a', 'Log Out').click();
    cy.get('input[type="text"].input[name="username"]').type(username)
    cy.get('input[type="password"].input[name="password"]').type(password)
    cy.get('input[type="submit"].button').click();
  })
})