import { fakeContact } from '../../support/fakeContact'

describe('CRUD Contacts', () => {
  beforeEach(() => cy.login())

  it('CRUD a contact', () => {
    cy.gui_createCustomer(fakeContact)
    cy.contains('new-contact-page-side-menu div', fakeContact.name)
      .should('be.visible')

    cy.gui_readCustomer(fakeContact)

    const updatedContactName = `Atualizado ${fakeContact.name}`
    cy.gui_updateCustomer(updatedContactName)
    cy.contains('new-contact-page-side-menu div', updatedContactName)
      .should('be.visible')

    cy.gui_deleteCustomer()
    cy.contains('.toast-success', 'Sucesso!').should('be.visible')
  })
})
