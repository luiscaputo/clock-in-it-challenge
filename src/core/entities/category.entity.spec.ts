import { Category } from './category.entity';

// import { faker } from "@faker-js/faker";
describe('Category', () => {
  it('Should create an instance', () => {
    const category = new Category({
      name: 'string',
    });
    expect(category).toBeTruthy();
  });
});
