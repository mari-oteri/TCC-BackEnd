import { Test, TestingModule } from '@nestjs/testing';
import { GqcHealthMonitoringController } from './gqc_health_monitoring.controller';
import { GqcHealthMonitoringService } from './gqc_health_monitoring.service';

describe('GqcHealthMonitoringController', () => {
  let controller: GqcHealthMonitoringController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GqcHealthMonitoringController],
      providers: [GqcHealthMonitoringService],
    }).compile();

    controller = module.get<GqcHealthMonitoringController>(GqcHealthMonitoringController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
