/// <reference types="cypress" />

describe('Testing Application', () => {
  it('Try to login', () => {
    cy.visit('http://localhost:3000');
    cy.get('.btn').click();
    cy.get('input').type('4571fds');
    cy.get('.btn').click();
  })
  it('Registration', () => {
    cy.get('.back-link').click();
    cy.get('.back-link').click();
    cy.get('.back-link').click();
    cy.get('[placeholder="Nome da ONG"]').type('Omni');
    cy.get('[type="email"]').type('omni@adm.com');
    cy.get('[placeholder="Whatsapp"]').type('21999888776');
    cy.get('[placeholder="Cidade"]').type('São Paulo');
    cy.get('[placeholder="UF"]').type('SP');
    cy.get('.btn').click();
  })
  
})