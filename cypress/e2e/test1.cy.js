/// ＜reference types="cypress" /＞

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by Step{Enter}')
    // cy.contains('Google\'da Ara').click()
    cy.wait(2000)
    cy.contains('Videos').click()
})