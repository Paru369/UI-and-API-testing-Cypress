import { faker } from '@faker-js/faker'

export class ContactDataFaker {
    
   contactData(){
    const contacData = {
        name: `QA ${faker.name.fullName()}`,
        phone: `119${faker.random.numeric(8)}`,
        email: faker.internet.exampleEmail(),
        cpf: `${genCpf(false)}`
      }
      return contacData
    }
};

function geraRandom(n) {
    const ranNum = Math.round(Math.random() * n);
    return ranNum;
}

function genCpf(mask) {
    const n = 9;
    const n1 = geraRandom(n);
    const n2 = geraRandom(n);
    const n3 = geraRandom(n);
    const n4 = geraRandom(n);
    const n5 = geraRandom(n);
    const n6 = geraRandom(n);
    const n7 = geraRandom(n);
    const n8 = geraRandom(n);
    const n9 = geraRandom(n);
    let d1 = n9 * 2 +
        n8 * 3 +
        n7 * 4 +
        n6 * 5 +
        n5 * 6 +
        n4 * 7 +
        n3 * 8 +
        n2 * 9 +
        n1 * 10;
    d1 = 11 - mod(d1, 11);
    if (d1 >= 10)
        d1 = 0;
    let d2 = d1 * 2 +
        n9 * 3 +
        n8 * 4 +
        n7 * 5 +
        n6 * 6 +
        n5 * 7 +
        n4 * 8 +
        n3 * 9 +
        n2 * 10 +
        n1 * 11;
    d2 = 11 - mod(d2, 11);
    if (d2 >= 10)
        d2 = 0;
    if (mask)
        return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`;
    return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`;
}

function mod(dividendo, divisor) {
    return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
}
