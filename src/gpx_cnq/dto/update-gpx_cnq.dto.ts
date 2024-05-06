import { PartialType } from '@nestjs/mapped-types';
import { CreateGpxCnqDto } from './create-gpx_cnq.dto';

export class UpdateGpxCnqDto extends PartialType(CreateGpxCnqDto) {}
