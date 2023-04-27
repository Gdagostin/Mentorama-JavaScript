/// <reference types="cypress"/>

describe('tarefa 2 Mentorama', () => {
    beforeEach(() => {
        cy.visit('https://api.new.mentorama.com.br/storage/media-files/QA1/M4/tarefa_1.html')
    })

    it('Preencho meu nome', () => {
        cy.get('input[name="name"]').type('Gustavo Dagostin');
    })

    it('Preencho minha altura', () => {
        cy.get('input[name="height"]').type('175');
    })

    it('Preencho meu peso', () => {
        cy.get('input[name="weight"]').type('76');
    })

    it('Clico no botão Calcular', () => {
        cy.get('button').click();
    })

    it('Preencho meu nome, altura e peso e calculo', () => {
        cy.get('input[name="name"]').type('Gustavo Dagostin');
        cy.get('input[name="height"]').type('175');
        cy.get('input[name="weight"]').type('76');
        cy.get('button').click();
    })
})  