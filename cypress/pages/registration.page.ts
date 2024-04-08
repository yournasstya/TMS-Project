class RegistrationPage {
    private registrationLinkLocator: string = "//div[contains(@class, 'auth-form__description_condensed-other')][1]/a";
    private emailFieldSelector: string = "input[placeholder='Ваш e-mail']";
    private passwordFieldSelector: string = "input[placeholder='Придумайте пароль']";
    private repeatPasswordFieldSelector: string = "input[placeholder='Повторите пароль']";
    private descriptionOfAutheStrongPasswordLocator: string = "//div[contains(text(), 'Очень надежный пароль')]";
    private acceptConsentOfPersonalDataLocator: string = "input.auth-checkbox__real";
    private registrationButtonSelector: string = "button[type='submit']";
    private goToMailButtonLocator: string = "//a[contains(text(), 'Перейти в почту')]"


    private get getRegistrationLink() {
        return cy.xpath(this.registrationLinkLocator);
    }

    private get getEmailField() {
        return cy.get(this.emailFieldSelector);
    }

    private get getPasswordField() {
        return cy.get(this.passwordFieldSelector);
    }

    private get getRepeatPasswordField() {
        return cy.get(this.repeatPasswordFieldSelector);
    }

    private get getDescriptionOfAutheStrongPassword() {
        return cy.xpath(this.descriptionOfAutheStrongPasswordLocator);
    }

    private get getAcceptConsentOfPersonalData() {
        return cy.get(this.acceptConsentOfPersonalDataLocator);
    }

    private get getRegistrationButton() {
        return cy.get(this.registrationButtonSelector);
    }

    private get getMailButton() {
        return cy.xpath(this.goToMailButtonLocator).should('be.visible');
    }
    

    getInputFornForRegistration() {
        this.getRegistrationLink.click();
    }

    setEmailOnRegistrationPage(email: string) {
        this.getEmailField.type(email);
    }

    setPasswordOnRegistrationPage(password: string) {
        this.getPasswordField.type(password);
    }

    setRepeatPasswordOnRegistrationPage(password: string) {
        this.getRepeatPasswordField.type(password);
    }

    checkPasswordStrength() {
        this.getDescriptionOfAutheStrongPassword.should("be.visible");
    }

    acceptPersonalData() {
        this.getAcceptConsentOfPersonalData.click({force: true});
    }

    getRegistration() {
        this.getRegistrationButton.click();
    }

    goToMailButton() {
        this.getMailButton.click();
    }
}

export default new RegistrationPage()