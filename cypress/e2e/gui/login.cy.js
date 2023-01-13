describe('Login', () => {
  it('Logar e confirmar login', () => {
    cy.login()
    cy.wait(1000)
    cy.contains('Paulo Victor').should('be.visible')
  })
})

