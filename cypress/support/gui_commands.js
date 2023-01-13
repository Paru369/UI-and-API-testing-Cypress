Cypress.Commands.add('login', (
  email = Cypress.env('user_email'),
  password = Cypress.env('user_password'),
) => {
  const login = () => {
    cy.visit('/Login')
    cy.get("#Username").type(email)
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

Cypress.Commands.add('gui_createDeal', dealData => {
  cy.contains('Negócios').click()
  cy.get('a[class="button button-action pull-right nowrap"]').click()
  cy.get('input[name="deal_title"]').type(dealData.title)
  cy.get('input[name="deal_amount"]').type(dealData.amount)
  cy.get('button[class="button button-action pull-right"]').click()
  cy.contains('Negócios').click()
})


Cypress.Commands.add('gui_readDeal', name => {
  cy.contains('Pesquisar').type(name)
})

Cypress.Commands.add('gui_updateDeal', (actualTitle, newTitle) => {
  cy.contains('Negócios').click()
  cy.contains(actualTitle).click()

  cy.contains('Opções').click()
  cy.contains('Editar negócio').click()
  cy.get('input[name="deal_title"]').clear().type(newTitle)
  cy.get('button[class="button button-action pull-right"]').click()
})

Cypress.Commands.add('gui_deleteDeal', title => {
  cy.wait(1000)
  cy.contains('Negócios').click()
  cy.contains(title).click()
  cy.contains('Opções').click()
  cy.contains('Excluir negócio').click()
  cy.contains('Confirmar').click()
})