class CatalogPage {
    private tvCategoryLocator: string = "(//div[contains(@class,'catalog-form__popular-list')])[1]/a[6]";
    private firstTvCatalogLocator: string = "(//div[contains(@class,'catalog-form__offers-flex')])[1]/div[contains(@class,'catalog-form__offers-part catalog-form__offers-part_data')]/div[1]/a";
    private secondTvCatalogLocator: string = "(//div[contains(@class,'catalog-form__offers-flex')])[4]/div[contains(@class,'catalog-form__offers-part catalog-form__offers-part_data')]/div[1]/a";


    private get getTvCategory() {
        return cy.xpath(this.tvCategoryLocator);
    }

    private get getFirstTvCatalog() {
        return cy.xpath(this.firstTvCatalogLocator);
    }

    private get getSecondTvCatalog() {
        return cy.xpath(this.secondTvCatalogLocator);
    }


    goToTvCategory() {
        this.getTvCategory.click();
    }

    openFirstLinkTv() {
        this.getFirstTvCatalog.click();
    }

    openSecondLinkTv() {
        this.getSecondTvCatalog.click();
    }
}

export default new CatalogPage();