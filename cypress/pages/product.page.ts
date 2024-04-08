import { SortingTypes } from "../data/enums/sortingType";

class ProductPage {
    private offersLinkLocator = 'a:has(span[itemprop="offerCount"])';
    private offersSortingSelectLocator = 'select.input-style__real';
    private offersListLoaderLocator = 'div.offers-list_animated';


    private get offerLink() {
        return cy.get(this.offersLinkLocator);
    }

    private get offersSortingSelect() {
        return cy.get(this.offersSortingSelectLocator);
    }

    private get offersListLoader() {
        return cy.get(this.offersListLoaderLocator, { timeout: 10000 });
    }


    switchToOffers() {
        this.offerLink.click();
    }

    selectOfferSortingType(sortingType: SortingTypes) {
        this.offersSortingSelect.select(sortingType);
        this.offersListLoader.should('not.exist');
    }
}

export default new ProductPage();