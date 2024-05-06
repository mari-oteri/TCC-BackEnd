import { Test, TestingModule } from '@nestjs/testing';
import { GqcQualityPlanController } from './gqc_quality_plan.controller';
import { GqcQualityPlanService } from './gqc_quality_plan.service';

describe('GqcQualityPlanController', () => {
  let controller: GqcQualityPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GqcQualityPlanController],
      providers: [GqcQualityPlanService],
    }).compile();

    controller = module.get<GqcQualityPlanController>(GqcQualityPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
