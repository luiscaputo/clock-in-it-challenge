import { Product } from '@core/entities/product.entity';
import { Products } from '@frameworks/data-services/models/Products';

export abstract class IProductRepository {
  abstract get({ id }: { id: string }): Promise<Products | null>;
  abstract getAll(): Promise<Product[]>;
  abstract create(item: Product): Promise<Products>;
  abstract update(id: string, item: Product): Promise<Product | null>;
  abstract delete({ id }: { id: string }): Promise<void>;
}
