import { DatabaseModule } from '@frameworks/data-services/database.module';
import { Module } from '@nestjs/common';
import { ProductFactoryService } from './product-factory.service';
import { ProductUseCases } from './product.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [ProductFactoryService, ProductUseCases],
  exports: [ProductFactoryService, ProductUseCases],
})
export class ProductUseCasesModule {}
