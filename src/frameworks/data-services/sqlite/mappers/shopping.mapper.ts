import { Shopping } from '@core/entities/shopping.entity';
import { Shoppings } from '@frameworks/data-services/models/Shoppings';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeOrmShoppingMapper {
  static toTypeorm(shopping: Shopping) {
    return {
      id: shopping.id,
      clientId: shopping.clientId,
      productId: shopping.productId,
      quantity: shopping.quantity,
      total: shopping.total,
      createdAt: shopping.createdAt,
    };
  }

  static toDomain(raw: Shoppings): Shopping {
    return new Shopping(
      {
        clientId: raw.client,
        productId: raw.product,
        quantity: raw.quantity,
        total: raw.total,
      },
      raw.id,
    );
  }
}
