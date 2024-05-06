import { Module } from '@nestjs/common';
import { GpxCnqService } from './gpx_cnq.service';
import { GpxCnqController } from './gpx_cnq.controller';
import { GpxCnq } from './entities/gpx_cnq.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GpxCnq])],
  controllers: [GpxCnqController],
  providers: [GpxCnqService],
})
export class GpxCnqModule {}
