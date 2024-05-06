import { PartialType } from '@nestjs/mapped-types';
import { CreateGqcAdditionalFlightDto } from './create-gqc_additional_flight.dto';

export class UpdateGqcAdditionalFlightDto extends PartialType(CreateGqcAdditionalFlightDto) {}
