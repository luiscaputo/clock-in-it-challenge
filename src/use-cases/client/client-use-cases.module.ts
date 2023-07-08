import { DatabaseModule } from '@frameworks/data-services/database.module';
import { Module } from '@nestjs/common';
import { ClientFactoryService } from './client-factory.service';
import { ClientUseCases } from './client.use-case';

@Module({
  imports: [DatabaseModule],
  providers: [ClientFactoryService, ClientUseCases],
  exports: [ClientFactoryService, ClientUseCases],
})
export class ClientUseCasesModule {}
