import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppDataSource } from '@infra/database/sqlite/data.source';
import { API_VERSION } from '@helpers/versions';

AppDataSource.initialize();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Clockit Challenge')
    .setDescription('This is the API documentation for the Clockit Challenge.')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`api/${API_VERSION.v1}/docs`, app, document);

  await app.listen(3000);
}

bootstrap();
