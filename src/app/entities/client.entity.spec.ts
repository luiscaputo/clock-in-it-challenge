import { faker } from '@faker-js/faker';
import { Client } from './client.entity';
import { EmailValidator } from '@helpers/emailValidator';

describe('Client', () => {
  it('Should create an instance', () => {
    const client = new Client({
      name: faker.internet.userName(),
      email: EmailValidator(faker.internet.email())
        ? faker.internet.email()
        : 'Invalid Email',
    });
    expect(client).toBeTruthy();
  });
});
