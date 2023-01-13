import { faker } from '@faker-js/faker'

describe('Create, Read, Update and Delete Deals', () => {
  beforeEach(() => {
    cy.login()
  })

  const dealData = {
    title: `QA deal ${faker.commerce.productAdjective()}`,
    value: faker.random.numeric(6),
    client: `QA ${faker.name.firstName()}`,
    mark: faker.commerce.productMaterial(),
    origin: faker.company.name()
  }

  it('Create a deal', () => {
    cy.gui_createDeal(dealData)
    cy.contains(dealData.title).should('be.visible')
  })


  it('Read a deal', () => {
    cy.gui_readDeal(dealData.title)
    cy.contains(dealData.title).should('be.visible')

  })

  it('Update a deal', () => {
    const newTitle = `QA deal ${faker.commerce.productAdjective()}`
    cy.gui_updateDeal(dealData.title, newTitle)
    cy.contains(newTitle).should('be.visible')

  })

  it('Delete a deal', () => {
    cy.gui_deleteDeal('deal')
    cy.contains('Sucesso!').should('be.visible')
  })
})


