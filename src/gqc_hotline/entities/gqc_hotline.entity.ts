import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class GqcHotline {
  @PrimaryColumn()
  id_HL: number;

  @Column()
  ITEM: string;

  @Column()
  'INTERRUPTION TYPE': string;

  @Column()
  TOTAL_AGING: number;

  @Column()
  ISSUE_DESC: string;

  @Column()
  CUSTOMER: string;

  @Column()
  ACFT_MSN: string;

  @Column()
  ACFT_AGING: number;

  @Column()
  VOC: string;

  @Column()
  PROGRAM: string;

  @Column()
  TECNOLOGIA: string;

  @Column()
  COMPONENT_PREMATURE_REMOVAL: string;

  @Column()
  HANGAR: string;

  @Column()
  DATE: Date;
}
