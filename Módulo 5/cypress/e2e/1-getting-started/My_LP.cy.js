/// <reference types="cypress"/>

const pageUrl = 'https://shop.lm.mentorama.com.br/';

describe('Autenticação de Usuário', () => {
    beforeEach(() => {
        cy.visit(pageUrl)
    })

    it('CN0003 - Login com Credenciais Válidas', () => {
        cy.get('.icon-text').click();
        cy.get('#username').type('gustavodagostin752@hotmail.com', {force: true});
        cy.get('#password').type('teste');
        cy.get('.woocommerce-button').click();

        cy.url().should('include', '/minha-conta');
    })

    it('CN0004 - Tentativa de Login sem Fornecer Dados', () => {
        cy.get('.icon-text').click();
        cy.get('.woocommerce-button').click();

        cy.get('.woocommerce-error').should('be.visible');
    })
})
