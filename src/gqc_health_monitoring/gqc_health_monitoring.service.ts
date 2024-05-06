import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGqcHealthMonitoringDto } from './dto/create-gqc_health_monitoring.dto';
import { UpdateGqcHealthMonitoringDto } from './dto/update-gqc_health_monitoring.dto';
import { GqcHealthMonitoring } from './entities/gqc_health_monitoring.entity';

@Injectable()
export class GqcHealthMonitoringService {
  constructor(
    @InjectRepository(GqcHealthMonitoring)
    private GqcHealthMonitoringRepository: Repository<GqcHealthMonitoring>,
  ) {}
  async create(gqchealthmonitoring: GqcHealthMonitoring) {
    return await this.GqcHealthMonitoringRepository.save(gqchealthmonitoring);
  }

  async findAll() {
    return await this.GqcHealthMonitoringRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gqcHealthMonitoring`;
  }

  update(
    id: number,
    _updateGqcHealthMonitoringDto: UpdateGqcHealthMonitoringDto,
  ) {
    return `This action updates a #${id} gqcHealthMonitoring`;
  }

  remove(id: number) {
    return `This action removes a #${id} gqcHealthMonitoring`;
  }
}
