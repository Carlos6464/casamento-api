import { Test, TestingModule } from '@nestjs/testing';
import { PresenteService } from './presente.service';

describe('PresenteService', () => {
  let service: PresenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresenteService],
    }).compile();

    service = module.get<PresenteService>(PresenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
