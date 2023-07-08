import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category.controller';
import { ClientController } from './controllers/client.controller';
import { ProductController } from './controllers/product.controller';
import { ShoppingController } from './controllers/shopping.controller';
import {
  CategoryUseCases,
  ClientUseCases,
  ProductUseCases,
  ShoppingUseCases,
} from '@app/use-cases';

@Module({
  imports: [DatabaseModule],
  controllers: [
    CategoryController,
    ClientController,
    ProductController,
    ShoppingController,
  ],
  providers: [
    CategoryUseCases,
    ClientUseCases,
    ProductUseCases,
    ShoppingUseCases,
  ],
})
export class HttpModule {}
