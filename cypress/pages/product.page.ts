class ProductPage {
    private compareButtonLocator: string = "//a[@class='compare-button__sub compare-button__sub_main']";
    private inputComparisonLocator: string = "//li[@id='product-compare-control']/label/span/span[@class='i-checkbox__faux']";

    private get inputComparison() {
        return cy.xpath(this.inputComparisonLocator);
    }

    private get compareButton() {
        return cy.xpath(this.compareButtonLocator);
    }


    clickInputComparisonAndcheckCompare() {
        this.inputComparison.click();
        this.compareButton.should('be.visible');
    }

    returnToCatalogPage() {
        cy.go('back');
    }

    clickcompareButton() {
        this.compareButton.click();
    }
}

export default new ProductPage();