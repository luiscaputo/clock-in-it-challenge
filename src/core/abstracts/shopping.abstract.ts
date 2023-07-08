import { Shopping } from '@core/entities/shopping.entity';

export abstract class IShoppingRepository {
  abstract create(item: Shopping): Promise<Shopping>;
  abstract getAll(): Promise<Shopping[]>;
  abstract get(id: string): Promise<Shopping | null>;
  abstract shoppingsByClient(
    clientId: string,
    createdAt?: Date,
    name?: string,
    price?: number,
  ): Promise<any>;
}
