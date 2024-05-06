import { PartialType } from '@nestjs/mapped-types';
import { CreateGqcConformidadeDto } from './create-gqc_conformidade.dto';

export class UpdateGqcConformidadeDto extends PartialType(CreateGqcConformidadeDto) {}
