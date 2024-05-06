import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGqcHotlineDto } from './dto/create-gqc_hotline.dto';
import { UpdateGqcHotlineDto } from './dto/update-gqc_hotline.dto';
import { GqcHotline } from './entities/gqc_hotline.entity';

@Injectable()
export class GqcHotlineService {
  constructor(
    @InjectRepository(GqcHotline)
    private GqcHotlineRepository: Repository<GqcHotline>,
  ) {}
  async create(gqchotline: GqcHotline) {
    return this.GqcHotlineRepository.save(gqchotline);
  }

  async findAll() {
    return await this.GqcHotlineRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gqcHotline`;
  }

  update(id: number, updateGqcHotlineDto: UpdateGqcHotlineDto) {
    return `This action updates a #${id} gqcHotline`;
  }

  remove(id: number) {
    return `This action removes a #${id} gqcHotline`;
  }
}
