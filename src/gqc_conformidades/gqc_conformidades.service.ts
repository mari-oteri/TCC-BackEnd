import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGqcConformidadeDto } from './dto/create-gqc_conformidade.dto';
import { UpdateGqcConformidadeDto } from './dto/update-gqc_conformidade.dto';
import { GqcConformidades } from './entities/gqc_conformidade.entity';

@Injectable()
export class GqcConformidadesService {
  constructor(
    @InjectRepository(GqcConformidades)
    private gqcConformidadeRepository: Repository<GqcConformidades>,
  ) {}

  async create(GqcConformidades: GqcConformidades) {
    return await this.gqcConformidadeRepository.save(GqcConformidades);
  }

  async findAll() {
    return await this.gqcConformidadeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} GqcConformidades`;
  }

  update(id: number, updateGqcConformidadeDto: UpdateGqcConformidadeDto) {
    return `This action updates a #${id} GqcConformidades`;
  }

  remove(id: number) {
    return `This action removes a #${id} GqcConformidades`;
  }
}
