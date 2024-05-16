import { Test, TestingModule } from '@nestjs/testing';
import { DhlService } from './dhl.service';

describe('DhlService', () => {
  let service: DhlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DhlService],
    }).compile();

    service = module.get<DhlService>(DhlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
