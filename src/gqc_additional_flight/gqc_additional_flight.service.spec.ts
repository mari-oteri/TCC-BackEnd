import { Test, TestingModule } from '@nestjs/testing';
import { GqcAdditionalFlightService } from './gqc_additional_flight.service';

describe('GqcAdditionalFlightService', () => {
  let service: GqcAdditionalFlightService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GqcAdditionalFlightService],
    }).compile();

    service = module.get<GqcAdditionalFlightService>(GqcAdditionalFlightService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
