class SearchIFrame {
    private searchIFrameLocator = "//iframe[@class='modal-iframe']";
    private searchFieldLocator = "//input[@placeholder='Поиск']";
    private searchProductTitleLinkLocator = "(//a[@class='product__title-link'])"


    private get getSearchIFrame() {
        return cy.getIFrameBody(this.searchIFrameLocator);
    }

    // private searchProductTitleLink() {
    //     return cy.xpath(this.searchProductTitleLinkLocator);
    // }


    checkVisibilityOfSearchIFrame() {
        this.getSearchIFrame.should('be.visible');
    }

    clearSearchField() {
        this.getSearchIFrame.xpath(this.searchFieldLocator).clear().should('be.empty');
    }

    performSearchInModalIFrame(searchKeyword: string) {
        this.getSearchIFrame.xpath(this.searchFieldLocator).should('be.enabled').clear().type(searchKeyword);
    }

    verifyProductIsVisible(searchKeyword: string) {
        this.getSearchIFrame.each(($title) => {
                cy.wrap($title).should('be.visible').and('contain.text', searchKeyword);
            });
    }

    switchToFoundProductInSearchResults(searchKeyword: string) {
        this.getSearchIFrame.xpath(this.searchProductTitleLinkLocator).should("contain.text", searchKeyword).first().click();
    }
}

export default new SearchIFrame();