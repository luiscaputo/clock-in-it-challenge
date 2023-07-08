import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { CategoryUseCasesModule } from './use-cases';
import { DatabaseModule } from '@frameworks/data-services/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '@frameworks/data-services/sqlite/data.source';
import { AppController } from '@controllers/app.controller';
import { CategoryController } from '@controllers/category.controller';
import { ClientUseCasesModule } from '@use-cases/client/client-use-cases.module';
import { ClientController } from '@controllers/client.controller';
import { ProductController } from '@controllers/product.controller';
import { ProductUseCasesModule } from '@use-cases/product/product-use-cases.module';
import { ShoppingUseCasesModule } from '@use-cases/shopping/shopping-use-cases.module';
import { ShoppingController } from '@controllers/shopping.controller';

@Module({
  imports: [
    CategoryUseCasesModule,
    ClientUseCasesModule,
    ProductUseCasesModule,
    ShoppingUseCasesModule,
    DatabaseModule,
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  controllers: [
    AppController,
    CategoryController,
    ClientController,
    ProductController,
    ShoppingController,
  ],
  providers: [AppService],
})
export class AppModule {}
