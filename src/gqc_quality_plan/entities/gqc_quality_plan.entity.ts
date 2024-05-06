import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class GqcQualityPlan {
  @PrimaryColumn()
  id_QP: number;

  @Column()
  HANGAR: string;

  @Column()
  RESPONSAVEL: string;

  @Column()
  EPIC: string;

  @Column()
  CELULA: number;

  @Column()
  DESC_PROCESSO: string;

  @Column()
  CRITERIO: string;

  @Column()
  DATA_INICIO: Date;

  @Column()
  DATA_FIM: Date;

  @Column()
  DIA: number;
}
