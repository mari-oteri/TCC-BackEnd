import { Test, TestingModule } from '@nestjs/testing';
import { GqcConformidadesController } from './gqc_conformidades.controller';
import { GqcConformidadesService } from './gqc_conformidades.service';

describe('GqcConformidadesController', () => {
  let controller: GqcConformidadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GqcConformidadesController],
      providers: [GqcConformidadesService],
    }).compile();

    controller = module.get<GqcConformidadesController>(GqcConformidadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
