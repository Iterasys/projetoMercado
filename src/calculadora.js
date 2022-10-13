// Importação / Referência a Bibliotecas

// Classe (Opcional)

// Funções ou Metódos

// var: variavel
// let: variavel aperfeiçoada
// const: constante

// Notações:
// camelCase
// snake_case
                                                // 5     7
let somarDoisNumeros = function somarDoisNumeros(num1, num2) {
                    // 5   +   7  
    // const resultado = num1 + num2;
            // 12
    return num1 + num2;
}

let subtrairDoisNumeros = function subtrairDoisNumeros(num1, num2){
    const resultado = num1 - num2;
    return resultado;
}

const multiplicarDoisNumeros = (num1, num2) => {
    return num1 * num2;
}

const dividirDoisNumeros = (num1, num2) => num1 / num2;


module.exports = {
    somarDoisNumeros,
    subtrairDoisNumeros,
    multiplicarDoisNumeros,
    dividirDoisNumeros
};
