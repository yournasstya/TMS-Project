class MainPage {
    private searchFieldLocator: string = "//input[contains(@class,'fast-search__input')]";
    private loginButtonLocator: string = "//div[contains(@class,'auth-bar__item') and text()='Вход']";
    private linkDollarKursSelector: string = "//span[@class='_u js-currency-amount']";
    private navigationLinkRentLocator: string = "//span[@class='b-main-navigation__text'][contains(text(),'Дома и квартиры')]";
    private navigationLinkMinskLocator: string = "(//span[contains(text(),'Минск')])[4]";
    private apartmentSearchMapLocator: string = "//div[@id='map']";
    private firstAutoArticleLocator: string = "//h2/a[contains(text(), 'Авто')]/../../../ul/li[1]";
    private supportLinkLocator: string = "//a[contains(text(),'Поддержка пользователей')]";
    private catalogLinkLocator: string = "//a[@class='b-main-navigation__link']/span[contains(text(),'Каталог')]";

    private get getSearchField() {
        return cy.xpath(this.searchFieldLocator);
    }

    private get getLoginButton() {
        return cy.xpath(this.loginButtonLocator);
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

    private get getFirstAutoArticle() {
        return cy.xpath(this.firstAutoArticleLocator);
    }

    private get getSupportLink() {
        return cy.xpath(this.supportLinkLocator);
    }

    private get getCatalogLink() {
        return cy.xpath(this.catalogLinkLocator);
    }


    fillQuickSearchField(searchTerm: string) {
        this.getSearchField.type(searchTerm);
    }

    getDisplayingContainerForLogin() {
        this.getLoginButton.click();
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

    openLoginPage() {
        this.getLoginButton.click();
    }

    openFirstAutoArticle() {
        this.getFirstAutoArticle.click();
        cy.wait(20000);
    }

    openSupportPageAndCheck() {
        this.getSupportLink.click();
        cy.title().should('contain', 'Запрос в службу поддержки');
    }

    openCatalog() {
        this.getCatalogLink.click();
    }
}

export default new MainPage()