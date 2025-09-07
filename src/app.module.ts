import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaModule } from './marca/marca.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,             //3306 para MySQL
      username: 'postgres',  //Ponemos la bd que usemos, en este caso yo uso la por defecto
      password: '1234',
      database: 'marcas',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Solo para desarrollo. Deuda técnica
    }),
    MarcaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}