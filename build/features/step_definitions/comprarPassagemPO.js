"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const selenium_webdriver_1 = require("selenium-webdriver"); // Selenium
require("chromedriver"); // ChromeDriver - tradutor do browser
const chai_1 = require("chai");
const HomePage = require("../../pages/HomePage");
const chrome = require('selenium-webdriver/chrome');
// selenium - selenium-webdriver/chrome - chromedriver - browser
(0, cucumber_1.Before)(async function () {
    const options = new chrome.Options().headless();
    this.driver = await new selenium_webdriver_1.Builder()
        .forBrowser('chrome')
        //.setChromeOptions(options)
        .build();
    this.driver.manage().setTimeouts({ implicit: 60000 });
    this.driver.manage().window().maximize();
    this.homePage = new HomePage(this.driver);
});
(0, cucumber_1.After)(async function () {
    await this.driver.quit();
});
(0, cucumber_1.Given)('acesso o site BlazeDemo', async function () {
    await this.driver.get('https://www.blazedemo.com');
});
(0, cucumber_1.When)('seleciono origem como {string} e destino como {string}', async function (origem, destino) {
    await this.homePage.selecionarOrigemDestinoVoo(origem, destino);
});
(0, cucumber_1.Then)('exibe o titulo da guia como {string}', async function (tituloEsperado) {
    let tituloAtual = await this.homePage.getTitle();
    chai_1.assert.equal(tituloAtual, tituloEsperado);
});
