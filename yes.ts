import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';

// Definimos el test suite
describe('HelloController', () => {
  let controller: HelloController; // Variable para almacenar la instancia del controlador

  // Nos aseguramos que el entorno inicie limpio.
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController], // Registramos sólo el controlador (sin dependencias)
    }).compile(); // Compilamos el módulo para obtener las instancias

    // Obtenemos la instancia del controlador desde el módulo
    controller = module.get<HelloController>(HelloController);
  });

  // Verificamos que el controlador se haya instanciado correctamente
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Llama al método getHello y espera que retorne el string "Hello, World!"
  it('should return "Hello, World!"', () => {
    expect(controller.getHello()).toBe('Hello, World!');
  });
});