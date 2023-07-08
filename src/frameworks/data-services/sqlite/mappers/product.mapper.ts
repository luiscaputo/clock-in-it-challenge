import { Product } from '@core/entities/product.entity';
import { Products } from '@frameworks/data-services/models/Products';
import { Injectable } from '@nestjs/common';

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
