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
        // Apontou para o arquivo com os dados do animal
        const jsonFile = require("../../vendors/json/pet1.json");
        // Realizar a requisição e receber a resposta

        // Executa
        return request      // chamada para a requisição
            .post("/pet")   // endpoint / função para incluir o animal
            .send(jsonFile) // envia os dados no corpo da requisição
            // Valida
            .then((response) => {
                assert.equal(response.statusCode, 200); // Se a requisição foi recebida e processada
                assert.equal(response.body.id, petId);  // Se é o id esperado do animal
                assert.equal(response.body.name, "Garfield"); // Se é o nome esperado
                assert.equal(response.body.status, "available");   // Se está com o status esperado
            });
    });
});







