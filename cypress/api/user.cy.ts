/// <reference types='Cypress' />

context('GET /api/users', () => {
  it('gets a list of users', () => {
    cy.request('GET', 'http://localhost:3000/api/users').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.result).length.to.be.greaterThan(1)
    })
  })

  it('add new user', () => {
    cy.request('POST', 'http://localhost:3000/api/users', {
      firstName: 'Kenneth',
      lastName: 'Andales',
    })
      .its('body')
      .should('deep.contain', {
        firstName: 'Kenneth',
        lastName: 'Andales',
      })
  })
})
