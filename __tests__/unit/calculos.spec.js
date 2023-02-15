// Apontamento da função alvo do teste
const calculos = require("../../src/calculos")

// Apontamento para a massa de teste da Divisão
const arquivoJson = require("../../vendors/json/massaTesteDivisao")

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

test('Dividir 8 / 2', () => {
    // Configura
    // Dados de Entrada
    const numA = 8;
    const numB = 2;

    // Dados de Saída
    const resultadoEsperado = 4;

    // Executa
    const dividirDoisNumeros = calculos.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(numA, numB);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)

})

let massaDivisao = [
    [8, 4, 2],
    [7, 0, Infinity],
    [-9, 3, -3],
    [5, 4, 1.25]
]

test.each(massaDivisao)('Lista - Dividir %f / %f', (numA, numB, resultadoEsperado) => {
    // Configura
    // Dados de entrada e saída agora vem da lista massaDivisao

    // Executa
    const dividirDoisNumeros = calculos.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(numA, numB);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)

})

test.each(arquivoJson.array.map(elemento => [
    elemento.numA,
    elemento.numB,
    elemento.resultadoEsperado
]))

('JSON - Dividir %f / %f', (numA, numB, resultadoEsperado) => {
    // Configura
    // Dados de entrada e saída agora vem da lista massaDivisao

    // Executa
    const dividirDoisNumeros = calculos.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(numA, numB);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)

})