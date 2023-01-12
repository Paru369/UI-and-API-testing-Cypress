import { faker } from '@faker-js/faker'

describe('Clientes: Criar, Localizar, Atualizar e Deletar', () => {
  beforeEach(() => {
    cy.login()
  })

  const customerData = {
    name: `QA ${faker.name.fullName()}`,
    employ: faker.commerce.productName(),  
    phone:`119${faker.random.numeric(8)}`,
    email: faker.internet.exampleEmail(),
    position: `cargo ${faker.commerce.productAdjective()}`,
    department: `departamento -${ faker.commerce.department()}`,
  }

  it('Criar um cliente e confirmar', () => {
  
    cy.gui_createCustomer(customerData)
    cy.contains(customerData.name).should('be.visible')
  })


it('Localizando um cliente por nome', () => {
 
  cy.gui_readCustomer(customerData.name)
  cy.contains(customerData.name).should('be.visible')
  
})

it('Atualizando o nome de um cliente  e confirmar', () => {
 
const newName =  `Novo QA ${faker.name.firstName()}`
cy.gui_updateCustomer(customerData.name, newName)
cy.contains(newName).should('be.visible')
  
})


it('Deletando um cliente', () => {


  cy.gui_deleteCustomer('Novo QA')
  cy.contains('Sucesso!').should('be.visible')
})
})

