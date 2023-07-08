import { Product } from '@app/entities/product.entity';

export class ProductViewModel {
  static toHTTP(product: Product) {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      stockQuantity: product.stockQuantity,
      categoryId: product.categoryId,
      createdAt: product.createdAt,
    };
  }
}
