import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { FinancialRecord } from '../interfaces/user.interface';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  creditScore: number;

  @Column('json')
  financialHistory: FinancialRecord[];
}
