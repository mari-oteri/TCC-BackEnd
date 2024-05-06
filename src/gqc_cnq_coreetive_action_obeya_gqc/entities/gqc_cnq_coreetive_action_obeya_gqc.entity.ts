import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class GqcCnqCoreetiveActionObeyaGqc {
  @PrimaryColumn()
  id_CCI: number;

  @Column()
  Nota: string;

  @Column()
  'Item Codificação': string;

  @Column()
  'Doc Ref Nº': string;

  @Column()
  'Doc Ref SGL': string;

  @Column()
  'Desc CT atual': string;

  @Column()
  'Desc CT origem': string;

  @Column()
  LInstAfet: number;

  @Column()
  'Descrição do Material': string;

  @Column()
  'Descrição do Problema': string;

  @Column()
  Agrupamento: string;

  @Column()
  Repetibilidade: number;

  @Column()
  CNO: string;

  @Column()
  'Doc AC': string;

  @Column()
  'Ação corretiva': string;

  @Column()
  Área: string;

  @Column()
  HH: number;

  @Column()
  Índice: number;

  @Column()
  Pontuação: number;

  @Column()
  Aging: number;

  @Column()
  Tecnologia: string;
}
