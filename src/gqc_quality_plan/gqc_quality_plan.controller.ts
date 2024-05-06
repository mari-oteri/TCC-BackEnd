import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GqcQualityPlanService } from './gqc_quality_plan.service';
import { CreateGqcQualityPlanDto } from './dto/create-gqc_quality_plan.dto';
import { UpdateGqcQualityPlanDto } from './dto/update-gqc_quality_plan.dto';
import { GqcQualityPlan } from 'src/gqc_quality_plan/entities/gqc_quality_plan.entity';

@Controller('gqc-quality-plan')
export class GqcQualityPlanController {
  constructor(private readonly gqcQualityPlanService: GqcQualityPlanService) {}

  @Post()
  create(@Body() gqcqualityplan: GqcQualityPlan) {
    return this.gqcQualityPlanService.create(gqcqualityplan);
  }

  @Get()
  findAll() {
    return this.gqcQualityPlanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gqcQualityPlanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGqcQualityPlanDto: UpdateGqcQualityPlanDto) {
    return this.gqcQualityPlanService.update(+id, updateGqcQualityPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gqcQualityPlanService.remove(+id);
  }
}
