import { faker } from '@faker-js/faker'

describe('Create, Read, Update and Delete Contacts', () => {
  beforeEach(() => {
    cy.login()
  })

  const customerData = {
    name: `QA ${faker.name.fullName()}`,
    employ: faker.commerce.productName(),
    phone: `119${faker.random.numeric(8)}`,
    email: faker.internet.exampleEmail(),
    position: `cargo ${faker.commerce.productAdjective()}`,
    department: `departamento -${faker.commerce.department()}`,
  }

  it('Create a contact', () => {

    cy.gui_createCustomer(customerData)
    cy.contains(customerData.name).should('be.visible')
  })


  it('Read and contact ', () => {

    cy.gui_readCustomer(customerData.name)
    cy.contains(customerData.name).should('be.visible')

  })

  it('Update a contact', () => {

    const newName = `Novo QA ${faker.name.firstName()}`
    cy.gui_updateCustomer(customerData.name, newName)
    cy.contains(newName).should('be.visible')

  })


  it('Delete one contact', () => {


    cy.gui_deleteCustomer('Novo QA')
    cy.contains('Sucesso!').should('be.visible')
  })
})

