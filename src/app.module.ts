import { DatabaseModule } from '@infra/database/database.module';
import { dataSourceOptions } from '@infra/database/sqlite/data.source';
import { HttpModule } from '@infra/http/http.module';
import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
