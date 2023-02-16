Cypress.Commands.add('login', (
  email = Cypress.env('user_email'),
  password = Cypress.env('user_password'),
) => {
  cy.visit('/Login')
  cy.get("#Username").type(email)
  cy.get("#Password").type(password, { log: false })
  cy.get("#Bt_Login").click()
})

Cypress.Commands.add('gui_createCustomer', ({ name, phone, email }) => {
  cy.contains('button', 'Clientes', { timeout: 10000 }).click()
  cy.get('#filter-list').click()
  cy.contains('a', 'Pessoa').click()

  cy.get('input[name="contact_name"]').type(name)
  cy.get('input[name="contact_phones"]').type(phone)
  cy.get('input[name="contact_email"]').type(email)
  cy.contains('button', 'Salvar').click()
})


Cypress.Commands.add('gui_readCustomer', ({ name }) => {
  cy.contains('Pesquisar').type(name)
  cy.contains('.search-panel.open-panel span', name)
    .should('be.visible')
    .click()
})

Cypress.Commands.add('gui_updateCustomer', (newName) => {
  cy.contains('a', 'Opções').click()
  cy.contains('a', 'Editar cliente').click()
  cy.get('input[name="contact_name"]')
    .clear()
    .type(newName)
  cy.contains('button', 'Salvar').click()

})

Cypress.Commands.add('gui_deleteCustomer', () => {
  cy.contains('a', 'Opções').click()
  cy.contains('a', 'Excluir cliente').click()
  cy.contains('a', 'Confirmar').click()
})
