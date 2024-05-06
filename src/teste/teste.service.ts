import { Injectable } from '@nestjs/common';
import { UpdateTesteDto } from './dto/update-teste.dto';
import { Repository } from 'typeorm';
import { Teste } from './entities/teste.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class TesteService {
  constructor(
    @InjectRepository(Teste) private testRepository: Repository<Teste>,
  ) {}

  async create(teste: Teste) {
    console.log(teste);
    return await this.testRepository.save(teste);
  }

  async findAll(): Promise<Teste[]> {
    return await this.testRepository.find();
  }

  async findOne(id: number) {
    return `This action return a record with id:${id}`;
  }

  update(id: number, updateTesteDto: UpdateTesteDto) {
    return `This action updates a #${id} teste`;
  }

  remove(id: number) {
    return `This action removes a #${id} teste`;
  }
}
