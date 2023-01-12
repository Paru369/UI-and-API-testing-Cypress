describe('Logout', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('Sucesso ao deslogar', () => {
    cy.logout()

    cy.url().should('contains', `/login`)
  })
})