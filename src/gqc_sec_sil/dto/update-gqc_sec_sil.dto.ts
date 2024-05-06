import { PartialType } from '@nestjs/mapped-types';
import { CreateGqcSecSilDto } from './create-gqc_sec_sil.dto';

export class UpdateGqcSecSilDto extends PartialType(CreateGqcSecSilDto) {}
