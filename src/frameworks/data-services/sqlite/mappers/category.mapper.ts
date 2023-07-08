import { Category } from '@core/entities/category.entity';
import { Categories } from '@frameworks/data-services/models/Categories';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmCategoryMapper {
  static toTypeorm(category: Category) {
    return {
      id: category.id,
      name: category.name,
      createdAt: category.createdAt,
    };
  }

  static toDomain(raw: Categories): Category {
    return new Category(
      {
        name: raw.name ?? '',
      },
      raw.id,
    );
  }
}
