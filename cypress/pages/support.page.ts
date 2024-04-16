import { regExpEmail } from "../helpers/regExp";

class SupportPage {
    private supportFormNameLocator: string = "//input[@id='id_name']";
    private supportFormEmailLocator: string = "//input[@id='id_email']";
    private supportFormProblemLocator: string = "//select[@id='id_type']";
    private supportFormProblemLocationLocator: string = "//select[@id='id_project']";
    private shortProblemDescriptionInputLocator: string = "//input[@id='id_subject']";
    private fullProblemDescriptionTextareaLocator: string = "//textarea[@id='id_description']";
    private captchaInputLocator: string = "//input[@id='id_captcha']";
    private captchaLocator: string = "//img[@alt='Captcha']";
    private sendRequestButtonLocator: string = "//input[@name='supportform[submit]']";


    private get getSupportFormName() {
        return cy.xpath(this.supportFormNameLocator);
    }

    private get getSupportFormEmail() {
        return cy.xpath(this.supportFormEmailLocator);
    }

    private get getSupportFormProblem() {
        return cy.xpath(this.supportFormProblemLocator);
    }

    private get getSupportFormProblemLocation() {
        return cy.xpath(this.supportFormProblemLocationLocator);
    }

    private get sendRequestButton() {
        return cy.xpath(this.sendRequestButtonLocator);
    }

    private get shortProblemDescriptionInput() {
        return cy.xpath(this.shortProblemDescriptionInputLocator);
    }

    private get fullProblemDescriptionTextarea() {
        return cy.xpath(this.fullProblemDescriptionTextareaLocator);
    }

    private get getCaptchaInput() {
        return cy.xpath(this.captchaInputLocator);
    }

    private get getCaptcha() {
        return cy.xpath(this.captchaLocator);
    }


    fillNameAndCheck(value: string) {
        this.getSupportFormName.type(value);
        this.getSupportFormName.should('have.value', value);
    }

    clearNameAndCheck() {
        this.getSupportFormName.clear();
        this.getSupportFormName.blur();
        this.getSupportFormName.should('have.value', 'Anonymous');
    }

    fillEmailAndCheck(email: string) {
        this.getSupportFormEmail.type(email);
        this.getSupportFormEmail.blur().then(() => {
            if (regExpEmail.test(email)) {
                this.getSupportFormEmail.should('have.value', email).and('have.attr', 'class', 'i-p valid');
            } else {
                this.getSupportFormEmail.should('have.attr', 'class', 'i-p error');
            }
        });
    }

    clearEmailAndCheck() {
        this.getSupportFormEmail.clear();
        this.getSupportFormEmail.blur();
    }

    verifyDropdowns() {
        this.getSupportFormProblem.should('be.visible');
        cy.xpath(`${this.supportFormProblemLocator}/option`).should('have.length.greaterThan', 1);

        this.getSupportFormProblemLocation.should('be.visible');
        cy.xpath(`${this.supportFormProblemLocationLocator}/option`).should('have.length.greaterThan', 1);
    }

    checkCaptcha() {
        this.getCaptchaInput.should('be.visible');
        this.getCaptcha.should('be.visible');
    }

    checkIfSubmitRequestButtonEnabled() {
        this.sendRequestButton.should('be.visible');
        this.sendRequestButton.should('be.enabled');
    }

    verifyShortProblemDescriptionInput(shortProblemDescription: string) {
        this.shortProblemDescriptionInput.should('be.visible');
        this.shortProblemDescriptionInput.type(shortProblemDescription);
        this.shortProblemDescriptionInput.should('have.value', shortProblemDescription);
    }

    checkFullProblemDescriptionTextarea(fullProblemDescription: string) {
        this.fullProblemDescriptionTextarea.should('be.visible');
        this.fullProblemDescriptionTextarea.type(fullProblemDescription);
        this.fullProblemDescriptionTextarea.should('have.value', fullProblemDescription);
    }
}

export default new SupportPage()