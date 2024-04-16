class LoginPage {
    private loginFieldLocator = "//input[contains(@class,'auth-input_primary') and @type='text']";
    private passwordFieldLocator = "//input[contains(@class,'auth-input_primary') and @type='password']";
    private logInButtonLocator = "//button[contains(@class,'auth-button_primary')]";
    private captchaFrameLocator = "//*[contains(@class,'auth-form__captcha')]";


    private get loginField() {
        return cy.xpath(this.loginFieldLocator);
    }

    private get passwordField() {
        return cy.xpath(this.passwordFieldLocator);
    }

    private get logInButton() {
        return cy.xpath(this.logInButtonLocator);
    }

    private get captchaFrame() {
        return cy.xpath(this.captchaFrameLocator);
    }


    logIn(login: string, password: string) {
        this.loginField.type(login);
        this.passwordField.type(password);
        this.logInButton.click();
    }

    waitCapchaFrameAppears() {
        this.captchaFrame.should('be.visible');
    }
}

export default new LoginPage()