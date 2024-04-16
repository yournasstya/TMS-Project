import { valueFilter } from "../helpers/regExp";

class RentCatalogPage {
    private advertsItemLocator: string = "//div[@class='classifieds-bar__item']";
    private apartamentFilterItemLocator: string = "//span[contains(text(),'Квартира')]";
    private classifiedCaptionItemLocator: string = "//span[@class='classified__caption-item classified__caption-item_type']";
    private apartmentRentTypeLocator: string = "//span[@class='classified__caption-item classified__caption-item_type']";
    private filterPriceToLocator: string = "//input[@id='search-filter-price-to']";
    private apartamentPriceUSDLocator: string = "//span[contains(@data-bind, 'USD')]";
    private filterMetroLocator: string = "//div[contains(text(), 'Метро')]";
    private orderOptionsSortButtonLocator: string = "//div[@class='dropdown dropdown_right']";
    private firstApartmentLocator: string = "(//a[@class='classified'])[1]";


    private get getAdvertsItem() {
        return cy.xpath(this.advertsItemLocator).invoke('text');
    }

    private get getApartamentFilterItem() {
        return cy.xpath(this.apartamentFilterItemLocator);
    }

    private get getClassifiedCaptionItem() {
        return cy.xpath(this.classifiedCaptionItemLocator);
    }

    private get getApartmentRentType() {
        return cy.xpath(this.apartmentRentTypeLocator);
    }

    private get getFilterPrice() {
        return cy.xpath(this.filterPriceToLocator);
    }

    private get getApartamentPriceUSD() {
        return cy.xpath(this.apartamentPriceUSDLocator);
    }

    private get getMetroFilter() {
        return cy.xpath(this.filterMetroLocator);
    }

    private get firstApartment() {
        return cy.xpath(this.firstApartmentLocator);
    }

    private get getOrderOptionsSortButton() {
        return cy.xpath(this.orderOptionsSortButtonLocator);
    }


    setApartmentsFilterAndCheck() {
        let initialValueOfAdvertCounter: number | null = null;
        let advertsCounterAfterFilterValue: number | null = null;

        this.getAdvertsItem.then((value) => {
            initialValueOfAdvertCounter = valueFilter(value);
        });

        this.getApartamentFilterItem.click();
        cy.wait(1000);

        this.getClassifiedCaptionItem.each((type) => {
            cy.wrap(type).should('not.contain.text', 'Комната');
            cy.wrap(type).invoke('text').should('be.oneOf', ['1к', '2к', '3к', '4к', '5к', '6к']);
        });

        this.getAdvertsItem.then((value) => {
            advertsCounterAfterFilterValue = valueFilter(value);
            if (initialValueOfAdvertCounter !== null && advertsCounterAfterFilterValue !== null) {
                expect(advertsCounterAfterFilterValue).to.be.lessThan(initialValueOfAdvertCounter);
            }
        });
    }

    setRoomsFilterAndCheck(rooms: number) {
        let initialValueOfAdvertCounter: number | null = null;
        let advertsCounterAfterFilterValue: number | null = null;

        this.getAdvertsItem.then((value) => {
            initialValueOfAdvertCounter = valueFilter(value);
        });

        cy.xpath(`//span[normalize-space()='${rooms}']`).click();
        cy.wait(1000);
        
        this.getApartmentRentType.each((type) => {
            cy.wrap(type).should('contain.text', `${rooms}к`);
        });

        this.getAdvertsItem.then((value) => {
            advertsCounterAfterFilterValue = valueFilter(value);
            expect(advertsCounterAfterFilterValue).to.be.lessThan(initialValueOfAdvertCounter);
        });
    }

    setPriceFilterAndCheck(price: number) {
        let initialValueOfAdvertCounter: number | null = null;
        let advertsCounterAfterFilterValue: number | null = null;

        this.getAdvertsItem.then((value) => {
            initialValueOfAdvertCounter = valueFilter(value);
        });

        this.getFilterPrice.clear().type(`${price}{enter}`);
        cy.wait(1000);

        this.getApartamentPriceUSD.each((value) => {
            cy.wrap(value).invoke('text').then((value) => {
                let flatPrice: number = +value;
                expect(flatPrice).lte(price);
            });
        });

        this.getAdvertsItem.then((value) => {
            advertsCounterAfterFilterValue = valueFilter(value);
            expect(advertsCounterAfterFilterValue).lessThan(initialValueOfAdvertCounter);
        });
    }

    setDistanceFromMetroAndCheck(distance: string) {
        let initialValueOfAdvertCounter: number | null = null;
        let advertsCounterAfterFilterValue: number | null = null;

        this.getAdvertsItem.then((value) => {
            initialValueOfAdvertCounter = valueFilter(value);
        });

        this.getMetroFilter.click();
        cy.xpath(`//li[contains(text(),'${distance}')]`).click();
        cy.wait(1000);

        this.getAdvertsItem.then((value) => {
            advertsCounterAfterFilterValue = valueFilter(value);
            expect(advertsCounterAfterFilterValue).lessThan(initialValueOfAdvertCounter);
        });
    }

    sortOptionsAndCheck(sort: string) {
        let initialId: string = "";

        this.firstApartment.invoke('attr', 'data-id').then((id) => {
            initialId = id;
        })

        this.getOrderOptionsSortButton.click();
        cy.xpath(`//li[contains(text(),'${sort}')]`).click();
        // cy.wait(1000);

        // this.firstApartment.invoke('attr', 'data-id').then((id) => {
        //     expect(id).not.eq(initialId);
        // })

    }

}

export default new RentCatalogPage();