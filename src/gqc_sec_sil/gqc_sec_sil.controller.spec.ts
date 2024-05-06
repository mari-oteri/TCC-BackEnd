import { Test, TestingModule } from '@nestjs/testing';
import { GqcSecSilController } from './gqc_sec_sil.controller';
import { GqcSecSilService } from './gqc_sec_sil.service';

describe('GqcSecSilController', () => {
  let controller: GqcSecSilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GqcSecSilController],
      providers: [GqcSecSilService],
    }).compile();

    controller = module.get<GqcSecSilController>(GqcSecSilController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
