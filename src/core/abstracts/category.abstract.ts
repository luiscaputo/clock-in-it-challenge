import { Category } from '@core/entities/category.entity';

export abstract class ICategoryRepository {
  abstract create(item: Category): Promise<Category>;
  abstract getAll(): Promise<Category[]>;
}
