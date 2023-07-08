import { Shopping } from '@app/entities/shopping.entity';

export class ShoppingViewModel {
  static toHTTP(shopping: Shopping) {
    return {
      id: shopping.id,
      productId: shopping.productId,
      clientId: shopping.clientId,
      quantity: shopping.quantity,
      total: shopping.total,
      createdAt: shopping.createdAt,
    };
  }
}
