import { Test, TestingModule } from '@nestjs/testing';
import { GpxCnqService } from './gpx_cnq.service';

describe('GpxCnqService', () => {
  let service: GpxCnqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpxCnqService],
    }).compile();

    service = module.get<GpxCnqService>(GpxCnqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
