import { Category } from '@core/entities/category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryFactoryService {
  createNewCategory(createNewCategory: Category) {
    return new Category(createNewCategory);
  }
}
