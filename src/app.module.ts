import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MarcaModule } from './marca/marca.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // Cargamos .env globalmente
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Configuramos TypeORM para que use ConfigService
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT')!, 10),  //Con "!" le juramos a TS que DB_PORT no es undefined
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,                                // Solo para desarrollo. Deuda técnica
      }),
    }),

    MarcaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
