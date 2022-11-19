const { Builder, By, Key } = require('selenium-webdriver') // Selenium WebDriver
require('chromedriver')                               // Chrome Driver
const assert = require('assert')                      // Assert - para faze as validações

// Suite de Teste - Conjunto de testes
describe('Login', function (){
    let driver // objeto do Selenium WebDriver

    // Antes do Teste
    beforeEach(async function (){
        driver = await new Builder() // instancia o Selenium WebDriver
            .forBrowser('chrome')    // seleciona o driver para Chrome
            .build()                 // executa a operação

        driver.manage().setTimeouts({implicit: 60000}) // espera implicita de até 60 mil milissegundos
        driver.manage().window().maximize()            // maximiza a janela do browser
    }) // final do before

    // Depois do Teste
    afterEach(async function (){
        await driver.quit()         // destruir o objeto do Selenium WebDriver
    }) // final do after

    // Os Testes
    it('Experimentando Login', async function (){
        await driver.get('https://www.blazedemo.com')         // acessar a home do site
        await driver.findElement(By.linkText('home')).click() // clicar no link escrito home

        // validar se entrou na página de login
        assert(await driver.getTitle() == 'BlazeDemo')        // valida o titulo da guia
                                                              // neste caso não é conclusivo
        // Comparar se no cabeçalho do painel está escrito Login - mais conclusivo
        assert(await driver.findElement(By.css('div.panel-heading')).getText() == 'Login')
        
        // escreve no campo e-mail (cola o texto no campo)
        await driver.findElement(By.id('email')).sendKeys('teste@teste.com.br')
        // a linha comentada abaixo é um exemplo para escrever letra por letra
        // await driver.findElement(By.id('email')).sendKeys(Key.chord('teste@teste.com.br'))

        // escreve no campo senha
        await driver.findElement(By.id('password')).sendKeys('12345678')

        // clica no botão Login
        await driver.findElement(By.css('button.btn.btn-primary')).click()

        // Validar o titulo da guia
        assert(await driver.getTitle() == 'Page Expired')

        // Validar o texto na página
        assert(await driver.findElement(By.css('div.flex-center.position-ref.full-height')).getText() == '419\nPage Expired')

    })



}) // final do describe
