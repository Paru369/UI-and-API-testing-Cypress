import { faker } from '@faker-js/faker';
export const userData = {
            name: `QA ${faker.name.fullName()}`,
            email: `${faker.internet.exampleEmail()}`,
            password: `${faker.internet.password()}`,
        }
      