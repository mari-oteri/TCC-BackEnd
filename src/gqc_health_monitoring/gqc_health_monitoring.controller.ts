import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GqcHealthMonitoringService } from './gqc_health_monitoring.service';
import { CreateGqcHealthMonitoringDto } from './dto/create-gqc_health_monitoring.dto';
import { UpdateGqcHealthMonitoringDto } from './dto/update-gqc_health_monitoring.dto';
import { GqcHealthMonitoring } from './entities/gqc_health_monitoring.entity';

@Controller('gqc-health-monitoring')
export class GqcHealthMonitoringController {
  constructor(private readonly gqcHealthMonitoringService: GqcHealthMonitoringService) {}

  @Post()
  create(@Body() gqchealthmonitoring: GqcHealthMonitoring) {
    return this.gqcHealthMonitoringService.create(gqchealthmonitoring);
  }

  @Get()
  findAll() {
    return this.gqcHealthMonitoringService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gqcHealthMonitoringService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGqcHealthMonitoringDto: UpdateGqcHealthMonitoringDto) {
    return this.gqcHealthMonitoringService.update(+id, updateGqcHealthMonitoringDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gqcHealthMonitoringService.remove(+id);
  }
}
