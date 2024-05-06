import { Test, TestingModule } from '@nestjs/testing';
import { GqcSecSilService } from './gqc_sec_sil.service';

describe('GqcSecSilService', () => {
  let service: GqcSecSilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqcSecSilService],
    }).compile();

    service = module.get<GqcSecSilService>(GqcSecSilService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
