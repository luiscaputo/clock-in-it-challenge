import { Category } from 'src/app/entities/category.entity';
import { Injectable } from '@nestjs/common';
import { Categories } from '@infra/database/models/Categories';

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
