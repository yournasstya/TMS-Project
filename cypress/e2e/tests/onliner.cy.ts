import { numberInConverterField, textInConverterField } from "../../data/enums/kursData";
import { email, password } from "../../data/enums/registrationData";
import { brandSearchTerm, searchKeyword } from "../../data/enums/searchData";
import { randomNumber } from "../../helpers/randomHelper";
import searchIFrame from "../../pages/frames/searchIFrame";
import kursPage from "../../pages/kurs.page";
import mainPage from "../../pages/main.page";
import registrationPage from "../../pages/registration.page";
import rentCatalogPage from "../../pages/rentCatalog.page";


describe("Onliner", () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it.skip('Account registration', () => {
        mainPage.getDisplayingContainerForLogin();
        registrationPage.getInputFornForRegistration();
        registrationPage.setEmailOnRegistrationPage(email);
        registrationPage.setPasswordOnRegistrationPage(password);
        registrationPage.checkPasswordStrength();
        registrationPage.setRepeatPasswordOnRegistrationPage(password);
        registrationPage.acceptPersonalData();
        registrationPage.getRegistration();
        registrationPage.goToMailButton();
    });

    it.skip('User can search', () => {
        mainPage.fillQuickSearchField(brandSearchTerm);
        searchIFrame.checkVisibilityOfSearchIFrame();
        searchIFrame.clearSearchField();
        searchIFrame.performSearchInModalIFrame(searchKeyword);
        searchIFrame.verifyProductIsVisible(searchKeyword);
        searchIFrame.switchToFoundProductInSearchResults(searchKeyword);
    });

    it.skip('Currency Converter', () => {
        mainPage.goToKursAndCheckDataVisibility();
        kursPage.checkKursAndDataVisibility();
        kursPage.getBuyButton();
        kursPage.getConverterFields(textInConverterField);
        kursPage.checkConverterFields(numberInConverterField);
        kursPage.clearValueInConverterField();
        kursPage.getValueInConverterField(randomNumber);
        kursPage.getCurrencyEur();
        kursPage.checkForCorrectCurrencyConversion(randomNumber);
    });

    it('Работа с каталогом недвижимости', () => {
        mainPage.goToRentalNavigationAndCheckData();
        rentCatalogPage.setApartmentsFilterAndCheck();
        rentCatalogPage.setRoomsFilterAndCheck(2);
        rentCatalogPage.setPriceFilterAndCheck(500);
        rentCatalogPage.setDistanceFromMetroAndCheck('Возле метро');
        rentCatalogPage.sortOptionsAndCheck('Сначала дорогие');
    });
});