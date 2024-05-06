import { Test, TestingModule } from '@nestjs/testing';
import { GqcCnqCoreetiveActionObeyaGqcService } from './gqc_cnq_coreetive_action_obeya_gqc.service';

describe('GqcCnqCoreetiveActionObeyaGqcService', () => {
  let service: GqcCnqCoreetiveActionObeyaGqcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqcCnqCoreetiveActionObeyaGqcService],
    }).compile();

    service = module.get<GqcCnqCoreetiveActionObeyaGqcService>(GqcCnqCoreetiveActionObeyaGqcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
