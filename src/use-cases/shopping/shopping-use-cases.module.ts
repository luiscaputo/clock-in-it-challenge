import { DatabaseModule } from '@frameworks/data-services/database.module';
import { Module } from '@nestjs/common';
import { ShoppingFactoryService } from './shopping-factory.service';
import { ShoppingUseCases } from './shopping.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [ShoppingFactoryService, ShoppingUseCases],
  exports: [ShoppingFactoryService, ShoppingUseCases],
})
export class ShoppingUseCasesModule {}
