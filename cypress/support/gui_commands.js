Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
) => {
  const login = () => {

    cy.visit('/Login.aspx')

    cy.get("#Username").type(user)
    cy.get("#Password").type(password, { log: false })
    cy.get("#Bt_Login").click()
  }

  login()
})