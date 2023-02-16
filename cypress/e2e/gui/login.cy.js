describe('Login', () => {
  it('ao fazer o login o avatar do usuário é exibido', () => {
    cy.login()
    cy.wait(1000)
    cy.contains('Paulo Victor').should('be.visible')
  })
})
