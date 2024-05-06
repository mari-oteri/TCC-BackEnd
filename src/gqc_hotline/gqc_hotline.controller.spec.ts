import { Test, TestingModule } from '@nestjs/testing';
import { GqcHotlineController } from './gqc_hotline.controller';
import { GqcHotlineService } from './gqc_hotline.service';

describe('GqcHotlineController', () => {
  let controller: GqcHotlineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GqcHotlineController],
      providers: [GqcHotlineService],
    }).compile();

    controller = module.get<GqcHotlineController>(GqcHotlineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
