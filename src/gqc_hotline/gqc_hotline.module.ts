import { Module } from '@nestjs/common';
import { GqcHotlineService } from './gqc_hotline.service';
import { GqcHotlineController } from './gqc_hotline.controller';
import { GqcHotline } from './entities/gqc_hotline.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GqcHotline])],
  controllers: [GqcHotlineController],
  providers: [GqcHotlineService],
})
export class GqcHotlineModule {}
