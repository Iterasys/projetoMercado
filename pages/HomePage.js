const BasePage = require('./BasePage')
const By = require('selenium-webdriver').By

class HomePage extends BasePage{

    constructor(driver){
        super(driver)
        this.byDropDownOrigem = By.name('fromPort')
        this.byDropDownDestino = By.name('toPort')
        this.btnBuscar = By.css('input.btn.btn-primary')

    } // fim do construtor

    async selecionarOrigemDestinoVoo(origem, destino){
        // selecionar a cidade origem
        let dropDownOrigem = await this.driver.findElement(this.byDropDownOrigem)
        await dropDownOrigem.findElement(By.css(`[value="${origem}"]`)).click()

        // selecionar a cidade destino
        let dropDownDestino = await this.driver.findElement(this.byDropDownDestino)
        await dropDownDestino.findElement(By.css(`[value="${destino}"]`)).click()

        // clicar no botão Find Flights
        await this.driver.findElement(this.btnBuscar).click()
    }

} // fim da classe

module.exports = HomePage