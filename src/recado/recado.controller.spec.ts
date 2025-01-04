/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { RecadoController } from './recado.controller';
import { RecadoService } from './recado.service';

describe('RecadoController', () => {
  let controller: RecadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecadoController],
      providers: [RecadoService],
    }).compile();

    controller = module.get<RecadoController>(RecadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
