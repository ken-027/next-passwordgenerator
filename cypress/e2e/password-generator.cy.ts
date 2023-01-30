/// <reference types='Cypress' />

describe('Password Generator Pages', () => {
  it('visit index page', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Secret Key')
    cy.contains('Message')
    cy.contains('Generate Characters')
    cy.contains('Modules')

    cy.get('#basic_secret_key').type('My Secret Key')
    cy.get('#basic_message').type('my message')
    cy.get('#basic_character').clear().type('26')
    cy.get('#basic_modules').type('Jack')

    cy.get('button').click()

    // cy.contains('Logs').click()
    // cy.url().should('include', '/logs')
  })

  // it('visit logs page', () => {
  //   cy.visit('http://localhost:3000/logs')

  //   cy.get('a').click()
  //   cy.url().should('include', '/')
  // })
})
