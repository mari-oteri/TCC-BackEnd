import { Module } from '@nestjs/common';
import { GqcAdditionalFlightService } from './gqc_additional_flight.service';
import { GqcAdditionalFlightController } from './gqc_additional_flight.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GqcAdditionalFlight } from './entities/gqc_additional_flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GqcAdditionalFlight])],
  controllers: [GqcAdditionalFlightController],
  providers: [GqcAdditionalFlightService],
})
export class GqcAdditionalFlightModule {}
