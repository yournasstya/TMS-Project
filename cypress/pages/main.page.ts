class MainPage {
    private searchFieldLocator: string = "//input[contains(@class,'fast-search__input')]";
    private loginFormLocator: string = "//div[contains(@class,'auth-bar__item') and text()='Вход']";
    private linkDollarKursSelector: string = "//span[@class='_u js-currency-amount']";


    private get getSearchField() {
        return cy.xpath(this.searchFieldLocator);
    }

    private get getMainLoginForm() {
        return cy.xpath(this.loginFormLocator);
    }

    private get getLinkDollarKurs() {
        return cy.xpath(this.linkDollarKursSelector);
    }


    fillQuickSearchField(searchTerm: string) {
        this.getSearchField.type(searchTerm);
    }

    getDisplayingContainerForLogin() {
        this.getMainLoginForm.click();
    }

    goToKursAndCheckDataVisibility() {
        this.getLinkDollarKurs.click();
        cy.title().should('contain', 'Лучшие курсы валют');
    }
}

export default new MainPage()