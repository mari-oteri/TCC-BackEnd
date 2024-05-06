import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GqcCnqCoreetiveActionObeyaGqcService } from './gqc_cnq_coreetive_action_obeya_gqc.service';
import { CreateGqcCnqCoreetiveActionObeyaGqcDto } from './dto/create-gqc_cnq_coreetive_action_obeya_gqc.dto';
import { UpdateGqcCnqCoreetiveActionObeyaGqcDto } from './dto/update-gqc_cnq_coreetive_action_obeya_gqc.dto';
import { GqcCnqCoreetiveActionObeyaGqc } from './entities/gqc_cnq_coreetive_action_obeya_gqc.entity';

@Controller('gqc-cnq-coreetive-action-obeya-gqc')
export class GqcCnqCoreetiveActionObeyaGqcController {
  constructor(private readonly gqcCnqCoreetiveActionObeyaGqcService: GqcCnqCoreetiveActionObeyaGqcService) {}

  @Post()
  create(@Body() gqccnqcoreetiveactionobeyagqc: GqcCnqCoreetiveActionObeyaGqc) {
    return this.gqcCnqCoreetiveActionObeyaGqcService.create(gqccnqcoreetiveactionobeyagqc);
  }

  @Get()
  findAll() {
    return this.gqcCnqCoreetiveActionObeyaGqcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gqcCnqCoreetiveActionObeyaGqcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGqcCnqCoreetiveActionObeyaGqcDto: UpdateGqcCnqCoreetiveActionObeyaGqcDto) {
    return this.gqcCnqCoreetiveActionObeyaGqcService.update(+id, updateGqcCnqCoreetiveActionObeyaGqcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gqcCnqCoreetiveActionObeyaGqcService.remove(+id);
  }
}
