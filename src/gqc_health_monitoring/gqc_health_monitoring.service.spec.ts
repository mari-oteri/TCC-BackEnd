import { Test, TestingModule } from '@nestjs/testing';
import { GqcHealthMonitoringService } from './gqc_health_monitoring.service';

describe('GqcHealthMonitoringService', () => {
  let service: GqcHealthMonitoringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqcHealthMonitoringService],
    }).compile();

    service = module.get<GqcHealthMonitoringService>(GqcHealthMonitoringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
