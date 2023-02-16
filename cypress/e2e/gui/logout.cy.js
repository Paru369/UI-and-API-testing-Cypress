describe('Logout', () => {
  beforeEach(() => cy.login())

  it('redireciona à página de login ao fazer o logout', () => {
    cy.get('#leftRenderImage', { timeout: 10000 }).click()
    cy.contains('Sair').click()

    cy.url().should('contain', '/login')
  })
})
