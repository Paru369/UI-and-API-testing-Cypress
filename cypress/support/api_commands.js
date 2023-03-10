const accessToken = `${Cypress.env('ploomes_API_key')}`
const contactsApiUrl = `${Cypress.env('apiUrl')}/Contacts`

Cypress.Commands.add('api_createContact', ({ name, email, phone}) => {
  cy.request({
    method: 'POST',
    url: contactsApiUrl,
    body: {
      Name: name,
      Email: email,
      Phones: [
        {
          PhoneNumber: phone,
          TypeId: 0,
          CountryId: 0
        }
      ]
    },
    headers: { 'user-key': accessToken },
  })
})

Cypress.Commands.add('api_readContacts', () => {
  cy.request({
    method: 'GET',
    url: contactsApiUrl,
    headers: { 'user-key': accessToken },
  })
})

Cypress.Commands.add('api_updateContact', ({ id, name, email }) => {
  cy.request({
    method: 'PATCH',
    url: `${contactsApiUrl}(${id})`,
    body: {
      Name: name,
      Email: email,
    },
    headers: { 'user-key': accessToken },
  })
})

Cypress.Commands.add('api_deleteContact', contactId => {
  cy.request({
    method: 'DELETE',
    url: `${contactsApiUrl}(${contactId})`,
    headers: { 'user-key': accessToken }
  })
})

Cypress.Commands.add('api_deleteAllContacts', () => {
  cy.api_readContacts().then(res =>
    res.body.value.forEach(contact => cy.request({
      method: 'DELETE',
      url: `${contactsApiUrl}(${contact.Id})`,
      headers: { 'user-key': accessToken },
    }))
  )
})
