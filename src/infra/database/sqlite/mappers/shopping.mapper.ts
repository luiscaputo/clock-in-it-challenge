import { Shopping } from 'src/app/entities/shopping.entity';
import { Injectable } from '@nestjs/common';
import { Shoppings } from '@infra/database/models/Shoppings';

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
