import { Products } from '@infra/database/models/Products';
import { Product } from 'src/app/entities/product.entity';

export abstract class IProductRepository {
  abstract get({ id }: { id: string }): Promise<Products | null>;
  abstract getAll(): Promise<Product[]>;
  abstract create(item: Product): Promise<Products>;
  abstract update(id: string, item: Product): Promise<Product | null>;
  abstract delete({ id }: { id: string }): Promise<void>;
}
