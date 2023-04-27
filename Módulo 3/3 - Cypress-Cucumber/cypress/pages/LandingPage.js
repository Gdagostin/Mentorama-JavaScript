class LandingPage {
    elements = {
        dataInput: () => cy.get('input[placeholder="data"]'),
        pontuacaoInput: () => cy.get('input[placeholder="pontuação em escala de 10 pontos"]'),
        suaOpiniaoInput: () => cy.get('textarea[placeholder="Sua opinião"]'),
        sendButtonInput: () => cy.get('button'),
        informationContainer: () => cy.get('form[class*="form-inner-content-comments-list"]')
    };
}

export const landingPage = new LandingPage();