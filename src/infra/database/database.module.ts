import {
  ICategoryRepository,
  IClientRepository,
  IProductRepository,
  IShoppingRepository,
} from 'src/app/abstracts';
import { Module } from '@nestjs/common';
import {
  CategoryRepositoryImpl,
  ClientRepositoryImpl,
  ProductRepositoryImpl,
  ShoppingRepositoryImpl,
} from './sqlite/repositories';

@Module({
  providers: [
    {
      provide: ICategoryRepository,
      useClass: CategoryRepositoryImpl,
    },
    {
      provide: IClientRepository,
      useClass: ClientRepositoryImpl,
    },
    {
      provide: IProductRepository,
      useClass: ProductRepositoryImpl,
    },
    {
      provide: IShoppingRepository,
      useClass: ShoppingRepositoryImpl,
    },
  ],
  exports: [
    ICategoryRepository,
    IClientRepository,
    IProductRepository,
    IShoppingRepository,
  ],
})
export class DatabaseModule {}
