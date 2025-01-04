import { Test, TestingModule } from '@nestjs/testing';
import { PresenteController } from './presente.controller';
import { PresenteService } from './presente.service';

describe('PresenteController', () => {
  let controller: PresenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresenteController],
      providers: [PresenteService],
    }).compile();

    controller = module.get<PresenteController>(PresenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
