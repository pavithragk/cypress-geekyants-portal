describe('first test', function () {
    it('title', function () {
        cy.visit(Cypress.env('url'))
        cy.get('.custom-btn').click()
    })
})