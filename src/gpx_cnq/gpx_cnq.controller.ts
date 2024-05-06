import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GpxCnqService } from './gpx_cnq.service';
import { CreateGpxCnqDto } from './dto/create-gpx_cnq.dto';
import { UpdateGpxCnqDto } from './dto/update-gpx_cnq.dto';
import { GpxCnq } from './entities/gpx_cnq.entity';

@Controller('gpx-cnq')
export class GpxCnqController {
  constructor(private readonly gpxCnqService: GpxCnqService) {}

  @Post()
  create(@Body() gpxcnq: GpxCnq) {
    return this.gpxCnqService.create(gpxcnq);
  }

  @Get()
  findAll() {
    return this.gpxCnqService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gpxCnqService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGpxCnqDto: UpdateGpxCnqDto) {
    return this.gpxCnqService.update(+id, updateGpxCnqDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gpxCnqService.remove(+id);
  }
}
