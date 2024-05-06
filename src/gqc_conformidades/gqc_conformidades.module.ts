import { Module } from '@nestjs/common';
import { GqcConformidadesService } from './gqc_conformidades.service';
import { GqcConformidadesController } from './gqc_conformidades.controller';
import { GqcConformidades } from './entities/gqc_conformidade.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GqcConformidades])],
  controllers: [GqcConformidadesController],
  providers: [GqcConformidadesService],
})
export class GqcConformidadesModule {}
