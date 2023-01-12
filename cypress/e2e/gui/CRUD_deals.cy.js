import { faker } from '@faker-js/faker'

describe('Negocios: Criar, Localizar, Atualizar e Deletar', () => {
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

  it('Criar um negocio e confirmar', () => {

    cy.gui_createDeal(dealData)
    cy.contains(dealData.title).should('be.visible')
  })


  it('Localizando negocio por titulo', () => {

    cy.gui_readDeal(dealData.title)
    cy.contains(dealData.title).should('be.visible')

  })

  it('Atualizar o nome de um negocio  e confirmar', () => {

    const newTitle = `QA deal ${faker.commerce.productAdjective()}`
    cy.gui_updateDeal(dealData.title, newTitle)
    cy.contains(newTitle).should('be.visible')

  })

  
    it('Deletando um negocio', () => {


      cy.gui_deleteDeal('deal')
      cy.contains('Sucesso!').should('be.visible')
    })
  })


