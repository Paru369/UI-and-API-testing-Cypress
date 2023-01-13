import { ContactDataFaker } from "../helpers/data/contact/contactFaker"

const Data =  new ContactDataFaker
const contacData = Data.contactData()


describe('Create, Read, Update and Delete Contacts', () => {
  beforeEach(() => {
    cy.login()
  })


  it('Create a contact', () => {

    cy.gui_createCustomer(contacData)
    cy.contains(contacData.name).should('be.visible')
  })


  it('Read and contact ', () => {

    cy.gui_readCustomer(contacData.name)
    cy.contains(contacData.name).should('be.visible')

  })

  it('Update a contact', () => {

    const updatedContact = Data.contactData()
    cy.gui_updateCustomer(contacData.name, `Novo ${updatedContact.name}`)
    cy.contains(updatedContact.name).should('be.visible')

  })


  it('Delete one contact', () => {


    cy.gui_deleteCustomer('Novo QA')
    cy.contains('Sucesso!').should('be.visible')
  })
})

