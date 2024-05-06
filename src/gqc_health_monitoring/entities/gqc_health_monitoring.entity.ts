import { Entity, Column, PrimaryColumn } from 'typeorm';

export class GqcHealthMonitoring {
  @PrimaryColumn()
  id_HM: number;

  @Column()
  Date: Date;

  @Column()
  Confirmed_Failure: number;

  @Column()
  'Product Characteristic': number;

  @Column()
  'Failures per Ac': number;

  @Column()
  Acft: number;

  @Column()
  Analisys: number;
}
