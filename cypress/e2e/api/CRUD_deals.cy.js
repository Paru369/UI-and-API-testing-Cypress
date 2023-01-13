import { dealDataFaker } from "../helpers/data/deal/dealsFaker"

const dealData = dealDataFaker

describe('Create, Read, Update and Delete Deals', () => {


  Cypress._.times(1, () => {
    it('Create a deal', () => {

      cy.api_createDeal(dealData)
        .then(response => {
          cy.log(response.body.value[0].Id)
          expect(response.status).to.equal(200)
          expect(response.body.value[0].Title).to.equal(dealData.title)
          expect(`${response.body.value[0].Amount}`).to.equal(dealData.amount)
        })

    })

  })

  it('Read and deal all deal in cypress log', () => {

    cy.api_readAllDeals()
      .then(response => {
        expect(response.status).to.equal(200)
        cy.log(`Total of deals is ${(response.body.value.length)},
        the first is "${(response.body.value[0].Title)}" and the last
        is "${(response.body.value[response.body.value.length - 1].Title)}"`)

      })
  })

  it('Update a deal', () => {
    const updatedeDeal = dealDataFaker

    cy.api_updateDeal(updatedeDeal)
      .then(response => {
        expect(response.status).to.equal(200)
        cy.log(response.body.value[0].Title, response.body.value[0].Amount,)

      })
  })


  it('Delete one deal', () => {

    cy.api_deleteOneDeal().then(response => {
      expect(response.status).to.equal(200)
    })
  })

  it('Delete all deals', () => {

    cy.api_deleteAllDeals().then(response => {
      expect(response.status).to.equal(200)
    })
  })


})