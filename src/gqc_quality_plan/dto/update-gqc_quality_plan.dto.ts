import { PartialType } from '@nestjs/mapped-types';
import { CreateGqcQualityPlanDto } from './create-gqc_quality_plan.dto';

export class UpdateGqcQualityPlanDto extends PartialType(CreateGqcQualityPlanDto) {}
