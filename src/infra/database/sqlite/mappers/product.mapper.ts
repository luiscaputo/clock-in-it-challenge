import { Product } from 'src/app/entities/product.entity';
import { Injectable } from '@nestjs/common';
import { Products } from '@infra/database/models/Products';

@Injectable()
export class TypeOrmProductMapper {
  static toTypeorm(product: Product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      stockQuantity: product.stockQuantity,
      createdAt: product.createdAt,
    };
  }

  static toDomain(raw: Products): Product {
    return new Product(
      {
        name: raw.name,
        price: raw.price,
        stockQuantity: Number(raw.stockQuantity),
        categoryId: raw.category.id,
      },
      raw.id,
    );
  }
}
