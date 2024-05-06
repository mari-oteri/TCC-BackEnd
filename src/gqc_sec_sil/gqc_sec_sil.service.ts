import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateGqcSecSilDto } from './dto/update-gqc_sec_sil.dto';
import { GqcSecSil } from './entities/gqc_sec_sil.entity';

@Injectable()
export class GqcSecSilService {
  constructor(
    @InjectRepository(GqcSecSil)
    private GqcSecSilRepository: Repository<GqcSecSil>,
  ) {}
  async create(gqcsecil: GqcSecSil) {
    return await this.GqcSecSilRepository.save(gqcsecil);
  }

  async findAll() {
    return await this.GqcSecSilRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gqcSecSil`;
  }

  update(id: number, updateGqcSecSilDto: UpdateGqcSecSilDto) {
    return `This action updates a #${id} gqcSecSil`;
  }

  remove(id: number) {
    return `This action removes a #${id} gqcSecSil`;
  }
}
