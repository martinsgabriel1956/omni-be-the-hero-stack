/// <reference types="cypress" />

describe('Test the application', () => {
  it('Try to login again', () => {
    cy.visit('http://localhost:3000');
    cy.get('input').type('2c184f59');
    cy.get('.btn').click();
  })
  it('Logout', () => {
    cy.get('#logoutBtn').click();
  })
  it('Try to login once again', () => {
    cy.visit('http://localhost:3000');
    cy.get('input').type('2c184f59');
    cy.get('.btn').click();
  })
  
  it('Create a new case', () => {
    cy.get('.btn').click();
    cy.get('.back-link').click();
    cy.get('.btn').click();
    cy.get('[placeholder="Título do caso"]').type('Gato preso na arvore');
    cy.get('textarea').type('O gato foi preso na arvore e não foi encontrado');
    cy.get('[placeholder="Valor em reais"]').type(500);
    cy.get('.btn').click();
    cy.get('ul > :nth-child(1) > button > svg').click();
    cy.get('#logoutBtn').click();
  })
})