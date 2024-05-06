import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGqcQualityPlanDto } from './dto/create-gqc_quality_plan.dto';
import { UpdateGqcQualityPlanDto } from './dto/update-gqc_quality_plan.dto';
import { GqcQualityPlan } from './entities/gqc_quality_plan.entity';

@Injectable()
export class GqcQualityPlanService {
  constructor(
    @InjectRepository(GqcQualityPlan)
    private GqcQualityPlanRepository: Repository<GqcQualityPlan>,
  ) {}
  async create(gqcqualityplan: GqcQualityPlan) {
    return await this.GqcQualityPlanRepository.save(gqcqualityplan);
  }

  async findAll() {
    return await this.GqcQualityPlanRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gqcQualityPlan`;
  }

  update(id: number, updateGqcQualityPlanDto: UpdateGqcQualityPlanDto) {
    return `This action updates a #${id} gqcQualityPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} gqcQualityPlan`;
  }
}
