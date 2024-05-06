import { Module } from '@nestjs/common';
import { GqcHealthMonitoringService } from './gqc_health_monitoring.service';
import { GqcHealthMonitoringController } from './gqc_health_monitoring.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GqcHealthMonitoring } from './entities/gqc_health_monitoring.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GqcHealthMonitoring])],
  controllers: [GqcHealthMonitoringController],
  providers: [GqcHealthMonitoringService],
})
export class GqcHealthMonitoringModule {}
