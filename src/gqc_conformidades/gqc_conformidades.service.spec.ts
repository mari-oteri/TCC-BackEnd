import { Test, TestingModule } from '@nestjs/testing';
import { GqcConformidadesService } from './gqc_conformidades.service';

describe('GqcConformidadesService', () => {
  let service: GqcConformidadesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqcConformidadesService],
    }).compile();

    service = module.get<GqcConformidadesService>(GqcConformidadesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
