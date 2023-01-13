const accessToken = `${Cypress.env('ploomes_API_key')}`


Cypress.Commands.add('api_createContact', contacData => {
  cy.request({
    method: 'POST',
    url: `https://api2.ploomes.com/Contacts`,
    body: {
      "Name": contacData.name,
      "Email": contacData.email,
      "Phones": [
        {
          "PhoneNumber": contacData.phone,
          "TypeId": 0,
          "CountryId": 0
        }
      ]
    },
    headers: { 'user-key': accessToken },
  })
})

Cypress.Commands.add('api_readAllContacts', () => {
  cy.request({
    method: 'GET',
    url: `https://api2.ploomes.com/Contacts`,
    headers: { 'user-key': accessToken },
  })

})

Cypress.Commands.add('api_updateContact', newContacData => {
  cy.api_readAllContacts().then(res => {
    cy.request({
      method: 'PATCH',
      url: `https://api2.ploomes.com/Contacts(${res.body.value[0].Id})`,
      body: {
        "Name": `Update Name ${newContacData.name}`,
        "Email": `New-Email-${newContacData.email}`,
      },
      headers: { 'user-key': accessToken },
    })
  })
})

Cypress.Commands.add('api_deleteOneContact', () => {
  cy.api_readAllContacts().then(res => {
    cy.request({
      method: 'DELETE',
      url: `https://api2.ploomes.com/Contacts(${res.body.value[0].Id})`,
      headers: { 'user-key': accessToken }
    })
  })
})

Cypress.Commands.add('api_deleteAllContacts', () => {
  cy.api_readAllContacts().then(res =>
    res.body.value.forEach(contact => cy.request({
      method: 'DELETE',
      url: `https://api2.ploomes.com/Contacts(${contact.Id})`,
      headers: { 'user-key': accessToken },
    }))
  )
})

Cypress.Commands.add('api_createDeal', dealData => {
  cy.request({
    method: 'POST',
    url: `https://api2.ploomes.com/Deals`,
    body: {
      "Title": dealData.title,
      "Amount": dealData.amount,
    },
    headers: { 'user-key': accessToken },
  })
})

Cypress.Commands.add('api_readAllDeals', () => {
  cy.request({
    method: 'GET',
    url: `https://api2.ploomes.com/Deals`,
    headers: { 'user-key': accessToken },
  })

})

Cypress.Commands.add('api_updateDeal', newDealData => {
  cy.api_readAllDeals().then(res => {
    cy.request({
      method: 'PATCH',
      url: `https://api2.ploomes.com/Deals(${res.body.value[0].Id})`,
      body: {
        "Title": `Update Title ${newDealData.title}`,
        "Amount": 2000 + newDealData.amount,
      },
      headers: { 'user-key': accessToken },
    })
  })
})

Cypress.Commands.add('api_deleteOneDeal', () => {
  cy.api_readAllDeals().then(res => {
    cy.request({
      method: 'DELETE',
      url: `https://api2.ploomes.com/Deals(${res.body.value[0].Id})`,
      headers: { 'user-key': accessToken }
    })
  })
})

Cypress.Commands.add('api_deleteAllDeals', () => {
  cy.api_readAllDeals().then(res =>
    res.body.value.forEach(deal => cy.request({
      method: 'DELETE',
      url: `https://api2.ploomes.com/Deals(${deal.Id})`,
      headers: { 'user-key': accessToken },
    }))
  )
})

Cypress.Commands.add('api_createLead', lead => {
  cy.request({
    method: 'POST',
    url: `https://api2.ploomes.com/Leads`,
    body: {
      "CompanyName": lead.companyName,
      "PersonName": lead.personName,
      "Origin": lead.origin
    },
    headers: { 'user-key': accessToken },
  })
})

Cypress.Commands.add('api_readAllLeads', () => {
  cy.request({
    method: 'GET',
    url: `https://api2.ploomes.com/Leads`,
    headers: { 'user-key': accessToken },
  })

})

Cypress.Commands.add('api_updateLead', news => {
  cy.api_readAllLeads().then(res => {
    cy.request({
      method: 'PATCH',
      url: `https://api2.ploomes.com/Leads(${res.body.value[0].Id})`,
      body: {
        "CompanyName": `Update Name ${news.companyName}`,
        "PersonName": `New-Email-${news.personName}`
      },
      headers: { 'user-key': accessToken },
    })
  })
})

Cypress.Commands.add('api_deleteOneLead', () => {
  cy.api_readAllLeads().then(res => {
    cy.request({
      method: 'DELETE',
      url: `https://api2.ploomes.com/Leads(${res.body.value[0].Id})`,
      headers: { 'user-key': accessToken }
    })
  })
})

Cypress.Commands.add('api_deleteAllLeads', () => {
  cy.api_readAllLeads().then(res =>
    res.body.value.forEach(lead => cy.request({
      method: 'DELETE',
      url: `https://api2.ploomes.com/Leads(${lead.Id})`,
      headers: { 'user-key': accessToken },
    }))
  )
})





