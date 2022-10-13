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

    // 2 - Executa
    // criando um objeto para receber a função da calculadora
    const somarDoisNumeros = calculadora.somarDoisNumeros;
    // executando a função somar dois numeros e guardando resultado
    //const resultadoAtual = somarDoisNumeros(num1, num2);

    // 3 - Valida
    expect(somarDoisNumeros(num1, num2)).toBe(resultadoEsperado);
}) 