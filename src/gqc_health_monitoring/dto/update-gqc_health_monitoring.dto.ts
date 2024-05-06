import { PartialType } from '@nestjs/mapped-types';
import { CreateGqcHealthMonitoringDto } from './create-gqc_health_monitoring.dto';

export class UpdateGqcHealthMonitoringDto extends PartialType(CreateGqcHealthMonitoringDto) {}
