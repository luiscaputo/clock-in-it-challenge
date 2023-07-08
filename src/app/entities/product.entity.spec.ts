import { faker } from '@faker-js/faker';
import { Product } from './product.entity';

describe('Product', () => {
  it('Should create an instance of new Product', () => {
    const product = new Product({
      name: faker.internet.color(),
      categoryId: faker.datatype.uuid(),
      price: faker.datatype.float(),
      stockQuantity: faker.datatype.number(),
    });
    expect(product).toBeTruthy();
  });
});
