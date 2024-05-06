import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class GqcSecSil {
  @PrimaryColumn()
  id_SC: number;

  @Column()
  STR_PROJETO: number;

  @Column()
  STR_NAME_CLIE: number;

  @Column()
  NUM_RESP_PT_TOT_QUANT_ATNG: number;

  @Column()
  STR_PROG: number;

  @Column()
  DATA_REF: Date;

  @Column()
  CUSTOMER: number;

  @Column()
  TOPQSTM: number;

  @Column()
  RESRESP: number;
}
