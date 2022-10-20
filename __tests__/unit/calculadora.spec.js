// Bibliotecas
// Apontamento para o arquivo de desenvolvimento que vamos testar
const calculadora = require("../../src/calculadora");

// Apontamento para o arquivo de massa de teste
const arquivoCsv = require("../../vendors/csv/massaDivisao.csv");

// Funções de teste de unidade
test("Somar 5 + 7", () => {
    // 1 - Configura
    // 1.1 Dados de Entrada
    const num1 = 5;
    const num2 = 7;

    // 1.2 Resultado Esperado
    const resultadoEsperado = 12;

    // 1.3 Configura a função que será testada
    // criando um objeto para receber a função da calculadora
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    // executando a função somar dois numeros e guardando resultado
    //const resultadoAtual = somarDoisNumeros(num1, num2);

    // 3 - Valida
    expect(somarDoisNumeros(num1, num2)).toBe(resultadoEsperado);
}) 

test("Subtrair 15 - 7", () => {
    // 1 - Configura / Arrange
    // Entradas
    const num1 = 15;
    const num2 = 7;
    // Saidas
    resultadoEsperado = 8;

    // 2 - Executa / Act
    const subtrairDoisNumeros = calculadora.subtrairDoisNumeros;
    const resultadoAtual = subtrairDoisNumeros(num1, num2);

    // 3 - Valida / Assert
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test("Multiplicar 3 * 7", () => {
    // Configura
    const num1 = 3;
    const num2 = 7;
    const resultadoEsperado = 21;

    // Executa
    const multiplicarDoisNumeros = calculadora.multiplicarDoisNumeros;
    const resultadoAtual = multiplicarDoisNumeros(num1, num2);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);

})

test("Dividir 27 / 9", () => {
    // Configura
    const num1 = 27;
    const num2 = 9;
    const resultadoEsperado = 3;

    // Executa
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})
// HP ALM Data Driven Test
let massaDivisao = [
    [10, 5, 2],
    [15, 3, 5],
    [ 8, 4, 2],
    [ 7, 0, Infinity]
];

test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) => {
    // Configura
    // Dados de entrada e resultado esperado são providos pela lista massaDivisao

    // Executa
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

test.each(arquivoCsv.array.map(elemento => [
    elemento.num1,
    elemento.num2,
    elemento.resultadoEsperado
]))
("DDT: Dividir %f / %f", (num1, num2, resultadoEsperado) => {

    // Configura

    // Executa
    const dividirDoisNumeros = calculadora.dividirDoisNumeros;
    const resultadoAtual = dividirDoisNumeros(num1, num2);

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})