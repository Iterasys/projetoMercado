// aponte para o arquivo de desenvolvimento que deseja testar
const areas = require("../../src/areas")

// funções de teste
test("Area do Quadrado Simples - Lado Valido", () => {
    // Configura
    const lado = 5
    const resultadoEsperado = 25

    // Executa
    let calcularAreaDoQuadrado = areas.calcularAreaDoQuadrado
    let resultadoAtual = calcularAreaDoQuadrado(lado)

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)

})

test("Area do Quadrado Simples - Lado Zero", () => {
    // Configura
    const lado = 0
    const resultadoEsperado = "Por favor, informe um tamanho de lado válido"

    // Executa
    let calcularAreaDoQuadrado = areas.calcularAreaDoQuadrado
    let resultadoAtual = calcularAreaDoQuadrado(lado)

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)

})

test("Area do Quadrado Simples - Lado Nulo", () => {
    // Configura
    const lado = null
    const resultadoEsperado = "Por favor, informe um tamanho de lado válido"

    // Executa
    let calcularAreaDoQuadrado = areas.calcularAreaDoQuadrado
    let resultadoAtual = calcularAreaDoQuadrado(lado)

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)

})

test("Area do Retangulo Simples", () => {
    // Configura
    const largura = 4
    const comprimento = 7
    const resultadoEsperado = 28

    // Executa
    let calcularAreaDoRetangulo = areas.calcularAreaDoRetangulo
    let resultadoAtual = calcularAreaDoRetangulo(largura, comprimento)

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado)
})
