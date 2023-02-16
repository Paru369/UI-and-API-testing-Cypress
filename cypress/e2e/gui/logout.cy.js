describe('Logout', () => {
  beforeEach(() => cy.login())

  it('Sucesso ao deslogar', () => {
    cy.logout()

    cy.url().should('contain', '/login')
  })
})
