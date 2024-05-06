import { Injectable } from '@nestjs/common';
import { CreateGqcCnqCoreetiveActionObeyaGqcDto } from './dto/create-gqc_cnq_coreetive_action_obeya_gqc.dto';
import { UpdateGqcCnqCoreetiveActionObeyaGqcDto } from './dto/update-gqc_cnq_coreetive_action_obeya_gqc.dto';
import { Repository } from 'typeorm';
import { GqcCnqCoreetiveActionObeyaGqc } from './entities/gqc_cnq_coreetive_action_obeya_gqc.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GqcCnqCoreetiveActionObeyaGqcService {
  constructor(
    @InjectRepository(GqcCnqCoreetiveActionObeyaGqc)
    private GqcCnqCoreetiveActionObeyaGqcRepository: Repository<GqcCnqCoreetiveActionObeyaGqc>,
  ) {}

  async create(gqccnqcorretiveactionobeyagqc: GqcCnqCoreetiveActionObeyaGqc) {
    return await this.GqcCnqCoreetiveActionObeyaGqcRepository.save(
      gqccnqcorretiveactionobeyagqc,
    );
  }

  async findAll() {
    return await this.GqcCnqCoreetiveActionObeyaGqcRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gqcCnqCoreetiveActionObeyaGqc`;
  }

  update(
    id: number,
    _updateGqcCnqCoreetiveActionObeyaGqcDto: UpdateGqcCnqCoreetiveActionObeyaGqcDto,
  ) {
    return `This action updates a #${id} gqcCnqCoreetiveActionObeyaGqc`;
  }

  remove(id: number) {
    return `This action removes a #${id} gqcCnqCoreetiveActionObeyaGqc`;
  }
}
