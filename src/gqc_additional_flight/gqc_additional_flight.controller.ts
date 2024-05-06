import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GqcAdditionalFlightService } from './gqc_additional_flight.service';
import { CreateGqcAdditionalFlightDto } from './dto/create-gqc_additional_flight.dto';
import { UpdateGqcAdditionalFlightDto } from './dto/update-gqc_additional_flight.dto';
import { GqcAdditionalFlight } from './entities/gqc_additional_flight.entity';

@Controller('gqc-additional-flight')
export class GqcAdditionalFlightController {
  constructor(private readonly gqcAdditionalFlightService: GqcAdditionalFlightService) {}

  @Post()
  create(@Body() gqcadditionalflight: GqcAdditionalFlight) {
    return this.gqcAdditionalFlightService.create(gqcadditionalflight);
  }

  @Get()
  findAll() {
    return this.gqcAdditionalFlightService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gqcAdditionalFlightService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGqcAdditionalFlightDto: UpdateGqcAdditionalFlightDto) {
    return this.gqcAdditionalFlightService.update(+id, updateGqcAdditionalFlightDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gqcAdditionalFlightService.remove(+id);
  }
}
