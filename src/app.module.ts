// import { env as _env } from 'process';
require('dotenv').config()
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteModule } from './teste/teste.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teste } from './teste/entities/teste.entity';
import { DataSource } from 'typeorm';
import { GpxCnqModule } from './gpx_cnq/gpx_cnq.module';
import { GqcAdditionalFlightModule } from './gqc_additional_flight/gqc_additional_flight.module';
import { GqcCnqCoreetiveActionObeyaGqcModule } from './gqc_cnq_coreetive_action_obeya_gqc/gqc_cnq_coreetive_action_obeya_gqc.module';
import { GqcConformidadesModule } from './gqc_conformidades/gqc_conformidades.module';
import { GqcHealthMonitoringModule } from './gqc_health_monitoring/gqc_health_monitoring.module';
import { GqcHotlineModule } from './gqc_hotline/gqc_hotline.module';
import { GqcQualityPlanModule } from './gqc_quality_plan/gqc_quality_plan.module';
import { GqcSecSilModule } from './gqc_sec_sil/gqc_sec_sil.module';
import { GpxCnq } from './gpx_cnq/entities/gpx_cnq.entity';
import { GqcAdditionalFlight } from './gqc_additional_flight/entities/gqc_additional_flight.entity';
import { GqcCnqCoreetiveActionObeyaGqc } from './gqc_cnq_coreetive_action_obeya_gqc/entities/gqc_cnq_coreetive_action_obeya_gqc.entity';
import { GqcConformidades } from './gqc_conformidades/entities/gqc_conformidade.entity';
import { GqcHealthMonitoring } from './gqc_health_monitoring/entities/gqc_health_monitoring.entity';
import { GqcHotline } from './gqc_hotline/entities/gqc_hotline.entity';
import { GqcQualityPlan } from './gqc_quality_plan/entities/gqc_quality_plan.entity';
import { GqcSecSil } from './gqc_sec_sil/entities/gqc_sec_sil.entity';
// import process from 'process';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: parseInt (process.env.PORT_DB),
      username: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE,
      entities: [
        Teste,
        GpxCnq,
        GqcAdditionalFlight,
        GqcCnqCoreetiveActionObeyaGqc,
        GqcConformidades,
        GqcHealthMonitoring,
        GqcHotline,
        GqcQualityPlan,
        GqcSecSil,
      ],
      synchronize: false,
    }),
    TesteModule,
    GpxCnqModule,
    GqcAdditionalFlightModule,
    GqcCnqCoreetiveActionObeyaGqcModule,
    GqcConformidadesModule,
    GqcHealthMonitoringModule,
    GqcHotlineModule,
    GqcQualityPlanModule,
    GqcSecSilModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource) {}
}
