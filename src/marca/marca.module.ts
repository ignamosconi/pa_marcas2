import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './marca.entity';
import { MarcaController } from './marca.controller'; // <-- agregar
import { MarcaService } from './marca.service';       // <-- agregar
import { MarcaRepository } from './repositories/marca.repository';
import { MarcaValidator } from './validators/marca.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  controllers: [MarcaController],
  providers: [
    MarcaService,
    MarcaRepository,
    MarcaValidator,             
    {
      provide: 'IMarcaRepository',    // Archivo <repositories/marca.repository.interface.ts>
      useExisting: MarcaRepository,   // Archivo <repositories/marca.repository.ts>
    },
  ],
  exports: [MarcaRepository],
})
export class MarcaModule {}