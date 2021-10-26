import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.model';

@Entity()
export class Device {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 250,
  })
  name: string;

  @ManyToOne(() => Category, (category) => category.devices)
  @JoinColumn({
    name: 'category_id',
  })
  category: Category;
}
