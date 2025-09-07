import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

//Formato uniforme de timestamp para todos los logs (con control de tipos)
const timestampFormat = winston.format((info) => {
  const rawTimestamp = info.timestamp;

  const date =
    typeof rawTimestamp === 'string' ||
    typeof rawTimestamp === 'number' ||
    rawTimestamp instanceof Date
      ? new Date(rawTimestamp)
      : new Date();

  info.timestamp = date.toLocaleString('es-AR', {
    hour12: false,
  });

  return info;
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            timestampFormat(),
            winston.format.printf(({ context, level, timestamp, message }) => {
              return `${timestamp} [${context ?? 'App'}] ${level}: ${message}`;
            }),
          ),
        }),
        new winston.transports.File({
          filename: 'logs/app.log',
          level: 'info',
          format: winston.format.combine(
            winston.format.timestamp(),
            timestampFormat(),
            winston.format.printf(({ context, level, timestamp, message }) => {
              return `${timestamp} [${context ?? 'App'}] ${level}: ${message}`;
            }),
          ),
        }),
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
          format: winston.format.combine(
            winston.format.timestamp(),
            timestampFormat(),
            winston.format.printf(({ context, level, timestamp, message }) => {
              return `${timestamp} [${context ?? 'App'}] ${level}: ${message}`;
            }),
          ),
        }),
      ],
    }),
  });

  //SWAGGER: Documentación interactiva. Podemos ir a /api para probar los endpoints.
  const config = new DocumentBuilder()
    .setTitle('Mi API')
    .setDescription('Documentación de la API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  // Validaciones globales para DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,            //Esto permite que funcione @Type( () => Number) en paginacion-marca.dto.ts
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();