class MainPage {
    private searchFieldLocator: string = "//input[contains(@class,'fast-search__input')]";
    private loginFormLocator: string = "//div[contains(@class,'auth-bar__item') and text()='Вход']";
    private linkDollarKursSelector: string = "//span[@class='_u js-currency-amount']";
    private navigationLinkRentLocator: string = "//span[@class='b-main-navigation__text'][contains(text(),'Дома и квартиры')]";
    private navigationLinkMinskLocator: string = "(//span[contains(text(),'Минск')])[4]";
    private apartmentSearchMapLocator: string = "//div[@id='map']"


    private get getSearchField() {
        return cy.xpath(this.searchFieldLocator);
    }

    private get getMainLoginForm() {
        return cy.xpath(this.loginFormLocator);
    }

    private get getLinkDollarKurs() {
        return cy.xpath(this.linkDollarKursSelector);
    }

    private get getNavigationRent() {
        return cy.xpath(this.navigationLinkRentLocator);
    }

    private get getNavigationMinsk() {
        return cy.xpath(this.navigationLinkMinskLocator);
    }

    private get getApartmentSearchMap() {
        return cy.xpath(this.apartmentSearchMapLocator);
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

    goToRentalNavigationAndCheckData() {
        this.getNavigationRent.trigger('mouseover');
        this.getNavigationMinsk.click();
        cy.title().should('contain', 'аренда');
        this.getApartmentSearchMap.should('be.visible');
    }
}

export default new MainPage()