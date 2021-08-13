/// <reference types="cypress" />
/**
 * This spec needs to run first to make sure the user is logged in before accessing
 * the normal flow of the application. Renaming the file to '01_[filename]' does the trick :).
 */

describe("Google Login", () => {
    beforeEach(function () {
        cy.visit("/")
    })
    /**
     * 2nd param replaces the global config (cypress.json) only in the scope of the current .spec.
     * Similar to: Cypress.config('baseUrl', 'https://accounts.google.com');
     */
    it('should input email and password', {}, function () {
        // Handling all errors and 'skipping' test to avoid global failure.
        cy.on('uncaught:exception', (err, runnable) => {
            console.error('Google Login -> uncaught:exception', err);
            // this.skip();
        });



        // Google Login Redirection: Email Input
        cy.url().should('contain', 'accounts.google.com')
            .get('input[type="email"]').type(Cypress.env('user'))
            .get('#identifierNext button').click().wait(3000);
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        // Google Login Redirection: Password Input
        cy.url().should('contain', 'accounts.google.com')
            .get('input[type="password"]').type(Cypress.env('password'))
            .get('#passwordNext button').click().wait(6000)
            .get('#assistiveActionOutOfQuota').click().wait(6000)
            .get(':nth-child(2) > .lCoei > .vxx8jf').click().wait(6000)
            .get('#backupCodePin').type(Cypress.env('digit')).click().wait(4000)
            .get('#backupCodeNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click().wait(6000)

    });
});
