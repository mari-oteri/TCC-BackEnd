import { Injectable } from '@nestjs/common';
import { CreateGpxCnqDto } from './dto/create-gpx_cnq.dto';
import { UpdateGpxCnqDto } from './dto/update-gpx_cnq.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GpxCnq } from './entities/gpx_cnq.entity';

@Injectable()
export class GpxCnqService {
  constructor(
    @InjectRepository(GpxCnq)
    private GpxCnqRepository: Repository<GpxCnq>,
  ) {}

  async create(gpxcnq: GpxCnq) {
    return await this.GpxCnqRepository.save(gpxcnq);
  }

  async findAll() {
    return await this.GpxCnqRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gpxCnq`;
  }

  update(id: number, updateGpxCnqDto: UpdateGpxCnqDto) {
    return `This action updates a #${id} gpxCnq`;
  }

  remove(id: number) {
    return `This action removes a #${id} gpxCnq`;
  }
}
