import { fakeContact } from '../../support/fakeContact'

describe('CRUD Contacts', () => {
  beforeEach(() => cy.login())

  it('CRUD a contact', () => {
    const contactSelector = 'new-contact-page-side-menu div'

    cy.gui_createCustomer(fakeContact)
    cy.contains(contactSelector, fakeContact.name)
      .should('be.visible')

    cy.gui_readCustomer(fakeContact)

    const updatedContactName = `Atualizado ${fakeContact.name}`
    cy.gui_updateCustomer(updatedContactName)
    cy.contains(contactSelector, updatedContactName)
      .should('be.visible')

    cy.gui_deleteCustomer(updatedContactName)
    cy.contains('.toast-success', 'Sucesso!').should('be.visible')
  })
})
