class BasePage {

    constructor(driver) {
        this.driver = driver
    }

    async getTitle() {
        return await this.driver.getTitle()
    }
}

module.exports = BasePage