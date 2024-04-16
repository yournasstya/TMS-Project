class ArticlePage {
    private firstReactionLocator: string = "(//div[@class='st-btn st-first'])[1]";
    private firstReactionCounterLocator: string = "(//div[contains(@class, 'st-btn')]/span)[1]";
    private reactionButtonsLocator: string = "//div[contains(@class, 'sharethis')]";


    private get getFirstReaction() {
        return cy.xpath(this.firstReactionLocator);
    }

    private get getFirstReactionCounter() {
        return cy.xpath(this.firstReactionCounterLocator);
    }

    private get getReactionButtons() {
        return cy.xpath(this.reactionButtonsLocator);
    }


    setFirstReaction() {
        this.getFirstReaction.click();
    }

    getFirstReactionValue() {
        return this.getFirstReactionCounter.invoke('text');
    }

    checkReactionCounter() {
        let reactionCounterValue: number;

        this.getFirstReactionValue().then(value => {
            reactionCounterValue = +value;

            this.setFirstReaction();
            this.getFirstReactionValue().then(newValue => {
                const newCounterValue: number = +newValue;
                expect(newCounterValue).to.equal(reactionCounterValue + 1);
            });
        });
    }

    checkReactionStatus(status: string) {
        this.getReactionButtons.should('have.class', status);
    }
}

export default new ArticlePage();