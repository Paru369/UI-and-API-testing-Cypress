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

Cypress.Commands.add('logout', () => {
  cy.get('#leftRenderImage').click()
  cy.contains('Sair').click()
})

Cypress.Commands.add('gui_createCustomer', customerData => {
  cy.contains('Clientes').click()
  cy.get('#filter-list').click()
  cy.contains('Pessoa').click()

  cy.get('input[name="contact_name"]').type(customerData.name)
  cy.get('input[name="contact_phones"]').type(customerData.phone)
  cy.get('input[name="contact_email"]').type(customerData.email)
  cy.get('button[class="button button-action pull-right"]').click()
})


Cypress.Commands.add('gui_readCustomer', name => {
  cy.contains('Pesquisar').type(name)
 
})

Cypress.Commands.add('gui_updateCustomer', (actualName, newName) => {
  cy.contains('Pesquisar').type(actualName)
  cy.contains(actualName).click()
  cy.contains('Opções').click()
  cy.contains('Editar cliente').click()
  cy.get('input[name="contact_name"]').clear().type(newName)
  cy.get('button[class="button button-action pull-right"]').click()
  
})

Cypress.Commands.add('gui_deleteCustomer', name => {
  cy.contains('Pesquisar').type(name)
  cy.contains(name).click()
  cy.contains('Opções').click()
  cy.contains('Excluir cliente').click()
  cy.contains('Confirmar').click()
  
})