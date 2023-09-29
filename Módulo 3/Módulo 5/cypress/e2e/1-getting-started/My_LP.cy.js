/// <reference types="cypress"/>

describe('CN0003 - Botão Entrar com dados válidos', () => {
    beforeEach(() => {
        cy.visit('https://shop.lm.mentorama.com.br/?page_id=18')
    })

    it('Preencho usuario e senha e clico em acessar', () => {
        cy.get('input[name="username"]').type('gustavodagostin752@hotmail.com', {force: true});
        cy.get('input[name="password"]').type('teste');
        cy.get('button[name="login"]').click();
    })
})

describe('CN0004 - Botão Entrar sem dados', () => {
    beforeEach(() => {
        cy.visit('https://shop.lm.mentorama.com.br/?page_id=18')
    })

    it('Preencho usuario e senha e clico em acessar', () => {
        cy.get('button[name="login"]').click();
    })
})