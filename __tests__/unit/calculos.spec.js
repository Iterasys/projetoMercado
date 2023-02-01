// Apontamento da função alvo do teste
const calculos = require("../../src/calculos")

// Função para realizar o teste de unidade
test("Somar 5 + 7", () => {
    // Configura
    // Dados de Entrada
    const numA = 5;
    const numB = 7;

    // Dado de Saida
    const resultadoEsperado = 12;

    // Executa / Valida
    // criando um elemento para realiza a execução do teste
    const somarDoisNumeros = calculos.somarDoisNumeros
    expect(somarDoisNumeros(numA, numB)).toBe(resultadoEsperado)
})