describe('Login', () => {
  it('successfully', () => {
    cy.login()
    cy.wait(5000)
    cy.contains('Paulo Victor').should('be.visible')
  })
})

