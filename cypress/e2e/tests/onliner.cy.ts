import { oss } from "../../data/cookies";
import { numberInConverterField, textInConverterField } from "../../data/kursData";
import { emailForLogIn, emailForRegistration, passwordForLogIn, passwordForRegistration } from "../../data/userData";
import { logIn } from "../../helpers/logIn";
import { randomNumber } from "../../helpers/randomHelper";
import searchIFrame from "../../pages/frames/searchIFrame";
import kursPage from "../../pages/kurs.page";
import mainPage from "../../pages/main.page";
import registrationPage from "../../pages/registration.page";
import rentCatalogPage from "../../pages/rentCatalog.page";
import loginPage from "../../pages/login.page";
import articlePage from "../../pages/article.page";
import { 
    brandSearchTerm, 
    distanceFilter, 
    priceFilter, 
    roomFilter, 
    searchKeyword, 
    sortOptions 
} from "../../data/searchData";
import supportPage from "../../pages/support.page";
import { userData } from "../../data/supportData";
import catalogPage from "../../pages/catalog.page";
import productPage from "../../pages/product.page";
import comparsionPage from "../../pages/comparsion.page";


describe("Onliner - the user is not logged in", () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('User can search', () => {
        mainPage.fillQuickSearchField(brandSearchTerm);
        searchIFrame.checkVisibilityOfSearchIFrame();
        searchIFrame.clearSearchField();
        searchIFrame.performSearchInModalIFrame(searchKeyword);
        searchIFrame.verifyProductIsVisible(searchKeyword);
        searchIFrame.switchToFoundProductInSearchResults(searchKeyword);
    });

    it('User login with valid data', () => {
        mainPage.openLoginPage();
        loginPage.logIn(emailForLogIn, passwordForLogIn);
        loginPage.waitCapchaFrameAppears();
    });

    it('User can register an account', () => {
        mainPage.getDisplayingContainerForLogin();
        registrationPage.getInputFornForRegistration();
        registrationPage.setEmailOnRegistrationPage(emailForRegistration);
        registrationPage.setPasswordOnRegistrationPage(passwordForRegistration);
        registrationPage.checkPasswordStrength();
        registrationPage.setRepeatPasswordOnRegistrationPage(passwordForRegistration);
        registrationPage.acceptPersonalData();
        registrationPage.getRegistration();
        registrationPage.goToMailButton();
    });

    it('Currency converter works correctly', () => {
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

    it('The real estate catalog works correctly', () => {
        mainPage.goToRentalNavigationAndCheckData();
        rentCatalogPage.setApartmentsFilterAndCheck();
        rentCatalogPage.setRoomsFilterAndCheck(roomFilter);
        rentCatalogPage.setPriceFilterAndCheck(priceFilter);
        rentCatalogPage.setDistanceFromMetroAndCheck(distanceFilter);
        rentCatalogPage.sortOptionsAndCheck(sortOptions);
    });

    it('User support form works correctly', () => {
        mainPage.openSupportPageAndCheck();
        supportPage.fillNameAndCheck(userData.correctName);
        supportPage.clearNameAndCheck();
        supportPage.fillEmailAndCheck(userData.incorrectEmail);
        supportPage.clearEmailAndCheck();
        supportPage.fillEmailAndCheck(userData.correctEmail);
        supportPage.verifyDropdowns();
        supportPage.verifyShortProblemDescriptionInput(userData.shortProblemDescription);
        supportPage.checkFullProblemDescriptionTextarea(userData.fullProblemDescription);
        supportPage.checkCaptcha();
        supportPage.checkIfSubmitRequestButtonEnabled();
    });

    it('Comparison of 2 products works correctly', () => {
        mainPage.openCatalog();
        catalogPage.goToTvCategory();
        catalogPage.openFirstLinkTv();
        productPage.clickInputComparisonAndcheckCompare();
        productPage.returnToCatalogPage();
        catalogPage.openSecondLinkTv();
        productPage.clickInputComparisonAndcheckCompare();
        productPage.clickcompareButton();
        comparsionPage.getTitlePageAndCheck();
    });
});

describe("Onliner - user is logged in", () => {
    beforeEach(() => {
        logIn(oss);
        cy.visit('/');
    });

    it.skip('User can rate the article', () => {
        mainPage.openFirstAutoArticle();
        articlePage.checkReactionCounter();
        articlePage.checkReactionStatus("st-reacted");
        // перестал находить элемент на странице
    });

    it.skip('User can place an order (before payment)', () => {});
});
