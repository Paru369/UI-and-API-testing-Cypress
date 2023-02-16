describe('Login', () => {
  it('ao fazer o login o avatar do usuário é exibido', () => {
    cy.login()

    cy.get('horizontal-menu img[src$="avatar_default.jpg"]', { timeout: 10000 })
      .should('be.visible')
  })
})
