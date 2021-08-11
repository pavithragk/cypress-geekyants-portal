/// <reference types="cypress" />
context('DEMO-01', () => {
    beforeEach(function () {
        Cypress.config('chromeWebSecurity', true);
    });

    describe("Google Login", () => {

        it('first case', function () {
            cy.visit('http://geekyants-login.geekydev.com/home')
            cy.get('.custom-btn').click()
            // cy.wait(1000)
            cy.get('input[class="Xb9hP"]').type('tester@geekyants.com')

            // cy.get('#identifierId').type(Cypress.env('tester@geekyants.com'))
            // cy.get('input[class="VfPpkd-vQzf8d"]').click()

            //     .get('input[type="email"]').type(Cypress.env('user'))
            //     .get('#identifierNext button').click().wait(3000);


            // cy.url().should('contain', 'accounts.google.com')
            //     .get('input[type="password"]').type(Cypress.env('pass'))
            //     .get('#passwordNext button').click().wait(1500);
        });
    });
})