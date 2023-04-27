Feature: Landing page

    Feature responsável pela validação do formulário da captação de leads.

    Background:
        Given Que já acessei minha LP
    Scenario: Sucesso
        And Preenchi a data
        And Preenchi a pontuação
        And Preenchi sua opinião
        When Clico no botão 'Enviar'
        Then As informações devem ser enviadas