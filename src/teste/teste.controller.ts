import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TesteService } from './teste.service';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { Request } from 'express';
import { Teste } from './entities/teste.entity';

@Controller('teste')
export class TesteController {
  constructor(private testeService: TesteService) {}

  @Post()
  create(@Body() teste: Teste) {
    return this.testeService.create(teste);
  }

  @Get()
  findAll() {
    return this.testeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesteDto: UpdateTesteDto) {
    return this.testeService.update(+id, updateTesteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testeService.remove(+id);
  }
}
