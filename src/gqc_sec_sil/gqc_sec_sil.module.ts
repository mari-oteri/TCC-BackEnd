import { Module } from '@nestjs/common';
import { GqcSecSilService } from './gqc_sec_sil.service';
import { GqcSecSilController } from './gqc_sec_sil.controller';
import { GqcSecSil } from './entities/gqc_sec_sil.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GqcSecSil])],
  controllers: [GqcSecSilController],
  providers: [GqcSecSilService],
})
export class GqcSecSilModule {}
