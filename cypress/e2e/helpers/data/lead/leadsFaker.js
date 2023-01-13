import { faker } from '@faker-js/faker';
export const leadDataFaker = {
    companyName: faker.commerce.productAdjective(),
    personName: faker.name.firstName(),
    origin: faker.internet.domainName()
    
    }
      