import { Test, TestingModule } from '@nestjs/testing';
import { GqcHotlineService } from './gqc_hotline.service';

describe('GqcHotlineService', () => {
  let service: GqcHotlineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqcHotlineService],
    }).compile();

    service = module.get<GqcHotlineService>(GqcHotlineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
