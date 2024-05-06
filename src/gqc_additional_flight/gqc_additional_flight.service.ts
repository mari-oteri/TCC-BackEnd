import { Injectable } from '@nestjs/common';
import { CreateGqcAdditionalFlightDto } from './dto/create-gqc_additional_flight.dto';
import { UpdateGqcAdditionalFlightDto } from './dto/update-gqc_additional_flight.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GqcAdditionalFlight } from './entities/gqc_additional_flight.entity';

@Injectable()
export class GqcAdditionalFlightService {
  constructor(
    @InjectRepository(GqcAdditionalFlight)
    private GqcAdditionalFlightRepository: Repository<GqcAdditionalFlight>,
  ) {}
  async create(gqcaddtionalflight: GqcAdditionalFlight) {
    return this.GqcAdditionalFlightRepository.save(gqcaddtionalflight);
  }

  async findAll() {
    return await this.GqcAdditionalFlightRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gqcAdditionalFlight`;
  }

  update(
    id: number,
    _updateGqcAdditionalFlightDto: UpdateGqcAdditionalFlightDto,
  ) {
    return `This action updates a #${id} gqcAdditionalFlight`;
  }

  remove(id: number) {
    return `This action removes a #${id} gqcAdditionalFlight`;
  }
}
