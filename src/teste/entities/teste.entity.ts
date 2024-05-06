import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Teste {
  @PrimaryColumn()
  ID_Ação: number;

  @Column()
  'Acoes compradas': number;

  @Column()
  'Preco de Compra': number;

  @Column()
  Investimento: number;

  @Column()
  'Preco Atual': number;

  @Column()
  'Valor Vendido': number;

  @Column()
  Lucro: number;
}
