import { Test, TestingModule } from '@nestjs/testing';
import { GqcAdditionalFlightController } from './gqc_additional_flight.controller';
import { GqcAdditionalFlightService } from './gqc_additional_flight.service';

describe('GqcAdditionalFlightController', () => {
  let controller: GqcAdditionalFlightController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GqcAdditionalFlightController],
      providers: [GqcAdditionalFlightService],
    }).compile();

    controller = module.get<GqcAdditionalFlightController>(GqcAdditionalFlightController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
