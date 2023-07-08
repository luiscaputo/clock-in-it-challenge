import { Category } from 'src/app/entities/category.entity';

export abstract class ICategoryRepository {
  abstract create(item: Category): Promise<Category>;
  abstract getAll(): Promise<Category[]>;
}
