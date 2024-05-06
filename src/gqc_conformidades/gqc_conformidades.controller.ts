import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GqcConformidadesService } from './gqc_conformidades.service';
import { CreateGqcConformidadeDto } from './dto/create-gqc_conformidade.dto';
import { UpdateGqcConformidadeDto } from './dto/update-gqc_conformidade.dto';
import { GqcConformidades } from './entities/gqc_conformidade.entity';

@Controller('gqc-conformidades')
export class GqcConformidadesController {
  constructor(private readonly gqcConformidadesService: GqcConformidadesService) {}

  @Post()
  create(@Body() GqcConformidades: GqcConformidades) {
    return this.gqcConformidadesService.create(GqcConformidades);
  }

  @Get()
  findAll() {
    return this.gqcConformidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gqcConformidadesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGqcConformidadeDto: UpdateGqcConformidadeDto) {
    return this.gqcConformidadesService.update(+id, updateGqcConformidadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gqcConformidadesService.remove(+id);
  }
}
