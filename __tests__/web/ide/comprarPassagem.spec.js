// Bibliotecas
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

// Suite de Teste
describe('Comprar Passagem', function() {
  this.timeout(60000)   // espera implicita / paciência = 30.000 milissegundos
  let driver            // objeto do Selenium WebDriver
  let vars              // lista para guardar variaveis e informações

  // Antes de cada teste - Inicialização - Setup
  beforeEach(async function() {
    // Instancia o objeto Selenium WebDriver para controlar o Chrome Driver
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}           // inicializa a lista como vazia
  })

  // Depois de cada teste - Finalização - TearDown
  afterEach(async function() {
    await driver.quit();  // Destroi o objeto do Selenium WebDriver
  })

  // O teste
  it('Comprar Passagem', async function() {
    await driver.get("https://www.blazedemo.com/")  // abre o site alvo - SUT: Software Under Test
    await driver.manage().window().setRect({ width: 1296, height: 696 }) // tamanho da janela
    await driver.findElement(By.name("fromPort")).click() // clica no combo de origem do voo
    // selecionando o combo de origem e escolhendo a opção São Paolo
    {
      const dropdown = await driver.findElement(By.name("fromPort"))
      await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
    }

    await driver.findElement(By.name("toPort")).click() // clica no combo de destino do voo

    // Seleciona no combo Destino a opção Cairo
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'Cairo']")).click()
    }

    // Clica no botão Procura Voo (Find Flights)
    await driver.findElement(By.css(".btn-primary")).click()

    // Carrega a página com a lista de vôos

    // Seleciona o vôo que está na primeira linha da tabela
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click() // 1 = 1ª linha

    // Carrega a página de pagamento

    // Preencher os campos do formulário

    // Seleciona a bandeira do cartão (cardType)
    await driver.findElement(By.id("cardType")).click()
    {
      const dropdown = await driver.findElement(By.id("cardType"))
      await dropdown.findElement(By.xpath("//option[. = 'American Express']")).click()
    }

    // Clica no check box Lembre-se de Mim (Remember Me)
    await driver.findElement(By.id("rememberMe")).click()

    // Clicar no campo Nome (Name) e escreve Juca Pato
    await driver.findElement(By.id("inputName")).click()
    await driver.findElement(By.id("inputName")).sendKeys("Juca Pato") // sendKeys = escrever

    await driver.findElement(By.css(".control-group:nth-child(2)")).click() // click neutro

    // Clicar no botão Comprar (Purchase) / botão no final da página
    await driver.findElement(By.css(".btn-primary")).click()

    // Carrega a página de agradecimento / confirmação

    // Validamos a mensagem de agradecimento e o preço da passagem

    assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!")
    assert(await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).getText() == "555 USD")
  })
})
