// Bibliotecas
// Configura
const supertest = require("supertest"); // Framework de Teste de API
const assert = require("chai").assert;  // Função de assertiva do resultado

// Constantes, Variaveis e Objetos
const baseUrl = "https://petstore.swagger.io/v2"; // url base da API
const petId   = 17321812;                         // codigo do animal

// Descrição = Conjuntos de Testes ~ Classe
describe("PetStore Swagger - Pet", () => {
    const request = supertest(baseUrl);

    // Post - teste de incluir um animal
    it("Post Pet", () => {
        // Configura
        
    });
});







