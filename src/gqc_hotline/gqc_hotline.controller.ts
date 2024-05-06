import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GqcHotlineService } from './gqc_hotline.service';
import { CreateGqcHotlineDto } from './dto/create-gqc_hotline.dto';
import { UpdateGqcHotlineDto } from './dto/update-gqc_hotline.dto';
import { GqcHotline } from './entities/gqc_hotline.entity';

@Controller('gqc-hotline')
export class GqcHotlineController {
  constructor(private readonly gqcHotlineService: GqcHotlineService) {}

  @Post()
  create(@Body() gqchotline: GqcHotline) {
    return this.gqcHotlineService.create(gqchotline);
  }

  @Get()
  findAll() {
    return this.gqcHotlineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gqcHotlineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGqcHotlineDto: UpdateGqcHotlineDto) {
    return this.gqcHotlineService.update(+id, updateGqcHotlineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gqcHotlineService.remove(+id);
  }
}
