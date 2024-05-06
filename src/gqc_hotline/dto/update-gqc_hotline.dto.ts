import { PartialType } from '@nestjs/mapped-types';
import { CreateGqcHotlineDto } from './create-gqc_hotline.dto';

export class UpdateGqcHotlineDto extends PartialType(CreateGqcHotlineDto) {}
