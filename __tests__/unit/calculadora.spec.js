// Bibliotecas
// Apontamento para o arquivo de desenvolvimento que vamos testar
const calculadora = require("../../src/calculadora");

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