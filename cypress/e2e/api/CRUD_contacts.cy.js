import { fakeContact } from '../../support/fakeContact'

describe('CRUD Contacts', () => {
  it('Create a contact', () => {
    cy.api_createContact(fakeContact)
      .then(({ status, body }) => {
        expect(status).to.equal(200)
        expect(body.value[0].Name).to.equal(fakeContact.name)
        expect(body.value[0].Email).to.equal(fakeContact.email)
      })
  })

  context('Pre-condition: Create a contact', () => {
    beforeEach(() => {
      cy.api_createContact(fakeContact)
        .as('contact')
    })

    it('Read all contacts', () => {
      cy.api_readAllContacts()
        .its('status')
        .should('be.equal', 200)
    })

    it('Update a contact', () => {
      cy.get('@contact').its('body.value[0].Id')
        .then(contactId => {
          fakeContact.id = contactId
          cy.api_updateContact(fakeContact)
            .its('status')
            .should('be.equal', 200)
        })
    })

    it('Delete a contact', () => {
      cy.get('@contact').its('body.value[0].Id')
        .then(contactId => {
          cy.api_deleteContact(contactId)
            .its('status')
            .should('be.equal', 200)
        })
    })

    it('Delete all contacts', () => {
      cy.api_deleteAllContacts()
        .its('status')
        .should('be.equal', 200)
    })
  })
})
