describe('Login', () => {
  it('Logar e confirmar login', () => {
    cy.login()
    cy.wait(2000)
    cy.contains('Paulo Victor').should('be.visible')
  })
})

