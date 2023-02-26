import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClassSerializerInterceptor,
  INestApplication,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppConfigService } from './config/app/config.service';
import { MikroORM } from '@mikro-orm/core';

function initSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('baupal')
    .setDescription('API for Renovation Request Platform')
    .setVersion('1.0')
    .addTag('renovation-request-platform')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true,
      whitelist: true,
    }),
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(new Reflector()));
  app.enableShutdownHooks();
  initSwagger(app);
  await app.listen(app.get(AppConfigService).port);
}

bootstrap().catch((e) =>
  console.error(`Cannot start server due to error: ${e}`),
);
