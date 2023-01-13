
import { dealDataFaker } from "../helpers/data/deal/dealsFaker"
const dealData = dealDataFaker


describe('Create, Read, Update and Delete Deals', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Create a deal', () => {
    cy.gui_createDeal(dealData)
    cy.contains(dealData.title).should('be.visible')
  })

  it('Read a deal', () => {
    cy.gui_readDeal(dealData.title)
    cy.contains(dealData.title).should('be.visible')
  })

  it('Update a deal', () => {
    const updatedeDeal = dealDataFaker
    cy.gui_updateDeal(dealData.title, updatedeDeal.title)
    cy.contains(updatedeDeal.title).should('be.visible')
  })

  it('Delete a deal', () => {
    cy.gui_deleteDeal('deal')
    cy.contains('Sucesso!').should('be.visible')
  })
})


