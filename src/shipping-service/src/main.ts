import 'dotenv/config';
import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { DbContext } from './Infrastructure/DbContext';

async function bootstrap() {
  await DbContext.initialize();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT);

  console.log(`APP started on port ${process.env.PORT}`);
}

bootstrap();
