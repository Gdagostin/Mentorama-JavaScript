/// <reference types="cypress"/>

describe('Testando minha LP', () => {
    beforeEach(() => {
        cy.visit('https://api.new.mentorama.com.br/storage/media-files/QA1/M1/tarefa_1.html')
    })

    it('Preencho meu nome', () => {
        cy.get('input[name="name"]').type('Gustavo');
    })

    it('Preencho meu email', () => {
        cy.get('input[name="email"]').type('gustavodagostin752@hotmail.com');
    })

    it('Preencho meu telefone', () => {
        cy.get('input[name="phone"]').type('(11)31108-1551');
    })

    it('Clico no botão Enviar', () => {
        cy.get('button').click();
    })
})  
