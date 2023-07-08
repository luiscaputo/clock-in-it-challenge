import { DatabaseModule } from '@frameworks/data-services/database.module';
import { Module } from '@nestjs/common';
import { CategoryFactoryService } from './category-factory.service';
import { CategoryUseCases } from './category.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [CategoryFactoryService, CategoryUseCases],
  exports: [CategoryFactoryService, CategoryUseCases],
})
export class CategoryUseCasesModule {}
