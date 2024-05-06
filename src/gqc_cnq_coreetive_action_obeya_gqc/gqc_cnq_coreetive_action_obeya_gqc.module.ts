import { Module } from '@nestjs/common';
import { GqcCnqCoreetiveActionObeyaGqcService } from './gqc_cnq_coreetive_action_obeya_gqc.service';
import { GqcCnqCoreetiveActionObeyaGqcController } from './gqc_cnq_coreetive_action_obeya_gqc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GqcCnqCoreetiveActionObeyaGqc } from './entities/gqc_cnq_coreetive_action_obeya_gqc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GqcCnqCoreetiveActionObeyaGqc])],
  controllers: [GqcCnqCoreetiveActionObeyaGqcController],
  providers: [GqcCnqCoreetiveActionObeyaGqcService],
})
export class GqcCnqCoreetiveActionObeyaGqcModule {}
