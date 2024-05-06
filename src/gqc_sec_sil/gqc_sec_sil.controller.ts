import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GqcSecSilService } from './gqc_sec_sil.service';
import { CreateGqcSecSilDto } from './dto/create-gqc_sec_sil.dto';
import { UpdateGqcSecSilDto } from './dto/update-gqc_sec_sil.dto';
import { GqcSecSil } from './entities/gqc_sec_sil.entity';

@Controller('gqc-sec-sil')
export class GqcSecSilController {
  constructor(private readonly gqcSecSilService: GqcSecSilService) {}

  @Post()
  create(@Body() gqcsecsil: GqcSecSil) {
    return this.gqcSecSilService.create(gqcsecsil);
  }

  @Get()
  findAll() {
    return this.gqcSecSilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gqcSecSilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGqcSecSilDto: UpdateGqcSecSilDto) {
    return this.gqcSecSilService.update(+id, updateGqcSecSilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gqcSecSilService.remove(+id);
  }
}
