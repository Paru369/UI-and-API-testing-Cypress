

Cypress.on('uncaught:exception', (err, runnable) => {
  
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

import 'cypress-plugin-api'
import './gui_commands'
import './api_commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')