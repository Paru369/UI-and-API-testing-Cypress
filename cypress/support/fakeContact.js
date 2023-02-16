const faker = require('faker-br')

const firstName = faker.name.firstName()

export const fakeContact = {
    name: `QA ${firstName} ${faker.name.lastName()}`,
    phone: faker.phone.phoneNumber(),
    email: faker.internet.exampleEmail(firstName),
    cpf: faker.br.cpf()
}
