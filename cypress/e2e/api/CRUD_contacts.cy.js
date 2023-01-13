import { faker } from '@faker-js/faker'

describe('Create, Read, Update and Delete Contacts', () => {

  const contacData = {
    name: `QA ${faker.name.fullName()}`,
    phone: `119${faker.random.numeric(8)}`,
    email: faker.internet.exampleEmail()
  }

  Cypress._.times(1, () => {
    it('Create a contact', () => {

      cy.api_createContact(contacData)
        .then(response => {
          cy.log(response.body.value[0].Id)
          expect(response.status).to.equal(200)
          expect(response.body.value[0].Name).to.equal(contacData.name)
          expect(response.body.value[0].Email).to.equal(contacData.email)
        })

    })

  })

  it('Read and contact all contacts in cypress log', () => {

    cy.api_readAllContacts()
      .then(response => {
        expect(response.status).to.equal(200)
        cy.log(`Total of contacts is ${(response.body.value.length)},
        the first is "${(response.body.value[0].Name)}" and the last
        is "${(response.body.value[response.body.value.length - 1].Name)}"`)

      })
  })

  it('Update a contact', () => {

    cy.api_updateContact(contacData)
      .then(response => {
        expect(response.status).to.equal(200)
        cy.log(response.body.value[0].Name, response.body.value[0].Email,)

      })
  })


  it('Delete one contact', () => {

    cy.api_deleteOneContact().then(response => {
      expect(response.status).to.equal(200)
    })
  })

  it('Delete all contacts', () => {

    cy.api_deleteAllContacts().then(response => {
      expect(response.status).to.equal(200)
    })
  })


})