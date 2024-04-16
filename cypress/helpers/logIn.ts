export function logIn(oss: string) {
    cy.setCookie('logged_in', '1', { domain: ".onliner.by", secure: true, sameSite: "lax" });
    cy.setCookie('oss', oss, { domain: '.onliner.by', httpOnly: true, secure: true, sameSite: "lax" });
    cy.setCookie('delivery_boarding_showed', 'true', { domain: '.onliner.by', httpOnly: true });
    cy.getCookie('oss').should('have.property', 'value', oss);
}