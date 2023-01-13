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
      url: `https://api2.ploomes.com/Contacts(${res.body.value[4].Id})`,
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







