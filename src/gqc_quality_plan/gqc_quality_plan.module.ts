import { Module } from '@nestjs/common';
import { GqcQualityPlanService } from './gqc_quality_plan.service';
import { GqcQualityPlanController } from './gqc_quality_plan.controller';
import { GqcQualityPlan } from './entities/gqc_quality_plan.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GqcQualityPlan])],
  controllers: [GqcQualityPlanController],
  providers: [GqcQualityPlanService],
})
export class GqcQualityPlanModule {}
