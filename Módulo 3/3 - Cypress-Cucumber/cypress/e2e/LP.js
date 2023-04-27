import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { landingPage } from "../pages/LandingPage";

Given("Que já acessei minha LP", ()=>{
    cy.visit("https://api.new.mentorama.com.br/storage/media-files/QA1/M3/2/tarefa_2.html");
});

When("Preenchi a data", ()=>{
    landingPage.elements.dataInput().type("26/04/2023");
});

When("Preenchi a pontuação", ()=>{
    landingPage.elements.pontuacaoInput().type("9");
});

When("Preenchi sua opinião", ()=>{
    landingPage.elements.suaOpiniaoInput().type("A acedemia é muito boa!");
});

When("Clico no botão 'Enviar'", ()=>{
    landingPage.elements.sendButtonInput().click();
});

Then("As informações devem ser enviadas", ()=>{
    landingPage.elements.informationContainer().should('be.visible');
});