import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class GqcAdditionalFlight {
  @PrimaryColumn()
  id_AF: number;

  @Column()
  Date: Date;

  @Column()
  'SCHEDULED FLIGHTS': number;

  @Column()
  'ADDITIONAl FLIGHTS': number;

  @Column()
  'ADD PER TOTAL FLIGHTS': number;

  @Column()
  CLASSIFICATION: string;

  @Column()
  PROGRAM: string;
}
