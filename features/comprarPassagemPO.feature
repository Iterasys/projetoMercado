Feature: Comprar Passagens Aereas
    Por favor, carregar os dados no ambiente
    Scenario: Selecionar Origem e Destino do Voo
        Given acesso o site BlazeDemo
        When seleciono origem como "São Paolo" e destino como "Cairo"
        Then exibe o titulo da guia como "BlazeDemo - reserve"