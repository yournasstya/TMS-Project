import { regExpCommasFilter } from "../helpers/regExp";

class KursPage {
    private kursDataLocator: string = "//th[@class='th-first']";
    private usdRateSectionLocator: string = "//b[normalize-space()='1 USD']";
    private eurRateSectionLocator: string = "//b[normalize-space()='1 EUR']";
    private rubRateSectionLocator: string = "//b[normalize-space()='100 RUB']";
    private buyButtonInConverterSelector: string = "input[id='buy']";
    private amountButtonInConverterSelector: string = "input[id='amount-in']";
    private selectCurrencySelector: string = "//select[@name='currency-in']";
    private currencyConversionResultLocator: string = "//b[@class='js-cur-result']";
    private euroExchangeRateLocator: string = "(//p[contains(@class, 'value')]/b)[5]";


    private get kursData() {
        return cy.xpath(this.kursDataLocator);
    }

    private get getUsdRateSection() {
        return cy.xpath(this.usdRateSectionLocator);
    }

    private get getEurRateSection() {
        return cy.xpath(this.eurRateSectionLocator);
    }

    private get getRubRateSection() {
        return cy.xpath(this.rubRateSectionLocator);
    }

    private get getBuyButtonInConverter() {
        return cy.get(this.buyButtonInConverterSelector);
    }

    private get getAmountButtonInConverter() {
        return cy.get(this.amountButtonInConverterSelector);
    }

    private get selectCurrency() {
        return cy.xpath(this.selectCurrencySelector);
    }

    private get getCurrencyConversionResult() {
        return cy.xpath(this.currencyConversionResultLocator);
    }

    private get getEuroExchangeRate() {
        return cy.xpath(this.euroExchangeRateLocator);
    }


    checkKursAndDataVisibility() {
        const today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
        const xpath = `//*[contains(text(), '${today}')]`;
        cy.xpath(xpath).should('be.visible');

        this.kursData.should('be.visible');
        this.getUsdRateSection.should('be.visible');
        this.getEurRateSection.should('be.visible');
        this.getRubRateSection.should('be.visible');
    }

    getBuyButton() {
        this.getBuyButtonInConverter.click({force: true});
    }

    getConverterFields(searchWord: string) {
        this.getAmountButtonInConverter.type(searchWord);
    }

    checkConverterFields(num: number) {
        this.getAmountButtonInConverter.should('be.visible').and('have.value', num);
    }

    clearValueInConverterField() {
        this.getAmountButtonInConverter.clear();
    }

    getValueInConverterField(randomNum: number) {
        this.getAmountButtonInConverter.type(randomNum.toString());
    }

    getCurrencyEur() {
        this.selectCurrency.select('EUR');
    }

    checkForCorrectCurrencyConversion(filter: number) {
        this.getCurrencyConversionResult.invoke('text').then((text) => {
            const convertedAmmount: number = +text.replace(regExpCommasFilter, '.');
            
        this.getEuroExchangeRate.invoke('text').then((text) => {
            const bankSellEur: number = +text.replace(regExpCommasFilter, '.');
            expect(convertedAmmount.toFixed(3)).to.equal((bankSellEur * filter).toFixed(3));});    
        });
    }
}

export default new KursPage();