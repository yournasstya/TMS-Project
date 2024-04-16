class ComparsionPage {
    private titlePageLocator: string = "//h1[@class='b-offers-title']";


    private get getTitlePage() {
        return cy.xpath(this.titlePageLocator);
    }


    getTitlePageAndCheck() {
        this.getTitlePage.invoke('text').should('eq', 'Сравнение товаров')
    }
}

export default new ComparsionPage();