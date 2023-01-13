import { leadDataFaker } from "../helpers/data/lead/leadsFaker"
const leadData = leadDataFaker

describe('Create, Read, Update and Delete Leads', () => {



  Cypress._.times(1, () => {
    it.only('Create a lead', () => {

      cy.api_createLead(leadData)
        .then(response => {
          cy.log(response.body.value[0].Id)
          expect(response.status).to.equal(200)
          expect(response.body.value[0].CompanyName).to.equal(leadData.companyName)
          expect(`${response.body.value[0].PersonName}`).to.equal(leadData.personName)
          expect(`${response.body.value[0].Origin}`).to.equal(leadData.origin)
        })

    })

  })

  it.only('Read all leads and log', () => {

    cy.api_readAllLeads()
      .then(response => {
        expect(response.status).to.equal(200)
        cy.log(`Total of leads is ${(response.body.value.length)},
        the first is "${(response.body.value[0].PersonName)}" and the last
        is "${(response.body.value[response.body.value.length - 1].PersonName)}"`)

      })
  })

  it.only('Update a lead', () => {

    cy.api_updateLead(leadData)
      .then(response => {
        expect(response.status).to.equal(200)
        cy.log(response.body.value[0].CompanyName, response.body.value[0].PersonName,)

      })
  })


  it.only('Delete one lead', () => {

    cy.api_deleteOneLead().then(response => {
      expect(response.status).to.equal(200)
    })
  })

  it.only('Delete all lead', () => {

    cy.api_deleteAllLeads().then(response => {
      expect(response.status).to.equal(200)
    })
  })


})