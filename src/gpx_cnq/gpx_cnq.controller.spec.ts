import { Test, TestingModule } from '@nestjs/testing';
import { GpxCnqController } from './gpx_cnq.controller';
import { GpxCnqService } from './gpx_cnq.service';

describe('GpxCnqController', () => {
  let controller: GpxCnqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GpxCnqController],
      providers: [GpxCnqService],
    }).compile();

    controller = module.get<GpxCnqController>(GpxCnqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
