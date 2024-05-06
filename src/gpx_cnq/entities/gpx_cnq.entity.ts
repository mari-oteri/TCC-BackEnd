import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class GpxCnq {
  @PrimaryColumn()
  id_cnq: number;

  @Column()
  Cost_Type: string;

  @Column()
  Month: number;

  @Column()
  Year: number;

  @Column()
  Amount: number;

  @Column()
  NC_Number: string;

  @Column()
  Aplic: string;

  @Column()
  Current_WC_Desc: string;

  @Column()
  Origin_WC_Desc: string;

  @Column()
  Program: string;

  @Column()
  Origin_Directory: string;
}
