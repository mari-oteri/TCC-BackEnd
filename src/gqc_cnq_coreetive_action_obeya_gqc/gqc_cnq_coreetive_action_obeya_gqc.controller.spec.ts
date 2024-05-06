import { Test, TestingModule } from '@nestjs/testing';
import { GqcCnqCoreetiveActionObeyaGqcController } from './gqc_cnq_coreetive_action_obeya_gqc.controller';
import { GqcCnqCoreetiveActionObeyaGqcService } from './gqc_cnq_coreetive_action_obeya_gqc.service';

describe('GqcCnqCoreetiveActionObeyaGqcController', () => {
  let controller: GqcCnqCoreetiveActionObeyaGqcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GqcCnqCoreetiveActionObeyaGqcController],
      providers: [GqcCnqCoreetiveActionObeyaGqcService],
    }).compile();

    controller = module.get<GqcCnqCoreetiveActionObeyaGqcController>(GqcCnqCoreetiveActionObeyaGqcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
