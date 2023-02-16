import 'cypress-plugin-api'
import 'cypress-plugin-xhr-toggle'
import './gui_commands'
import './api_commands'

Cypress.on('uncaught:exception', err => {
  if (err.message.includes('angular is not defined')) {
    return false
  }
  if (err.message.includes('Cannot read properties of undefined')) {
    return false
  }
 if (err.message.includes("Unexpected token '<'")) {
    return false
  }
})
