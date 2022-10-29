// Bibliotecas
// Configura
const supertest = require("supertest"); // Framework de Teste de API
const assert = require("chai").assert;  // Função de assertiva do resultado

// Constantes, Variaveis e Objetos
const baseUrl = "https://petstore.swagger.io/v2"; // url base da API
const petId   = 17321812;                         // codigo do animal

// Testes
describe("PetStore Swagger - Store Order", () =>{
    // declara o objeto de requisição e a url base
    const request = supertest(baseUrl)


    it("Post Store Onder", () => {
        // aponta para o arquivo onde está o json do pedido de venda
        const jsonFile = require("../../vendors/json/store_order1.json")

        return request
            .post("/store/order")
            .send(jsonFile)
            .then((resposta) => {
                assert(resposta.statusCode, 200)
                assert(resposta.body.id, petId)
                assert(resposta.body.complete, true)
            }) // fim do then
                

    }) // fim do it

    it("Get Store Order", () => {
        return request
            .get("/store/order/10")
            .then((resposta) => {
                assert(resposta.statusCode, 200)
                assert(resposta.body.id, petId)
                assert(resposta.body.complete, true)
            }) // fim do then
    }) // fim do it

    it("Delete Store Order", () => {
        return request
            .delete("/store/order/10")
            .then((resposta) => {
                assert(resposta.statusCode, 200)
            }) // fim do then
    }) // fim do it

}) // fim do describe