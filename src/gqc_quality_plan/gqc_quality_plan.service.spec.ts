import { Test, TestingModule } from '@nestjs/testing';
import { GqcQualityPlanService } from './gqc_quality_plan.service';

describe('GqcQualityPlanService', () => {
  let service: GqcQualityPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqcQualityPlanService],
    }).compile();

    service = module.get<GqcQualityPlanService>(GqcQualityPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
